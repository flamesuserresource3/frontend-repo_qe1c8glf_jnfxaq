import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layers } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-indigo-500/20 to-cyan-500/20',
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    icon: Layers,
    title: 'Tools',
    items: ['Docker', 'Git', 'CI/CD', 'Vite', 'Testing Library'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

const Chip = ({ children }) => (
  <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/90">
    {children}
  </span>
);

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="mt-2 text-white/70">A focused toolkit for building fast, accessible, and animated web apps.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.gradient} blur-2xl`} />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <cat.icon className="text-indigo-300" size={18} />
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
