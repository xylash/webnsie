"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2007-45JrO78JEQPK62hXZbnoICaSEgQmlS.jpg",
    alt: "Young boy with curly hair smiling in a meadow",
    title: "Pure Joy",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2009-seqovdF6r2VYMlX38AW4O0NYtNAjQy.jpg",
    alt: "Three children holding hands in a field",
    title: "Sibling Love",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2006-Ow5LFErlaY8Nt3bJYhFpinGuYqybvT.jpg",
    alt: "Little girl with curly hair in a strawberry top",
    title: "Sweet Moments",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2008-0PzbFPIUK5L1FDr670StzlYDKA8fEu.jpg",
    alt: "Smiling toddler with pigtails",
    title: "Little Sunshine",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LiQaCQFtXQ1CrWDfEIFqnf0oXy7dIO.png",
    alt: "Young girl meeting her newborn sibling in a hospital bassinet",
    title: "A Gentle Hello",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YGbsfN5Ws1xrGn2PATVkjlJmaDXpsc.png",
    alt: "Smiling siblings sitting together in a hospital room",
    title: "Big Brother Love",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lQm3ipggcZN3zbOHNCbxnLyO6HUyJY.png",
    alt: "Three siblings gathered around their newborn baby",
    title: "Welcome Home",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yumkqEVt752GHxy73JhEbqNT4O04dz.png",
    alt: "Young girl cuddling her newborn sibling",
    title: "Cuddle Time",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dVkT1bdUn8GpNzLXsYPMv8FtGPeGFc.png",
    alt: "Young girl smiling while holding her newborn sibling",
    title: "Pure Happiness",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BL2rFqlTHdpHSv2pAW6N0w1eNa1U5N.png",
    alt: "Family gathered around a newborn in a hospital room",
    title: "The Whole Family",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DDgCBfiFijGHWTgRA1RIQo2LlzTIZ6.png",
    alt: "Mother holding her newborn baby in a hospital room",
    title: "Mother and Child",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NQiJzuev5uVsfuvZXOD3uHPAOn9Ajs.png",
    alt: "Father holding his newborn beside the baby's mother",
    title: "First Family Moments",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r6oFBY0CBYXpvchOA1EivLGzgF1B7J.png",
    alt: "Parents holding their newborn together",
    title: "New Beginnings",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ShUAsPfe6i1Nf8VbMI5QkTijZBcOp2.png",
    alt: "Young girl holding her newborn sibling close",
    title: "Sibling Sweetness",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof photos[0] | null>(null)

  return (
    <section id="gallery" className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-card-foreground">
            Recent Work
          </h2>
          <div className="w-16 h-px bg-muted-foreground mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo)}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-serif text-2xl text-foreground tracking-wide">
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
              src={selectedImage.src}
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
