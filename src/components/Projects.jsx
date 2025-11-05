import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import projects from '../data/projects.json';

const SVGPreview = ({ label }) => (
  <svg className="h-full w-full" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="400" height="260" rx="16" fill="url(#g)" />
    <g stroke="white" strokeOpacity="0.25">
      <circle cx="64" cy="130" r="32" />
      <rect x="120" y="90" width="220" height="16" rx="8" />
      <rect x="120" y="120" width="180" height="12" rx="6" />
      <rect x="120" y="144" width="200" height="12" rx="6" />
    </g>
    <text x="24" y="36" fill="white" fillOpacity="0.8" fontSize="18" fontFamily="Inter, system-ui">{label}</text>
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#6366f1"/>
        <stop offset="1" stopColor="#22d3ee"/>
      </linearGradient>
    </defs>
  </svg>
);

const ProjectCard = ({ p, i, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.06 }}
    className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-lg"
  >
    <div className="mb-3 h-32 w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30">
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

    <div className="mt-4 flex flex-wrap gap-2">
      <a href={p.demo} className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold shadow shadow-indigo-600/20 transition hover:bg-indigo-500">
        <ExternalLink size={14} /> Demo
      </a>
      <a href={p.repo} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10">
        <Github size={14} /> Code
      </a>
      <button onClick={() => onOpen(p.slug)} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10">
        View Details
      </button>
    </div>
  </motion.div>
);

function useProjectBySlug(slug) {
  return useMemo(() => projects.find((p) => p.slug === slug) || null, [slug]);
}

function ProjectModal({ slug, onClose }) {
  const project = useProjectBySlug(slug);
  const [index, setIndex] = useState(0);

  // Reset index whenever a new project is opened
  useEffect(() => {
    setIndex(0);
  }, [slug]);

  // Guard against stale indices and add arrow key navigation
  useEffect(() => {
    if (!project) return;
    if (index >= project.images.length) setIndex(0);

    const handleKeys = (e) => {
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % project.images.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + project.images.length) % project.images.length);
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [project, index, onClose]);

  if (!project) return null;

  const next = () => setIndex((i) => (i + 1) % project.images.length);
  const prev = () => setIndex((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative mx-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f17] p-4 shadow-2xl md:p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute right-3 top-3 inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10" aria-label="Close">
            <X size={16} />
          </button>

          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
            {/* Gallery */}
            <div className="relative">
              <div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 md:h-80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.images[index].gradient}`} />
                    <div className="relative h-full w-full">
                      <SVGPreview label={project.images[index].label} />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur hover:bg-white/20" aria-label="Previous image">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur hover:bg-white/20" aria-label="Next image">
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {project.images.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setIndex(i)}
                    className={`relative h-16 overflow-hidden rounded-lg border ${i === index ? 'border-indigo-500' : 'border-white/10'} bg-white/5`}
                    aria-label={`View ${img.label}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`} />
                    <div className="relative h-full w-full">
                      <svg className="h-full w-full" viewBox="0 0 180 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="8" width="40" height="40" rx="8" stroke="white" strokeOpacity="0.25" />
                        <rect x="60" y="16" width="100" height="10" rx="5" stroke="white" strokeOpacity="0.25" />
                        <rect x="60" y="32" width="80" height="10" rx="5" stroke="white" strokeOpacity="0.25" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-white/70">{project.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">{t}</span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href={project.demo} className="inline-flex items-center gap-1 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold shadow shadow-indigo-600/20 transition hover:bg-indigo-500">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={project.repo} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10">
                  <Github size={14} /> View Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState(null);

  // Open/close via hash for simple deep-linking like #project-realtime-collab
  useEffect(() => {
    const openFromHash = () => {
      const h = window.location.hash;
      if (h.startsWith('#project-')) {
        const slug = h.replace('#project-', '');
        const exists = projects.some((p) => p.slug === slug);
        if (exists) setActiveSlug(slug);
      } else {
        setActiveSlug(null);
      }
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  const openDetails = (slug) => {
    window.location.hash = `project-${slug}`;
  };

  const closeDetails = () => {
    if (window.location.hash.startsWith('#project-')) {
      history.pushState('', document.title, window.location.pathname + window.location.search + '#projects');
    }
    setActiveSlug(null);
  };

  return (
    <section id="projects" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-white/70">A selection of recent builds — performant, accessible, and fun.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard p={p} i={i} key={p.slug} onOpen={openDetails} />
          ))}
        </div>
      </div>

      <AnimatePresence>{activeSlug && <ProjectModal slug={activeSlug} onClose={closeDetails} />}</AnimatePresence>
    </section>
  );
}
