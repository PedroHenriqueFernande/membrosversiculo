'use client';

import { BookOpen, User } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-amber-900/30 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg">
              <BookOpen className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                Los Cuatro Libros del Evangelio
              </h1>
              <p className="text-xs text-amber-200/60">Edición Especial</p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-amber-950/30 border border-amber-800/30 rounded-lg">
            <User className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-100">Mi Cuenta</span>
          </div>
        </div>
      </div>
    </header>
  );
}
