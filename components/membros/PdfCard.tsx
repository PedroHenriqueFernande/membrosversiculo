'use client';

import { BookOpen, Lock } from 'lucide-react';
import { useState } from 'react';

interface PdfCardProps {
  title: string;
  subtitle: string;
  isLocked?: boolean;
  pdfUrl?: string;
  onAccess: () => void;
}

export function PdfCard({ title, subtitle, isLocked = false, pdfUrl, onAccess }: PdfCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-gradient-to-br from-zinc-900 to-black border rounded-xl overflow-hidden transition-all duration-500 ${
        isLocked
          ? 'border-zinc-800/50 opacity-60'
          : 'border-amber-900/40 hover:border-amber-600/60 hover:shadow-2xl hover:shadow-amber-900/20 hover:-translate-y-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent transition-opacity duration-500 ${
        isHovered && !isLocked ? 'opacity-100' : 'opacity-0'
      }`} />

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${
            isLocked
              ? 'bg-zinc-800/50'
              : 'bg-gradient-to-br from-amber-900/40 to-amber-950/40 border border-amber-800/30'
          }`}>
            {isLocked ? (
              <Lock className="w-6 h-6 text-zinc-500" />
            ) : (
              <BookOpen className="w-6 h-6 text-amber-400" />
            )}
          </div>
        </div>

        <h3 className={`text-lg font-bold mb-2 ${
          isLocked ? 'text-zinc-400' : 'text-amber-100'
        }`}>
          {title}
        </h3>

        <p className={`text-sm mb-6 ${
          isLocked ? 'text-zinc-600' : 'text-amber-200/60'
        }`}>
          {subtitle}
        </p>

        <button
          onClick={onAccess}
          disabled={isLocked}
          className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
            isLocked
              ? 'bg-zinc-800/50 text-zinc-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black shadow-lg shadow-amber-900/30 hover:shadow-amber-800/50'
          }`}
        >
          {isLocked ? (
            <span className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Bloqueado
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <BookOpen className="w-4 h-4" />
              Ler agora
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
