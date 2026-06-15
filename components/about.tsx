import Image from "next/image"
import { Camera, Heart, Star } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Genuine Connection",
    description: "We capture the real glances, laughter, and quiet moments between you and the one you love.",
  },
  {
    icon: Camera,
    title: "Professional Quality",
    description: "High-resolution images captured with professional equipment and an artistic eye.",
  },
  {
    icon: Star,
    title: "Timeless Style",
    description: "Classic, elegant editing that keeps your love story beautiful for a lifetime.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/engagement/kiss-portrait.png"
              alt="Engaged couple sharing a kiss in a field"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border border-border pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
              Capturing Love&apos;s Beautiful Stories
            </h2>
            <div className="w-16 h-px bg-muted-foreground mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Truelens Photography, we believe every love story deserves to be remembered.
              Our passion lies in capturing the authentic connection between two people &mdash;
              the nervous excitement of a proposal, the joyful toast, and the quiet intimacy of
              simply being together.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              With a relaxed, easygoing approach, we create a space where genuine moments unfold
              naturally. Our goal is to give you timeless images that tell the story of your
              love for years to come.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-border flex items-center justify-center">
                    <feature.icon size={20} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
