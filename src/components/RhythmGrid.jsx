import React from 'react';
import { motion } from 'framer-motion';

/**
 * RhythmGrid — visualizes rhythm patterns as a beat grid.
 * Each track is a row. Each cell represents a subdivision.
 * Cell visual varies by velocity: 0=empty, 1=ghost, 2=normal, 3=accent.
 * Current step is highlighted during playback.
 */
export function RhythmGrid({ tracks, subdivision, beatsPerMeasure, currentStep = -1 }) {
  if (!tracks || tracks.length === 0) return null;

  const totalSteps = tracks[0].pattern.length;

  // Calculate beat boundaries for grid lines
  const stepsPerBeat = subdivision;

  // Cell size config
  const cellSize = {
    0: { size: 0, opacity: 0 },
    1: { size: 5, opacity: 0.3 },
    2: { size: 8, opacity: 0.7 },
    3: { size: 11, opacity: 1.0 },
  };

  // Track label colors
  const trackColors = {
    'Kick': 'text-rose-400',
    'Snare': 'text-sky-400',
    'HiHat': 'text-yellow-400',
    'Bell': 'text-amber-400',
    'Clave': 'text-purple-400',
    'Shaker': 'text-lime-400',
    'Tom': 'text-orange-400',
  };

  const dotColors = {
    'Kick': { normal: 'bg-rose-400', glow: 'shadow-rose-500/60' },
    'Snare': { normal: 'bg-sky-400', glow: 'shadow-sky-500/60' },
    'HiHat': { normal: 'bg-yellow-400', glow: 'shadow-yellow-500/60' },
    'Bell': { normal: 'bg-amber-400', glow: 'shadow-amber-500/60' },
    'Clave': { normal: 'bg-purple-400', glow: 'shadow-purple-500/60' },
    'Shaker': { normal: 'bg-lime-400', glow: 'shadow-lime-500/60' },
    'Tom': { normal: 'bg-orange-400', glow: 'shadow-orange-500/60' },
  };

  return (
    <div className="w-full">
      {/* Beat numbers header */}
      <div className="flex mb-1">
        <div className="w-12 shrink-0" />
        <div className="flex flex-1">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const isBeatStart = i % stepsPerBeat === 0;
            const beatNum = Math.floor(i / stepsPerBeat) + 1;
            return (
              <div
                key={i}
                className={`flex-1 text-center text-[8px] font-mono font-bold
                  ${i === currentStep ? 'text-amber-400' : isBeatStart ? 'text-slate-400' : 'text-slate-700'}`}
              >
                {isBeatStart ? beatNum : '·'}
              </div>
            );
          })}
        </div>
      </div>

      {/* Track rows */}
      {tracks.map((track, trackIdx) => {
        const colors = dotColors[track.name] || dotColors['Snare'];
        const labelColor = trackColors[track.name] || 'text-slate-400';

        return (
          <div key={trackIdx} className="flex items-center mb-0.5">
            {/* Track label */}
            <div className={`w-12 shrink-0 text-[9px] font-bold ${labelColor} text-right pr-2 truncate`}>
              {track.name}
            </div>

            {/* Pattern cells */}
            <div className="flex flex-1 h-7">
              {track.pattern.map((vel, stepIdx) => {
                const isCurrent = stepIdx === currentStep;
                const isBeatBoundary = stepIdx % stepsPerBeat === 0;
                const dot = cellSize[vel] || cellSize[0];

                return (
                  <div
                    key={stepIdx}
                    className={`flex-1 flex items-center justify-center relative transition-colors duration-75
                      ${isCurrent ? 'bg-amber-500/15' : ''}
                      ${isBeatBoundary ? 'border-l border-slate-700/50' : ''}`}
                  >
                    {vel > 0 && (
                      <motion.div
                        initial={false}
                        animate={isCurrent ? {
                          scale: [1, 1.4, 1],
                          transition: { duration: 0.15 }
                        } : { scale: 1 }}
                        className={`rounded-full ${colors.normal}
                          ${vel === 3 ? `shadow-[0_0_8px] ${colors.glow}` : ''}
                          ${isCurrent ? `shadow-[0_0_12px] ${colors.glow}` : ''}`}
                        style={{
                          width: `${dot.size}px`,
                          height: `${dot.size}px`,
                          opacity: isCurrent ? 1 : dot.opacity,
                        }}
                      />
                    )}

                    {/* Current step indicator line */}
                    {isCurrent && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-amber-400 rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
