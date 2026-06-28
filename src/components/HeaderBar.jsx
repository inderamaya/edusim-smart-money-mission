import React from 'react';
import CoinCounter from './CoinCounter';
import StarCounter from './StarCounter';

const HeaderBar = ({ balance, stars, avatar, onHome, onMap, soundEnabled, toggleSound }) => {
  return (
    <header className="header-bar">
      <div className="header-left">
        <button className="icon-btn" onClick={onHome} aria-label="Laman Utama">🏠</button>
        <button className="icon-btn" onClick={onMap} aria-label="Peta Misi">🗺️</button>
      </div>

      <div className="header-center">
        <div className="avatar-mini">
          {avatar ? (
            <span className="avatar-emoji">{avatar.emoji}</span>
          ) : (
            <span className="avatar-emoji">👤</span>
          )}
        </div>
        <CoinCounter amount={balance} />
        <StarCounter amount={stars} />
      </div>

      <div className="header-right">
        <button className="icon-btn" onClick={toggleSound} aria-label={soundEnabled ? "Matikan Bunyi" : "Pasang Bunyi"}>
          {soundEnabled ? '🔊' : '🔈'}
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
