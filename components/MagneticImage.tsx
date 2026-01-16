"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDominantColor } from "@/hooks/useDominantColor";

interface MagneticImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
  onClick?: () => void;
  sizes?: string;
  priority?: boolean;
}

export function MagneticImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  containerClassName = "",
  onLoad,
  onClick,
  sizes,
  priority = false,
}: MagneticImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const dominantColor = useDominantColor(src, containerRef);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    const maxOffset = 15;
    setPosition({
      x: offsetX * maxOffset,
      y: offsetY * maxOffset,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  const glowColor = dominantColor || "233, 99, 26";

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${fill ? "w-full h-full" : ""} ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        boxShadow: isHovered
          ? `0 0 40px 8px rgba(${glowColor}, 0.5), 0 0 80px 20px rgba(${glowColor}, 0.3)`
          : `0 0 0px 0px rgba(${glowColor}, 0)`,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 0.2,
        }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            onLoad={onLoad}
            className={className}
            sizes={sizes}
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized
            onLoad={onLoad}
            className={className}
            priority={priority}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
