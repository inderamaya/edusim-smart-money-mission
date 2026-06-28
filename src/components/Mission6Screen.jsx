import React from 'react';
import GameButton from './GameButton';

const Mission6Screen = ({ onComplete, showFeedback }) => {
  const handleChoice = (choice) => {
    if (choice === 'B') {
      showFeedback('success', 'Tahniah!', 'Kamu berjaya menyimpan wang untuk esok. Pilihan yang sangat bijak!');
      onComplete(6, 0, 5);
    } else if (choice === 'A') {
      showFeedback('error', 'Cuba Lagi', 'Jangan habiskan wang untuk kehendak sahaja jika wang hampir habis.');
    } else {
      showFeedback('error', 'Cuba Lagi', 'Meminjam wang rakan untuk membeli kehendak bukan satu amalan yang baik.');
    }
  };

  return (
    <div className="screen-layout mission-screen">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🛝</span>
          <h2>Misi 6: Taman Permainan</h2>
        </div>
        <p className="scenario">Seorang rakan mengajak kamu membeli mainan di taman permainan. Wang kamu hampir habis.</p>
        <p className="question"><strong>Apakah pilihan terbaik kamu?</strong></p>

        <div className="choice-list">
          <GameButton color="var(--deep-blue)" onClick={() => handleChoice('A')}>
            A. Beli mainan walaupun wang hampir habis.
          </GameButton>
          <GameButton color="var(--deep-blue)" onClick={() => handleChoice('B')}>
            B. Simpan sebahagian wang untuk esok.
          </GameButton>
          <GameButton color="var(--deep-blue)" onClick={() => handleChoice('C')}>
            C. Pinjam wang rakan untuk beli mainan.
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default Mission6Screen;
