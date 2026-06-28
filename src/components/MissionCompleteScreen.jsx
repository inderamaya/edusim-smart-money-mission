import React from 'react';
import GameButton from './GameButton';

const MissionCompleteScreen = ({ stars, balance, onRestart, onMap }) => {
  return (
    <div className="screen-layout mission-complete">
      <div className="card result-card">
        <div className="badge-animation">🏅</div>
        <h2>Tahniah! Misi Selesai</h2>
        <p>Kamu telah berjaya menguruskan wang dengan bijak hari ini.</p>

        <div className="stats-box">
          <div className="stat">
            <span className="stat-label">Bintang:</span>
            <span className="stat-value">⭐ {stars}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Baki Wang:</span>
            <span className="stat-value">🪙 RM{balance}</span>
          </div>
        </div>

        <div className="certificate">
          <h3>Sijil Mini</h3>
          <div className="cert-content">
            <p>Dianugerahkan kepada:</p>
            <div className="cert-name">Pakar Bajet EduSim</div>
            <p>Kerana berjaya menyelesaikan <strong>Misi Bijak Wang</strong></p>
          </div>
        </div>

        <div className="reflection-list">
          <h4>Hari ini saya belajar:</h4>
          <ul>
            <li>✅ Memilih keperluan dahulu</li>
            <li>✅ Membandingkan harga</li>
            <li>✅ Mengira jumlah wang</li>
            <li>✅ Berjimat dan menyimpan</li>
          </ul>
        </div>

        <div className="button-footer">
          <GameButton color="var(--deep-blue)" onClick={onMap}>Peta Misi</GameButton>
          <GameButton color="var(--grass-green)" onClick={onRestart}>Main Semula</GameButton>
        </div>
      </div>
    </div>
  );
};

export default MissionCompleteScreen;
