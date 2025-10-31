"use client";

import { useState } from "react";
import { Container, Button } from "reactstrap";

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
    <Container className="py-5 animate-slide-up">
      <div className="text-center mb-4">
        <h2 
          className="mb-3"
          style={{ 
            fontSize: "1.75rem", 
            fontWeight: 700, 
            color: "#ffffff",
            lineHeight: 1.3 
          }}
        >
          {question}
        </h2>
      </div>

      <div className="d-flex flex-column gap-4">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onSelect(option.text)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`custom-btn-option text-center ${
              hoveredIndex === index ? "active" : ""
            }`}
            style={{
              transform: hoveredIndex === index ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: 1.6,
                margin: 0,
                color: hoveredIndex === index ? "#1DB954" : "#ffffff",
              }}
            >
              <span className="text-spotify-gray me-2">"</span>
              {option.text}
              <span className="text-spotify-gray ms-2">"</span>
            </p>
          </Button>
        ))}
      </div>
    </Container>
  );
}
