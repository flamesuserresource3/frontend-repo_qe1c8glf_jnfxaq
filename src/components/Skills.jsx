import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layers, Rocket, Wrench } from 'lucide-react';

const stacks = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    blurb: 'Component-driven UIs with motion and accessibility built in.',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
    ],
    gradient: 'from-indigo-500/20 to-cyan-500/20',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    blurb: 'Designing reliable APIs and services with performance in mind.',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'FastAPI (Python)', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
    ],
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    icon: Layers,
    title: 'Architecture & Ops',
    blurb: 'Scalable patterns, CI/CD, and cloud-native deployments.',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Vite / Tooling', level: 85 },
      { name: 'Testing', level: 70 },
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/90">
    {children}
  </span>
);

const Progress = ({ value }) => (
  <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
    <div
      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
      style={{ width: `${value}%` }}
    />
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Rocket className="text-indigo-400" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stacks.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.gradient} blur-2xl`} />
              <div className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <s.icon className="text-indigo-300" size={18} />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mb-4 text-sm text-white/70">{s.blurb}</p>

                <div className="space-y-3">
                  {s.skills.map((sk) => (
                    <div key={sk.name}>
                      <div className="mb-1 flex items-center justify-between text-xs text-white/70">
                        <span>{sk.name}</span>
                        <span>{sk.level}%</span>
                      </div>
                      <Progress value={sk.level} />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.skills.slice(0, 3).map((sk) => (
                    <Badge key={sk.name}>{sk.name}</Badge>
                  ))}
                  <Badge>+ more</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
