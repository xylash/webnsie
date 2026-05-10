import Link from "next/link"
import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
            Pricing
          </h2>
          <div className="w-16 h-px bg-muted-foreground mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Simple, transparent pricing for capturing your precious moments
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="bg-card border border-border rounded-lg p-10 max-w-md mx-auto">
          <h3 className="font-serif text-2xl text-foreground text-center mb-8">
            Photo Session
          </h3>
          
          {/* Pricing Breakdown */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <p className="text-foreground font-medium">Booking Deposit</p>
                <p className="text-muted-foreground text-sm">To reserve your date</p>
              </div>
              <span className="font-serif text-3xl text-foreground">$10</span>
            </div>
            
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <p className="text-foreground font-medium">Day of Session</p>
                <p className="text-muted-foreground text-sm">Due at your appointment</p>
              </div>
              <span className="font-serif text-3xl text-foreground">$15</span>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <p className="text-foreground font-medium">Total</p>
              <span className="font-serif text-4xl text-foreground">$25</span>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wide mb-4">
              What&apos;s Included
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-foreground flex-shrink-0" />
                <span className="text-muted-foreground">Full day photo session</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-foreground flex-shrink-0" />
                <span className="text-muted-foreground">Professional editing</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-foreground flex-shrink-0" />
                <span className="text-muted-foreground">All digital photos included</span>
              </li>
            </ul>
          </div>

          {/* Payment Options */}
          <div className="space-y-3">
            <Link
              href="/checkout/full-session"
              className="block w-full text-center py-3 px-6 bg-foreground text-background hover:bg-muted-foreground transition-colors duration-300 rounded"
            >
              Pay Full Amount - $25
            </Link>
            <Link
              href="/checkout/booking-deposit"
              className="block w-full text-center py-3 px-6 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 rounded"
            >
              Pay Deposit Only - $10
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
