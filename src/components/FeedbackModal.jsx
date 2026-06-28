import React from 'react';
import GameButton from './GameButton';

const FeedbackModal = ({ feedback, onClose }) => {
  if (!feedback) return null;

  const { type, title, message } = feedback;
  const isSuccess = type === 'success';

  return (
    <div className="modal-overlay">
      <div className={`card feedback-card ${isSuccess ? 'success' : 'error'}`}>
        <div className="feedback-icon">
          {isSuccess ? '🌟' : '🤔'}
        </div>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="feedback-animation">
          {isSuccess && (
            <div className="coin-burst">
              <span>🪙</span><span>⭐</span><span>🪙</span>
            </div>
          )}
        </div>
        <GameButton
          onClick={onClose}
          color={isSuccess ? 'var(--grass-green)' : 'var(--brick-orange)'}
        >
          {isSuccess ? 'Teruskan' : 'Cuba Lagi'}
        </GameButton>
      </div>
    </div>
  );
};

export default FeedbackModal;
