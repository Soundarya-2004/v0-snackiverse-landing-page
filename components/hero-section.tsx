"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 -z-20" />

      {/* Animated stars background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-opacity-60"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              backgroundColor: ["#9333ea", "#ec4899", "#60a5fa", "#fbbf24"][i % 4],
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-purple-600">Taste the</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                  Universe
                </span>
                <br />
                <span className="text-purple-600">One Snack at a Time</span>
                <span className="ml-2 inline-block animate-bounce-slow">✨</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">
                Discover international treats, surprise themes, and collectible cards delivered monthly. Join thousands
                of snack adventurers exploring a galaxy of flavors.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Start Your Adventure
                <span className="group-hover:translate-x-1 transition-transform">🚀</span>
              </button>
              <button className="px-8 py-4 border-2 border-purple-300 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span>Monthly delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                <span>Worldwide shipping</span>
              </div>
            </div>
          </div>

          {/* Right side - Floating snacks illustration */}
          <div className="relative h-96 md:h-full hidden lg:flex items-center justify-center">
            {/* Floating snack elements */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Center snack */}
              <div className="absolute animate-float">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-6xl shadow-lg hover:scale-110 transition-transform">
                  🍪
                </div>
              </div>

              {/* Orbiting snacks */}
              <div className="absolute w-64 h-64">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce-slow hover:scale-125 transition-transform cursor-pointer">
                  <div className="text-5xl filter drop-shadow-lg">🍬</div>
                </div>
              </div>

              <div className="absolute w-80 h-80">
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 animate-float hover:scale-125 transition-transform cursor-pointer"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-5xl filter drop-shadow-lg">🍫</div>
                </div>
              </div>

              <div className="absolute w-80 h-80">
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce-slow hover:scale-125 transition-transform cursor-pointer"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="text-5xl filter drop-shadow-lg">🍭</div>
                </div>
              </div>

              <div className="absolute w-72 h-72">
                <div
                  className="absolute left-0 top-1/3 animate-float hover:scale-125 transition-transform cursor-pointer"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="text-5xl filter drop-shadow-lg">🍩</div>
                </div>
              </div>

              <div className="absolute w-96 h-96">
                <div className="absolute left-1/4 bottom-1/4 animate-pulse-slow hover:scale-125 transition-transform cursor-pointer">
                  <div className="text-4xl filter drop-shadow-lg">🌟</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
