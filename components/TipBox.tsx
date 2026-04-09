import React from 'react';
import { Tip } from '../types';

interface TipBoxProps {
  tip: Tip;
}

const TipBox: React.FC<TipBoxProps> = ({ tip }) => {
  return (
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
      <strong className="block text-yellow-800 mb-2">{tip.label}</strong>
      <span className="text-gray-800">{tip.text}</span>
    </div>
  );
};

export default TipBox;