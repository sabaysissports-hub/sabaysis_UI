import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon, Sparkles, CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react'
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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-[11px] font-montreal font-bold uppercase tracking-[0.35em] text-emerald-700">
            Product
          </p>
          <h1 className="mt-3 text-3xl font-montreal font-bold tracking-tight text-slate-900">
            Product not found
          </h1>
          <p className="mt-3 text-sm font-gotham leading-relaxed text-slate-600">
            We couldn&apos;t find the product you were looking for.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950/75 to-black/70" />
        <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-7xl flex-col justify-center px-4 py-16 text-white md:min-h-[400px] md:py-20 lg:min-h-[480px]">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition-colors font-gotham">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors font-gotham">Products</Link>
            <span>/</span>
            <span className="text-white font-montreal font-semibold">{product.title}</span>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-montreal font-bold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur w-fit">
            <Sparkles className="h-4 w-4" /> {product.category}
          </p>
          <h1 className="mt-6 text-4xl font-montreal font-bold tracking-tight md:text-5xl lg:text-6xl">
            {product.title}
          </h1>
        </div>
      </section>

      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 py-12 md:py-16">

        <section className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
              {product.images?.length ? (
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-slate-400" />
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-lg hover:bg-white transition"
                  >
                    <ChevronLeft className="h-5 w-5 text-slate-900" />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentImageIndex((i) =>
                        i === product.images!.length - 1 ? 0 : i + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-3 shadow-lg hover:bg-white transition"
                  >
                    <ChevronRight className="h-5 w-5 text-slate-900" />
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
                    className={`aspect-square overflow-hidden rounded-xl border-2 transition ${index === currentImageIndex
                      ? 'border-emerald-600 ring-2 ring-emerald-500'
                      : 'border-slate-200 hover:border-emerald-400'
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
            <p className="text-sm font-gotham leading-relaxed text-slate-700 md:text-base">
              {product.body}
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'Premium Materials', desc: 'High-quality, durable components' },
                { title: 'Safety Certified', desc: 'Meets all safety standards' },
                { title: 'Custom Options', desc: 'Tailored to your needs' },
                { title: 'Expert Support', desc: 'Professional installation' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-2 text-white shadow-lg">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-montreal font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-gotham text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl">
              Key Specifications
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'High performance materials for long-term durability',
                'Meets safety and compliance standards',
                'Custom sizing and configuration options',
                'Professional installation and support',
              ].map((spec, index) => (
                <div key={index} className="flex gap-3 rounded-xl border border-slate-200 p-4 transition-all hover:border-emerald-500/50 hover:shadow-md">
                  <span className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-1.5 text-white shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-gotham text-slate-700">{spec}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-8 shadow-lg">
            <div className="space-y-6">
              <h3 className="text-sm font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
                Get Quote
              </h3>
              <p className="text-sm font-gotham leading-relaxed text-slate-700">
                Interested in <span className="font-montreal font-bold text-slate-900">{product.title}</span>?
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-emerald-600 p-2 text-white shrink-0">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-montreal font-bold text-slate-900">Contact Us</p>
                    <p className="text-xs font-gotham text-slate-600 mt-1">+91 98970 53591</p>
                  </div>
                </div>
                <Link
                  to={`/contact-us?product=${encodeURIComponent(product.title)}`}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-emerald-600 px-6 py-3 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-700 shadow-lg hover:shadow-xl"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}
