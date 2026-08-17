import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-600 relative z-10">
      © {new Date().getFullYear()} UAE Job Co-Pilot. Built for professionals in Dubai & Abu Dhabi.
    </footer>
  );
};