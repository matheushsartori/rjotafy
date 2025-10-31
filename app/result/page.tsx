"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ResultCard } from "@/components/ResultCard";
import { MusicCard } from "@/components/MusicCard";
import { Footer } from "@/components/Footer";
import { artists } from "@/lib/constants";
import { QuizResult } from "@/lib/types";

export default function ResultPage() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedResult = sessionStorage.getItem("quizResult");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <>
        <AnimatedBackground />
        <main className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Container className="text-center animate-fade-in">
            <div className="mb-4 animate-bounce" style={{ fontSize: "5rem" }}>🎵</div>
            <p className="text-spotify-gray mb-0" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
              Carregando seu resultado...
            </p>
          </Container>
        </main>
      </>
    );
  }

  if (!result) {
    return (
      <>
        <AnimatedBackground />
        <main className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Container className="text-center animate-fade-in">
            <p className="text-spotify-gray mb-4" style={{ fontSize: "1.125rem" }}>
              Nenhum resultado encontrado
            </p>
            <Link href="/quiz" passHref legacyBehavior>
              <Button className="custom-btn-primary">
                Voltar ao Quiz
              </Button>
            </Link>
          </Container>
        </main>
      </>
    );
  }

  const topArtist = artists[result.topArtist];
  const maxScore = Math.max(
    result.gaabScore,
    result.rodriguinhoScore,
    result.mrDanScore
  );

  return (
    <>
      <AnimatedBackground />
      <main className="position-relative py-5">
        <Container className="animate-fade-in">
          <Row className="justify-content-center mb-5">
            <Col xs={12} className="text-center mb-4">
              <h1 className="mb-3" style={{ fontSize: "2.25rem", fontWeight: 800, color: "#ffffff" }}>
                Seu Resultado
              </h1>
              <p className="text-spotify-gray mb-0" style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                Descubra qual artista combina com você
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col xs={12} md={8} className="text-center mb-4">
              <div className="mb-3 animate-bounce" style={{ fontSize: "4rem" }}>
                {topArtist.emoji}
              </div>
              <h2 
                className="mb-2 text-spotify-green fw-bold"
                style={{ fontSize: "2rem" }}
              >
                {topArtist.name}
              </h2>
              <p className="text-spotify-gray mb-0" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                {topArtist.title}
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col xs={12} md={8}>
              <div 
                className="rounded-3 p-5 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(29, 185, 84, 0.1) 0%, rgba(29, 185, 84, 0.05) 50%, transparent 100%)",
                  border: "2px solid rgba(29, 185, 84, 0.5)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <p 
                  className="mb-0"
                  style={{ 
                    fontSize: "1rem", 
                    lineHeight: 1.7, 
                    color: "#ffffff",
                    fontStyle: "italic",
                    fontWeight: 500
                  }}
                >
                  "{topArtist.description}"
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mb-5">
            <Col xs={12}>
              <MusicCard artist={topArtist} />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col xs={12} className="text-center mb-4">
              <h3 className="mb-0" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff" }}>
                Compatibilidade com Todos os Artistas
              </h3>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            {Object.entries(artists).map(([key, artist]) => (
              <Col xs={12} md={4} key={key}>
                <ResultCard
                  artist={artist}
                  score={
                    key === "gaab"
                      ? result.gaabScore
                      : key === "rodriguinho"
                      ? result.rodriguinhoScore
                      : result.mrDanScore
                  }
                  maxScore={maxScore}
                />
              </Col>
            ))}
          </Row>

          <Row className="justify-content-center mb-5">
            <Col xs={12} md={6} className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <Button className="custom-btn-primary">
                Compartilhar Resultado
              </Button>
              <Link href="/quiz" passHref legacyBehavior>
                <Button 
                  className="custom-btn-option"
                  style={{
                    background: "linear-gradient(135deg, #282828 0%, #404040 100%)",
                    borderColor: "#535353"
                  }}
                >
                  Fazer Quiz Novamente
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
