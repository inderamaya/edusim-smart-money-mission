import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';
import { Play, BookOpen, Target, Volume2, Coins } from 'lucide-react';

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
          <div className="learning-block"><Coins size={40} color="var(--coin-yellow)" /></div>
        </div>

        <div className="button-group" style={{ margin: '0 auto' }}>
          <GameButton color="var(--deep-blue)" onClick={onStart} className="btn-large">
            <Play size={24} fill="white" /> {t.start}
          </GameButton>

          <div className="sub-buttons">
            <GameButton color="var(--brick-orange)" onClick={onInstructions}>
              <BookOpen size={20} /> {t.instructions}
            </GameButton>
            <GameButton color="var(--pipe-green)" onClick={onObjectives}>
              <Target size={20} /> {t.objectives}
            </GameButton>
          </div>

          <GameButton color="#666" onClick={handleListen}>
            <Volume2 size={20} /> {t.listen}
          </GameButton>
        </div>

        <div className="pipe-decorative" style={{ margin: '40px auto 0' }}></div>
      </div>
    </div>
  );
};

export default CoverScreen;
