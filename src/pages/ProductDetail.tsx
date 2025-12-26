import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { API_ENDPOINTS } from '@/config/api'
import { usePageTitle } from '@/hooks/usePageTitle'

type ProductItem = {
  _id: string
  slug: string
  title: string
  body: string
  category: string
  images?: string[]
}

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [product, setProduct] = useState<ProductItem | undefined>()
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${API_ENDPOINTS.PRODUCTS}/${slug}`)
        if (res.ok) {
          const data = await res.json()
          setProduct(data)
        } else {
          setProduct(undefined)
        }
      } catch {
        setProduct(undefined)
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchProduct()
    else setLoading(false)
  }, [slug])

  usePageTitle(product ? product.title : 'Product')

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-emerald-600" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/products" className="text-emerald-600 font-semibold">
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <section className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100">
              {product.images?.length ? (
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-slate-400" />
                </div>
              )}

              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((i) =>
                        i === 0 ? product.images!.length - 1 : i - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentImageIndex((i) =>
                        i === product.images!.length - 1 ? 0 : i + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-xl border transition ${
                      index === currentImageIndex
                        ? 'border-emerald-600 ring-2 ring-emerald-500'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-600 font-semibold">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              {product.title}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              {product.body}
            </p>
          </div>
        </section>

        <section className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="mb-6 text-xl font-semibold text-slate-900">
              Key Specifications
            </h2>

            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                High performance materials for long-term durability
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                Meets safety and compliance standards
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                Custom sizing and configuration options
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                Professional installation and support
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-emerald-600 p-8 text-white">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em]">
                Interested in this product?
              </h3>

              <p className="text-sm leading-relaxed">
                Share your project details and we’ll help you configure{' '}
                <span className="font-semibold">{product.title}</span>.
              </p>

              <p className="text-sm">
                Call <span className="font-semibold">+91 98970 53591</span>
              </p>
            </div>

            <Link
              to={`/contact-us?product=${encodeURIComponent(product.title)}`}
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition"
            >
              Request Quote
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
