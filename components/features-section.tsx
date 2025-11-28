"use client"

export default function FeaturesSection() {
  const features = [
    {
      icon: "🌍",
      title: "International Treats",
      description:
        "Curated snacks from around the world, handpicked to delight your taste buds with exotic flavors from every continent.",
      color: "from-blue-400 to-cyan-300",
    },
    {
      icon: "🎁",
      title: "Surprise Themes",
      description:
        "Each month brings a new cosmic theme and adventure. Never know what delicious discovery awaits you!",
      color: "from-purple-400 to-pink-300",
    },
    {
      icon: "🃏",
      title: "Collector Cards",
      description: "Limited edition cards with every box. Collect them all and unlock exclusive rewards and bonuses.",
      color: "from-pink-400 to-rose-300",
    },
  ]

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-float">🌟</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-20 animate-bounce-slow">🪐</div>
      <div className="absolute top-1/2 right-1/4 text-4xl opacity-15 animate-rotate-slow">✨</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600">What Makes Snackiverse Special?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Three cosmic reasons why our snack lovers keep coming back for more interstellar flavor adventures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform group-hover:animate-bounce-slow">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-purple-600 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Gradient bottom accent */}
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-full transition-all duration-300" />

                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 text-purple-600 font-semibold hover:text-pink-600 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
