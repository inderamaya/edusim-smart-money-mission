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
  playClick: () => playTone(440, 'sine', 0.1),
  click: () => playTone(440, 'sine', 0.1),

  playCorrect: () => {
    playTone(523.25, 'triangle', 0.2); // C5
    setTimeout(() => playTone(659.25, 'triangle', 0.3), 100); // E5
  },
  correct: () => {
    playTone(523.25, 'triangle', 0.2); // C5
    setTimeout(() => playTone(659.25, 'triangle', 0.3), 100); // E5
  },

  playWrong: () => {
    playTone(220, 'sawtooth', 0.3, 0.05); // A3
    setTimeout(() => playTone(196, 'sawtooth', 0.4, 0.05), 150); // G3
  },
  wrong: () => {
    playTone(220, 'sawtooth', 0.3, 0.05); // A3
    setTimeout(() => playTone(196, 'sawtooth', 0.4, 0.05), 150); // G3
  },

  playCoin: () => {
    playTone(987.77, 'sine', 0.1); // B5
    setTimeout(() => playTone(1318.51, 'sine', 0.2), 50); // E6
  },
  coin: () => {
    playTone(987.77, 'sine', 0.1); // B5
    setTimeout(() => playTone(1318.51, 'sine', 0.2), 50); // E6
  },

  playStar: () => {
    playTone(1046.50, 'sine', 0.1); // C6
    setTimeout(() => playTone(1318.51, 'sine', 0.1), 100); // E6
    setTimeout(() => playTone(1567.98, 'sine', 0.3), 200); // G6
  },
  star: () => {
    playTone(1046.50, 'sine', 0.1); // C6
    setTimeout(() => playTone(1318.51, 'sine', 0.1), 100); // E6
    setTimeout(() => playTone(1567.98, 'sine', 0.3), 200); // G6
  },

  playComplete: () => {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 'triangle', 0.5), i * 150);
    });
  },
  complete: () => {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 'triangle', 0.5), i * 150);
    });
  },

  playLanguageSwitch: () => playTone(880, 'sine', 0.2),
  languageSwitch: () => playTone(880, 'sine', 0.2),

  playAvatarSelect: () => playTone(660, 'sine', 0.2),
  avatarSelect: () => playTone(660, 'sine', 0.2)
};

let bgMusicOscillators = [];
let bgMusicInterval = null;

export const bgMusic = {
  start: () => {
    initAudio();
    if (bgMusicInterval) return;

    const tempo = 120;
    const noteLength = 60 / tempo / 2; // eighth note
    const pattern = [
      261.63, 261.63, 392.00, 392.00, 440.00, 440.00, 392.00, 0,
      349.23, 349.23, 329.63, 329.63, 293.66, 293.66, 261.63, 0
    ];
    let step = 0;

    bgMusicInterval = setInterval(() => {
      const freq = pattern[step];
      if (freq > 0) {
        playTone(freq, 'square', noteLength * 0.8, 0.03);
      }
      step = (step + 1) % pattern.length;
    }, noteLength * 1000);
  },
  stop: () => {
    if (bgMusicInterval) {
      clearInterval(bgMusicInterval);
      bgMusicInterval = null;
    }
  }
};
