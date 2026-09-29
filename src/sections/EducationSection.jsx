import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Check } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Consistent top-tier academic performance across undergraduate studies and competitive entrance examinations.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl border transition-all ${
                idx === 0
                  ? 'bg-gradient-to-b from-[#101726]/90 to-[#0c101a]/95 border-indigo-500/40 shadow-xl shadow-indigo-950/30 md:scale-[1.02]'
                  : 'bg-[#0d121f]/80 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {edu.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                  {edu.institution}
                </h3>
                <div className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.location}</span>
                </div>

                <div className="text-sm font-semibold text-slate-200 mb-3">
                  {edu.degree}
                </div>

                {/* Grade Pill */}
                <div className="inline-block px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs font-bold mb-4">
                  {edu.grade}
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {idx === 0 && (
                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Pune University Affiliated</span>
                  <span className="text-emerald-400 font-semibold">Active Full-Time</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
