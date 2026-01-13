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
      pdfUrl: 'https://example.com/mateo.pdf'
    },
    {
      id: 'marcos',
      title: 'Evangelio de Marcos',
      subtitle: 'El Evangelio del Siervo - La acción dinámica y el servicio del Hijo de Dios.',
      isLocked: false,
      pdfUrl: 'https://example.com/marcos.pdf'
    },
    {
      id: 'lucas',
      title: 'Evangelio de Lucas',
      subtitle: 'El Evangelio del Hijo del Hombre - La humanidad perfecta y compasión de Cristo.',
      isLocked: false,
      pdfUrl: 'https://example.com/lucas.pdf'
    },
    {
      id: 'juan',
      title: 'Evangelio de Juan',
      subtitle: 'El Evangelio del Hijo de Dios - La revelación profunda de la deidad de Cristo.',
      isLocked: false,
      pdfUrl: 'https://example.com/juan.pdf'
    }
  ];

  const bonusData: { [key: string]: Pdf } = {
    bonus1: {
      id: 'bonus1',
      title: 'Comunicación Eficaz en el Púlpito',
      subtitle: 'Técnicas profesionales para comunicar el mensaje con claridad, pasión y efectividad.',
      isLocked: false,
      pdfUrl: 'https://example.com/bonus1.pdf'
    },
    bonus2: {
      id: 'bonus2',
      title: 'Desarrollo Espiritual del Predicador',
      subtitle: 'Fundamentos esenciales para el crecimiento espiritual y vida devocional del predicador.',
      isLocked: false,
      pdfUrl: 'https://example.com/bonus2.pdf'
    },
    bonus3: {
      id: 'bonus3',
      title: 'Exégesis y Hermenéutica Bíblica',
      subtitle: 'Métodos científicos para la interpretación correcta de las Sagradas Escrituras.',
      isLocked: false,
      pdfUrl: 'https://example.com/bonus3.pdf'
    },
    bonus4: {
      id: 'bonus4',
      title: 'Historia de la Predicación Cristiana',
      subtitle: 'Un recorrido por los grandes predicadores y sus contribuciones a través de los siglos.',
      isLocked: false,
      pdfUrl: 'https://example.com/bonus4.pdf'
    },
    bonus5: {
      id: 'bonus5',
      title: 'Predicación Expositiva',
      subtitle: 'El arte de exponer fielmente la Palabra de Dios versículo por versículo.',
      isLocked: false,
      pdfUrl: 'https://example.com/bonus5.pdf'
    },
    bonus6: {
      id: 'bonus6',
      title: 'Oratoria y Voz en la Predicación',
      subtitle: 'Entrenamiento vocal y técnicas de oratoria para potenciar tu mensaje.',
      isLocked: false,
      pdfUrl: 'https://example.com/bonus6.pdf'
    },
    bonus7: {
      id: 'bonus7',
      title: 'Preparación del Sermón Paso a Paso',
      subtitle: 'Metodología práctica para estructurar sermones poderosos y transformadores.',
      isLocked: false,
      pdfUrl: 'https://example.com/bonus7.pdf'
    }
  };

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

        <div className="h-px bg-gradient-to-r from-transparent via-amber-900/30 to-transparent mb-16" />

        <ModuleSection
          title="BONO #01 — Comunicación Eficaz en el Púlpito"
          badge="Bonus Exclusivo"
          columns={1}
        >
          <PdfCard
            title={bonusData.bonus1.title}
            subtitle={bonusData.bonus1.subtitle}
            isLocked={bonusData.bonus1.isLocked}
            pdfUrl={bonusData.bonus1.pdfUrl}
            onAccess={() => handleAccessPdf(bonusData.bonus1)}
          />
        </ModuleSection>

        <ModuleSection
          title="BONO #02 — Desarrollo Espiritual del Predicador"
          badge="Bonus Exclusivo"
          columns={1}
        >
          <PdfCard
            title={bonusData.bonus2.title}
            subtitle={bonusData.bonus2.subtitle}
            isLocked={bonusData.bonus2.isLocked}
            pdfUrl={bonusData.bonus2.pdfUrl}
            onAccess={() => handleAccessPdf(bonusData.bonus2)}
          />
        </ModuleSection>

        <ModuleSection
          title="BONO #03 — Exégesis y Hermenéutica Bíblica"
          badge="Bonus Exclusivo"
          columns={1}
        >
          <PdfCard
            title={bonusData.bonus3.title}
            subtitle={bonusData.bonus3.subtitle}
            isLocked={bonusData.bonus3.isLocked}
            pdfUrl={bonusData.bonus3.pdfUrl}
            onAccess={() => handleAccessPdf(bonusData.bonus3)}
          />
        </ModuleSection>

        <ModuleSection
          title="BONO #04 — Historia de la Predicación Cristiana"
          badge="Bonus Exclusivo"
          columns={1}
        >
          <PdfCard
            title={bonusData.bonus4.title}
            subtitle={bonusData.bonus4.subtitle}
            isLocked={bonusData.bonus4.isLocked}
            pdfUrl={bonusData.bonus4.pdfUrl}
            onAccess={() => handleAccessPdf(bonusData.bonus4)}
          />
        </ModuleSection>

        <ModuleSection
          title="BONO #05 — Predicación Expositiva"
          badge="Bonus Exclusivo"
          columns={1}
        >
          <PdfCard
            title={bonusData.bonus5.title}
            subtitle={bonusData.bonus5.subtitle}
            isLocked={bonusData.bonus5.isLocked}
            pdfUrl={bonusData.bonus5.pdfUrl}
            onAccess={() => handleAccessPdf(bonusData.bonus5)}
          />
        </ModuleSection>

        <ModuleSection
          title="BONO #06 — Oratoria y Voz en la Predicación"
          badge="Bonus Exclusivo"
          columns={1}
        >
          <PdfCard
            title={bonusData.bonus6.title}
            subtitle={bonusData.bonus6.subtitle}
            isLocked={bonusData.bonus6.isLocked}
            pdfUrl={bonusData.bonus6.pdfUrl}
            onAccess={() => handleAccessPdf(bonusData.bonus6)}
          />
        </ModuleSection>

        <ModuleSection
          title="BONO #07 — Preparación del Sermón Paso a Paso"
          badge="Bonus Exclusivo"
          columns={1}
        >
          <PdfCard
            title={bonusData.bonus7.title}
            subtitle={bonusData.bonus7.subtitle}
            isLocked={bonusData.bonus7.isLocked}
            pdfUrl={bonusData.bonus7.pdfUrl}
            onAccess={() => handleAccessPdf(bonusData.bonus7)}
          />
        </ModuleSection>

        <div className="mt-20 p-8 bg-gradient-to-br from-amber-950/20 to-zinc-900/20 border border-amber-900/30 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-amber-100 mb-3">
            ¿Necesitas Ayuda?
          </h3>
          <p className="text-amber-200/70 mb-6">
            Si tienes alguna dificultad para acceder a los recursos, contáctanos.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black font-medium rounded-lg transition-all shadow-lg shadow-amber-900/30">
            Soporte Técnico
          </button>
        </div>
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
