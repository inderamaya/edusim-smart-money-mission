import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';

const MissionCompleteScreen = ({ t, language, stars, balance, coins, onRestart, onMap }) => {
  const handleListen = () => {
    const text = language === 'en'
      ? `Mission Complete! You collected ${stars} stars and RM${balance} balance remains.`
      : `Misi Selesai! Kamu mengumpul ${stars} bintang dan baki RM${balance} tinggal.`;
    speakText(text, language);
  };

  return (
    <div className="screen-layout">
      <div className="card result-card">
        <div className="badge-animation">🏆</div>
        <h1>{t.missionComplete}</h1>

        <div className="stats-box">
          <div className="stat">
            <div className="stat-label">{t.stars}</div>
            <div className="stat-value">⭐ {stars}</div>
          </div>
          <div className="stat">
            <div className="stat-label">{t.coins}</div>
            <div className="stat-value">🪙 {coins}</div>
          </div>
          <div className="stat">
            <div className="stat-label">{t.balance}</div>
            <div className="stat-value">💰 RM{balance}</div>
          </div>
        </div>

        <div className="certificate">
          <h3>{language === 'en' ? 'Smart Spender Certificate' : 'Sijil Bijak Wang'}</h3>
          <p>{language === 'en' ? 'This is to certify that you have successfully managed RM10 wisely.' : 'Sijil ini mengesahkan bahawa anda telah berjaya mengurus RM10 dengan bijak.'}</p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>
            🔊 {t.listen}
          </GameButton>
        </div>

        <div className="button-footer">
          <GameButton color="var(--deep-blue)" onClick={onMap}>
            🗺️ {t.map}
          </GameButton>
          <GameButton color="var(--grass-green)" onClick={onRestart}>
            🔄 {t.playAgain}
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default MissionCompleteScreen;
