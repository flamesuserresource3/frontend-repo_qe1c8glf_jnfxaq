import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const timeline = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2022 — Present',
    points: [
      'Designed and shipped full-stack apps with React, Node/FastAPI, and SQL/NoSQL.',
      'Led performance workstreams, improving load times and Core Web Vitals.',
      'Built CI/CD pipelines and containerized deployments with Docker.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Various',
    period: '2020 — 2022',
    points: [
      'Implemented component-driven UIs with animations and accessibility as a core.',
      'Collaborated closely with designers, refining UX and interaction details.',
      'Maintained shared libraries and improved developer experience.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="text-indigo-400" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:block" />

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                {/* Dot */}
                <div className="absolute left-2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-indigo-400 shadow-[0_0_0_4px_rgba(99,102,241,0.2)] md:block" />

                <div className="md:pl-6">
                  <div className="mb-1 text-sm text-white/60">{item.period}</div>
                  <div className="text-lg font-semibold">{item.role} • {item.company}</div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-white/80">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
