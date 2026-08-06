import React from 'react';

const letterIndex = { 'C': 0, 'D': 1, 'E': 2, 'F': 3, 'G': 4, 'A': 5, 'B': 6 };

const parseNote = (noteStr) => {
  const match = noteStr.match(/([A-G])([#b]?)([0-9])/);
  if (!match) return null;
  return { 
    letter: match[1], 
    accidental: match[2], 
    octave: parseInt(match[3]) 
  };
};

// Mathematically exact treble staff Y placement (Line spacing = 10px, Step spacing = 5px)
const getStaffY = (letter, octave) => {
  const lIdx = letterIndex[letter] ?? 0;
  const noteTotalStep = (octave * 7) + lIdx;
  const E4TotalStep = (4 * 7) + 2; // Step index of E4 (Bottom Line 1) = 30
  
  // Visually shift octave by +1 (e.g., C3 -> Middle C C4 @ y=60, E3 -> Bottom Line E4 @ y=50)
  const stepDiff = (noteTotalStep + 7) - E4TotalStep;
  
  return 50 - (stepDiff * 5);
};

export const StaffNotation = ({ notes }) => {
  if (!notes || notes.length === 0) return null;

  return (
    <svg width="100%" height="56" viewBox="-12 -2 140 70" className="opacity-95 overflow-visible">
      {/* 5 Staff Lines (Y: 10, 20, 30, 40, 50) */}
      {[10, 20, 30, 40, 50].map(y => (
        <line key={y} x1="-8" y1={y} x2="132" y2={y} stroke="#0f172a" strokeWidth="1.2" />
      ))}
      
      {/* Treble Clef Symbol (Wider SVG ViewBox ensures 100% complete clef display) */}
      <text x="-6" y="54" fontSize="56" fontFamily="serif" fill="#0f172a">𝄞</text>

      {/* Draw Notes */}
      {notes.map((noteStr, idx) => {
        const parsed = parseNote(noteStr);
        if (!parsed) return null;
        
        const y = getStaffY(parsed.letter, parsed.octave);
        const chordX = 72; // Placed generously to the right of the treble clef
        
        return (
          <g key={idx}>
            {/* Ledger Lines if note is Middle C (y >= 60) or High A (y <= 0) */}
            {y >= 60 && <line x1={chordX - 10} y1={60} x2={chordX + 10} y2={60} stroke="#0f172a" strokeWidth="1.5" />}
            {y <= 0 && <line x1={chordX - 10} y1={0} x2={chordX + 10} y2={0} stroke="#0f172a" strokeWidth="1.5" />}
            
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
