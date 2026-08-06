import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Square, RotateCcw, Sparkles, Volume2, Check } from 'lucide-react';
import { playRhythm, stopRhythm } from '../utils/rhythmAudio';

// 24 Steps for 12/8 (4 Beats x 6 Sub-steps)
const INITIAL_24_KICK  = [3,0,0,0,0,0, 3,0,0,0,0,0, 3,0,0,0,0,0, 3,0,0,0,0,0];
const INITIAL_24_SNARE = [3,0,0,1,3,0, 0,0,2,1,1,1, 0,0,0,1,3,0, 0,0,2,0,0,0];
const INITIAL_24_BELL  = [3,0,0,0,0,0, 2,0,0,0,0,0, 3,0,0,0,0,0, 2,0,0,0,0,0];

export function RhythmMakerModal({ isOpen, onClose, onApplyCustomRhythm }) {
  const [kickPattern, setKickPattern] = useState(INITIAL_24_KICK);
  const [snarePattern, setSnarePattern] = useState(INITIAL_24_SNARE);
  const [bellPattern, setBellPattern] = useState(INITIAL_24_BELL);

  const [bpm, setBpm] = useState(70);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [rhythmName, setRhythmName] = useState('커스텀 12/8 굿거리 리듬');

  useEffect(() => {
    return () => {
      stopRhythm();
    };
  }, []);

  if (!isOpen) return null;

  const handleCellClick = (trackSetter, currentPattern, idx) => {
    const nextVal = (currentPattern[idx] + 1) % 4; // Cycle 0 -> 1 -> 2 -> 3 -> 0
    const newPattern = [...currentPattern];
    newPattern[idx] = nextVal;
    trackSetter(newPattern);
  };

  const handlePlayToggle = async () => {
    if (isPlaying) {
      stopRhythm();
      setIsPlaying(false);
      setCurrentStep(-1);
      return;
    }

    setIsPlaying(true);
    const customTracks = [
      { name: 'Kick', pattern: kickPattern },
      { name: 'Snare', pattern: snarePattern },
      { name: 'Bell', pattern: bellPattern }
    ];

    await playRhythm(
      customTracks,
      bpm,
      4, // 24 steps = 6 x 4
      4,
      (step) => setCurrentStep(step)
    );
  };

  const handleClear = () => {
    stopRhythm();
    setIsPlaying(false);
    setCurrentStep(-1);
    setKickPattern(Array(24).fill(0));
    setSnarePattern(Array(24).fill(0));
    setBellPattern(Array(24).fill(0));
  };

  const handleLoadPreset1 = () => {
    stopRhythm();
    setIsPlaying(false);
    setCurrentStep(-1);
    setKickPattern(INITIAL_24_KICK);
    setSnarePattern(INITIAL_24_SNARE);
    setBellPattern(INITIAL_24_BELL);
  };

  const handleApply = () => {
    stopRhythm();
    setIsPlaying(false);
    const customRegion = {
      id: 'custom_user_rhythm_' + Date.now(),
      title: rhythmName,
      description: '사용자가 24칸 에디터로 제작한 12/8 박자 커스텀 리듬',
      timeSignature: '12/8',
      subdivision: 4,
      defaultBpm: bpm,
      story: '사용자가 직접 24칸 스튜디오 비트 에디터로 구성한 나만의 커스텀 리듬입니다.',
      tracks: [
        { name: 'Kick', pattern: kickPattern },
        { name: 'Snare', pattern: snarePattern },
        { name: 'Bell', pattern: bellPattern }
      ]
    };
    if (onApplyCustomRhythm) onApplyCustomRhythm(customRegion);
    onClose();
  };

  const tracks = [
    { name: 'Kick (궁편/쿵)', icon: '🥁', pattern: kickPattern, setter: setKickPattern, color: 'emerald' },
    { name: 'Snare (채편/덕·기덕)', icon: '🪘', pattern: snarePattern, setter: setSnarePattern, color: 'amber' },
    { name: 'Bell (꽹과리/징)', icon: '🔔', pattern: bellPattern, setter: setBellPattern, color: 'cyan' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl bg-slate-900/95 border border-cyan-500/30 rounded-3xl p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-2xl border border-cyan-500/30">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  12/8 박자 24칸 커스텀 리듬 에디터
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  12/8 박자 (4대박 x 6소박 = 총 24칸) 리듬을 직접 클릭하여 나만의 정교한 패턴을 만들어보세요.
                </p>
              </div>
            </div>
            <button
              onClick={() => { stopRhythm(); onClose(); }}
              className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Preset & BPM Toolbar */}
          <div className="py-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={handleLoadPreset1}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 rounded-xl text-xs font-bold transition-all"
              >
                🇰🇷 정통 굿거리 불러오기
              </button>
              <button
                onClick={handleClear}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-500/30 rounded-xl text-xs font-bold flex items-center gap-1 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                전체 비우기
              </button>
            </div>

            {/* BPM Slider & Title */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-xs font-bold text-slate-300">속도(BPM):</span>
                <input
                  type="range"
                  min="60"
                  max="160"
                  value={bpm}
                  onChange={(e) => setBpm(parseInt(e.target.value))}
                  className="w-24 accent-cyan-400 cursor-pointer"
                />
                <span className="text-xs font-mono font-bold text-cyan-400 w-8">{bpm}</span>
              </div>
            </div>
          </div>

          {/* 24-Step Grid Area */}
          <div className="flex-1 overflow-x-auto py-2">
            <div className="min-w-[760px] space-y-4">
              {/* Beat Headers (4 Main Beats x 6 Sub-steps) */}
              <div className="grid grid-cols-[160px_1fr] items-center gap-3">
                <div className="text-xs font-bold text-slate-400 px-2">대박 / 소박</div>
                <div className="grid grid-cols-24 gap-1 text-center">
                  {[1, 2, 3, 4].map((beatNum) => (
                    <div
                      key={beatNum}
                      className="col-span-6 bg-slate-950/70 border border-white/10 rounded-lg py-1 text-[11px] font-bold text-cyan-400"
                    >
                      {beatNum}대박
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-step numbers (0 to 23) */}
              <div className="grid grid-cols-[160px_1fr] items-center gap-3">
                <div />
                <div className="grid grid-cols-24 gap-1 text-center font-mono text-[10px] text-slate-500">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className={i % 6 === 0 ? 'text-cyan-400 font-bold' : ''}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Track Rows */}
              {tracks.map((track) => (
                <div key={track.name} className="grid grid-cols-[160px_1fr] items-center gap-3">
                  {/* Track Label */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-950/70 border border-white/10 rounded-xl">
                    <span className="text-base">{track.icon}</span>
                    <span className="text-xs font-bold text-slate-200">{track.name}</span>
                  </div>

                  {/* 24 Grid Buttons */}
                  <div className="grid grid-cols-24 gap-1 relative">
                    {track.pattern.map((val, idx) => {
                      const isCurrentStep = currentStep === idx;
                      const isMainBeatStart = idx % 6 === 0;

                      return (
                        <button
                          key={idx}
                          onClick={() => handleCellClick(track.setter, track.pattern, idx)}
                          className={`h-12 rounded-lg flex flex-col items-center justify-center transition-all border relative overflow-hidden
                            ${isMainBeatStart ? 'border-l-2 border-l-cyan-400/80' : 'border-white/10'}
                            ${isCurrentStep ? 'ring-2 ring-cyan-400 scale-105 z-10' : ''}
                            ${
                              val === 3
                                ? 'bg-amber-500 border-amber-300 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.6)] font-black'
                                : val === 2
                                ? 'bg-emerald-500/80 border-emerald-400 text-white font-bold'
                                : val === 1
                                ? 'bg-emerald-950/60 border-emerald-700/50 text-emerald-300 text-xs'
                                : 'bg-slate-950/80 hover:bg-slate-800/80 text-slate-600'
                            }`}
                        >
                          <span className="text-[10px] leading-none">
                            {val === 3 ? '★ 강' : val === 2 ? '중' : val === 1 ? '약' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Help Legend & Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 shrink-0">
            {/* Intensity Legend */}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="font-bold">강도 설명:</span>
              <span className="inline-flex items-center gap-1"><span className="w-3 h-3 bg-slate-950 border border-white/20 rounded" /> 빈칸(0)</span>
              <span className="inline-flex items-center gap-1"><span className="w-3 h-3 bg-emerald-950 border border-emerald-700 rounded" /> 약(1)</span>
              <span className="inline-flex items-center gap-1"><span className="w-3 h-3 bg-emerald-500 rounded" /> 보통(2)</span>
              <span className="inline-flex items-center gap-1"><span className="w-3 h-3 bg-amber-500 rounded" /> 강세(3)</span>
            </div>

            {/* Play & Apply Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayToggle}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg transition-all border
                  ${isPlaying
                    ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 hover:bg-rose-500/30'
                    : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/30'}`}
              >
                {isPlaying ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? '실시간 연주 정지' : '실시간 연주 들려주기'}
              </button>

              <button
                onClick={handleApply}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all"
              >
                <Check className="w-4 h-4" />
                이 리듬으로 지구본 연주하기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
