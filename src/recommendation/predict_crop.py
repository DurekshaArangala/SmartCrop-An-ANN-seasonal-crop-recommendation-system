import json
from pathlib import Path

import numpy as np
import pandas as pd
import joblib

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "models"
PROC_DIR = BASE_DIR / "data" / "processed"

FEATURE_ORDER = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"]

SEASON_MONTHS = {
    "Maha": [9, 10, 11, 12, 1, 2, 3],
    "Yala": [4, 5, 6, 7, 8],
}

_state = {}


def _lazy_load():
    if _state:
        return

    with open(MODEL_DIR / "selected_model_info.json") as f:
        selected_model_info = json.load(f)

    if selected_model_info["model_type"] == "keras":
        from tensorflow import keras
        model = keras.models.load_model(BASE_DIR / selected_model_info["model_path"])
        predict_proba = lambda X: model.predict(X, verbose=0)
    elif selected_model_info["model_type"] == "sklearn":
        model = joblib.load(BASE_DIR / selected_model_info["model_path"])
        predict_proba = lambda X: model.predict_proba(X)
    else:
        raise ValueError(f"Unknown model_type in selected_model_info.json: {selected_model_info['model_type']}")

    _state["model_name"] = selected_model_info["model_name"]
    _state["predict_proba"] = predict_proba
    _state["scaler"] = joblib.load(MODEL_DIR / "scaler_benchmark.pkl")
    _state["label_encoder"] = joblib.load(MODEL_DIR / "label_encoder_benchmark.pkl")

    _state["soil_summary"] = pd.read_csv(
        PROC_DIR / "soil_data" / "soil_district_summary_mapped.csv"
    )
    _state["weather_seasonal"] = pd.read_csv(
        PROC_DIR / "weather_data" / "weather_seasonal_by_district.csv"
    )
    _state["weather_forecast"] = pd.read_csv(
        PROC_DIR / "weather_forecast_12m.csv", parse_dates=["date"]
    )


def list_districts():

    _lazy_load()
    return sorted(_state["soil_summary"]["District"].unique())


def _get_soil_features(district):
    soil_summary = _state["soil_summary"]
    row = soil_summary.loc[soil_summary["District"] == district]
    if row.empty:
        raise ValueError(f"No soil data found for district '{district}'")
    row = row.iloc[0]
    return {
        "N": row["N_mapped"],
        "P": row["P_mapped"],
        "K": row["K_mapped"],
        "ph": row["pH"],
    }


def _get_weather_features_historical(district, season):

    weather_seasonal = _state["weather_seasonal"]
    subset = weather_seasonal[
        (weather_seasonal["district"] == district) & (weather_seasonal["season"] == season)
    ]
    if subset.empty:
        raise ValueError(f"No historical weather data for {district} / {season}")
    return {
        "temperature": subset["temperature_avg_c"].mean(),
        "humidity": subset["humidity_percent"].mean(),
        "rainfall": subset["rainfall_mm_total"].mean(),
    }


def _get_weather_features_forecast(district, season):

    weather_forecast = _state["weather_forecast"]
    months = SEASON_MONTHS[season]

    subset = weather_forecast[
        (weather_forecast["district"] == district)
        & (weather_forecast["date"].dt.month.isin(months))
    ]
    if subset.empty:
        raise ValueError(f"No forecast data for {district} / {season}")

    days_in_month = subset["date"].dt.days_in_month
    total_rainfall = (subset["rainfall_mm"] * days_in_month).sum()

    return {
        "temperature": subset["temperature_avg_c"].mean(),
        "humidity": subset["humidity_percent"].mean(),
        "rainfall": total_rainfall,
    }


def _predict(vector, top_k):
    scaled = _state["scaler"].transform(vector)
    probs = _state["predict_proba"](scaled)[0]
    top_idx = np.argsort(probs)[::-1][:top_k]
    classes = _state["label_encoder"].classes_
    return [
        {"crop": str(classes[i]), "confidence": round(float(probs[i]), 4)}
        for i in top_idx
    ]


def recommend(district, season, weather_mode="historical", top_k=3):

    _lazy_load()

    if season not in SEASON_MONTHS:
        raise ValueError("season must be 'Maha' or 'Yala'")

    soil_feats = _get_soil_features(district)

    if weather_mode == "historical":
        weather_feats = _get_weather_features_historical(district, season)
    elif weather_mode == "forecast":
        weather_feats = _get_weather_features_forecast(district, season)
    else:
        raise ValueError("weather_mode must be 'historical' or 'forecast'")

    features = {**soil_feats, **weather_feats}
    vector = np.array([[features[col] for col in FEATURE_ORDER]])

    return _predict(vector, top_k)


def recommend_manual(N, P, K, temperature, humidity, ph, rainfall, top_k=3):

    _lazy_load()
    vector = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    return _predict(vector, top_k)

if __name__ == "__main__":

    _lazy_load()
    print(f"Using model: {_state['model_name']}")
    print()
    for d in list_districts()[:3]:
        print(f"{d} (Maha, historical) ->")
        for rec in recommend(d, "Maha"):
            print(f"    {rec['crop']:20s} {rec['confidence']:.3f}")
        print()
