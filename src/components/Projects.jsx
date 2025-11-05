import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    desc: 'Docs, comments, and presence with CRDT sync and WebSockets.',
    stack: ['React', 'Node', 'WebSocket', 'Postgres'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Platform',
    desc: 'Headless storefront with blazing-fast search and checkout.',
    stack: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Analytics Dashboards',
    desc: 'Interactive dashboards with drilldowns and custom widgets.',
    stack: ['React', 'D3', 'FastAPI', 'MongoDB'],
    demo: '#',
    repo: '#',
  },
];

const ProjectCard = ({ p, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.06 }}
    className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-lg"
  >
    <div className="mb-3 h-32 w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30">
      {/* Vector style placeholder illustration */}
      <svg className="h-full w-full opacity-70" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="400" height="160" rx="14" fill="url(#g)" />
        <g stroke="white" strokeOpacity="0.2">
          <circle cx="60" cy="80" r="28" />
          <rect x="120" y="55" width="200" height="18" rx="9" />
          <rect x="120" y="85" width="160" height="12" rx="6" />
        </g>
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#6366f1"/>
            <stop offset="1" stopColor="#22d3ee"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <h3 className="text-lg font-semibold">{p.title}</h3>
    <p className="mt-1 text-sm text-white/70">{p.desc}</p>

    <div className="mt-3 flex flex-wrap gap-2">
      {p.stack.map((t) => (
        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">{t}</span>
      ))}
    </div>

    <div className="mt-4 flex gap-2">
      <a href={p.demo} className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold shadow shadow-indigo-600/20 transition hover:bg-indigo-500">
        <ExternalLink size={14} /> Demo
      </a>
      <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10">
        <Github size={14} /> Code
      </a>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-white/70">A selection of recent builds — performant, accessible, and fun.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
