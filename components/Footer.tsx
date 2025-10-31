"use client";

import { Container } from "reactstrap";

export function Footer() {
  return (
    <footer 
      className="position-relative py-5 px-4"
      style={{
        background: "linear-gradient(to top, #000000 0%, rgba(0,0,0,0.8) 50%, transparent 100%)",
        borderTop: "1px solid #282828"
      }}
    >
      <Container>
        <div className="text-center">
          <p className="text-spotify-gray mb-3" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Evento <span className="text-spotify-green fw-bold">Legado</span> em Curitiba
          </p>
          <p className="text-spotify-gray mb-3" style={{ fontSize: "0.875rem" }}>
            Desenvolvido com <span className="text-spotify-green">❤️</span> para uma experiência personalizada
          </p>
          <p className="text-spotify-gray mb-0" style={{ fontSize: "0.75rem", color: "#404040" }}>
            © 2024 Rjotafy. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
