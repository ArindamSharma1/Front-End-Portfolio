import { motion, transform } from 'framer-motion';
import { Mail } from 'lucide-react';

export const SideContact = () => {
  return (
    <motion.div
      className="fixed left-8 bottom-32 hidden lg:flex z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
    >
      <motion.a
        href="mailto:sharmaarindam091@gmail.com"
        className="flex items-center gap-2 text-slate-500 hover:text-accent transition-colors group"
        whileHover={{ x: -5 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">sharmaarindam091@gmail.com</span>
          <div className="w-0 h-0 bg-slate-300 group-hover:bg-accent transition-colors"></div>
        </div>
        <Mail size={18} />
      </motion.a>
    </motion.div>
  );
};
