"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
};

export function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <li key={link.name} className="mr-5 shrink-0 text-xs">
            <a
              className="block text-blackhole hover:text-orange transition-colors duration-200"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} (opens in a new tab)`}
              title={link.name}
            >
              <span className="sr-only">{link.name}</span>
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
