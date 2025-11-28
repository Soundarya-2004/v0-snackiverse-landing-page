"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 -z-20" />

      {/* Animated stars background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-twinkle top-20 left-10 opacity-60" />
        <div
          className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full animate-twinkle top-32 right-20 opacity-50"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute w-1 h-1 bg-pink-300 rounded-full animate-twinkle top-40 left-1/4 opacity-70"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle top-1/3 right-1/4 opacity-60"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-twinkle bottom-40 left-20 opacity-80"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute w-1 h-1 bg-blue-300 rounded-full animate-twinkle bottom-20 right-32 opacity-60"
          style={{ animationDelay: "0.3s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-purple-600">Taste the Universe,</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
                  One Snack at a Time
                </span>
                <span className="ml-2">✨</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">
                Discover international treats, surprise themes, and collectible cards delivered monthly.
              </p>
            </div>

            <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:scale-105">
              Start Your Snack Adventure 🚀
              <span className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right side - Floating snacks illustration */}
          <div className="relative h-96 md:h-full hidden lg:flex items-center justify-center">
            {/* Large snack circle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl opacity-30" />

            {/* Floating snack elements */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Center snack */}
              <div className="absolute animate-float">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-6xl shadow-lg">
                  🍪
                </div>
              </div>

              {/* Orbiting snacks */}
              <div className="absolute w-64 h-64">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce-slow">
                  <div className="text-5xl filter drop-shadow-lg">🍬</div>
                </div>
              </div>

              <div className="absolute w-80 h-80">
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-5xl filter drop-shadow-lg">🍫</div>
                </div>
              </div>

              <div className="absolute w-80 h-80">
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce-slow"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div className="text-5xl filter drop-shadow-lg">🍭</div>
                </div>
              </div>

              <div className="absolute w-72 h-72">
                <div className="absolute left-0 top-1/3 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="text-5xl filter drop-shadow-lg">🍩</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
