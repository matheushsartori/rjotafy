"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ResultCard } from "@/components/ResultCard";
import { MusicCard } from "@/components/MusicCard";
import { Footer } from "@/components/Footer";
import { artists } from "@/lib/constants";
import { QuizResult } from "@/lib/types";

export default function ResultPage() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get result from session storage
    const storedResult = sessionStorage.getItem("quizResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <AnimatedBackground />
        <main className="relative min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="text-7xl animate-bounce">🎵</div>
            <p className="text-spotify-gray-500 text-lg font-semibold">
              Carregando seu resultado...
            </p>
          </div>
        </main>
      </>
    );
  }

  if (!result) {
    return (
      <>
        <AnimatedBackground />
        <main className="relative min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 animate-fade-in">
            <p className="text-spotify-gray-500 text-lg">
              Nenhum resultado encontrado
            </p>
            <Link
              href="/quiz"
              className="inline-block px-8 py-3 bg-gradient-to-r from-spotify-green to-spotify-green-light hover:from-spotify-green-light hover:to-spotify-green text-black font-bold rounded-full transition-all duration-300 shadow-spotify-md hover:shadow-green-glow-lg transform hover:scale-105"
            >
              Voltar ao Quiz
            </Link>
          </div>
        </main>
      </>
    );
  }

  const topArtist = artists[result.topArtist];
  const maxScore = Math.max(
    result.gaabScore,
    result.rodriguinhoScore,
    result.mrDanScore
  );

  return (
    <>
      <AnimatedBackground />
      <main className="relative min-h-screen py-12 md:py-20 px-6">
        <div className="w-full max-w-5xl mx-auto space-y-16 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-white">
              Seu Resultado
            </h1>
            <p className="text-xl md:text-2xl text-spotify-gray-500 font-semibold">
              Descubra qual artista combina com você
            </p>
          </div>

          {/* Top Artist Result */}
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="text-8xl md:text-9xl animate-bounce">
                {topArtist.emoji}
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-spotify-green to-spotify-green-light bg-clip-text text-transparent mb-3">
                  {topArtist.name}
                </h2>
                <p className="text-2xl md:text-3xl text-spotify-gray-500 font-bold">
                  {topArtist.title}
                </p>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="bg-gradient-to-r from-spotify-green/10 via-spotify-green/5 to-transparent border-2 border-spotify-green/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-white leading-relaxed text-center font-semibold italic">
                "{topArtist.description}"
              </p>
            </div>
          </div>

          {/* Music Card */}
          <MusicCard artist={topArtist} />

          {/* All Scores */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-6">
              Compatibilidade com Todos os Artistas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {Object.entries(artists).map(([key, artist]) => (
                <ResultCard
                  key={key}
                  artist={artist}
                  score={
                    key === "gaab"
                      ? result.gaabScore
                      : key === "rodriguinho"
                      ? result.rodriguinhoScore
                      : result.mrDanScore
                  }
                  maxScore={maxScore}
                />
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-spotify-green to-spotify-green-light hover:from-spotify-green-light hover:to-spotify-green text-black font-black text-base md:text-lg rounded-full transition-all duration-300 shadow-spotify-lg hover:shadow-green-glow-lg transform hover:scale-105 active:scale-95">
              Compartilhar Resultado
            </button>
            <Link
              href="/quiz"
              className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-spotify-gray-800 to-spotify-gray-700 hover:from-spotify-gray-700 hover:to-spotify-gray-600 text-white font-black text-base md:text-lg rounded-full transition-all duration-300 shadow-spotify-md hover:shadow-spotify-lg transform hover:scale-105 active:scale-95 text-center border-2 border-spotify-gray-600 hover:border-spotify-green"
            >
              Fazer Quiz Novamente
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
