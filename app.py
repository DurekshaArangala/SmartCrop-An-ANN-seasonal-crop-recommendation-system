from flask import Flask, request, jsonify
from flask_cors import CORS

from src.recommendation.predict_crop import recommend_with_context, list_districts

app = Flask(__name__)
CORS(app)


# API status
@app.route('/')
def home():
    return jsonify({
        "message": "SmartCrop API is running"
    })


# Districts
@app.route('/api/districts', methods=['GET'])
def get_districts():
    try:
        districts = list_districts()

        return jsonify({
            "districts": districts
        })

    except Exception as e:
        print("District error:", e)

        return jsonify({
            "error": str(e)
        }), 500


# ANN prediction
@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        district = data.get('district', '').strip()
        season = data.get('season', '').strip()

        if not district:
            return jsonify({
                "error": "District is required."
            }), 400

        if season not in ['Maha', 'Yala']:
            return jsonify({
                "error": "Season must be Maha or Yala."
            }), 400

        result = recommend_with_context(
            district=district,
            season=season,
            weather_mode='forecast',
            top_k=3
        )

        recommended_crops = [
            {
                "name": item["crop"],
                "score": item["confidence"]
            }
            for item in result["predictions"]
        ]

        print("ANN predictions:", recommended_crops)
        print("ANN input features:", result["features"])

        return jsonify({
            "district": district,
            "season": season,
            "features": result["features"],
            "recommended_crops": recommended_crops
        })

    except Exception as e:
        print("Prediction error:", e)

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)