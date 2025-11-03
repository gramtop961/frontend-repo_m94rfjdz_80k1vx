import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-8 flex flex-col sm:flex-row items-center gap-4"
    >
      <a
        href="#portfolio"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur hover:bg-white/10 hover:border-white/20 transition-colors"
      >
        View Portfolio
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>

      <a
        href="#contact"
        className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-zinc-200 bg-gradient-to-b from-zinc-800/70 to-black/60 border border-white/10 shadow-lg shadow-black/40 hover:from-zinc-700/70 hover:to-black/60 transition-colors"
      >
        Contact Me
      </a>
    </motion.div>
  );
}
