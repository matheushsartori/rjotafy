"use client";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black via-black/80 to-transparent py-12 px-6 text-center border-t border-spotify-gray-800">
      <div className="max-w-5xl mx-auto space-y-4">
        <p className="text-spotify-gray-500 text-base font-semibold">
          Evento <span className="text-spotify-green font-black">Legado</span> em Curitiba
        </p>
        <p className="text-spotify-gray-600 text-sm">
          Desenvolvido com <span className="text-spotify-green">❤️</span> para uma experiência personalizada
        </p>
        <p className="text-spotify-gray-700 text-xs pt-4">
          © 2024 Rjotafy. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
