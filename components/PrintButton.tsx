import React from 'react';
import { Printer } from './Icons';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold border border-amber-400 hover:scale-105 transition-all duration-200 shadow-lg shadow-amber-500/20 print-hidden flex items-center gap-2 text-xs"
      title="Exportar PDF o Imprimir en A4"
      aria-label="Exportar PDF"
    >
      <Printer className="w-4 h-4 text-slate-950" />
      <span className="hidden sm:inline">Exportar PDF</span>
    </button>
  );
};