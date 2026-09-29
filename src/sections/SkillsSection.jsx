import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Coffee, FileCode, Terminal, Database, Layers, Palette, Layout,
  Smartphone, Sparkles, Server, Cpu, Network, Zap, Table, Radio, KeyRound,
  ShieldCheck, Lock, Brain, Search, GitFork, MessageSquareCode, Bot,
  GitBranch, Github, Send, Cloud, Image
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconComponents = {
  Code, Coffee, FileCode, Terminal, Database, Layers, Palette, Layout,
  Smartphone, Sparkles, Server, Cpu, Network, Zap, Table, Radio, KeyRound,
  ShieldCheck, Lock, Brain, Search, GitFork, MessageSquareCode, Bot,
  GitBranch, Github, Send, Cloud, Image
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map(c => ({ id: c.id, label: c.name }))
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tools, Stacks & Frameworks
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Organized across languages, full-stack development, distributed databases, real-time protocols, and Generative AI.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 font-semibold'
                    : 'bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 sm:p-8 bg-[#0d121f]/70 border border-white/10 backdrop-blur-xl shadow-xl"
              >
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    {category.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {category.skills.length} competencies
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                  {category.skills.map((skill, sIdx) => {
                    const Icon = iconComponents[skill.icon] || Code;
                    return (
                      <motion.div
                        key={sIdx}
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="group relative p-3.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/40 hover:bg-slate-800/90 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                            {skill.level}
                          </span>
                        </div>

                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate mt-0.5">
                            {skill.highlight}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
