import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Square, ChevronDown, ChevronUp } from 'lucide-react';
import { RhythmGrid } from './RhythmGrid';
import { playRhythm, stopRhythm } from '../utils/rhythmAudio';

export function RhythmPanel({ region, onClose, autoPlayToken, togglePlayToken, onPlaybackFinished, isWorldTour = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [bpm, setBpm] = useState(100);
  const [showStory, setShowStory] = useState(true);

  const startTimerRef = useRef(null);
  const finishTimerRef = useRef(null);

  const stopCurrentRhythm = () => {
    if (startTimerRef.current) { clearTimeout(startTimerRef.current); startTimerRef.current = null; }
    if (finishTimerRef.current) { clearTimeout(finishTimerRef.current); finishTimerRef.current = null; }
    stopRhythm();
    setIsPlaying(false);
    setCurrentStep(-1);
  };

  useEffect(() => {
    stopCurrentRhythm();
    setShowStory(true);
    if (region) {
      setBpm(region.defaultBpm || 100);
    }
  }, [region?.id]);

  useEffect(() => {
    return () => { stopCurrentRhythm(); };
  }, []);

  // Listen for togglePlayToken (Space key)
  useEffect(() => {
    if (togglePlayToken) {
      handlePlayToggle();
    }
  }, [togglePlayToken]);

  // Calculate exact duration of 4 full pattern loops (in milliseconds)
  const getFourLoopsDurationMs = () => {
    if (!region || !region.tracks || region.tracks.length === 0) return 8000;
    const totalSteps = region.tracks[0].pattern.length;
    const sub = region.subdivision || 4;
    const currentBpm = bpm || region.defaultBpm || 100;

    // Step duration = 60 / (BPM * subdivision) seconds
    const stepSec = 60 / (currentBpm * sub);
    const oneLoopSec = totalSteps * stepSec;
    const fourLoopsSec = oneLoopSec * 4;

    return fourLoopsSec * 1000;
  };

  // Handle autoPlay on region selection / token update
  useEffect(() => {
    if (autoPlayToken && region) {
      stopCurrentRhythm();

      startTimerRef.current = setTimeout(() => {
        startRhythmPlay();
      }, 400);

      // ONLY finish after 4 loops if in World Tour mode!
      if (isWorldTour) {
        const durationMs = getFourLoopsDurationMs();

        finishTimerRef.current = setTimeout(() => {
          stopCurrentRhythm();
          if (onPlaybackFinished) onPlaybackFinished();
        }, durationMs + 500);
      }

      return () => {
        stopCurrentRhythm();
      };
    }
  }, [region?.id, autoPlayToken, isWorldTour]);

  // Parse time signature
  const parseTimeSignature = () => {
    if (!region?.timeSignature) return { beats: 4, unit: 4 };
    const parts = region.timeSignature.split('/');
    return { beats: parseInt(parts[0]), unit: parseInt(parts[1]) };
  };

  const startRhythmPlay = async () => {
    stopRhythm(); // Stop previous audio without wiping finishTimerRef!
    if (!region || !region.tracks) return;
    setIsPlaying(true);

    const { beats } = parseTimeSignature();

    await playRhythm(
      region.tracks,
      bpm,
      region.subdivision || 4,
      beats,
      (step) => setCurrentStep(step)
    );
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      stopCurrentRhythm();
    } else {
      startRhythmPlay();
    }
  };

  // When BPM changes during playback, restart
  useEffect(() => {
    if (isPlaying && region) {
      const { beats } = parseTimeSignature();
      stopRhythm();
      playRhythm(
        region.tracks,
        bpm,
        region.subdivision || 4,
        beats,
        (step) => setCurrentStep(step)
      );
    }
  }, [bpm]);

  return (
    <AnimatePresence>
      {region && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute top-0 right-0 w-full md:w-[460px] h-full bg-slate-900/85 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col z-10"
        >
          {/* ── Header ── */}
          <div className="flex justify-between items-center px-5 py-3 border-b border-white/10 shrink-0">
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
                <p className="text-[11px] text-amber-400 font-bold">{region.region} — {region.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white shrink-0 ml-2">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* ── Controls: Time Sig + BPM + Play ── */}
          <div className="flex items-center gap-2 px-5 py-2.5 border-b border-white/5 shrink-0 bg-slate-800/40">
            {/* Time Signature Badge */}
            <div className="flex flex-col items-center px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg shrink-0">
              <span className="text-[9px] font-bold text-amber-500/70 uppercase tracking-wider">박자</span>
              <span className="text-base font-black text-amber-400 leading-tight">{region.timeSignature}</span>
            </div>
            <div className="w-px h-7 bg-white/10" />
            <div className="flex flex-col flex-1 px-1">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">BPM</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">{bpm}</span>
              </div>
              <input type="range" min="40" max="200" step="5" value={bpm}
                onChange={(e) => setBpm(parseInt(e.target.value))}
                className="w-full accent-amber-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="w-px h-7 bg-white/10" />
            <button onClick={handlePlayToggle}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm transition-all shrink-0 shadow
                ${isPlaying
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30'
                  : 'bg-amber-500 text-slate-900 border border-amber-400 hover:bg-amber-400 shadow-amber-500/25'}`}>
              {isPlaying ? <><Square className="w-3.5 h-3.5" fill="currentColor" />정지</> : <><Play className="w-3.5 h-3.5" fill="currentColor" />재생</>}
            </button>
          </div>

          {/* ── Rhythm Grid ── */}
          <div className="px-5 pt-4 pb-3 shrink-0">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-white/10 shadow-inner">
              <RhythmGrid
                tracks={region.tracks}
                subdivision={region.subdivision || 4}
                beatsPerMeasure={parseTimeSignature().beats}
                currentStep={currentStep}
              />
            </div>
          </div>

          {/* ── Legend ── */}
          <div className="px-5 pb-2 shrink-0">
            <div className="flex items-center justify-center gap-4 text-[9px] text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500 opacity-30" /> 고스트
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 opacity-70" /> 보통
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-slate-300 shadow-[0_0_6px_rgba(255,255,255,0.3)]" /> 강세
              </span>
            </div>
          </div>

          {/* ── Story (collapsible) ── */}
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
