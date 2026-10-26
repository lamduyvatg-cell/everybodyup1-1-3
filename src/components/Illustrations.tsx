import React from 'react';

export type IllustrationId =
  // Unit 1
  | 'pen'
  | 'pencil'
  | 'eraser'
  | 'ruler'
  | 'pencil-case'
  | 'backpack'
  | 'book'
  | 'notebook'
  | 'desk'
  | 'chair'
  | 'circle'
  | 'square'
  | 'triangle'
  | 'rectangle'
  // Unit 2
  | 'paint'
  | 'paper'
  | 'chalk'
  | 'yarn'
  | 'glue'
  | 'tape'
  | 'color-red'
  | 'color-yellow'
  | 'color-blue'
  | 'color-green'
  | 'color-purple'
  | 'color-orange'
  | 'color-pink'
  | 'color-white'
  | 'color-black'
  // Unit 3 Numbers
  | 'num-1'
  | 'num-2'
  | 'num-3'
  | 'num-4'
  | 'num-5'
  | 'num-6'
  | 'num-7'
  | 'num-8'
  | 'num-9'
  | 'num-10'
  | 'num-11'
  | 'num-12'
  // Unit 3 Birthday & Toys
  | 'cake-7'
  | 'cake-8'
  | 'doll'
  | 'dolls'
  | 'ball'
  | 'balls'
  | 'car'
  | 'cars'
  | 'kite'
  | 'kites'
  | 'game'
  | 'games'
  | 'marble'
  | 'marbles'
  | 'puzzle'
  | 'card'
  | 'cards';

interface IllustrationProps {
  id: IllustrationId | string;
  className?: string;
  size?: number | string;
}

export const ItemIllustration: React.FC<IllustrationProps> = ({ id, className = 'w-20 h-20', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  switch (id) {
    // UNIT 1: SCHOOL SUPPLIES & SHAPES
    case 'pen':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
          <path d="M68 22L78 32L38 72L22 78L28 62L68 22Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" strokeLinejoin="round" />
          <path d="M62 28L72 38" stroke="#93C5FD" strokeWidth="2" />
          <path d="M22 78L28 62L38 72L22 78Z" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="24" cy="76" r="2" fill="#1E293B" />
          <rect x="58" y="32" width="5" height="18" rx="2" fill="#60A5FA" />
        </svg>
      );

    case 'pencil':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" />
          <path d="M68 20L80 32L34 78L18 82L22 66L68 20Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
          <line x1="38" y1="36" x2="64" y2="62" stroke="#F59E0B" strokeWidth="2" />
          <path d="M68 20L80 32L74 38L62 26L68 20Z" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
          <path d="M18 82L22 66L34 78L18 82Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
          <polygon points="18,82 23,77 20,74" fill="#374151" />
        </svg>
      );

    case 'eraser':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FDF2F8" stroke="#EC4899" strokeWidth="3" />
          <path d="M24 56L44 32L78 48L58 72L24 56Z" fill="#F472B6" stroke="#DB2777" strokeWidth="2.5" rx="4" />
          <path d="M44 32L54 20L88 36L78 48L44 32Z" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2" />
          <path d="M78 48L88 36L68 60L58 72L78 48Z" fill="#BE185D" stroke="#9D174D" strokeWidth="2" />
          <path d="M24 56L38 40L48 54L34 70L24 56Z" fill="#E2E8F0" opacity="0.8" />
        </svg>
      );

    case 'ruler':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF2F2" stroke="#EF4444" strokeWidth="3" />
          <rect x="18" y="40" width="64" height="20" rx="3" fill="#EF4444" stroke="#B91C1C" strokeWidth="2.5" />
          {/* Tick marks */}
          <line x1="26" y1="40" x2="26" y2="49" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="34" y1="40" x2="34" y2="46" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="42" y1="40" x2="42" y2="49" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="50" y1="40" x2="50" y2="46" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="58" y1="40" x2="58" y2="49" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="66" y1="40" x2="66" y2="46" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="74" y1="40" x2="74" y2="49" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );

    case 'pencil-case':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F0FDF4" stroke="#10B981" strokeWidth="3" />
          <rect x="20" y="38" width="60" height="28" rx="8" fill="#10B981" stroke="#047857" strokeWidth="2.5" />
          <line x1="22" y1="44" x2="78" y2="44" stroke="#FDE047" strokeWidth="3" strokeDasharray="2 2" />
          <circle cx="74" cy="44" r="3.5" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          <rect x="32" y="52" width="36" height="8" rx="3" fill="#34D399" />
          {/* Pencil tip peeking */}
          <path d="M40 38L44 26L48 38Z" fill="#FBBF24" />
        </svg>
      );

    case 'backpack':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#ECFDF5" stroke="#059669" strokeWidth="3" />
          {/* Handle */}
          <path d="M40 28C40 22 60 22 60 28" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
          {/* Body */}
          <rect x="26" y="28" width="48" height="48" rx="14" fill="#10B981" stroke="#047857" strokeWidth="2.5" />
          {/* Front Pocket */}
          <rect x="32" y="48" width="36" height="22" rx="6" fill="#34D399" stroke="#047857" strokeWidth="2" />
          <line x1="36" y1="54" x2="64" y2="54" stroke="#FBBF24" strokeWidth="2.5" />
          {/* Side pockets */}
          <rect x="22" y="42" width="6" height="20" rx="3" fill="#047857" />
          <rect x="72" y="42" width="6" height="20" rx="3" fill="#047857" />
        </svg>
      );

    case 'book':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
          <rect x="24" y="26" width="50" height="48" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2.5" />
          <rect x="24" y="26" width="10" height="48" fill="#1D4ED8" rx="2" />
          <rect x="40" y="36" width="26" height="6" rx="2" fill="#93C5FD" />
          <rect x="40" y="48" width="20" height="4" rx="1" fill="#DBEAFE" />
          <rect x="40" y="56" width="24" height="4" rx="1" fill="#DBEAFE" />
          <path d="M24 74L74 74C76 74 77 72 77 70L77 68L24 68Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
        </svg>
      );

    case 'notebook':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FDF4FF" stroke="#A855F7" strokeWidth="3" />
          <rect x="28" y="24" width="48" height="52" rx="5" fill="#84CC16" stroke="#4D7C0F" strokeWidth="2.5" />
          {/* Spiral binding rings */}
          <circle cx="28" cy="32" r="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <circle cx="28" cy="44" r="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <circle cx="28" cy="56" r="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <circle cx="28" cy="68" r="3" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <rect x="38" y="34" width="30" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="38" y="44" width="30" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />
          <rect x="38" y="54" width="22" height="4" rx="1" fill="#FFFFFF" opacity="0.8" />
        </svg>
      );

    case 'desk':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FFFBEB" stroke="#D97706" strokeWidth="3" />
          {/* Desk Top */}
          <polygon points="18,44 76,40 84,52 24,56" fill="#D97706" stroke="#92400E" strokeWidth="2" />
          {/* Storage cubby */}
          <polygon points="24,56 82,52 82,58 24,62" fill="#B45309" stroke="#92400E" strokeWidth="1.5" />
          {/* Legs */}
          <line x1="26" y1="62" x2="24" y2="82" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          <line x1="38" y1="58" x2="38" y2="76" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          <line x1="74" y1="58" x2="74" y2="76" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          <line x1="82" y1="58" x2="82" y2="82" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'chair':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="3" />
          {/* Backrest */}
          <rect x="34" y="24" width="32" height="22" rx="4" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <line x1="38" y1="46" x2="38" y2="58" stroke="#64748B" strokeWidth="3" />
          <line x1="62" y1="46" x2="62" y2="58" stroke="#64748B" strokeWidth="3" />
          {/* Seat */}
          <ellipse cx="50" cy="58" rx="20" ry="7" fill="#FBBF24" stroke="#B45309" strokeWidth="2" />
          {/* Legs */}
          <line x1="36" y1="62" x2="32" y2="82" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="64" y1="62" x2="68" y2="82" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="44" y1="63" x2="42" y2="76" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="56" y1="63" x2="58" y2="76" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // SHAPES
    case 'circle':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
          <circle cx="50" cy="50" r="30" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="3" />
          {/* Cute face */}
          <circle cx="42" cy="46" r="3.5" fill="#FFFFFF" />
          <circle cx="58" cy="46" r="3.5" fill="#FFFFFF" />
          <path d="M44 56C47 60 53 60 56 56" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'square':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF2F2" stroke="#EF4444" strokeWidth="3" />
          <rect x="25" y="25" width="50" height="50" rx="8" fill="#EF4444" stroke="#B91C1C" strokeWidth="3" />
          {/* Cute face */}
          <circle cx="40" cy="46" r="3.5" fill="#FFFFFF" />
          <circle cx="60" cy="46" r="3.5" fill="#FFFFFF" />
          <path d="M43 57C46 61 54 61 57 57" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'triangle':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEFCE8" stroke="#EAB308" strokeWidth="3" />
          <path d="M50 20L78 74H22L50 20Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="3" strokeLinejoin="round" />
          {/* Cute face */}
          <circle cx="44" cy="52" r="3" fill="#713F12" />
          <circle cx="56" cy="52" r="3" fill="#713F12" />
          <path d="M46 62C48 65 52 65 54 62" stroke="#713F12" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'rectangle':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FAF5FF" stroke="#A855F7" strokeWidth="3" />
          <rect x="18" y="32" width="64" height="36" rx="6" fill="#A855F7" stroke="#7E22CE" strokeWidth="3" />
          {/* Cute face */}
          <circle cx="42" cy="48" r="3.5" fill="#FFFFFF" />
          <circle cx="58" cy="48" r="3.5" fill="#FFFFFF" />
          <path d="M45 56C48 60 52 60 55 56" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // UNIT 2: ART SUPPLIES & COLORS
    case 'paint':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF2F2" stroke="#EF4444" strokeWidth="3" />
          {/* Paint jar */}
          <rect x="28" y="42" width="44" height="38" rx="8" fill="#EF4444" stroke="#B91C1C" strokeWidth="2.5" />
          <rect x="34" y="32" width="32" height="10" rx="3" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          {/* Label */}
          <rect x="36" y="52" width="28" height="16" rx="3" fill="#FFFFFF" />
          <path d="M44 60C46 57 54 57 56 60" stroke="#EF4444" strokeWidth="2" />
          {/* Splatter & Brush */}
          <path d="M68 22L76 14L84 22L76 30L68 22Z" fill="#F59E0B" />
          <path d="M72 26L58 40" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'paper':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F0FDF4" stroke="#22C55E" strokeWidth="3" />
          {/* Sheets overlapping */}
          <rect x="22" y="24" width="36" height="46" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" transform="rotate(-8 22 24)" />
          <rect x="34" y="24" width="36" height="46" rx="4" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" transform="rotate(6 34 24)" />
          <rect x="30" y="28" width="36" height="46" rx="4" fill="#EC4899" stroke="#BE185D" strokeWidth="2" />
          <line x1="38" y1="40" x2="58" y2="40" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="38" y1="48" x2="54" y2="48" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      );

    case 'chalk':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FFF1F2" stroke="#FB7185" strokeWidth="3" />
          <rect x="22" y="38" width="14" height="40" rx="3" fill="#F43F5E" stroke="#BE123C" strokeWidth="1.5" transform="rotate(-15 22 38)" />
          <rect x="42" y="32" width="14" height="46" rx="3" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          <rect x="64" y="36" width="14" height="42" rx="3" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" transform="rotate(12 64 36)" />
        </svg>
      );

    case 'yarn':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#EFF6FF" stroke="#0284C7" strokeWidth="3" />
          <circle cx="48" cy="48" r="26" fill="#0284C7" stroke="#0369A1" strokeWidth="2.5" />
          {/* Texture lines */}
          <path d="M30 40C40 32 58 36 68 46" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M26 50C36 58 54 62 66 52" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 26C46 36 46 60 40 70" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
          {/* Loose thread */}
          <path d="M68 56C76 62 70 74 82 76" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'glue':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F8FAFC" stroke="#64748B" strokeWidth="3" />
          {/* Glue Cap */}
          <polygon points="46,16 54,16 57,28 43,28" fill="#F97316" stroke="#C2410C" strokeWidth="2" />
          <rect x="42" y="28" width="16" height="6" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
          {/* Bottle */}
          <rect x="32" y="34" width="36" height="46" rx="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="2.5" />
          {/* Label */}
          <rect x="36" y="44" width="28" height="24" rx="4" fill="#3B82F6" />
          <polygon points="44,52 56,52 50,62" fill="#F97316" />
        </svg>
      );

    case 'tape':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF2F2" stroke="#EF4444" strokeWidth="3" />
          <path d="M22 66C20 48 34 30 52 30C66 30 76 38 80 50L84 66H22Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2.5" rx="6" />
          {/* Inner roll */}
          <circle cx="46" cy="48" r="14" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="46" cy="48" r="7" fill="#EF4444" />
          {/* Dispenser blade */}
          <rect x="76" y="58" width="6" height="8" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
        </svg>
      );

    // COLORS
    case 'color-red':
    case 'color-yellow':
    case 'color-blue':
    case 'color-green':
    case 'color-purple':
    case 'color-orange':
    case 'color-pink':
    case 'color-white':
    case 'color-black':
    case 'color-gray':
    case 'color-brown': {
      const colorMap: Record<string, { fill: string; stroke: string; label: string; textDark?: boolean }> = {
        'color-red': { fill: '#EF4444', stroke: '#B91C1C', label: 'Red' },
        'color-yellow': { fill: '#FACC15', stroke: '#CA8A04', label: 'Yellow', textDark: true },
        'color-blue': { fill: '#3B82F6', stroke: '#1D4ED8', label: 'Blue' },
        'color-green': { fill: '#22C55E', stroke: '#15803D', label: 'Green' },
        'color-purple': { fill: '#A855F7', stroke: '#7E22CE', label: 'Purple' },
        'color-orange': { fill: '#F97316', stroke: '#C2410C', label: 'Orange' },
        'color-pink': { fill: '#EC4899', stroke: '#BE185D', label: 'Pink' },
        'color-white': { fill: '#FFFFFF', stroke: '#94A3B8', label: 'White', textDark: true },
        'color-black': { fill: '#1E293B', stroke: '#0F172A', label: 'Black' },
        'color-gray': { fill: '#94A3B8', stroke: '#475569', label: 'Gray' },
        'color-brown': { fill: '#854D0E', stroke: '#583107', label: 'Brown' },
      };
      const info = colorMap[id] || colorMap['color-red'];
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F8FAFC" stroke={info.stroke} strokeWidth="2.5" />
          {/* Paint Splat */}
          <path
            d="M50 20C62 20 66 30 76 34C86 38 88 52 82 62C76 72 68 80 50 80C32 80 22 72 18 60C14 48 18 36 28 32C36 28 40 20 50 20Z"
            fill={info.fill}
            stroke={info.stroke}
            strokeWidth="2.5"
          />
          <circle cx="34" cy="22" r="4" fill={info.fill} />
          <circle cx="80" cy="26" r="3" fill={info.fill} />
          <circle cx="82" cy="74" r="4" fill={info.fill} />
        </svg>
      );
    }

    // UNIT 3: NUMBERS 1 - 12
    case 'num-1':
    case 'num-2':
    case 'num-3':
    case 'num-4':
    case 'num-5':
    case 'num-6':
    case 'num-7':
    case 'num-8':
    case 'num-9':
    case 'num-10':
    case 'num-11':
    case 'num-12': {
      const numValue = parseInt(id.replace('num-', ''), 10);
      const colorSchemes: Record<number, { bg: string; border: string; text: string; dot: string }> = {
        1: { bg: '#FEF3C7', border: '#F59E0B', text: '#B45309', dot: '#F59E0B' },
        2: { bg: '#ECFDF5', border: '#10B981', text: '#047857', dot: '#10B981' },
        3: { bg: '#EFF6FF', border: '#3B82F6', text: '#1D4ED8', dot: '#3B82F6' },
        4: { bg: '#FAF5FF', border: '#A855F7', text: '#7E22CE', dot: '#A855F7' },
        5: { bg: '#FDF2F8', border: '#EC4899', text: '#BE185D', dot: '#EC4899' },
        6: { bg: '#FFF7ED', border: '#F97316', text: '#C2410C', dot: '#F97316' },
        7: { bg: '#FEFCE8', border: '#EAB308', text: '#A16207', dot: '#EAB308' },
        8: { bg: '#FEF2F2', border: '#EF4444', text: '#B91C1C', dot: '#EF4444' },
        9: { bg: '#EEF2FF', border: '#6366F1', text: '#4338CA', dot: '#6366F1' },
        10: { bg: '#F0FDFA', border: '#14B8A6', text: '#0F766E', dot: '#14B8A6' },
        11: { bg: '#F0FDF4', border: '#22C55E', text: '#15803D', dot: '#22C55E' },
        12: { bg: '#FFF1F2', border: '#F43F5E', text: '#BE123C', dot: '#F43F5E' },
      };
      const scheme = colorSchemes[numValue] || colorSchemes[1];
      const dots = Array.from({ length: Math.min(numValue, 12) });

      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Card Base */}
          <rect x="8" y="8" width="84" height="84" rx="20" fill={scheme.bg} stroke={scheme.border} strokeWidth="3" />
          {/* Inner Badge */}
          <circle cx="50" cy="46" r="28" fill="#FFFFFF" stroke={scheme.border} strokeWidth="2" strokeDasharray="3 2" />
          {/* Number text */}
          <text
            x="50"
            y={numValue >= 10 ? '56' : '58'}
            textAnchor="middle"
            fontSize={numValue >= 10 ? '36' : '44'}
            fontWeight="900"
            fill={scheme.text}
            fontFamily="sans-serif"
          >
            {numValue}
          </text>
          {/* Visual Counting Dots at bottom */}
          <g transform="translate(14, 80)">
            {dots.map((_, i) => (
              <circle
                key={i}
                cx={(i * 72) / (numValue > 1 ? numValue - 1 : 1)}
                cy="0"
                r={numValue > 8 ? '2' : '2.5'}
                fill={scheme.dot}
              />
            ))}
          </g>
        </svg>
      );
    }

    // UNIT 3: BIRTHDAY & TOYS
    case 'cake-7':
    case 'cake-8': {
      const candleCount = id === 'cake-7' ? 7 : 8;
      const candlePositions = Array.from({ length: candleCount }).map((_, i) => 26 + (i * 48) / (candleCount - 1));
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF2F2" stroke="#F43F5E" strokeWidth="3" />
          {/* Plate */}
          <ellipse cx="50" cy="80" rx="36" ry="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          {/* Cake Body */}
          <rect x="22" y="52" width="56" height="26" rx="6" fill="#F472B6" stroke="#DB2777" strokeWidth="2" />
          {/* Cream frosting layer */}
          <path d="M22 56C26 60 30 60 34 56C38 60 42 60 46 56C50 60 54 60 58 56C62 60 66 60 70 56C74 60 78 60 78 56V52H22V56Z" fill="#FFFFFF" />
          {/* Cherries/dots */}
          <circle cx="36" cy="66" r="3" fill="#FDE047" />
          <circle cx="50" cy="66" r="3" fill="#FDE047" />
          <circle cx="64" cy="66" r="3" fill="#FDE047" />
          {/* Candles */}
          {candlePositions.map((x, i) => (
            <g key={i}>
              <line x1={x} y1="36" x2={x} y2="52" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx={x} cy="32" r="2.5" fill="#F59E0B" />
              <path d={`M${x} 28C${x - 2} 31 ${x + 2} 31 ${x} 28Z`} fill="#EF4444" />
            </g>
          ))}
        </svg>
      );
    }

    case 'doll':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FFF1F2" stroke="#FB7185" strokeWidth="3" />
          {/* Pigtails */}
          <circle cx="34" cy="36" r="7" fill="#B45309" />
          <circle cx="66" cy="36" r="7" fill="#B45309" />
          {/* Head */}
          <circle cx="50" cy="36" r="14" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
          <circle cx="45" cy="35" r="2" fill="#1E293B" />
          <circle cx="55" cy="35" r="2" fill="#1E293B" />
          <path d="M47 41C49 43 51 43 53 41" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx="43" cy="39" rx="2" ry="1" fill="#FDA4AF" />
          <ellipse cx="57" cy="39" rx="2" ry="1" fill="#FDA4AF" />
          {/* Dress */}
          <polygon points="50,48 30,76 70,76" fill="#EC4899" stroke="#BE185D" strokeWidth="2" />
          <circle cx="50" cy="58" r="2" fill="#FFFFFF" />
          <circle cx="50" cy="66" r="2" fill="#FFFFFF" />
          {/* Legs */}
          <line x1="42" y1="76" x2="42" y2="86" stroke="#FED7AA" strokeWidth="3" strokeLinecap="round" />
          <line x1="58" y1="76" x2="58" y2="86" stroke="#FED7AA" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'dolls':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FFF1F2" stroke="#FB7185" strokeWidth="3" />
          {/* Doll 1 */}
          <g transform="scale(0.7) translate(14, 16)">
            <circle cx="34" cy="36" r="6" fill="#B45309" />
            <circle cx="66" cy="36" r="6" fill="#B45309" />
            <circle cx="50" cy="36" r="12" fill="#FED7AA" />
            <polygon points="50,48 32,74 68,74" fill="#EC4899" stroke="#BE185D" strokeWidth="2" />
          </g>
          {/* Doll 2 */}
          <g transform="scale(0.7) translate(58, 26)">
            <circle cx="34" cy="36" r="6" fill="#78350F" />
            <circle cx="66" cy="36" r="6" fill="#78350F" />
            <circle cx="50" cy="36" r="12" fill="#FED7AA" />
            <polygon points="50,48 32,74 68,74" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'ball':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
          <circle cx="50" cy="50" r="28" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2.5" />
          {/* Soccer pentagons */}
          <polygon points="50,38 58,44 55,54 45,54 42,44" fill="#1E293B" />
          <line x1="50" y1="38" x2="50" y2="22" stroke="#1E293B" strokeWidth="2" />
          <line x1="58" y1="44" x2="72" y2="38" stroke="#1E293B" strokeWidth="2" />
          <line x1="55" y1="54" x2="68" y2="68" stroke="#1E293B" strokeWidth="2" />
          <line x1="45" y1="54" x2="32" y2="68" stroke="#1E293B" strokeWidth="2" />
          <line x1="42" y1="44" x2="28" y2="38" stroke="#1E293B" strokeWidth="2" />
        </svg>
      );

    case 'balls':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="3" />
          {/* Soccer ball */}
          <circle cx="36" cy="46" r="18" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
          <polygon points="36,40 41,44 39,49 33,49 31,44" fill="#1E293B" />
          {/* Beach ball */}
          <circle cx="64" cy="56" r="16" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
          <path d="M54 48C60 52 64 64 64 72" stroke="#EF4444" strokeWidth="3" />
          <path d="M72 44C66 52 62 64 64 72" stroke="#3B82F6" strokeWidth="3" />
        </svg>
      );

    case 'car':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF2F2" stroke="#EF4444" strokeWidth="3" />
          {/* Car body */}
          <path d="M22 60L28 44C30 38 36 34 44 34H60C66 34 72 38 76 44L82 60H22Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2.5" />
          <rect x="18" y="56" width="66" height="14" rx="4" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2" />
          {/* Windows */}
          <path d="M34 44H48V54H30L34 44Z" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1.5" />
          <path d="M52 44H66L70 54H52V44Z" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1.5" />
          {/* Wheels */}
          <circle cx="34" cy="70" r="8" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="34" cy="70" r="3" fill="#CBD5E1" />
          <circle cx="68" cy="70" r="8" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="68" cy="70" r="3" fill="#CBD5E1" />
          {/* Headlight */}
          <circle cx="82" cy="62" r="2.5" fill="#FDE047" />
        </svg>
      );

    case 'cars':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FEF2F2" stroke="#EF4444" strokeWidth="3" />
          {/* Blue car */}
          <g transform="scale(0.65) translate(16, 20)">
            <path d="M22 60L28 44C30 38 36 34 44 34H60C66 34 72 38 76 44L82 60H22Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2.5" />
            <rect x="18" y="56" width="66" height="14" rx="4" fill="#2563EB" />
            <circle cx="34" cy="70" r="8" fill="#1E293B" />
            <circle cx="68" cy="70" r="8" fill="#1E293B" />
          </g>
          {/* Red car */}
          <g transform="scale(0.65) translate(40, 56)">
            <path d="M22 60L28 44C30 38 36 34 44 34H60C66 34 72 38 76 44L82 60H22Z" fill="#EF4444" stroke="#B91C1C" strokeWidth="2.5" />
            <rect x="18" y="56" width="66" height="14" rx="4" fill="#DC2626" />
            <circle cx="34" cy="70" r="8" fill="#1E293B" />
            <circle cx="68" cy="70" r="8" fill="#1E293B" />
          </g>
        </svg>
      );

    case 'kite':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F0FDFA" stroke="#0D9488" strokeWidth="3" />
          {/* Diamond Kite */}
          <polygon points="50,18 74,44 50,70 26,44" fill="#F43F5E" stroke="#BE123C" strokeWidth="2.5" />
          <polygon points="50,18 74,44 50,44" fill="#FB7185" />
          <polygon points="26,44 50,44 50,70" fill="#FDA4AF" />
          <line x1="50" y1="18" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="26" y1="44" x2="74" y2="44" stroke="#FFFFFF" strokeWidth="2" />
          {/* Tail */}
          <path d="M50 70C54 76 46 80 52 86" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <polygon points="50,74 54,77 48,77" fill="#10B981" />
          <polygon points="46,80 50,83 44,83" fill="#3B82F6" />
        </svg>
      );

    case 'kites':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F0FDFA" stroke="#0D9488" strokeWidth="3" />
          <g transform="scale(0.6) translate(16, 12)">
            <polygon points="50,18 74,44 50,70 26,44" fill="#F43F5E" stroke="#BE123C" strokeWidth="2" />
            <path d="M50 70C54 76 46 80 52 86" stroke="#F59E0B" strokeWidth="2" />
          </g>
          <g transform="scale(0.6) translate(60, 36)">
            <polygon points="50,18 74,44 50,70 26,44" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
            <path d="M50 70C54 76 46 80 52 86" stroke="#F59E0B" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'game':
    case 'games':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FDF4FF" stroke="#A855F7" strokeWidth="3" />
          {/* Board game box / path */}
          <rect x="22" y="26" width="56" height="46" rx="6" fill="#A855F7" stroke="#7E22CE" strokeWidth="2.5" />
          <rect x="28" y="32" width="44" height="34" rx="4" fill="#FEF08A" />
          {/* Path tiles */}
          <rect x="32" y="36" width="8" height="8" rx="2" fill="#EF4444" />
          <rect x="42" y="36" width="8" height="8" rx="2" fill="#3B82F6" />
          <rect x="52" y="36" width="8" height="8" rx="2" fill="#10B981" />
          <rect x="52" y="46" width="8" height="8" rx="2" fill="#F97316" />
          <rect x="42" y="54" width="8" height="8" rx="2" fill="#EC4899" />
          <rect x="32" y="54" width="8" height="8" rx="2" fill="#8B5CF6" />
          {/* Dice */}
          <rect x="58" y="60" width="16" height="16" rx="3" fill="#FFFFFF" stroke="#334155" strokeWidth="1.5" />
          <circle cx="62" cy="64" r="1.5" fill="#EF4444" />
          <circle cx="70" cy="72" r="1.5" fill="#EF4444" />
          <circle cx="66" cy="68" r="1.5" fill="#EF4444" />
        </svg>
      );

    case 'marble':
    case 'marbles':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" />
          {/* Marble 1 */}
          <circle cx="40" cy="45" r="16" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
          <path d="M30 40C36 34 46 44 50 48" stroke="#86EFAC" strokeWidth="3" strokeLinecap="round" />
          <circle cx="36" cy="38" r="2.5" fill="#FFFFFF" opacity="0.8" />
          {/* Marble 2 */}
          <circle cx="62" cy="58" r="14" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" />
          <path d="M54 55C58 50 66 60 70 62" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="58" cy="52" r="2" fill="#FFFFFF" opacity="0.8" />
        </svg>
      );

    case 'puzzle':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="3" />
          {/* Puzzle piece 1 (Blue) */}
          <path
            d="M30 30H46C46 34 50 36 50 30H54V50H46C46 46 42 46 42 50H30V30Z"
            fill="#3B82F6"
            stroke="#1D4ED8"
            strokeWidth="2"
          />
          {/* Puzzle piece 2 (Red) */}
          <path
            d="M54 30H70V50H58C58 46 54 46 54 50H50V30H54Z"
            fill="#EF4444"
            stroke="#B91C1C"
            strokeWidth="2"
          />
          {/* Puzzle piece 3 (Yellow) */}
          <path
            d="M30 50H42C42 46 46 46 46 50H50V70H30V50Z"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="2"
          />
          {/* Puzzle piece 4 (Green) */}
          <path
            d="M50 50H54C54 46 58 46 58 50H70V70H50V50Z"
            fill="#22C55E"
            stroke="#15803D"
            strokeWidth="2"
          />
        </svg>
      );

    case 'card':
    case 'cards':
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#EFF6FF" stroke="#2563EB" strokeWidth="3" />
          {/* Back card */}
          <rect x="22" y="26" width="34" height="48" rx="4" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="2" transform="rotate(-12 22 26)" />
          {/* Front card */}
          <rect x="42" y="26" width="34" height="48" rx="4" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" transform="rotate(8 42 26)" />
          <path d="M58 46C56 42 52 42 50 45C48 42 44 42 42 45C42 50 50 56 50 56C50 56 58 50 58 46Z" fill="#DC2626" transform="rotate(8 50 48)" />
          <circle cx="58" cy="35" r="2" fill="#DC2626" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="3" />
          <text x="50" y="58" textAnchor="middle" fontSize="32" fill="#64748B" fontWeight="bold">?</text>
        </svg>
      );
  }
};
