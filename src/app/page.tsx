'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { ResumeUploader } from '@/components/features/ResumeUploader';
import { FeatureBadges } from '@/components/features/FeatureBadges';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const handleResumeUpload = (file: File) => {
    console.log('Processing resume:', file.name);
    // Trigger API call / navigation to parsing workflow
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950 font-sans relative overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center relative z-10 flex-1 flex flex-col justify-center">
        <Badge icon={<Sparkles className="w-3.5 h-3.5" />} className="mb-6 mx-auto">
          Your AI Career Assistant for the UAE Job Market
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100 mb-6 leading-tight">
          Land your dream role in the UAE <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            on autopilot.
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Match with top UAE employers, tailor your CV for local ATS parsers, and auto-apply in minutes — zero manual hassle.
        </p>

        <ResumeUploader onUploadSubmit={handleResumeUpload} />

        <FeatureBadges />
      </main>

      <Footer />
    </div>
  );
}