"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div 
      className="position-sticky top-0 w-100"
      style={{
        height: "4px",
        background: "linear-gradient(90deg, #1e1e1e 0%, #282828 100%)",
        zIndex: 1000
      }}
    >
      <div
        className="h-100"
        style={{
          width: `${percentage}%`,
          background: "linear-gradient(90deg, #1DB954 0%, #1ed760 100%)",
          transition: "width 0.5s ease-out",
          boxShadow: "0 0 20px rgba(29, 185, 84, 0.3)"
        }}
      />
    </div>
  );
}
