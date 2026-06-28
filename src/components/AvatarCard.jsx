import React from 'react';
import GameButton from './GameButton';

export const AimanAvatar = () => (
  <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="50" r="40" fill="#FFE0B2"/>
    <path d="M20 50C20 20 100 20 100 50" fill="#5D4037"/>
    <circle cx="45" cy="45" r="4" fill="#333"/>
    <circle cx="75" cy="45" r="4" fill="#333"/>
    <path d="M50 65C50 65 60 75 70 65" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <rect x="30" y="90" width="60" height="60" rx="10" fill="#1E88E5"/>
    <rect x="40" y="100" width="40" height="30" fill="#BBDEFB"/>
  </svg>
);

export const SaraAvatar = () => (
  <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="50" r="40" fill="#FFE0B2"/>
    <path d="M20 50C20 10 100 10 100 50V70H20V50Z" fill="#263238"/>
    <circle cx="45" cy="45" r="4" fill="#333"/>
    <circle cx="75" cy="45" r="4" fill="#333"/>
    <path d="M50 65C50 65 60 75 70 65" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <rect x="30" y="90" width="60" height="60" rx="10" fill="#EF5350"/>
    <circle cx="60" cy="115" r="15" fill="#FFF"/>
  </svg>
);

export const DanishAvatar = () => (
  <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="50" r="40" fill="#FFE0B2"/>
    <path d="M20 40C40 20 80 20 100 40" fill="#8D6E63"/>
    <circle cx="45" cy="45" r="4" fill="#333"/>
    <circle cx="75" cy="45" r="4" fill="#333"/>
    <path d="M50 65C50 65 60 75 70 65" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <rect x="30" y="90" width="60" height="60" rx="10" fill="#43A047"/>
    <path d="M40 90V130M80 90V130" stroke="#FFF" strokeWidth="4"/>
  </svg>
);

const AvatarCard = ({ id, name, trait, onSelect, t, component }) => {
  return (
    <div className="avatar-card">
      <div className="avatar-illus">
        {component}
      </div>
      <h3>{name}</h3>
      <p style={{ marginBottom: '15px', color: '#666' }}>{trait}</p>
      <GameButton
        color={id === 'aiman' ? 'var(--deep-blue)' : id === 'sara' ? 'var(--soft-red)' : 'var(--grass-green)'}
        onClick={() => onSelect({ id, name, component })}
      >
        {t.choose}
      </GameButton>
    </div>
  );
};

export default AvatarCard;
