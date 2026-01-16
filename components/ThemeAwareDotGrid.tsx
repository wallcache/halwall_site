"use client";

import { DotGridHighlight } from "./DotGridHighlight";
import { useTheme } from "./ThemeProvider";

export function ThemeAwareDotGrid() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <DotGridHighlight
      // Dark mode: Vibrant Orange (#FF7828) 
      // Light mode: Muted/Classic Orange-Brown (#C4956A)
      dotColor={isDark ? "#FF7828" : "#C4956A"}
      minOpacity={isDark ? 0.1 : 0.2} 
      maxOpacity={isDark ? 0.7 : 0.13}      
      minDotSize={isDark ? 3.5 : 3.5}
      maxDotSize={isDark ? 15 : 20}
      dotGap={20}
      magnifyRadius={isDark ? 7 : 300}
      shrinkDelay={isDark ? 1000 : 1000}
    />
  );
}