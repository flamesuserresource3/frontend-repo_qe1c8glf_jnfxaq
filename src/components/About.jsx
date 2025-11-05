import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0f17] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="text-indigo-400" />
          <h2 className="text-3xl font-bold">About</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur"
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h3 className="text-xl font-semibold">Hi, I’m Harikrishna A — Full Stack Developer</h3>
              <p className="mt-3 text-white/80">
                I build modern web apps end‑to‑end, from robust APIs to animated, accessible UIs. My focus is
                performance, clean architecture, and delightful micro‑interactions using a vector/3D aesthetic.
              </p>
              <p className="mt-3 text-white/70">
                Comfortable owning the product cycle: planning, implementation, testing, and shipping. I love working
                with React, TypeScript, FastAPI, and cloud‑native tooling to deliver reliable experiences.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-600/20 transition hover:translate-y-[-2px] hover:bg-indigo-500"
                >
                  <Rocket size={16} /> View Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Explore Projects
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-3xl font-extrabold">5+ </div>
                <div className="mt-1 text-xs text-white/60">Years Coding</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-3xl font-extrabold">20+ </div>
                <div className="mt-1 text-xs text-white/60">Projects</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-3xl font-extrabold">10x</div>
                <div className="mt-1 text-xs text-white/60">DX & Perf</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-3xl font-extrabold">100%</div>
                <div className="mt-1 text-xs text-white/60">Passion</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
