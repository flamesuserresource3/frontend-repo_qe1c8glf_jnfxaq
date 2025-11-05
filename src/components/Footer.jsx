import React from 'react';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f17] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Rocket className="text-indigo-400" size={18} />
            <span>Harikrishna A</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10">
              <Linkedin size={16} />
            </a>
            <a href="mailto:hello@example.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10">
              <Mail size={16} />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Harikrishna A. Crafted with care.</p>
      </div>
    </footer>
  );
}
