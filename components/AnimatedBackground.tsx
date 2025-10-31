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
    <div 
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{ zIndex: -1, overflow: "hidden" }}
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)"
        }}
      />

      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ opacity: 0.1 }}>
        {albumCovers.map((cover, index) => (
          <div
            key={index}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundImage: `url(${cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === currentIndex ? 1 : 0,
              filter: "blur(60px) brightness(0.25)",
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
      </div>

      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%, rgba(0,0,0,0.6) 100%)"
        }}
      />
      
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)"
        }}
      />
    </div>
  );
}
