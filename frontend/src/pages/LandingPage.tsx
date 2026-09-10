import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BrainCircuit,
  CloudSun,
  MapPin,
  Sprout,
  Leaf,
} from 'lucide-react';

interface LandingPageProps {
  onStartWizard: () => void;
  onNavigateToAbout: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartWizard,
  onNavigateToAbout,
}) => {
  return (
    <div>

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className="relative min-h-[620px] flex items-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/cover.jpg"
          alt="Sri Lankan agricultural field"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123b24]/95 via-[#1d5532]/80 to-[#123b24]/30" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-24">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >

            <div className="inline-flex items-center gap-2 text-green-100 font-semibold text-sm mb-5">
              <Leaf className="w-4 h-4" />
              Smart Farming for Sri Lanka
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08]">
              Choose the right crop
              <span className="block text-[#a7dc72] mt-2">
                for the right season.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-green-50/90 leading-relaxed max-w-xl">
              SmartCrop combines soil information, forecast weather
              conditions and an Artificial Neural Network to recommend
              suitable crops for Sri Lankan farmers.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <button
                type="button"
                onClick={onStartWizard}
                className="
                  inline-flex items-center gap-2
                  px-7 py-4
                  rounded-xl
                  bg-[#72b944]
                  hover:bg-[#82c854]
                  text-white
                  font-bold
                  shadow-xl
                  transition-all
                  hover:-translate-y-0.5
                  cursor-pointer
                "
              >
                Find My Crops
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={onNavigateToAbout}
                className="
                  px-7 py-4
                  rounded-xl
                  bg-white/10
                  hover:bg-white/20
                  border border-white/30
                  text-white
                  font-semibold
                  backdrop-blur-sm
                  transition-all
                  cursor-pointer
                "
              >
                About SmartCrop
              </button>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* SIMPLE INTRO */}
      {/* ===================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >

              <img
                src="/images/harvest.jpg"
                alt="Farmland"
                className="rounded-[28px] w-full h-[390px] object-cover shadow-xl"
              />

              <div className="
                absolute
                -bottom-5
                right-6
                bg-[#2f713d]
                text-white
                rounded-2xl
                px-6 py-4
                shadow-xl
              ">
                <p className="text-2xl font-extrabold">
                  25
                </p>

                <p className="text-xs text-green-100">
                  Sri Lankan Districts
                </p>
              </div>

            </motion.div>


            {/* Text */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="text-[#5d9938] font-bold uppercase tracking-widest text-xs mb-3">
                About SmartCrop
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#20362a] leading-tight">
                Better planting decisions using data and AI.
              </h2>

              <p className="mt-5 text-stone-600 leading-relaxed">
                Simply select your district and cultivation season.
                SmartCrop automatically retrieves regional soil information
                and forecast weather conditions before generating crop
                recommendations using the trained ANN model.
              </p>

              <button
                onClick={onStartWizard}
                className="
                  mt-7
                  inline-flex items-center gap-2
                  text-[#347a40]
                  font-bold
                  cursor-pointer
                  hover:gap-3
                  transition-all
                "
              >
                Start Recommendation
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* THREE FEATURES ONLY */}
      {/* ===================================================== */}

      <section className="py-20 bg-[#f6f8f1]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-xl mx-auto mb-12">

            <p className="text-[#5d9938] font-bold uppercase tracking-widest text-xs">
              SmartCrop Technology
            </p>

            <h2 className="text-3xl font-extrabold text-[#20362a] mt-3">
              Three sources. One recommendation.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-7">

            {/* Soil */}

            <motion.div
              whileHover={{ y: -6 }}
              className="
                bg-white
                rounded-[24px]
                p-8
                shadow-sm
                border border-[#e4eadf]
              "
            >

              <div className="
                w-14 h-14
                rounded-2xl
                bg-[#edf7e8]
                flex items-center justify-center
                mb-6
              ">
                <MapPin className="w-7 h-7 text-[#4c8c3d]" />
              </div>

              <h3 className="text-xl font-bold text-[#20362a]">
                Regional Soil Data
              </h3>

              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                District-level N, P, K and pH information is prepared
                automatically for the recommendation model.
              </p>

            </motion.div>


            {/* Weather */}

            <motion.div
              whileHover={{ y: -6 }}
              className="
                bg-white
                rounded-[24px]
                p-8
                shadow-sm
                border border-[#e4eadf]
              "
            >

              <div className="
                w-14 h-14
                rounded-2xl
                bg-[#e8f5f7]
                flex items-center justify-center
                mb-6
              ">
                <CloudSun className="w-7 h-7 text-[#3d8490]" />
              </div>

              <h3 className="text-xl font-bold text-[#20362a]">
                Weather Forecast
              </h3>

              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Forecast temperature, rainfall and humidity are considered
                according to your district and season.
              </p>

            </motion.div>


            {/* ANN */}

            <motion.div
              whileHover={{ y: -6 }}
              className="
                bg-[#2d6e3b]
                rounded-[24px]
                p-8
                shadow-lg
                text-white
              "
            >

              <div className="
                w-14 h-14
                rounded-2xl
                bg-white/15
                flex items-center justify-center
                mb-6
              ">
                <BrainCircuit className="w-7 h-7 text-[#b7e58f]" />
              </div>

              <h3 className="text-xl font-bold">
                ANN Recommendation
              </h3>

              <p className="mt-3 text-sm text-green-50/90 leading-relaxed">
                The trained Artificial Neural Network combines the prepared
                conditions and ranks suitable crops.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* SIMPLE HOW IT WORKS */}
      {/* ===================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-[#5d9938] font-bold uppercase tracking-widest text-xs">
              Simple Process
            </p>

            <h2 className="text-3xl font-extrabold text-[#20362a] mt-3">
              From location to recommendation
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="text-center px-6">

              <div className="
                mx-auto
                w-16 h-16
                rounded-full
                bg-[#edf7e8]
                flex items-center justify-center
                text-[#347a40]
                mb-5
              ">
                <MapPin className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-[#6da44a]">
                STEP 01
              </span>

              <h3 className="font-bold text-lg text-[#20362a] mt-2">
                Select District & Season
              </h3>

            </div>


            <div className="text-center px-6">

              <div className="
                mx-auto
                w-16 h-16
                rounded-full
                bg-[#edf7e8]
                flex items-center justify-center
                text-[#347a40]
                mb-5
              ">
                <BrainCircuit className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-[#6da44a]">
                STEP 02
              </span>

              <h3 className="font-bold text-lg text-[#20362a] mt-2">
                SmartCrop Analyses Data
              </h3>

            </div>


            <div className="text-center px-6">

              <div className="
                mx-auto
                w-16 h-16
                rounded-full
                bg-[#edf7e8]
                flex items-center justify-center
                text-[#347a40]
                mb-5
              ">
                <Sprout className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-[#6da44a]">
                STEP 03
              </span>

              <h3 className="font-bold text-lg text-[#20362a] mt-2">
                View Recommended Crops
              </h3>

            </div>

          </div>


          <div className="text-center mt-12">

            <button
              type="button"
              onClick={onStartWizard}
              className="
                inline-flex items-center gap-2
                px-8 py-4
                rounded-xl
                bg-[#347a40]
                hover:bg-[#286533]
                text-white
                font-bold
                shadow-lg
                transition-all
                cursor-pointer
              "
            >
              Get Crop Recommendation
              <ArrowRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};