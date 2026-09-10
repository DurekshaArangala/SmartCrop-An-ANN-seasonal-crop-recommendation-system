import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Cpu, CloudRain, Layers, Sparkles } from 'lucide-react';

interface LoadingPageProps {
  currentMessage: string;
  progress: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({
  currentMessage,
  progress,
}) => {
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/90 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-emerald-200 shadow-2xl shadow-emerald-950/10 relative overflow-hidden"
      >
        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Progress Circle */}
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center my-4">
          {/* Subtle Outer Pulse Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-emerald-200/50 animate-ping opacity-25" />

          {/* SVG Circular Progress */}
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
            {/* Background Track */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              className="stroke-emerald-100"
              strokeWidth="10"
              fill="transparent"
            />
            {/* Animated Progress Bar */}
            <motion.circle
              cx="80"
              cy="80"
              r={radius}
              className="stroke-[#2E7D32]"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </svg>

          {/* Inner Center Icon & Percentage */}
          <div className="absolute flex flex-col items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-2xl bg-[#F5FFF5] border border-emerald-200 flex items-center justify-center text-[#2E7D32] shadow-xs mb-1"
            >
              <Cpu className="w-6 h-6 animate-pulse text-[#2E7D32]" />
            </motion.div>
            <span className="text-xl font-extrabold text-stone-900 tracking-tight">
              {progress}%
            </span>
          </div>
        </div>

        {/* Dynamic Loading Message */}
        <div className="min-h-[64px] flex flex-col items-center justify-center mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
              <p className="text-base font-extrabold text-stone-800 tracking-tight">
                {currentMessage}
              </p>
            </motion.div>
          </AnimatePresence>
          <p className="text-xs text-stone-500 mt-1 font-medium">
            Trained ANN model processing Sri Lankan agronomic parameters...
          </p>
        </div>

        {/* Micro-status pipeline badges */}
        <div className="mt-6 pt-5 border-t border-emerald-100 flex items-center justify-center gap-4 text-stone-500 text-xs">
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <CloudRain className="w-3.5 h-3.5" />
            Weather Model
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            Soil Matrix
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <Sprout className="w-3.5 h-3.5" />
            Surplus Engine
          </span>
        </div>
      </motion.div>
    </div>
  );
};
