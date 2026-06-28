import React, { useState } from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';

const BudgetChallengeScreen = ({ t, language, onComplete }) => {
  const [answer, setAnswer] = useState('');

  const handleListen = () => {
    speakText(`${t.finalChallengeTitle}. ${t.finalChallengeQuestion}`, language);
  };

  const handleFinish = () => {
    if (answer.trim().length < 5) {
      alert(language === 'en' ? 'Please write a short answer.' : 'Sila tulis jawapan ringkas.');
      return;
    }
    onComplete();
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <h2>{t.finalChallengeTitle}</h2>

        <div className="kbat-box">
          <h3>{t.finalChallengeQuestion}</h3>
          <textarea
            style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '10px', border: '3px solid var(--dark-text)', fontFamily: 'inherit', fontSize: '1.1rem' }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={language === 'en' ? "Your answer..." : "Jawapan anda..."}
          />
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <GameButton color="#666" onClick={handleListen}>
            🔊 {t.listen}
          </GameButton>
        </div>

        <div style={{ textAlign: 'center' }}>
          <GameButton color="var(--deep-blue)" onClick={handleFinish} className="btn-large">
            {t.finish}
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default BudgetChallengeScreen;
