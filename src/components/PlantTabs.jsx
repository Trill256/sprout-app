import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, Trash2 } from 'lucide-react';

const PlantTabs = ({ plants, activeTab, onSelect, onDelete }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!plants || plants.length === 0) return null;

  return (
    <div className="flex gap-3 mb-12 flex-wrap" ref={menuRef}>
      {plants.map((plant) => (
        <div key={plant.name} className="relative">
          <div
            className={`flex items-center gap-1 pl-5 pr-2 py-2 rounded-full border transition-all ${
              activeTab?.name === plant.name
                ? 'bg-[#E8F1DE] border-[#627C44] text-[#4D6434]'
                : 'bg-white border-gray-200 text-gray-500'
            }`}
          >
            <button
              onClick={() => onSelect(plant)}
              className="font-medium text-sm"
            >
              {plant.name}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenMenu(openMenu === plant.name ? null : plant.name);
              }}
              className="ml-1 p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors"
            >
              <MoreHorizontal size={14} />
            </button>
          </div>

          {openMenu === plant.name && (
            <div className="absolute top-full mt-1 left-0 bg-white border border-gray-100 rounded-xl shadow-lg z-10 min-w-max">
              <button
                onClick={() => {
                  onDelete(plant);
                  setOpenMenu(null);
                }}
                className="flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 rounded-xl w-full text-left transition-colors"
              >
                <Trash2 size={14} />
                Eliminar planta
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlantTabs;