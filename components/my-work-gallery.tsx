"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

type Photo = {
  src: string
  alt: string
  title: string
  span?: string
}

const photos: Photo[] = [
  {
    src: "/engagement/proposal.png",
    alt: "Man on one knee proposing to his partner in a green field",
    title: "The Question",
    span: "md:row-span-2",
  },
  {
    src: "/engagement/forehead-kiss.png",
    alt: "Man kissing his fiancee on the forehead as she smiles",
    title: "Tenderness",
  },
  {
    src: "/engagement/ring-hands.png",
    alt: "Close up of an engagement ring as the couple embraces",
    title: "She Said Yes",
  },
  {
    src: "/engagement/kiss-portrait.png",
    alt: "Engaged couple sharing a kiss in a sunlit field",
    title: "First Kiss",
    span: "md:row-span-2",
  },
  {
    src: "/engagement/toast.png",
    alt: "Couple toasting glasses to celebrate their engagement",
    title: "Cheers to Forever",
  },
  {
    src: "/engagement/temple-kiss.png",
    alt: "Man kissing his fiancee's temple while she smiles at the camera",
    title: "Pure Joy",
  },
  {
    src: "/engagement/bw-kiss.png",
    alt: "Black and white photo of a couple kissing in an open field",
    title: "Timeless",
    span: "md:row-span-2",
  },
  {
    src: "/engagement/pouring-wine.png",
    alt: "Man pouring celebratory wine for his fiancee",
    title: "Celebration",
  },
  {
    src: "/engagement/almost-kiss.png",
    alt: "Couple holding each other's faces about to kiss",
    title: "Almost",
  },
  {
    src: "/engagement/embrace-behind.png",
    alt: "Man embracing his fiancee from behind in a field",
    title: "Held Close",
  },
  {
    src: "/engagement/candid-drinks.png",
    alt: "Candid moment of the couple sharing drinks and laughter",
    title: "Candid",
  },
  {
    src: "/engagement/pouring-wine-2.png",
    alt: "Man pouring rose wine into a glass for his fiancee",
    title: "A Toast",
  },
  {
    src: "/engagement/framed-detail.png",
    alt: "Framed engagement photo styled with glasses and rose petals",
    title: "The Details",
  },
]

export function MyWorkGallery() {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null)

  return (
    <section className="pt-32 pb-24 px-6 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">
            My Work
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground text-balance">
            A Collection of Moments
          </h1>
          <div className="w-16 h-px bg-muted-foreground mx-auto mt-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-8 leading-relaxed text-pretty">
            A look at the sessions I&apos;ve had the honor of capturing &mdash; real love,
            real laughter, and the quiet moments in between.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo)}
              className={`group relative overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${photo.span ?? ""}`}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-serif text-xl md:text-2xl text-foreground tracking-wide text-center px-2">
                  {photo.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
