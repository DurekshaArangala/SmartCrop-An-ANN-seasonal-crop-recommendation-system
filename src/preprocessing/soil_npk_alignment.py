import os
from pathlib import Path

import pandas as pd
import joblib
from sklearn.preprocessing import QuantileTransformer

BASE_DIR = Path(__file__).resolve().parents[2]

SOIL_SAMPLES_PATH = BASE_DIR / "data" / "processed" / "soil_data" / "soil_data_clean.csv"
SOIL_SUMMARY_PATH = BASE_DIR / "data" / "processed" / "soil_data" / "soil_district_summary.csv"
CROP_RECOM_RAW_PATH = BASE_DIR / "data" / "raw" / "Crop_recommendation.csv"
OUTPUT_PATH = BASE_DIR / "data" / "processed" / "soil_data" / "soil_district_summary_mapped.csv"
MODEL_DIR = BASE_DIR / "models"

NPK_COLUMN_MAP = {
    "Nitrogen": "N",
    "Phosphorus": "P",
    "Potassium": "K",
}

N_QUANTILES = 100


def fit_rank_mappers(df, columns, n_quantiles=N_QUANTILES):
    mappers = {}
    for col in columns:
        qt = QuantileTransformer(
            n_quantiles=min(n_quantiles, len(df)),
            output_distribution="uniform",
            random_state=42,
        )
        qt.fit(df[[col]])
        mappers[col] = qt
    return mappers


def apply_mapping(district_summary, soil_rank_mappers, crop_recom_rank_mappers):
    mapped = district_summary.copy()

    for soil_col, recom_col in NPK_COLUMN_MAP.items():
        percentile = soil_rank_mappers[soil_col].transform(district_summary[[soil_col]])
        mapped_value = crop_recom_rank_mappers[recom_col].inverse_transform(percentile)

        mapped[f"{recom_col}_mapped"] = mapped_value.ravel()

    return mapped


def main():
    for p in [SOIL_SAMPLES_PATH, SOIL_SUMMARY_PATH, CROP_RECOM_RAW_PATH]:
        if not p.exists():
            raise FileNotFoundError(
                f"Expected input file not found: {p}\n"
                "Run the preprocessing notebooks first (soil_data_preprocessing.ipynb "
                "and Crop_recommendation_preprocessing.ipynb)."
            )

    soil_samples = pd.read_csv(SOIL_SAMPLES_PATH)
    district_summary = pd.read_csv(SOIL_SUMMARY_PATH)
    crop_recom = pd.read_csv(CROP_RECOM_RAW_PATH)

    soil_rank_mappers = fit_rank_mappers(soil_samples, NPK_COLUMN_MAP.keys())

    crop_recom_rank_mappers = fit_rank_mappers(crop_recom, NPK_COLUMN_MAP.values())

    mapped_summary = apply_mapping(district_summary, soil_rank_mappers, crop_recom_rank_mappers)

    os.makedirs(MODEL_DIR, exist_ok=True)
    mapped_summary.to_csv(OUTPUT_PATH, index=False)
    joblib.dump(soil_rank_mappers, MODEL_DIR / "npk_quantile_mapper_soil.pkl")
    joblib.dump(crop_recom_rank_mappers, MODEL_DIR / "npk_quantile_mapper_crop_recom.pkl")

    print("Saved mapped district soil summary ->", OUTPUT_PATH)
    print()
    preview_cols = ["District", "Nitrogen", "N_mapped", "Phosphorus", "P_mapped", "Potassium", "K_mapped"]
    print(mapped_summary[preview_cols].head(10).to_string(index=False))


if __name__ == "__main__":
    main()
