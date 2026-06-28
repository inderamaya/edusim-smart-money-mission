import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';

const InstructionsScreen = ({ t, language, onBack, onNext }) => {
  const instructions = t.language === 'en' ? [
    "Choose an avatar.",
    "Follow the mission map.",
    "Click the answers.",
    "Count the money.",
    "Collect coins and stars.",
    "Save your balance."
  ] : [
    "Pilih avatar.",
    "Ikut peta misi.",
    "Klik jawapan.",
    "Kira jumlah wang.",
    "Kumpul syiling dan bintang.",
    "Simpan baki wang."
  ];

  // Map icons to instructions
  const icons = ['👤', '🗺️', '🖱️', '🧮', '🪙', '🐖'];

  const handleListen = () => {
    speakText(instructions.join(". "), language);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <h2>{t.instructions}</h2>
        <div className="instruction-list">
          {instructions.map((text, i) => (
            <div key={i} className="instruction-item">
              <div className="instruction-icon">{icons[i]}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>
            🔊 {t.listen}
          </GameButton>
        </div>

        <div className="button-footer">
          <GameButton color="var(--soft-red)" onClick={onBack}>
            ⬅️ {t.back}
          </GameButton>
          <GameButton color="var(--deep-blue)" onClick={onNext}>
            {t.next} ➡️
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default InstructionsScreen;
