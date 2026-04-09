import React from 'react';
import { STEPS } from '../constants';

interface StepSelectorProps {
  currentStep: number;
  onSelectStep: (stepId: number) => void;
}

const StepSelector: React.FC<StepSelectorProps> = ({ currentStep, onSelectStep }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {STEPS.map((step) => (
        <button
          key={step.id}
          className={`
            p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-300 text-center font-bold
            hover:border-indigo-500 hover:transform hover:-translate-y-0.5 hover:shadow-md
            ${currentStep === step.id ? 'bg-gradient-to-br from-indigo-500 to-purple-700 text-white border-transparent' : 'text-gray-700'}
          `}
          onClick={() => onSelectStep(step.id)}
        >
          {step.label}<br />{step.title}
        </button>
      ))}
    </div>
  );
};

export default StepSelector;