import React from 'react';

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background base mesh */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Ambient gradient glow 1 - Indigo/Blue Top Left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/15 via-blue-600/10 to-transparent blur-3xl transform-gpu animate-pulse-subtle" />

      {/* Ambient gradient glow 2 - Purple/Violet Mid Right */}
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-purple-600/15 via-violet-600/10 to-transparent blur-3xl transform-gpu" />

      {/* Ambient gradient glow 3 - Cyan Bottom Center */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent blur-3xl transform-gpu" />

      {/* Subtle radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,7,10,0.85)_80%)]" />
    </div>
  );
}
