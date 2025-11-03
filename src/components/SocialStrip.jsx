import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const socials = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: '#', icon: Mail },
  { name: 'Resume', href: '#', icon: ExternalLink },
];

export default function SocialStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.6 }}
      className="mt-10 w-full max-w-3xl"
    >
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
        {socials.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            aria-label={name}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-zinc-300/90 backdrop-blur hover:bg-white/[0.06] hover:border-white/20 transition-colors"
          >
            <Icon className="h-4 w-4 text-zinc-200/80" />
            <span className="hidden sm:inline-block">{name}</span>
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] text-zinc-400/80">
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Web Apps</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">APIs</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Open Source</span>
      </div>
    </motion.div>
  );
}
