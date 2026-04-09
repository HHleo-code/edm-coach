import React from 'react';

interface CheatsheetToggleProps {
  onToggle: () => void;
}

const CheatsheetToggle: React.FC<CheatsheetToggleProps> = ({ onToggle }) => {
  return (
    <button
      className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-700 text-white border-none rounded-full text-2xl cursor-pointer shadow-xl transition-transform duration-300 z-10 hover:scale-110"
      onClick={onToggle}
    >
      📋
    </button>
  );
};

export default CheatsheetToggle;