import React from 'react';
import GameButton from './GameButton';
import BudgetBar from './BudgetBar';
import { speakText } from '../utils/speech';

const Mission6Screen = ({ t, language, balance, onComplete, showFeedback }) => {
  const handleListen = () => {
    const text = language === 'en'
      ? "Mission 6: Playground. Time to play! Should you buy ice cream or save your money?"
      : "Misi 6: Taman Permainan. Masa untuk bermain! Adakah kamu patut beli aiskrim atau simpan wang kamu?";
    speakText(text, language);
  };

  const handleChoice = (buy) => {
    if (buy) {
      showFeedback('success', t.smartChoice, language === 'en' ? "A small treat after a long day! RM1 spent." : "Ganjaran kecil selepas penat belajar! RM1 dibelanjakan.");
      onComplete(6, -1, 1);
    } else {
      showFeedback('success', t.smartChoice, language === 'en' ? "Great! Saving for the future." : "Bagus! Simpan untuk masa depan.");
      onComplete(6, 0, 1);
    }
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🛝</span>
          <h2>{t.mission6}</h2>
        </div>

        <BudgetBar t={t} balance={balance} />

        <div className="scenario">
          {language === 'en'
            ? "You are at the playground with friends. You see an ice cream truck selling mini popsicles for RM1."
            : "Kamu berada di taman permainan bersama kawan-kawan. Kamu nampak lori aiskrim menjual aiskrim mini dengan harga RM1."}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>
            🔊 {t.listen}
          </GameButton>
        </div>

        <div className="grid-flex" style={{ gap: '20px' }}>
          <GameButton color="var(--soft-red)" onClick={() => handleChoice(true)} className="btn-large">
            🍦 RM1
          </GameButton>
          <GameButton color="var(--grass-green)" onClick={() => handleChoice(false)} className="btn-large">
            💰 {language === 'en' ? 'Save' : 'Simpan'}
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default Mission6Screen;
