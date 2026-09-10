import { useState, useCallback } from 'react';
import { FarmInput, PredictionResponse, RecommendedCrop } from '../types';
import { predictCropRecommendations } from '../services/api';

const LOADING_MESSAGES = [
  'Analyzing district telemetry & climate...',
  'Loading weather forecasts & monsoons...',
  'Estimating soil nutrients & macro-factors...',
  'Running ANN machine learning model...',
  'Evaluating crop surplus risks across markets...',
  'Generating optimal crop recommendations...',
  'Preparing final personalized results...'
];

export function useCropPrediction() {
  const [inputs, setInputs] = useState<FarmInput>({
    district: 'Nuwara Eliya',
    season: 'Yala',
    landSize: 2.5,
    soilType: 'Loam',
    irrigation: 'Rain-fed',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(LOADING_MESSAGES[0]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [results, setResults] = useState<PredictionResponse | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<RecommendedCrop | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateInput = useCallback(<K extends keyof FarmInput>(field: K, value: FarmInput[K]) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  }, []);

  const runPrediction = useCallback(async (customInput?: FarmInput) => {
    const inputData = customInput || inputs;
    setIsLoading(true);
    setError(null);
    setLoadingProgress(10);
    setLoadingMessage(LOADING_MESSAGES[0]);

    // Animate through the loading steps
    const stepInterval = 450;
    let currentStep = 0;

    const intervalId = setInterval(() => {
      currentStep++;
      if (currentStep < LOADING_MESSAGES.length) {
        setLoadingMessage(LOADING_MESSAGES[currentStep]);
        setLoadingProgress(Math.min(95, Math.round(((currentStep + 1) / LOADING_MESSAGES.length) * 95)));
      }
    }, stepInterval);

    try {
      const response = await predictCropRecommendations(inputData);
      clearInterval(intervalId);
      setLoadingProgress(100);
      setLoadingMessage('Complete! Launching your results...');
      
      setTimeout(() => {
        setResults(response);
        setIsLoading(false);
      }, 500);

      return response;
    } catch (err: any) {
      clearInterval(intervalId);
      setError(err?.message || 'Failed to predict recommendations');
      setIsLoading(false);
      return null;
    }
  }, [inputs]);

  const resetPrediction = useCallback(() => {
    setResults(null);
    setSelectedCrop(null);
    setIsLoading(false);
    setError(null);
  }, []);

  return {
    inputs,
    updateInput,
    isLoading,
    loadingMessage,
    loadingProgress,
    results,
    selectedCrop,
    setSelectedCrop,
    error,
    runPrediction,
    resetPrediction,
  };
}
