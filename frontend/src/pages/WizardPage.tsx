import React, { useState } from 'react';

import {
  FarmInput,
  SeasonType,
} from '../types';

import {
  SRI_LANKAN_DISTRICTS,
  SRI_LANKAN_SEASONS,
} from '../data/sriLankaData';

import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CloudSun,
  MapPin,
  Sprout,
} from 'lucide-react';

import { motion } from 'motion/react';


interface WizardPageProps {
  initialInputs: FarmInput;
  onSubmit: (inputs: FarmInput) => void;
  onCancel: () => void;
}


export const WizardPage: React.FC<WizardPageProps> = ({
  initialInputs,
  onSubmit,
  onCancel,
}) => {

  const [inputs, setInputs] =
    useState<FarmInput>(initialInputs);


  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    onSubmit(inputs);
  };


  return (

    <div className="min-h-[calc(100vh-80px)] bg-[#f5f7f0] py-14 px-4">

      <div className="max-w-5xl mx-auto">


        {/* Back */}

        <button
          type="button"
          onClick={onCancel}
          className="
            inline-flex items-center gap-2
            text-sm
            text-stone-600
            hover:text-[#347a40]
            font-semibold
            mb-8
            cursor-pointer
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>


        <div className="
          grid
          lg:grid-cols-[0.9fr_1.1fr]
          bg-white
          rounded-[28px]
          overflow-hidden
          shadow-xl
          border border-[#e3eadc]
        ">


          {/* ================================================= */}
          {/* LEFT IMAGE PANEL */}
          {/* ================================================= */}

          <div className="relative min-h-[300px] lg:min-h-[560px]">

            <img
              src="/images/vegetables.avif"
              alt="Agriculture"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123b24]/95 via-[#245936]/70 to-black/10" />


            <div className="
              absolute
              bottom-0
              left-0
              right-0
              p-8
              text-white
            ">

              <div className="
                w-12 h-12
                rounded-xl
                bg-white/15
                backdrop-blur
                flex items-center justify-center
                mb-5
              ">
                <Sprout className="w-6 h-6 text-[#b9e491]" />
              </div>

              <h2 className="text-3xl font-extrabold">
                Find crops suited to your area.
              </h2>

              <p className="mt-3 text-sm text-green-50/90 leading-relaxed">
                SmartCrop automatically combines soil information
                and forecast weather conditions for your selected
                district and cultivation season.
              </p>

            </div>

          </div>



          {/* ================================================= */}
          {/* RIGHT FORM */}
          {/* ================================================= */}

          <div className="p-7 sm:p-10 lg:p-12">

            <div className="mb-9">

              <p className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#68a347]
                font-bold
              ">
                Crop Recommendation
              </p>

              <h1 className="
                mt-2
                text-3xl
                font-extrabold
                text-[#20362a]
              ">
                Tell us where you farm.
              </h1>

              <p className="mt-2 text-sm text-stone-500">
                Only two selections are required.
              </p>

            </div>


            <form onSubmit={handleSubmit}>


              {/* District */}

              <div className="mb-7">

                <label
                  htmlFor="district"
                  className="
                    flex items-center gap-2
                    font-bold
                    text-[#263a2d]
                    mb-3
                  "
                >
                  <MapPin className="w-5 h-5 text-[#4e8d3e]" />
                  District
                </label>


                <select
                  id="district"
                  value={inputs.district}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      district: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border border-[#d7e1d2]
                    bg-[#fafcf8]
                    px-4 py-4
                    text-stone-800
                    font-semibold
                    outline-none
                    focus:border-[#5b9945]
                    focus:ring-4
                    focus:ring-green-100
                    transition-all
                    cursor-pointer
                  "
                  required
                >

                  {SRI_LANKAN_DISTRICTS.map(
                    (district) => (

                      <option
                        key={district.id}
                        value={district.name}
                      >
                        {district.name}
                      </option>

                    )
                  )}

                </select>

              </div>



              {/* Season */}

              <div className="mb-8">

                <label className="
                  flex items-center gap-2
                  font-bold
                  text-[#263a2d]
                  mb-3
                ">
                  <Calendar className="w-5 h-5 text-[#4e8d3e]" />
                  Cultivation Season
                </label>


                <div className="grid grid-cols-2 gap-4">

                  {SRI_LANKAN_SEASONS.map(
                    (season) => {

                      const selected =
                        inputs.season === season.id;

                      return (

                        <button
                          type="button"
                          key={season.id}
                          onClick={() =>
                            setInputs({
                              ...inputs,
                              season:
                                season.id as SeasonType,
                            })
                          }
                          className={`
                            text-left
                            rounded-xl
                            border-2
                            p-5
                            transition-all
                            cursor-pointer

                            ${
                              selected
                                ? `
                                  border-[#4d8c3c]
                                  bg-[#f0f8eb]
                                  shadow-sm
                                `
                                : `
                                  border-[#e1e5dd]
                                  bg-white
                                  hover:border-[#9dc58c]
                                `
                            }
                          `}
                        >

                          <div className="flex items-center justify-between">

                            <span className="
                              font-extrabold
                              text-[#263a2d]
                              text-lg
                            ">
                              {season.name}
                            </span>

                            <div
                              className={`
                                w-4 h-4
                                rounded-full
                                border-2

                                ${
                                  selected
                                    ? 'bg-[#4d8c3c] border-[#4d8c3c]'
                                    : 'border-stone-300'
                                }
                              `}
                            />

                          </div>

                          <p className="
                            text-xs
                            text-stone-500
                            mt-2
                          ">
                            {season.months}
                          </p>

                        </button>

                      );
                    }
                  )}

                </div>

              </div>



              {/* Automatic Data Note */}

              <div className="
                flex
                items-start
                gap-3
                rounded-xl
                bg-[#f4f8f1]
                border border-[#dce8d5]
                p-4
                mb-8
              ">

                <CloudSun className="
                  w-5 h-5
                  text-[#4d8c3c]
                  shrink-0
                  mt-0.5
                " />

                <p className="
                  text-xs
                  text-stone-600
                  leading-relaxed
                ">
                  Soil N, P, K and pH values plus forecast
                  temperature, humidity and rainfall will be
                  retrieved automatically.
                </p>

              </div>



              {/* Submit */}

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="
                  w-full
                  flex items-center justify-center gap-2
                  bg-[#347a40]
                  hover:bg-[#286533]
                  text-white
                  font-extrabold
                  py-4
                  rounded-xl
                  shadow-lg
                  transition-all
                  cursor-pointer
                "
              >
                Get My Crop Recommendations
                <ArrowRight className="w-5 h-5" />
              </motion.button>

            </form>

          </div>

        </div>

      </div>

    </div>

  );
};