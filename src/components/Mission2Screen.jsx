import React, { useState } from 'react';
import GameButton from './GameButton';
import BudgetBar from './BudgetBar';
import { speakText } from '../utils/speech';

const Mission2Screen = ({ t, language, balance, onComplete, showFeedback }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 'roti', name: t.roti, price: 1, icon: '🍞', type: 'need' },
    { id: 'water', name: t.airMineral, price: 1, icon: '💧', type: 'need' },
    { id: 'nasi', name: t.nasiLemak, price: 2, icon: '🍛', type: 'need' },
    { id: 'ice', name: t.aiskrim, price: 2, icon: '🍦', type: 'want' }
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
      ? "Breakfast Shop. Choose a healthy breakfast. What do you want to buy?"
      : "Kedai Sarapan. Pilih sarapan yang sihat. Apa yang kamu mahu beli?";
    speakText(text, language);
  };

  const handleFinish = () => {
    if (total === 0) {
      showFeedback('error', t.tryAgain, language === 'en' ? 'Please choose at least one item.' : 'Sila pilih sekurang-kurangnya satu item.');
      return;
    }

    if (total > 10) {
      showFeedback('error', t.tryAgain, language === 'en' ? 'Not enough money!' : 'Wang tidak mencukupi!');
      return;
    }

    const hasNeed = selectedItems.some(i => i.type === 'need');
    if (!hasNeed) {
       showFeedback('error', t.tryAgain, language === 'en' ? 'Choose something healthy for breakfast!' : 'Pilih sarapan yang menyihatkan!');
       return;
    }

    showFeedback('success', t.smartChoice, language === 'en' ? `You spent RM${total} on breakfast.` : `Kamu membelanjakan RM${total} untuk sarapan.`);
    onComplete(2, -total, 1);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🍳</span>
          <h2>{t.mission2}</h2>
        </div>

        <BudgetBar t={t} balance={balance} />

        <div className="scenario">
          {language === 'en'
            ? "Stop at the breakfast shop. Choose a healthy breakfast."
            : "Singgah di kedai sarapan. Pilih sarapan yang berkhasiat."}
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

export default Mission2Screen;
