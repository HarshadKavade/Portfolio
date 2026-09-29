import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck, Zap, GitBranch, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-3xl my-8 bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl shadow-indigo-950/50 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="relative px-6 py-5 border-b border-white/10 bg-[#0f1523]/80 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {project.badge || project.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Full Architecture Breakdown
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Project Overview & Objective
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {project.detailedOverview}
                </p>
              </div>

              {/* Engineering Highlights / Architecture */}
              {project.architecture && (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Technical Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {Object.entries(project.architecture).map(([key, value]) => (
                      <div key={key} className="bg-white/5 p-3 rounded-lg border border-white/5">
                        <span className="font-mono text-indigo-300 uppercase text-[10px] block font-semibold mb-1">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="text-slate-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Key Engineering Features
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                      <span className="text-slate-300 leading-normal">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-200 border border-white/10 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0f1523]/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Verified Production Spec
              </div>

              <div className="flex items-center gap-2.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 transition-all"
                  >
                    <span>Inspect Codebase</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
