import { SriLankanDistrict } from '../types';

export const SRI_LANKAN_DISTRICTS: SriLankanDistrict[] = [
  { id: 'anuradhapura', name: 'Anuradhapura', province: 'North Central', zone: 'Dry Zone', predominantSoil: 'Loam' },
  { id: 'polonnaruwa', name: 'Polonnaruwa', province: 'North Central', zone: 'Dry Zone', predominantSoil: 'Clay' },
  { id: 'kurunegala', name: 'Kurunegala', province: 'North Western', zone: 'Intermediate Zone', predominantSoil: 'Loam' },
  { id: 'puttalam', name: 'Puttalam', province: 'North Western', zone: 'Dry Zone', predominantSoil: 'Sandy' },
  { id: 'nuwara-eliya', name: 'Nuwara Eliya', province: 'Central', zone: 'Wet Zone', predominantSoil: 'Loam' },
  { id: 'kandy', name: 'Kandy', province: 'Central', zone: 'Wet Zone', predominantSoil: 'Loam' },
  { id: 'matale', name: 'Matale', province: 'Central', zone: 'Intermediate Zone', predominantSoil: 'Loam' },
  { id: 'badulla', name: 'Badulla', province: 'Uva', zone: 'Intermediate Zone', predominantSoil: 'Loam' },
  { id: 'monaragala', name: 'Monaragala', province: 'Uva', zone: 'Dry Zone', predominantSoil: 'Sandy' },
  { id: 'hambantota', name: 'Hambantota', province: 'Southern', zone: 'Dry Zone', predominantSoil: 'Loam' },
  { id: 'matara', name: 'Matara', province: 'Southern', zone: 'Wet Zone', predominantSoil: 'Clay' },
  { id: 'galle', name: 'Galle', province: 'Southern', zone: 'Wet Zone', predominantSoil: 'Clay' },
  { id: 'ratnapura', name: 'Ratnapura', province: 'Sabaragamuwa', zone: 'Wet Zone', predominantSoil: 'Loam' },
  { id: 'kegalle', name: 'Kegalle', province: 'Sabaragamuwa', zone: 'Wet Zone', predominantSoil: 'Clay' },
  { id: 'jaffna', name: 'Jaffna', province: 'Northern', zone: 'Dry Zone', predominantSoil: 'Sandy' },
  { id: 'kilinochchi', name: 'Kilinochchi', province: 'Northern', zone: 'Dry Zone', predominantSoil: 'Clay' },
  { id: 'mannar', name: 'Mannar', province: 'Northern', zone: 'Dry Zone', predominantSoil: 'Sandy' },
  { id: 'vavuniya', name: 'Vavuniya', province: 'Northern', zone: 'Dry Zone', predominantSoil: 'Loam' },
  { id: 'mullaitivu', name: 'Mullaitivu', province: 'Northern', zone: 'Dry Zone', predominantSoil: 'Sandy' },
  { id: 'batticaloa', name: 'Batticaloa', province: 'Eastern', zone: 'Dry Zone', predominantSoil: 'Sandy' },
  { id: 'ampara', name: 'Ampara', province: 'Eastern', zone: 'Dry Zone', predominantSoil: 'Loam' },
  { id: 'trincomalee', name: 'Trincomalee', province: 'Eastern', zone: 'Dry Zone', predominantSoil: 'Sandy' },
  { id: 'colombo', name: 'Colombo', province: 'Western', zone: 'Wet Zone', predominantSoil: 'Clay' },
  { id: 'gampaha', name: 'Gampaha', province: 'Western', zone: 'Wet Zone', predominantSoil: 'Loam' },
  { id: 'kalutara', name: 'Kalutara', province: 'Western', zone: 'Wet Zone', predominantSoil: 'Clay' },
];

export const SRI_LANKAN_SEASONS = [
  {
    id: 'Yala',
    name: 'Yala Season',
    months: 'May to August',
    monsoon: 'Southwest Monsoon',
    description: 'Dryer climate across the dry zone; relies on reservoir irrigation and minor rainfall.'
  },
  {
    id: 'Maha',
    name: 'Maha Season',
    months: 'September to March',
    monsoon: 'Northeast Monsoon',
    description: 'Major agricultural season with extensive rainfall islandwide; ideal for major cultivation.'
  }
];

export const SOIL_TYPE_OPTIONS = [
  { id: 'Clay', name: 'Clay Soil', description: 'Heavy, nutrient-rich with high water retention. Ideal for paddy and root vegetables.', icon: 'Layers' },
  { id: 'Loam', name: 'Loam Soil', description: 'Balanced blend of sand, silt, and clay. Superior drainage and fertility for most crops.', icon: 'Sprout' },
  { id: 'Sandy', name: 'Sandy Soil', description: 'Light, warm, quick draining. Suitable for tubers, onions, melons, and carrots.', icon: 'Sun' },
  { id: 'Silty', name: 'Silty Soil', description: 'Fine particles, very fertile with good moisture retention. Excellent for vegetables.', icon: 'Droplets' },
  { id: "Don't Know", name: "Don't Know", description: 'Our AI model will automatically estimate soil properties using your district telemetry.', icon: 'HelpCircle' }
];

export const IRRIGATION_OPTIONS = [
  { id: 'Rain-fed', name: 'Rain-fed', description: 'Primarily dependent on seasonal monsoon precipitation and weather patterns.' },
  { id: 'Irrigated', name: 'Irrigated', description: 'Continuous water supply from Mahaweli canals, agrarian tanks, tube wells, or drip systems.' },
  { id: 'Mixed', name: 'Mixed System', description: 'Combination of seasonal rains with supplemental pump or tank irrigation.' }
];
