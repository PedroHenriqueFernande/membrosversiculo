'use client';

import { useState } from 'react';
import { Header } from '@/components/membros/Header';
import { Breadcrumb } from '@/components/membros/Breadcrumb';
import { ModuleSection } from '@/components/membros/ModuleSection';
import { PdfCard } from '@/components/membros/PdfCard';
import { PdfModal } from '@/components/membros/PdfModal';

interface Pdf {
  id: string;
  title: string;
  subtitle: string;
  isLocked: boolean;
  pdfUrl: string;
}

export default function MembrosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<Pdf | null>(null);

  const evangeliosData: Pdf[] = [
    {
      id: 'mateo',
      title: 'Evangelio de Mateo',
      subtitle: 'El Evangelio del Rey - Una perspectiva completa del ministerio de Jesús como el Mesías prometido.',
      isLocked: false,
      pdfUrl: '/el-evangelio-segun-san-mateo.pdf'
    },
    {
      id: 'marcos',
      title: 'Evangelio de Marcos',
      subtitle: 'El Evangelio del Siervo - La acción dinámica y el servicio del Hijo de Dios.',
      isLocked: false,
      pdfUrl: '/El_evangelio_de_Marcos_y_su_exegesis.pdf'
    },
    {
      id: 'lucas',
      title: 'Evangelio de Lucas',
      subtitle: 'El Evangelio del Hijo del Hombre - La humanidad perfecta y compasión de Cristo.',
      isLocked: false,
      pdfUrl: '/El%20Evangelio%20de%20Lucas.pdf'
    },
    {
      id: 'juan',
      title: 'Evangelio de Juan',
      subtitle: 'El Evangelio del Hijo de Dios - La revelación profunda de la deidad de Cristo.',
      isLocked: false,
      pdfUrl: '/evangelio-de-juan.pdf'
    }
  ];


  const handleAccessPdf = (pdf: Pdf) => {
    if (!pdf.isLocked) {
      setSelectedPdf(pdf);
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-black to-black pointer-events-none" />

      <Header />

      <main className="relative container mx-auto px-4 py-12">
        <Breadcrumb />

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-amber-900/20 to-amber-950/10 border border-amber-800/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm text-amber-300 font-medium">Área Exclusiva</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Área de Membros
            </span>
          </h1>
          <p className="text-lg text-amber-100/70 max-w-3xl">
            Bienvenido a tu biblioteca exclusiva. Accede a todos los recursos premium diseñados para profundizar tu conocimiento de los Evangelios y potenciar tu ministerio.
          </p>
        </div>

        <ModuleSection
          title="Los Cuatro Libros del Evangelio"
          badge="Módulo Principal"
          description="Los cuatro testimonios inspirados del ministerio terrenal de Jesucristo."
          columns={2}
        >
          {evangeliosData.map((pdf) => (
            <PdfCard
              key={pdf.id}
              title={pdf.title}
              subtitle={pdf.subtitle}
              isLocked={pdf.isLocked}
              pdfUrl={pdf.pdfUrl}
              onAccess={() => handleAccessPdf(pdf)}
            />
          ))}
        </ModuleSection>

      </main>

      {selectedPdf && (
        <PdfModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedPdf.title}
          pdfUrl={selectedPdf.pdfUrl}
        />
      )}
    </div>
  );
}

