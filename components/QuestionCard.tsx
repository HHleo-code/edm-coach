import React, { useCallback } from 'react';
import { StepData, QuestionData } from '../types';
import DeepProcess from './DeepProcess';
import TipBox from './TipBox';

interface QuestionCardProps {
  stepData: StepData;
  onPrevStep: (stepId: number) => void;
  onNextStep: (stepId: number) => void;
  onComplete: () => void;
  isActive: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  stepData,
  onPrevStep,
  onNextStep,
  onComplete,
  isActive,
}) => {
  const isFirstStep = stepData.id === 1;
  const isLastStep = stepData.id === 4;

  const handleNextClick = useCallback(() => {
    onNextStep(stepData.id);
  }, [onNextStep, stepData.id]);

  const handlePrevClick = useCallback(() => {
    onPrevStep(stepData.id);
  }, [onPrevStep, stepData.id]);

  return (
    <div
      className={`
        bg-gray-50 p-6 rounded-xl mb-5 border-l-4 border-indigo-500
        transition-all duration-500 ease-in-out
        ${isActive ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'}
      `}
      style={isActive ? { display: 'block' } : { display: 'none' }} // Explicit display for hiding/showing
    >
      {stepData.questions.map((question: QuestionData, index: number) => (
        <React.Fragment key={index}>
          <h3 className="text-indigo-500 mb-4 text-2xl font-semibold">{question.title}</h3>
          <div className="text-lg font-bold text-gray-800 mb-5 p-4 bg-white rounded-lg shadow-sm">
            {question.text}
          </div>

          <DeepProcess steps={question.deepProcess} />
          <TipBox tip={question.tip} />

          {index === 0 && (
            <hr className="my-8 border-t-2 border-dashed border-gray-200" />
          )}
        </React.Fragment>
      ))}

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {!isFirstStep && (
          <button
            className="px-6 py-3 border-2 border-indigo-500 rounded-lg cursor-pointer font-bold text-base transition-all duration-300 bg-white text-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 sm:w-auto w-full"
            onClick={handlePrevClick}
          >
            ← 이전 단계 ({stepData.id - 1})
          </button>
        )}
        {isLastStep ? (
          <button
            className="px-6 py-3 border-none rounded-lg cursor-pointer font-bold text-base transition-all duration-300 bg-gradient-to-br from-green-500 to-green-700 text-white hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/40 sm:w-auto w-full"
            onClick={onComplete}
          >
            ✓ 코칭 완료
          </button>
        ) : (
          <button
            className="px-6 py-3 border-none rounded-lg cursor-pointer font-bold text-base transition-all duration-300 bg-gradient-to-br from-indigo-500 to-purple-700 text-white hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 sm:w-auto w-full"
            onClick={handleNextClick}
          >
            다음 단계 ({stepData.id + 1}) →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;