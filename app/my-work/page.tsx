import type { Metadata } from "next"
import { Header } from "@/components/header"
import { MyWorkGallery } from "@/components/my-work-gallery"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "My Work | Truelens Photography",
  description:
    "Browse the full portfolio of Truelens Photography — engagement sessions, couples, and candid moments captured with an artistic eye.",
}

export default function MyWorkPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MyWorkGallery />
      <Footer />
    </main>
  )
}
