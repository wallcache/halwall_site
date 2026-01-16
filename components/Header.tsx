"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { SocialLinks } from "./SocialLinks";
import { AnimatedTitle } from "./AnimatedTitle";
import { heroData } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {isHomePage ? (
            <a href="/">{heroData.name}</a>
          ) : (
            <Link href="/">{heroData.name}</Link>
          )}
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight sm:text-xl">
          <AnimatedTitle
            professionalTitle="Data Engineer at Chubb Insurance"
            creativeTitle="Photographer & Graphic Designer"
          />
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-secondary">
          {heroData.tagline}
        </p>
        <Nav />
      </div>
      <SocialLinks />
    </header>
  );
}
