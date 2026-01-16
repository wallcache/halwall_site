"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const moreLinks = [
  { name: "Photography", href: "/photography" },
  { name: "Logos", href: "/logos" },
  { name: "Animations", href: "/animations" },
  { name: "Book Reviews", href: "/writing" },
];

// Magnetic dropdown link component
function MagneticLink({
  href,
  children,
  onClick
}: {
  href: string;
  children: string;
  onClick: () => void;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.15;
    const distanceY = (e.clientY - centerY) * 0.25;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Link
      ref={linkRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative block mx-1 px-4 py-3 text-sm font-medium text-[#FAF3E1]/80 hover:text-orange rounded-lg hover:bg-orange/10 transition-colors duration-300 ease-out"
    >
      <motion.span
        className="relative inline-block"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      >
        {children}
        <motion.span
          className="absolute left-0 -bottom-0.5 h-[2px] bg-gradient-to-r from-orange to-tangerine"
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? "100%" : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.span>
    </Link>
  );
}

// Magnetic 3D button component
function Magnetic3DButton({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Magnetic pull
    const distanceX = (e.clientX - centerX) * 0.2;
    const distanceY = (e.clientY - centerY) * 0.2;
    setPosition({ x: distanceX, y: distanceY });

    // 3D rotation based on mouse position
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -12;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="ml-4 px-3 py-1 text-sm font-semibold text-linen bg-orange rounded-sm border-2 border-orange"
      style={{ transformStyle: "preserve-3d", perspective: "500px" }}
      animate={{
        x: position.x,
        y: position.y,
        rotateX: rotation.x,
        rotateY: rotation.y,
        boxShadow: isHovered
          ? "4px 4px 0px 0px #c45a2a, 8px 8px 0px 0px #a04820, 0px 10px 30px rgba(217, 117, 71, 0.4)"
          : "2px 2px 0px 0px #c45a2a, 4px 4px 0px 0px #a04820, 0px 4px 15px rgba(217, 117, 71, 0.2)",
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
        mass: 0.5
      }}
    >
      {children}
    </motion.a>
  );
}

// Magnetic dropdown container component
function MagneticDropdown({
  children,
  onMouseLeave,
}: {
  children: React.ReactNode;
  onMouseLeave: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dropdownRef.current) return;
    const rect = dropdownRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.08;
    const distanceY = (e.clientY - centerY) * 0.08;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    onMouseLeave();
  };

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        x: position.x,
        translateY: position.y,
      }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-orange/30 overflow-hidden bg-[#1a1a1a] shadow-[0_0_25px_rgba(217,117,71,0.4),0_0_50px_rgba(217,117,71,0.2)]"
    >
      {children}
    </motion.div>
  );
}

// Magnetic "More" button component
function MagneticMoreButton({
  isOpen,
  onClick,
  onMouseEnter,
  isDark,
}: {
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  isDark: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.2;
    const distanceY = (e.clientY - centerY) * 0.3;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors ${
        isDark
          ? "text-[#FAF3E1] hover:text-orange"
          : "text-blackhole hover:text-orange"
      }`}
    >
      <motion.span
        className="flex items-center gap-1"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      >
        More
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.span>
    </button>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? isDark
            ? "bg-[#1a1a1a]/70 backdrop-blur-xl border-[#FAF3E1]/10"
            : "bg-linen/60 backdrop-blur-xl border-blackhole/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="flex h-16 items-center justify-end">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* More dropdown */}
            <div className="relative" ref={dropdownRef}>
              <MagneticMoreButton
                isOpen={moreDropdownOpen}
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onMouseEnter={() => setMoreDropdownOpen(true)}
                isDark={isDark}
              />

              <AnimatePresence>
                {moreDropdownOpen && (
                  <MagneticDropdown onMouseLeave={() => setMoreDropdownOpen(false)}>
                    <div className="py-2 px-1">
                      {moreLinks.map((link) => (
                        <MagneticLink
                          key={link.name}
                          href={link.href}
                          onClick={() => setMoreDropdownOpen(false)}
                        >
                          {link.name}
                        </MagneticLink>
                      ))}
                    </div>
                  </MagneticDropdown>
                )}
              </AnimatePresence>
            </div>

            {/* CV Button - Magnetic 3D */}
            <Magnetic3DButton href="/assets/content/cv/Hal_Wall_CV.pdf">
              CV
            </Magnetic3DButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isDark
                ? "text-[#FAF3E1] hover:text-orange"
                : "text-blackhole hover:text-orange"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden backdrop-blur-xl border-b ${
              isDark
                ? "bg-[#1a1a1a]/70 border-[#FAF3E1]/10"
                : "bg-linen/60 border-blackhole/10"
            }`}
          >
            <div className="px-6 py-4 space-y-1">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-sm transition-colors ${
                    isDark
                      ? "text-[#FAF3E1] hover:text-orange hover:bg-[#262626]"
                      : "text-blackhole hover:text-orange hover:bg-cotton"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* CV Button */}
              <a
                href="/assets/content/cv/Hal_Wall_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block mx-4 mt-4 px-5 py-3 text-center text-base font-semibold text-linen bg-orange hover:bg-tangerine rounded-sm transition-colors border-2 border-orange hover:border-tangerine"
              >
                View CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
