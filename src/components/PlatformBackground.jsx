import React from 'react';

const PlatformBackground = ({ children }) => {
  return (
    <div className="platform-bg">
      <div className="sky-layer">
        <div className="cloud cloud-1">☁️</div>
        <div className="cloud cloud-2">☁️</div>
        <div className="cloud cloud-3">☁️</div>
      </div>
      <div className="hills-layer">
        <div className="hill hill-1"></div>
        <div className="hill hill-2"></div>
      </div>
      <div className="ground-layer"></div>
      <div className="content-layer">
        {children}
      </div>
    </div>
  );
};

export default PlatformBackground;
