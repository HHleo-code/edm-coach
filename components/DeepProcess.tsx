import React from 'react';
import { DeepProcessStep } from '../types';

interface DeepProcessProps {
  steps: DeepProcessStep[];
}

const DeepProcess: React.FC<DeepProcessProps> = ({ steps }) => {
  return (
    <div className="bg-white p-5 rounded-lg mb-4 shadow-sm">
      <h4 className="text-purple-700 mb-4 text-lg font-semibold flex items-center gap-2">
        <span className="text-xl">🔄</span> DEEP 프로세스
      </h4>
      {steps.map((step, index) => (
        <div key={index} className="mb-3 p-3 bg-gray-50 rounded-md border-l-3 border-indigo-500">
          <strong className="block text-indigo-500 mb-1">{step.label}</strong>
          <span className="text-gray-700">{step.description}</span>
        </div>
      ))}
    </div>
  );
};

export default DeepProcess;