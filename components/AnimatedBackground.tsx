"use client";

import { useEffect, useState } from "react";

const albumCovers = [
  "https://via.placeholder.com/400x400?text=Album+1",
  "https://via.placeholder.com/400x400?text=Album+2",
  "https://via.placeholder.com/400x400?text=Album+3",
  "https://via.placeholder.com/400x400?text=Album+4",
  "https://via.placeholder.com/400x400?text=Album+5",
  "https://via.placeholder.com/400x400?text=Album+6",
  "https://via.placeholder.com/400x400?text=Album+7",
  "https://via.placeholder.com/400x400?text=Album+8",
];

export function AnimatedBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % albumCovers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />

      {/* Animated album covers */}
      <div className="absolute inset-0 opacity-20">
        {albumCovers.map((cover, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === currentIndex ? 1 : 0,
              filter: "blur(50px) brightness(0.35)",
            }}
          />
        ))}
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
    </div>
  );
}
