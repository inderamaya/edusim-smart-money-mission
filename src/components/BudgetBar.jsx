import React from 'react';

const BudgetBar = ({ t, balance, initial = 10 }) => {
  const percentage = (balance / initial) * 100;
  let color = 'var(--grass-green)';

  if (percentage <= 20) {
    color = 'var(--soft-red)';
  } else if (percentage <= 50) {
    color = 'var(--brick-orange)';
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontWeight: 'bold' }}>
        <span>{t.balance}: RM{balance}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="budget-bar-container">
        <div
          className="budget-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        ></div>
      </div>
    </div>
  );
};

export default BudgetBar;
