import React from 'react';
import { Home, Map, User, Wallet, Coins, Star, Volume2, VolumeX, Languages } from 'lucide-react';

const HeaderBar = ({ t, balance, stars, coins, avatar, onHome, onMap, soundEnabled, toggleSound, language, toggleLanguage }) => {
  return (
    <header className="header-bar">
      <div className="header-left">
        <button className="icon-btn" onClick={onHome} title={t.home} aria-label={t.home}>
          <Home size={24} />
        </button>
        <button className="icon-btn" onClick={onMap} title={t.map} aria-label={t.map}>
          <Map size={24} />
        </button>
      </div>

      <div className="header-center">
        <div className="avatar-mini">
          {avatar ? (
             <div style={{ transform: 'scale(0.3)' }}>
                {avatar.component}
             </div>
          ) : (
            <User size={24} />
          )}
        </div>

        <div className="counter" title={t.balance}>
          <Wallet size={20} color="var(--deep-blue)" />
          <span>RM{balance}</span>
        </div>

        <div className="counter" title={t.coins}>
          <Coins size={20} color="var(--coin-yellow)" />
          <span>{coins}</span>
        </div>

        <div className="counter" title={t.stars}>
          <Star size={20} color="var(--star-gold)" fill="var(--star-gold)" />
          <span>{stars}</span>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn" onClick={toggleLanguage} title="Change Language">
          <Languages size={20} style={{ marginRight: '4px' }} />
          <span style={{ fontSize: '0.8rem' }}>{language === 'bm' ? 'BM' : 'EN'}</span>
        </button>
        <button className="icon-btn" onClick={toggleSound} title={soundEnabled ? "Mute" : "Unmute"}>
          {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
