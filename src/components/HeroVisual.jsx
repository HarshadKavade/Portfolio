import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, FileCode, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState([
    '⚡ Initializing Node.js v22.14.0 environment...',
    '✓ Loaded profile: Harshad Kavade (PICT Pune)',
    '✓ Verified skills: MERN, LangChain, C++, DSA (500+ LeetCode)',
    '🚀 Status: Open to Software Engineering Opportunities',
    '✨ Ready for production deployment.'
  ]);

  const rawCode = `const developer = {
  name: "Harshad Kavade",
  role: "Full-Stack Developer",
  college: "SCTR's PICT Pune",
  cgpa: 9.28,
  stack: ["React", "Node.js", "MongoDB", "Python", "AI"],
  interests: ["MERN Stack", "DSA", "Generative AI"],
  status: "Open to SWE Opportunities"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setActiveTab('terminal');
    setExecutionOutput([
      '⚙️ Compiling developer profile...',
      '📡 Querying GitHub & LeetCode APIs...',
      '✓ Harshad Kavade: 500+ DSA problems solved',
      '✓ Max Contest Rating: 1734 | CodeChef 2-Star',
      '✓ Flagship Project: Sahyatri (Women Safety & Geospatial Routing)',
      '✓ High-Impact Collab: DevCollab (MERN + Socket.IO)',
      '✓ GenAI Integration: Video RAG Assistant (LangChain + Mistral)',
      '🎉 Evaluation Result: Highly qualified Software Engineer candidate!'
    ]);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-xl mx-auto lg:max-w-none"
    >
      {/* Decorative ambient backdrop glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Terminal Window Frame */}
      <div className="relative rounded-2xl border border-white/15 bg-[#0b0f17]/90 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0e1422]/90 select-none">
          {/* Mac window dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors inline-block" />
            <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              harshad@pict-dev: ~/portfolio
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleRun}
              title="Run code in terminal"
              disabled={isRunning}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-sans text-[11px] transition-all"
            >
              <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
            <button
              onClick={handleCopy}
              title="Copy code"
              className="p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center border-b border-white/5 bg-[#090d16] px-2 pt-1 gap-1">
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] rounded-t-lg transition-all ${
              activeTab === 'code'
                ? 'bg-[#0b0f17] text-indigo-300 border-t-2 border-indigo-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-indigo-400" />
            developer.ts
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] rounded-t-lg transition-all ${
              activeTab === 'terminal'
                ? 'bg-[#0b0f17] text-emerald-300 border-t-2 border-emerald-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            terminal.log
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-4 sm:p-5 min-h-[290px] overflow-x-auto leading-relaxed">
          {activeTab === 'code' ? (
            <div className="space-y-1">
              <div className="text-slate-500 italic">// Core developer configuration</div>
              <div>
                <span className="text-purple-400">const </span>
                <span className="text-blue-400">developer</span>
                <span className="text-slate-300">: </span>
                <span className="text-amber-300">SoftwareEngineer</span>
                <span className="text-slate-300"> = </span>
                <span className="text-slate-300">{'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name: </span>
                <span className="text-emerald-400">"Harshad Kavade"</span>
                <span className="text-slate-300">,</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role: </span>
                <span className="text-emerald-400">"Full-Stack Developer"</span>
                <span className="text-slate-300">,</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">education: </span>
                <span className="text-emerald-400">"SCTR's PICT Pune"</span>
                <span className="text-slate-300">,</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">cgpa: </span>
                <span className="text-cyan-400">9.28</span>
                <span className="text-slate-300">,</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">stack: </span>
                <span className="text-slate-300">[</span>
                <span className="text-emerald-400">"React"</span>
                <span className="text-slate-300">, </span>
                <span className="text-emerald-400">"Node.js"</span>
                <span className="text-slate-300">, </span>
                <span className="text-emerald-400">"MongoDB"</span>
                <span className="text-slate-300">, </span>
                <span className="text-emerald-400">"Python"</span>
                <span className="text-slate-300">, </span>
                <span className="text-emerald-400">"AI"</span>
                <span className="text-slate-300">],</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">dsaStats: </span>
                <span className="text-slate-300">{'{ '}</span>
                <span className="text-slate-400">solved: </span>
                <span className="text-cyan-400">500</span>
                <span className="text-slate-300">, </span>
                <span className="text-slate-400">rating: </span>
                <span className="text-cyan-400">1734</span>
                <span className="text-slate-300"> {'}'},</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">focus: </span>
                <span className="text-slate-300">[</span>
                <span className="text-emerald-400">"MERN Stack"</span>
                <span className="text-slate-300">, </span>
                <span className="text-emerald-400">"Real-Time Systems"</span>
                <span className="text-slate-300">, </span>
                <span className="text-emerald-400">"GenAI/RAG"</span>
                <span className="text-slate-300">],</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-400">openToWork: </span>
                <span className="text-purple-400">true</span>
              </div>
              <div>
                <span className="text-slate-300">{'}'};</span>
              </div>
              <div className="pt-2 text-slate-500 italic">
                <span className="text-indigo-400">export default </span>developer;
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 font-mono text-[11px]">
              {executionOutput.map((line, idx) => (
                <div
                  key={idx}
                  className={`animate-in fade-in slide-in-from-left-2 duration-300 ${
                    line.startsWith('✓')
                      ? 'text-emerald-400'
                      : line.startsWith('⚡') || line.startsWith('⚙️')
                      ? 'text-amber-400'
                      : line.startsWith('🚀') || line.startsWith('🎉')
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300'
                  }`}
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-slate-400 pt-2">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="w-2 h-4 bg-indigo-400 inline-block animate-pulse" />
              </div>
            </div>
          )}
        </div>

        {/* Terminal Footer Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#090d16] border-t border-white/5 text-[10px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              TypeScript 5.4
            </span>
            <span className="hidden sm:inline">UTF-8</span>
            <span className="hidden sm:inline">Node v22</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Production-Ready
            </span>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-xl text-xs font-sans text-slate-200"
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
          ⚡
        </div>
        <div>
          <div className="font-semibold text-white">500+ LeetCode DSA</div>
          <div className="text-[10px] text-slate-400">1734 Contest Rating</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden sm:flex absolute -top-5 -right-4 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-xl text-xs font-sans text-slate-200"
      >
        <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
          🎓
        </div>
        <div>
          <div className="font-semibold text-white">9.28 CGPA</div>
          <div className="text-[10px] text-slate-400">SCTR's PICT Pune</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
