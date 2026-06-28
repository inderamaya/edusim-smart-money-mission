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
import { sounds, bgMusic } from './utils/audio';
import { translations } from './data/translations';

function App() {
  const [currentScreen, setCurrentScreen] = useState('COVER');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [language, setLanguage] = useState('bm');
  const [balance, setBalance] = useState(10);
  const [stars, setStars] = useState(0);
  const [coins, setCoins] = useState(0);
  const [completedMissions, setCompletedMissions] = useState([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [feedback, setFeedback] = useState(null);

  const t = translations[language];

  // Navigation
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const handleToggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    if (!newState) {
      bgMusic.stop();
    } else if (currentScreen !== 'COVER') {
      bgMusic.start();
    }
  };
  const handleToggleLanguage = () => {
    setLanguage(prev => prev === 'bm' ? 'en' : 'bm');
    if (soundEnabled && sounds.languageSwitch) sounds.languageSwitch();
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    if (soundEnabled && sounds.avatarSelect) sounds.avatarSelect();
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
    setCoins(prev => prev + 5); // Smart choice gives some coins
    if (soundEnabled) sounds.coin();
  };

  const handleMissionComplete = (id, balanceChange, starReward, coinReward = 10) => {
    if (!completedMissions.includes(id)) {
      setBalance(prev => Math.max(0, prev + balanceChange));
      setStars(prev => prev + starReward);
      setCoins(prev => prev + coinReward);
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
    setBalance(10);
    setStars(0);
    setCoins(0);
    setCompletedMissions([]);
    navigateTo('COVER');
  };

  useEffect(() => {
    if (soundEnabled && currentScreen !== 'COVER') {
      bgMusic.start();
    } else {
      bgMusic.stop();
    }
  }, [currentScreen, soundEnabled]);

  const renderScreen = () => {
    const commonProps = { t, language };
    switch (currentScreen) {
      case 'COVER':
        return (
          <CoverScreen
            {...commonProps}
            onStart={() => navigateTo('AVATAR_SELECTION')}
            onInstructions={() => navigateTo('INSTRUCTIONS')}
            onObjectives={() => navigateTo('OBJECTIVES')}
          />
        );
      case 'INSTRUCTIONS':
        return (
          <InstructionsScreen
            {...commonProps}
            onBack={() => navigateTo('COVER')}
            onNext={() => navigateTo('AVATAR_SELECTION')}
          />
        );
      case 'OBJECTIVES':
        return <ObjectivesScreen {...commonProps} onBack={() => navigateTo('COVER')} />;
      case 'AVATAR_SELECTION':
        return <AvatarSelectionScreen {...commonProps} onSelect={handleAvatarSelect} />;
      case 'MISSION_MAP':
        return (
          <MissionMapScreen
            {...commonProps}
            completedMissions={completedMissions}
            onSelectMission={(id) => {
              if (id === 'THINKING_TOOL') {
                navigateTo('THINKING_TOOL');
              } else {
                if (completedMissions.includes(id)) {
                  showFeedback('info', t.missionComplete, t.alreadyCompleted);
                } else {
                  navigateTo(`MISSION_${id}`);
                }
              }
            }}
            onTeacherNotes={() => navigateTo('TEACHER_NOTES')}
          />
        );
      case 'THINKING_TOOL':
        return (
          <ThinkingToolScreen
            {...commonProps}
            onBack={() => navigateTo('MISSION_MAP')}
            onCorrect={handleCorrectChoice}
          />
        );
      case 'MISSION_1':
        return <Mission1Screen {...commonProps} balance={balance} onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_2':
        return <Mission2Screen {...commonProps} balance={balance} onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_3':
        return <Mission3Screen {...commonProps} balance={balance} onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_4':
        return <Mission4Screen {...commonProps} balance={balance} onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_5':
        return <Mission5Screen {...commonProps} balance={balance} onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'MISSION_6':
        return <Mission6Screen {...commonProps} balance={balance} onComplete={handleMissionComplete} showFeedback={showFeedback} />;
      case 'BUDGET_CHALLENGE':
        return <BudgetChallengeScreen {...commonProps} onComplete={() => navigateTo('MISSION_COMPLETE')} />;
      case 'TEACHER_NOTES':
        return <TeacherNotesScreen {...commonProps} onBack={() => navigateTo('MISSION_MAP')} />;
      case 'MISSION_COMPLETE':
        return (
          <MissionCompleteScreen
            {...commonProps}
            stars={stars}
            balance={balance}
            coins={coins}
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
        t={t}
        balance={balance}
        stars={stars}
        coins={coins}
        avatar={selectedAvatar}
        onHome={() => navigateTo('COVER')}
        onMap={() => navigateTo('MISSION_MAP')}
        soundEnabled={soundEnabled}
        toggleSound={handleToggleSound}
        language={language}
        toggleLanguage={handleToggleLanguage}
      />

      <PlatformBackground>
        {renderScreen()}
      </PlatformBackground>

      <FeedbackModal
        t={t}
        feedback={feedback}
        onClose={() => setFeedback(null)}
      />
    </div>
  );
}

export default App;
