import React from 'react';

const HeaderBar = ({ t, balance, stars, coins, avatar, onHome, onMap, soundEnabled, toggleSound, language, toggleLanguage }) => {
  return (
    <header className="header-bar">
      <div className="header-left">
        <button className="icon-btn" onClick={onHome} title={t.home} aria-label={t.home}>🏠</button>
        <button className="icon-btn" onClick={onMap} title={t.map} aria-label={t.map}>🗺️</button>
      </div>

      <div className="header-center">
        <div className="avatar-mini">
          {avatar ? (
             <div style={{ transform: 'scale(0.3)' }}>
                {avatar.component}
             </div>
          ) : (
            <span style={{ fontSize: '1.5rem' }}>👤</span>
          )}
        </div>

        <div className="counter" title={t.balance}>
          <span className="coin-icon">💰</span>
          <span>RM{balance}</span>
        </div>

        <div className="counter" title={t.coins}>
          <span className="coin-icon">🪙</span>
          <span>{coins}</span>
        </div>

        <div className="counter" title={t.stars}>
          <span className="star-icon">⭐</span>
          <span>{stars}</span>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn" onClick={toggleLanguage} title="Change Language">
          {language === 'bm' ? 'BM' : 'EN'}
        </button>
        <button className="icon-btn" onClick={toggleSound} title={soundEnabled ? "Mute" : "Unmute"}>
          {soundEnabled ? '🔊' : '🔈'}
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
