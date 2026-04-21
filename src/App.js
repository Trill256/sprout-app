import React, { useState } from 'react';
import { Home, Lock, Plus } from 'lucide-react';

const SproutApp = () => {
  const [plants, setPlants] = useState(['Pothos', 'Suculenta', 'Helecho']);
  const [activeTab, setActiveTab] = useState('Pothos');

  const premiumFeatures = [
    "Historial de datos",
    "Temperatura y luz",
    "Análisis con IA"
  ];

  const handleAddPlant = () => {
    const name = prompt('Nombre de la nueva planta:');
    if (name && name.trim()) {
      setPlants([...plants, name.trim()]);
      setActiveTab(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] p-4 md:p-8 font-sans text-gray-700">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">

        {/* Main Content Area */}
        <div className="flex-1 p-8">

          {/* Header */}
          <header className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#E8F1DE] rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B6D11" strokeWidth="2">
                  <path d="M12 22V12"/>
                  <path d="M12 12C12 12 8 9 8 6a4 4 0 0 1 8 0c0 3-4 6-4 6z"/>
                  <path d="M12 12C12 12 16 9.5 17 7"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Sprout</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                <button className="p-2 bg-white shadow-sm rounded-lg text-[#627C44]">
                  <Home size={20} />
                </button>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-gray-500 text-sm hidden sm:block">Santiago Pérez</span>
                <div className="w-10 h-10 bg-[#4D6434] text-white rounded-full flex items-center justify-center font-bold text-sm">SP</div>
              </div>
            </div>
          </header>

          {/* Plant Tabs */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {plants.map(plant => (
              <button
                key={plant}
                onClick={() => setActiveTab(plant)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  activeTab === plant
                    ? 'bg-[#E8F1DE] border-[#627C44] text-[#4D6434] font-medium'
                    : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                {plant}
              </button>
            ))}
            <button
              onClick={handleAddPlant}
              className="px-6 py-2 rounded-full border border-dashed border-gray-300 text-gray-400 flex items-center gap-2 hover:bg-gray-50 transition-all"
            >
              <Plus size={16} /> Añadir
            </button>
          </div>

          {/* Humidity Section */}
          <div className="mb-16">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-gray-400 font-medium">Humedad del suelo</h3>
              <span className="text-2xl font-bold text-gray-300">Sin datos</span>
            </div>
            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div className="absolute left-0 top-0 h-full bg-gray-200 rounded-full w-0"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-300 font-medium">
              <span>Seco 0%</span>
              <span>Óptimo 60–80%</span>
              <span>Saturado 100%</span>
            </div>
          </div>

          {/* Plant Visual Status — Standby */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center mb-6">
              <svg width="80" height="80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="54" fill="#F5F5F3" stroke="#D1D5DB" strokeWidth="2"/>
                <ellipse cx="43" cy="52" rx="6" ry="6" fill="#D1D5DB"/>
                <ellipse cx="77" cy="52" rx="6" ry="6" fill="#D1D5DB"/>
                <line x1="42" y1="76" x2="78" y2="76" stroke="#D1D5DB" strokeWidth="3.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">{activeTab}</h2>
            <p className="text-gray-400 text-sm mb-6">Sin maceta conectada</p>
            <div className="bg-gray-100 px-8 py-3 rounded-full text-gray-400 font-medium">
              En espera de conexión...
            </div>
          </div>
        </div>

        {/* Sidebar */}
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
            onClick={handleAddPlant}
            className="w-full bg-[#4D6434] hover:bg-[#3E512A] text-white py-4 rounded-2xl mt-12 flex items-center justify-center gap-2 font-bold transition-colors"
          >
            <Plus size={20} /> Agregar planta
          </button>
        </div>
      </div>
    </div>
  );
};

export default SproutApp;