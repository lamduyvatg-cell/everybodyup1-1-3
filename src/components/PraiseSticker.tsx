import React from 'react';
import { Star, Award, Heart, Sparkles, ThumbsUp } from 'lucide-react';

export type PraiseType = 'good-job' | 'super-star' | 'awesome' | 'well-done' | 'excellent';

interface PraiseStickerProps {
  type?: PraiseType;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const PraiseSticker: React.FC<PraiseStickerProps> = ({
  type = 'good-job',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-xs py-1 px-2.5 gap-1.5',
    md: 'text-sm py-1.5 px-3.5 gap-2',
    lg: 'text-lg py-2 px-5 gap-2.5',
  };

  const starSizes = {
    sm: 16,
    md: 22,
    lg: 32,
  };

  switch (type) {
    case 'super-star':
      return (
        <div
          className={`inline-flex items-center font-bold text-amber-900 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 border-2 border-amber-400 rounded-full shadow-md animate-bounce-gentle select-none ${sizeClasses[size]} ${className}`}
        >
          <div className="relative">
            <Star size={starSizes[size]} className="fill-amber-400 text-amber-600 animate-pulse" />
            <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-600 animate-ping" />
          </div>
          {showText && <span>Super Star! 🌟</span>}
        </div>
      );

    case 'awesome':
      return (
        <div
          className={`inline-flex items-center font-bold text-emerald-900 bg-gradient-to-r from-emerald-200 via-green-300 to-teal-200 border-2 border-emerald-400 rounded-full shadow-md animate-bounce-gentle select-none ${sizeClasses[size]} ${className}`}
        >
          <ThumbsUp size={starSizes[size]} className="text-emerald-700 fill-emerald-400" />
          {showText && <span>Awesome! 👍</span>}
        </div>
      );

    case 'well-done':
      return (
        <div
          className={`inline-flex items-center font-bold text-purple-900 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 border-2 border-purple-400 rounded-full shadow-md animate-bounce-gentle select-none ${sizeClasses[size]} ${className}`}
        >
          <Award size={starSizes[size]} className="text-purple-700 fill-purple-300" />
          {showText && <span>Well Done! 🏆</span>}
        </div>
      );

    case 'excellent':
      return (
        <div
          className={`inline-flex items-center font-bold text-rose-900 bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 border-2 border-rose-400 rounded-full shadow-md animate-bounce-gentle select-none ${sizeClasses[size]} ${className}`}
        >
          <Heart size={starSizes[size]} className="text-rose-600 fill-rose-400" />
          {showText && <span>Bé giỏi quá! ❤️</span>}
        </div>
      );

    case 'good-job':
    default:
      return (
        <div
          className={`inline-flex items-center font-bold text-amber-900 bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-200 border-2 border-amber-500 rounded-full shadow-md animate-bounce-gentle select-none ${sizeClasses[size]} ${className}`}
        >
          <div className="flex -space-x-1">
            <Star size={starSizes[size]} className="fill-yellow-400 text-amber-600 drop-shadow" />
            <Star size={starSizes[size]} className="fill-yellow-400 text-amber-600 drop-shadow -mt-1 scale-110" />
            <Star size={starSizes[size]} className="fill-yellow-400 text-amber-600 drop-shadow" />
          </div>
          {showText && <span>Good job! ⭐</span>}
        </div>
      );
  }
};

export const GoldStarBadge: React.FC<{ count: number; className?: string }> = ({ count, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 bg-amber-100/90 border-2 border-amber-400 text-amber-900 px-3.5 py-1.5 rounded-full font-bold shadow-sm ${className}`}>
      <Star size={22} className="fill-amber-400 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
      <span className="text-base text-amber-800">
        <span className="text-amber-900 text-lg font-extrabold">{count}</span> Sao vàng
      </span>
    </div>
  );
};
