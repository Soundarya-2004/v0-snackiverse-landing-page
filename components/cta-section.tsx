export default function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 -z-10" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-20 text-6xl opacity-30 animate-float">🍕</div>
      <div className="absolute bottom-10 right-20 text-6xl opacity-30 animate-bounce-slow">🧁</div>
      <div className="absolute top-1/2 left-1/3 text-5xl opacity-25 animate-twinkle">🌟</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto shadow-xl border border-white/50">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Join the Snackiverse?
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join thousands of snack adventurers exploring the galaxy of flavors. First box ships within 3-5 business
            days!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:scale-105">
              Subscribe Now 🚀
            </button>

            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            💳 Cancel anytime • 🎁 First box 15% off • 🌙 Free shipping on orders over $50
          </p>
        </div>
      </div>
    </section>
  )
}
