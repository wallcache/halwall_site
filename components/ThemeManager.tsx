"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CREATIVE_ROUTES = ["/photography", "/logos", "/writing"];

function isCreativeRoute(path: string): boolean {
  return CREATIVE_ROUTES.some((route) => path.startsWith(route));
}

export function ThemeManager() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const isDark = isCreativeRoute(pathname);

    if (isDark) {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
  }, [pathname]);

  // This component renders nothing - it just manages the theme class
  return null;
}
