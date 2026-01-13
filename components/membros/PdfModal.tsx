'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export function PdfModal({ isOpen, onClose, title, pdfUrl }: PdfModalProps) {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState(800);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pageWrapperRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (!isOpen) return;
    setPageNumber(1);
    setNumPages(null);
  }, [isOpen, pdfUrl]);

  useEffect(() => {
    if (!isOpen) return;
    const element = pageWrapperRef.current ?? containerRef.current;
    if (!element) return;

    const updateWidth = () => {
      const nextWidth = Math.min(element.clientWidth, 960);
      setPageWidth(nextWidth || 800);
    };

    updateWidth();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }

    const observer = new ResizeObserver(() => updateWidth());
    observer.observe(element);
    return () => observer.disconnect();
  }, [isOpen]);

  if (!isOpen) return null;

  const canGoBack = pageNumber > 1;
  const canGoForward = numPages ? pageNumber < numPages : false;
  const pdfSource = encodeURI(pdfUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-6xl h-[90vh] bg-gradient-to-br from-zinc-900 to-black border border-amber-900/40 rounded-2xl shadow-2xl shadow-amber-900/20 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between gap-4 p-6 border-b border-amber-900/30 bg-black/50">
          <div>
            <h3 className="text-xl font-bold text-amber-100">{title}</h3>
            <p className="text-sm text-amber-200/60 mt-1">Edicion Especial</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-amber-950/30 border border-amber-800/30 rounded-lg px-3 py-2 text-amber-200/80 text-sm">
              <button
                type="button"
                onClick={() => setPageNumber((page) => Math.max(1, page - 1))}
                disabled={!canGoBack}
                className="p-1 rounded-md hover:bg-amber-900/40 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Pagina anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span>
                Pagina {pageNumber}{numPages ? ` de ${numPages}` : ''}
              </span>
              <button
                type="button"
                onClick={() => setPageNumber((page) => (numPages ? Math.min(numPages, page + 1) : page + 1))}
                disabled={!canGoForward}
                className="p-1 rounded-md hover:bg-amber-900/40 disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Proxima pagina"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-amber-900/30 hover:bg-amber-900/50 border border-amber-800/30 hover:border-amber-700/50 rounded-lg transition-all"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-amber-400" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="flex-1 overflow-auto bg-zinc-950 p-6">
          <div className="flex items-start justify-center">
            <div ref={pageWrapperRef} className="w-full max-w-4xl">
              <Document
                file={pdfSource}
                onLoadSuccess={({ numPages: loadedPages }) => {
                  setNumPages(loadedPages);
                  setPageNumber(1);
                }}
                loading={<div className="text-amber-200/70 text-center">Carregando PDF...</div>}
                error={<div className="text-amber-200/70 text-center">Nao foi possivel carregar o PDF.</div>}
              >
                <Page
                  pageNumber={pageNumber}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="mx-auto shadow-2xl shadow-black/40"
                />
              </Document>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
