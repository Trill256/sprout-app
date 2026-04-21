import React from 'react';
import { Lock, Plus } from 'lucide-react';

const premiumFeatures = [
  "Historial de datos",
  "Temperatura y luz",
  "Análisis con IA"
];

const Sidebar = ({ onAddPlant }) => {
  return (
    <div className="w-full md:w-80 border-l border-gray-100 p-8 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-6">Notificaciones</h3>
        <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center text-gray-400">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5" className="mb-3">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <p className="text-sm">No hay notificaciones aún</p>
          <p className="text-xs mt-1 text-gray-300">Aparecerán cuando conectes una maceta</p>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mt-10 mb-6">Funciones premium</h3>
        <div className="space-y-3">
          {premiumFeatures.map((feat, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl flex justify-between items-center opacity-60">
              <span className="text-sm text-gray-500">{feat}</span>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Lock size={12} />
                <span className="font-bold">Pro</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onAddPlant}
        className="w-full bg-[#4D6434] hover:bg-[#3E512A] text-white py-4 rounded-2xl mt-12 flex items-center justify-center gap-2 font-bold transition-colors"
      >
        <Plus size={20} /> Agregar planta
      </button>
    </div>
  );
};

export default Sidebar;