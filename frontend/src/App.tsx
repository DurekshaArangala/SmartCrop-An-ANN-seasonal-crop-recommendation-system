import React, { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { WizardPage } from './pages/WizardPage';
import { LoadingPage } from './pages/LoadingPage';
import { ResultsPage } from './pages/ResultsPage';
import { CropDetailsPage } from './pages/CropDetailsPage';
import { AboutPage } from './pages/AboutPage';
import { useCropPrediction } from './hooks/useCropPrediction';
import { FarmInput, RecommendedCrop } from './types';

type AppView = 'home' | 'features' | 'about' | 'wizard' | 'loading' | 'results' | 'details';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [viewingCrop, setViewingCrop] = useState<RecommendedCrop | null>(null);

  const {
    inputs,
    updateInput,
    isLoading,
    loadingMessage,
    loadingProgress,
    results,
    runPrediction,
    resetPrediction,
  } = useCropPrediction();

  // Navigation router
  const handleNavigate = (section: 'home' | 'features' | 'about' | 'wizard') => {
    if (section === 'home') {
      setCurrentView('home');
    } else if (section === 'features') {
      setCurrentView('home');
      setTimeout(() => {
        const featEl = document.getElementById('features');
        if (featEl) featEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (section === 'about') {
      setCurrentView('about');
    } else if (section === 'wizard') {
      setCurrentView('wizard');
    }
  };

  const handleStartWizard = () => {
    setCurrentView('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWizardSubmit = async (formData: FarmInput) => {
    setCurrentView('loading');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const response = await runPrediction(formData);
    if (response) {
      setCurrentView('results');
    } else {
      setCurrentView('wizard');
    }
  };

  const handleViewCropDetails = (crop: RecommendedCrop) => {
    setViewingCrop(crop);
    setCurrentView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToResults = () => {
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    resetPrediction();
    setCurrentView('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine active navigation highlight
  const getActiveNav = (): 'home' | 'features' | 'about' | 'wizard' => {
    if (currentView === 'about') return 'about';
    if (currentView === 'wizard' || currentView === 'loading' || currentView === 'results' || currentView === 'details') {
      return 'wizard';
    }
    return 'home';
  };

  return (
    <MainLayout activeNav={getActiveNav()} onNavigate={handleNavigate}>
      {/* 1. Landing Page */}
      {currentView === 'home' && (
        <LandingPage
          onStartWizard={handleStartWizard}
          onNavigateToAbout={() => handleNavigate('about')}
        />
      )}

      {/* 2. Wizard Multi-Step Farm Input */}
      {currentView === 'wizard' && (
        <WizardPage
          initialInputs={inputs}
          onSubmit={handleWizardSubmit}
          onCancel={() => setCurrentView('home')}
        />
      )}

      {/* 3. Loading Screen with progress circle & cycling AI messages */}
      {currentView === 'loading' && (
        <LoadingPage
          currentMessage={loadingMessage}
          progress={loadingProgress}
        />
      )}

      {/* 4. Prediction Results (Top 6 Crops, Surplus Warning, Actions) */}
      {currentView === 'results' && results && (
        <ResultsPage
          prediction={results}
          inputs={inputs}
          onViewDetails={handleViewCropDetails}
          onReset={handleReset}
        />
      )}

      {/* 5. Individual Crop Details Page */}
      {currentView === 'details' && viewingCrop && results && (
        <CropDetailsPage
          crop={viewingCrop}
          features={results.features}
          district={results.district}
          season={results.season}
          onBack={handleBackToResults}
        />
      )}

      {/* 6. About Page (Objectives, AI Technologies, No contact info) */}
      {currentView === 'about' && (
        <AboutPage onStartWizard={handleStartWizard} />
      )}
    </MainLayout>
  );
}
