"use client";

import Link from "next/link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl text-center space-y-12 animate-fade-in">
          {/* Logo/Title */}
          <div className="space-y-6">
            <div className="flex justify-center mb-4">
              <div className="text-7xl md:text-8xl animate-bounce">🎵</div>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4 bg-gradient-to-r from-white via-spotify-gray-500 to-spotify-green bg-clip-text text-transparent">
              Rjotafy
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-spotify-gray-500">
              Descubra qual artista combina com você
            </p>
          </div>

          {/* Description */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-spotify-gray-500">
            <p>
              Faça um quiz divertido e descubra qual artista do evento{" "}
              <span className="text-spotify-green font-bold">Legado</span> mais combina com sua personalidade.
            </p>
            <p>
              Ao final, você receberá um diagnóstico personalizado e descobrirá qual música combina mais com você!
            </p>
          </div>

          {/* Artists Preview */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 my-12">
            {[
              { emoji: "🎤", name: "Gaab", title: "O Maloqueiro Romântico" },
              { emoji: "💔", name: "Rodriguinho", title: "O Romântico Clássico" },
              { emoji: "🌿", name: "Mr. Dan", title: "Good Vibes / Reflexivo" },
            ].map((artist, idx) => (
              <div
                key={idx}
                className="group p-4 md:p-6 bg-gradient-to-br from-spotify-gray-900 to-spotify-gray-800 rounded-xl border border-spotify-gray-700 hover:border-spotify-green transition-all duration-300 hover:shadow-green-glow"
              >
                <div className="text-5xl md:text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {artist.emoji}
                </div>
                <h3 className="font-bold text-white text-sm md:text-base mb-1">
                  {artist.name}
                </h3>
                <p className="text-xs md:text-sm text-spotify-gray-500 group-hover:text-spotify-green transition-colors duration-300">
                  {artist.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/quiz"
            className="inline-block mt-8 px-12 md:px-16 py-4 md:py-5 bg-gradient-to-r from-spotify-green to-spotify-green-light hover:from-spotify-green-light hover:to-spotify-green text-black font-black text-lg md:text-xl rounded-full transition-all duration-300 shadow-spotify-lg hover:shadow-green-glow-lg transform hover:scale-105 active:scale-95"
          >
            Começar Quiz
          </Link>

          {/* Footer Text */}
          <p className="text-sm text-spotify-gray-600 pt-8">
            ⏱️ Leva apenas 2 minutos
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
