"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(800px at ${x}px ${y}px, rgba(255, 109, 31, 0.05), transparent 80%)`,
      }}
    />
  );
}
