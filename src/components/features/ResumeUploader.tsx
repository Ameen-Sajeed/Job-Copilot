'use client';

import React, { useState } from 'react';
import { Upload, ArrowRight, CheckCircle, FileText } from 'lucide-react';

interface ResumeUploaderProps {
  onUploadSubmit?: (file: File) => void;
}

export const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUploadSubmit }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (file && onUploadSubmit) {
      onUploadSubmit(file);
    }
  };

  return (
    <div className="max-w-lg mx-auto w-full">
      <div 
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`relative group rounded-2xl border transition-all duration-300 p-8 bg-slate-900/50 backdrop-blur-md ${
          isDragging 
            ? 'border-emerald-400 bg-emerald-500/5 shadow-lg shadow-emerald-500/10' 
            : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
        }`}
      >
        <input 
          type="file" 
          accept=".pdf,.docx,.doc" 
          onChange={handleFileChange} 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
        />

        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300">
            {file ? <FileText className="w-6 h-6 text-emerald-400" /> : <Upload className="w-6 h-6" />}
          </div>

          <div>
            {file ? (
              <div className="text-sm font-medium text-emerald-300 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" /> {file.name}
              </div>
            ) : (
              <>
                <p className="text-sm font-medium text-slate-200">
                  Drop your CV here or <span className="text-emerald-400 underline underline-offset-4">browse files</span>
                </p>
                <p className="text-xs text-slate-500 mt-1">Supports PDF or DOCX (Up to 10MB)</p>
              </>
            )}
          </div>
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        disabled={!file}
        className={`w-full mt-4 py-3.5 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
          file 
            ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 cursor-pointer' 
            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
        }`}
      >
        Start UAE Job Match
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};