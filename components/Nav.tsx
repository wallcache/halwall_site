"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { sectionLinks, pageLinks, photographyProjects, bookReviewsData } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

// Photography subsections for navigation
const photographySections = [
  { name: "Landscapes", href: "#landscapes" },
  { name: "Cityscapes", href: "#cityscapes" },
  { name: "Portraits", href: "#portraits" },
  { name: "Commercial", href: "#commercial-projects" },
];

// Commercial project subsections
const commercialSubsections = photographyProjects.map((project) => ({
  name: project.name,
  href: `#${project.slug}`,
}));

// Book reviews sorted alphabetically
const bookReviewsSorted = [...bookReviewsData]
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((book) => ({
    name: book.title,
    href: `#${book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`,
  }));

export function Nav() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showCommercialSubs, setShowCommercialSubs] = useState(false);
  const [showBooksList, setShowBooksList] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isPhotographyPage = pathname === "/photography";
  const isWritingPage = pathname === "/writing";
  const isCreativePage = ["/photography", "/logos", "/animations", "/writing"].includes(pathname) || pathname.startsWith("/logos/");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const sections = sectionLinks.map((link) => link.href.slice(1));
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    if (isPhotographyPage) {
      const handleScroll = () => {
        // Show subsections after scrolling past 200px
        setHasScrolled(window.scrollY > 200);

        // Check if we've scrolled past the commercial-projects section
        const commercialSection = document.getElementById("commercial-projects");
        if (commercialSection) {
          const { offsetTop } = commercialSection;
          setShowCommercialSubs(window.scrollY + 200 >= offsetTop);
        }

        const scrollPosition = window.scrollY + 150;
        let foundSection = false;

        // Check commercial subsections FIRST (most specific)
        // These need to be checked before commercial-projects since they're nested inside it
        for (const sub of commercialSubsections) {
          const sectionId = sub.href.slice(1);
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(sectionId);
              foundSection = true;
              break;
            }
          }
        }

        // If no commercial subsection matched, check main photography sections
        if (!foundSection) {
          for (const section of photographySections) {
            const sectionId = section.href.slice(1);
            const element = document.getElementById(sectionId);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setHasScrolled(false);
      setShowCommercialSubs(false);
    }
  }, [isHomePage, isPhotographyPage]);

  // Determine if a link should show expanded state
  const isExpanded = (sectionId: string) => {
    return hoveredSection === sectionId || (hoveredSection === null && activeSection === sectionId);
  };

  const renderNavLink = (
    href: string,
    name: string,
    isActive: boolean,
    isAnchor: boolean = false,
    indent: number = 0
  ) => {
    const expanded = hoveredSection === href.replace("#", "").replace("/", "") ||
      (hoveredSection === null && isActive);
    const linkId = href.replace("#", "").replace("/", "");

    const content = (
      <>
        <span
          className="nav-indicator mr-4 h-[2px] origin-left"
          style={{
            width: indent > 0 ? "32px" : "64px",
            transform: expanded ? "scaleX(1)" : "scaleX(0.5)",
            backgroundColor: expanded
              ? "#E9631A"
              : isDark
                ? "rgba(250, 243, 225, 0.3)"
                : "rgba(34, 34, 34, 0.3)",
          }}
        />
        <span
          className="text-xs font-bold uppercase tracking-widest transition-all duration-300 motion-reduce:transition-none"
          style={{
            color: expanded
              ? isDark ? "#FAF3E1" : "#222222"
              : isDark
                ? "rgba(250, 243, 225, 0.5)"
                : "rgba(34, 34, 34, 0.5)",
            fontSize: indent > 0 ? "0.65rem" : undefined,
          }}
        >
          {name}
        </span>
      </>
    );

    if (isAnchor) {
      return (
        <a
          href={href}
          className="group flex items-center py-2"
          style={{ paddingLeft: indent > 0 ? `${indent * 12}px` : undefined }}
          onMouseEnter={() => setHoveredSection(linkId)}
          onMouseLeave={() => setHoveredSection(null)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className="group flex items-center py-2"
        style={{ paddingLeft: indent > 0 ? `${indent * 12}px` : undefined }}
        onMouseEnter={() => setHoveredSection(linkId)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        {content}
      </Link>
    );
  };

  return (
    <nav className="nav hidden lg:block" aria-label="Navigation">
      <ul className="mt-16 w-max">
        {/* Section links (anchor links on home page) */}
        {isHomePage &&
          sectionLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const expanded = isExpanded(sectionId);

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group flex items-center py-3"
                  onMouseEnter={() => setHoveredSection(sectionId)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <span
                    className="nav-indicator mr-4 h-[2px] origin-left"
                    style={{
                      width: "64px",
                      transform: expanded ? "scaleX(1)" : "scaleX(0.5)",
                      backgroundColor: expanded
                        ? "#E9631A"
                        : isDark
                          ? "rgba(250, 243, 225, 0.3)"
                          : "rgba(34, 34, 34, 0.3)",
                    }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-widest transition-all duration-300 motion-reduce:transition-none"
                    style={{
                      color: expanded
                        ? isDark ? "#FAF3E1" : "#222222"
                        : isDark
                          ? "rgba(250, 243, 225, 0.5)"
                          : "rgba(34, 34, 34, 0.5)",
                    }}
                  >
                    {link.name}
                  </span>
                </a>
              </li>
            );
          })}

        {/* Creative page links - Photography, Logos, Writing */}
        {isCreativePage && pageLinks.map((link) => {
          const linkId = link.href.slice(1);
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          const expanded = hoveredSection === linkId || (hoveredSection === null && isActive);

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="group flex items-center py-3"
                onMouseEnter={() => setHoveredSection(linkId)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <span
                  className="nav-indicator mr-4 h-[2px] origin-left"
                  style={{
                    width: "64px",
                    transform: expanded ? "scaleX(1)" : "scaleX(0.5)",
                    backgroundColor: expanded
                      ? "#E9631A"
                      : isDark
                        ? "rgba(250, 243, 225, 0.3)"
                        : "rgba(34, 34, 34, 0.3)",
                  }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest transition-all duration-300 motion-reduce:transition-none"
                  style={{
                    color: expanded
                      ? isDark ? "#FAF3E1" : "#222222"
                      : isDark
                        ? "rgba(250, 243, 225, 0.5)"
                        : "rgba(34, 34, 34, 0.5)",
                  }}
                >
                  {link.name}
                </span>
              </Link>

              {/* Writing page - Books dropdown */}
              {isWritingPage && link.href === "/writing" && (
                <div className="mt-3 ml-6">
                  <button
                    onClick={() => setShowBooksList(!showBooksList)}
                    className="group flex items-center py-2 cursor-pointer"
                  >
                    <span
                      className="nav-indicator mr-4 h-[2px] origin-left transition-transform duration-300"
                      style={{
                        width: "48px",
                        transform: showBooksList ? "scaleX(1)" : "scaleX(0.5)",
                        backgroundColor: showBooksList
                          ? "#E9631A"
                          : isDark
                            ? "rgba(250, 243, 225, 0.3)"
                            : "rgba(34, 34, 34, 0.3)",
                      }}
                    />
                    <span
                      className="text-xs font-bold uppercase tracking-widest transition-all duration-300"
                      style={{
                        color: showBooksList
                          ? isDark ? "#FAF3E1" : "#222222"
                          : isDark
                            ? "rgba(250, 243, 225, 0.5)"
                            : "rgba(34, 34, 34, 0.5)",
                      }}
                    >
                      Books {showBooksList ? "▴" : "▾"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {showBooksList && (
                      <motion.div
                        className="relative mt-1 ml-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ height: "calc(100vh - 480px)" }}
                      >
                        <ul
                          className="h-full overflow-y-auto pr-4 pb-16"
                          style={{
                            scrollbarWidth: "thin",
                            scrollbarColor: isDark ? "rgba(250, 243, 225, 0.2) transparent" : "rgba(34, 34, 34, 0.2) transparent",
                            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                          }}
                        >
                          {bookReviewsSorted.map((book, index) => {
                            const bookId = book.href.slice(1);
                            const isActiveBook = activeSection === bookId;
                            const bookExpanded = hoveredSection === bookId || (hoveredSection === null && isActiveBook);

                            return (
                              <motion.li
                                key={book.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.15, delay: index * 0.02 }}
                              >
                                <a
                                  href={book.href}
                                  className="group flex items-center py-2"
                                  onMouseEnter={() => setHoveredSection(bookId)}
                                  onMouseLeave={() => setHoveredSection(null)}
                                >
                                  <span
                                    className="nav-indicator mr-4 h-[2px] origin-left transition-transform duration-300"
                                    style={{
                                      width: "40px",
                                      transform: bookExpanded ? "scaleX(1)" : "scaleX(0.5)",
                                      backgroundColor: bookExpanded
                                        ? "#E9631A"
                                        : isDark
                                          ? "rgba(250, 243, 225, 0.3)"
                                          : "rgba(34, 34, 34, 0.3)",
                                    }}
                                  />
                                  <span
                                    className="text-xs font-bold uppercase tracking-widest transition-all duration-300"
                                    style={{
                                      color: bookExpanded
                                        ? isDark ? "#FAF3E1" : "#222222"
                                        : isDark
                                          ? "rgba(250, 243, 225, 0.5)"
                                          : "rgba(34, 34, 34, 0.5)",
                                    }}
                                  >
                                    {book.name}
                                  </span>
                                </a>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Photography subsections - animated, only show when scrolled */}
              <AnimatePresence>
                {isPhotographyPage && link.href === "/photography" && hasScrolled && (
                  <motion.ul
                    className="ml-4 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {photographySections.map((section, index) => {
                      const sectionId = section.href.slice(1);
                      const isActiveSection = activeSection === sectionId ||
                        (section.href === "#commercial-projects" && commercialSubsections.some(s => activeSection === s.href.slice(1)));
                      const sectionExpanded = hoveredSection === sectionId || (hoveredSection === null && isActiveSection);

                      return (
                        <motion.li
                          key={section.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <a
                            href={section.href}
                            className="group flex items-center py-2"
                            onMouseEnter={() => setHoveredSection(sectionId)}
                            onMouseLeave={() => setHoveredSection(null)}
                          >
                            <span
                              className="nav-indicator mr-3 h-[1px] origin-left"
                              style={{
                                width: "32px",
                                transform: sectionExpanded ? "scaleX(1)" : "scaleX(0.5)",
                                backgroundColor: sectionExpanded
                                  ? "#E9631A"
                                  : isDark
                                    ? "rgba(250, 243, 225, 0.2)"
                                    : "rgba(34, 34, 34, 0.2)",
                              }}
                            />
                            <span
                              className="text-[10px] font-semibold uppercase tracking-widest transition-all duration-300"
                              style={{
                                color: sectionExpanded
                                  ? isDark ? "#FAF3E1" : "#222222"
                                  : isDark
                                    ? "rgba(250, 243, 225, 0.4)"
                                    : "rgba(34, 34, 34, 0.4)",
                              }}
                            >
                              {section.name}
                            </span>
                          </a>

                          {/* Commercial project sub-subsections - only show when scrolled to commercial section */}
                          {section.href === "#commercial-projects" && (
                            <AnimatePresence>
                              {showCommercialSubs && (
                                <motion.ul
                                  className="ml-6 overflow-hidden"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                  {commercialSubsections.map((project, projectIndex) => {
                                    const projectId = project.href.slice(1);
                                    const isActiveProject = activeSection === projectId;
                                    const projectExpanded = hoveredSection === projectId || (hoveredSection === null && isActiveProject);

                                    return (
                                      <motion.li
                                        key={project.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2, delay: projectIndex * 0.05 }}
                                      >
                                        <a
                                          href={project.href}
                                          className="group flex items-center py-1.5"
                                          onMouseEnter={() => setHoveredSection(projectId)}
                                          onMouseLeave={() => setHoveredSection(null)}
                                        >
                                          <span
                                            className="nav-indicator mr-3 h-[1px] origin-left"
                                            style={{
                                              width: "24px",
                                              transform: projectExpanded ? "scaleX(1)" : "scaleX(0.5)",
                                              backgroundColor: projectExpanded
                                                ? "#E9631A"
                                                : isDark
                                                  ? "rgba(250, 243, 225, 0.15)"
                                                  : "rgba(34, 34, 34, 0.15)",
                                            }}
                                          />
                                          <span
                                            className="text-[10px] font-semibold uppercase tracking-widest transition-all duration-300"
                                            style={{
                                              color: projectExpanded
                                                ? isDark ? "#FAF3E1" : "#222222"
                                                : isDark
                                                  ? "rgba(250, 243, 225, 0.35)"
                                                  : "rgba(34, 34, 34, 0.35)",
                                            }}
                                          >
                                            {project.name}
                                          </span>
                                        </a>
                                      </motion.li>
                                    );
                                  })}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          )}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
