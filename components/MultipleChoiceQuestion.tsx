"use client";

import { useState } from "react";
import { Container, Button } from "reactstrap";

interface Option {
  text: string;
  emoji: string;
}

interface MultipleChoiceQuestionProps {
  question: string;
  options: Option[];
  onSelect: (option: string) => void;
}

export function MultipleChoiceQuestion({
  question,
  options,
  onSelect,
}: MultipleChoiceQuestionProps) {
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
            className={`custom-btn-option d-flex align-items-center gap-4 ${
              hoveredIndex === index ? "active" : ""
            }`}
            style={{
              transform: hoveredIndex === index ? "translateY(-3px)" : "translateY(0)",
            }}
          >
            <span style={{ fontSize: "2rem", flexShrink: 0 }}>
              {option.emoji}
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 500, textAlign: "left" }}>
              {option.text}
            </span>
          </Button>
        ))}
      </div>
    </Container>
  );
}
