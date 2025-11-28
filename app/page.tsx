import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ThemesSection from "@/components/themes-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ThemesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
