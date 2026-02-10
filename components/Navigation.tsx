"use client";

import { useState } from "react";
import Link from "next/link";
import type { Language } from "@/types/project";

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const languages: { code: Language; label: string }[] = [
  { code: "kr", label: "KR" },
  { code: "en", label: "EN" },
  { code: "cn", label: "CN" },
];

export default function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-almost-black/80 backdrop-blur-md border-b border-stroke">
      <nav className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white hover:text-lime transition-colors">
          Bea.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-text-sub hover:text-white transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-text-sub hover:text-white transition-colors">
            Projects
          </Link>
        </div>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                currentLang === lang.code
                  ? "bg-lime text-almost-black font-semibold"
                  : "text-text-sub hover:text-white"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text-sub hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-gray border-t border-stroke">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-text-sub hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-text-sub hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <div className="flex gap-2 pt-2 border-t border-stroke">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    currentLang === lang.code
                      ? "bg-lime text-almost-black font-semibold"
                      : "text-text-sub hover:text-white"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
