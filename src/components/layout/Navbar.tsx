import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between relative z-10">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center font-bold text-slate-950 text-lg">
          N
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">
          Nawa<span className="text-emerald-400">.ai</span>
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs font-medium bg-slate-900/80 border border-slate-800 rounded-full px-3 py-1.5 text-slate-400">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Optimized for Dubai, Abu Dhabi & Emirates
      </div>
    </nav>
  );
};