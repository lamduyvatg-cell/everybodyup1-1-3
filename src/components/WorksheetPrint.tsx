import React, { useState } from 'react';
import { Printer, Eye, EyeOff, CheckCircle2, Star, Sparkles, Award } from 'lucide-react';
import {
  MULTIPLE_CHOICE_QUESTIONS,
  TICK_CROSS_QUESTIONS,
  UNSCRAMBLE_QUESTIONS,
  ONE_WORD_QUESTIONS,
  VOCABULARY_LIST,
  STRUCTURE_LIST,
} from '../data/curriculum.ts';
import { ItemIllustration } from './Illustrations.tsx';
import { PraiseSticker } from './PraiseSticker.tsx';

interface WorksheetPrintProps {
  selectedUnit: 'all' | 1 | 2 | 3;
}

export const WorksheetPrint: React.FC<WorksheetPrintProps> = ({ selectedUnit }) => {
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const filteredMC = selectedUnit === 'all'
    ? MULTIPLE_CHOICE_QUESTIONS.slice(0, 6)
    : MULTIPLE_CHOICE_QUESTIONS.filter(q => q.unit === selectedUnit);

  const filteredTC = selectedUnit === 'all'
    ? TICK_CROSS_QUESTIONS.slice(0, 6)
    : TICK_CROSS_QUESTIONS.filter(q => q.unit === selectedUnit);

  const filteredUN = selectedUnit === 'all'
    ? UNSCRAMBLE_QUESTIONS.slice(0, 6)
    : UNSCRAMBLE_QUESTIONS.filter(q => q.unit === selectedUnit);

  const filteredOW = selectedUnit === 'all'
    ? ONE_WORD_QUESTIONS.slice(0, 6)
    : ONE_WORD_QUESTIONS.filter(q => q.unit === selectedUnit);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Control panel (Hidden when printing) */}
      <div className="bg-white p-4 rounded-3xl border-3 border-rose-200 shadow-sm flex flex-wrap items-center justify-between gap-4 no-print">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-rose-100 text-rose-700 rounded-2xl">
            <Printer size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800">
              Chế Độ In Phiếu Bài Tập A4 & Lý Thuyết
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Định dạng chuẩn đẹp, hình vẽ rõ ràng, tối ưu cho máy in màu hoặc trắng đen
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
              showAnswerKey
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {showAnswerKey ? <EyeOff size={16} /> : <Eye size={16} />}
            <span>{showAnswerKey ? 'Ẩn Trang Đáp Án' : 'Xem Trang Đáp Án'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-2xl shadow-md transition-transform active:scale-95"
          >
            <Printer size={18} />
            <span>In Phiếu Ngay (Print A4)</span>
          </button>
        </div>
      </div>

      {/* ================= PRINTABLE PAPER CONTAINER ================= */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border-2 border-slate-300 shadow-xl max-w-4xl mx-auto space-y-8 text-slate-900 print:p-0 print:border-none print:shadow-none print:rounded-none">
        {/* HEADER SECTION FOR STUDENT INFO */}
        <div className="border-b-4 border-amber-400 pb-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                PHIẾU ÔN TẬP TIẾNG ANH LỚP 2 • EVERYBODY UP
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-blue-900 mt-1">
                REVIEW & PRACTICE: UNITS 1 - 2 - 3
              </h2>
              <p className="text-sm font-semibold text-slate-600">
                School Supplies • Colors & Art • Numbers 1-12 • Toys & Shapes
              </p>
            </div>

            {/* Praise & Gold Star Sticker for Grade 2 */}
            <div className="flex flex-col items-center bg-amber-50 border-2 border-amber-300 rounded-2xl p-2.5 px-4 shadow-sm text-center shrink-0">
              <div className="flex items-center gap-1 text-amber-500">
                <Star size={18} className="fill-amber-400" />
                <Star size={22} className="fill-amber-400" />
                <Star size={18} className="fill-amber-400" />
              </div>
              <span className="text-xs font-black text-amber-900 mt-1">
                GOOD JOB! ⭐⭐⭐
              </span>
              <span className="text-[10px] text-amber-700">Phiếu bé chăm ngoan</span>
            </div>
          </div>

          {/* Student fill fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-200 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">Họ và tên bé:</span>
              <span className="flex-1 border-b border-dotted border-slate-500 pb-1 min-w-32"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">Lớp:</span>
              <span className="w-16 border-b border-dotted border-slate-500 pb-1"></span>
              <span className="font-bold text-slate-700 ml-2">Ngày:</span>
              <span className="flex-1 border-b border-dotted border-slate-500 pb-1"></span>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3 bg-amber-50/80 px-3 py-1 rounded-xl border border-amber-200">
              <span className="font-bold text-amber-900">Điểm số:</span>
              <div className="w-12 h-7 bg-white rounded border border-amber-300 flex items-center justify-center font-black text-rose-600">
                /10
              </div>
              <span className="font-bold text-amber-900 ml-1">Lời phê:</span>
              <div className="w-20 border-b border-dotted border-amber-500 pb-1"></div>
            </div>
          </div>
        </div>

        {/* SECTION 1: QUICK VOCABULARY & GRAMMAR SUMMARY */}
        <div className="space-y-3 print-break-inside-avoid">
          <div className="flex items-center gap-2 bg-blue-100/70 p-2 rounded-xl text-blue-900">
            <span className="text-lg">📌</span>
            <h4 className="font-black text-sm sm:text-base uppercase tracking-wider">
              I. Tóm Tắt Trọng Tâm (Vocabulary & Structures)
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="font-bold text-blue-800 mb-1">📝 Từ Vựng Bé Nhớ:</p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                <li>
                  <span className="font-semibold text-slate-900">Unit 1:</span> pen, pencil, eraser, ruler, pencil case, backpack, book, notebook, desk, chair, circle, square, triangle, rectangle.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Unit 2:</span> paint, paper, chalk, yarn, glue, tape, red, yellow, blue, green, purple, orange, pink, black, white, gray, brown.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Unit 3:</span> Số đếm 1–12 (one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve); Đồ chơi (doll/dolls, ball/balls, car/cars, kite/kites, game/games, marble/marbles, puzzle/puzzles, card/cards).
                </li>
              </ul>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="font-bold text-emerald-800 mb-1">💡 Mẫu Câu Trọng Tâm:</p>
              <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                <li><span className="font-bold">What is it?</span> → It's a pen. / It's an eraser.</li>
                <li><span className="font-bold">It's a book.</span> It isn't a notebook.</li>
                <li><span className="font-bold">What's this?</span> → This is paint. / This is glue.</li>
                <li><span className="font-bold">What color is it?</span> → It's red. / It's blue.</li>
                <li><span className="font-bold">How old are you?</span> → I'm seven. / I'm eight.</li>
                <li><span className="font-bold">How many dolls?</span> → One doll. / Two dolls.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EXERCISE 1: MULTIPLE CHOICE */}
        <div className="space-y-4 print-break-inside-avoid">
          <div className="flex items-center justify-between bg-amber-100/70 p-2 rounded-xl text-amber-950">
            <h4 className="font-black text-sm sm:text-base uppercase tracking-wider">
              Part 1: Multiple Choice (Khoanh tròn đáp án đúng A, B hoặc C)
            </h4>
            <span className="text-xs font-bold text-amber-800">Mỗi câu 0.5 điểm</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredMC.map((q, idx) => (
              <div
                key={q.id}
                className="p-3.5 rounded-2xl border-2 border-slate-200 flex items-start gap-3 bg-white"
              >
                {q.illustration && (
                  <div className="shrink-0 p-1 bg-slate-50 rounded-xl border border-slate-200">
                    <ItemIllustration id={q.illustration} className="w-16 h-16" />
                  </div>
                )}
                <div className="space-y-2 flex-1">
                  <p className="text-sm font-black text-slate-900">
                    <span className="text-blue-600 mr-1">{idx + 1}.</span> {q.question}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-bold">
                    {q.options.map(opt => (
                      <span
                        key={opt.label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-300 rounded-lg"
                      >
                        <span className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center font-bold text-xs">
                          {opt.label}
                        </span>
                        <span>{opt.text}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXERCISE 2: TICK OR CROSS */}
        <div className="space-y-4 print-break-inside-avoid">
          <div className="flex items-center justify-between bg-emerald-100/70 p-2 rounded-xl text-emerald-950">
            <h4 className="font-black text-sm sm:text-base uppercase tracking-wider">
              Part 2: Look and write Tick (✓) or Cross (✗) vào ô trống
            </h4>
            <span className="text-xs font-bold text-emerald-800">Mỗi câu 0.5 điểm</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredTC.map((q, idx) => (
              <div
                key={q.id}
                className="p-3 rounded-2xl border-2 border-slate-200 flex flex-col items-center text-center bg-white space-y-2"
              >
                <ItemIllustration id={q.illustration} className="w-20 h-20" />
                <div className="flex items-center justify-between w-full pt-1 border-t border-slate-100">
                  <span className="text-sm font-black text-slate-800 capitalize">
                    {idx + 1}. {q.word}
                  </span>
                  <div className="w-7 h-7 border-2 border-slate-400 rounded-lg flex items-center justify-center font-bold text-slate-300">
                    [ &nbsp; ]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXERCISE 3: UNSCRAMBLE LETTERS */}
        <div className="space-y-4 print-break-inside-avoid">
          <div className="flex items-center justify-between bg-purple-100/70 p-2 rounded-xl text-purple-950">
            <h4 className="font-black text-sm sm:text-base uppercase tracking-wider">
              Part 3: Unscramble letters (Sắp xếp lại chữ cái thành từ đúng)
            </h4>
            <span className="text-xs font-bold text-purple-800">Mỗi câu 0.5 điểm</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredUN.map((q, idx) => (
              <div
                key={q.id}
                className="p-3 rounded-2xl border-2 border-slate-200 flex items-center gap-3 bg-white"
              >
                <ItemIllustration id={q.illustration} className="w-16 h-16 shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-700 text-sm">{idx + 1}.</span>
                    <span className="px-2.5 py-0.5 bg-purple-50 text-purple-800 rounded-md font-mono font-bold tracking-widest text-sm border border-purple-200">
                      {q.scrambled.join(' - ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 pt-1">
                    <span className="text-xs font-bold text-slate-500">Viết lại:</span>
                    <span className="flex-1 border-b-2 border-dotted border-slate-600 pb-0.5"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXERCISE 4: LOOK AND WRITE 1-WORD ANSWER */}
        <div className="space-y-4 print-break-inside-avoid">
          <div className="flex items-center justify-between bg-rose-100/70 p-2 rounded-xl text-rose-950">
            <h4 className="font-black text-sm sm:text-base uppercase tracking-wider">
              Part 4: Look at the picture and write ONE word answer (Nhìn hình viết 1 từ)
            </h4>
            <span className="text-xs font-bold text-rose-800">Mỗi câu 0.5 điểm</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredOW.map((q, idx) => (
              <div
                key={q.id}
                className="p-3 rounded-2xl border-2 border-slate-200 flex items-center gap-3 bg-white"
              >
                <ItemIllustration id={q.illustration} className="w-16 h-16 shrink-0" />
                <div className="space-y-1 flex-1">
                  <p className="text-xs font-semibold text-slate-600">
                    <span className="font-bold text-slate-900">{idx + 1}.</span> {q.prompt}
                  </p>
                  <div className="flex items-center gap-1 pt-1">
                    <span className="text-xs font-bold text-slate-500">Trả lời:</span>
                    <span className="flex-1 border-b-2 border-dotted border-slate-600 pb-0.5"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRAISE BANNER AT BOTTOM OF TEST */}
        <div className="p-4 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left print-break-inside-avoid">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌟</div>
            <div>
              <p className="font-black text-amber-950 text-sm sm:text-base">
                Cô chúc mừng bé đã hoàn thành tốt bài ôn tập!
              </p>
              <p className="text-xs text-amber-800">
                Hãy kiểm tra lại bài thật cẩn thận trước khi nộp cho thầy cô nhé!
              </p>
            </div>
          </div>
          <PraiseSticker type="super-star" size="md" />
        </div>

        {/* ================= ANSWER KEY SECTION ================= */}
        {showAnswerKey && (
          <div className="mt-8 pt-6 border-t-4 border-dashed border-slate-300 space-y-4 print-break-inside-avoid">
            <div className="flex items-center gap-2 bg-emerald-100 p-2.5 rounded-xl text-emerald-950">
              <CheckCircle2 size={20} className="text-emerald-700" />
              <h4 className="font-black text-base uppercase tracking-wider">
                ĐÁP ÁN CHI TIẾT DÀNH CHO GIÁO VIÊN & PHỤ HUYNH (ANSWER KEY)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-black text-blue-900 mb-1">Part 1: Multiple Choice</p>
                <ol className="list-decimal list-inside space-y-0.5">
                  {filteredMC.map(q => (
                    <li key={q.id}>
                      <span className="font-bold text-blue-700">Đáp án {q.correctAnswer}</span> ({q.options.find(o => o.label === q.correctAnswer)?.text})
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-black text-emerald-900 mb-1">Part 2: Tick or Cross</p>
                <ol className="list-decimal list-inside space-y-0.5">
                  {filteredTC.map(q => (
                    <li key={q.id}>
                      <span className="font-bold">{q.word}:</span>{' '}
                      <span className={q.isCorrect ? 'text-emerald-700 font-black' : 'text-rose-700 font-black'}>
                        {q.isCorrect ? 'Tick (✓) Đúng' : 'Cross (✗) Sai'}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-black text-purple-900 mb-1">Part 3: Unscramble letters</p>
                <ol className="list-decimal list-inside space-y-0.5">
                  {filteredUN.map(q => (
                    <li key={q.id}>
                      <span className="font-mono font-bold text-purple-700 uppercase">{q.word}</span> ({q.hintVi})
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-black text-rose-900 mb-1">Part 4: Write 1-word answer</p>
                <ol className="list-decimal list-inside space-y-0.5">
                  {filteredOW.map(q => (
                    <li key={q.id}>
                      <span className="font-bold text-rose-700 uppercase">{q.answer}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
