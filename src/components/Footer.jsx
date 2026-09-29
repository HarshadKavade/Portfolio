import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Code2, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#07090f] overflow-hidden">
      
      {/* Final Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#0f172a]/80 to-[#0b0f17]/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden text-center">
          {/* Subtle background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl -z-10" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for High-Impact Roles</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Have an idea or opportunity?
          </h3>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Let's build something impactful together.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all transform hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span>© 2026 Harshad Kavade.</span>
          <span className="hidden sm:inline">All rights reserved.</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400">
          <span>Built with React &</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
            aria-label="LeetCode"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-slate-300 hover:text-white shadow-2xl backdrop-blur-md transition-all transform hover:-translate-y-1 focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
}
