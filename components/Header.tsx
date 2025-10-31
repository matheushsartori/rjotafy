"use client";

import Link from "next/link";

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
}

export function Header({ showBack = false, onBack }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black to-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🎵</span>
          <span className="text-xl font-black text-white group-hover:text-green-500 transition-colors">
            Rjotafy
          </span>
        </Link>

        {showBack && onBack && (
          <button
            onClick={onBack}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            ← Voltar
          </button>
        )}
      </div>
    </header>
  );
}
