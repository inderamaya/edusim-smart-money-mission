import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import PlatformBackground from './components/PlatformBackground';
import FeedbackModal from './components/FeedbackModal';
import CoverScreen from './components/CoverScreen';
import InstructionsScreen from './components/InstructionsScreen';
import ObjectivesScreen from './components/ObjectivesScreen';
import AvatarSelectionScreen from './components/AvatarSelectionScreen';
import MissionMapScreen from './components/MissionMapScreen';
import ThinkingToolScreen from './components/ThinkingToolScreen';
import Mission1Screen from './components/Mission1Screen';
import Mission2Screen from './components/Mission2Screen';
import Mission3Screen from './components/Mission3Screen';
import Mission4Screen from './components/Mission4Screen';
import Mission5Screen from './components/Mission5Screen';
import Mission6Screen from './components/Mission6Screen';
import BudgetChallengeScreen from './components/BudgetChallengeScreen';
import TeacherNotesScreen from './components/TeacherNotesScreen';
import MissionCompleteScreen from './components/MissionCompleteScreen';
import { sounds } from './utils/sounds';

function App() {
  const [currentScreen, setCurrentScreen] = useState('COVER');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [balance, setBalance] = useState(20);
  const [stars, setStars] = useState(0);
  const [completedMissions, setCompletedMissions] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [feedback, setFeedback] = useState(null);

  // Navigation
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleToggleSound = () => setSoundEnabled(!soundEnabled);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    navigateTo('MISSION_MAP');
  };

  const showFeedback = (type, title, message) => {
    setFeedback({ type, title, message });
    if (soundEnabled) {
      if (type === 'success') sounds.correct();
      else sounds.wrong();
    }
  };

  const handleCorrectChoice = () => {
    setStars(prev => prev + 1);
    if (soundEnabled) sounds.coin();
  };

  const handleMissionComplete = (id, balanceChange, starReward) => {
    if (!completedMissions.includes(id)) {
      setBalance(prev => prev + balanceChange);
      setStars(prev => prev + starReward);
      setCompletedMissions(prev => [...prev, id]);
      if (soundEnabled) sounds.complete();
    }

    if (id === 6) {
        navigateTo('BUDGET_CHALLENGE');
    } else {
        navigateTo('MISSION_MAP');
    }
  };

  const resetGame = () => {
    setBalance(20);
    setStars(0);
    setCompletedMissions([]);
    navigateTo('COVER');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'COVER':
        return (
          <CoverScreen
            onStart={() => navigateTo('AVATAR_SELECTION')}
            onInstructions={() => navigateTo('INSTRUCTIONS')}
            onObjectives={() => navigateTo('OBJECTIVES')}
          />
        );
      case 'INSTRUCTIONS':
        return (
          <InstructionsScreen
            onBack={() => navigateTo('COVER')}
            onNext={() => navigateTo('AVATAR_SELECTION')}
          />
        );
      case 'OBJECTIVES':
        return <ObjectivesScreen onBack={() => navigateTo('COVER')} />;
      case 'AVATAR_SELECTION':
        return <AvatarSelectionScreen onSelect={handleAvatarSelect} />;
      case 'MISSION_MAP':
        return (
          <MissionMapScreen
            completedMissions={completedMissions}
            onSelectMission={(id) => {
              if (id === 'THINKING_TOOL') navigateTo('THINKING_TOOL');
              else navigateTo(`MISSION_${id}`);
            }}
            onTeacherNotes={() => navigateTo('TEACHER_NOTES')}
          />
        );
      case 'THINKING_TOOL':
        return (
          <ThinkingToolScreen
            onBack={() => navigateTo('MISSION_MAP')}
            onCorrect={handleCorrectChoice}
          />
        );
      case 'MISSION_1':
        return <Mission1Screen onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_2':
        return <Mission2Screen onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_3':
        return <Mission3Screen onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_4':
        return <Mission4Screen onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_5':
        return <Mission5Screen onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_6':
        return <Mission6Screen onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'BUDGET_CHALLENGE':
        return <BudgetChallengeScreen onComplete={() => navigateTo('MISSION_COMPLETE')} />;
      case 'TEACHER_NOTES':
        return <TeacherNotesScreen onBack={() => navigateTo('MISSION_MAP')} />;
      case 'MISSION_COMPLETE':
        return (
          <MissionCompleteScreen
            stars={stars}
            balance={balance}
            onRestart={resetGame}
            onMap={() => navigateTo('MISSION_MAP')}
          />
        );

      default:
        return (
          <div className="screen-layout">
            <h2>Screen: {currentScreen}</h2>
            <button className="game-button" onClick={() => navigateTo('COVER')}>Ke Halaman Utama</button>
          </div>
        );
    }
  };

  return (
    <div className="game-container">
      <HeaderBar
        balance={balance}
        stars={stars}
        avatar={selectedAvatar}
        onHome={() => navigateTo('COVER')}
        onMap={() => navigateTo('MISSION_MAP')}
        soundEnabled={soundEnabled}
        toggleSound={handleToggleSound}
      />

      <PlatformBackground>
        {renderScreen()}
      </PlatformBackground>

      <FeedbackModal
        feedback={feedback}
        onClose={() => setFeedback(null)}
      />
    </div>
  );
}

export default App;
