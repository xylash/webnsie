import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2009-seqovdF6r2VYMlX38AW4O0NYtNAjQy.jpg"
          alt="Children holding hands in a meadow"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">
          Welcome to
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6 text-foreground text-balance">
          Truelens Photography
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
          Capturing authentic moments and genuine emotions. Every photograph tells a story worth remembering.
        </p>
        <a
          href="#gallery"
          className="inline-block px-8 py-3 border border-foreground text-foreground text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
        >
          View Gallery
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent animate-pulse" />
      </div>
    </section>
  )
}
