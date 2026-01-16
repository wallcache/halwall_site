# Hal Wall - Portfolio Website

A modern, interactive portfolio website showcasing professional work as a Data Engineer alongside creative pursuits in photography, graphic design, and writing.

**Live Site:** [halwall.me](https://halwall.me)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)

---

## Overview

This portfolio bridges two worlds - the professional (Data Engineering) and the creative (Photography, Logo Design, Animations, Writing). The site features a unique dual-theme system that transitions between light "professional" pages and dark "creative" pages with a smooth sweep animation.

## Key Features

### Dual Theme System with Sweep Transition

The site automatically switches between light and dark themes based on the current page. The transition uses a full-screen sweep animation that covers the content while the theme changes.

```tsx
// ThemeProvider.tsx
const SWEEP_DURATION = 800;

useEffect(() => {
  const newTheme = getThemeForPath(pathname);
  if (newTheme !== previousTheme) {
    setIsTransitioning(true);
    setSweepTheme(newTheme);
    setSweepActive(true);

    // Apply new theme while screen is covered
    const themeTimer = setTimeout(() => {
      setTheme(newTheme);
    }, SWEEP_DURATION * 0.5);
  }
}, [pathname]);
```

```css
/* globals.css */
@keyframes theme-sweep-up {
  0% { transform: translateY(100%); }
  35% { transform: translateY(0%); }
  65% { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
}
```

### Animated Title Text Scramble

The job title animates with a character scramble effect when transitioning between professional and creative pages.

```tsx
// AnimatedTitle.tsx
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz&";

// Animate out: scramble from end to start
setDisplayText(
  oldTarget.split("").map((letter, index) => {
    if (index < iteration) return oldTarget[index];
    if (letter === " ") return " ";
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join("")
);
```

### Interactive Animation Gallery

Hover over animation thumbnails to preview them. Features a 1-second hover delay with an orange loading bar that sweeps upward before the video plays.

```tsx
// animations/page.tsx
<motion.div
  className="absolute inset-0 bg-orange origin-bottom"
  initial={{ scaleY: 0 }}
  animate={{
    scaleY: isHovering && !hasTriggered ? 1 : 0,
    opacity: isHovering && !hasTriggered ? 0.85 : 0,
  }}
  transition={{
    scaleY: { duration: HOVER_DELAY / 1000, ease: "easeInOut" },
  }}
/>
```

### Magnetic Image Effect

Images in the gallery respond to cursor position with a subtle magnetic pull effect.

```tsx
// MagneticImage.tsx
const handleMouseMove = (e: React.MouseEvent) => {
  const rect = containerRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const x = (e.clientX - centerX) * 0.05;
  const y = (e.clientY - centerY) * 0.05;

  setPosition({ x, y });
};
```

### Interactive "Work With Me" Button

The footer features an animated contact button that copies email to clipboard with smooth text transitions and a pulsing glow effect.

```tsx
// Footer.tsx
<motion.button
  onClick={handleCopyEmail}
  animate={copied ? {
    boxShadow: [
      "0 0 20px rgba(233,99,26,0.5)",
      "0 0 40px rgba(233,99,26,0.8)",
      "0 0 20px rgba(233,99,26,0.5)",
    ],
  } : {
    boxShadow: "0 0 20px rgba(233,99,26,0.5)",
  }}
  transition={copied ? {
    boxShadow: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
  } : {}}
>
  <AnimatePresence mode="wait" initial={false}>
    <motion.span
      key={copied ? "copied" : "default"}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
    >
      {copied ? "Email copied to clipboard" : "Work with me"}
    </motion.span>
  </AnimatePresence>
</motion.button>
```

### Scrollable Book Reviews Navigation

The writing page features a scrollable list of book reviews with a fade gradient at the bottom.

```tsx
// Nav.tsx
<ul
  className="h-full overflow-y-auto"
  style={{
    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
  }}
>
  {bookReviewsSorted.map((book) => (
    // Book navigation items
  ))}
</ul>
```

### Back to Top Button with Box Animation

On logo project pages, a "Back to Top" button appears when scrolling past the header, featuring a hover animation where the border draws in from the corner.

```tsx
// logos/[slug]/page.tsx
<motion.span
  className="absolute inset-0 border-2 border-orange rounded-lg"
  initial={{ scaleX: 0, scaleY: 0, originX: 0, originY: 1 }}
  whileHover={{
    scaleX: 1,
    scaleY: 1,
    transition: {
      scaleX: { duration: 0.2, ease: "easeOut" },
      scaleY: { duration: 0.2, delay: 0.2, ease: "easeOut" },
    },
  }}
/>
```

## Project Structure

```
portfolio-v5/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & theme transitions
│   ├── photography/        # Photography gallery
│   ├── logos/              # Logo design projects
│   ├── animations/         # Animation showcase
│   └── writing/            # Book reviews
├── components/
│   ├── ThemeProvider.tsx   # Dual theme system
│   ├── AnimatedTitle.tsx   # Text scramble animation
│   ├── Nav.tsx             # Navigation with subsections
│   ├── Footer.tsx          # Contact button
│   ├── MagneticImage.tsx   # Cursor-following images
│   ├── Lightbox.tsx        # Image viewer
│   └── ...
├── hooks/
│   ├── useDominantColor.ts # Extract colors from images
│   └── useMousePosition.ts # Track cursor position
├── lib/
│   └── data.ts             # Portfolio content data
└── public/
    └── assets/             # Images, videos, fonts
```

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Linen | `#FAF3E1` | Light theme background |
| Blackhole | `#222222` | Dark theme background |
| Orange | `#E9631A` | Primary accent |
| Tangerine | `#FF6D1F` | Hover states |
| Cotton | `#E8E1D3` | Secondary backgrounds |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

This project is personal portfolio work. Feel free to use it as inspiration for your own projects.

---

**Built by [Hal Wall](https://halwall.me)** - Data Engineer & Creative
