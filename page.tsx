import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhyChooseMe from "@/components/why-choose-me"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseMe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

