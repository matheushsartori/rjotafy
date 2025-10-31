"use client";

import { Artist } from "@/lib/constants";
import { Container, Button } from "reactstrap";

interface MusicCardProps {
  artist: Artist;
}

export function MusicCard({ artist }: MusicCardProps) {
  return (
    <Container className="d-flex justify-content-center py-3">
      <div className="music-card position-relative" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="text-center mb-3">
          <div className="mb-2 animate-bounce" style={{ fontSize: "3rem" }}>
            🎵
          </div>
          <h3 
            className="text-spotify-green mb-0"
            style={{ 
              fontSize: "0.75rem", 
              fontWeight: 700, 
              textTransform: "uppercase",
              letterSpacing: "0.15em"
            }}
          >
            Sua Música Favorita
          </h3>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <div 
            className="position-relative d-flex align-items-center justify-content-center"
            style={{ width: "180px", height: "180px" }}
          >
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
              style={{
                background: "linear-gradient(135deg, rgba(29, 185, 84, 0.3) 0%, rgba(30, 163, 74, 0.3) 100%)",
                boxShadow: "0 0 40px rgba(29, 185, 84, 0.3)"
              }}
            />
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-flex align-items-center justify-content-center"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
                border: "2px solid rgba(29, 185, 84, 0.5)"
              }}
            >
              <div className="text-center">
                <div className="mb-2" style={{ fontSize: "2.5rem" }}>🎧</div>
                <p className="text-spotify-gray mb-0" style={{ fontSize: "0.75rem", fontWeight: 500 }}>
                  Capa do Álbum
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-3">
          <h2 
            className="mb-2"
            style={{ 
              fontSize: "1.5rem", 
              fontWeight: 700, 
              color: "#ffffff" 
            }}
          >
            {artist.song.title}
          </h2>
          <p 
            className="text-spotify-green mb-1"
            style={{ 
              fontSize: "1rem", 
              fontWeight: 600 
            }}
          >
            {artist.song.artist}
          </p>
          <p className="text-spotify-gray mb-0" style={{ fontSize: "0.8rem", fontWeight: 500 }}>
            Álbum: <span style={{ color: "#b3b3b3" }}>{artist.song.album}</span>
          </p>
        </div>

        <div className="d-flex justify-content-center pt-3">
          <Button className="custom-btn-primary d-flex align-items-center gap-3">
            <span style={{ fontSize: "1.25rem" }}>▶</span>
            Ouvir no Spotify
          </Button>
        </div>
      </div>
    </Container>
  );
}
