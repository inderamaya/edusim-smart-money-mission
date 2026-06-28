export const speakText = (text, language) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  // Attempt to find a suitable voice
  const voices = window.speechSynthesis.getVoices();

  if (language === 'bm') {
    utterance.lang = 'ms-MY';
    const malayVoice = voices.find(voice => voice.lang.startsWith('ms'));
    if (malayVoice) utterance.voice = malayVoice;
  } else {
    utterance.lang = 'en-US';
    const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
    if (englishVoice) utterance.voice = englishVoice;
  }

  utterance.rate = 0.9; // Slightly slower for children
  utterance.pitch = 1.1; // Slightly higher pitch for child-friendly feel

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
