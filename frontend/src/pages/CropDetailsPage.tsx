import React from 'react';

import {
  RecommendedCrop,
  PredictionFeatures,
  SeasonType,
} from '../types';

import {
  ArrowLeft,
  Award,
  BrainCircuit,
  CloudRain,
  FlaskConical,
  Sprout,
} from 'lucide-react';

import { motion } from 'motion/react';

const cropImages: Record<string, string> = {
  kurakkan: '/images/crops/kurakkan.jpg',
  maize: '/images/crops/maize.jpg',
  sorghum: '/images/crops/sorghum.jpg',
  meneri: '/images/crops/meneri.jpg',
  'green gram': '/images/crops/green-gram.jpg',
  cowpea: '/images/crops/cowpea.jpg',
  gingelly: '/images/crops/gingelly.jpg',
  'ground nuts': '/images/crops/ground-nuts.jpg',
  manioc: '/images/crops/manioc.jpg',
  'sweet potatoes': '/images/crops/sweet-potatoes.jpg',
  potatoes: '/images/crops/potatoes.jpg',
  'red onion': '/images/crops/red-onion.jpg',
  'big onion': '/images/crops/big-onion.jpg',
  'chillies (green)': '/images/crops/green-chillies.jpg',
  mustard: '/images/crops/mustard.jpg',
};

interface CropDetailsPageProps {
  crop: RecommendedCrop;
  features: PredictionFeatures;
  district: string;
  season: SeasonType;
  onBack: () => void;
}

export const CropDetailsPage: React.FC<CropDetailsPageProps> = ({
  crop,
  features,
  district,
  season,
  onBack,
}) => {
  const confidence =
    crop.score <= 1
      ? crop.score * 100
      : crop.score;

  const cropImage =
    cropImages[crop.name.toLowerCase().trim()];

  return (
    <div className="min-h-screen bg-[#f6f8f2]">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <button
          type="button"
          onClick={onBack}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            mb-7
            rounded-xl
            bg-white
            border
            border-[#d6e2d0]
            text-sm
            font-bold
            text-[#347a40]
            hover:bg-[#eef7ea]
            transition
            cursor-pointer
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recommendations
        </button>

        {/* Crop hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            relative
            min-h-[420px]
            rounded-[28px]
            overflow-hidden
            bg-[#214d2d]
            shadow-xl
          "
        >

          {cropImage ? (
            <img
              src={cropImage}
              alt={crop.name}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />
          ) : (
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-[#dcebd6]
              "
            >
              <Sprout className="w-24 h-24 text-[#4e8840]" />
            </div>
          )}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/45
              to-black/10
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-8
              sm:p-10
              text-white
            "
          >

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-green-200
                mb-2
              "
            >
              SmartCrop ANN Recommendation
            </p>

            <h1
              className="
                text-4xl
                sm:text-5xl
                font-extrabold
                capitalize
              "
            >
              {crop.name}
            </h1>

            <div
              className="
                inline-flex
                items-center
                gap-2
                mt-5
                px-4
                py-2
                rounded-xl
                bg-white/20
                backdrop-blur-md
                border
                border-white/20
              "
            >
              <Award className="w-5 h-5 text-green-200" />

              <span className="font-semibold">
                ANN Confidence
              </span>

              <span className="font-extrabold text-xl">
                {confidence.toFixed(1)}%
              </span>
            </div>

          </div>

        </motion.div>

        {/* Why recommended */}
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-[#dce7d7]
            shadow-sm
            p-7
            sm:p-8
            mt-8
          "
        >

          <div className="flex items-center gap-3 mb-4">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[#e8f3e3]
                flex
                items-center
                justify-center
              "
            >
              <BrainCircuit className="w-5 h-5 text-[#347a40]" />
            </div>

            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#65a043]
                "
              >
                Deep Learning Prediction
              </p>

              <h2
                className="
                  text-xl
                  font-extrabold
                  text-[#20362a]
                "
              >
                Why was {crop.name} recommended?
              </h2>
            </div>

          </div>

          <p
            className="
              text-sm
              sm:text-base
              text-stone-600
              leading-relaxed
            "
          >
            For <strong>{district}</strong> during the{' '}
            <strong>{season}</strong> season, SmartCrop retrieved the
            relevant regional soil conditions and seasonal forecast
            weather conditions. These seven numerical features were
            prepared and supplied to the trained Artificial Neural
            Network. The model assigned{' '}
            <strong className="text-[#347a40]">
              {confidence.toFixed(1)}%
            </strong>{' '}
            confidence to {crop.name}.
          </p>

          <div
            className="
              w-full
              h-3
              bg-[#e9eee6]
              rounded-full
              overflow-hidden
              mt-6
            "
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(confidence, 100)}%`,
              }}
              transition={{ duration: 0.8 }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#347a40]
                to-[#78b94e]
              "
            />
          </div>

        </div>

        {/* Input features */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            mt-7
          "
        >

          {/* Soil */}
          <div
            className="
              bg-white
              rounded-3xl
              border
              border-[#dce7d7]
              p-7
              shadow-sm
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#edf6e9]
                  flex
                  items-center
                  justify-center
                "
              >
                <FlaskConical className="w-5 h-5 text-[#347a40]" />
              </div>

              <h2
                className="
                  text-lg
                  font-extrabold
                  text-[#20362a]
                "
              >
                Soil Features
              </h2>

            </div>

            <p
              className="
                text-sm
                text-stone-600
                leading-relaxed
                mb-5
              "
            >
              Regional soil information for {district} was retrieved
              and used as part of the ANN input.
            </p>

            <div className="grid grid-cols-2 gap-3">

              {[
                {
                  label: 'Nitrogen (N)',
                  value: features.N.toFixed(2),
                },
                {
                  label: 'Phosphorus (P)',
                  value: features.P.toFixed(2),
                },
                {
                  label: 'Potassium (K)',
                  value: features.K.toFixed(2),
                },
                {
                  label: 'Soil pH',
                  value: features.ph.toFixed(2),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-[#f4f8f1]
                    border
                    border-[#e1eadc]
                    rounded-xl
                    px-4
                    py-3
                  "
                >
                  <p
                    className="
                      text-xs
                      text-stone-500
                      font-semibold
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      text-lg
                      font-extrabold
                      text-[#36533d]
                      mt-1
                    "
                  >
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Weather */}
          <div
            className="
              bg-white
              rounded-3xl
              border
              border-[#dce7d7]
              p-7
              shadow-sm
            "
          >

            <div className="flex items-center gap-3 mb-4">

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#edf6e9]
                  flex
                  items-center
                  justify-center
                "
              >
                <CloudRain className="w-5 h-5 text-[#347a40]" />
              </div>

              <h2
                className="
                  text-lg
                  font-extrabold
                  text-[#20362a]
                "
              >
                Forecast Weather Features
              </h2>

            </div>

            <p
              className="
                text-sm
                text-stone-600
                leading-relaxed
                mb-5
              "
            >
              Forecast weather conditions for the {season} season were
              combined with the soil information before prediction.
            </p>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-3
              "
            >

              {[
                {
                  label: 'Temperature',
                  value: `${features.temperature.toFixed(2)} °C`,
                },
                {
                  label: 'Humidity',
                  value: `${features.humidity.toFixed(2)}%`,
                },
                {
                  label: 'Rainfall',
                  value: `${features.rainfall.toFixed(2)} mm`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-[#f4f8f1]
                    border
                    border-[#e1eadc]
                    rounded-xl
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p
                    className="
                      text-xs
                      text-stone-500
                      font-semibold
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      text-lg
                      font-extrabold
                      text-[#36533d]
                      mt-1
                    "
                  >
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Pipeline */}
        <div
          className="
            mt-7
            rounded-3xl
            bg-[#245c34]
            text-white
            p-7
            sm:p-8
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-widest
              font-bold
              text-[#b5e58b]
            "
          >
            SmartCrop Processing Pipeline
          </p>

          <h2
            className="
              text-2xl
              font-extrabold
              mt-2
            "
          >
            How this recommendation was generated
          </h2>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-5
              gap-4
              mt-6
            "
          >

            <div
              className="
                bg-white/10
                rounded-xl
                p-4
                text-sm
                font-bold
              "
            >
              1. District & Season
            </div>

            <div
              className="
                bg-white/10
                rounded-xl
                p-4
                text-sm
                font-bold
              "
            >
              2. Soil Data
            </div>

            <div
              className="
                bg-white/10
                rounded-xl
                p-4
                text-sm
                font-bold
              "
            >
              3. Weather Forecast
            </div>

            <div
              className="
                bg-white/10
                rounded-xl
                p-4
                text-sm
                font-bold
              "
            >
              4. ANN Prediction
            </div>

            <div
              className="
                bg-white/10
                rounded-xl
                p-4
                text-sm
                font-bold
              "
            >
              5. Crop Ranking
            </div>

          </div>

          <p
            className="
              text-sm
              text-green-100/80
              mt-6
            "
          >
            N, P, K, temperature, humidity, pH and rainfall are arranged
            in the same feature order used during model training, scaled,
            and passed into the trained crop recommendation model.
          </p>

        </div>

        <div className="text-center mt-9">

          <button
            type="button"
            onClick={onBack}
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-[#347a40]
              text-white
              font-bold
              hover:bg-[#286735]
              transition
              cursor-pointer
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Recommended Crops
          </button>

        </div>

      </div>

    </div>
  );
};