import {
  FarmInput,
  PredictionResponse,
  RecommendedCrop,
} from '../types';

import { CROP_DATABASE } from '../data/cropDetailsData';

const BACKEND_API_URL = 'http://127.0.0.1:5000/api/predict';

export async function predictCropRecommendations(
  input: FarmInput
): Promise<PredictionResponse> {

  const response = await fetch(BACKEND_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      district: input.district,
      season: input.season,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);

    throw new Error(
      errorData?.error ||
      `Backend returned status ${response.status}`
    );
  }

  const data: PredictionResponse = await response.json();

  if (
    !data ||
    !Array.isArray(data.recommended_crops) ||
    data.recommended_crops.length === 0 ||
    !data.features
  ) {
    throw new Error('Invalid response from ANN backend.');
  }

  const enrichedCrops = data.recommended_crops.map((crop) => {

    const localMeta: Partial<RecommendedCrop> =
      CROP_DATABASE[crop.name] || {};

    return {
      ...localMeta,
      ...crop,
      image: localMeta.image,
    };

  });

  return {
    ...data,
    recommended_crops: enrichedCrops,
  };
}