"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverVideoProps {
  word: string;
  videoSrc: string;
  className?: string;
}

export function HoverVideo({ word, videoSrc, className = "" }: HoverVideoProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [wordPosition, setWordPosition] = useState({ x: 0, y: 0 });
  const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });
  const labelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Magnetic effect on the word (subtle)
    const distanceX = (e.clientX - centerX) * 0.01;
    const distanceY = (e.clientY - centerY) * 0.01;
    setWordPosition({ x: distanceX, y: distanceY });

    // Magnetic effect on the video (subtler)
    const videoDistanceX = (e.clientX - centerX) * 0.1;
    const videoDistanceY = (e.clientY - centerY) * 0.1;
    setVideoPosition({ x: videoDistanceX, y: videoDistanceY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setShowLabel(false);

    // Show label after 2 seconds
    labelTimeoutRef.current = setTimeout(() => {
      setShowLabel(true);
    }, 2000);

    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 0;
      video.currentTime = 0;
      video.play().then(() => {
        // Fade in audio
        let vol = 0;
        const fadeIn = setInterval(() => {
          vol += 0.1;
          if (vol >= 1) {
            video.volume = 1;
            clearInterval(fadeIn);
          } else {
            video.volume = vol;
          }
        }, 30);
      }).catch(() => {});
    }
  }, []);

  const closeVideo = useCallback(() => {
    setIsHovered(false);
    setShowLabel(false);
    setWordPosition({ x: 0, y: 0 });
    setVideoPosition({ x: 0, y: 0 });

    // Clear label timeout
    if (labelTimeoutRef.current) {
      clearTimeout(labelTimeoutRef.current);
      labelTimeoutRef.current = null;
    }

    if (videoRef.current) {
      const video = videoRef.current;
      let vol = video.volume;
      const fadeOut = setInterval(() => {
        vol -= 0.1;
        if (vol <= 0) {
          video.volume = 0;
          video.pause();
          clearInterval(fadeOut);
        } else {
          video.volume = vol;
        }
      }, 30);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeVideo();
  }, [closeVideo]);

  const handleClickOutside = useCallback((e: React.MouseEvent) => {
    // Only close if clicking outside the video element
    const target = e.target as HTMLElement;
    if (!target.closest('video')) {
      closeVideo();
    }
  }, [closeVideo]);

  return (
    <span
      ref={containerRef}
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span
        className="relative inline-block text-orange font-semibold"
        animate={{ x: wordPosition.x, y: wordPosition.y }}
        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
      >
        {word}
        <motion.span
          className="absolute -bottom-0.5 left-0 h-[2px] bg-orange"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.span>

      {/* Large invisible hover zone around word and extending to video - click to close */}
      {isHovered && (
        <>
          {/* Bridge to video on left - clickable to close */}
          <div
            className="absolute right-full top-1/2 -translate-y-1/2 w-[500px] h-[600px] z-40 cursor-pointer"
            style={{ marginRight: '-10px' }}
            onClick={handleClickOutside}
          />
          {/* Extended zone around word - clickable to close */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer"
            style={{ width: '600px', height: '600px', marginLeft: '150px' }}
            onClick={handleClickOutside}
          />
        </>
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: videoPosition.x,
              y: videoPosition.y,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
              x: { type: "spring", stiffness: 150, damping: 50 },
              y: { type: "spring", stiffness: 150, damping: 50 },
            }}
            className="absolute right-full bottom-0 mb-[-200px] mr-4 z-50"
            onClick={handleClickOutside}
          >
            <motion.div
              className="rounded-xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                className="max-w-[400px] max-h-[400px] w-auto h-auto block rounded-xl"
                playsInline
                loop
                autoPlay
                preload="auto"
              />
              {/* Label with arrow */}
              <AnimatePresence>
                {showLabel && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-11 right-[132px] flex items-center gap-0 text-white"
                  >
                    <span className="text-sm font-semibold bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                      Japhy
                    </span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      className="text-white drop-shadow-lg"
                      style={{ transform: 'rotate(-45deg)' }}
                    >
                      <path
                        d="M10 20 L25 20 M25 20 L18 13 M25 20 L18 27"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
