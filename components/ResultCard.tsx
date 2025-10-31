"use client";

import { Artist } from "@/lib/constants";

interface ResultCardProps {
  artist: Artist;
  score: number;
  maxScore: number;
}

export function ResultCard({ artist, score, maxScore }: ResultCardProps) {
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <div className="group w-full bg-gradient-to-br from-spotify-gray-900 to-spotify-gray-800 rounded-2xl p-6 md:p-8 border-2 border-spotify-gray-700 hover:border-spotify-green transition-all duration-300 hover:shadow-green-glow transform hover:scale-105 animate-scale-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-black text-white group-hover:text-spotify-green transition-colors duration-300">
            {artist.name}
          </h3>
          <p className="text-spotify-gray-500 text-sm font-semibold mt-1">
            {artist.title}
          </p>
        </div>
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
          {artist.emoji}
        </span>
      </div>

      {/* Score Bar */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-spotify-gray-500 uppercase tracking-widest">
            Compatibilidade
          </span>
          <span className="text-lg font-black bg-gradient-to-r from-spotify-green to-spotify-green-light bg-clip-text text-transparent">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-spotify-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-spotify-green to-spotify-green-light transition-all duration-700 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Characteristics */}
      <div className="space-y-3">
        <h4 className="text-xs font-black text-spotify-gray-500 uppercase tracking-widest">
          Características
        </h4>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {artist.characteristics.map((char, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-spotify-gray-800 to-spotify-gray-700 text-spotify-gray-400 text-xs font-semibold rounded-full border border-spotify-gray-600 group-hover:border-spotify-green group-hover:text-spotify-green transition-all duration-300"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
