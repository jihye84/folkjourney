import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Square, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { StaffNotation } from './StaffNotation';
import { PianoKeyboard } from './PianoKeyboard';
import { KeySelector } from './KeySelector';
import { playChord, playProgression, stopAudio } from '../utils/audio';
import { getChordNotes, getChordName } from '../utils/theory';

export function SidePanel({ region, onClose, autoPlayToken, togglePlayToken, onPlaybackFinished }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChordIdx, setActiveChordIdx] = useState(-1);
  const [playingSingle, setPlayingSingle] = useState(-1);
  const [selectedKey, setSelectedKey] = useState('C');
  const [bpm, setBpm] = useState(90);
  const [showStory, setShowStory] = useState(true);
  const [playStyle, setPlayStyle] = useState('block');

  const playbackTimerRef = useRef(null);

  const stopCurrentPlayback = () => {
    if (playbackTimerRef.current) {
      clearTimeout(playbackTimerRef.current);
      playbackTimerRef.current = null;
    }
    stopAudio();
    setIsPlaying(false);
    setActiveChordIdx(-1);
    setPlayingSingle(-1);
  };

  useEffect(() => {
    stopCurrentPlayback();
    setShowStory(true);
    if (region) {
      setBpm(region.defaultBpm || 90);
      setSelectedKey(region.defaultKey || 'C');
    }
  }, [region?.id]);

  useEffect(() => {
    return () => { stopCurrentPlayback(); };
  }, []);

  // Listen for togglePlayToken (Space key)
  useEffect(() => {
    if (togglePlayToken) {
      handlePlayAll();
    }
  }, [togglePlayToken]);

  // Handle autoPlay on region selection / token update
  useEffect(() => {
    if (autoPlayToken && region) {
      const timer = setTimeout(() => {
        startPlayAll();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [region?.id, autoPlayToken]);

  const getActiveNotes = () => {
    if (!region) return [];
    const idx = activeChordIdx >= 0 ? activeChordIdx : playingSingle >= 0 ? playingSingle : -1;
    if (idx < 0 || idx >= region.chords.length) return [];
    return getChordNotes(selectedKey, region.chords[idx].numeral);
  };

  const startPlayAll = async () => {
    stopCurrentPlayback(); // Ensure any prior playback & timers are cleared
    if (!region || !region.chords) return;

    setIsPlaying(true);
    setActiveChordIdx(0);

    const chordsToPlay = region.chords.map(c => ({
      ...c, notes: getChordNotes(selectedKey, c.numeral)
    }));

    const totalDuration = await playProgression(
      chordsToPlay, (idx) => setActiveChordIdx(idx), bpm, playStyle
    );

    playbackTimerRef.current = setTimeout(() => {
      setIsPlaying(false);
      setActiveChordIdx(-1);
      playbackTimerRef.current = null;
      if (onPlaybackFinished) onPlaybackFinished();
    }, totalDuration * 1000);
  };

  const handlePlayAll = () => {
    if (isPlaying) {
      stopCurrentPlayback();
    } else {
      startPlayAll();
    }
  };

  const handlePlaySingleChord = async (chord, idx) => {
    if (isPlaying) return;
    setPlayingSingle(idx);
    await playChord(getChordNotes(selectedKey, chord.numeral));
    setTimeout(() => setPlayingSingle(-1), 1000);
  };

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const motionProps = isMobile
    ? { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } }
    : { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } };

  return (
    <AnimatePresence>
      {region && (
        <motion.div
          {...motionProps}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="fixed bottom-0 left-0 right-0 top-auto w-full h-[52vh] md:h-full md:top-0 md:right-0 md:left-auto md:w-[460px] md:fixed bg-slate-900/95 md:bg-slate-900/85 backdrop-blur-2xl border-t md:border-t-0 md:border-l border-white/20 shadow-2xl flex flex-col z-30 rounded-t-3xl md:rounded-none overflow-hidden"
        >
          {/* Mobile Handle Indicator */}
          <div className="w-12 h-1 bg-white/20 rounded-full mx-auto my-1.5 md:hidden shrink-0" />

          {/* ── Header ── */}
          <div className="flex justify-between items-center px-4 py-2.5 md:px-5 md:py-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-8 shrink-0 flex items-center">
                <img
                  src={`${import.meta.env.BASE_URL}flags/${region.flag}.svg`}
                  alt={region.region}
                  className="h-full w-auto rounded border border-white/20 shadow"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-black text-white leading-tight">{region.title}</h2>
                <p className="text-[11px] text-emerald-400 font-bold">{region.region} — {region.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white shrink-0 ml-2">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* ── Controls: Key + BPM + Style + Play ── */}
          <div className="flex items-center gap-2 px-5 py-2.5 border-b border-white/5 shrink-0 bg-slate-800/40">
            <KeySelector selectedKey={selectedKey} onKeyChange={setSelectedKey} />
            <div className="w-px h-7 bg-white/10" />
            <div className="flex flex-col flex-1 px-1">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">BPM</span>
                <span className="text-[10px] font-mono font-bold text-emerald-400">{bpm}</span>
              </div>
              <input type="range" min="40" max="180" step="5" value={bpm}
                onChange={(e) => setBpm(parseInt(e.target.value))}
                className="w-full accent-emerald-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="w-px h-7 bg-white/10" />
            {/* Play Style Toggle */}
            <div className="flex rounded-lg overflow-hidden border border-white/10 shrink-0">
              <button
                onClick={() => setPlayStyle('block')}
                className={`px-2 py-1.5 text-[9px] font-bold transition-all ${
                  playStyle === 'block'
                    ? 'bg-emerald-500/20 text-emerald-400 border-r border-emerald-500/30'
                    : 'bg-transparent text-slate-500 hover:text-slate-300 border-r border-white/10'
                }`}
              >Block</button>
              <button
                onClick={() => setPlayStyle('arpeggio')}
                className={`px-2 py-1.5 text-[9px] font-bold transition-all ${
                  playStyle === 'arpeggio'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-transparent text-slate-500 hover:text-slate-300'
                }`}
              >Arp</button>
            </div>
            <div className="w-px h-7 bg-white/10" />
            <button onClick={handlePlayAll}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm transition-all shrink-0 shadow
                ${isPlaying
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30'
                  : 'bg-emerald-500 text-slate-900 border border-emerald-400 hover:bg-emerald-400 shadow-emerald-500/25'}`}>
              {isPlaying ? <><Square className="w-3.5 h-3.5" fill="currentColor" />정지</> : <><Play className="w-3.5 h-3.5" fill="currentColor" />재생</>}
            </button>
          </div>

          {/* ── Chord Cards (Timeline) ── */}
          <div className="px-5 pt-3 pb-2 shrink-0">
            <div className="flex w-full gap-1.5 overflow-x-auto pb-1">
              {region.chords.map((chord, idx) => {
                const isActive = activeChordIdx === idx;
                const isSingle = playingSingle === idx;
                return (
                  <motion.button key={idx}
                    whileHover={{ scale: isPlaying ? 1 : 1.04, y: isPlaying ? 0 : -2 }}
                    whileTap={{ scale: isPlaying ? 1 : 0.96 }}
                    onClick={() => handlePlaySingleChord(chord, idx)}
                    className={`flex-1 min-w-[52px] relative rounded-xl flex flex-col items-center justify-start pt-2 pb-1.5 px-0.5 transition-all duration-300 border-2 min-h-[100px] overflow-hidden group
                      ${isActive ? 'bg-slate-900 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500/20 z-10'
                        : isSingle ? 'bg-slate-900 border-emerald-400 shadow-lg ring-1 ring-emerald-400/30'
                        : 'bg-slate-800/80 border-slate-700/50 hover:border-slate-500'}
                      ${isPlaying ? 'cursor-default' : 'cursor-pointer'}`}>
                    {isActive && <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />}
                    <div className="px-1.5 py-px rounded text-[8px] font-bold border border-slate-700 mb-1 bg-slate-900 text-slate-400">
                      {chord.role || chord.numeral}
                    </div>
                    <span className={`text-lg font-black leading-tight ${isActive || isSingle ? 'text-emerald-400' : 'text-slate-200'}`}>
                      {chord.numeral}
                    </span>
                    <span className="text-[10px] font-bold text-amber-500 leading-tight">
                      {getChordName(selectedKey, chord.numeral)}
                    </span>
                    <div className="w-full h-px bg-slate-700 my-0.5" />
                    <div className="scale-[0.6] transform origin-top">
                      <StaffNotation notes={getChordNotes(selectedKey, chord.numeral)} />
                    </div>
                    {!isPlaying && !isActive && !isSingle && (
                      <div className="absolute inset-0 group-hover:bg-emerald-500/10 rounded-xl flex items-center justify-center transition-colors">
                        <Volume2 className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                    <AnimatePresence>
                      {(isActive || isSingle) && (
                        <motion.div key="pulse" initial={{ scale: 0.9, opacity: 0.8 }} animate={{ scale: 1.1, opacity: 0 }}
                          exit={{ opacity: 0, transition: { duration: 0.1 } }}
                          transition={{ duration: (60 / bpm) * 4, repeat: isActive ? Infinity : 0, ease: "easeOut" }}
                          className="absolute inset-0 border-3 border-emerald-400 rounded-xl pointer-events-none" />
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ── Piano Keyboard ── */}
          <div className="px-5 pb-2 shrink-0">
            <div className="bg-slate-950 rounded-xl border border-white/10 p-2 shadow-inner overflow-hidden">
              <PianoKeyboard activeNotes={getActiveNotes()} />
            </div>
          </div>

          {/* ── Story (collapsible, fills remaining space) ── */}
          <div className="flex-1 min-h-0 px-5 pb-3 flex flex-col">
            <button onClick={() => setShowStory(!showStory)}
              className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 hover:text-slate-200 transition-colors py-1.5 w-fit">
              {showStory ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              문화적 배경 이야기
            </button>
            <AnimatePresence>
              {showStory && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden flex-1 min-h-0"
                >
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 overflow-y-auto max-h-[180px]">
                    <p className="text-slate-400 text-[12px] leading-relaxed">{region.story}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
