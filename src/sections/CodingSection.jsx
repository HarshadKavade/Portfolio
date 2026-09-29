import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Award, ExternalLink, Zap, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';
import { codingProfiles } from '../data/portfolioData';

export default function CodingSection() {
  return (
    <section id="coding" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            COMPETITIVE PROGRAMMING & DSA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Coding & Problem Solving Profiles
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Active contest competitor with hundreds of challenges solved in Data Structures and Algorithms.
          </p>
        </div>

        {/* Profile Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {codingProfiles.map((profile, idx) => {
            const isLeetCode = profile.name === 'LeetCode';
            return (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl p-6 sm:p-8 bg-[#0d121f]/90 border border-white/10 hover:border-amber-500/40 backdrop-blur-xl shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${isLeetCode ? 'bg-amber-500/15 text-amber-400' : 'bg-purple-500/15 text-purple-400'} border border-white/10`}>
                        {isLeetCode ? <Code2 className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {profile.name}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          @{profile.handle}
                        </span>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 text-slate-200 border border-white/10">
                      {profile.rating}
                    </span>
                  </div>

                  {/* Primary Stats Grid */}
                  <div className="grid grid-cols-3 gap-2.5 mb-6 text-center">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                      <div className="text-lg sm:text-xl font-extrabold text-white">
                        {profile.stat1.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                        {profile.stat1.label}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                      <div className="text-lg sm:text-xl font-extrabold text-amber-400">
                        {profile.stat2.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                        {profile.stat2.label}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                      <div className="text-lg sm:text-xl font-extrabold text-emerald-400">
                        {profile.stat3.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                        {profile.stat3.label}
                      </div>
                    </div>
                  </div>

                  {/* Algorithmic Focus Areas */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                      Frequent Algorithmic Topics
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Profile Link Button */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700/80 border border-white/10 hover:border-amber-500/30 transition-all shadow-md group/link"
                  >
                    <span>Visit {profile.name} Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-amber-400 transition-colors" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
