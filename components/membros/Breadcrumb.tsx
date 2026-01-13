'use client';

import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-sm mb-8">
      <a href="/" className="flex items-center gap-1 text-amber-200/60 hover:text-amber-300 transition-colors">
        <Home className="w-4 h-4" />
        <span>Inicio</span>
      </a>
      <ChevronRight className="w-4 h-4 text-amber-800" />
      <span className="text-amber-400 font-medium">Área de Membros</span>
    </nav>
  );
}
