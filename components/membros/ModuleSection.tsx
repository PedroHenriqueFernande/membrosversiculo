'use client';

import { ReactNode } from 'react';

interface ModuleSectionProps {
  title: string;
  badge?: string;
  description?: string;
  children: ReactNode;
  columns?: 1 | 2 | 3;
}

export function ModuleSection({ title, badge, description, children, columns = 3 }: ModuleSectionProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <section className="mb-16">
      <div className="mb-8">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 bg-amber-950/30 border border-amber-800/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-medium text-amber-300 uppercase tracking-wider">{badge}</span>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
          {title}
        </h2>
        {description && (
          <p className="text-amber-100/70 text-lg">{description}</p>
        )}
        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent rounded-full mt-4" />
      </div>

      <div className={`grid ${gridCols[columns]} gap-6`}>
        {children}
      </div>
    </section>
  );
}
