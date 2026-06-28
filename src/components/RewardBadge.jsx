import React from 'react';

const RewardBadge = ({ type, label }) => {
  const icons = {
    star: '⭐',
    coin: '🪙',
    medal: '🏅',
    certificate: '📜'
  };

  return (
    <div className="reward-badge">
      <div className="badge-icon">{icons[type] || '✨'}</div>
      {label && <div className="badge-label">{label}</div>}
    </div>
  );
};

export default RewardBadge;
