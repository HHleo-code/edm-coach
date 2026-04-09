import React, { useCallback, useEffect, useRef } from 'react';
import { CheatsheetSection, CheatsheetEmotionMapping } from '../types';

interface CheatsheetModalProps {
  isVisible: boolean;
  onClose: () => void;
  content: CheatsheetSection[];
}

const CheatsheetModal: React.FC<CheatsheetModalProps> = ({ isVisible, onClose, content }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && event.target === modalRef.current) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-zoom-in">
        <button
          className="absolute top-4 right-4 bg-transparent border-none text-gray-400 text-3xl cursor-pointer hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>

        {content.map((section, index) => (
          <div key={index} className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
            <h3 className="text-xl font-semibold text-indigo-500 mb-4 border-b-2 border-indigo-500 pb-2">
              {section.title}
            </h3>
            {section.type === 'list' && (
              <ul className="list-none pl-0">
                {(section.content as string[]).map((item, itemIndex) => (
                  <li key={itemIndex} className={`py-1 pl-5 relative ${section.style === 'negative' ? 'text-red-600' : section.style === 'positive' ? 'text-green-600' : 'text-gray-800'}`}>
                    <span className={`absolute left-0 top-1.5 font-bold ${section.style === 'negative' ? 'text-red-500' : section.style === 'positive' ? 'text-green-500' : 'text-indigo-500'}`}>
                      {section.style === 'negative' ? '✕' : '✓'}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            )}
            {section.type === 'table' && (
              <table className="w-full border-collapse mt-2">
                <thead>
                  <tr>
                    <th className="p-3 text-left bg-gray-50 font-bold text-indigo-500 border-b border-gray-200">감정</th>
                    <th className="p-3 text-left bg-gray-50 font-bold text-indigo-500 border-b border-gray-200">질문</th>
                    <th className="p-3 text-left bg-gray-50 font-bold text-indigo-500 border-b border-gray-200">욕구</th>
                  </tr>
                </thead>
                <tbody>
                  {(section.content as CheatsheetEmotionMapping[]).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{row.emotion}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{row.question}</td>
                      <td className="p-3 text-gray-700 border-b border-gray-100">{row.need}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {section.type === 'block' && (
              <div className="bg-gray-50 p-4 rounded-lg text-gray-800">
                {(section.content as string[]).map((line, lineIndex) => (
                  <p key={lineIndex} className="mb-1 last:mb-0" dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheatsheetModal;