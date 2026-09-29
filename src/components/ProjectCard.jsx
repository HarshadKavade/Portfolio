import React from 'react';
import { ExternalLink, Github, ArrowRight, ShieldCheck, Users, Bot, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  ShieldAlert: ShieldCheck,
  Users: Users,
  Bot: Bot
};

export default function ProjectCard({ project, onSelect, index }) {
  const IconComponent = iconMap[project.iconName] || Sparkles;
  const isFlagship = project.id === 'sahyatri';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative rounded-2xl transition-all duration-300 ${
        isFlagship
          ? 'lg:col-span-2 bg-gradient-to-b from-slate-900/90 via-[#0d121f]/90 to-slate-950/95 border-2 border-indigo-500/30 shadow-2xl shadow-indigo-950/40 hover:border-indigo-500/60'
          : 'bg-[#0d121f]/80 border border-white/10 hover:border-indigo-500/40 shadow-xl'
      } backdrop-blur-xl flex flex-col justify-between overflow-hidden`}
    >
      {/* Top Accent Gradient Border / Glow */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          isFlagship
            ? 'from-rose-500 via-indigo-500 to-purple-500'
            : 'from-indigo-500 via-purple-500 to-cyan-500'
        } opacity-80 group-hover:opacity-100 transition-opacity`}
      />

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex-1">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                isFlagship
                  ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                  : 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
              }`}
            >
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                {project.type}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                {project.title.split('–')[0].trim()}
              </h3>
            </div>
          </div>

          {project.badge && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                isFlagship
                  ? 'bg-gradient-to-r from-rose-500/20 to-purple-500/20 text-rose-300 border border-rose-500/30 shadow-sm shadow-rose-500/10'
                  : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {project.badge}
            </span>
          )}
        </div>

        {/* Tagline / Subtitle */}
        <p className="text-sm font-medium text-indigo-300/90 mb-3">
          {project.tagline}
        </p>

        {/* Primary Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features (Highlighted 4 for readability) */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Key Engineering Highlights
          </div>
          <div className={`grid grid-cols-1 ${isFlagship ? 'sm:grid-cols-2' : ''} gap-2`}>
            {project.keyFeatures.slice(0, isFlagship ? 4 : 3).map((feature, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-8 pt-0 border-t border-white/5 bg-slate-950/40 mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-indigo-300 hover:text-indigo-200 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-400/30 transition-all shadow-sm"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
