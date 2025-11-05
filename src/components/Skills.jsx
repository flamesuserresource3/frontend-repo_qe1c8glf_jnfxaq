import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code2, Server, Layers } from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    blurb: 'Modern, accessible interfaces with motion-first thinking.',
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    items: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      { name: 'Framer Motion', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', dark: true },
    ],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    blurb: 'Typed APIs, auth, and robust data flows.',
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
    items: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', dark: true },
      { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    icon: Layers,
    title: 'Data, Ops & Testing',
    blurb: 'Deployments, databases, and reliability.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    items: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
      { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-plain.svg', dark: true },
    ],
  },
];

function LogoItem({ name, logo, dark }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.04 }}
      className="group flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-center"
      title={name}
    >
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-black/10">
        <img
          src={logo}
          alt={name}
          className={`h-8 w-8 object-contain transition ${dark ? 'invert' : ''}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="text-xs text-white/80">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Rocket className="text-indigo-400" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.gradient} blur-2xl`} />
              <div className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <cat.icon className="text-indigo-300" size={18} />
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <p className="mb-5 text-sm text-white/70">{cat.blurb}</p>

                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {cat.items.map((item) => (
                    <LogoItem key={item.name} {...item} />
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
