import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';
import { Target, Volume2, ArrowLeft } from 'lucide-react';

const ObjectivesScreen = ({ t, language, onBack }) => {
  const objectives = language === 'en' ? [
    "Identify needs and wants.",
    "Compare item prices.",
    "Calculate total spending.",
    "Make smart choices.",
    "Save money."
  ] : [
    "Mengenal keperluan dan kehendak.",
    "Membandingkan harga barang.",
    "Mengira jumlah perbelanjaan.",
    "Membuat pilihan bijak.",
    "Menyimpan baki wang."
  ];

  const handleListen = () => {
    speakText(objectives.join(". "), language);
  };

  return (
    <div className="screen-layout">
      <div className="card">
        <h2>{t.objectives}</h2>
        <div className="grid-flex" style={{ gap: '15px', marginBottom: '20px' }}>
          {objectives.map((obj, i) => (
            <div key={i} className="objective-card" style={{ width: '100%' }}>
              <Target size={32} className="objective-icon" color="var(--brick-orange)" />
              <p>{obj}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>
            <Volume2 size={20} /> {t.listen}
          </GameButton>
        </div>

        <div style={{ textAlign: 'center' }}>
          <GameButton color="var(--soft-red)" onClick={onBack}>
            <ArrowLeft size={20} /> {t.back}
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesScreen;
