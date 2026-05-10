import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Checkout from '../../../components/checkout'
import { PRODUCTS } from '../../../lib/products'

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  
  const product = PRODUCTS.find((p) => p.id === productId)
  
  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/#pricing"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to pricing
        </Link>
        
        <div className="mb-8">
          <h1 className="font-serif text-3xl text-foreground mb-2">
            {product.name}
          </h1>
          <p className="text-muted-foreground">{product.description}</p>
          <p className="text-2xl font-serif text-foreground mt-4">
            ${(product.priceInCents / 100).toFixed(2)}
          </p>
        </div>
        
        <Checkout productId={productId} />
      </div>
    </main>
  )
}
