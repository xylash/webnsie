export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

export const PRODUCTS: Product[] = [
  {
    id: 'booking-deposit',
    name: 'Booking Deposit',
    description: 'Reserve your photo session date with Truelens Photography',
    priceInCents: 1000, // $10.00
  },
  {
    id: 'session-payment',
    name: 'Day of Session Payment',
    description: 'Remaining balance for your Truelens Photography session',
    priceInCents: 1500, // $15.00
  },
  {
    id: 'full-session',
    name: 'Full Photo Session',
    description: 'Complete photo session package with Truelens Photography - includes full day session, professional editing, and all digital photos',
    priceInCents: 2500, // $25.00
  },
]
