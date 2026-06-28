import React from 'react';

const StarCounter = ({ amount }) => {
  return (
    <div className="counter" title="Bintang Terkumpul">
      <span className="star-icon">⭐</span>
      <span>{amount}</span>
    </div>
  );
};

export default StarCounter;
