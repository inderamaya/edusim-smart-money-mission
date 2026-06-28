import React, { useState } from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';

const ThinkingToolScreen = ({ t, language, onBack, onCorrect }) => {
  const [needs, setNeeds] = useState([]);
  const [wants, setWants] = useState([]);

  const items = [
    { id: 'food', name: t.makanan, type: 'need' },
    { id: 'water', name: t.water, type: 'need' },
    { id: 'toy', name: t.mainanKecil, type: 'want' },
    { id: 'ice', name: t.aiskrim, type: 'want' },
    { id: 'pencil', name: t.pencil, type: 'need' },
    { id: 'sticker', name: t.pelekatKartun, type: 'want' }
  ];

  const handleClassify = (item, category) => {
    if (category === 'need') {
      if (!needs.find(i => i.id === item.id)) {
        setNeeds([...needs, item]);
        setWants(wants.filter(i => i.id !== item.id));
        if (item.type === 'need') onCorrect();
      }
    } else {
      if (!wants.find(i => i.id === item.id)) {
        setWants([...wants, item]);
        setNeeds(needs.filter(i => i.id !== item.id));
        if (item.type === 'want') onCorrect();
      }
    }
  };

  const handleListen = () => {
    speakText(t.thinkingToolTitle, language);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <h2>{t.thinkingToolTitle}</h2>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>🔊</GameButton>
        </div>

        <div className="items-to-classify">
          {items.map(item => (
            <div key={item.id} className="card" style={{ padding: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span>{item.name}</span>
              <button className="classify-btn" onClick={() => handleClassify(item, 'need')}>{t.needs}</button>
              <button className="classify-btn" onClick={() => handleClassify(item, 'want')}>{t.wants}</button>
            </div>
          ))}
        </div>

        <div className="tree-map">
          <div className="tree-column">
            <div className="category-header keperluan">{t.needs}</div>
            <div className="tree-items">
              {needs.map(i => <div key={i.id} className="tree-item">✅ {i.name}</div>)}
            </div>
          </div>
          <div className="tree-column">
            <div className="category-header kehendak">{t.wants}</div>
            <div className="tree-items">
              {wants.map(i => <div key={i.id} className="tree-item">✅ {i.name}</div>)}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <GameButton color="var(--soft-red)" onClick={onBack}>{t.back}</GameButton>
        </div>
      </div>
    </div>
  );
};

export default ThinkingToolScreen;
