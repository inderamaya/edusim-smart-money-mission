import React from 'react';
import GameButton from './GameButton';

const InstructionsScreen = ({ onBack, onNext }) => {
  const steps = [
    { icon: '👤', text: 'Pilih avatar kesukaan kamu.' },
    { icon: '🗺️', text: 'Ikut peta misi untuk melawat pelbagai tempat.' },
    { icon: '🖱️', text: 'Klik pada jawapan atau barang yang ingin dibeli.' },
    { icon: '🧮', text: 'Kira jumlah wang yang dibelanjakan.' },
    { icon: '⭐', text: 'Kumpul syiling dan bintang untuk setiap pilihan bijak.' },
    { icon: '💰', text: 'Simpan baki wang kamu untuk masa depan.' }
  ];

  return (
    <div className="screen-layout instructions-screen">
      <div className="card">
        <h2>Arahan Permainan</h2>
        <div className="instruction-list">
          {steps.map((step, index) => (
            <div key={index} className="instruction-item">
              <span className="instruction-icon">{step.icon}</span>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="button-footer">
          <GameButton color="var(--soft-red)" onClick={onBack}>Kembali</GameButton>
          <GameButton color="var(--deep-blue)" onClick={onNext}>Seterusnya</GameButton>
        </div>
      </div>
    </div>
  );
};

export default InstructionsScreen;
