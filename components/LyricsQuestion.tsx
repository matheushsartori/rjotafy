"use client";

import { useState } from "react";

interface LyricsOption {
  text: string;
}

interface LyricsQuestionProps {
  question: string;
  options: LyricsOption[];
  onSelect: (option: string) => void;
}

export function LyricsQuestion({
  question,
  options,
  onSelect,
}: LyricsQuestionProps) {
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
              className={`group relative p-8 md:p-10 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden ${
                hoveredIndex === index
                  ? "bg-gradient-to-r from-spotify-green/20 to-spotify-green/10 shadow-green-glow-lg border-2 border-spotify-green"
                  : "bg-gradient-to-br from-spotify-gray-900 to-spotify-gray-800 border-2 border-spotify-gray-700 hover:border-spotify-green"
              }`}
            >
              {/* Background gradient effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-spotify-green/5 to-transparent"
                    : ""
                }`}
              />

              {/* Content */}
              <div className="relative text-center">
                <p
                  className={`text-xl md:text-2xl font-bold leading-relaxed transition-colors duration-300 ${
                    hoveredIndex === index
                      ? "text-spotify-green"
                      : "text-white"
                  }`}
                >
                  <span className="text-spotify-gray-500 mr-2">"</span>
                  {option.text}
                  <span className="text-spotify-gray-500 ml-2">"</span>
                </p>
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
