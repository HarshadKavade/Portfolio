import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroVisual from '../components/HeroVisual';

export default function HeroSection({ onCopyEmail }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personalInfo.availability}
              </span>
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <div className="text-indigo-400 font-mono text-sm tracking-wide font-medium flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4" />
                <span>Hi, I'm</span>
              </div>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Harshad <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Kavade</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight pt-1">
                Computer Engineer & Full-Stack Developer
              </h2>
            </div>

            {/* Supporting Bio */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              {personalInfo.subheadline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Harshad_Kavade_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Channels & Contact Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400">CONNECT:</span>
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 transition-all transform hover:-translate-y-1"
                aria-label="LeetCode Profile"
                title="LeetCode (500+ Solved, 1734 Rating)"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Code Terminal Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
