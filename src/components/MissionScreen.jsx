import React from 'react';
import ScreenLayout from './ScreenLayout';

const MissionScreen = ({ children, title, icon }) => {
  return (
    <ScreenLayout className="mission-screen">
      <div className="card">
        <div className="mission-header">
          <span className="mission-icon">{icon}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </ScreenLayout>
  );
};

export default MissionScreen;
