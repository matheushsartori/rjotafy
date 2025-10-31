"use client";

import { Artist } from "@/lib/constants";

interface MusicCardProps {
  artist: Artist;
}

export function MusicCard({ artist }: MusicCardProps) {
  return (
    <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-spotify-green/20 via-spotify-green/10 to-transparent rounded-3xl p-8 md:p-12 border-2 border-spotify-green overflow-hidden relative shadow-green-glow-lg animate-scale-in">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-spotify-green to-spotify-green-light opacity-5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-spotify-green opacity-5 rounded-full blur-3xl -ml-24 -mb-24" />

      <div className="relative z-10 space-y-8">
        {/* Icon */}
        <div className="text-center">
          <div className="text-7xl md:text-8xl mb-4 animate-bounce">🎵</div>
          <h3 className="text-xs md:text-sm font-black text-spotify-green uppercase tracking-widest">
            Sua Música Favorita
          </h3>
        </div>

        {/* Album Art Placeholder */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-spotify-green/30 to-spotify-gray-900/30 rounded-2xl shadow-green-glow-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            <div className="relative w-full h-full rounded-2xl flex items-center justify-center border-2 border-spotify-green/50 overflow-hidden">
              <div className="text-center">
                <div className="text-6xl md:text-7xl mb-3">🎧</div>
                <p className="text-spotify-gray-500 text-sm font-semibold">Capa do Álbum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Song Info */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            {artist.song.title}
          </h2>
          <p className="text-spotify-green font-bold text-lg md:text-xl">
            {artist.song.artist}
          </p>
          <p className="text-spotify-gray-500 text-sm md:text-base font-semibold">
            Álbum: <span className="text-spotify-gray-400">{artist.song.album}</span>
          </p>
        </div>

        {/* Play Button */}
        <div className="flex justify-center pt-4">
          <button className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-spotify-green to-spotify-green-light hover:from-spotify-green-light hover:to-spotify-green text-black font-black text-base md:text-lg rounded-full transition-all duration-300 shadow-spotify-lg hover:shadow-green-glow-lg flex items-center gap-3 transform hover:scale-105 active:scale-95">
            <span className="text-xl">▶</span>
            Ouvir no Spotify
          </button>
        </div>
      </div>
    </div>
  );
}
