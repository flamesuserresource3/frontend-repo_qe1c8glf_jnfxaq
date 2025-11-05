import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import Spline from '@splinetool/react-spline';

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
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Contact Me <ExternalLink size={18} />
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

        {/* Spline 3D scene without box */}
        <div className="relative w-full md:w-1/2">
          <div className="h-[380px] w-full md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
