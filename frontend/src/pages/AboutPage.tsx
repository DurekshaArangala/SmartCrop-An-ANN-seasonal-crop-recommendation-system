import React from 'react';
import { 
  Sprout, 
  Target, 
  Cpu, 
  CloudSun, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  BarChart3,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onStartWizard: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartWizard }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#2E7D32] text-xs font-bold border border-emerald-300 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Final Year AI/ML Agricultural System</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
          About SmartCrop
        </h1>
        <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
          AI-Powered Smart Crop Recommendation System with Crop Surplus Prevention for Sri Lankan Farmers.
        </p>
      </div>

      {/* Project Mission & Vision */}
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-emerald-200/80 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#2E7D32] text-white flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-stone-900">
            System Objectives
          </h2>
        </div>

        <p className="text-stone-700 text-base leading-relaxed">
          Agriculture in Sri Lanka faces severe seasonal imbalances: either crops fail due to climatic mismatches, 
          or too many farmers cultivate the exact same commodity simultaneously, sparking destructive market gluts 
          where produce is sold below harvesting cost or discarded entirely.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="p-5 rounded-2xl bg-[#F5FFF5] border border-emerald-200/80">
            <h3 className="font-bold text-[#2E7D32] text-base mb-2">1. Precision Suitability</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Match soil types, irrigation regimes, and agro-ecological zones with biological crop requirements using 
              a trained Artificial Neural Network.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5FFF5] border border-emerald-200/80">
            <h3 className="font-bold text-[#2E7D32] text-base mb-2">2. Farmer Accessibility</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Eliminate the barrier of expensive laboratory soil testing. Allow smallholders to input simple parameters 
              they actually know (district, land size, water source).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5FFF5] border border-emerald-200/80">
            <h3 className="font-bold text-[#2E7D32] text-base mb-2">3. Surplus Prevention</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Model seasonal supply forecasts to alert farmers against planting oversupplied crops, directing them to high-value 
              alternative varieties.
            </p>
          </div>
        </div>
      </div>

      {/* AI Technologies Used Section */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            AI Technologies Used
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Architected using modern machine learning pipelines and Sri Lankan agrarian datasets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech 1: ANN */}
          <div className="bg-white rounded-3xl p-7 border border-emerald-100 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#2E7D32] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Artificial Neural Network (ANN)
                </h3>
                <span className="text-[11px] font-bold text-[#2E7D32]">Deep Learning Classifier</span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Trained multi-layer perceptron neural network calibrated on thousands of historical Sri Lankan cultivation records. 
              The ANN maps non-linear interactions between soil minerals (N, P, K), rainfall, temperature gradients, and crop yields 
              to compute probability scores for every crop.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-stone-700">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>Multi-layer Perceptron (MLP) Architecture</span>
            </div>
          </div>

          {/* Tech 2: Weather Forecasting */}
          <div className="bg-white rounded-3xl p-7 border border-emerald-100 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <CloudSun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Weather Forecasting
                </h3>
                <span className="text-[11px] font-bold text-sky-700">Meteorological Time-Series</span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Integrates Sri Lanka Meteorological Department seasonal rainfall cycles, Southwest and Northeast monsoon models, 
              and humidity projections tailored to each district's agro-climatic boundaries.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-stone-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Yala (May-Aug) & Maha (Sep-Mar) Seasonal Tracking</span>
            </div>
          </div>

          {/* Tech 3: Crop Recommendation */}
          <div className="bg-white rounded-3xl p-7 border border-emerald-100 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-100 text-[#2E7D32] flex items-center justify-center font-bold">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Crop Recommendation
                </h3>
                <span className="text-[11px] font-bold text-[#2E7D32]">Multi-Objective Ranking</span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Consolidates suitability scores, growing duration, water requirements, and expected financial profit margins to present 
              a ranked list of the top 6 viable crops for any agricultural plot.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-stone-700">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>Ranked Multi-Criteria Decision Engine</span>
            </div>
          </div>

          {/* Tech 4: Surplus Prevention */}
          <div className="bg-white rounded-3xl p-7 border border-emerald-100 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Crop Surplus Prevention
                </h3>
                <span className="text-[11px] font-bold text-amber-700">Market Risk Mitigation</span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Monitors regional farmer cultivation patterns to detect early over-concentration in single crops (e.g. green chilli, 
              carrots, or tomatoes) and dynamically generates high-yield alternative crop pathways.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-stone-700">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Protects Farmgate Incomes Against Price Crashes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Ready to Experience Data-Driven Agriculture?
        </h3>
        <p className="text-emerald-100 text-sm max-w-xl mx-auto">
          Try the SmartCrop recommendation engine for your farm acreage in any Sri Lankan district.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onStartWizard}
            className="px-8 py-3.5 rounded-xl font-extrabold text-sm text-[#2E7D32] bg-white hover:bg-emerald-50 transition-all shadow-md cursor-pointer"
          >
            Start Recommendation Wizard
          </button>
        </div>
      </div>
    </div>
  );
};
