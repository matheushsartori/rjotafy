"use client";

import Link from "next/link";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Footer";

export default function Home() {
  const artists = [
    { emoji: "🎤", name: "Gaab", title: "O Maloqueiro Romântico" },
    { emoji: "💔", name: "Rodriguinho", title: "O Romântico Clássico" },
    { emoji: "🌿", name: "Mr. Dan", title: "Good Vibes / Reflexivo" },
  ];

  return (
    <>
      <AnimatedBackground />
      <main className="position-relative" style={{ minHeight: "100vh" }}>
        <Container className="d-flex flex-column align-items-center justify-content-center py-5 px-4" style={{ minHeight: "100vh" }}>
          <Row className="w-100 justify-content-center animate-fade-in">
            <Col xs={12} className="text-center mb-4">
              <div className="mb-3 animate-bounce" style={{ fontSize: "3.5rem" }}>
                🎵
              </div>
              <h1 className="gradient-text mb-3" style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.2 }}>
                Rjotafy
              </h1>
              <p className="text-spotify-gray mb-0" style={{ fontSize: "1.125rem", fontWeight: 500 }}>
                Descubra qual artista combina com você
              </p>
            </Col>

            <Col xs={12} md={10} lg={8} className="mb-4">
              <div className="text-center mb-3" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                <p className="text-spotify-gray mb-2">
                  Faça um quiz divertido e descubra qual artista do evento{" "}
                  <span className="text-spotify-green fw-semibold">Legado</span> mais combina com sua personalidade.
                </p>
                <p className="text-spotify-gray mb-0">
                  Ao final, você receberá um diagnóstico personalizado e descobrirá qual música combina mais com você!
                </p>
              </div>
            </Col>

            <Col xs={12} md={10} lg={8}>
              <Row className="g-4 mb-5">
                {artists.map((artist, idx) => (
                  <Col xs={12} md={4} key={idx}>
                    <Card className="custom-card custom-card-artist">
                      <div className="mb-2" style={{ fontSize: "2.5rem" }}>
                        {artist.emoji}
                      </div>
                      <h3 className="mb-1" style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>
                        {artist.name}
                      </h3>
                      <p className="text-spotify-gray mb-0" style={{ fontSize: "0.8rem" }}>
                        {artist.title}
                      </p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col xs={12} className="text-center">
              <Link href="/quiz" passHref legacyBehavior>
                <Button className="custom-btn-primary">
                  Começar Quiz
                </Button>
              </Link>
              <p className="text-spotify-gray mt-4 mb-0" style={{ fontSize: "0.875rem" }}>
                ⏱️ Leva apenas 2 minutos
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
