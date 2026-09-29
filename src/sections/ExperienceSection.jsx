import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Shield, Radio, Terminal, Sparkles, Building2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            WORK EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Internship & Experience
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Production-level engineering, full-stack product ownership, and mission-critical software.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Center/Left Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Node Point */}
                <div className="absolute left-2 sm:left-6 top-1.5 w-5 h-5 -translate-x-1/2 rounded-full bg-[#0b0f17] border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#0d121f]/90 border border-white/10 hover:border-indigo-500/40 backdrop-blur-xl p-6 sm:p-8 shadow-xl transition-all">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {item.type}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-indigo-300 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-4 h-4" />
                        <span>{item.organization}</span>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-mono text-slate-400 flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* High Level Summary */}
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Key Contributions & Engineering Milestones
                    </h4>
                    <div className="space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">Technologies & Tooling:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
