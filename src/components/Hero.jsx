import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
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

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] overflow-hidden bg-[#0b0f17] text-white">
      {/* Full-width Spline background (interactive) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient iridescent glow layer (visual only; doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top/bottom fades to ensure text readability */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0f17] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f17] to-transparent" />
        {/* Slow rotating radial glow to complement chrome blobs */}
        <motion.div
          aria-hidden
          initial={{ rotate: 0, opacity: 0.25 }}
          animate={{ rotate: 360, opacity: 0.35 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(40% 40% at 50% 50%, rgba(99,102,241,0.25), rgba(236,72,153,0.18) 40%, rgba(34,211,238,0.12) 70%, transparent 75%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-28 md:flex-row md:gap-8 md:py-36">
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

        <div className="w-full md:w-2/5" />
      </div>
    </section>
  );
}
