"use client";

import { Artist } from "@/lib/constants";
import { Card } from "reactstrap";

interface ResultCardProps {
  artist: Artist;
  score: number;
  maxScore: number;
}

export function ResultCard({ artist, score, maxScore }: ResultCardProps) {
  const percentage = Math.round((score / maxScore) * 100);

  return (
    <Card className="custom-card position-relative animate-fade-in" style={{ width: "100%" }}>
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h3 
            className="mb-1"
            style={{ 
              fontSize: "1.25rem", 
              fontWeight: 700, 
              color: "#ffffff" 
            }}
          >
            {artist.name}
          </h3>
          <p className="text-spotify-gray mb-0" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
            {artist.title}
          </p>
        </div>
        <span style={{ fontSize: "2rem" }}>
          {artist.emoji}
        </span>
      </div>

      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span 
            className="text-spotify-gray"
            style={{ 
              fontSize: "0.7rem", 
              fontWeight: 500, 
              textTransform: "uppercase",
              letterSpacing: "0.15em"
            }}
          >
            Compatibilidade
          </span>
          <span 
            className="text-spotify-green fw-bold"
            style={{ fontSize: "1rem" }}
          >
            {percentage}%
          </span>
        </div>
        <div 
          className="w-100 rounded-pill overflow-hidden"
          style={{ 
            height: "12px",
            background: "#404040"
          }}
        >
          <div
            className="h-100 rounded-pill"
            style={{
              width: `${percentage}%`,
              background: "linear-gradient(90deg, #1DB954 0%, #1ed760 100%)",
              transition: "width 0.7s ease"
            }}
          />
        </div>
      </div>

      <div>
        <h4 
          className="text-spotify-gray mb-2"
          style={{ 
            fontSize: "0.7rem", 
            fontWeight: 700, 
            textTransform: "uppercase",
            letterSpacing: "0.15em"
          }}
        >
          Características
        </h4>
        <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
          {artist.characteristics.map((char, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-pill"
              style={{
                background: "linear-gradient(135deg, #282828 0%, #404040 100%)",
                border: "1px solid #535353",
                color: "#b3b3b3",
                fontSize: "0.75rem",
                fontWeight: 600
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
