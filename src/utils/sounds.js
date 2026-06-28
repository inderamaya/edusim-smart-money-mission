let audioCtx = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
};

const playTone = (freq, type, duration, volume = 0.1) => {
  initAudio();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);

  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
};

export const sounds = {
  click: () => playTone(440, 'sine', 0.1),
  correct: () => {
    playTone(523.25, 'triangle', 0.2); // C5
    setTimeout(() => playTone(659.25, 'triangle', 0.3), 100); // E5
  },
  wrong: () => {
    playTone(220, 'sawtooth', 0.3, 0.05); // A3
    setTimeout(() => playTone(196, 'sawtooth', 0.4, 0.05), 150); // G3
  },
  coin: () => {
    playTone(987.77, 'sine', 0.1); // B5
    setTimeout(() => playTone(1318.51, 'sine', 0.2), 50); // E6
  },
  complete: () => {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 'triangle', 0.5), i * 150);
    });
  }
};
