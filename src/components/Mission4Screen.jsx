import React, { useState } from 'react';
import GameButton from './GameButton';

const Mission4Screen = ({ onComplete, showFeedback }) => {
  const items = [
    { id: 'nasi_ayam', name: 'Nasi ayam', price: 5, emoji: '🍗' },
    { id: 'mi_goreng', name: 'Mi goreng', price: 4, emoji: '🍝' },
    { id: 'air_mineral', name: 'Air mineral', price: 1, emoji: '💧' },
    { id: 'air_kotak', name: 'Air kotak', price: 2, emoji: '🧃' },
    { id: 'jajan', name: 'Jajan', price: 3, emoji: '🍟' }
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
      showFeedback('error', 'Ops!', 'Sila pilih makanan untuk kantin.');
      return;
    }

    const hasJajan = selected.find(i => i.id === 'jajan');
    const hasWater = selected.find(i => i.id === 'air_mineral');

    if (hasJajan) {
      showFeedback('success', 'Pilihan Diterima', 'Kamu beli jajan, tapi ingat ia kurang berkhasiat. Nasi lebih baik untuk tenaga.');
      onComplete(4, -total, 3);
    } else if (hasWater) {
      showFeedback('success', 'Pilihan Bijak!', 'Bagus! Memilih air mineral menjimatkan wang dan menyihatkan badan.');
      onComplete(4, -total, 5);
    } else {
      showFeedback('success', 'Misi Selesai', 'Kamu telah memilih makanan tengah hari.');
      onComplete(4, -total, 4);
    }
  };

  return (
    <div className="screen-layout mission-screen">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🍱</span>
          <h2>Misi 4: Kantin</h2>
        </div>
        <p className="scenario">Waktu rehat telah tiba! Pilih makanan dan minuman untuk tengah hari.</p>

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
          <p>💡 <strong>Soalan KBAT:</strong> Jika kamu mahu menyimpan wang, pilihan manakah lebih baik? Mengapa?</p>
        </div>
      </div>
    </div>
  );
};

export default Mission4Screen;
