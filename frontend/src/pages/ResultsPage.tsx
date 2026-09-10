import React from 'react';

import {
  PredictionResponse,
  RecommendedCrop,
  FarmInput,
} from '../types';

import { CropCard } from '../components/features/CropCard';

import {
  ArrowLeft,
  Calendar,
  MapPin,
  RefreshCw,
  Sprout,
} from 'lucide-react';

import { motion } from 'motion/react';


interface ResultsPageProps {
  prediction: PredictionResponse;
  inputs: FarmInput;
  onViewDetails: (crop: RecommendedCrop) => void;
  onReset: () => void;
}


export const ResultsPage: React.FC<ResultsPageProps> = ({
  prediction,
  inputs,
  onViewDetails,
  onReset,
}) => {

  const crops =
    prediction.recommended_crops.slice(0, 3);


  return (

    <div className="min-h-screen bg-[#f6f8f2]">


      {/* ===================================================== */}
      {/* RESULT HERO */}
      {/* ===================================================== */}

      <section className="
        relative
        overflow-hidden
        bg-[#245c34]
        text-white
      ">

        <div className="
          absolute
          inset-0
          opacity-10
          bg-[radial-gradient(circle_at_top_right,_white,_transparent_45%)]
        " />


        <div className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-14
        ">

          <button
            onClick={onReset}
            className="
              inline-flex
              items-center gap-2
              text-sm
              text-green-100
              hover:text-white
              mb-7
              cursor-pointer
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Change selection
          </button>


          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-7
          ">

            <div>

              <div className="
                flex items-center gap-2
                text-[#b5e58b]
                font-semibold
                text-sm
                mb-3
              ">
                <Sprout className="w-4 h-4" />
                SmartCrop Recommendation
              </div>

              <h1 className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-extrabold
              ">
                Best crops for your season
              </h1>

              <p className="
                mt-4
                text-green-50/80
                max-w-xl
              ">
                Based on regional soil conditions,
                forecast weather data and the trained
                ANN crop recommendation model.
              </p>

            </div>


            {/* User Selection */}

            <div className="
              flex
              flex-wrap
              gap-3
            ">

              <div className="
                flex items-center gap-2
                bg-white/10
                backdrop-blur
                px-4 py-3
                rounded-xl
              ">
                <MapPin className="w-4 h-4 text-[#b5e58b]" />

                <div>
                  <p className="text-[10px] text-green-100 uppercase">
                    District
                  </p>

                  <p className="font-bold text-sm">
                    {inputs.district}
                  </p>
                </div>

              </div>


              <div className="
                flex items-center gap-2
                bg-white/10
                backdrop-blur
                px-4 py-3
                rounded-xl
              ">
                <Calendar className="w-4 h-4 text-[#b5e58b]" />

                <div>
                  <p className="text-[10px] text-green-100 uppercase">
                    Season
                  </p>

                  <p className="font-bold text-sm">
                    {inputs.season}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ===================================================== */}
      {/* RECOMMENDATIONS */}
      {/* ===================================================== */}

      <section className="
        max-w-7xl
        mx-auto
        px-6
        py-14
      ">

        <div className="
          flex
          items-center
          justify-between
          mb-8
        ">

          <div>

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-[#65a043]
            ">
              ANN Results
            </p>

            <h2 className="
              text-2xl
              sm:text-3xl
              font-extrabold
              text-[#20362a]
              mt-1
            ">
              Top Recommended Crops
            </h2>

          </div>


          <button
            type="button"
            onClick={onReset}
            className="
              hidden sm:inline-flex
              items-center gap-2
              px-4 py-2.5
              rounded-xl
              border border-[#d6e2d0]
              bg-white
              text-sm
              text-[#347a40]
              font-bold
              hover:bg-[#f0f7ec]
              transition
              cursor-pointer
            "
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

        </div>


        {crops.length > 0 ? (

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
          >

            {crops.map(
              (crop, index) => (

                <CropCard
                  key={crop.name}
                  crop={crop}
                  rank={index + 1}
                  isSelected={index === 0}
                  onViewDetails={onViewDetails}
                  onSelectCrop={() => {}}
                />

              )
            )}

          </motion.div>

        ) : (

          <div className="
            bg-white
            border border-[#e1e7dd]
            rounded-2xl
            p-10
            text-center
          ">

            <Sprout className="
              w-10 h-10
              text-[#5b9945]
              mx-auto
              mb-3
            " />

            <h3 className="
              font-bold
              text-[#20362a]
            ">
              No recommendations available
            </h3>

          </div>

        )}


        <p className="
          text-center
          text-xs
          text-stone-500
          mt-9
        ">
          Recommendations are generated by the trained
          SmartCrop ANN using prepared soil and forecast
          weather features.
        </p>


        <button
          type="button"
          onClick={onReset}
          className="
            sm:hidden
            w-full
            mt-7
            flex
            items-center justify-center gap-2
            px-5 py-3
            rounded-xl
            bg-[#347a40]
            text-white
            font-bold
            cursor-pointer
          "
        >
          <RefreshCw className="w-4 h-4" />
          New Recommendation
        </button>

      </section>

    </div>

  );
};