import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Header, TabType, UnitFilter } from './components/Header.tsx';
import { VocabReview } from './components/VocabReview.tsx';
import { InteractivePractice } from './components/InteractivePractice.tsx';
import { WorksheetPrint } from './components/WorksheetPrint.tsx';
import { FlashcardView } from './components/FlashcardView.tsx';
import { PraiseSticker, GoldStarBadge } from './components/PraiseSticker.tsx';
import { sounds, speakWord } from './utils/audio.ts';
import { Star, Sparkles, BookOpen, Printer, HelpCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('review');
  const [selectedUnit, setSelectedUnit] = useState<UnitFilter>('all');
  const [starsCount, setStarsCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('grade2_english_stars');
      return saved ? parseInt(saved, 10) : 5; // Start with 5 welcome stars!
    } catch {
      return 5;
    }
  });

  const addStars = (amount: number = 1) => {
    setStarsCount(prev => {
      const next = prev + amount;
      try {
        localStorage.setItem('grade2_english_stars', next.toString());
      } catch (e) {
        // Ignore local storage error
      }
      return next;
    });
  };

  const handleCelebrate = () => {
    sounds.playFanfare();
    addStars(1);
    speakWord('Good job! You are amazing!');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/70 via-orange-50/40 to-blue-50/50 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        starsCount={starsCount}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'review' && (
          <VocabReview selectedUnit={selectedUnit} />
        )}

        {activeTab === 'practice' && (
          <InteractivePractice
            selectedUnit={selectedUnit}
            onAddStar={addStars}
          />
        )}

        {activeTab === 'worksheet' && (
          <WorksheetPrint selectedUnit={selectedUnit} />
        )}

        {activeTab === 'flashcard' && (
          <FlashcardView
            selectedUnit={selectedUnit}
            onAddStar={addStars}
          />
        )}
      </main>

      {/* Floating Star Praise Button (Encouraging sticker button) */}
      <div className="fixed bottom-5 right-5 z-30 no-print flex flex-col items-end gap-2">
        <button
          onClick={handleCelebrate}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-amber-950 px-4 py-3 rounded-full font-black text-sm sm:text-base shadow-xl border-3 border-white hover:scale-105 active:scale-95 transition-all"
          title="Bấm để nhận thêm sao khen thưởng!"
        >
          <Star className="w-6 h-6 fill-amber-300 text-amber-800 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Bấm Nhận Sao! ⭐</span>
          <span className="absolute -top-2 -left-2 bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase shadow animate-bounce">
            Good Job!
          </span>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-amber-200 py-6 px-4 text-center text-slate-500 text-xs sm:text-sm no-print mt-10">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-3">
            <PraiseSticker type="good-job" size="sm" />
            <PraiseSticker type="super-star" size="sm" />
            <PraiseSticker type="awesome" size="sm" />
          </div>
          <p className="font-bold text-slate-700">
            Tài liệu & Bài tập ôn tập Tiếng Anh Lớp 2 chuẩn theo chương trình Everybody Up (Units 1 - 2 - 3)
          </p>
          <p className="text-slate-400">
            Dành cho giáo viên tiểu học, phụ huynh và học sinh lớp 2 tự ôn luyện và in phiếu bài tập.
          </p>
        </div>
      </footer>
    </div>
  );
}
