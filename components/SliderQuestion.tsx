"use client";

import { useState } from "react";
import { Container, Button, Input } from "reactstrap";

interface SliderQuestionProps {
  question: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

export function SliderQuestion({
  question,
  min,
  max,
  value,
  onChange,
  onNext,
}: SliderQuestionProps) {
  const [isFocused, setIsFocused] = useState(false);
  const percentage = ((value - min) / (max - min)) * 100;

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

      <div className="mb-4">
        <div className="mb-5">
          <Input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-100"
            style={{
              height: "8px",
              background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${percentage}%, #404040 ${percentage}%, #404040 100%)`,
              borderRadius: "4px",
              cursor: "pointer",
              appearance: "none",
              WebkitAppearance: "none",
            }}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <span 
            className="text-spotify-gray"
            style={{ 
              fontSize: "0.875rem", 
              fontWeight: 600, 
              textTransform: "uppercase",
              letterSpacing: "0.2em"
            }}
          >
            {min}
          </span>
          <div
            style={{
              transform: isFocused ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease"
            }}
          >
            <span 
              className="text-spotify-green fw-bold"
              style={{ fontSize: "2.5rem" }}
            >
              {value}
            </span>
          </div>
          <span 
            className="text-spotify-gray"
            style={{ 
              fontSize: "0.875rem", 
              fontWeight: 600, 
              textTransform: "uppercase",
              letterSpacing: "0.2em"
            }}
          >
            {max}
          </span>
        </div>

        <Button 
          onClick={onNext}
          className="custom-btn-primary w-100"
        >
          Próximo
        </Button>
      </div>
    </Container>
  );
}
