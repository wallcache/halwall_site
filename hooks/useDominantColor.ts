"use client";

import { useState, useEffect, RefObject } from "react";

export function useDominantColor(
  imageSrc: string,
  containerRef?: RefObject<HTMLElement | null>
): string | null {
  const [color, setColor] = useState<string | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  // Set up IntersectionObserver for lazy loading
  useEffect(() => {
    // If no containerRef provided, skip lazy loading and extract immediately
    if (!containerRef) {
      setIsInViewport(true);
      return;
    }

    const element = containerRef.current;
    if (!element) {
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
            // Once in viewport, stop observing
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Start loading slightly before element enters viewport
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  // Extract color only when in viewport
  useEffect(() => {
    if (!imageSrc || !isInViewport) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Use small size for performance
      const size = 50;
      canvas.width = size;
      canvas.height = size;

      ctx.drawImage(img, 0, 0, size, size);

      try {
        const imageData = ctx.getImageData(0, 0, size, size);
        const data = imageData.data;

        // Color counting with bucketing for better results
        const colorCounts: Record<string, { count: number; r: number; g: number; b: number }> = {};

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          // Skip transparent pixels
          if (a < 128) continue;

          // Skip very dark or very light pixels (backgrounds)
          const brightness = (r + g + b) / 3;
          if (brightness < 30 || brightness > 225) continue;

          // Bucket colors to reduce noise (round to nearest 16)
          const bucketR = Math.round(r / 16) * 16;
          const bucketG = Math.round(g / 16) * 16;
          const bucketB = Math.round(b / 16) * 16;

          const key = `${bucketR},${bucketG},${bucketB}`;

          if (!colorCounts[key]) {
            colorCounts[key] = { count: 0, r: bucketR, g: bucketG, b: bucketB };
          }
          colorCounts[key].count++;
        }

        // Find the most saturated vibrant color (not just most common)
        let bestColor = { r: 233, g: 99, b: 26 }; // Default orange
        let bestScore = 0;

        for (const key in colorCounts) {
          const { count, r, g, b } = colorCounts[key];

          // Calculate saturation
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const saturation = max === 0 ? 0 : (max - min) / max;

          // Score based on count and saturation (prefer vibrant colors)
          const score = count * (0.3 + saturation * 0.7);

          if (score > bestScore) {
            bestScore = score;
            bestColor = { r, g, b };
          }
        }

        // Boost saturation for more vibrant glow
        const { r, g, b } = bestColor;

        let finalR = r, finalG = g, finalB = b;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        if (max !== min) {
          const boost = 1.3;
          finalR = Math.min(255, Math.round(r + (r - (r + g + b) / 3) * boost));
          finalG = Math.min(255, Math.round(g + (g - (r + g + b) / 3) * boost));
          finalB = Math.min(255, Math.round(b + (b - (r + g + b) / 3) * boost));
        }

        setColor(`${finalR}, ${finalG}, ${finalB}`);
      } catch {
        // CORS or other error - use default orange
        setColor("233, 99, 26");
      }
    };

    img.onerror = () => {
      setColor("233, 99, 26");
    };

    img.src = imageSrc;
  }, [imageSrc, isInViewport]);

  return color;
}
