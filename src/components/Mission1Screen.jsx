import React from 'react';
import GameButton from './GameButton';

const Mission1Screen = ({ onComplete, showFeedback }) => {
  const handleChoice = (choice) => {
    if (choice === 'B') {
      showFeedback('success', 'Syabas!', 'Merancang wang ialah pilihan bijak.');
      onComplete(1, 0, 5); // missionId, balanceChange, starReward
    } else {
      showFeedback('error', 'Cuba Lagi', 'Wang perlu digunakan untuk keperluan dahulu. Rancang perbelanjaan kamu.');
    }
  };

  return (
    <div className="screen-layout mission-screen">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🏠</span>
          <h2>Misi 1: Rumah</h2>
        </div>
        <p className="scenario">Kamu baru sahaja menerima <strong>RM20</strong> sebagai wang saku untuk hari ini.</p>
        <p className="question"><strong>Apakah tindakan pertama yang bijak?</strong></p>

        <div className="choice-list">
          <GameButton color="var(--deep-blue)" onClick={() => handleChoice('A')}>
            A. Belanja semua wang sebelum sekolah.
          </GameButton>
          <GameButton color="var(--deep-blue)" onClick={() => handleChoice('B')}>
            B. Rancang perbelanjaan hari ini.
          </GameButton>
          <GameButton color="var(--deep-blue)" onClick={() => handleChoice('C')}>
            C. Beli mainan dahulu.
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default Mission1Screen;
