import React, { useState } from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';
import { Volume2, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

const ThinkingToolScreen = ({ t, language, onBack, onCorrect }) => {
  const [unclassifiedItems, setUnclassifiedItems] = useState([
    { id: 'food', name: t.makanan, type: 'need' },
    { id: 'water', name: t.water, type: 'need' },
    { id: 'toy', name: t.mainanKecil, type: 'want' },
    { id: 'ice', name: t.aiskrim, type: 'want' },
    { id: 'pencil', name: t.pencil, type: 'need' },
    { id: 'sticker', name: t.pelekatKartun, type: 'want' }
  ]);
  const [needs, setNeeds] = useState([]);
  const [wants, setWants] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const selectedItem = unclassifiedItems.find(i => i.id === selectedItemId);

  const handleSelectItem = (id) => {
    setSelectedItemId(id);
    setFeedback(null);
  };

  const handlePlaceIn = (category) => {
    if (!selectedItem) return;

    const isCorrect = selectedItem.type === category;

    if (category === 'need') {
      setNeeds([...needs, { ...selectedItem, correct: isCorrect }]);
    } else {
      setWants([...wants, { ...selectedItem, correct: isCorrect }]);
    }

    setUnclassifiedItems(unclassifiedItems.filter(i => i.id !== selectedItemId));
    setSelectedItemId(null);

    if (isCorrect) {
      onCorrect();
      setFeedback({ type: 'success', text: t.smartChoice });
    } else {
      setFeedback({ type: 'error', text: t.tryAgain });
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
          <GameButton color="#666" onClick={handleListen}><Volume2 size={20} /></GameButton>
        </div>

        {feedback && (
          <div className={`feedback-text ${feedback.type}`} style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
            {feedback.text}
          </div>
        )}

        <div className="items-pool">
          <h3>{unclassifiedItems.length > 0 ? (language === 'bm' ? 'Pilih Item:' : 'Select Item:') : (language === 'bm' ? 'Syabas! Semua sudah dikelaskan.' : 'Well done! All items classified.')}</h3>
          <div className="items-grid">
            {unclassifiedItems.map(item => (
              <div
                key={item.id}
                className={`draggable-item ${selectedItemId === item.id ? 'selected' : ''}`}
                onClick={() => handleSelectItem(item.id)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="drop-zones">
          <div
            className={`drop-zone need-zone ${selectedItem ? 'active' : ''}`}
            onClick={() => handlePlaceIn('need')}
          >
            <div className="category-header keperluan">{t.needs}</div>
            <div className="zone-items">
              {needs.map(i => (
                <div key={i.id} className={`zone-item ${i.correct ? 'correct' : 'wrong'}`}>
                  {i.correct ? <CheckCircle2 size={16} color="var(--grass-green)" /> : <XCircle size={16} color="var(--soft-red)" />} {i.name}
                </div>
              ))}
            </div>
            {selectedItem && <div className="drop-hint">{language === 'bm' ? 'Klik untuk letak di sini' : 'Click to place here'}</div>}
          </div>

          <div
            className={`drop-zone want-zone ${selectedItem ? 'active' : ''}`}
            onClick={() => handlePlaceIn('want')}
          >
            <div className="category-header kehendak">{t.wants}</div>
            <div className="zone-items">
              {wants.map(i => (
                <div key={i.id} className={`zone-item ${i.correct ? 'correct' : 'wrong'}`}>
                  {i.correct ? <CheckCircle2 size={16} color="var(--grass-green)" /> : <XCircle size={16} color="var(--soft-red)" />} {i.name}
                </div>
              ))}
            </div>
            {selectedItem && <div className="drop-hint">{language === 'bm' ? 'Klik untuk letak di sini' : 'Click to place here'}</div>}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <GameButton color="var(--soft-red)" onClick={onBack}><ArrowLeft size={20} /> {t.back}</GameButton>
        </div>
      </div>
    </div>
  );
};

export default ThinkingToolScreen;
