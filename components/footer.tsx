export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-100 to-blue-100 border-t-2 border-purple-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-purple-600">✨ Snackiverse</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover the universe of snacks, one cosmic box at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-purple-600 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Gift Boxes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-purple-600 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-purple-600 mb-4">Follow</h4>
            <div className="flex gap-4 text-2xl">
              <span className="hover:scale-125 transition cursor-pointer">📱</span>
              <span className="hover:scale-125 transition cursor-pointer">🐦</span>
              <span className="hover:scale-125 transition cursor-pointer">📸</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2025 Snackiverse. All rights reserved. 🌌</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              Terms
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
