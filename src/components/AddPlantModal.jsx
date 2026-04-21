import React, { useState } from 'react';
import { X } from 'lucide-react';

const PLANT_TYPES = [
  { id: 'pata-de-elefante', label: 'Pata de elefante', emoji: '🌴' },
];

const AddPlantModal = ({ onAdd, onClose }) => {
  const [name, setName] = useState('');
  const [selectedType, setSelectedType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && selectedType) {
      onAdd({ name: name.trim(), type: selectedType });
      onClose();
    }
  };

  const isValid = name.trim() && selectedType;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl p-8 w-full max-w-sm shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Nueva planta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block text-sm text-gray-500 mb-2">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Mi Pothos, Cactus de la sala..."
            autoFocus
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#627C44] mb-6"
          />

          <label className="block text-sm text-gray-500 mb-3">Tipo de planta</label>
          <div className="max-h-48 overflow-y-auto flex flex-col gap-2 mb-6 pr-1">
            {PLANT_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left ${
                  selectedType?.id === type.id
                    ? 'bg-[#E8F1DE] border-[#627C44] text-[#4D6434]'
                    : 'bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-xl">{type.emoji}</span>
                <span className="font-medium text-sm">{type.label}</span>
                {selectedType?.id === type.id && (
                  <span className="ml-auto text-[#627C44]">✓</span>
                )}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full bg-[#4D6434] hover:bg-[#3E512A] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-2xl font-bold transition-colors"
          >
            Agregar planta
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlantModal;