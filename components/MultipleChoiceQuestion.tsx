"use client";

import { useState } from "react";

interface Option {
  text: string;
  emoji: string;
}

interface MultipleChoiceQuestionProps {
  question: string;
  options: Option[];
  onSelect: (option: string) => void;
}

export function MultipleChoiceQuestion({
  question,
  options,
  onSelect,
}: MultipleChoiceQuestionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12 animate-slide-up">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center leading-tight">
          {question}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelect(option.text)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden ${
                hoveredIndex === index
                  ? "bg-gradient-to-r from-spotify-gray-800 to-spotify-gray-700 shadow-green-glow-lg border-2 border-spotify-green"
                  : "bg-gradient-to-br from-spotify-gray-900 to-spotify-gray-800 border-2 border-spotify-gray-700 hover:border-spotify-green"
              }`}
            >
              {/* Background gradient effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-spotify-green/10 to-transparent"
                    : ""
                }`}
              />

              {/* Content */}
              <div className="relative flex items-center gap-6">
                <span className="text-5xl md:text-6xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {option.emoji}
                </span>
                <span className="text-xl md:text-2xl font-bold text-white text-left group-hover:text-spotify-green transition-colors duration-300">
                  {option.text}
                </span>
              </div>

              {/* Hover indicator */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-spotify-green to-spotify-green-light transition-all duration-300 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
