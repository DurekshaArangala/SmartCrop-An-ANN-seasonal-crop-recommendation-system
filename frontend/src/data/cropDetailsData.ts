import { RecommendedCrop } from '../types';

export const CROP_DATABASE: Record<string, RecommendedCrop> = {
  Carrot: {
    id: 'carrot',
    name: 'Carrot',
    score: 96.2,
    profit: 'High',
    duration: '90 Days',
    water: 'Medium',
    risk: 'Low',
    surplus: false,
    expectedYield: '18 - 22 MT / Acre',
    soilSuitability: 'Deep, loose sandy loam with high organic matter',
    optimalTemperature: '15°C - 22°C (Up-country & Intermediate elevations)',
    marketDemand: 'Consistently strong demand across Dambulla, Keppetipola, and Colombo markets',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1000&q=80',
    overview: 'Carrots thrive remarkably in Sri Lanka’s cooler highland soils such as Nuwara Eliya, Badulla, and parts of Kandy. With careful furrow management and adequate phosphorus availability, carrots offer fast crop rotation cycles and exceptional retail profit margins.',
    alternativeCrops: ['Beans', 'Leeks', 'Beetroot'],
    timeline: [
      { phase: 'Phase 1', title: 'Land Preparation & Bed Making', period: 'Days 1 - 10', description: 'Deep ploughing down to 30cm to remove stones. Form raised beds 1m wide with fine tilth and well-decomposed cattle manure.' },
      { phase: 'Phase 2', title: 'Sowing & Germination', period: 'Days 11 - 25', description: 'Direct drill seeds in rows 15cm apart. Keep soil evenly moist using fine mist or sprinkler irrigation.' },
      { phase: 'Phase 3', title: 'Thinning & Vegetative Growth', period: 'Days 26 - 65', description: 'Thin seedlings to 5cm spacing. Apply second top-dressing of organic fertilizer and monitor for early blight.' },
      { phase: 'Phase 4', title: 'Root Bulking & Harvest', period: 'Days 66 - 90', description: 'Moderate watering to avoid root splitting. Harvest uniformly when root shoulders reach 2.5 - 3.5cm diameter.' }
    ]
  },
  Tomato: {
    id: 'tomato',
    name: 'Tomato',
    score: 93.8,
    profit: 'High',
    duration: '75 Days',
    water: 'Medium',
    risk: 'Low',
    surplus: false,
    expectedYield: '14 - 18 MT / Acre',
    soilSuitability: 'Well-drained loam or clay-loam with pH 6.0 - 7.0',
    optimalTemperature: '20°C - 28°C (Mid-country and Dry Zone irrigated)',
    marketDemand: 'High commercial demand for culinary use and local sauce processors',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1000&q=80',
    overview: 'Tomato is a high-value cash crop in Matale, Badulla, Anuradhapura, and Nuwara Eliya. High-yielding hybrid varieties demonstrate strong resilience to seasonal heat and deliver multiple harvesting flushes.',
    alternativeCrops: ['Capsicum', 'Brinjal', 'Bush Beans'],
    timeline: [
      { phase: 'Phase 1', title: 'Nursery & Bed Preparation', period: 'Days 1 - 20', description: 'Raise healthy seedlings in protected tray nurseries with coco-peat. Prepare main field ridges.' },
      { phase: 'Phase 2', title: 'Transplanting & Staking', period: 'Days 21 - 35', description: 'Transplant in evening hours. Install bamboo stakes or trellis lines to support determinate growth.' },
      { phase: 'Phase 3', title: 'Flowering & Fruit Setting', period: 'Days 36 - 60', description: 'Ensure regular drip moisture; avoid overhead wetting. Apply potassium-rich nutrients for firm skin.' },
      { phase: 'Phase 4', title: 'Multiple Harvest Rounds', period: 'Days 61 - 75+', description: 'Harvest at breaker stage for distant transport or pink stage for regional retail markets.' }
    ]
  },
  Maize: {
    id: 'maize',
    name: 'Maize (Corn)',
    score: 91.5,
    profit: 'High',
    duration: '105 Days',
    water: 'Medium',
    risk: 'Low',
    surplus: false,
    expectedYield: '2.5 - 3.2 MT / Acre',
    soilSuitability: 'Deep loamy or alluvial soil with high drainage capacity',
    optimalTemperature: '24°C - 32°C (Dry & Intermediate Zones)',
    marketDemand: 'Guaranteed purchase through feed millers, animal nutrition sectors, and food starch mills',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1000&q=80',
    overview: 'Maize is Sri Lanka’s most critical commercial field crop in Anuradhapura, Monaragala, Ampara, and Kurunegala. With lower risk of market price collapse and subsidized seed access, it provides steady financial returns.',
    alternativeCrops: ['Sorghum', 'Finger Millet (Kurakkan)', 'Soybean'],
    timeline: [
      { phase: 'Phase 1', title: 'Tillage & Direct Seeding', period: 'Days 1 - 10', description: 'Plough field twice after first monsoon showers. Seed at 60cm x 25cm spacing with basal fertilizer.' },
      { phase: 'Phase 2', title: 'Knee-High & Weed Control', period: 'Days 11 - 35', description: 'Mechanical weeding and first earthing-up. Scout for Fall Armyworm using pheromone traps.' },
      { phase: 'Phase 3', title: 'Tasseling & Silking Stage', period: 'Days 36 - 75', description: 'Critical water requirement period. Ensure adequate moisture during pollen drop.' },
      { phase: 'Phase 4', title: 'Grain Filling & Cob Drying', period: 'Days 76 - 105', description: 'Allow husks to turn straw-yellow. Machine harvest or hand pick when moisture reaches 18%.' }
    ]
  },
  'Green Chilli': {
    id: 'green-chilli',
    name: 'Green Chilli',
    score: 89.4,
    profit: 'Very High',
    duration: '120 Days',
    water: 'Medium',
    risk: 'Medium',
    surplus: true, // Example surplus trigger
    expectedYield: '6 - 9 MT / Acre (fresh)',
    soilSuitability: 'Fertile, well-aerated sandy loam with excellent drainage',
    optimalTemperature: '22°C - 30°C',
    marketDemand: 'High wholesale demand, but susceptible to seasonal market glut during peak Maha harvesting',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1000&q=80',
    overview: 'Green Chilli (MI-2 and Arunalu varieties) provides rapid weekly cash flow for farmers in Anuradhapura, Jaffna, Puttalam, and Hambantota. Because many farmers planted chilli this season, SmartCrop flags a potential market supply spike.',
    alternativeCrops: ['Beans', 'Leeks', 'Bitter Gourd'],
    timeline: [
      { phase: 'Phase 1', title: 'Seedling Nursery', period: 'Days 1 - 25', description: 'Germinate treated seeds under shade netting to prevent vector insects like thrips and whiteflies.' },
      { phase: 'Phase 2', title: 'Transplanting & Rooting', period: 'Days 26 - 45', description: 'Plant on raised beds with straw mulch to retain moisture and prevent soil splash onto leaves.' },
      { phase: 'Phase 3', title: 'Branching & Fruit Set', period: 'Days 46 - 80', description: 'Foliar micro-nutrient spray with boron and calcium to prevent blossom drop.' },
      { phase: 'Phase 4', title: 'Weekly Picking Cycle', period: 'Days 81 - 120+', description: 'Harvest firm, deep-green pods every 5-7 days in cool morning conditions.' }
    ]
  },
  Paddy: {
    id: 'paddy',
    name: 'Paddy (Rice)',
    score: 88.0,
    profit: 'Moderate',
    duration: '110 Days',
    water: 'High',
    risk: 'Low',
    surplus: false,
    expectedYield: '120 - 150 Bushels / Acre (Bg 358 / Bw 367)',
    soilSuitability: 'Clayey or alluvial puddled soil with impermeable subsoil layer',
    optimalTemperature: '25°C - 34°C (All agro-climatic zones)',
    marketDemand: 'Staple national grain with guaranteed government minimum buying price (PMB)',
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=1000&q=80',
    overview: 'Paddy is the backbone of Sri Lankan agriculture. Ideal for Maha rainfall or Yala major irrigation schemes (Mahaweli, Rajanganaya, Gal Oya). Stable, secure, and low financial volatility.',
    alternativeCrops: ['Finger Millet', 'Maize', 'Green Gram'],
    timeline: [
      { phase: 'Phase 1', title: 'Puddling & Bund Repair', period: 'Days 1 - 14', description: 'Wet tillage, bund plastering, and levelling to establish 5cm standing water layer.' },
      { phase: 'Phase 2', title: 'Seeding / Parachute Method', period: 'Days 15 - 30', description: 'Broadcasting pre-germinated seeds or parachute tray planting with basal fertilizer application.' },
      { phase: 'Phase 3', title: 'Tillering & Panicle Initiation', period: 'Days 31 - 75', description: 'Water level maintenance, urea top-dressing, and bio-friendly pest monitoring.' },
      { phase: 'Phase 4', title: 'Ripening & Combine Harvesting', period: 'Days 76 - 110', description: 'Drain water 10 days before harvest. Machine cut when 85% of grains display golden colour.' }
    ]
  },
  'Big Onion': {
    id: 'big-onion',
    name: 'Big Onion',
    score: 86.5,
    profit: 'High',
    duration: '95 Days',
    water: 'Medium',
    risk: 'Medium',
    surplus: false,
    expectedYield: '8 - 11 MT / Acre',
    soilSuitability: 'Friable sandy loam rich in organic compost',
    optimalTemperature: '22°C - 33°C (Dry Zone Yala focus in Matale/Dambulla)',
    marketDemand: 'Strategic national crop with protective seasonal import cess and high trade volumes',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=1000&q=80',
    overview: 'Cultivated heavily in Matale (Dambulla, Galewela) and Anuradhapura during the Yala season. Highly profitable when timed right before festive seasons.',
    alternativeCrops: ['Red Onion', 'Garlic', 'Chilli'],
    timeline: [
      { phase: 'Phase 1', title: 'Nursery Beds & Seed Care', period: 'Days 1 - 35', description: 'Raise seedlings on raised nursery beds treated with Trichoderma for root health.' },
      { phase: 'Phase 2', title: 'Transplanting in Grids', period: 'Days 36 - 50', description: 'Transplant at 10cm x 10cm spacing in flat beds with shallow irrigation ditches.' },
      { phase: 'Phase 3', title: 'Bulb Expansion', period: 'Days 51 - 80', description: 'Apply potassium sulfate for compact, firm scales. Stop nitrogen application.' },
      { phase: 'Phase 4', title: 'Neck Fall & Curing', period: 'Days 81 - 95', description: 'Stop irrigation when 50% tops fall over. Cure bulbs in field shades for 10 days.' }
    ]
  },
  Beans: {
    id: 'beans',
    name: 'Bush Beans',
    score: 85.0,
    profit: 'High',
    duration: '60 Days',
    water: 'Medium',
    risk: 'Low',
    surplus: false,
    expectedYield: '5 - 7 MT / Acre',
    soilSuitability: 'Rich well-drained loam',
    optimalTemperature: '18°C - 26°C',
    marketDemand: 'Consistent daily vegetable demand across all island economic centers',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1000&q=80',
    overview: 'Fast turnaround legume that also enriches soil nitrogen naturally. Ideal as an alternative crop to avoid market gluts in other standard vegetables.',
    alternativeCrops: ['Winged Bean', 'Cowpea', 'Carrot'],
    timeline: [
      { phase: 'Phase 1', title: 'Direct Sowing', period: 'Days 1 - 10', description: 'Sow 2 seeds per hole on ridges 30cm apart.' },
      { phase: 'Phase 2', title: 'Vegetative Vigor', period: 'Days 11 - 30', description: 'Keep soil moist. Apply balanced organic compost.' },
      { phase: 'Phase 3', title: 'Pod Formation', period: 'Days 31 - 45', description: 'Ensure no water stress during flowering.' },
      { phase: 'Phase 4', title: 'Continuous Picking', period: 'Days 46 - 60', description: 'Harvest tender pods every 3 days.' }
    ]
  },
  Leeks: {
    id: 'leeks',
    name: 'Leeks',
    score: 84.2,
    profit: 'High',
    duration: '85 Days',
    water: 'Medium',
    risk: 'Low',
    surplus: false,
    expectedYield: '15 - 20 MT / Acre',
    soilSuitability: 'Deep, moisture-retentive fertile loam',
    optimalTemperature: '14°C - 20°C (Highlands)',
    marketDemand: 'Steady demand in hotel, culinary, and export trade',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1000&q=80',
    overview: 'Popular highland crop in Nuwara Eliya and Badulla. Resilient to light temperature drops and reliable financial return.',
    alternativeCrops: ['Carrot', 'Cabbage', 'Beetroot'],
    timeline: [
      { phase: 'Phase 1', title: 'Seed Bed Germination', period: 'Days 1 - 25', description: 'Grow in shaded seedbeds.' },
      { phase: 'Phase 2', title: 'Trench Transplanting', period: 'Days 26 - 45', description: 'Plant in deep trenches to encourage long white shafts.' },
      { phase: 'Phase 3', title: 'Earthing Up', period: 'Days 46 - 70', description: 'Gradually fill soil into trenches to blanch stems.' },
      { phase: 'Phase 4', title: 'Harvesting', period: 'Days 71 - 85', description: 'Loosen soil and pull by hand; wash and bunch.' }
    ]
  },
  Cabbage: {
    id: 'cabbage',
    name: 'Cabbage',
    score: 83.5,
    profit: 'Moderate',
    duration: '80 Days',
    water: 'Medium',
    risk: 'Low',
    surplus: false,
    expectedYield: '16 - 22 MT / Acre',
    soilSuitability: 'Heavy loam rich in organic matter',
    optimalTemperature: '15°C - 24°C',
    marketDemand: 'Steady year-round vegetable consumption',
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=1000&q=80',
    overview: 'Solid vegetable with heavy yields per acre. Excellent for cooler districts and irrigated intermediate regions.',
    alternativeCrops: ['Knol Khol', 'Cauliflower', 'Broccoli'],
    timeline: [
      { phase: 'Phase 1', title: 'Nursery Trays', period: 'Days 1 - 20', description: 'Sow hybrid seeds in 104-cell plug trays.' },
      { phase: 'Phase 2', title: 'Field Planting', period: 'Days 21 - 35', description: 'Space plants 45cm x 45cm on raised beds.' },
      { phase: 'Phase 3', title: 'Head Formation', period: 'Days 36 - 65', description: 'Maintain steady moisture to avoid head cracking.' },
      { phase: 'Phase 4', title: 'Cutting Heads', period: 'Days 66 - 80', description: 'Harvest firm, compact heads with 2 wrapper leaves.' }
    ]
  },
  Potato: {
    id: 'potato',
    name: 'Potato',
    score: 82.0,
    profit: 'Very High',
    duration: '90 Days',
    water: 'Medium',
    risk: 'Medium',
    surplus: false,
    expectedYield: '10 - 14 MT / Acre',
    soilSuitability: 'Loose, acidic sandy loam (pH 5.2 - 6.2)',
    optimalTemperature: '15°C - 20°C',
    marketDemand: 'High domestic demand; commands premium price over imported varieties',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1000&q=80',
    overview: 'Premium cash crop in Nuwara Eliya and Welimada. High seed cost but potentially the largest gross income per acre.',
    alternativeCrops: ['Sweet Potato', 'Carrot', 'Beetroot'],
    timeline: [
      { phase: 'Phase 1', title: 'Seed Tuber Sprouting', period: 'Days 1 - 15', description: 'Chit certified disease-free seed tubers in diffused light.' },
      { phase: 'Phase 2', title: 'Planting & Basal Dose', period: 'Days 16 - 30', description: 'Plant sprouted tubers in furrows 60cm apart.' },
      { phase: 'Phase 3', title: 'Earthing Up & Tuberization', period: 'Days 31 - 70', description: 'Hill soil twice around stems to protect developing tubers from sun and pests.' },
      { phase: 'Phase 4', title: 'Dehaulming & Harvest', period: 'Days 71 - 90', description: 'Cut foliage 10 days before digging to harden skins.' }
    ]
  }
};
