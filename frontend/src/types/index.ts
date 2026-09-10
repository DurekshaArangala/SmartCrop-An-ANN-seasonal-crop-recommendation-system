export type SeasonType = 'Yala' | 'Maha';

export type SoilType =
  | 'Clay'
  | 'Loam'
  | 'Sandy'
  | 'Silty'
  | "Don't Know";

export type IrrigationType =
  | 'Rain-fed'
  | 'Irrigated'
  | 'Mixed';

export interface FarmInput {
  district: string;
  season: SeasonType;
  landSize: number;
  soilType: SoilType;
  irrigation: IrrigationType;
}

// Exact numerical features supplied to the trained ANN
export interface PredictionFeatures {
  N: number;
  P: number;
  K: number;
  ph: number;
  temperature: number;
  humidity: number;
  rainfall: number;
}

export interface RecommendedCrop {
  id?: string;
  name: string;
  score: number;
  image?: string;
  overview?: string;
  duration?: string;
  water?: string;
  soilSuitability?: string;
  optimalTemperature?: string;
}

export interface PredictionResponse {
  recommended_crops: RecommendedCrop[];
  district: string;
  season: SeasonType;
  features: PredictionFeatures;
}

export interface SriLankanDistrict {
  id: string;
  name: string;
  province: string;
  zone: 'Dry Zone' | 'Wet Zone' | 'Intermediate Zone';
  predominantSoil: SoilType;
}