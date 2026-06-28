import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';
import { User, Map, MousePointer2, Calculator, Coins, PiggyBank, Volume2, ArrowLeft, ArrowRight } from 'lucide-react';

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
  const icons = [
    <User size={32} />,
    <Map size={32} />,
    <MousePointer2 size={32} />,
    <Calculator size={32} />,
    <Coins size={32} />,
    <PiggyBank size={32} />
  ];

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
            <Volume2 size={20} /> {t.listen}
          </GameButton>
        </div>

        <div className="button-footer">
          <GameButton color="var(--soft-red)" onClick={onBack}>
            <ArrowLeft size={20} /> {t.back}
          </GameButton>
          <GameButton color="var(--deep-blue)" onClick={onNext}>
            {t.next} <ArrowRight size={20} />
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default InstructionsScreen;
