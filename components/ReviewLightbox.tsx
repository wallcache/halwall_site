"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, BookOpen } from "lucide-react";
import { BookReview } from "@/lib/data";

interface ReviewLightboxProps {
  review: BookReview | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewLightbox({ review, isOpen, onClose }: ReviewLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, isOpen]);

  if (!review) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blackhole/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 text-linen/80 hover:text-linen transition-colors"
            aria-label="Close review"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Review container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-cotton dark:bg-blackhole border-2 border-orange rounded-xl max-h-[85vh] max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-cotton dark:bg-blackhole border-b border-blackhole/10 dark:border-linen/10 p-6 z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-secondary mb-2">
                <BookOpen className="h-4 w-4" />
                <span>{review.type === "analysis" ? "Critical Analysis" : "Book Review"}</span>
              </div>
              <h2 className="text-2xl font-bold text-blackhole dark:text-linen">
                {review.title}
              </h2>
              <p className="text-secondary mt-1">by {review.author}</p>
              {review.rating !== null && (
                <div
                  className="mt-3 flex items-center gap-0.5"
                  aria-label={`Rating: ${review.rating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating!
                          ? "fill-orange text-orange"
                          : "text-blackhole/20 dark:text-linen/20"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Scrollable content */}
            <div className="p-6 pb-0 overflow-y-auto max-h-[calc(85vh-140px)]">
              <div className="prose prose-sm dark:prose-invert max-w-none text-blackhole dark:text-linen/90 leading-relaxed whitespace-pre-wrap pb-16">
                {review.fullReview}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
