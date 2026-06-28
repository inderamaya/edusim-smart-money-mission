import React, { useState } from 'react';
import GameButton from './GameButton';

const Mission5Screen = ({ onComplete, showFeedback }) => {
  const items = [
    { id: 'pensel_biasa', name: 'Pensel biasa', price: 1, emoji: '✏️' },
    { id: 'pensel_mekanikal', name: 'Pensel mekanikal', price: 4, emoji: '✍️' },
    { id: 'pemadam', name: 'Pemadam', price: 1, emoji: '🧽' },
    { id: 'buku_nota', name: 'Buku nota', price: 3, emoji: '📓' }
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
      showFeedback('error', 'Ops!', 'Sila pilih barang yang diperlukan.');
      return;
    }

    const hasExpensive = selected.find(i => i.id === 'pensel_mekanikal');

    if (hasExpensive) {
      showFeedback('success', 'Pilihan Diterima', 'Pensel mekanikal lebih mahal. Pensel biasa lebih menjimatkan.');
      onComplete(5, -total, 3);
    } else {
      showFeedback('success', 'Pilihan Bijak!', 'Bagus! Kamu membandingkan harga dan memilih yang lebih menjimatkan.');
      onComplete(5, -total, 5);
    }
  };

  return (
    <div className="screen-layout mission-screen">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">✏️</span>
          <h2>Misi 5: Kedai Alat Tulis</h2>
        </div>
        <p className="scenario">Bandingkan harga dan pilih barang yang berguna.</p>

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
          <p>💡 <strong>Soalan KBAT:</strong> Adakah barang yang lebih mahal sentiasa lebih baik? Mengapa?</p>
        </div>
      </div>
    </div>
  );
};

export default Mission5Screen;
