import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';

const CoverScreen = ({ t, language, onStart, onInstructions, onObjectives }) => {
  const handleListen = () => {
    speakText(`${t.title}. ${t.subtitle}`, language);
  };

  return (
    <div className="screen-layout cover-screen">
      <div className="card" style={{ width: '100%', maxWidth: '800px' }}>
        <h1 className="game-title">{t.title}</h1>
        <p className="game-subtitle">{t.subtitle}</p>

        <div className="learning-block-group">
          <div className="learning-block">RM</div>
          <div className="learning-block">10</div>
          <div className="learning-block">💰</div>
        </div>

        <div className="button-group" style={{ margin: '0 auto' }}>
          <GameButton color="var(--deep-blue)" onClick={onStart} className="btn-large">
            🎮 {t.start}
          </GameButton>

          <div className="sub-buttons">
            <GameButton color="var(--brick-orange)" onClick={onInstructions}>
              📖 {t.instructions}
            </GameButton>
            <GameButton color="var(--pipe-green)" onClick={onObjectives}>
              🎯 {t.objectives}
            </GameButton>
          </div>

          <GameButton color="#666" onClick={handleListen}>
            🔊 {t.listen}
          </GameButton>
        </div>

        <div className="pipe-decorative" style={{ margin: '40px auto 0' }}></div>
      </div>
    </div>
  );
};

export default CoverScreen;
