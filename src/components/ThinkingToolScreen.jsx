import React, { useState } from 'react';
import GameButton from './GameButton';

const ThinkingToolScreen = ({ onBack, onCorrect }) => {
  const [items, setItems] = useState([
    { id: 1, name: 'makanan', category: 'keperluan', emoji: '🍱', status: 'pending' },
    { id: 2, name: 'air mineral', category: 'keperluan', emoji: '💧', status: 'pending' },
    { id: 3, name: 'pensel', category: 'keperluan', emoji: '✏️', status: 'pending' },
    { id: 4, name: 'buku latihan', category: 'keperluan', emoji: '📚', status: 'pending' },
    { id: 5, name: 'pemadam', category: 'keperluan', emoji: '🧽', status: 'pending' },
    { id: 6, name: 'mainan kecil', category: 'kehendak', emoji: '🧸', status: 'pending' },
    { id: 7, name: 'aiskrim', category: 'kehendak', emoji: '🍦', status: 'pending' },
    { id: 8, name: 'pelekat kartun', category: 'kehendak', emoji: '🎨', status: 'pending' },
    { id: 9, name: 'keychain', category: 'kehendak', emoji: '🔑', status: 'pending' },
    { id: 10, name: 'jajan', category: 'kehendak', emoji: '🍟', status: 'pending' },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClassify = (category) => {
    if (!selectedItem) return;

    if (selectedItem.category === category) {
      setItems(items.map(item =>
        item.id === selectedItem.id ? { ...item, status: 'correct' } : item
      ));
      setSelectedItem(null);
      onCorrect();
    } else {
      // Wrong choice handled by component local state if needed or just ignored
      alert("Cuba lagi. Adakah ini keperluan atau kehendak?");
    }
  };

  const pendingItems = items.filter(i => i.status === 'pending');
  const keperluanItems = items.filter(i => i.status === 'correct' && i.category === 'keperluan');
  const kehendakItems = items.filter(i => i.status === 'correct' && i.category === 'kehendak');

  return (
    <div className="screen-layout thinking-tool">
      <div className="card">
        <h2>Peta Pokok: Keperluan atau Kehendak?</h2>

        {pendingItems.length > 0 ? (
          <div className="classification-area">
            <p>Klik barang dan pilih kategori yang betul:</p>
            <div className="items-to-classify">
              {pendingItems.map(item => (
                <button
                  key={item.id}
                  className={`classify-btn ${selectedItem?.id === item.id ? 'selected' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.emoji} {item.name}
                </button>
              ))}
            </div>

            {selectedItem && (
              <div className="choice-buttons">
                <GameButton color="var(--grass-green)" onClick={() => handleClassify('keperluan')}>
                  Keperluan
                </GameButton>
                <GameButton color="var(--soft-red)" onClick={() => handleClassify('kehendak')}>
                  Kehendak
                </GameButton>
              </div>
            )}
          </div>
        ) : (
          <div className="success-msg">
            <p>Syabas! Kamu telah mengelaskan semua barang dengan betul.</p>
            <GameButton onClick={onBack}>Kembali ke Peta</GameButton>
          </div>
        )}

        <div className="tree-map">
          <div className="tree-column">
            <h3 className="category-header keperluan">KEPERLUAN</h3>
            <div className="tree-items">
              {keperluanItems.map(item => (
                <div key={item.id} className="tree-item">{item.emoji} {item.name}</div>
              ))}
            </div>
          </div>
          <div className="tree-column">
            <h3 className="category-header kehendak">KEHENDAK</h3>
            <div className="tree-items">
              {kehendakItems.map(item => (
                <div key={item.id} className="tree-item">{item.emoji} {item.name}</div>
              ))}
            </div>
          </div>
        </div>

        {pendingItems.length > 0 && (
          <div style={{marginTop: '20px'}}>
             <GameButton color="var(--deep-blue)" onClick={onBack}>Kembali</GameButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThinkingToolScreen;
