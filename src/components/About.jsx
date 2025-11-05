import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layers, Sparkles } from 'lucide-react';

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  tools: ['Docker', 'Git', 'CI/CD', 'Vite', 'Testing Library'],
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
    {children}
  </span>
);

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

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <p className="text-white/80">
              I'm Harikrishna A — a full stack developer passionate about building performant, accessible, and delightful products. I enjoy transforming ideas into high-quality web apps with clean architectures and thoughtful micro-interactions.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold"><Code2 size={18}/> Frontend</div>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold"><Server size={18}/> Backend</div>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 font-semibold"><Layers size={18}/> Tools</div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="mb-4 text-xl font-semibold">Experience</h3>
            <ul className="space-y-5">
              <li className="relative">
                <div className="mb-1 text-sm text-white/60">2022 — Present</div>
                <div className="text-white font-medium">Full Stack Developer • Freelance</div>
                <p className="text-white/70">Building end-to-end products, from API design to pixel-perfect frontends. Focus on performance and DX.</p>
              </li>
              <li className="relative">
                <div className="mb-1 text-sm text-white/60">2020 — 2022</div>
                <div className="text-white font-medium">Frontend Engineer • Various</div>
                <p className="text-white/70">Crafted responsive interfaces with component-driven architectures and animations.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
