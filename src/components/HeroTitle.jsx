import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <div className="text-center md:text-left max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="font-geist font-semibold tracking-[-0.03em] text-4xl md:text-6xl lg:text-7xl text-white/95 drop-shadow-[0_2px_6px_rgba(255,255,255,0.05)]"
      >
        <span className="block text-white">Alex Doe</span>
        <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
          Full‑Stack Developer
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-5 text-zinc-300/80 md:text-lg leading-relaxed"
      >
        Crafting minimal, high‑performance web experiences with a focus on elegant
        architectures and immersive, understated aesthetics.
      </motion.p>
    </div>
  );
}
