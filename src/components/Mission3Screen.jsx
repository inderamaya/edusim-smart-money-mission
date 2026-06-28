import React, { useState } from 'react';
import GameButton from './GameButton';
import BudgetBar from './BudgetBar';
import { speakText } from '../utils/speech';

const Mission3Screen = ({ t, language, balance, onComplete, showFeedback }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 'pensel', name: t.pensel, price: 1, icon: '✏️', type: 'need' },
    { id: 'buku', name: t.bukuLatihan, price: 2, icon: '📓', type: 'need' },
    { id: 'pemadam', name: t.pemadam, price: 1, icon: '🧼', type: 'need' },
    { id: 'sticker', name: t.pelekatKartun, price: 1, icon: '✨', type: 'want' },
    { id: 'toy', name: t.mainanKecil, price: 3, icon: '🧸', type: 'want' }
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
      ? "School Mission. Buy your school supplies. Only buy what you need."
      : "Misi Sekolah. Beli peralatan sekolah kamu. Beli apa yang perlu sahaja.";
    speakText(text, language);
  };

  const handleFinish = () => {
    if (total === 0) {
      showFeedback('error', t.tryAgain, language === 'en' ? 'Please choose at least one item.' : 'Sila pilih sekurang-kurangnya satu item.');
      return;
    }

    const hasNeed = selectedItems.some(i => i.type === 'need');
    if (!hasNeed) {
      showFeedback('error', t.tryAgain, language === 'en' ? 'You need school supplies!' : 'Kamu perlukan peralatan sekolah!');
      return;
    }

    showFeedback('success', t.smartChoice, language === 'en' ? `You bought school supplies for RM${total}.` : `Kamu membeli peralatan sekolah dengan RM${total}.`);
    onComplete(3, -total, 1);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">🏫</span>
          <h2>{t.mission3}</h2>
        </div>

        <BudgetBar t={t} balance={balance} />

        <div className="scenario">
          {language === 'en'
            ? "You are at school. You need some stationery for class."
            : "Kamu berada di sekolah. Kamu perlukan alat tulis untuk kelas."}
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

export default Mission3Screen;
