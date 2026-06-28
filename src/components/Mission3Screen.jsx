import React, { useState } from 'react';
import GameButton from './GameButton';

const Mission3Screen = ({ onComplete, showFeedback }) => {
  const items = [
    { id: 'pensel', name: 'Pensel', price: 1, emoji: '✏️', type: 'keperluan' },
    { id: 'buku', name: 'Buku latihan', price: 3, emoji: '📚', type: 'keperluan' },
    { id: 'pemadam', name: 'Pemadam', price: 1, emoji: '🧽', type: 'keperluan' },
    { id: 'pelekat', name: 'Pelekat kartun', price: 2, emoji: '🎨', type: 'kehendak' },
    { id: 'mainan', name: 'Mainan kecil', price: 5, emoji: '🧸', type: 'kehendak' }
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
    const keperluanCount = selected.filter(i => i.type === 'keperluan').length;
    const kehendakCount = selected.filter(i => i.type === 'kehendak').length;

    if (keperluanCount >= 2 && kehendakCount === 0) {
      showFeedback('success', 'Bagus!', 'Alat tulis membantu kamu belajar. Pilihan yang sangat bijak!');
      onComplete(3, -total, 5);
    } else if (keperluanCount < 2) {
      showFeedback('error', 'Fikir Semula', 'Pilih barang yang penting untuk belajar dahulu.');
    } else {
      showFeedback('success', 'Pilihan Diterima', 'Kamu beli keperluan, tapi ingat, simpan wang itu lebih baik daripada beli kehendak.');
      onComplete(3, -total, 3);
    }
  };

  return (
    <div className="screen-layout mission-screen">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🏫</span>
          <h2>Misi 3: Sekolah</h2>
        </div>
        <p className="scenario">Kamu perlu membeli beberapa alat tulis untuk kelas nanti.</p>

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
      </div>
    </div>
  );
};

export default Mission3Screen;
