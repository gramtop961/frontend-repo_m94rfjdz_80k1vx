import { motion } from 'framer-motion';

function MountainSVG({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 720"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mistGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="mountGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Distant horizon haze */}
      <rect width="1440" height="720" fill="url(#mistGrad)" />

      {/* Yotei-inspired silhouette */}
      <path
        d="M0 520 C240 500 420 380 620 380 C780 380 900 440 1080 470 C1240 495 1340 485 1440 470 L1440 720 L0 720 Z"
        fill="url(#mountGrad)"
        opacity="0.45"
      />

      {/* Foreground ridge */}
      <path
        d="M0 560 C220 540 420 500 620 510 C820 520 1020 560 1440 540 L1440 720 L0 720 Z"
        fill="#F3F4F6"
        opacity="0.06"
      />
    </svg>
  );
}

export default function MistyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,250,250,0.10)_0%,rgba(0,0,0,0.0)_55%)]" />

      {/* Subtle diagonal gradient for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />

      {/* Moving mist layers */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.12, x: -40 }}
        animate={{ opacity: 0.18, x: 40 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="pointer-events-none absolute -inset-x-10 top-1/4 h-1/3 bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.06, x: 60 }}
        animate={{ opacity: 0.1, x: -60 }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-0 bottom-24 h-40 bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-2xl"
      />

      {/* Mountain silhouette (softened) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-70 mix-blend-screen">
        <MountainSVG className="w-full h-auto" />
      </div>

      {/* Vignette edges for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_75%)]" />
    </div>
  );
}
