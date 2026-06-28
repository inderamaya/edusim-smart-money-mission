import React from 'react';

const ScreenLayout = ({ children, className = '' }) => {
  return (
    <div className={`screen-layout ${className}`}>
      {children}
    </div>
  );
};

export default ScreenLayout;
