import React, { useState } from 'react';
import { PLANT_TYPES } from '../plantTypes';

const AddPlantModal = ({ onAdd, onClose }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState(Object.keys(PLANT_TYPES)[0]);

  const handleSubmit = () => {
    if (!name.trim()) return;
    onAdd({ name: name.trim(), type });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-700">Nueva planta</h2>

        <input
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
          placeholder="Nombre de tu planta"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">Tipo de planta</label>
          <div className="grid grid-cols-1 gap-2">
            {Object.entries(PLANT_TYPES).map(([typeName, { emoji, min, max }]) => (
              <button
                key={typeName}
                onClick={() => setType(typeName)}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border text-sm transition-all ${
                  type === typeName
                    ? 'border-green-400 bg-green-50 text-green-700 font-medium'
                    : 'border-gray-100 text-gray-500 hover:border-gray-300'
                }`}
              >
                <span className="text-xl">{emoji}</span>
                <span className="flex-1 text-left">{typeName}</span>
                <span className="text-xs text-gray-400">{min}–{max}%</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 py-2 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlantModal;