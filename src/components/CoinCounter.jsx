import React from 'react';

const CoinCounter = ({ amount }) => {
  return (
    <div className="counter" title="Baki Wang">
      <span className="coin-icon">🪙</span>
      <span>RM{amount}</span>
    </div>
  );
};

export default CoinCounter;
