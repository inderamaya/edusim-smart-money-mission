import React, { useState } from 'react';
import GameButton from './GameButton';

const BudgetChallengeScreen = ({ onComplete }) => {
  const [budget, setBudget] = useState({
    sarapan: 3,
    kantin: 5,
    alatTulis: 4,
    kehendak: 2,
    simpanan: 6
  });

  const total = budget.sarapan + budget.kantin + budget.alatTulis + budget.kehendak + budget.simpanan;

  const handleChange = (category, val) => {
    const newVal = parseInt(val) || 0;
    setBudget({ ...budget, [category]: newVal });
  };

  const handleFinish = () => {
    if (total !== 20) {
      alert(`Jumlah perlu RM20. Sekarang RM${total}`);
      return;
    }
    onComplete();
  };

  return (
    <div className="screen-layout budget-challenge">
      <div className="card castle-card">
        <div className="mission-header">
          <span className="mission-icon">🏰</span>
          <h2>Cabaran Akhir: Rancang Bajet RM20</h2>
        </div>

        <p className="scenario">Rancang perbelanjaan kamu untuk satu hari sekolah dengan RM20.</p>

        <div className="budget-form">
          {Object.entries(budget).map(([key, value]) => (
            <div key={key} className="budget-row">
              <label className="capitalize">{key === 'alatTulis' ? 'Alat Tulis' : key}:</label>
              <div className="input-group">
                <span>RM</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  min="0"
                  max="20"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="budget-total">
          <p>Jumlah: <strong className={total === 20 ? 'text-green' : 'text-red'}>RM{total}</strong> / RM20</p>
        </div>

        <div className="kbat-box">
          <p>💡 <strong>Soalan KBAT:</strong> Mengapa kita perlu ada simpanan?</p>
        </div>

        <div className="button-footer" style={{marginTop: '20px'}}>
           <GameButton
            color={total === 20 ? 'var(--grass-green)' : 'var(--brick-orange)'}
            onClick={handleFinish}
            disabled={total !== 20}
          >
            Hantar Bajet
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default BudgetChallengeScreen;
