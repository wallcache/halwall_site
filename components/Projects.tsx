"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectData } from "@/lib/data";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-linen/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blackhole lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projectData.map((project, index) => (
            <li
              key={index}
              className="mb-12"
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

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="group/link inline-flex items-baseline text-base font-bold leading-tight text-blackhole hover:text-orange focus-visible:text-orange"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-blackhole">
                    {project.description}
                  </p>
                  {project.links ? (
                    <div className="mt-2 flex items-center gap-4">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          className="relative inline-flex items-center text-sm font-semibold text-blackhole hover:text-orange focus-visible:text-orange"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${link.text} (opens in a new tab)`}
                        >
                          <span className="border-b border-blackhole/30 hover:border-orange transition-colors">{link.text}</span>
                        </a>
                      ))}
                    </div>
                  ) : project.linkText && (
                    <a
                      className="relative mt-2 inline-flex items-center text-sm font-semibold text-blackhole hover:text-orange focus-visible:text-orange"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.linkText} (opens in a new tab)`}
                    >
                      <span className="border-b border-blackhole/30 hover:border-orange transition-colors">{project.linkText}</span>
                    </a>
                  )}
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mr-1.5 mt-2">
                        {/* Tag/Pill: #222222 text on #EBEBDF background with thin orange border */}
                        <div className="flex items-center rounded-full bg-oatmilk border border-orange px-3 py-1 text-xs font-semibold leading-5 text-blackhole">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:order-1 sm:col-span-2">
                  {project.featured && (
                    <span className="inline-flex items-center rounded-sm bg-orange border-2 border-blackhole px-2.5 py-1 text-xs font-bold text-linen">
                      Featured
                    </span>
                  )}
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
