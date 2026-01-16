"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Lightbox } from "@/components/Lightbox";
import { MagneticImage } from "@/components/MagneticImage";
import { getLogoBySlug, getLogoProjectImages } from "@/lib/data";

export default function LogoDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const logo = getLogoBySlug(slug);
  const projectImages = getLogoProjectImages(slug);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const backLinkRef = useRef<HTMLAnchorElement>(null);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (backLinkRef.current) {
      observer.observe(backLinkRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  }, [projectImages.length]);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  }, [projectImages.length]);

  if (!logo) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/logos" className="text-orange hover:text-tangerine">
            Back to Logos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Link
        ref={backLinkRef}
        href="/logos"
        className="group mb-8 inline-flex items-center font-semibold leading-tight text-orange"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Back to Logos
      </Link>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
        {logo.name}
      </h1>
      <p className="mb-12 text-secondary max-w-lg">{logo.description}</p>

      <div className="columns-1 md:columns-2 gap-4">
        {projectImages.map((imageSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedImages.has(index) ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`group relative mb-4 break-inside-avoid cursor-pointer transition-all duration-300 lg:hover:!opacity-100 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-60"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <MagneticImage
              src={imageSrc}
              alt={`${logo.name} - Image ${index + 1}`}
              width={600}
              height={400}
              onLoad={() => handleImageLoad(index)}
              onClick={() => openLightbox(index)}
              containerClassName="rounded-lg bg-cotton"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>

      {projectImages.length === 0 && (
        <div className="text-center py-12 text-secondary">
          <p>No images available for this project.</p>
        </div>
      )}

      <div className="mt-16">
        <Footer />
      </div>

      <Lightbox
        images={projectImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative flex items-center gap-2 px-4 py-3 font-semibold text-orange overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Back to top
              </span>
              <motion.span
                className="absolute inset-0 border-2 border-orange rounded-lg"
                initial={{ scaleX: 0, scaleY: 0, originX: 0, originY: 1 }}
                whileHover={{
                  scaleX: 1,
                  scaleY: 1,
                  transition: {
                    scaleX: { duration: 0.2, ease: "easeOut" },
                    scaleY: { duration: 0.2, delay: 0.2, ease: "easeOut" },
                  },
                }}
              />
              <motion.span
                className="absolute inset-0 bg-orange/10 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
