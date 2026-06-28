import React from 'react';
import GameButton from './GameButton';
import BudgetBar from './BudgetBar';
import { speakText } from '../utils/speech';
import { Home, Volume2, ArrowRight } from 'lucide-react';

const Mission1Screen = ({ t, language, balance, onComplete, showFeedback }) => {
  const handleListen = () => {
    const text = language === 'en'
      ? "Mission 1: Home. Your mother gives you RM10 for today. Save it in your wallet."
      : "Misi 1: Rumah. Ibu memberi kamu RM10 untuk hari ini. Simpan wang ini di dalam dompet.";
    speakText(text, language);
  };

  const handleFinish = () => {
    onComplete(1, 0, 1); // No balance change, 1 star
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <div className="mission-header">
          <Home size={48} color="var(--brick-orange)" />
          <h2>{t.mission1}</h2>
        </div>

        <BudgetBar t={t} balance={balance} />

        <div className="scenario">
          {language === 'en'
            ? "Your mother gives you RM10 for school today. Remember to spend wisely!"
            : "Ibu memberi kamu RM10 untuk ke sekolah hari ini. Ingat, belanja dengan bijak!"}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>
            <Volume2 size={20} /> {t.listen}
          </GameButton>
        </div>

        <div style={{ textAlign: 'center' }}>
          <GameButton color="var(--deep-blue)" onClick={handleFinish} className="btn-large">
            {t.next} <ArrowRight size={24} />
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default Mission1Screen;
