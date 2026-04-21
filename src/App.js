import React, { useState } from 'react';
import { Home, LayoutGrid, Menu, Lock, Plus, User } from 'lucide-react';

const SproutApp = () => {
  const [activeTab, setActiveTab] = useState('Pothos');

  const plants = ['Pothos', 'Suculenta', 'Helecho'];
  
  const notifications = [
    { title: "Pothos en condiciones óptimas", time: "Hace 1 hora", color: "bg-green-500", bg: "bg-green-50" },
    { title: "Suculenta necesita agua pronto", time: "Hace 20 min", color: "bg-amber-600", bg: "bg-amber-50" },
    { title: "Helecho: humedad muy baja", time: "Hace 3 horas", color: "bg-red-400", bg: "bg-red-50" }
  ];

  const premiumFeatures = [
    "Historial de datos",
    "Temperatura y luz",
    "Análisis con IA"
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFB] p-4 md:p-8 font-sans text-gray-700">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#E8F1DE] rounded-xl flex items-center justify-center text-[#627C44]">
                <Plus size={24} className="rotate-45" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Sprout</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
                <button className="p-2 bg-white shadow-sm rounded-lg text-[#627C44]"><Home size={20} /></button>
                <button className="p-2 text-gray-400 hover:text-gray-600"><LayoutGrid size={20} /></button>
                <button className="p-2 text-gray-400 hover:text-gray-600"><Menu size={20} /></button>
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
            <button className="px-6 py-2 rounded-full border border-dashed border-gray-300 text-gray-400 flex items-center gap-2">
              <Plus size={16} /> Añadir
            </button>
          </div>

          {/* Data Section */}
          <div className="mb-16">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-gray-400 font-medium">Humedad del suelo</h3>
              <span className="text-5xl font-bold text-[#4D6434]">72%</span>
            </div>
            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div className="absolute left-0 top-0 h-full bg-[#8CA454] rounded-full" style={{ width: '72%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 font-medium">
              <span>Seco 0%</span>
              <span className="text-[#627C44]">Óptimo 60–80%</span>
              <span>Saturado 100%</span>
            </div>
          </div>

          {/* Plant Visual Status */}
          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full bg-[#E8F1DE] border-2 border-[#C1D7B0] flex items-center justify-center mb-6">
              <div className="flex flex-col items-center gap-2">
                 <div className="flex gap-6">
                    <div className="w-3 h-4 bg-[#4D6434] rounded-full"></div>
                    <div className="w-3 h-4 bg-[#4D6434] rounded-full"></div>
                 </div>
                 <div className="w-16 h-8 border-b-4 border-[#4D6434] rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">{activeTab}</h2>
            <p className="text-gray-400 text-sm mb-6">Sala de estar · Riego hace 2 días</p>
            <div className="bg-[#E8F1DE] px-8 py-3 rounded-full text-[#4D6434] font-medium">
              Muy feliz — sigue así
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80 border-l border-gray-100 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Notificaciones recientes</h3>
            <div className="space-y-3">
              {notifications.map((n, i) => (
                <div key={i} className={`${n.bg} p-4 rounded-2xl flex items-start gap-3`}>
                  <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${n.color}`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 leading-tight">{n.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                </div>
              ))}
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

          <button className="w-full bg-[#4D6434] hover:bg-[#3E512A] text-white py-4 rounded-2xl mt-12 flex items-center justify-center gap-2 font-bold transition-colors">
            <Plus size={20} /> Agregar planta
          </button>
        </div>
      </div>
    </div>
  );
};

export default SproutApp;