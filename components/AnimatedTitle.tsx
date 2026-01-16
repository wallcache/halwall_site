"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface AnimatedTitleProps {
  professionalTitle: string;
  creativeTitle: string;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz&";
const CREATIVE_ROUTES = ["/photography", "/logos", "/animations", "/writing"];
const ANIMATION_INTERVAL = 50; // ms between frames
const CHARS_PER_FRAME = 2; // characters revealed/hidden per frame
const TRANSITION_DELAY = 620; // delay to sync with theme sweep (when screen is covered)

function isCreativeRoute(path: string): boolean {
  return CREATIVE_ROUTES.some((route) => path.startsWith(route));
}

export function AnimatedTitle({
  professionalTitle,
  creativeTitle,
  className = "",
}: AnimatedTitleProps) {
  const pathname = usePathname();
  const isCreativePage = isCreativeRoute(pathname);
  const targetTitle = isCreativePage ? creativeTitle : professionalTitle;

  const [displayText, setDisplayText] = useState(targetTitle);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const previousCreativeRef = useRef(isCreativePage);
  const previousTitleRef = useRef(targetTitle);

  useEffect(() => {
    const wasCreative = previousCreativeRef.current;
    const nowCreative = isCreativePage;
    let delayTimeout: NodeJS.Timeout | null = null;

    // Only animate when switching between professional and creative
    if (wasCreative !== nowCreative) {
      const oldTarget = previousTitleRef.current;
      const newTarget = nowCreative ? creativeTitle : professionalTitle;

      // Delay the animation to sync with theme sweep
      delayTimeout = setTimeout(() => {
        let phase: "out" | "in" = "out";
        let iteration = oldTarget.length;

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
          if (phase === "out") {
            // Animate out: scramble from end to start
            setDisplayText(
              oldTarget
                .split("")
                .map((letter, index) => {
                  if (index < iteration) {
                    return oldTarget[index];
                  }
                  if (letter === " ") {
                    return " ";
                  }
                  return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("")
            );

            iteration -= CHARS_PER_FRAME;

            if (iteration <= 0) {
              phase = "in";
              iteration = 0;
              // Brief scramble before starting new text
              setDisplayText(
                newTarget
                  .split("")
                  .map((letter) =>
                    letter === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]
                  )
                  .join("")
              );
            }
          } else {
            // Animate in: reveal from start to end
            setDisplayText(
              newTarget
                .split("")
                .map((letter, index) => {
                  if (index < iteration) {
                    return newTarget[index];
                  }
                  if (letter === " ") {
                    return " ";
                  }
                  return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("")
            );

            iteration += CHARS_PER_FRAME;

            if (iteration >= newTarget.length) {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
              setDisplayText(newTarget);
              previousTitleRef.current = newTarget;
            }
          }
        }, ANIMATION_INTERVAL);
      }, TRANSITION_DELAY);
    }

    previousCreativeRef.current = nowCreative;

    return () => {
      if (delayTimeout) {
        clearTimeout(delayTimeout);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [pathname, isCreativePage, creativeTitle, professionalTitle]);

  return <span className={className}>{displayText}</span>;
}
