import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, TrendingUp, Award, Zap, CheckCircle2, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { personalInfo, statistics } from '../data/portfolioData';
import StatCounter from '../components/StatCounter';

const statIcons = {
  cgpa: GraduationCap,
  'leetcode-problems': Code2,
  'leetcode-rating': TrendingUp,
  codechef: Award,
  mhtcet: Zap
};

const pillarHighlights = [
  {
    title: "Computer Engineering (PICT)",
    desc: "Rigorous academic training at SCTR's Pune Institute of Computer Technology with a 9.28 / 10 CGPA.",
    icon: GraduationCap,
    color: "text-indigo-400"
  },
  {
    title: "Full-Stack Development",
    desc: "Architecting end-to-end web applications with React, Tailwind CSS, Node.js, Express, and MongoDB.",
    icon: Cpu,
    color: "text-cyan-400"
  },
  {
    title: "Data Structures & Algorithms",
    desc: "500+ algorithmic problems solved on LeetCode with peak rating of 1734 and 2-Star CodeChef standing.",
    icon: Code2,
    color: "text-amber-400"
  },
  {
    title: "Real-Time & API Systems",
    desc: "Building low-latency WebSocket architectures with Socket.IO, JWT authorization, and resilient RESTful APIs.",
    icon: Zap,
    color: "text-emerald-400"
  },
  {
    title: "Generative AI & Agentic RAG",
    desc: "Engineering semantic retrieval, LangChain agent loops, vector search, and Mistral LLM integrations.",
    icon: Terminal,
    color: "text-purple-400"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering High-Performance Web & AI Systems
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Bridging algorithmic precision and real-world software architecture.
          </p>
        </div>

        {/* Narrative & Focus Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0d121f]/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-5"
          >
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Academic Rigor & Engineering Passion
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.bio}
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {personalInfo.extendedBio}
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">Institution:</span>
                <span className="text-white font-medium">PICT Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">Department:</span>
                <span className="text-white font-medium">Computer Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">Batch:</span>
                <span className="text-white font-medium">2023 – 2027</span>
              </div>
            </div>
          </motion.div>

          {/* Core Technical Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillarHighlights.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`p-2 rounded-lg bg-white/5 ${pillar.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Viewport Animated Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {statistics.map((stat, idx) => {
            const Icon = statIcons[stat.id] || Zap;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-5 rounded-2xl bg-[#0d121f]/90 border border-white/10 hover:border-indigo-500/40 backdrop-blur-xl shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Ambient hover glow */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {stat.highlight}
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-baseline">
                    <StatCounter
                      value={stat.value}
                      precision={stat.precision}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
