"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experienceData } from "@/lib/data";

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-16 z-20 -mx-6 mb-4 w-screen bg-linen/95 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blackhole lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experienceData.map((job, index) => (
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
                className={`group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "lg:group-hover/list:opacity-50"
                    : ""
                }`}
              >
                {/* Geometric card background - hard border style */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-cotton lg:group-hover:border-2 lg:group-hover:border-orange" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-secondary sm:col-span-2"
                  aria-label={job.dateRange}
                >
                  {/* Geometric date tab */}
                  <span className="inline-flex items-center rounded-sm bg-cotton border-2 border-blackhole px-3 py-1.5">
                    {job.dateRange}
                  </span>
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-bold leading-snug text-blackhole">
                    <div>
                      <a
                        className="group/link inline-flex items-baseline text-base font-bold leading-tight text-blackhole hover:text-orange focus-visible:text-orange"
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${job.title} at ${job.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {job.title} ·{" "}
                          <span className="inline-block">
                            {job.company}
                            <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-blackhole">{job.description}</p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mr-1.5 mt-2">
                        {/* Tag/Pill: #222222 text on #EBEBDF background with thin orange border */}
                        <div className="flex items-center rounded-full bg-oatmilk border border-orange px-3 py-1 text-xs font-semibold leading-5 text-blackhole">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="group inline-flex items-center font-bold leading-tight text-blackhole hover:text-orange focus-visible:text-orange"
            href="/assets/content/cv/Hal_Wall_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Full CV (opens in a new tab)"
          >
            <span>
              <span className="border-b-2 border-transparent pb-px transition group-hover:border-orange motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b-2 border-transparent pb-px transition group-hover:border-orange motion-reduce:transition-none">
                  CV
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
