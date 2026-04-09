import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import StepSelector from './components/StepSelector';
import QuestionCard from './components/QuestionCard';
import CheatsheetToggle from './components/CheatsheetToggle';
import CheatsheetModal from './components/CheatsheetModal';
import { STEPS, CHEATSHEET_CONTENT } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showCheatsheet, setShowCheatsheet] = useState<boolean>(false);

  const handleSelectStep = useCallback((stepId: number) => {
    setCurrentStep(stepId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNextStep = useCallback((currentStepId: number) => {
    if (currentStepId < STEPS.length) {
      setCurrentStep(currentStepId + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handlePrevStep = useCallback((currentStepId: number) => {
    if (currentStepId > 1) {
      setCurrentStep(currentStepId - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleCompleteCoaching = useCallback(() => {
    if (confirm('코칭을 완료하시겠습니까?')) {
      alert('🎉 코칭을 완료했습니다!\n\n학생과 함께 의미있는 시간을 보내셨습니다.\n성찰 시트를 작성하도록 안내해주세요.');
      setCurrentStep(1); // Reset to first step
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const toggleCheatsheet = useCallback(() => {
    setShowCheatsheet((prev) => !prev);
  }, []);

  return (
    <div className="container max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mt-5">
      <Header />
      <div className="p-5 sm:p-8">
        <StepSelector currentStep={currentStep} onSelectStep={handleSelectStep} />

        {STEPS.map((stepData) => (
          <QuestionCard
            key={stepData.id}
            stepData={stepData}
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
            onComplete={handleCompleteCoaching}
            isActive={currentStep === stepData.id}
          />
        ))}
      </div>

      <CheatsheetToggle onToggle={toggleCheatsheet} />
      <CheatsheetModal
        isVisible={showCheatsheet}
        onClose={toggleCheatsheet}
        content={CHEATSHEET_CONTENT}
      />
    </div>
  );
};

export default App;