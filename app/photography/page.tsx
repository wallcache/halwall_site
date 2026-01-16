"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Lightbox } from "@/components/Lightbox";
import { MagneticImage } from "@/components/MagneticImage";
import {
  portraitPhotos,
  landscapePhotos,
  cityscapePhotos,
  photographyProjects,
  Photo,
} from "@/lib/data";

function PhotoSection({
  title,
  photos,
  onImageClick,
  startIndex = 0,
  id,
}: {
  title: string;
  photos: Photo[];
  onImageClick: (index: number) => void;
  startIndex?: number;
  id?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  return (
    <section className="mb-16 scroll-mt-24" id={id}>
      <h2 className="text-2xl font-bold tracking-tight mb-6">{title}</h2>
      <div className="columns-1 md:columns-2 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedImages.has(index) ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`group relative mb-4 break-inside-avoid cursor-pointer transition-all duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index ? "opacity-60" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <MagneticImage
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={400}
              onLoad={() => handleImageLoad(index)}
              onClick={() => onImageClick(startIndex + index)}
              containerClassName="rounded-lg"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectSection({
  project,
  onImageClick,
  allImagesStartIndex,
  id,
}: {
  project: (typeof photographyProjects)[0];
  onImageClick: (index: number) => void;
  allImagesStartIndex: number;
  id?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const displayImages = expanded ? project.images : project.images.slice(0, 8);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  return (
    <div className="mb-12 scroll-mt-24" id={id}>
      <h3 className="text-xl font-bold tracking-tight mb-2">{project.name}</h3>
      <p className="text-sm text-secondary mb-4">{project.description}</p>
      <div className="columns-1 md:columns-2 gap-4">
        {displayImages.map((imageSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedImages.has(index) ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`group relative mb-4 break-inside-avoid cursor-pointer transition-all duration-300 ${
              hoveredIndex !== null && hoveredIndex !== index ? "opacity-60" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <MagneticImage
              src={imageSrc}
              alt={`${project.name} - Image ${index + 1}`}
              width={600}
              height={400}
              onLoad={() => handleImageLoad(index)}
              onClick={() => onImageClick(allImagesStartIndex + index)}
              containerClassName="rounded-lg"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
      {project.images.length > 8 && !expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-4 text-sm font-semibold text-orange hover:text-tangerine transition-colors"
        >
          Show all {project.images.length} images
        </button>
      )}
    </div>
  );
}

export default function PhotographyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allPersonalImages = [
    ...landscapePhotos.map((p) => p.src),
    ...cityscapePhotos.map((p) => p.src),
    ...portraitPhotos.map((p) => p.src),
  ];

  const allProjectImages = photographyProjects.flatMap((p) => p.images);
  const allImages = [...allPersonalImages, ...allProjectImages];

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const cityscapeStartIndex = landscapePhotos.length;
  const portraitStartIndex = cityscapeStartIndex + cityscapePhotos.length;
  const projectsStartIndex = portraitStartIndex + portraitPhotos.length;

  let currentProjectStartIndex = projectsStartIndex;

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
        Photography
      </h1>
      <p className="mb-12 text-secondary max-w-lg">
        Photography as an exercise in attention. Quiet scenes, unhurried light,
        ordinary beauty.
      </p>

      <PhotoSection
        title="Landscapes"
        photos={landscapePhotos}
        onImageClick={openLightbox}
        startIndex={0}
        id="landscapes"
      />

      <PhotoSection
        title="Cityscapes"
        photos={cityscapePhotos}
        onImageClick={openLightbox}
        startIndex={cityscapeStartIndex}
        id="cityscapes"
      />

      <PhotoSection
        title="Portraits"
        photos={portraitPhotos}
        onImageClick={openLightbox}
        startIndex={portraitStartIndex}
        id="portraits"
      />

      <section className="mb-16 scroll-mt-24" id="commercial-projects">
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          Commercial Projects
        </h2>
        {photographyProjects.map((project, index) => {
          const startIdx = currentProjectStartIndex;
          currentProjectStartIndex += project.images.length;
          return (
            <ProjectSection
              key={index}
              project={project}
              onImageClick={openLightbox}
              allImagesStartIndex={startIdx}
              id={project.slug}
            />
          );
        })}
      </section>

      <div className="mt-16">
        <Footer />
      </div>

      <Lightbox
        images={allImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </>
  );
}
