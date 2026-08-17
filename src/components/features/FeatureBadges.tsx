import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'UAE ATS Optimization',
  'Multi-currency & Tax-Free Salary Insights',
  'Direct Visa-Sponsor Filters',
];

export const FeatureBadges: React.FC = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
      {features.map((feature, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          {feature}
        </span>
      ))}
    </div>
  );
};