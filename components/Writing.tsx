"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, BookOpen, FileText } from "lucide-react";
import { writingData } from "@/lib/data";

export function Writing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "book-review":
        return <BookOpen className="h-4 w-4" />;
      case "essay":
      case "blog":
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "book-review":
        return "Book Review";
      case "essay":
        return "Essay";
      case "blog":
        return "Blog";
      default:
        return category;
    }
  };

  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Writing and book reviews"
    >
      <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-linen/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blackhole lg:sr-only">
          Writing
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {writingData.map((item, index) => (
            <li
              key={index}
              className="mb-8"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "lg:group-hover/list:opacity-50"
                    : ""
                }`}
              >
                {/* Geometric card background - hard border style */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-cotton lg:group-hover:border-2 lg:group-hover:border-orange" />
                <header
                  className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-secondary sm:col-span-2"
                  aria-label={item.date}
                >
                  <div className="flex items-center gap-2 text-blackhole">
                    {getCategoryIcon(item.category)}
                    <span>{item.date}</span>
                  </div>
                  <div className="mt-1 text-[10px] normal-case tracking-normal text-secondary">
                    {getCategoryLabel(item.category)}
                  </div>
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-bold leading-snug text-blackhole">
                    <a
                      className="group/link inline-flex items-baseline text-base font-bold leading-tight text-blackhole hover:text-orange focus-visible:text-orange"
                      href={item.link}
                      aria-label={`${item.title}${item.author ? ` by ${item.author}` : ""}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {item.title}
                        {item.author && (
                          <span className="text-secondary font-medium">
                            {" "}
                            — {item.author}
                          </span>
                        )}
                        <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </a>
                  </h3>
                  {item.rating && (
                    <div
                      className="mt-1 flex items-center gap-0.5"
                      aria-label={`Rating: ${item.rating} out of 5 stars`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < item.rating!
                              ? "fill-orange text-orange"
                              : "text-blackhole/20"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  <p className="mt-2 text-sm leading-normal text-blackhole">{item.excerpt}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="group inline-flex items-center font-bold leading-tight text-blackhole hover:text-orange focus-visible:text-orange"
            href="/writing"
            aria-label="View all writing"
          >
            <span>
              <span className="border-b-2 border-transparent pb-px transition group-hover:border-orange motion-reduce:transition-none">
                View All{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b-2 border-transparent pb-px transition group-hover:border-orange motion-reduce:transition-none">
                  Writing
                </span>
                <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
