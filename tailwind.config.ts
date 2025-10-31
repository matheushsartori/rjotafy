import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          "black": "#0f0f0f",
          "dark": "#1a1a1a",
          "darker": "#121212",
          "gray-900": "#1e1e1e",
          "gray-800": "#282828",
          "gray-700": "#404040",
          "gray-600": "#535353",
          "gray-500": "#b3b3b3",
          "green": "#1DB954",
          "green-dark": "#1aa34a",
          "green-light": "#1ed760",
        },
      },
      backgroundColor: {
        spotify: "#0f0f0f",
      },
      textColor: {
        spotify: "#1DB954",
      },
      borderColor: {
        spotify: "#1DB954",
      },
      backgroundImage: {
        "gradient-spotify": "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
        "gradient-green": "linear-gradient(135deg, #1DB954 0%, #1aa34a 100%)",
        "gradient-green-light": "linear-gradient(135deg, #1DB954 0%, #1ed760 100%)",
        "gradient-card": "linear-gradient(135deg, #1e1e1e 0%, #282828 100%)",
        "gradient-card-hover": "linear-gradient(135deg, #282828 0%, #404040 100%)",
      },
      boxShadow: {
        "spotify-sm": "0 4px 12px rgba(0, 0, 0, 0.3)",
        "spotify-md": "0 8px 24px rgba(0, 0, 0, 0.4)",
        "spotify-lg": "0 12px 32px rgba(0, 0, 0, 0.5)",
        "green-glow": "0 0 20px rgba(29, 185, 84, 0.3)",
        "green-glow-lg": "0 0 40px rgba(29, 185, 84, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(29, 185, 84, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(29, 185, 84, 0.6)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
