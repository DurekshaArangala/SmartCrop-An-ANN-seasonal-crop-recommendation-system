# 🌱 SmartCrop

**AI-Powered Crop Recommendation System with Dynamic Surplus Prevention**

SmartCrop doesn't just recommend a crop that fits your soil and weather — it also protects farmers from regional oversupply by learning, in real time, what everyone else is planting.

---

## ✨ What Makes SmartCrop Different

Most crop recommendation systems stop at *"what grows well here?"* SmartCrop goes a step further and asks *"what grows well here **and** won't flood the market?"*

| Traditional Systems | SmartCrop |
|---|---|
| Static soil + weather matching | Soil + **forecasted** weather via LSTM/GRU |
| Single "best crop" output | Top-N candidate crops with probabilities |
| No market awareness | Dynamic **Surplus Risk Engine** |
| Fixed recommendations | Recommendations that adapt as farmers commit to planting plans |

---

## 🎯 Core Objective

> Recommend a crop suitable for the farmer's conditions **while reducing the risk of regional crop surplus.**

---

## 🧩 System Architecture

```
                     FARMER
                       │
                       ▼
              Enter User Inputs
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        Soil       Location       Season
          │            │            │
          └────────────┼────────────┘
                       │
                       ▼
              Weather Forecast (LSTM/GRU)
                       │
                       ▼
                ANN Suitability Model
                       │
                       ▼
             Crop Probabilities → Top-N
                       │
                       ▼
             Suitability Filter (≥ threshold)
                       │
                       ▼
        ┌──────────────────────────┐
        │      SURPLUS ENGINE      │
        │  Historical Supply       │
        │  Historical Production   │
        │  Current Planting Intent │
        └────────────┬─────────────┘
                     │
                     ▼
               Surplus Risk Score
                     │
                     ▼
     Final Score = Suitability × (1 − Surplus Risk)
                     │
                     ▼
             🌱 FINAL RECOMMENDATION
                     │
                     ▼
        Farmer confirms planting intention
                     │
                     ▼
              Database updates
                     │
                     └──────► Shapes future recommendations
```

---

## 📊 Data Sources

SmartCrop is built on four interconnected datasets:

<table>
<tr>
<td width="25%" valign="top">

**🌍 Soil Data**
- District
- pH
- Nitrogen
- Phosphorus
- Potassium
- Organic Carbon
- Sand / Clay / Silt

</td>
<td width="25%" valign="top">

**🌦️ Weather Data**
- Date
- District
- Temperature
- Rainfall
- Humidity
- Wind Speed

</td>
<td width="25%" valign="top">

**🌾 Crop Suitability**
- N, P, K
- Temperature
- Humidity
- pH
- Rainfall
- Crop Label

</td>
<td width="25%" valign="top">

**📦 Crop Supply**
- District
- Season
- Crop
- Year
- Cultivated Area
- Production

</td>
</tr>
</table>

> 💡 **The Crop Supply dataset is the secret ingredient** — it's what enables SmartCrop's surplus-prevention capability, which sets it apart from conventional recommenders.

---

## ⚙️ How It Works

### 1️⃣ Data Preprocessing
Each dataset flows through its own cleaning pipeline:

```
Raw Data → Missing Value Handling → Duplicate Removal →
Outlier Detection → Data Cleaning → Feature Engineering → Processed Data
```

### 2️⃣ Weather Forecasting (LSTM/GRU)
Historical weather → sequence modeling → forecasted **temperature, rainfall, and humidity** for the farmer's district and season.

### 3️⃣ ANN Crop Suitability Model
Soil + forecasted weather feed a neural network (`Dense → ReLU → Dropout → Dense → Softmax`) that outputs a **suitability probability for every candidate crop**, not just a single answer.

```
Rice        96%
Maize       92%
Green Gram  87%
Cowpea      82%
Chili       45%   ← below threshold, filtered out
```

### 4️⃣ Surplus Risk Engine
Combines **historical supply pressure** with **live farmer planting intentions** to score how "crowded" a crop's market is becoming — updated continuously as farmers commit to plans.

```
Dynamic Supply Pressure = Historical Pressure + Current Planting Intention
```

### 5️⃣ Final Recommendation
```
Final Score = Suitability × (1 − Surplus Risk)
```

| Crop | Suitability | Surplus Risk | Final Score |
|---|---|---|---|
| Rice | 0.96 | 0.90 | 0.096 |
| Maize | 0.92 | 0.50 | 0.460 |
| **Green Gram** | 0.87 | 0.25 | **0.6525 🏆** |

Even though Rice scored highest on suitability, **Green Gram wins** because it carries far less market risk.

### 6️⃣ The Feedback Loop
This is what makes SmartCrop *dynamic*:

- **User 1** gets recommended Green Gram → plants 2 ha → database updates.
- 50 more farmers follow → Green Gram's planned area hits 100 ha.
- **User 2**, with the *exact same soil and weather inputs*, now sees **Maize** recommended instead — because the surplus engine detected rising pressure on Green Gram.

> The ANN never changes. The *recommendation* changes — because the system learns from collective farmer behavior in real time.

---

## 🖥️ Website Preview

```
┌─────────────────────────────────┐
│       SMARTCROP RESULT          │
│                                 │
│ 🌱 Recommended Crop             │
│                                 │
│       GREEN GRAM                │
│                                 │
│ Suitability: 87%                │
│ Surplus Risk: LOW               │
│                                 │
│ Forecast:                       │
│ Temperature: 27.4°C             │
│ Rainfall: 215 mm                │
│ Humidity: 81%                   │
│                                 │
│ Why recommended?                │
│ ✓ Suitable soil                 │
│ ✓ Suitable forecast             │
│ ✓ Suitable season               │
│ ✓ Lower supply pressure         │
│                                 │
│ [ I Plan to Cultivate ]         │
└─────────────────────────────────┘
```

### Pages

- 🏠 **Home**
- 🌾 **Crop Recommendation** — enter district, season, and soil info
- 🌦️ **Weather Forecast**
- 📋 **My Recommendations**
- ℹ️ **About SmartCrop**

---

## 🗄️ Database Schema (High-Level)

```
users
  │
  ├── predictions
  │
  └── planting_intentions ──► surplus_engine ──► future rankings

crop_supply (historical agricultural records)
```

---

## 🔬 Research Experiments

| # | Experiment | Metrics |
|---|---|---|
| 1 | **ANN Crop Suitability** (vs. baseline ML models) | Accuracy, Precision, Recall, F1, Confusion Matrix |
| 2 | **Weather Forecasting** (LSTM/GRU) | MAE, RMSE, MAPE |
| 3 | **Surplus Prevention** — ANN-only vs. ANN + Surplus Engine ⭐ *(core novelty)* | Recommendation distribution, high/low-surplus recommendation rate, recommendation diversity, supply-pressure reduction |

---

## 📁 Project Structure

```
SmartCrop/
│
├── data/
│   ├── raw/
│   │   ├── soil.csv
│   │   ├── weather.csv
│   │   ├── crop_recommendation.csv
│   │   └── crop_supply.csv
│   └── processed/
│
├── notebooks/
│   ├── 01_soil_preprocessing.ipynb
│   ├── 02_weather_preprocessing.ipynb
│   ├── 03_crop_preprocessing.ipynb
│   ├── 04_supply_preprocessing.ipynb
│   ├── 05_weather_forecasting.ipynb
│   ├── 06_ann_training.ipynb
│   ├── 07_model_evaluation.ipynb
│   └── 08_surplus_engine.ipynb
│
├── models/
│   ├── weather_model.keras
│   ├── crop_ann.keras
│   ├── scaler.pkl
│   └── encoder.pkl
│
├── backend/
│   ├── app.py
│   ├── routes/
│   │   ├── prediction.py
│   │   ├── weather.py
│   │   └── planting.py
│   ├── services/
│   │   ├── predictor.py
│   │   ├── weather_forecast.py
│   │   ├── surplus_engine.py
│   │   └── recommendation.py
│   └── database/
│       └── smartcrop.db
│
├── frontend/
│   └── src/
│
├── results/
├── docs/
├── requirements.txt
└── README.md
```

---

## 🧠 Tech Stack

- **Modeling:** Artificial Neural Networks (ANN), LSTM/GRU for time-series weather forecasting
- **Backend:** Python (Flask/FastAPI-style routes & services)
- **Database:** SQLite (`smartcrop.db`)
- **Frontend:** Web app for farmer-facing recommendations

---

## 🚀 One-Sentence Summary

> Historical soil and weather data → weather forecasting → ANN predicts crop suitability → suitable crops are filtered → historical and dynamic crop-supply information calculates surplus risk → suitability and surplus risk are combined → final crop is recommended → farmer's planting intention updates the supply information for future recommendations.

---

## 🛠️ How to Run

### Prerequisites
- Python 3.9+
- pip
- Node.js (if running the frontend separately)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/SmartCrop.git
cd SmartCrop
```

### 2. Set up a virtual environment
```bash
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Prepare the data
Place the raw datasets in `data/raw/`:
```
soil.csv
weather.csv
crop_recommendation.csv
crop_supply.csv
```

Then run the preprocessing notebooks in order:
```bash
jupyter notebook notebooks/01_soil_preprocessing.ipynb
jupyter notebook notebooks/02_weather_preprocessing.ipynb
jupyter notebook notebooks/03_crop_preprocessing.ipynb
jupyter notebook notebooks/04_supply_preprocessing.ipynb
```

### 5. Train the models
```bash
jupyter notebook notebooks/05_weather_forecasting.ipynb   # trains LSTM/GRU
jupyter notebook notebooks/06_ann_training.ipynb          # trains ANN
jupyter notebook notebooks/07_model_evaluation.ipynb      # evaluate metrics
```

This saves the trained artifacts into `models/`:
```
weather_model.keras
crop_ann.keras
scaler.pkl
encoder.pkl
```

### 6. Build the surplus engine
```bash
jupyter notebook notebooks/08_surplus_engine.ipynb
```

### 7. Initialize the database
```bash
cd backend
python database/init_db.py   # creates smartcrop.db with users, predictions, planting_intentions, crop_supply tables
```

### 8. Run the backend server
```bash
cd backend
python app.py
```
By default the API will be available at `http://localhost:5000`.

### 9. Run the frontend
```bash
cd frontend
npm install
npm start
```
The web app will be available at `http://localhost:3000`.

### 10. Use the app
1. Open the frontend in your browser.
2. Go to **Crop Recommendation**.
3. Enter your **district**, **season**, and **soil information**.
4. Click **Get Recommendation** to see the forecasted weather, suitable crops, surplus risk, and final recommendation.
5. Click **I Plan to Cultivate** to log your planting intention — this updates the surplus engine for future farmers.

> ⚠️ Exact commands/paths (e.g. `init_db.py`, port numbers) may differ slightly depending on how you implement `backend/app.py` and `backend/database/` — adjust to match your actual code.

---

## 📌 Status

🚧 *Development in progress.*

