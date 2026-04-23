import React from 'react';

const HumidityBar = ({ value = null, happyRange = null }) => {
  const hasData = value !== null;
  const min = happyRange?.min ?? 60;
  const max = happyRange?.max ?? 80;

  const getColor = (v) => {
    if (v >= min && v <= max) return 'bg-[#8CA454]';
    if (v < min) return v < min - 20 ? 'bg-red-400' : 'bg-amber-400';
    return 'bg-blue-400';
  };

  return (
    <div className="mb-16">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-gray-400 font-medium">Humedad del suelo</h3>
        {hasData ? (
          <span className="text-2xl font-bold text-[#4D6434]">{value}%</span>
        ) : (
          <span className="text-2xl font-bold text-gray-300">Sin datos</span>
        )}
      </div>
      <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
        {/* Zona feliz */}
        {happyRange && (
          <div
            className="absolute top-0 h-full bg-green-100 rounded-full"
            style={{ left: `${min}%`, width: `${max - min}%` }}
          />
        )}
        {/* Barra de humedad actual */}
        <div
          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${
            hasData ? getColor(value) : 'bg-gray-200'
          }`}
          style={{ width: hasData ? `${value}%` : '0%' }}
        />
      </div>
      <div className="flex justify-between text-xs font-medium">
        <span className="text-gray-300">Seco 0%</span>
        <span className={hasData ? 'text-[#627C44]' : 'text-gray-300'}>
          Óptimo {min}–{max}%
        </span>
        <span className="text-gray-300">Saturado 100%</span>
      </div>
    </div>
  );
};

export default HumidityBar;