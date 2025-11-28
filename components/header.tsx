"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-purple-200"
          : "bg-gradient-to-r from-purple-100/80 via-pink-100/80 to-blue-100/80 backdrop-blur-md border-b-2 border-purple-200/50"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo and Brand */}
          <Link href="/" className="group flex items-center gap-2 transition-all duration-300 hover:scale-105 md:gap-3">
            <div className="relative text-3xl sm:text-4xl animate-float">🌌</div>
            <div className="flex flex-col items-start">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-lg font-bold text-transparent sm:text-xl md:text-2xl">
                Snackiverse
              </span>
              <span className="hidden text-xs font-semibold text-purple-500 sm:block">Cosmic Treats</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden gap-1 md:flex lg:gap-2">
            {[
              { href: "#features", label: "Features", emoji: "⭐" },
              { href: "#themes", label: "Themes", emoji: "🎨" },
              { href: "#cta", label: "Subscribe", emoji: "🚀" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex items-center gap-2 rounded-full px-4 py-2 font-semibold text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200 hover:text-purple-700"
              >
                <span className="text-lg transition-transform group-hover:scale-125">{item.emoji}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-6 py-2.5 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 md:flex lg:px-8">
            <span>Join Now</span>
            <span className="animate-bounce-slow">✨</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-1 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${
                  isOpen
                    ? index === 0
                      ? "rotate-45 translate-y-2.5"
                      : index === 1
                        ? "opacity-0"
                        : "-rotate-45 -translate-y-2.5"
                    : "opacity-100"
                }`}
              />
            ))}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="flex flex-col gap-3 border-t border-purple-200 bg-gradient-to-b from-white/90 to-purple-50/90 py-4 backdrop-blur-md sm:gap-4 md:hidden">
            {[
              { href: "#features", label: "Features", emoji: "⭐" },
              { href: "#themes", label: "Themes", emoji: "🎨" },
              { href: "#cta", label: "Subscribe", emoji: "🚀" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-purple-200/50 hover:text-purple-700"
              >
                <span className="text-lg">{item.emoji}</span>
                {item.label}
              </a>
            ))}
            <button className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 w-full">
              Join Now ✨
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
