import React, { useState } from 'react';
import GameButton from './GameButton';
import BudgetBar from './BudgetBar';
import { speakText } from '../utils/speech';

const Mission5Screen = ({ t, language, balance, onComplete, showFeedback }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 'pensel_b', name: t.penselBiasa, price: 1, icon: '✏️', type: 'need' },
    { id: 'pensel_m', name: t.penselMekanikal, price: 3, icon: '🖋️', type: 'want' },
    { id: 'pemadam', name: t.pemadam, price: 1, icon: '🧼', type: 'need' },
    { id: 'nota', name: t.bukuNota, price: 2, icon: '📓', type: 'need' }
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
      ? "Stationery Shop. Compare prices. Do you need a mechanical pencil or a normal one?"
      : "Kedai Alat Tulis. Bandingkan harga. Adakah kamu perlukan pensel mekanikal atau pensel biasa?";
    speakText(text, language);
  };

  const handleFinish = () => {
    if (total === 0) {
      showFeedback('error', t.tryAgain, language === 'en' ? 'Please choose at least one item.' : 'Sila pilih sekurang-kurangnya satu item.');
      return;
    }

    const hasNeed = selectedItems.some(i => i.type === 'need');
    if (!hasNeed && selectedItems.some(i => i.id === 'pensel_m')) {
       showFeedback('success', t.smartChoice, language === 'en' ? 'You chose a fancy pencil! But remember to save.' : 'Kamu memilih pensel yang cantik! Tapi ingat untuk berjimat.');
    } else {
       showFeedback('success', t.smartChoice, language === 'en' ? `Smart shopping! You spent RM${total}.` : `Pembelian yang bijak! Kamu belanja RM${total}.`);
    }

    onComplete(5, -total, 1);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">✏️</span>
          <h2>{t.mission5}</h2>
        </div>

        <BudgetBar t={t} balance={balance} />

        <div className="scenario">
          {language === 'en'
            ? "Visit the stationery shop after school. Compare the prices."
            : "Singgah di kedai alat tulis selepas sekolah. Bandingkan harga barang."}
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

export default Mission5Screen;
