import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, TrendingUp, Award, Zap, GraduationCap, ArrowUpRight } from 'lucide-react';
import { achievements } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  TrendingUp: TrendingUp,
  Award: Award,
  Zap: Zap,
  GraduationCap: GraduationCap
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            RECOGNITION & METRICS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key Honors & Achievements
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Quantifiable results demonstrated through competitive programming platforms and state standardized exams.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl p-6 bg-[#0d121f]/85 border border-white/10 hover:border-amber-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                    {item.metric}
                  </div>

                  <h3 className="text-base font-bold text-slate-200 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{item.platform}</span>
                  <span className="text-amber-400 font-semibold flex items-center gap-1">
                    Verified <Trophy className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
