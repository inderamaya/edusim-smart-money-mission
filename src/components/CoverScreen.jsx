import React from 'react';
import GameButton from './GameButton';

const CoverScreen = ({ onStart, onInstructions, onObjectives }) => {
  return (
    <div className="cover-screen">
      <div className="title-area">
        <div className="learning-block-group">
          <div className="learning-block">RM</div>
          <div className="learning-block">★</div>
          <div className="learning-block">?</div>
          <div className="learning-block">🪙</div>
        </div>
        <h1 className="game-title">EduSim: Misi Bijak Wang</h1>
        <p className="game-subtitle">Bantu Avatar Mengurus RM20 dengan Bijak</p>
      </div>

      <div className="button-group">
        <GameButton size="large" color="var(--grass-green)" onClick={onStart}>Mula</GameButton>
        <div className="sub-buttons">
          <GameButton color="var(--deep-blue)" onClick={onInstructions}>Arahan</GameButton>
          <GameButton color="var(--brick-orange)" onClick={onObjectives}>Objektif</GameButton>
        </div>
      </div>

      <div className="decoration">
        <div className="pipe-decorative"></div>
      </div>
    </div>
  );
};

export default CoverScreen;
