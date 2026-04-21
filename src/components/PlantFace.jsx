import React from 'react';

const faces = {
  standby: (
    <>
      <circle cx="60" cy="60" r="54" fill="#F5F5F3" stroke="#D1D5DB" strokeWidth="2"/>
      <ellipse cx="43" cy="52" rx="6" ry="6" fill="#D1D5DB"/>
      <ellipse cx="77" cy="52" rx="6" ry="6" fill="#D1D5DB"/>
      <line x1="42" y1="76" x2="78" y2="76" stroke="#D1D5DB" strokeWidth="3.5" strokeLinecap="round"/>
    </>
  ),
  happy: (
    <>
      <circle cx="60" cy="60" r="54" fill="#EAF3DE" stroke="#97C459" strokeWidth="2"/>
      <ellipse cx="43" cy="50" rx="7" ry="8" fill="#27500A"/>
      <ellipse cx="77" cy="50" rx="7" ry="8" fill="#27500A"/>
      <ellipse cx="45" cy="48" rx="2.5" ry="3" fill="white"/>
      <ellipse cx="79" cy="48" rx="2.5" ry="3" fill="white"/>
      <path d="M38 75 Q60 92 82 75" stroke="#27500A" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    </>
  ),
  neutral: (
    <>
      <circle cx="60" cy="60" r="54" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="2"/>
      <ellipse cx="43" cy="52" rx="7" ry="7" fill="#633806"/>
      <ellipse cx="77" cy="52" rx="7" ry="7" fill="#633806"/>
      <line x1="42" y1="76" x2="78" y2="76" stroke="#633806" strokeWidth="3.5" strokeLinecap="round"/>
    </>
  ),
  sad: (
    <>
      <circle cx="60" cy="60" r="54" fill="#FCEBEB" stroke="#E24B4A" strokeWidth="2"/>
      <ellipse cx="43" cy="52" rx="7" ry="7" fill="#501313"/>
      <ellipse cx="77" cy="52" rx="7" ry="7" fill="#501313"/>
      <path d="M38 82 Q60 68 82 82" stroke="#501313" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    </>
  ),
};

const statusMap = {
  standby: { bg: 'bg-gray-100', text: 'text-gray-400', label: 'En espera de conexión...' },
  happy:   { bg: 'bg-[#E8F1DE]', text: 'text-[#4D6434]', label: 'Muy feliz — sigue así' },
  neutral: { bg: 'bg-amber-50', text: 'text-amber-700', label: 'Necesita un poco de agua' },
  sad:     { bg: 'bg-red-50', text: 'text-red-600', label: 'Necesita agua urgente' },
};

const PlantFace = ({ plantName, humidity = null }) => {
  const getMood = (v) => {
    if (v === null) return 'standby';
    if (v >= 60 && v <= 80) return 'happy';
    if (v >= 30 && v < 60) return 'neutral';
    return 'sad';
  };

  const mood = getMood(humidity);
  const status = statusMap[mood];

  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full flex items-center justify-center mb-6">
        <svg width="160" height="160" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          {faces[mood]}
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-1">{plantName || '—'}</h2>
      <p className="text-gray-400 text-sm mb-6">
        {humidity === null ? 'Sin maceta conectada' : 'Sala de estar · Última lectura: ahora'}
      </p>
      <div className={`${status.bg} px-8 py-3 rounded-full ${status.text} font-medium`}>
        {status.label}
      </div>
    </div>
  );
};

export default PlantFace;