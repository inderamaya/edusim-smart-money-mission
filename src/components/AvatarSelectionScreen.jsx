import React from 'react';
import GameButton from './GameButton';

const AvatarSelectionScreen = ({ onSelect }) => {
  const avatars = [
    { id: 'aiman', name: 'Aiman', emoji: '👦', color: '#6EC6FF' },
    { id: 'sara', name: 'Sara', emoji: '👧', color: '#F06292' },
    { id: 'danish', name: 'Danish', emoji: '🧒', color: '#FFD54F' }
  ];

  return (
    <div className="screen-layout avatar-selection">
      <div className="card">
        <h2>Pilih Avatar Kamu</h2>
        <div className="avatar-grid">
          {avatars.map((avatar) => (
            <div key={avatar.id} className="avatar-card" style={{ borderColor: avatar.color }}>
              <div className="avatar-large-emoji">{avatar.emoji}</div>
              <h3>{avatar.name}</h3>
              <GameButton
                color={avatar.color}
                onClick={() => onSelect(avatar)}
              >
                Pilih
              </GameButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarSelectionScreen;
