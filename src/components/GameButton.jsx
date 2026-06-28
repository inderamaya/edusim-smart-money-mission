import React from 'react';
import { sounds } from '../utils/sounds';

const GameButton = ({ children, onClick, color = 'var(--deep-blue)', size = 'medium', sound = 'click', disabled = false, className = '' }) => {
  const handleClick = (e) => {
    if (disabled) return;
    if (sound && sounds[sound]) {
      sounds[sound]();
    }
    if (onClick) onClick(e);
  };

  const style = {
    backgroundColor: color,
    '--btn-color': color
  };

  return (
    <button
      className={`game-button btn-${size} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={style}
    >
      <span className="btn-content">{children}</span>
    </button>
  );
};

export default GameButton;
