import React, { useState } from 'react';
import { Volume2, ChevronLeft, ChevronRight, RotateCw, Sparkles, Star } from 'lucide-react';
import { VOCABULARY_LIST, VocabItem } from '../data/curriculum.ts';
import { ItemIllustration } from './Illustrations.tsx';
import { PraiseSticker } from './PraiseSticker.tsx';
import { speakWord, sounds } from '../utils/audio.ts';

interface FlashcardViewProps {
  selectedUnit: 'all' | 1 | 2 | 3;
  onAddStar: (amount?: number) => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({ selectedUnit, onAddStar }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const list = selectedUnit === 'all'
    ? VOCABULARY_LIST
    : VOCABULARY_LIST.filter(item => item.unit === selectedUnit);

  const currentItem = list[currentIndex] || list[0];

  const handleFlip = () => {
    sounds.playClick();
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    sounds.playClick();
    setIsFlipped(false);
    if (currentIndex < list.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    sounds.playClick();
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(list.length - 1);
    }
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakWord(currentItem.word);
    onAddStar(1);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-2 mb-1">
          <PraiseSticker type="good-job" size="sm" />
        </div>
        <h3 className="text-2xl font-black text-slate-800">
          Thẻ Từ Vựng Thông Minh (Flashcards)
        </h3>
        <p className="text-sm text-slate-500">
          Chạm vào thẻ để lật xem nghĩa tiếng Việt và câu ví dụ sinh động
        </p>
      </div>

      {/* Progress pill */}
      <div className="flex items-center justify-between px-2 text-sm font-bold text-slate-600">
        <span>Unit {currentItem.unit} • {currentItem.lesson}</span>
        <span className="bg-purple-100 text-purple-800 px-3 py-0.5 rounded-full">
          {currentIndex + 1} / {list.length}
        </span>
      </div>

      {/* Flashcard container with flip animation */}
      <div
        onClick={handleFlip}
        className="w-full h-96 sm:h-[420px] bg-white rounded-3xl border-4 border-purple-200 hover:border-purple-400 shadow-xl cursor-pointer p-6 sm:p-8 flex flex-col justify-between items-center text-center transition-all select-none relative group"
      >
        <span className="absolute top-4 right-4 text-xs font-bold text-purple-400 flex items-center gap-1 group-hover:text-purple-600">
          <RotateCw size={14} /> Chạm để lật
        </span>

        {!isFlipped ? (
          /* FRONT SIDE */
          <div className="flex-1 flex flex-col items-center justify-center space-y-4 animate-star-pop">
            <div className="bg-purple-50 p-4 rounded-3xl shadow-inner border border-purple-100">
              <ItemIllustration id={currentItem.illustration} className="w-36 h-36 sm:w-44 sm:h-44" />
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl font-black text-purple-900 capitalize tracking-wide">
                {currentItem.word}
              </h2>
              <p className="text-sm font-mono text-slate-400">
                {currentItem.phonetic}
              </p>
            </div>

            <button
              onClick={handleSpeak}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold text-sm shadow-md transition-transform active:scale-95"
            >
              <Volume2 size={18} />
              <span>Nghe đọc chuẩn</span>
            </button>
          </div>
        ) : (
          /* BACK SIDE */
          <div className="flex-1 flex flex-col items-center justify-center space-y-4 animate-star-pop">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl text-amber-600 border-2 border-amber-300">
              💡
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Ý nghĩa tiếng Việt:
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-900">
                {currentItem.meaning}
              </h3>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-sm w-full space-y-1">
              <p className="text-xs font-bold text-blue-600 uppercase">Câu mẫu:</p>
              <p className="text-base font-bold text-slate-800">
                {currentItem.example}
              </p>
              <p className="text-xs text-slate-500 italic">
                {currentItem.exampleVi}
              </p>
            </div>

            <button
              onClick={handleSpeak}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold text-sm shadow-md transition-transform active:scale-95"
            >
              <Volume2 size={18} />
              <span>Nghe lại từ</span>
            </button>
          </div>
        )}

        <div className="w-full flex items-center justify-center text-xs text-slate-400 border-t border-slate-100 pt-3">
          {isFlipped ? 'Chạm để quay lại mặt trước' : 'Chạm để xem nghĩa tiếng Việt'}
        </div>
      </div>

      {/* Control navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-300 hover:border-purple-400 text-slate-700 font-bold rounded-2xl shadow-sm transition-all active:scale-95"
        >
          <ChevronLeft size={20} />
          <span>Thẻ trước</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-md transition-all active:scale-95"
        >
          <span>Thẻ tiếp theo</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
