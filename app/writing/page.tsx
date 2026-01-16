"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star, BookOpen } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ReviewLightbox } from "@/components/ReviewLightbox";
import { bookReviewsData, BookReview } from "@/lib/data";

export default function WritingPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedReview, setSelectedReview] = useState<BookReview | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openReview = useCallback((review: BookReview) => {
    setSelectedReview(review);
    setLightboxOpen(true);
  }, []);

  const closeReview = useCallback(() => {
    setLightboxOpen(false);
  }, []);

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
        Book Reviews
      </h1>
      <p className="mb-12 text-secondary max-w-lg">
        Book reviews on The Canon.
      </p>

      <div className="group/list">
        {bookReviewsData.map((review, index) => (
          <motion.article
            key={index}
            id={review.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`group relative mb-8 cursor-pointer transition-all duration-300 lg:hover:!opacity-100 scroll-mt-[40vh] rounded-lg p-4 -m-4 target:animate-highlight ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "lg:group-hover/list:opacity-50"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openReview(review)}
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-blackhole/5 dark:lg:group-hover:bg-linen/5 lg:group-hover:border-2 lg:group-hover:border-orange" />

            <div className="relative z-10 grid gap-4 sm:grid-cols-8 sm:gap-8 md:gap-4">
              <div className="sm:col-span-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                  <BookOpen className="h-4 w-4" />
                  <span>{review.type === "analysis" ? "Critical Analysis" : "Book Review"}</span>
                </div>
                {review.rating !== null && (
                  <div
                    className="mt-2 flex items-center gap-0.5"
                    aria-label={`Rating: ${review.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < review.rating!
                            ? "fill-orange text-orange"
                            : "text-blackhole/20 dark:text-linen/20"
                        }`}
                      />
                    ))}
                  </div>
                )}
                {review.rating === null && (
                  <span className="mt-2 inline-block text-xs text-secondary">
                    No rating
                  </span>
                )}
              </div>

              <div className="sm:col-span-6">
                <h3 className="font-bold leading-snug group-hover:text-orange transition-colors">
                  <span className="text-base font-bold">
                    {review.title}
                  </span>
                  <span className="text-secondary font-medium">
                    {" "}by {review.author}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  {review.excerpt}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16">
        <Footer />
      </div>

      <ReviewLightbox
        review={selectedReview}
        isOpen={lightboxOpen}
        onClose={closeReview}
      />
    </>
  );
}
