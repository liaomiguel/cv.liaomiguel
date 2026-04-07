import React from 'react';
import { Printer } from './Icons';

export const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300 group"
      title="Generar CV en 1 solo A4 (PDF)"
    >
      <Printer className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="font-bold tracking-wide">IMPRIMIR A4</span>
    </button>
  );
};