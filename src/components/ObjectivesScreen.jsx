import React from 'react';
import GameButton from './GameButton';

const ObjectivesScreen = ({ onBack }) => {
  const objectives = [
    { icon: '🔍', title: 'Kenal Pasti', desc: 'Mengenal keperluan dan kehendak.' },
    { icon: '⚖️', title: 'Banding Harga', desc: 'Membandingkan harga barang.' },
    { icon: '➕', title: 'Kira Belanja', desc: 'Mengira jumlah perbelanjaan.' },
    { icon: '💡', title: 'Pilihan Bijak', desc: 'Membuat pilihan yang tepat.' },
    { icon: '🏦', title: 'Simpan Wang', desc: 'Menyimpan baki wang.' }
  ];

  return (
    <div className="screen-layout objectives-screen">
      <div className="card">
        <h2>Objektif Pembelajaran</h2>
        <div className="grid-2">
          {objectives.map((obj, index) => (
            <div key={index} className="objective-card">
              <span className="objective-icon">{obj.icon}</span>
              <h3>{obj.title}</h3>
              <p>{obj.desc}</p>
            </div>
          ))}
        </div>
        <div className="button-footer" style={{ marginTop: '20px' }}>
          <GameButton color="var(--deep-blue)" onClick={onBack}>Faham!</GameButton>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesScreen;
