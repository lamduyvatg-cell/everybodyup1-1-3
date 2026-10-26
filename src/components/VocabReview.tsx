import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, CheckCircle2, Bookmark, Star } from 'lucide-react';
import { VOCABULARY_LIST, STRUCTURE_LIST, VocabItem, StructureItem } from '../data/curriculum.ts';
import { ItemIllustration } from './Illustrations.tsx';
import { PraiseSticker } from './PraiseSticker.tsx';
import { speakWord } from '../utils/audio.ts';

interface VocabReviewProps {
  selectedUnit: 'all' | 1 | 2 | 3;
}

export const VocabReview: React.FC<VocabReviewProps> = ({ selectedUnit }) => {
  const [activeSection, setActiveSection] = useState<'vocab' | 'structure'>('vocab');

  const filteredVocab = selectedUnit === 'all'
    ? VOCABULARY_LIST
    : VOCABULARY_LIST.filter(item => item.unit === selectedUnit);

  const filteredStructures = selectedUnit === 'all'
    ? STRUCTURE_LIST
    : STRUCTURE_LIST.filter(item => item.unit === selectedUnit);

  const getUnitTitle = (unit: number) => {
    switch (unit) {
      case 1:
        return 'Unit 1: First Day (School Supplies & Shapes)';
      case 2:
        return 'Unit 2: Art Class (Art Supplies & Colors)';
      case 3:
        return 'Unit 3: Birthday Party (Numbers & Toys)';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero card */}
      <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 p-4 sm:p-6 rounded-3xl border-3 border-amber-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-400 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner animate-bounce-gentle">
            📚
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-500 text-white text-xs px-2.5 py-0.5 rounded-full font-extrabold uppercase tracking-wider">
                Lý Thuyết Trọng Tâm
              </span>
              <PraiseSticker type="good-job" size="sm" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-950">
              Sổ Tay Từ Vựng & Mẫu Câu Lớp 2
            </h2>
            <p className="text-sm sm:text-base text-amber-900 mt-1">
              Bé bấm vào biểu tượng loa <Volume2 className="inline w-4 h-4 text-blue-600" /> để nghe đọc tiếng Anh chuẩn nhé!
            </p>
          </div>
        </div>

        {/* Section toggler */}
        <div className="flex items-center bg-white p-1.5 rounded-2xl border-2 border-amber-300 shadow-sm w-full md:w-auto">
          <button
            onClick={() => setActiveSection('vocab')}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-sm sm:text-base transition-all ${
              activeSection === 'vocab'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen size={18} />
            <span>Từ Vựng ({filteredVocab.length})</span>
          </button>
          <button
            onClick={() => setActiveSection('structure')}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-sm sm:text-base transition-all ${
              activeSection === 'structure'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Bookmark size={18} />
            <span>Mẫu Câu ({filteredStructures.length})</span>
          </button>
        </div>
      </div>

      {/* VOCABULARY SECTION */}
      {activeSection === 'vocab' && (
        <div className="space-y-8">
          {[1, 2, 3].map(unitNum => {
            if (selectedUnit !== 'all' && selectedUnit !== unitNum) return null;
            const unitItems = filteredVocab.filter(item => item.unit === unitNum);
            if (unitItems.length === 0) return null;

            return (
              <div key={unitNum} className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-amber-200 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {unitNum === 1 ? '✏️' : unitNum === 2 ? '🎨' : '🎂'}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
                      {getUnitTitle(unitNum)}
                    </h3>
                  </div>
                  <PraiseSticker type="super-star" size="sm" showText={false} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {unitItems.map(item => (
                    <div
                      key={item.id}
                      className="bg-white rounded-3xl p-4 border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between"
                    >
                      <div>
                        {/* Illustration Container */}
                        <div className="bg-slate-50 rounded-2xl p-3 flex items-center justify-center relative mb-3 group-hover:scale-105 transition-transform">
                          <ItemIllustration id={item.illustration} className="w-24 h-24" />
                          <button
                            onClick={() => speakWord(item.word)}
                            className="absolute bottom-2 right-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition-transform active:scale-90"
                            title="Nghe phát âm từ này"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>

                        {/* Word & Phonetic */}
                        <div className="text-center">
                          <h4 className="text-xl sm:text-2xl font-black text-blue-700 capitalize">
                            {item.word}
                          </h4>
                          <p className="text-xs text-slate-400 font-mono mt-0.5">
                            {item.phonetic}
                          </p>
                          <p className="text-sm font-bold text-slate-700 mt-1 bg-amber-50 py-1 px-2 rounded-lg border border-amber-100">
                            {item.meaning}
                          </p>
                        </div>
                      </div>

                      {/* Example */}
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <button
                          onClick={() => speakWord(item.example)}
                          className="w-full text-left bg-slate-50 hover:bg-blue-50 p-2 rounded-xl transition-colors group/ex"
                        >
                          <div className="flex items-start gap-1.5">
                            <Volume2 size={14} className="text-blue-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-blue-900 group-hover/ex:text-blue-600">
                                {item.example}
                              </p>
                              <p className="text-xs text-slate-500 italic mt-0.5">
                                {item.exampleVi}
                              </p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* STRUCTURES SECTION */}
      {activeSection === 'structure' && (
        <div className="space-y-6">
          {filteredStructures.map(structure => (
            <div
              key={structure.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border-3 border-slate-200 shadow-sm hover:border-emerald-300 transition-all space-y-4"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500 text-white text-xs font-black px-2.5 py-1 rounded-xl">
                    Unit {structure.unit}
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-800">
                    {structure.title}
                  </h4>
                </div>
                <PraiseSticker type="well-done" size="sm" />
              </div>

              {/* Pattern Formula */}
              <div className="bg-emerald-50 rounded-2xl p-4 border-2 border-emerald-200">
                <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                  Mẫu câu giao tiếp:
                </p>
                <div className="font-mono text-base sm:text-lg font-bold text-emerald-950 whitespace-pre-line">
                  {structure.pattern}
                </div>
              </div>

              {/* Explanation */}
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <span className="font-bold text-slate-900">💡 Giải thích dễ hiểu: </span>
                {structure.explanation}
              </div>

              {/* Examples with Audio */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Ví dụ thực hành (Bé bấm loa để nghe và đọc theo):
                </p>
                <div className="space-y-2">
                  {structure.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors"
                    >
                      <div>
                        <p className="text-base font-bold text-slate-900">
                          {ex.en}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                          {ex.vi}
                        </p>
                      </div>
                      <button
                        onClick={() => speakWord(ex.en)}
                        className="p-2.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-full transition-transform active:scale-95 shrink-0 ml-2"
                        title="Nghe câu này"
                      >
                        <Volume2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional kid tip */}
              {structure.tip && (
                <div className="flex items-center gap-2 bg-amber-50 text-amber-900 text-sm font-bold p-3 rounded-2xl border border-amber-200">
                  <Star size={18} className="text-amber-500 fill-amber-400 shrink-0" />
                  <span>{structure.tip}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
