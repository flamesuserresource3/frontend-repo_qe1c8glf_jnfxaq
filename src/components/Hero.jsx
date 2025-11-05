import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Cpu, Cloud, Database } from 'lucide-react';

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
  >
    {children}
  </a>
);

// A lightweight, GPU-friendly hero animation using Framer Motion
// Replaces the previous keyboard Spline with orbiting gradient orbs + icons
function OrbitingOrbs() {
  return (
    <div className="relative h-[380px] w-full md:h-[520px]">
      {/* Core glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-72 w-72 md:h-96 md:w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Central badge */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl shadow-indigo-500/10">
          <Code2 className="text-indigo-300" size={36} />
        </div>
      </div>

      {/* Orbit rings */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ transformOrigin: '50% 50%' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
      >
        {/* Outer orbit */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
              <Cpu className="text-purple-300" size={22} />
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
              <Database className="text-cyan-300" size={20} />
            </div>
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
              <Cloud className="text-emerald-300" size={18} />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="h-8 w-8 rounded-full bg-indigo-400/40 blur-sm" />
          </div>
        </div>
      </motion.div>

      {/* Inner counter-rotating orbit */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ transformOrigin: '50% 50%' }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
      >
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-6 w-6 rounded-full bg-purple-400/50 blur-[2px]" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 rounded-full bg-cyan-300/60" />
          </div>
          <div className="absolute left-0 bottom-0">
            <div className="h-5 w-5 rounded-full bg-pink-400/60" />
          </div>
        </div>
      </motion.div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(transparent_0_23px,rgba(255,255,255,.2)_24px),linear-gradient(90deg,transparent_0_23px,rgba(255,255,255,.2)_24px)] [background-size:24px_24px]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0b0f17] text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 pt-24 md:flex-row md:gap-6 md:pt-28">
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Harikrishna A
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-lg text-white/80 sm:mt-4"
          >
            Full Stack Developer crafting modern web experiences — blending robust backends, elegant UIs, and playful interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
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
            className="mt-8 flex items-center gap-3"
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

        {/* New animated visual (no Spline) */}
        <div className="relative w-full md:w-1/2">
          <OrbitingOrbs />
        </div>
      </div>
    </section>
  );
}
