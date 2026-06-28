import React from 'react';
import GameButton from './GameButton';

const MissionMapScreen = ({ completedMissions, onSelectMission, onTeacherNotes }) => {
  const missions = [
    { id: 1, title: 'Rumah', icon: '🏠', color: 'var(--brick-orange)' },
    { id: 2, title: 'Kedai Sarapan', icon: '🍳', color: 'var(--deep-blue)' },
    { id: 3, title: 'Sekolah', icon: '🏫', color: 'var(--grass-green)' },
    { id: 4, title: 'Kantin', icon: '🍱', color: 'var(--soft-red)' },
    { id: 5, title: 'Kedai Alat Tulis', icon: '✏️', color: 'var(--deep-blue)' },
    { id: 6, title: 'Taman Permainan', icon: '🛝', color: 'var(--grass-green)' }
  ];

  return (
    <div className="screen-layout mission-map">
      <div className="card">
        <h2>Peta Misi</h2>
        <div className="mission-path">
          {missions.map((mission, index) => {
            const isCompleted = completedMissions.includes(mission.id);
            const isUnlocked = index === 0 || completedMissions.includes(missions[index - 1].id);

            return (
              <div key={mission.id} className={`mission-node ${isUnlocked ? 'unlocked' : 'locked'}`}>
                <button
                  className={`mission-card ${isCompleted ? 'completed' : ''}`}
                  onClick={() => isUnlocked && onSelectMission(mission.id)}
                  disabled={!isUnlocked}
                  style={{ borderColor: mission.color }}
                >
                  <div className="mission-badge">{mission.id}</div>
                  <div className="mission-icon">{mission.icon}</div>
                  <div className="mission-title">{mission.title}</div>
                  {isCompleted && <div className="status-indicator">✅ Selesai</div>}
                  {!isUnlocked && <div className="status-indicator">🔒 Terkunci</div>}
                </button>
                {index < missions.length - 1 && (
                  <div className={`path-line ${isCompleted ? 'completed' : ''}`}></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="map-footer">
          <GameButton color="var(--pipe-green)" onClick={() => onSelectMission('THINKING_TOOL')}>
             🧠 Alat Berfikir
          </GameButton>
          <GameButton color="var(--brick-orange)" onClick={onTeacherNotes}>
            📒 Nota Guru
          </GameButton>
        </div>
      </div>
    </div>
  );
};

export default MissionMapScreen;
