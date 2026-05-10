import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
