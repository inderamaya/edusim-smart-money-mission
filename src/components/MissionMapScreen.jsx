import React from 'react';
import GameButton from './GameButton';
import { speakText } from '../utils/speech';

const MissionMapScreen = ({ t, language, completedMissions, onSelectMission, onTeacherNotes }) => {
  const missions = [
    { id: 1, title: t.mission1, icon: '🏠', color: 'var(--brick-orange)' },
    { id: 2, title: t.mission2, icon: '🍳', color: 'var(--deep-blue)' },
    { id: 3, title: t.mission3, icon: '🏫', color: 'var(--grass-green)' },
    { id: 4, title: t.mission4, icon: '🍱', color: 'var(--soft-red)' },
    { id: 5, title: t.mission5, icon: '✏️', color: 'var(--deep-blue)' },
    { id: 6, title: t.mission6, icon: '🛝', color: 'var(--grass-green)' }
  ];

  const handleListen = () => {
    speakText(t.map, language);
  };

  return (
    <div className="screen-layout mission-map">
      <div className="card">
        <h2>{t.map}</h2>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <GameButton color="#666" onClick={handleListen}>
            🔊 {t.listen}
          </GameButton>
        </div>

        <div className="mission-path">
          {missions.map((mission, index) => {
            const isCompleted = completedMissions.includes(mission.id);
            const isUnlocked = index === 0 || completedMissions.includes(missions[index - 1].id);

            return (
              <div key={mission.id} className="mission-node">
                <button
                  className={`mission-card ${isCompleted ? 'completed' : ''}`}
                  onClick={() => isUnlocked && onSelectMission(mission.id)}
                  disabled={!isUnlocked}
                  style={{ borderColor: mission.color }}
                  title={isUnlocked ? mission.title : 'Locked'}
                >
                  <div className="mission-badge" style={{ backgroundColor: isCompleted ? 'var(--grass-green)' : 'var(--dark-text)' }}>
                    {isCompleted ? '✅' : mission.id}
                  </div>
                  <div className="mission-icon">{mission.icon}</div>
                  <div className="mission-title">{mission.title}</div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="map-footer">
          <GameButton color="var(--pipe-green)" onClick={() => onSelectMission('THINKING_TOOL')}>
             🧠 {t.thinkingToolTitle}
          </GameButton>
          <GameButton color="var(--brick-orange)" onClick={onTeacherNotes}>
            📒 {t.teacherNotes}
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default MissionMapScreen;
