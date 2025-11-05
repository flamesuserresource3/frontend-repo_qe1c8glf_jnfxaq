import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0f17] text-white">
      {/* Simple sticky nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Rocket className="text-indigo-400" size={18} />
            <span>Harikrishna A</span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
            <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold shadow shadow-indigo-600/20 hover:bg-indigo-500"
          >
            View Resume
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
