import React from 'react';
import { RecommendedCrop } from '../../types';

import {
  ArrowRight,
  Award,
  Check,
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

interface CropCardProps {
  crop: RecommendedCrop;
  rank: number;
  isSelected?: boolean;
  onViewDetails: (crop: RecommendedCrop) => void;
  onSelectCrop: (crop: RecommendedCrop) => void;
}

export const CropCard: React.FC<CropCardProps> = ({
  crop,
  rank,
  isSelected = false,
  onViewDetails,
  onSelectCrop,
}) => {

  const confidence =
    crop.score <= 1
      ? crop.score * 100
      : crop.score;

  const cropImage =
    cropImages[crop.name.toLowerCase().trim()];

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: rank * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[24px]
        bg-white
        transition-all
        duration-300

        ${
          isSelected
            ? `
              border-2
              border-[#4f8b3d]
              shadow-xl
            `
            : `
              border
              border-[#e0e7dc]
              shadow-sm
              hover:shadow-xl
              hover:border-[#b9d2ad]
            `
        }
      `}
    >

      {/* Crop image */}
      <div className="
        relative
        h-56
        overflow-hidden
        bg-[#eef3ea]
      ">

        {cropImage ? (

          <img
            src={cropImage}
            alt={crop.name}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />

        ) : (

          <div className="
            w-full
            h-full
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-[#e8f3e2]
            to-[#d4e7ca]
          ">

            <Sprout className="
              w-16
              h-16
              text-[#5b9147]
            " />

          </div>

        )}

        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/75
          via-black/10
          to-transparent
        " />

        <div className="
          absolute
          top-4
          left-4
          bg-white
          text-[#285d35]
          px-3
          py-1.5
          rounded-full
          text-xs
          font-extrabold
          shadow-md
        ">

          {rank === 1
            ? 'Best Match'
            : `#${rank} Recommendation`
          }

        </div>

        <div className="
          absolute
          bottom-5
          left-5
          right-5
          text-white
        ">

          <p className="
            text-xs
            text-green-200
            font-semibold
            uppercase
            tracking-wider
            mb-1
          ">
            Recommended Crop
          </p>

          <h3 className="
            text-2xl
            font-extrabold
            capitalize
          ">
            {crop.name}
          </h3>

        </div>

      </div>

      {/* Card body */}
      <div className="p-6">

        <div className="
          flex
          items-center
          justify-between
          mb-3
        ">

          <div className="
            flex
            items-center
            gap-2
          ">

            <Award className="
              w-5
              h-5
              text-[#5c9745]
            " />

            <span className="
              text-sm
              font-bold
              text-[#2c4032]
            ">
              ANN Confidence
            </span>

          </div>

          <span className="
            text-xl
            font-extrabold
            text-[#347a40]
          ">
            {confidence.toFixed(1)}%
          </span>

        </div>

        <div className="
          w-full
          h-2
          rounded-full
          bg-[#e9eee6]
          overflow-hidden
        ">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${Math.min(
                confidence,
                100
              )}%`,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2 + rank * 0.08,
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-[#347a40]
              to-[#78b94e]
            "
          />

        </div>

        <p className="
          text-xs
          text-stone-500
          leading-relaxed
          mt-4
        ">
          Ranked by the SmartCrop Artificial
          Neural Network using soil and forecast
          weather conditions.
        </p>

        <div className="
          grid
          grid-cols-2
          gap-3
          mt-6
        ">

          <button
            type="button"
            onClick={() =>
              onViewDetails(crop)
            }
            className="
              flex
              items-center
              justify-center
              gap-1.5
              py-3
              px-3
              rounded-xl
              border
              border-[#d7e2d1]
              text-[#347a40]
              text-xs
              font-bold
              bg-white
              hover:bg-[#f3f8f0]
              transition-all
              cursor-pointer
            "
          >

            View Details

            <ArrowRight className="
              w-3.5
              h-3.5
            " />

          </button>

          <button
            type="button"
            onClick={() =>
              onSelectCrop(crop)
            }
            className={`
              flex
              items-center
              justify-center
              gap-1.5
              py-3
              px-3
              rounded-xl
              text-xs
              font-bold
              transition-all
              cursor-pointer

              ${
                isSelected
                  ? `
                    bg-[#347a40]
                    text-white
                  `
                  : `
                    bg-[#edf6e9]
                    text-[#347a40]
                    hover:bg-[#347a40]
                    hover:text-white
                  `
              }
            `}
          >

            {isSelected ? (
              <>
                <Check className="
                  w-3.5
                  h-3.5
                " />

                Best Match
              </>
            ) : (
              'Select'
            )}

          </button>

        </div>

      </div>

    </motion.div>

  );
};