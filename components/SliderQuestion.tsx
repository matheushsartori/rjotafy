"use client";

import { useState } from "react";

interface SliderQuestionProps {
  question: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

export function SliderQuestion({
  question,
  min,
  max,
  value,
  onChange,
  onNext,
}: SliderQuestionProps) {
  const [isFocused, setIsFocused] = useState(false);
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 animate-slide-up">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center leading-tight">
          {question}
        </h2>

        <div className="space-y-8">
          {/* Slider Container */}
          <div className="space-y-6">
            <div className="relative pt-2">
              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full h-2 bg-gradient-to-r from-spotify-gray-700 to-spotify-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500 slider"
                style={{
                  background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${percentage}%, #404040 ${percentage}%, #404040 100%)`,
                } as React.CSSProperties}
              />
            </div>

            {/* Value Display */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-spotify-gray-500 uppercase tracking-widest">
                {min}
              </span>
              <div
                className={`transition-all duration-300 ${
                  isFocused ? "scale-110" : "scale-100"
                }`}
              >
                <span className="text-6xl font-black bg-gradient-to-r from-spotify-green to-spotify-green-light bg-clip-text text-transparent">
                  {value}
                </span>
              </div>
              <span className="text-sm font-semibold text-spotify-gray-500 uppercase tracking-widest">
                {max}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="w-full py-4 px-6 bg-gradient-to-r from-spotify-green to-spotify-green-light hover:from-spotify-green-light hover:to-spotify-green text-black font-black text-lg rounded-full transition-all duration-300 shadow-spotify-md hover:shadow-green-glow-lg transform hover:scale-105 active:scale-95"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
