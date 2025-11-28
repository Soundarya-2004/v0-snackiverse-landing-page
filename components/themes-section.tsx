"use client"

export default function ThemesSection() {
  const themes = [
    { month: "January", theme: "Arctic Expedition", emoji: "❄️", color: "from-blue-300 to-cyan-300" },
    { month: "February", theme: "Love's Sweet Treats", emoji: "💝", color: "from-rose-300 to-pink-300" },
    { month: "March", theme: "Spring Garden", emoji: "🌸", color: "from-green-300 to-yellow-300" },
    { month: "April", theme: "Rainbow Party", emoji: "🌈", color: "from-purple-300 via-pink-300 to-blue-300" },
    { month: "May", theme: "Tropical Paradise", emoji: "🏝️", color: "from-yellow-300 to-orange-300" },
    { month: "June", theme: "Cosmic Dreams", emoji: "🌌", color: "from-indigo-300 to-purple-300" },
  ]

  return (
    <section id="themes" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute top-10 right-20 text-5xl opacity-20 animate-bounce-slow">🪐</div>
      <div className="absolute bottom-10 left-20 text-6xl opacity-15 animate-float">⭐</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">Monthly Themes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each month is a new adventure with unique cosmic themes and limited-edition snacks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${item.color} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-white/80">{item.month}</p>
                    <h3 className="text-2xl font-bold text-white">{item.theme}</h3>
                  </div>
                  <div className="text-4xl group-hover:scale-125 transition-transform">{item.emoji}</div>
                </div>

                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Limited edition snacks and collectible cards
                </p>

                <div className="mt-4 h-1 w-0 bg-white/50 group-hover:w-12 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
