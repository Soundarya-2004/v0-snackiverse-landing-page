"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-purple-100 to-blue-100 border-t-4 border-purple-300 relative overflow-hidden"
    >
      <div className="absolute top-10 right-20 text-5xl opacity-10 animate-float">🌟</div>
      <div className="absolute bottom-20 left-10 text-6xl opacity-10 animate-bounce-slow">🪐</div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-3 animate-slide-up">
            <h3 className="text-2xl font-bold text-purple-600">✨ Snackiverse</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover the universe of snacks, one cosmic box at a time. Join our adventure!
            </p>
          </div>

          {/* Quick links */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold text-purple-600 mb-4 text-lg">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Subscribe", "Gift Boxes", "Collections", "Bulk Orders"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-purple-600 hover:translate-x-1 transition-all inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-purple-600 mb-4 text-lg">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Contact Us", "FAQ", "Shipping Info", "Returns"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-purple-600 hover:translate-x-1 transition-all inline-block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Newsletter */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold text-purple-600 mb-4 text-lg">Connect</h4>
            <div className="flex gap-3 mb-4 text-2xl">
              {["📱", "🐦", "📸", "💬"].map((emoji) => (
                <button
                  key={emoji}
                  className="hover:scale-125 transition-transform duration-300 active:scale-95"
                  aria-label={emoji}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-600">Follow for exclusive offers</p>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-2xl p-6 md:p-8 mb-8 text-center md:text-left md:flex md:items-center md:justify-between gap-4">
          <div>
            <h4 className="font-bold text-purple-700 mb-1 text-lg">Get Cosmic Deals</h4>
            <p className="text-purple-600 text-sm">Subscribe for 15% off your first box</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full flex-1 md:flex-none border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Email for newsletter"
            />
            <button className="px-6 py-2 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-transform">
              Sign Up
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2025 Snackiverse. All rights reserved. 🌌</p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-end">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
              <Link key={link} href="#" className="hover:text-purple-600 transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
