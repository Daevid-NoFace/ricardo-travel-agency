import { useState } from 'react';
import type { Experience } from '../data/experiences';

interface Props {
  experience: Experience;
}

export default function DownloadPDFButton({ experience }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Importación dinámica de jsPDF
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (2 * margin);
      let yPosition = margin;

      // Colores del tema
      const coralColor: [number, number, number] = [255, 107, 107];
      const caribbeanBlue: [number, number, number] = [0, 180, 216];
      const oceanBlue: [number, number, number] = [0, 119, 182];
      const tropicalGreen: [number, number, number] = [37, 211, 102];

      // Función auxiliar para agregar texto con salto de línea
      const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 12) => {
        doc.setFontSize(fontSize);
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y);
        return y + (lines.length * fontSize * 0.5);
      };

      // Header con gradiente simulado
      doc.setFillColor(...caribbeanBlue);
      doc.rect(0, 0, pageWidth, 50, 'F');
      
      // Título
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text(experience.title, pageWidth / 2, 25, { align: 'center' });
      
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('Ricardo Vibes - Experiencias Auténticas en Cuba', pageWidth / 2, 38, { align: 'center' });

      yPosition = 60;

      // Información rápida en cajas
      doc.setTextColor(0, 0, 0);
      
      // Caja 1 - Duración
      doc.setFillColor(240, 240, 240);
      doc.roundedRect(margin, yPosition, (contentWidth / 3) - 5, 25, 3, 3, 'F');
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text('DURACIÓN', margin + 5, yPosition + 8);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(experience.duration, margin + 5, yPosition + 18);
      
      // Caja 2 - Dificultad
      doc.setFont('helvetica', 'normal');
      doc.setFillColor(240, 240, 240);
      doc.roundedRect(margin + (contentWidth / 3), yPosition, (contentWidth / 3) - 5, 25, 3, 3, 'F');
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text('DIFICULTAD', margin + (contentWidth / 3) + 5, yPosition + 8);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(experience.difficulty, margin + (contentWidth / 3) + 5, yPosition + 18);
      
      // Caja 3 - Precio
      doc.setFont('helvetica', 'normal');
      doc.setFillColor(240, 240, 240);
      doc.roundedRect(margin + (2 * contentWidth / 3), yPosition, (contentWidth / 3), 25, 3, 3, 'F');
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text('PRECIO', margin + (2 * contentWidth / 3) + 5, yPosition + 8);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(experience.price, margin + (2 * contentWidth / 3) + 5, yPosition + 18);

      yPosition += 35;

      // Descripción
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(60, 60, 60);
      yPosition = addWrappedText(experience.description, margin, yPosition, contentWidth, 12);
      yPosition += 10;

      // Lo más destacado
      doc.setFillColor(...coralColor);
      doc.rect(margin, yPosition, 60, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('LO MÁS DESTACADO', margin + 2, yPosition + 6);
      yPosition += 15;

      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      
      experience.highlights.forEach((highlight, index) => {
        if (yPosition > pageHeight - 40) {
          doc.addPage();
          yPosition = margin;
        }
        
        // Bullet point
        doc.setFillColor(...tropicalGreen);
        doc.circle(margin + 2, yPosition - 1, 1.5, 'F');
        
        const lines = doc.splitTextToSize(highlight, contentWidth - 10);
        doc.text(lines, margin + 8, yPosition);
        yPosition += lines.length * 6;
      });

      yPosition += 10;

      // Incluido
      if (yPosition > pageHeight - 60) {
        doc.addPage();
        yPosition = margin;
      }

      doc.setFillColor(...caribbeanBlue);
      doc.rect(margin, yPosition, 40, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('INCLUIDO', margin + 2, yPosition + 6);
      yPosition += 15;

      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(11);
      
      experience.included.forEach((item) => {
        if (yPosition > pageHeight - 40) {
          doc.addPage();
          yPosition = margin;
        }
        
        doc.setFillColor(...tropicalGreen);
        doc.circle(margin + 2, yPosition - 1, 1.5, 'F');
        
        const lines = doc.splitTextToSize(item, contentWidth - 10);
        doc.text(lines, margin + 8, yPosition);
        yPosition += lines.length * 6;
      });

      yPosition += 10;

      // Itinerario
      if (yPosition > pageHeight - 60) {
        doc.addPage();
        yPosition = margin;
      }

      doc.setFillColor(...oceanBlue);
      doc.rect(margin, yPosition, 70, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('ITINERARIO DETALLADO', margin + 2, yPosition + 6);
      yPosition += 15;

      experience.itinerary.forEach((item, index) => {
        if (yPosition > pageHeight - 60) {
          doc.addPage();
          yPosition = margin;
        }

        // Número del día en círculo
        doc.setFillColor(...caribbeanBlue);
        doc.circle(margin + 5, yPosition + 3, 5, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text((index + 1).toString(), margin + 5, yPosition + 5, { align: 'center' });

        // Día
        doc.setTextColor(...coralColor);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'bold');
        doc.text(item.day.toUpperCase(), margin + 15, yPosition + 5);

        yPosition += 8;

        // Título
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        yPosition = addWrappedText(item.title, margin + 15, yPosition, contentWidth - 15, 12);

        yPosition += 2;

        // Descripción
        doc.setTextColor(60, 60, 60);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        yPosition = addWrappedText(item.description, margin + 15, yPosition, contentWidth - 15, 10);

        yPosition += 10;
      });

      // Footer en la última página
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFillColor(...caribbeanBlue);
        doc.rect(0, pageHeight - 15, pageWidth, 15, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.text('Ricardo Vibes | WhatsApp: +53 5555 5555 | Email: ricardo@ricardovibes.com', pageWidth / 2, pageHeight - 7, { align: 'center' });
        doc.setFontSize(8);
        doc.text(`Página ${i} de ${totalPages}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
      }

      // Guardar PDF
      const fileName = `${experience.slug}-ricardo-vibes.pdf`;
      doc.save(fileName);
      
    } catch (error) {
      console.error('Error generando PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, intenta de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-coral to-sunset-orange text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
    >
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Contenido del botón */}
      <div className="relative flex items-center gap-3">
        {isGenerating ? (
          <>
            <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Generando PDF...</span>
          </>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Descargar itinerario PDF</span>
          </>
        )}
      </div>
      
      {/* Decoración de esquina */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
    </button>
  );
}
