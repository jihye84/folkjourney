import React from 'react';

const parseNote = (noteStr) => {
  const match = noteStr.match(/([A-G])([#b]?)([0-9])/);
  if (!match) return null;
  return { 
    letter: match[1], 
    accidental: match[2], 
    octave: parseInt(match[3]) 
  };
};

const getStaffY = (letter, octave) => {
  const offsets = { 'C': 0, 'D': -5, 'E': -10, 'F': -15, 'G': -20, 'A': -25, 'B': -30 };
  const visualOctave = octave + 1; 
  const octDiff = visualOctave - 4;
  return 48 + offsets[letter] - (octDiff * 35);
};

export const StaffNotation = ({ notes }) => {
  if (!notes || notes.length === 0) return null;

  return (
    <svg width="100%" height="56" viewBox="0 2 110 56" className="opacity-95 overflow-visible">
      {/* 5 Staff Lines (Y: 10, 20, 30, 40, 50) */}
      {[10, 20, 30, 40, 50].map(y => (
        <line key={y} x1="0" y1={y} x2="110" y2={y} stroke="#0f172a" strokeWidth="1.2" />
      ))}
      
      {/* Treble Clef Symbol */}
      <text x="2" y="48" fontSize="50" fontFamily="serif" fill="#0f172a">𝄞</text>

      {/* Draw Notes */}
      {notes.map((noteStr, idx) => {
        const parsed = parseNote(noteStr);
        if (!parsed) return null;
        
        const y = getStaffY(parsed.letter, parsed.octave);
        const chordX = 62; // All notes in a chord have the same X
        
        return (
          <g key={idx}>
            {/* Ledger Lines if note is C4(60) or below, or A5(0) or above */}
            {y >= 60 && <line x1={chordX - 10} y1={y} x2={chordX + 10} y2={y} stroke="#0f172a" strokeWidth="1.5" />}
            {y <= 0 && <line x1={chordX - 10} y1={y} x2={chordX + 10} y2={y} stroke="#0f172a" strokeWidth="1.5" />}
            
            {/* Accidental */}
            {parsed.accidental && (
              <text x={chordX - 16} y={y + 4} fontSize="14" fill="#0f172a" fontWeight="bold">
                {parsed.accidental === '#' ? '♯' : '♭'}
              </text>
            )}
            
            {/* Note Head */}
            <ellipse cx={chordX} cy={y} rx="6" ry="4" fill="#0f172a" transform={`rotate(-15 ${chordX} ${y})`} />
          </g>
        );
      })}
    </svg>
  );
};
