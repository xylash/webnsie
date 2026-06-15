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
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof photos[0] | null>(null)

  return (
    <section id="gallery" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-card-foreground">
            Recent Work
          </h2>
          <div className="w-16 h-px bg-muted-foreground mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo)}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
