import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Input = (props) => (
  <input
    {...props}
    className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-indigo-500/60"
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    rows={5}
    className="w-full resize-none rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition focus:border-indigo-500/60"
  />
);

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0f17] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-white/70">Have an opportunity, idea, or just want to say hi? Let's talk.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:hello@example.com';
            }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Your name" required />
              <Input type="email" placeholder="Email address" required />
            </div>
            <div className="mt-4">
              <Input placeholder="Subject" required />
            </div>
            <div className="mt-4">
              <Textarea placeholder="Your message" required />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-indigo-600/20 transition hover:translate-y-[-2px] hover:bg-indigo-500">
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div>
              <h3 className="text-xl font-semibold">Let's connect</h3>
              <p className="mt-2 text-white/70">I'm active on these platforms. Feel free to reach out.</p>
              <div className="mt-5 flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10">
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>

            <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Harikrishna A. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
