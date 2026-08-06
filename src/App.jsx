import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GlobeMap } from './components/GlobeMap';
import { SidePanel } from './components/SidePanel';
import { RhythmPanel } from './components/RhythmPanel';
import { SearchList } from './components/SearchList';
import { ShortcutsModal } from './components/ShortcutsModal';
import { globeData } from './data/worldMapData';
import { Plane, Keyboard, SkipForward, X, Pause, Play } from 'lucide-react';

function App() {
  const [mode, setMode] = useState('chord'); // 'chord' | 'rhythm'
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [rhythmGlobeData, setRhythmGlobeData] = useState(null);

  // Keyboard & World Tour states
  const [togglePlayToken, setTogglePlayToken] = useState(0);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isWorldTour, setIsWorldTour] = useState(false);
  const [worldTourIndex, setWorldTourIndex] = useState(0);

  const worldTourTimerRef = useRef(null);

  // Lazy-load rhythm data
  const loadRhythmData = async () => {
    if (rhythmGlobeData) return rhythmGlobeData;
    const mod = await import('./data/rhythmMapData');
    setRhythmGlobeData(mod.rhythmGlobeData);
    return mod.rhythmGlobeData;
  };

  const currentData = mode === 'chord' ? globeData : (rhythmGlobeData || []);
  const accentColor = mode === 'chord' ? '#10b981' : '#f59e0b';

  const handleModeChange = async (newMode) => {
    if (isWorldTour) setIsWorldTour(false);
    setSelectedRegion(null);
    setMode(newMode);
    if (newMode === 'rhythm') {
      await loadRhythmData();
    }
  };

  const [autoPlayToken, setAutoPlayToken] = useState(0);

  const stopWorldTourTimers = () => {
    if (worldTourTimerRef.current) {
      clearTimeout(worldTourTimerRef.current);
      worldTourTimerRef.current = null;
    }
  };

  const triggerSelectRegionWithAutoPlay = (region) => {
    setSelectedRegion(region);
    setAutoPlayToken(Date.now());
  };

  const handleUserRegionSelect = useCallback((region) => {
    stopWorldTourTimers();
    setIsWorldTour(false);
    triggerSelectRegionWithAutoPlay(region);
  }, []);

  const handleClosePanel = useCallback(() => {
    stopWorldTourTimers();
    if (isWorldTour) setIsWorldTour(false);
    setSelectedRegion(null);
  }, [isWorldTour]);

  // World Tour Auto-Advancing
  const advanceWorldTour = useCallback(() => {
    if (!currentData || currentData.length === 0) return;
    stopWorldTourTimers();
    const nextIdx = Math.floor(Math.random() * currentData.length);
    setWorldTourIndex(nextIdx);
    triggerSelectRegionWithAutoPlay(currentData[nextIdx]);
  }, [currentData]);

  // Handle World Tour state changes
  useEffect(() => {
    if (isWorldTour) {
      if (currentData.length > 0) {
        advanceWorldTour();
      }
    } else {
      stopWorldTourTimers();
    }
  }, [isWorldTour]);

  // Callback when a country's playback completes 100%
  const handlePlaybackFinished = useCallback(() => {
    if (isWorldTour) {
      stopWorldTourTimers();
      // Wait 1.2s for user to digest, then fly to next country
      worldTourTimerRef.current = setTimeout(() => {
        advanceWorldTour();
      }, 1200);
    }
  }, [isWorldTour, advanceWorldTour]);

  // Callback when user manually stops playback (e.g. Stop button or Spacebar)
  const handlePlaybackStopped = useCallback(() => {
    stopWorldTourTimers();
    if (isWorldTour) {
      setIsWorldTour(false);
    }
  }, [isWorldTour]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

      if (e.key === ' ') {
        e.preventDefault();
        if (selectedRegion) {
          setTogglePlayToken(Date.now());
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (isShortcutsOpen) {
          setIsShortcutsOpen(false);
        } else if (isWorldTour) {
          setIsWorldTour(false);
          setSelectedRegion(null);
        } else if (selectedRegion) {
          setSelectedRegion(null);
        }
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        const nextMode = mode === 'chord' ? 'rhythm' : 'chord';
        handleModeChange(nextMode);
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsWorldTour(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRegion, isShortcutsOpen, isWorldTour, mode]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950 font-sans select-none">
      {/* Background Globe */}
      <GlobeMap
        data={currentData}
        onRegionSelect={handleUserRegionSelect}
        selectedRegionId={selectedRegion?.id}
        accentColor={accentColor}
      />

      {/* Floating Header + Controls with dark gradient scrim */}
      <div className="absolute top-0 left-0 w-full p-3.5 md:p-6 pb-12 md:pb-16 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none z-10 flex justify-between items-start">
        <div className="pointer-events-auto">
          {!isWorldTour && (
            <>
              <h1 className="font-['Outfit'] text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-lg tracking-tight">
                Folk Journey
              </h1>
              <p className="font-['Plus_Jakarta_Sans'] text-[10px] md:text-[11px] text-slate-400 font-semibold mt-0.5 tracking-wider uppercase drop-shadow">
                Explore the World through Music
              </p>
            </>
          )}

          {/* Mode Toggle & Control Buttons */}
          <div className={`flex items-center gap-1.5 md:gap-2 flex-wrap transition-all duration-300 ${isWorldTour ? 'mt-11 md:mt-14' : 'mt-2.5 md:mt-3'}`}>
            {/* Mode Toggle */}
            <div className="inline-flex bg-slate-900/95 backdrop-blur-xl border border-white/15 rounded-xl overflow-hidden shadow-xl p-0.5">
              <button
                onClick={() => handleModeChange('chord')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold rounded-lg transition-all font-['Plus_Jakarta_Sans']
                  ${mode === 'chord'
                    ? 'bg-emerald-500/25 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200'}`}
              >
                🎹 코드진행
              </button>
              <button
                onClick={() => handleModeChange('rhythm')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold rounded-lg transition-all font-['Plus_Jakarta_Sans']
                  ${mode === 'rhythm'
                    ? 'bg-amber-500/25 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)] border border-amber-500/40'
                    : 'text-slate-400 hover:text-slate-200'}`}
              >
                🥁 리듬
              </button>
            </div>

            {/* World Tour Button (Hidden during World Tour mode) */}
            {!isWorldTour && (
              <button
                onClick={() => setIsWorldTour(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 text-xs font-bold rounded-xl border border-cyan-500/30 bg-slate-900/90 text-cyan-300 hover:bg-cyan-500/15 backdrop-blur-xl transition-all shadow-xl font-['Plus_Jakarta_Sans']"
              >
                <Plane className="w-3.5 h-3.5 text-cyan-400" />
                <span>세계 여행</span>
              </button>
            )}

            {/* Shortcuts Guide Button */}
            <button
              onClick={() => setIsShortcutsOpen(true)}
              className="p-1.5 md:p-2 bg-slate-900/90 hover:bg-white/10 text-slate-400 hover:text-white rounded-xl border border-white/15 backdrop-blur-xl transition-colors shadow-xl"
              title="단축키 안내"
            >
              <Keyboard className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating World Tour Banner (Top Center) */}
      {isWorldTour && (
        <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto max-w-[90vw]">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 md:px-4 md:py-2 bg-slate-950/95 backdrop-blur-2xl border border-cyan-500/60 rounded-full shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-black text-cyan-300 tracking-wide font-['Outfit'] uppercase whitespace-nowrap">
                ✈️ 세계 여행 중
              </span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <button
              onClick={advanceWorldTour}
              className="flex items-center gap-1 px-2.5 py-1 bg-cyan-400 text-slate-950 hover:bg-cyan-300 rounded-lg text-xs font-black transition-all shadow-[0_0_10px_rgba(34,211,238,0.4)] whitespace-nowrap font-['Plus_Jakarta_Sans']"
            >
              <SkipForward className="w-3.5 h-3.5" fill="currentColor" />
              다음 국가
            </button>
            <button
              onClick={() => { setIsWorldTour(false); setSelectedRegion(null); }}
              className="p-1 text-slate-400 hover:text-rose-400 rounded-full transition-colors ml-0.5"
              title="세계 여행 종료"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Search List (bottom-left) */}
      <div className={`absolute left-3.5 md:left-6 z-20 pointer-events-none transition-all duration-500 ${selectedRegion ? 'bottom-[53vh] md:bottom-6' : 'bottom-4 md:bottom-6'}`}>
        <SearchList
          data={currentData}
          onSelect={handleUserRegionSelect}
          selectedId={selectedRegion?.id}
          accentColor={accentColor}
        />
      </div>

      {/* Side Panel — switches based on mode */}
      {mode === 'chord' ? (
        <SidePanel
          region={selectedRegion}
          onClose={handleClosePanel}
          autoPlayToken={autoPlayToken}
          togglePlayToken={togglePlayToken}
          onPlaybackFinished={handlePlaybackFinished}
          onPlaybackStopped={handlePlaybackStopped}
        />
      ) : (
        <RhythmPanel
          region={selectedRegion}
          onClose={handleClosePanel}
          autoPlayToken={autoPlayToken}
          togglePlayToken={togglePlayToken}
          onPlaybackFinished={handlePlaybackFinished}
          onPlaybackStopped={handlePlaybackStopped}
          isWorldTour={isWorldTour}
        />
      )}

      {/* Shortcuts Guide Modal */}
      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}

export default App;
