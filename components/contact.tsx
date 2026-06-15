"use client"

import { Mail, MapPin, Loader2 } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "antwun09@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Virginia 24219",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-card-foreground">
            Let&apos;s Create Together
          </h2>
          <div className="w-16 h-px bg-muted-foreground mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-2 tracking-wide">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground mb-2 tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2 tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Tell us about your vision..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-muted-foreground transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            
            {submitStatus === "success" && (
              <p className="text-center text-green-400 mt-4">
                Thank you for your message! We&apos;ll be in touch soon.
              </p>
            )}
            
            {submitStatus === "error" && (
              <p className="text-center text-red-400 mt-4">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to capture your special moments? Whether it&apos;s a family portrait session, 
              a milestone celebration, or simply everyday magic, we&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                      {item.label}
                    </p>
                    <p className="text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground tracking-wide mb-4">
                Follow Our Journey
              </p>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "Pinterest"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
