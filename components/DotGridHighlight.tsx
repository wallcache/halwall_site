"use client";

import { useEffect, useRef, useCallback } from "react";

interface DotGridHighlightProps {
  dotColor?: string;
  magnifyRadius?: number;
  dotGap?: number;
  maxDotSize?: number;
  minDotSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  shrinkDelay?: number;
}

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export function DotGridHighlight({
  dotColor = "#C4956A",
  magnifyRadius = 500,
  dotGap = 30,
  maxDotSize = 20,
  minDotSize = 1,
  minOpacity = 0.5,
  maxOpacity = 0.5,
  shrinkDelay = 500,
}: DotGridHighlightProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -3000, y: -3000 });
  const targetMouseRef = useRef({ x: -3000, y: -3000 });
  const trailRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  // Memoized cubic ease-out for smooth lens effect
  const easeOutCubic = useCallback((t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    // Setup canvas with proper sizing
    const setupCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      targetMouseRef.current = { x: -3000, y: -3000 };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchEnd = () => {
      targetMouseRef.current = { x: -3000, y: -3000 };
    };

    // Visibility change handler for performance
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    // Main draw function
    const draw = () => {
      // Skip drawing if tab is not visible
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(draw);
        return;
      }

      const now = performance.now();
      const width = canvas.width;
      const height = canvas.height;

      // Smooth mouse interpolation (lerp)
      const lerp = 0.15;
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * lerp;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * lerp;

      // Add current position to trail (only if mouse is on screen)
      if (mouseRef.current.x > -2000) {
        trailRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          timestamp: now,
        });
      }

      // Prune old trail points
      trailRef.current = trailRef.current.filter(
        (point) => now - point.timestamp < shrinkDelay
      );

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Scale values for DPR
      const scaledRadius = magnifyRadius * dpr;
      const scaledRadiusSq = scaledRadius * scaledRadius;
      const scaledGap = dotGap * dpr;
      const scaledMaxSize = maxDotSize * dpr;
      const scaledMinSize = minDotSize * dpr;
      const sizeDiff = scaledMaxSize - scaledMinSize;
      const opacityDiff = maxOpacity - minOpacity;

      // Calculate grid bounds to ensure edge-to-edge coverage
      const startX = -(scaledGap / 2);
      const startY = -(scaledGap / 2);

      // Pre-scale trail points for DPR
      const scaledTrail = trailRef.current.map((p) => ({
        x: p.x * dpr,
        y: p.y * dpr,
        age: (now - p.timestamp) / shrinkDelay,
      }));

      // Current mouse position (scaled)
      const currentMouseX = mouseRef.current.x * dpr;
      const currentMouseY = mouseRef.current.y * dpr;

      // Draw dots in a grid pattern
      for (let x = startX; x <= width + scaledGap; x += scaledGap) {
        for (let y = startY; y <= height + scaledGap; y += scaledGap) {
          let maxProximityFactor = 0;

          // Check current mouse position (for instant growth)
          const dxCurrent = x - currentMouseX;
          const dyCurrent = y - currentMouseY;
          const distSqCurrent = dxCurrent * dxCurrent + dyCurrent * dyCurrent;

          if (distSqCurrent < scaledRadiusSq) {
            const dist = Math.sqrt(distSqCurrent);
            const rawFactor = Math.max(0, 1 - dist / scaledRadius);
            maxProximityFactor = Math.max(maxProximityFactor, easeOutCubic(rawFactor));
          }

          // Check trail points (for delayed shrink)
          for (const point of scaledTrail) {
            const dx = x - point.x;
            const dy = y - point.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < scaledRadiusSq) {
              const dist = Math.sqrt(distSq);
              const rawFactor = Math.max(0, 1 - dist / scaledRadius);
              // Fade out based on age (ease out for smoother decay)
              const ageFade = 1 - easeOutCubic(point.age);
              const factor = easeOutCubic(rawFactor) * ageFade;
              maxProximityFactor = Math.max(maxProximityFactor, factor);
            }
          }

          // Interpolate size and opacity based on max proximity factor
          const size = scaledMinSize + sizeDiff * maxProximityFactor;
          const opacity = minOpacity + opacityDiff * maxProximityFactor;

          ctx.beginPath();
          ctx.arc(x, y, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.globalAlpha = opacity;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    // Initialize
    setupCanvas();

    // Event listeners
    window.addEventListener("resize", setupCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(draw);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setupCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dotColor, magnifyRadius, dotGap, maxDotSize, minDotSize, minOpacity, maxOpacity, shrinkDelay, easeOutCubic]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
