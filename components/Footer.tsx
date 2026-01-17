"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopyEmail = async () => {
    if (copied) return;
    await navigator.clipboard.writeText("henry.n.wall@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * 0.15;
    const y = (e.clientY - centerY) * 0.15;
    setMousePosition({ x, y });
  };

  return (
    <footer className="relative py-12">
      <div className="max-w-xs text-sm text-secondary">
        <p>
          2026 Edition. Built by{" "}
          <a
            href="https://github.com/wallcache/halwall_site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange hover:text-tangerine transition-colors"
          >
            me
          </a>{" "}
          with Next.js, React and Tailwind. Hosted on Vercel, Naturally.
        </p>
      </div>
      <AnimatePresence>
        {isHovered && !copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-28 z-10 pointer-events-none"
            style={{
              right: 75 - mousePosition.x,
              transform: `translateX(50%) translateY(${mousePosition.y}px)`,
            }}
          >
            <img
              src="/assets/images/videos/letsdothis.gif"
              alt="Let's do this!"
              className="w-[200px]"
              style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.3)" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-12 z-20 w-0 flex justify-center" style={{ right: "75px" }}>
        <motion.button
          ref={buttonRef}
          onClick={handleCopyEmail}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePosition({ x: 0, y: 0 });
          }}
          onMouseMove={handleMouseMove}
          className="bg-orange text-white font-medium px-6 py-3 rounded-full hover:bg-tangerine whitespace-nowrap flex-shrink-0 overflow-hidden"
          whileHover={!copied ? { scale: 1.05 } : {}}
          whileTap={!copied ? { scale: 0.95 } : {}}
          initial={{ opacity: 0 }}
          animate={copied ? {
            opacity: 1,
            boxShadow: [
              "0 0 20px rgba(233,99,26,0.5)",
              "0 0 40px rgba(233,99,26,0.8)",
              "0 0 20px rgba(233,99,26,0.5)",
            ],
          } : {
            opacity: 1,
            boxShadow: "0 0 20px rgba(233,99,26,0.5)",
          }}
          transition={{
            boxShadow: copied ? {
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            } : { duration: 0.3 },
            opacity: { duration: 0.5 },
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? "copied" : "default"}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="block"
            >
              {copied ? "Email copied to clipboard" : "Work with me"}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </footer>
  );
}
