import React from 'react';
import AvatarCard, { AimanAvatar, SaraAvatar, DanishAvatar } from './AvatarCard';
import { speakText } from '../utils/speech';
import GameButton from './GameButton';

const AvatarSelectionScreen = ({ t, language, onSelect }) => {
  const avatars = [
    { id: 'aiman', name: t.aimanName, trait: t.aimanTrait, component: <AimanAvatar /> },
    { id: 'sara', name: t.saraName, trait: t.saraTrait, component: <SaraAvatar /> },
    { id: 'danish', name: t.danishName, trait: t.danishTrait, component: <DanishAvatar /> }
  ];

  const handleListen = () => {
    speakText(t.chooseAvatar, language);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <h2>{t.chooseAvatar}</h2>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>
            🔊 {t.listen}
          </GameButton>
        </div>

        <div className="avatar-grid">
          {avatars.map(avatar => (
            <AvatarCard
              key={avatar.id}
              {...avatar}
              t={t}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarSelectionScreen;
