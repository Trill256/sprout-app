import React from 'react';
import { Home } from 'lucide-react';

const Header = () => {
  return (
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
          <div className="w-10 h-10 bg-[#4D6434] text-white rounded-full flex items-center justify-center font-bold text-sm">
            SP
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;