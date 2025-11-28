"use client"

export default function CTASection() {
  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-200 to-blue-300 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent -z-10" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-20 text-6xl opacity-30 animate-float">🍕</div>
      <div className="absolute bottom-10 right-20 text-6xl opacity-30 animate-bounce-slow">🧁</div>
      <div className="absolute top-1/2 left-1/3 text-5xl opacity-25 animate-twinkle">🌟</div>
      <div className="absolute top-1/3 right-1/4 text-4xl opacity-20 animate-pulse-slow">🍬</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/85 backdrop-blur-sm rounded-3xl p-8 md:p-16 text-center max-w-3xl mx-auto shadow-2xl border border-white/60 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Join the Snackiverse?
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Join thousands of snack adventurers exploring the galaxy of flavors. Your first box ships within 3-5
            business days, and we guarantee 100% satisfaction with every bite.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 p-4 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <h4 className="font-bold text-purple-700 mb-2">Monthly Plan</h4>
              <p className="text-sm text-gray-600">$29/month • Cancel anytime</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 p-4 border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <h4 className="font-bold text-blue-700 mb-2">Quarterly Plan</h4>
              <p className="text-sm text-gray-600">$75/3 months • Save 15%</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Subscribe Now 🚀
            </button>

            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300 active:scale-95">
              Learn More
            </button>
          </div>

          {/* Trust signals */}
          <p className="text-sm text-gray-600 font-medium">
            💳 Cancel anytime • 🎁 First box 15% off • 🌍 Free shipping worldwide • ⭐ 4.9/5 rating
          </p>
        </div>
      </div>
    </section>
  )
}
