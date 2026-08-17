import React from 'react';

interface BadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ icon, children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-medium ${className}`}>
      {icon}
      <span>{children}</span>
    </div>
  );
};