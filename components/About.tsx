"use client";

import { motion } from "framer-motion";
import { aboutText } from "@/lib/data";
import { HoverVideo } from "./HoverVideo";

// Helper to render text with special hover words
function renderTextWithHoverWords(text: string) {
  // Split on "my dog" to insert the HoverVideo component
  const parts = text.split(/(my dog)/i);

  return parts.map((part, index) => {
    if (part.toLowerCase() === "my dog") {
      return (
        <span key={index}>
          my <HoverVideo word="dog" videoSrc="/assets/images/videos/japhy.mp4" />
        </span>
      );
    }
    return part;
  });
}

export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 pt-8 md:pt-12 lg:pt-16"
      aria-label="About me"
    >
      <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-linen/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blackhole lg:sr-only">
          About
        </h2>
      </div>
      <div>
        {aboutText.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-blackhole leading-relaxed"
          >
            {renderTextWithHoverWords(paragraph)}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
