"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  isTransitioning: false,
});

export const useTheme = () => useContext(ThemeContext);

const CREATIVE_ROUTES = ["/photography", "/logos", "/animations", "/writing"];
const SWEEP_DURATION = 800; // Duration in ms - smooth transition

function getThemeForPath(path: string): Theme {
  return CREATIVE_ROUTES.some((route) => path.startsWith(route)) ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(() => getThemeForPath(pathname));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sweepActive, setSweepActive] = useState(false);
  const [sweepTheme, setSweepTheme] = useState<Theme>("dark");
  const previousPathRef = useRef<string>(pathname);

  // Update theme when pathname changes
  useEffect(() => {
    const newTheme = getThemeForPath(pathname);
    const previousTheme = getThemeForPath(previousPathRef.current);

    if (newTheme !== previousTheme && previousPathRef.current !== pathname) {
      // Start sweep transition
      setIsTransitioning(true);
      setSweepTheme(newTheme);
      setSweepActive(true);

      // Apply new theme class in the middle of sweep (while screen is covered)
      const themeTimer = setTimeout(() => {
        setTheme(newTheme);
      }, SWEEP_DURATION * 0.5);

      // End sweep animation
      const sweepTimer = setTimeout(() => {
        setSweepActive(false);
        setIsTransitioning(false);
      }, SWEEP_DURATION);

      previousPathRef.current = pathname;

      return () => {
        clearTimeout(themeTimer);
        clearTimeout(sweepTimer);
      };
    }

    previousPathRef.current = pathname;
  }, [pathname]);

  // Apply theme classes to document
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isTransitioning }}>
      {children}
      {/* Theme sweep overlay */}
      <div
        className={`theme-sweep ${sweepActive ? "theme-sweep--active" : ""}`}
        style={{
          backgroundColor: sweepTheme === "dark" ? "#1a1a1a" : "#FAF3E1",
        }}
        aria-hidden="true"
      />
    </ThemeContext.Provider>
  );
}
