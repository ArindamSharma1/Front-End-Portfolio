import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-40">
      <div className="flex flex-col items-center gap-2">
        <div className="w-1 h-24 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-accent"
            initial={{ height: 0 }}
            animate={{ height: `${progress}%` }}
            transition={{ type: 'tween', duration: 0.3 }}
          />
        </div>
        <motion.div
          className="text-xs font-semibold text-slate-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {Math.round(progress)}%
        </motion.div>
      </div>
    </div>
  );
};
