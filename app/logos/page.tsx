"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { MagneticImage } from "@/components/MagneticImage";
import { logosData } from "@/lib/data";

export default function LogosPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

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
        Brand Identities
      </h1>
      <p className="mb-12 text-secondary max-w-lg">
        Clean, purposeful marks that stand the test of time. Logo design and brand identity work for 12 featured projects.
      </p>

      <div className="group/list grid grid-cols-2 md:grid-cols-3 gap-6">
        {logosData.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: loadedImages.has(index) ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`group relative transition-all duration-300 lg:hover:!opacity-100 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "lg:group-hover/list:opacity-50"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={`/logos/${logo.slug}`} className="block">
              <div className="relative aspect-square rounded-lg border-2 border-blackhole bg-cotton transition-all duration-300 group-hover:border-orange">
                <MagneticImage
                  src={logo.src}
                  alt={logo.name}
                  fill
                  onLoad={() => handleImageLoad(index)}
                  containerClassName="absolute inset-0 rounded-lg"
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-sm font-medium group-hover:text-orange transition-colors">
                  {logo.name}
                </h3>
                {logo.description && (
                  <p className="text-xs text-secondary mt-1">
                    {logo.description}
                  </p>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}
