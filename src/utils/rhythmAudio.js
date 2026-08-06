import * as Tone from 'tone';

let kick = null;
let snare = null;
let hihat = null;
let bell = null;
let initialized = false;
let sequence = null;

export const initRhythmAudio = async () => {
  if (initialized) return;
  await Tone.start();

  const reverb = new Tone.Reverb({ decay: 1.0, wet: 0.12 }).toDestination();

  // Kick — use Synth with very short sine burst (avoids MembraneSynth retrigger issue)
  kick = new Tone.Synth({
    oscillator: { type: 'sine' },
    envelope: { attack: 0.001, decay: 0.2, sustain: 0, release: 0.1 },
    volume: -4
  }).connect(reverb);

  // Snare — noise burst
  snare = new Tone.NoiseSynth({
    noise: { type: 'white' },
    envelope: { attack: 0.001, decay: 0.12, sustain: 0, release: 0.08 },
    volume: -10
  }).connect(reverb);

  // HiHat — very short noise
  hihat = new Tone.NoiseSynth({
    noise: { type: 'white' },
    envelope: { attack: 0.001, decay: 0.04, sustain: 0, release: 0.02 },
    volume: -16
  }).toDestination();

  // Bell / Clave — short synth click at high pitch
  bell = new Tone.Synth({
    oscillator: { type: 'triangle' },
    envelope: { attack: 0.001, decay: 0.06, sustain: 0, release: 0.03 },
    volume: -14
  }).toDestination();

  initialized = true;
};

// Map velocity (0-3) to volume offset in dB
const velocityToDb = { 1: -14, 2: -5, 3: 0 };

const getInstrument = (trackName) => {
  const n = trackName.toLowerCase();
  if (n === 'kick' || n === 'tom') return { inst: kick, note: 'C2', dur: '16n' };
  if (n === 'snare') return { inst: snare, note: null, dur: '32n' };
  if (n === 'hihat' || n === 'shaker') return { inst: hihat, note: null, dur: '64n' };
  if (n === 'bell' || n === 'clave') return { inst: bell, note: 'G5', dur: '32n' };
  return { inst: snare, note: null, dur: '32n' };
};

const triggerHit = (trackName, velocity, time) => {
  if (velocity === 0) return;
  const { inst, note, dur } = getInstrument(trackName);
  if (!inst) return;

  const dbOffset = velocityToDb[velocity] ?? 0;
  const origVol = inst.volume.value;

  try {
    inst.volume.setValueAtTime(origVol + dbOffset, time);

    if (inst instanceof Tone.NoiseSynth) {
      inst.triggerAttackRelease(dur, time);
    } else {
      inst.triggerAttackRelease(note, dur, time);
    }

    inst.volume.setValueAtTime(origVol, time + 0.05);
  } catch (e) {
    // Swallow retrigger timing errors gracefully
  }
};

/**
 * Play a rhythm pattern in a continuous loop.
 */
export const playRhythm = async (tracks, bpm, subdivision, beatsPerMeasure, onStepPlay) => {
  if (!initialized) {
    await initRhythmAudio();
  }

  if (Tone.context.state !== 'running') {
    await Tone.context.resume();
  }

  stopRhythm();

  const totalSteps = tracks[0]?.pattern.length || 16;

  // Transport BPM = bpm * subdivision so each step = 1 quarter note at Transport tempo
  Tone.Transport.bpm.value = bpm * subdivision;

  const stepIndices = Array.from({ length: totalSteps }, (_, i) => i);

  sequence = new Tone.Sequence(
    (time, stepIdx) => {
      // UI callback
      Tone.Draw.schedule(() => {
        if (onStepPlay) onStepPlay(stepIdx);
      }, time);

      // Trigger all tracks at this step
      tracks.forEach(track => {
        const vel = track.pattern[stepIdx];
        if (vel > 0) {
          triggerHit(track.name, vel, time);
        }
      });
    },
    stepIndices,
    '4n'
  );

  sequence.loop = true;
  sequence.start(0);
  Tone.Transport.start();
};

export const stopRhythm = () => {
  if (sequence) {
    sequence.stop();
    sequence.dispose();
    sequence = null;
  }
  Tone.Transport.stop();
  Tone.Transport.cancel();
};
