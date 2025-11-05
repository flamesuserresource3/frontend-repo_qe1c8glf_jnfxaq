import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
  >
    {children}
  </a>
);

// Soft animated background with orbiting gradient orbs
function OrbitingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* radial base glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]" />

      {/* Orb 1 */}
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 36, ease: 'linear' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/40 to-cyan-400/30 blur-3xl" />
      </motion.div>

      {/* Orb 2 */}
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 48, ease: 'linear' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80rem] w-[80rem] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute left-[15%] top-[10%] h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-rose-400/20 blur-3xl" />
      </motion.div>

      {/* Orb 3 */}
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[72rem] w-[72rem] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute bottom-[8%] right-[10%] h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-300/20 blur-3xl" />
      </motion.div>

      {/* vignette and top/bottom fades */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(0,0,0,0.6))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0f17] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f17] to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] overflow-hidden bg-[#0b0f17] text-white">
      {/* Animated background */}
      <OrbitingOrbs />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-24 md:flex-row md:gap-8 md:py-32">
        <div className="w-full md:w-3/5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-left lg:text-6xl"
          >
            Harikrishna A
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-center text-base text-white/85 sm:text-lg md:mt-4 md:text-left"
          >
            Full Stack Developer crafting modern web experiences — blending robust backends, elegant UIs, and playful interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-600/20 transition hover:translate-y-[-2px] hover:bg-indigo-500"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              View Resume <ExternalLink size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-3 md:justify-start"
          >
            <SocialLink href="https://github.com" label="GitHub">
              <Github size={18} />
            </SocialLink>
            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <Linkedin size={18} />
            </SocialLink>
            <SocialLink href="mailto:hello@example.com" label="Email">
              <Mail size={18} />
            </SocialLink>
          </motion.div>
        </div>

        {/* Visual spacer for layout balance */}
        <div className="w-full md:w-2/5" />
      </div>
    </section>
  );
}
