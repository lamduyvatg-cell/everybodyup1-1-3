import React from 'react';
import { BookOpen, Sparkles, Printer, Layers, Star, Volume2 } from 'lucide-react';
import { PraiseSticker, GoldStarBadge } from './PraiseSticker.tsx';
import { speakWord } from '../utils/audio.ts';

export type TabType = 'review' | 'practice' | 'worksheet' | 'flashcard';
export type UnitFilter = 'all' | 1 | 2 | 3;

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  selectedUnit: UnitFilter;
  setSelectedUnit: (unit: UnitFilter) => void;
  starsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedUnit,
  setSelectedUnit,
  starsCount,
}) => {
  return (
    <header className="bg-white border-b-4 border-amber-200 sticky top-0 z-40 shadow-sm no-print">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-white px-4 py-2 sm:py-2.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🎒</span>
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-black tracking-wide drop-shadow-sm">
                ÔN TẬP TIẾNG ANH LỚP 2 • EVERYBODY UP (UNITS 1 - 2 - 3)
              </h1>
              <p className="text-xs sm:text-sm text-amber-100 font-medium hidden sm:block">
                Từ vựng, Mẫu câu & 4 dạng bài tập minh họa sinh động
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <GoldStarBadge count={starsCount} />
            <button
              onClick={() => speakWord('Welcome to Grade 2 English Review! Good job!')}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-transform active:scale-95"
              title="Nghe chào mừng"
            >
              <Volume2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation and filters */}
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('review')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-bold text-sm sm:text-base transition-all ${
                activeTab === 'review'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200 scale-102'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <BookOpen size={18} />
              <span>1. Lý Thuyết & Từ Vựng</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-bold text-sm sm:text-base transition-all ${
                activeTab === 'practice'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200 scale-102'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Sparkles size={18} />
              <span>2. Bài Tập Tương Tác</span>
              <span className="bg-amber-300 text-amber-900 text-xs px-2 py-0.5 rounded-full font-extrabold ml-1">
                4 Dạng
              </span>
            </button>

            <button
              onClick={() => setActiveTab('worksheet')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-bold text-sm sm:text-base transition-all ${
                activeTab === 'worksheet'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-200 scale-102'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Printer size={18} />
              <span>3. In Phiếu Bài Tập (A4)</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcard')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-2xl font-bold text-sm sm:text-base transition-all ${
                activeTab === 'flashcard'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-200 scale-102'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Layers size={18} />
              <span>4. Flashcard Bé Học</span>
            </button>
          </div>

          {/* Unit Filter Selector */}
          <div className="flex items-center gap-1.5 bg-amber-50 p-1.5 rounded-2xl border border-amber-200">
            <span className="text-xs font-bold text-amber-900 pl-1 pr-1 hidden sm:inline">
              Chọn Unit:
            </span>
            <button
              onClick={() => setSelectedUnit('all')}
              className={`px-2.5 py-1 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedUnit === 'all'
                  ? 'bg-amber-500 text-white shadow'
                  : 'text-amber-800 hover:bg-amber-100'
              }`}
            >
              Tất Cả
            </button>
            <button
              onClick={() => setSelectedUnit(1)}
              className={`px-2.5 py-1 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedUnit === 1
                  ? 'bg-blue-500 text-white shadow'
                  : 'text-blue-800 hover:bg-blue-100'
              }`}
            >
              Unit 1 (Trường học)
            </button>
            <button
              onClick={() => setSelectedUnit(2)}
              className={`px-2.5 py-1 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedUnit === 2
                  ? 'bg-emerald-500 text-white shadow'
                  : 'text-emerald-800 hover:bg-emerald-100'
              }`}
            >
              Unit 2 (Mỹ thuật)
            </button>
            <button
              onClick={() => setSelectedUnit(3)}
              className={`px-2.5 py-1 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                selectedUnit === 3
                  ? 'bg-rose-500 text-white shadow'
                  : 'text-rose-800 hover:bg-rose-100'
              }`}
            >
              Unit 3 (Sinh nhật)
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
