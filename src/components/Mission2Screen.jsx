import React, { useState } from 'react';
import GameButton from './GameButton';

const Mission2Screen = ({ onComplete, showFeedback }) => {
  const items = [
    { id: 'roti', name: 'Roti', price: 2, emoji: '🍞' },
    { id: 'air', name: 'Air mineral', price: 1, emoji: '💧' },
    { id: 'nasi', name: 'Nasi lemak', price: 3, emoji: '🍛' },
    { id: 'aiskrim', name: 'Aiskrim', price: 4, emoji: '🍦' }
  ];

  const [selected, setSelected] = useState([]);

  const toggleItem = (item) => {
    if (selected.find(i => i.id === item.id)) {
      setSelected(selected.filter(i => i.id !== item.id));
    } else {
      setSelected([...selected, item]);
    }
  };

  const total = selected.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = () => {
    if (selected.length === 0) {
      showFeedback('error', 'Ops!', 'Sila pilih sarapan dahulu.');
      return;
    }

    const hasAiskrim = selected.find(i => i.id === 'aiskrim');

    if (hasAiskrim && selected.length === 1) {
      showFeedback('error', 'Fikir Semula', 'Aiskrim ialah kehendak. Sarapan perlu makanan yang mengenyangkan.');
    } else if (total > 6) {
      showFeedback('error', 'Bajet Terlebih', 'Kamu berbelanja terlalu banyak untuk sarapan. Cuba pilih yang lebih menjimatkan.');
    } else {
      showFeedback('success', 'Pilihan Bijak!', 'Kamu telah memilih sarapan yang sesuai dan masih mempunyai baki wang.');
      onComplete(2, -total, 5);
    }
  };

  return (
    <div className="screen-layout mission-screen">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🍳</span>
          <h2>Misi 2: Kedai Sarapan</h2>
        </div>
        <p className="scenario">Pilih sarapan yang mengenyangkan dan menjimatkan.</p>

        <div className="items-grid">
          {items.map(item => (
            <button
              key={item.id}
              className={`item-card ${selected.find(i => i.id === item.id) ? 'selected' : ''}`}
              onClick={() => toggleItem(item)}
            >
              <span className="item-emoji">{item.emoji}</span>
              <span className="item-name">{item.name}</span>
              <span className="item-price">RM{item.price}</span>
            </button>
          ))}
        </div>

        <div className="cart-summary">
          <p>Jumlah: <strong>RM{total}</strong></p>
          <GameButton color="var(--grass-green)" onClick={handleSubmit}>Selesai Pilih</GameButton>
        </div>

        <div className="kbat-box">
          <p>💡 <strong>Soalan KBAT:</strong> Mengapa aiskrim kurang sesuai sebagai sarapan?</p>
        </div>
      </div>
    </div>
  );
};

export default Mission2Screen;
