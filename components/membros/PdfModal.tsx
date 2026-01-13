'use client';

import { X, Download, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export function PdfModal({ isOpen, onClose, title, pdfUrl }: PdfModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-6xl h-[90vh] bg-gradient-to-br from-zinc-900 to-black border border-amber-900/40 rounded-2xl shadow-2xl shadow-amber-900/20 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-amber-900/30 bg-black/50">
          <div>
            <h3 className="text-xl font-bold text-amber-100">{title}</h3>
            <p className="text-sm text-amber-200/60 mt-1">Edición Especial</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download
              className="p-2 bg-amber-900/30 hover:bg-amber-900/50 border border-amber-800/30 hover:border-amber-700/50 rounded-lg transition-all"
              title="Descargar PDF"
            >
              <Download className="w-5 h-5 text-amber-400" />
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-amber-900/30 hover:bg-amber-900/50 border border-amber-800/30 hover:border-amber-700/50 rounded-lg transition-all"
              title="Abrir en nueva pestaña"
            >
              <ExternalLink className="w-5 h-5 text-amber-400" />
            </a>

            <button
              onClick={onClose}
              className="p-2 bg-amber-900/30 hover:bg-amber-900/50 border border-amber-800/30 hover:border-amber-700/50 rounded-lg transition-all"
            >
              <X className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden bg-zinc-950">
          <iframe
            src={`${pdfUrl}#toolbar=1`}
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
