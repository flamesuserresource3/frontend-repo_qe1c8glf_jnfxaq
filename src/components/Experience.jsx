import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import timeline from '../data/experience.json';

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/80">
      {children}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Briefcase className="text-indigo-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <p className="hidden text-sm text-white/60 sm:block">A quick look at recent roles and impact</p>
        </div>

        <div className="relative">
          {/* Center line on large screens; left-aligned on mobile via hidden */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/10 to-transparent lg:block" />

          <ol className="space-y-8">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const contentOrder = isLeft ? 'lg:order-1' : 'lg:order-2';
              const dotOrder = isLeft ? 'lg:order-2' : 'lg:order-1';

              return (
                <motion.li
                  key={`${item.role}-${item.company}-${idx}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="relative"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
                    {/* Content card */}
                    <div className={`order-2 ${contentOrder}`}>
                      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 blur-2xl" />
                        <div className="relative">
                          <div className="mb-1 text-xs uppercase tracking-wide text-white/60">{item.period}</div>
                          <div className="text-lg font-semibold">{item.role} • {item.company}</div>
                          <ul className="mt-3 list-disc space-y-1 pl-5 text-white/80">
                            {item.points.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                          {item.tags?.length ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.tags.map((t) => (
                                <Tag key={t}>{t}</Tag>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className={`relative mb-4 mt-2 hidden items-center justify-center ${dotOrder} lg:flex`}>
                      <div className="relative h-4 w-4 rounded-full bg-indigo-400 shadow-[0_0_0_6px_rgba(99,102,241,0.18)]" />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
