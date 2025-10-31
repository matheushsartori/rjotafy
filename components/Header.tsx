"use client";

import Link from "next/link";
import { Container } from "reactstrap";

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
}

export function Header({ showBack = false, onBack }: HeaderProps) {
  return (
    <header 
      className="position-fixed top-0 start-0 w-100"
      style={{
        zIndex: 1000,
        background: "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.8) 50%, transparent 100%)",
        padding: "1rem 0"
      }}
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <Link 
            href="/" 
            className="d-flex align-items-center gap-2 text-decoration-none"
          >
            <span style={{ fontSize: "1.5rem" }}>🎵</span>
            <span 
              className="text-white fw-bold"
              style={{ 
                fontSize: "1.25rem",
                transition: "color 0.3s ease"
              }}
            >
              Rjotafy
            </span>
          </Link>

          {showBack && onBack && (
            <button
              onClick={onBack}
              className="btn btn-link text-decoration-none p-0"
              style={{ 
                color: "#b3b3b3",
                border: "none",
                background: "none",
                cursor: "pointer"
              }}
            >
              ← Voltar
            </button>
          )}
        </div>
      </Container>
    </header>
  );
}
