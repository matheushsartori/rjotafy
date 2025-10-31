"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full h-1 bg-gradient-to-r from-spotify-gray-900 to-spotify-gray-800 sticky top-0 z-40">
      <div
        className="h-full bg-gradient-to-r from-spotify-green to-spotify-green-light transition-all duration-500 ease-out shadow-green-glow"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
