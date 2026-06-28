import React, { useState } from 'react';
import GameButton from './GameButton';
import BudgetBar from './BudgetBar';
import { speakText } from '../utils/speech';

const Mission4Screen = ({ t, language, balance, onComplete, showFeedback }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 'ayam', name: t.nasiAyam, price: 3, icon: '🍗', type: 'need' },
    { id: 'mee', name: t.miGoreng, price: 2, icon: '🍝', type: 'need' },
    { id: 'water', name: t.airMineral, price: 1, icon: '💧', type: 'need' },
    { id: 'box', name: t.airKotak, price: 2, icon: '🧃', type: 'want' },
    { id: 'jajan', name: t.jajan, price: 2, icon: '🍿', type: 'want' }
  ];

  const toggleItem = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const handleListen = () => {
    const text = language === 'en'
      ? "Canteen Mission. It's recess time. Choose a smart lunch."
      : "Misi Kantin. Waktu rehat sudah tiba. Pilih makan tengah hari yang bijak.";
    speakText(text, language);
  };

  const handleFinish = () => {
    if (total === 0) {
      showFeedback('error', t.tryAgain, language === 'en' ? 'Please choose at least one item.' : 'Sila pilih sekurang-kurangnya satu item.');
      return;
    }

    const hasNeed = selectedItems.some(i => i.type === 'need');
    if (!hasNeed) {
      showFeedback('error', t.tryAgain, language === 'en' ? 'You need a proper meal for lunch!' : 'Kamu perlukan makanan yang mengenyangkan untuk tengah hari!');
      return;
    }

    showFeedback('success', t.smartChoice, language === 'en' ? `Lunch at the canteen cost RM${total}.` : `Makan tengah hari di kantin berharga RM${total}.`);
    onComplete(4, -total, 1);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🍱</span>
          <h2>{t.mission4}</h2>
        </div>

        <BudgetBar t={t} balance={balance} />

        <div className="scenario">
          {language === 'en'
            ? "It's recess time! Go to the canteen and buy some lunch."
            : "Waktu rehat! Pergi ke kantin dan beli makan tengah hari."}
        </div>

        <div className="items-grid">
          {items.map(item => (
            <div
              key={item.id}
              className={`item-card ${selectedItems.find(i => i.id === item.id) ? 'selected' : ''}`}
              onClick={() => toggleItem(item)}
            >
              <div className="item-emoji">{item.icon}</div>
              <div className="item-name">{item.name}</div>
              <div className="item-price">RM{item.price}</div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <strong>Total: RM{total}</strong>
          <GameButton color="#666" onClick={handleListen}>🔊</GameButton>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <GameButton color="var(--deep-blue)" onClick={handleFinish} className="btn-large">
            {t.finish}
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default Mission4Screen;
