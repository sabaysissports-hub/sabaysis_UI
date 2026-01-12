import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '@/config/api';
import { Loader2, ArrowRight, Sparkles } from 'lucide-react';

interface Product {
  _id: string;
  slug: string;
  title: string;
  body: string;
  category: string;
  images?: string[];
}

export function LatestProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.PRODUCTS);
        if (res.ok) {
          const data = await res.json();
          // Get top 10 latest products
          setProducts(data.slice(0, 10));
        }
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700 mb-6">
          <Sparkles className="h-4 w-4" /> Latest Products
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montreal font-bold tracking-tight text-slate-900 mb-4">
          Discover Our Latest Offerings
        </h2>
        <p className="text-base md:text-lg font-gotham leading-relaxed text-slate-600 max-w-3xl">
          Explore our newest collection of high-quality sports infrastructure solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/products/${product.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-emerald-100"
          >
            <div className="relative overflow-hidden bg-slate-100 h-40 md:h-48">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-slate-400 text-xs">No image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[10px] font-montreal font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="mb-3 text-sm md:text-base font-montreal font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                {product.title}
              </h3>
              <p className="mb-4 flex-1 text-xs md:text-sm font-gotham leading-relaxed text-slate-600 line-clamp-2">
                {product.body}
              </p>

              <div className="flex items-center gap-1 text-xs font-montreal font-bold uppercase tracking-wider text-emerald-600 group-hover:text-emerald-700 transition-colors">
                <span>View</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/products"
          className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 px-10 py-5 text-base font-montreal font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-xl active:scale-100"
        >
          <span>View All Products</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
