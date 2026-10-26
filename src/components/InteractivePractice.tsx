import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Volume2,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Star,
  Award,
  HelpCircle,
} from 'lucide-react';
import {
  MULTIPLE_CHOICE_QUESTIONS,
  TICK_CROSS_QUESTIONS,
  UNSCRAMBLE_QUESTIONS,
  ONE_WORD_QUESTIONS,
  MultipleChoiceQuestion,
  TickCrossQuestion,
  UnscrambleQuestion,
  OneWordQuestion,
} from '../data/curriculum.ts';
import { ItemIllustration } from './Illustrations.tsx';
import { PraiseSticker, PraiseType } from './PraiseSticker.tsx';
import { sounds, speakWord } from '../utils/audio.ts';

type ExerciseType = 'mc' | 'tc' | 'un' | 'ow';

interface InteractivePracticeProps {
  selectedUnit: 'all' | 1 | 2 | 3;
  onAddStar: (amount?: number) => void;
}

export const InteractivePractice: React.FC<InteractivePracticeProps> = ({
  selectedUnit,
  onAddStar,
}) => {
  const [activeType, setActiveType] = useState<ExerciseType>('mc');
  const [currentIndex, setCurrentIndex] = useState(0);

  // States for Type 1: Multiple choice
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  // States for Type 2: Tick or Cross
  const [selectedTickCross, setSelectedTickCross] = useState<boolean | null>(null);

  // States for Type 3: Unscramble
  const [unscrambleSlots, setUnscrambleSlots] = useState<string[]>([]);
  const [unscrambleAvailable, setUnscrambleAvailable] = useState<{ id: number; char: string }[]>([]);

  // States for Type 4: One word answer
  const [oneWordInput, setOneWordInput] = useState('');
  const [showOneWordHint, setShowOneWordHint] = useState(false);

  // Praise modal / notification
  const [currentPraise, setCurrentPraise] = useState<{ type: PraiseType; text: string } | null>(null);

  // Filter questions based on selected unit
  const mcList = selectedUnit === 'all'
    ? MULTIPLE_CHOICE_QUESTIONS
    : MULTIPLE_CHOICE_QUESTIONS.filter(q => q.unit === selectedUnit);

  const tcList = selectedUnit === 'all'
    ? TICK_CROSS_QUESTIONS
    : TICK_CROSS_QUESTIONS.filter(q => q.unit === selectedUnit);

  const unList = selectedUnit === 'all'
    ? UNSCRAMBLE_QUESTIONS
    : UNSCRAMBLE_QUESTIONS.filter(q => q.unit === selectedUnit);

  const owList = selectedUnit === 'all'
    ? ONE_WORD_QUESTIONS
    : ONE_WORD_QUESTIONS.filter(q => q.unit === selectedUnit);

  // Reset state when changing question or exercise type
  const resetQuestionState = () => {
    setSelectedOption(null);
    setSelectedTickCross(null);
    setIsAnswerChecked(false);
    setOneWordInput('');
    setShowOneWordHint(false);
    setCurrentPraise(null);
  };

  // Init unscramble for current question
  const currentUn = unList[currentIndex];
  React.useEffect(() => {
    if (activeType === 'un' && currentUn) {
      setUnscrambleSlots([]);
      setUnscrambleAvailable(currentUn.scrambled.map((char, index) => ({ id: index, char })));
      setIsAnswerChecked(false);
      setCurrentPraise(null);
    }
  }, [activeType, currentIndex, selectedUnit]);

  const triggerSuccessEffects = (customMessage?: string) => {
    sounds.playCorrect();
    onAddStar(1);

    const praises: { type: PraiseType; text: string }[] = [
      { type: 'good-job', text: 'Good job! Bé làm rất xuất sắc! ⭐' },
      { type: 'super-star', text: 'Super Star! Đỉnh quá bé ơi! 🌟' },
      { type: 'awesome', text: 'Awesome! Tuyệt vời lắm! 👍' },
      { type: 'well-done', text: 'Well done! Rất chính xác! 🏆' },
      { type: 'excellent', text: 'Bé giỏi quá! Tiếp tục phát huy nhé! ❤️' },
    ];
    const praise = praises[Math.floor(Math.random() * praises.length)];
    if (customMessage) {
      praise.text = customMessage;
    }
    setCurrentPraise(praise);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'],
    });
  };

  // Check multiple choice
  const handleCheckMC = (option: 'A' | 'B' | 'C') => {
    if (isAnswerChecked) return;
    setSelectedOption(option);
    setIsAnswerChecked(true);

    const currentQ = mcList[currentIndex];
    if (option === currentQ.correctAnswer) {
      triggerSuccessEffects();
    } else {
      sounds.playIncorrect();
    }
  };

  // Check Tick/Cross
  const handleCheckTC = (userChoice: boolean) => {
    if (isAnswerChecked) return;
    setSelectedTickCross(userChoice);
    setIsAnswerChecked(true);

    const currentQ = tcList[currentIndex];
    if (userChoice === currentQ.isCorrect) {
      triggerSuccessEffects();
    } else {
      sounds.playIncorrect();
    }
  };

  // Unscramble actions
  const handleLetterClick = (item: { id: number; char: string }) => {
    if (isAnswerChecked) return;
    sounds.playClick();
    setUnscrambleSlots(prev => [...prev, item.char]);
    setUnscrambleAvailable(prev => prev.filter(l => l.id !== item.id));
  };

  const handleSlotClick = (index: number) => {
    if (isAnswerChecked) return;
    sounds.playClick();
    const removedChar = unscrambleSlots[index];
    const newSlots = [...unscrambleSlots];
    newSlots.splice(index, 1);
    setUnscrambleSlots(newSlots);

    // Return to available
    setUnscrambleAvailable(prev => [...prev, { id: Date.now() + Math.random(), char: removedChar }]);
  };

  const handleCheckUnscramble = () => {
    const builtWord = unscrambleSlots.join('');
    setIsAnswerChecked(true);
    if (builtWord.toLowerCase() === currentUn.word.replace(/\s+/g, '').toLowerCase()) {
      triggerSuccessEffects(`Good job! Từ đúng là: "${currentUn.word.toUpperCase()}"! ⭐`);
    } else {
      sounds.playIncorrect();
    }
  };

  // One word check
  const handleCheckOneWord = () => {
    if (!oneWordInput.trim()) return;
    const currentQ = owList[currentIndex];
    setIsAnswerChecked(true);

    const cleanInput = oneWordInput.trim().toLowerCase();
    const cleanAnswer = currentQ.answer.toLowerCase();
    const isOk = cleanInput === cleanAnswer || (currentQ.acceptableAnswers && currentQ.acceptableAnswers.includes(cleanInput));

    if (isOk) {
      triggerSuccessEffects(`Good job! "${cleanInput.toUpperCase()}" là đáp án chính xác! ⭐`);
    } else {
      sounds.playIncorrect();
    }
  };

  // Next Question
  const handleNextQuestion = () => {
    const totalCount =
      activeType === 'mc'
        ? mcList.length
        : activeType === 'tc'
        ? tcList.length
        : activeType === 'un'
        ? unList.length
        : owList.length;

    if (currentIndex < totalCount - 1) {
      setCurrentIndex(prev => prev + 1);
      resetQuestionState();
    } else {
      // Completed all questions in category
      sounds.playFanfare();
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
      });
      setCurrentPraise({
        type: 'super-star',
        text: 'HOAN HÔ BÉ! ĐÃ HOÀN THÀNH TOÀN BỘ CÂU HỎI TRONG PHẦN NÀY! 🌟🌟🌟',
      });
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetQuestionState();
    }
  };

  const handleResetType = (type: ExerciseType) => {
    setActiveType(type);
    setCurrentIndex(0);
    resetQuestionState();
  };

  return (
    <div className="space-y-6">
      {/* Exercise Type Selector Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-3xl border-3 border-amber-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-800">
              Chọn Dạng Bài Tập Cho Bé:
            </h3>
            <p className="text-xs text-slate-500">
              Mức độ cực kỳ dễ và trực quan, kèm hình vẽ to rõ cho học sinh lớp 2
            </p>
          </div>
        </div>

        {/* 4 Exercise Buttons */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => handleResetType('mc')}
            className={`px-3 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all text-center ${
              activeType === 'mc'
                ? 'bg-blue-600 text-white shadow-md scale-102 ring-2 ring-blue-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            1. Multiple Choice (A,B,C)
          </button>

          <button
            onClick={() => handleResetType('tc')}
            className={`px-3 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all text-center ${
              activeType === 'tc'
                ? 'bg-emerald-600 text-white shadow-md scale-102 ring-2 ring-emerald-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            2. Tick or Cross (✓ / ✗)
          </button>

          <button
            onClick={() => handleResetType('un')}
            className={`px-3 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all text-center ${
              activeType === 'un'
                ? 'bg-purple-600 text-white shadow-md scale-102 ring-2 ring-purple-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            3. Unscramble Letters
          </button>

          <button
            onClick={() => handleResetType('ow')}
            className={`px-3 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all text-center ${
              activeType === 'ow'
                ? 'bg-amber-600 text-white shadow-md scale-102 ring-2 ring-amber-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            4. Write 1-Word Answer
          </button>
        </div>
      </div>

      {/* Praise Notification Banner */}
      {currentPraise && (
        <div className="animate-star-pop bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 p-4 rounded-3xl border-3 border-amber-500 shadow-lg text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <PraiseSticker type={currentPraise.type} size="lg" />
          <span className="text-lg sm:text-xl font-black text-amber-950">
            {currentPraise.text}
          </span>
        </div>
      )}

      {/* Question Card Container */}
      <div className="bg-white rounded-3xl border-3 border-slate-200 shadow-md p-5 sm:p-8 space-y-6">
        {/* Progress & Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-800 font-extrabold px-3 py-1 rounded-full text-xs sm:text-sm">
              Câu {currentIndex + 1} /{' '}
              {activeType === 'mc'
                ? mcList.length
                : activeType === 'tc'
                ? tcList.length
                : activeType === 'un'
                ? unList.length
                : owList.length}
            </span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {activeType === 'mc' && 'Dạng 1: Trắc nghiệm (A, B, C)'}
              {activeType === 'tc' && 'Dạng 2: Nhìn hình & từ ghi Đúng (✓) hay Sai (✗)'}
              {activeType === 'un' && 'Dạng 3: Sắp xếp chữ cái thành từ đúng'}
              {activeType === 'ow' && 'Dạng 4: Nhìn hình và viết 1 từ trả lời'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                resetQuestionState();
                sounds.playClick();
              }}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
              title="Làm lại câu này"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </div>

        {/* ---------------- TYPE 1: MULTIPLE CHOICE ---------------- */}
        {activeType === 'mc' && mcList[currentIndex] && (
          <div className="space-y-6">
            {/* Visual & Question */}
            <div className="flex flex-col sm:flex-row items-center gap-6 bg-blue-50/60 p-5 rounded-3xl border-2 border-blue-100">
              {mcList[currentIndex].illustration && (
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-blue-200 shrink-0">
                  <ItemIllustration
                    id={mcList[currentIndex].illustration!}
                    className="w-28 h-28 sm:w-32 sm:h-32"
                  />
                </div>
              )}
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
                    {mcList[currentIndex].question}
                  </h4>
                  <button
                    onClick={() => speakWord(mcList[currentIndex].question.replace('______', 'blank'))}
                    className="p-2 text-blue-600 bg-white rounded-full shadow hover:bg-blue-100 transition-transform active:scale-95 shrink-0"
                    title="Nghe câu hỏi"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  {mcList[currentIndex].questionVi}
                </p>
              </div>
            </div>

            {/* Options A, B, C */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mcList[currentIndex].options.map(opt => {
                const isSelected = selectedOption === opt.label;
                const isCorrect = isAnswerChecked && opt.label === mcList[currentIndex].correctAnswer;
                const isWrongSelected = isAnswerChecked && isSelected && !isCorrect;

                return (
                  <button
                    key={opt.label}
                    onClick={() => handleCheckMC(opt.label)}
                    disabled={isAnswerChecked}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-3 text-left font-bold transition-all text-lg sm:text-xl ${
                      isCorrect
                        ? 'bg-emerald-100 border-emerald-500 text-emerald-900 shadow-md scale-102'
                        : isWrongSelected
                        ? 'bg-rose-100 border-rose-500 text-rose-900'
                        : isSelected
                        ? 'bg-blue-100 border-blue-500 text-blue-900'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-white text-slate-800'
                    }`}
                  >
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-500 text-white'
                          : isWrongSelected
                          ? 'bg-rose-500 text-white'
                          : 'bg-white border-2 border-slate-300 text-slate-700'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span className="flex-1">{opt.text}</span>
                    {isCorrect && <Check size={24} className="text-emerald-600 shrink-0" />}
                    {isWrongSelected && <X size={24} className="text-rose-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation box when answered */}
            {isAnswerChecked && (
              <div
                className={`p-4 rounded-2xl border-2 flex items-start gap-3 ${
                  selectedOption === mcList[currentIndex].correctAnswer
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-amber-50 border-amber-300 text-amber-900'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {selectedOption === mcList[currentIndex].correctAnswer ? (
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  ) : (
                    <HelpCircle size={24} className="text-amber-600" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-base">
                    {selectedOption === mcList[currentIndex].correctAnswer
                      ? 'Chính xác! Bé làm tốt lắm!'
                      : `Chưa đúng rồi bé ơi! Đáp án đúng là: ${mcList[currentIndex].correctAnswer}`}
                  </p>
                  <p className="text-sm mt-1">{mcList[currentIndex].explanation}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- TYPE 2: TICK OR CROSS ---------------- */}
        {activeType === 'tc' && tcList[currentIndex] && (
          <div className="space-y-6">
            <div className="bg-emerald-50/50 p-6 rounded-3xl border-2 border-emerald-100 flex flex-col items-center text-center space-y-4">
              <p className="text-slate-600 text-sm font-semibold">
                Bé hãy nhìn hình và từ bên dưới: Nếu đúng chọn Tick (✓), nếu sai chọn Cross (✗)
              </p>

              {/* Big Illustration */}
              <div className="bg-white p-4 rounded-3xl shadow-sm border-2 border-emerald-200">
                <ItemIllustration
                  id={tcList[currentIndex].illustration}
                  className="w-32 h-32 sm:w-40 sm:h-40"
                />
              </div>

              {/* Given Word */}
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-emerald-900 tracking-wide uppercase">
                  {tcList[currentIndex].word}
                </span>
                <button
                  onClick={() => speakWord(tcList[currentIndex].word)}
                  className="p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow transition-transform active:scale-95"
                  title="Nghe phát âm từ này"
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>

            {/* Tick (✓) & Cross (✗) Choice Buttons */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {/* Tick Button */}
              <button
                onClick={() => handleCheckTC(true)}
                disabled={isAnswerChecked}
                className={`flex flex-col items-center justify-center p-5 rounded-3xl border-4 font-black transition-all ${
                  isAnswerChecked && tcList[currentIndex].isCorrect
                    ? 'bg-emerald-100 border-emerald-500 text-emerald-900 scale-105 shadow-lg'
                    : isAnswerChecked && selectedTickCross === true && !tcList[currentIndex].isCorrect
                    ? 'bg-rose-100 border-rose-500 text-rose-900 opacity-60'
                    : 'bg-emerald-50 border-emerald-400 text-emerald-800 hover:bg-emerald-100 active:scale-95'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl shadow-md mb-2">
                  ✓
                </div>
                <span className="text-xl sm:text-2xl">Tick (✓)</span>
                <span className="text-xs font-medium text-emerald-700">Đúng</span>
              </button>

              {/* Cross Button */}
              <button
                onClick={() => handleCheckTC(false)}
                disabled={isAnswerChecked}
                className={`flex flex-col items-center justify-center p-5 rounded-3xl border-4 font-black transition-all ${
                  isAnswerChecked && !tcList[currentIndex].isCorrect
                    ? 'bg-rose-100 border-rose-500 text-rose-900 scale-105 shadow-lg'
                    : isAnswerChecked && selectedTickCross === false && tcList[currentIndex].isCorrect
                    ? 'bg-rose-100 border-rose-500 text-rose-900 opacity-60'
                    : 'bg-rose-50 border-rose-400 text-rose-800 hover:bg-rose-100 active:scale-95'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center text-3xl shadow-md mb-2">
                  ✗
                </div>
                <span className="text-xl sm:text-2xl">Cross (✗)</span>
                <span className="text-xs font-medium text-rose-700">Sai</span>
              </button>
            </div>

            {/* Explanation */}
            {isAnswerChecked && (
              <div
                className={`p-4 rounded-2xl border-2 flex items-start gap-3 ${
                  selectedTickCross === tcList[currentIndex].isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-amber-50 border-amber-300 text-amber-900'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {selectedTickCross === tcList[currentIndex].isCorrect ? (
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  ) : (
                    <XCircle size={24} className="text-rose-600" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-base">
                    {selectedTickCross === tcList[currentIndex].isCorrect
                      ? 'Tuyệt vời! Bé chọn hoàn toàn đúng! ⭐'
                      : 'Bé chú ý nhé!'}
                  </p>
                  <p className="text-sm mt-1">{tcList[currentIndex].explanation}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- TYPE 3: UNSCRAMBLE LETTERS ---------------- */}
        {activeType === 'un' && currentUn && (
          <div className="space-y-6">
            <div className="bg-purple-50/50 p-6 rounded-3xl border-2 border-purple-100 flex flex-col items-center text-center space-y-4">
              <p className="text-slate-600 text-sm font-semibold">
                Bé hãy nhấn vào các chữ cái để xếp lại thành từ đúng theo hình minh họa nhé!
              </p>

              {/* Illustration & Hint */}
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border-2 border-purple-200">
                <ItemIllustration
                  id={currentUn.illustration}
                  className="w-28 h-28 sm:w-32 sm:h-32"
                />
                <div className="text-center sm:text-left">
                  <p className="text-sm font-extrabold text-purple-700">
                    💡 Gợi ý: {currentUn.hintVi}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Độ dài: {currentUn.word.replace(/\s+/g, '').length} chữ cái
                  </p>
                </div>
              </div>

              {/* Target Slots */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-purple-900 uppercase">
                  Từ của bé (Nhấn chữ cái để xóa):
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 min-h-16 p-2 bg-purple-100/60 rounded-2xl border-2 border-dashed border-purple-300">
                  {unscrambleSlots.length === 0 && (
                    <span className="text-sm text-purple-400 font-medium italic">
                      Chạm vào các bong bóng chữ bên dưới để xếp vào đây...
                    </span>
                  )}
                  {unscrambleSlots.map((char, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSlotClick(idx)}
                      disabled={isAnswerChecked}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 text-white rounded-2xl font-black text-2xl flex items-center justify-center shadow-md hover:bg-purple-700 active:scale-95 transition-all animate-star-pop"
                    >
                      {char.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Available Scrambled Letters */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Các chữ cái cần xếp:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {unscrambleAvailable.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleLetterClick(item)}
                      disabled={isAnswerChecked}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-3 border-purple-400 text-purple-800 rounded-2xl font-black text-2xl flex items-center justify-center shadow hover:bg-purple-50 active:scale-90 transition-all"
                    >
                      {item.char.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit / Check button */}
            {!isAnswerChecked ? (
              <div className="text-center">
                <button
                  onClick={handleCheckUnscramble}
                  disabled={unscrambleSlots.length === 0}
                  className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-300 text-white font-black text-lg rounded-2xl shadow-lg transition-transform active:scale-95"
                >
                  Kiểm Tra Đáp Án ✨
                </button>
              </div>
            ) : (
              <div
                className={`p-4 rounded-2xl border-2 flex items-start gap-3 ${
                  unscrambleSlots.join('').toLowerCase() === currentUn.word.replace(/\s+/g, '').toLowerCase()
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-amber-50 border-amber-300 text-amber-900'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {unscrambleSlots.join('').toLowerCase() === currentUn.word.replace(/\s+/g, '').toLowerCase() ? (
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  ) : (
                    <XCircle size={24} className="text-amber-600" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-base">
                    {unscrambleSlots.join('').toLowerCase() === currentUn.word.replace(/\s+/g, '').toLowerCase()
                      ? 'Chính xác rồi! Bé xếp chữ rất cừ!'
                      : `Chưa đúng rồi! Từ chính xác là: "${currentUn.word.toUpperCase()}"`}
                  </p>
                  <button
                    onClick={() => speakWord(currentUn.word)}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-white px-3 py-1 rounded-lg border border-purple-200"
                  >
                    <Volume2 size={14} /> Nghe đọc: {currentUn.word}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ---------------- TYPE 4: WRITE 1-WORD ANSWER ---------------- */}
        {activeType === 'ow' && owList[currentIndex] && (
          <div className="space-y-6">
            <div className="bg-amber-50/50 p-6 rounded-3xl border-2 border-amber-200 flex flex-col items-center text-center space-y-4">
              <p className="text-slate-600 text-sm font-semibold">
                {owList[currentIndex].prompt}
              </p>

              {/* Illustration */}
              <div className="bg-white p-4 rounded-3xl shadow-sm border-2 border-amber-300">
                <ItemIllustration
                  id={owList[currentIndex].illustration}
                  className="w-32 h-32 sm:w-40 sm:h-40"
                />
              </div>

              {/* Input field with large friendly typography */}
              <div className="w-full max-w-sm space-y-2">
                <input
                  type="text"
                  value={oneWordInput}
                  onChange={e => setOneWordInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') handleCheckOneWord();
                  }}
                  disabled={isAnswerChecked}
                  placeholder="Gõ 1 từ tiếng Anh vào đây..."
                  className="w-full text-center text-2xl sm:text-3xl font-black text-amber-950 tracking-wider py-3 px-4 rounded-2xl border-3 border-amber-400 bg-white focus:outline-none focus:ring-4 focus:ring-amber-200"
                  autoComplete="off"
                />

                <div className="flex items-center justify-between px-1">
                  <button
                    onClick={() => setShowOneWordHint(!showOneWordHint)}
                    className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
                  >
                    <HelpCircle size={14} />
                    {showOneWordHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
                  </button>
                  <span className="text-xs text-slate-400 font-medium">
                    {owList[currentIndex].answer.length} chữ cái
                  </span>
                </div>

                {showOneWordHint && (
                  <div className="p-2.5 bg-amber-100 rounded-xl text-xs font-bold text-amber-900 animate-star-pop">
                    {owList[currentIndex].hint}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            {!isAnswerChecked ? (
              <div className="text-center">
                <button
                  onClick={handleCheckOneWord}
                  disabled={!oneWordInput.trim()}
                  className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-white font-black text-lg rounded-2xl shadow-lg transition-transform active:scale-95"
                >
                  Kiểm Tra Đáp Án 🌟
                </button>
              </div>
            ) : (
              <div
                className={`p-4 rounded-2xl border-2 flex items-start gap-3 ${
                  oneWordInput.trim().toLowerCase() === owList[currentIndex].answer.toLowerCase()
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-amber-50 border-amber-300 text-amber-900'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {oneWordInput.trim().toLowerCase() === owList[currentIndex].answer.toLowerCase() ? (
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  ) : (
                    <XCircle size={24} className="text-amber-600" />
                  )}
                </div>
                <div>
                  <p className="font-bold text-base">
                    {oneWordInput.trim().toLowerCase() === owList[currentIndex].answer.toLowerCase()
                      ? 'Đúng rồi! Bé viết rất chuẩn!'
                      : `Đáp án đúng là: "${owList[currentIndex].answer.toUpperCase()}"`}
                  </p>
                  <button
                    onClick={() => speakWord(owList[currentIndex].answer)}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-white px-3 py-1 rounded-lg border border-amber-200"
                  >
                    <Volume2 size={14} /> Nghe đọc: {owList[currentIndex].answer}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation buttons: Prev / Next */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <button
            onClick={handlePrevQuestion}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-xl transition-all"
          >
            <ArrowLeft size={16} />
            <span>Câu trước</span>
          </button>

          <button
            onClick={handleNextQuestion}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-md transition-all active:scale-95"
          >
            <span>Câu tiếp theo</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
