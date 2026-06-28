import React from 'react';
import CoinCounter from './CoinCounter';
import StarCounter from './StarCounter';

const GameHUD = ({ balance, stars, avatar }) => {
  return (
    <div className="game-hud">
      <div className="avatar-mini">
        <span className="avatar-emoji">{avatar?.emoji || '👤'}</span>
      </div>
      <CoinCounter amount={balance} />
      <StarCounter amount={stars} />
    </div>
  );
};

export default GameHUD;
