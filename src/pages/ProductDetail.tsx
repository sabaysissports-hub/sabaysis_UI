import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon, Sparkles, CheckCircle2, PhoneCall, ArrowRight, Shield, Award, Zap } from 'lucide-react'
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/20 flex items-center justify-center">
        <div className="w-full max-w-xl rounded-3xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/40 p-8 text-center shadow-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mb-4">
            <ImageIcon className="h-8 w-8 text-white" />
          </div>
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
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="relative w-full bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link to="/" className="hover:text-emerald-600 transition-colors font-gotham text-slate-600">Home</Link>
              <span className="text-slate-400">/</span>
              <Link to="/products" className="hover:text-emerald-600 transition-colors font-gotham text-slate-600">Products</Link>
              <span className="text-slate-400">/</span>
              <span className="font-montreal font-semibold text-slate-900">{product.title}</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 w-fit rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-3 py-1.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
                <Sparkles className="h-3.5 w-3.5" /> {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-montreal font-bold tracking-tight text-slate-900">
                {product.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 py-12 md:py-16">

        <section className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg border border-slate-200">
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 shadow-lg hover:from-emerald-600 hover:to-teal-700 transition text-white"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentImageIndex((i) =>
                        i === product.images!.length - 1 ? 0 : i + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 shadow-lg hover:from-emerald-600 hover:to-teal-700 transition text-white"
                  >
                    <ChevronRight className="h-5 w-5" />
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
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-blue-50 border border-emerald-200/50 p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -z-0" />
              <div className="relative z-10">
                <p className="text-sm font-gotham leading-relaxed text-slate-700 md:text-base">
                  {product.body}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'Premium Materials', desc: 'High-quality, durable components', icon: Award, color: 'from-emerald-500 to-teal-600' },
                { title: 'Safety Certified', desc: 'Meets all safety standards', icon: Shield, color: 'from-blue-500 to-cyan-600' },
                { title: 'Custom Options', desc: 'Tailored to your needs', icon: Sparkles, color: 'from-orange-500 to-amber-600' },
                { title: 'Expert Support', desc: 'Professional installation', icon: CheckCircle2, color: 'from-teal-500 to-emerald-600' },
              ].map((item, index) => {
                const colors = [
                  { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600', hover: 'hover:border-emerald-500/50' },
                  { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', gradient: 'from-blue-500 to-cyan-600', hover: 'hover:border-blue-500/50' },
                  { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', gradient: 'from-orange-500 to-amber-600', hover: 'hover:border-orange-500/50' },
                  { bg: 'from-teal-50 to-emerald-50', border: 'border-teal-200', gradient: 'from-teal-500 to-emerald-600', hover: 'hover:border-teal-500/50' },
                ];
                const color = colors[index % colors.length];
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-xl border ${color.border} bg-gradient-to-br ${color.bg} p-5 transition-all hover:-translate-y-0.5 ${color.hover} hover:shadow-md`}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/40 rounded-full blur-2xl -z-0" />
                    <div className="relative z-10 flex items-start gap-3">
                      <span className={`rounded-full bg-gradient-to-br ${color.gradient} p-2 text-white shadow-lg flex-shrink-0`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-sm font-montreal font-bold text-slate-900">{item.title}</h3>
                        <p className="text-xs font-gotham text-slate-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-emerald-700">
                <Zap className="h-4 w-4" /> Specifications
              </div>
              <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl">
                Key Specifications
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: 'High Performance', desc: 'High performance materials for long-term durability', color: 'from-emerald-500 to-teal-600' },
                { title: 'Standards Compliant', desc: 'Meets safety and compliance standards', color: 'from-blue-500 to-cyan-600' },
                { title: 'Customizable', desc: 'Custom sizing and configuration options', color: 'from-orange-500 to-amber-600' },
                { title: 'Professional Service', desc: 'Professional installation and support', color: 'from-teal-500 to-emerald-600' },
              ].map((spec, index) => {
                const colors = [
                  { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600', hover: 'hover:border-emerald-500/50' },
                  { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', gradient: 'from-blue-500 to-cyan-600', hover: 'hover:border-blue-500/50' },
                  { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', gradient: 'from-orange-500 to-amber-600', hover: 'hover:border-orange-500/50' },
                  { bg: 'from-teal-50 to-emerald-50', border: 'border-teal-200', gradient: 'from-teal-500 to-emerald-600', hover: 'hover:border-teal-500/50' },
                ];
                const color = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    className={`flex gap-3 rounded-xl border ${color.border} bg-gradient-to-br ${color.bg} p-4 transition-all hover:border-opacity-100 ${color.hover} hover:shadow-md`}
                  >
                    <span className={`rounded-full bg-gradient-to-br ${color.gradient} p-1.5 text-white shrink-0 mt-0.5 shadow-lg`}>
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-montreal font-bold text-slate-900 mb-1">{spec.title}</p>
                      <p className="text-xs font-gotham text-slate-600">{spec.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 p-8 shadow-lg h-fit">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -z-0" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-200 to-teal-200 px-3 py-1.5 text-[11px] font-montreal font-bold uppercase tracking-[0.25em] text-emerald-800">
                <Sparkles className="h-3.5 w-3.5" /> Get Quote
              </div>
              <div>
                <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">Interested in this product?</h3>
                <p className="text-sm font-gotham leading-relaxed text-slate-700">
                  Get a personalized quote for <span className="font-montreal font-bold text-emerald-700">{product.title}</span> today.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-emerald-200/50">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 p-2.5 text-white flex-shrink-0">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-montreal font-bold text-slate-900">Contact Us</p>
                    <p className="text-xs font-gotham text-slate-600 mt-1">+91 98970 53591</p>
                  </div>
                </div>
                <Link
                  to={`/contact-us?product=${encodeURIComponent(product.title)}`}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl"
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
