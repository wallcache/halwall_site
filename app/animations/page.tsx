"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { animationsData, Animation } from "@/lib/data";

const HOVER_DELAY = 1000; // 1 second hover delay before playing

function AnimationTile({
  animation,
  onMouseEnter,
  onMouseLeave,
}: {
  animation: Animation;
  onMouseEnter: (animation: Animation) => void;
  onMouseLeave: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Seek to poster time when video metadata loads
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = animation.posterTime;
    }
  }, [animation.posterTime]);

  const handleSeeked = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    setHasTriggered(false);

    // Start the hover delay timer
    hoverTimeoutRef.current = setTimeout(() => {
      setHasTriggered(true);
      onMouseEnter(animation);
    }, HOVER_DELAY);
  }, [animation, onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setHasTriggered(false);

    // Clear the timer if mouse leaves before 1 second
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    onMouseLeave();
  }, [onMouseLeave]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="-m-2 p-2 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-video overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]"
      >
        <video
          ref={videoRef}
          src={animation.videoSrc}
          className="w-full h-full object-cover grayscale"
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onSeeked={handleSeeked}
        />
        {/* Orange wipe overlay - wipes up from bottom */}
        <motion.div
          className="absolute inset-0 bg-orange origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: isHovering && !hasTriggered ? 1 : 0,
            opacity: isHovering && !hasTriggered ? 0.85 : 0,
          }}
          transition={{
            scaleY: { duration: HOVER_DELAY / 1000, ease: "easeInOut" },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>
    </div>
  );
}

export default function AnimationsPage() {
  const [activeAnimation, setActiveAnimation] = useState<Animation | null>(null);
  const activeVideoRef = useRef<HTMLVideoElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const closeVideo = useCallback(() => {
    clearCloseTimeout();
    setActiveAnimation(null);
  }, [clearCloseTimeout]);

  const startCloseTimeout = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      closeVideo();
    }, 500);
  }, [clearCloseTimeout, closeVideo]);

  const handleMouseEnter = useCallback((animation: Animation) => {
    clearCloseTimeout();
    setActiveAnimation(animation);
  }, [clearCloseTimeout]);

  const handleTileMouseLeave = useCallback(() => {
    // Close immediately when mouse leaves
    closeVideo();
  }, [closeVideo]);

  // Play video when activated
  useEffect(() => {
    if (activeAnimation && activeVideoRef.current) {
      activeVideoRef.current.currentTime = 0;
      activeVideoRef.current.play().catch(() => {});
    }
  }, [activeAnimation]);

  // Handle escape key and click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeAnimation) {
        closeVideo();
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (activeAnimation) {
        const target = e.target as HTMLElement;
        if (!target.closest('[data-animation-tile]')) {
          closeVideo();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeAnimation, closeVideo]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => clearCloseTimeout();
  }, [clearCloseTimeout]);

  return (
    <>
      <Link
        href="/"
        className="group mb-8 inline-flex items-center font-semibold leading-tight text-orange"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Back
      </Link>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
        Animations
      </h1>
      <p className="mb-12 text-secondary max-w-lg">
        Simple logo animations and motion graphics created for various clients with Adobe After Effects. Hover to play.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {animationsData.map((animation, index) => (
          <div key={index} data-animation-tile>
            <AnimationTile
              animation={animation}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleTileMouseLeave}
            />
          </div>
        ))}
      </div>

      {/* Expanded video popup */}
      <AnimatePresence mode="wait">
        {activeAnimation && (
          <motion.div
            key={activeAnimation.videoSrc}
            data-video-player
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className={`relative overflow-hidden rounded-xl bg-black origin-bottom ${activeAnimation.aspectRatio === "square" ? "aspect-square" : "aspect-video"}`}
              style={{
                width: activeAnimation.aspectRatio === "square" ? "min(85vw, 500px)" : "min(85vw, 700px)",
                boxShadow: "0 0 80px 40px rgba(30, 30, 30, 0.6), 0 0 160px 80px rgba(20, 20, 20, 0.4)",
              }}
              initial={{ scaleY: 0, scaleX: 0.8, opacity: 0 }}
              animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <motion.video
                key={activeAnimation.videoSrc}
                ref={activeVideoRef}
                src={activeAnimation.videoSrc}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: 0.1 }}
                muted
                loop
                playsInline
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}
