import React from 'react';
import { AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SurplusAlertProps {
  cropName?: string;
  alternativeCrops?: string[];
  onSelectAlternative?: (cropName: string) => void;
}

export const SurplusAlert: React.FC<SurplusAlertProps> = ({
  cropName = 'this crop',
  alternativeCrops = ['Beans', 'Leeks', 'Chilli'],
  onSelectAlternative
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-amber-50/95 border-2 border-amber-400/80 rounded-2xl p-5 md:p-6 shadow-sm shadow-amber-900/5 my-6 relative overflow-hidden"
    >
      <div className="absolute -right-8 -top-8 w-36 h-36 bg-amber-200/40 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/30 mt-0.5">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                Surplus Warning
              </span>
              <h3 className="text-lg font-bold text-amber-950">
                High Supply Alert
              </h3>
            </div>
            <p className="text-amber-900/90 text-sm mt-1 leading-relaxed">
              Many farmers are expected to cultivate <strong className="font-semibold text-amber-950">{cropName}</strong> this season. 
              Higher supply may suppress farmgate prices during the harvest window.
            </p>
          </div>
        </div>

        {alternativeCrops && alternativeCrops.length > 0 && (
          <div className="w-full md:w-auto shrink-0 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-3 md:p-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-950 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Recommended Alternative Crops</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {alternativeCrops.map((altCrop) => (
                <button
                  key={altCrop}
                  type="button"
                  onClick={() => onSelectAlternative && onSelectAlternative(altCrop)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-emerald-100/80 hover:bg-emerald-200 rounded-lg transition-colors border border-emerald-300/60 shadow-xs cursor-pointer"
                >
                  <span>{altCrop}</span>
                  <ArrowRight className="w-3 h-3 text-emerald-700" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
