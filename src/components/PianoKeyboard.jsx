import React from 'react';

const KEYS = [
  { note: 'C', type: 'white' },
  { note: 'Db', type: 'black' },
  { note: 'D', type: 'white' },
  { note: 'Eb', type: 'black' },
  { note: 'E', type: 'white' },
  { note: 'F', type: 'white' },
  { note: 'Gb', type: 'black' },
  { note: 'G', type: 'white' },
  { note: 'Ab', type: 'black' },
  { note: 'A', type: 'white' },
  { note: 'Bb', type: 'black' },
  { note: 'B', type: 'white' },
];

// 2 octaves (C3-B4) — fits comfortably in the panel without scrolling
const PIANO_RANGE = [
  ...KEYS.map(k => ({ ...k, name: `${k.note}3` })),
  ...KEYS.map(k => ({ ...k, name: `${k.note}4` })),
];

const equivalentNotes = {
  'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb',
  'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#'
};

const normalizeNote = (n) => {
  if (!n) return [n];
  const pitch = n.slice(0, -1);
  const oct = n.slice(-1);
  const eq = equivalentNotes[pitch];
  return [n, eq ? `${eq}${oct}` : n];
};

export const PianoKeyboard = ({ activeNotes = [], onKeyClick }) => {
  const activeSet = new Set(activeNotes.flatMap(normalizeNote));
  const whiteKeys = PIANO_RANGE.filter(k => k.type === 'white');
  const totalWhite = whiteKeys.length; // 14 white keys for 2 octaves
  const keyWidthPct = 100 / totalWhite;
  // Black key width relative to white key (~60%)
  const blackWidthPct = keyWidthPct * 0.6;

  return (
    <div className="relative w-full py-1">
      <div className="relative w-full h-20 border border-slate-700 bg-slate-900 rounded-b-xl overflow-hidden shadow-2xl">

        {/* White keys — each takes equal % of container width */}
        {whiteKeys.map((wk, i) => {
          const isActive = activeSet.has(wk.name);
          return (
            <div
              key={wk.name}
              onClick={() => onKeyClick && onKeyClick(wk.name)}
              className={`absolute top-0 bottom-0 border-r border-slate-700/50 flex flex-col justify-end pb-1.5 items-center transition-colors duration-300
                ${onKeyClick ? 'cursor-pointer active:bg-slate-200' : ''}
                ${isActive ? 'bg-amber-100 shadow-[inset_0_-15px_30px_rgba(251,191,36,0.6)]' : 'bg-white hover:bg-slate-100'}
                ${i === totalWhite - 1 ? 'border-r-0' : ''}
              `}
              style={{ left: `${i * keyWidthPct}%`, width: `${keyWidthPct}%` }}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-opacity duration-300 ${isActive ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] opacity-100' : 'opacity-0'}`} />
            </div>
          );
        })}

        {/* Black keys overlay */}
        {PIANO_RANGE.map((bk, i) => {
          if (bk.type === 'white') return null;
          const whiteIndex = PIANO_RANGE.slice(0, i).filter(k => k.type === 'white').length;
          const isActive = activeSet.has(bk.name);

          return (
            <div
              key={bk.name}
              onClick={(e) => {
                e.stopPropagation();
                if (onKeyClick) onKeyClick(bk.name);
              }}
              className={`absolute top-0 h-12 rounded-b-md z-10 border-x border-b flex justify-center items-end pb-1 transition-colors duration-300
                ${onKeyClick ? 'cursor-pointer active:bg-slate-600' : ''}
                ${isActive ? 'bg-amber-600 border-amber-700 shadow-[0_5px_20px_rgba(245,158,11,0.7)]' : 'bg-slate-800 border-slate-900 hover:bg-slate-700'}
              `}
              style={{
                left: `${whiteIndex * keyWidthPct - blackWidthPct / 2}%`,
                width: `${blackWidthPct}%`
              }}
            >
              <div className={`w-1 h-1 rounded-full transition-opacity duration-300 ${isActive ? 'bg-amber-200 shadow-[0_0_8px_rgba(252,211,77,1)] opacity-100' : 'opacity-0'}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
