import React from 'react';
import GameButton from './GameButton';
import { Star, HelpCircle, Coins } from 'lucide-react';

const FeedbackModal = ({ t, feedback, onClose }) => {
  if (!feedback) return null;

  const { type, title, message } = feedback;
  const isSuccess = type === 'success';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="card feedback-card" onClick={e => e.stopPropagation()}>
        <div className="feedback-icon">
          {isSuccess ? <Star size={64} color="var(--star-gold)" fill="var(--star-gold)" /> : <HelpCircle size={64} color="var(--deep-blue)" />}
        </div>
        <h2>{title}</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{message}</p>

        {isSuccess && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
            <span className="coin-icon"><Coins size={24} color="var(--coin-yellow)" /> +5</span>
            <span className="star-icon"><Star size={24} color="var(--star-gold)" fill="var(--star-gold)" /> +1</span>
          </div>
        )}

        <GameButton
          color={isSuccess ? 'var(--grass-green)' : 'var(--deep-blue)'}
          onClick={onClose}
          className="btn-large"
        >
          {isSuccess ? t.next : t.tryAgain}
        </GameButton>
      </div>
    </div>
  );
};

export default FeedbackModal;
