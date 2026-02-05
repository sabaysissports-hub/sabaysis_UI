import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { API_ENDPOINTS } from '@/config/api';
import { Loader2, ArrowRight, ImageIcon, Sparkles } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import sportsNetImg from '@/assets/Catalog/sportnet.jpg';
import footballTurfImg from '@/assets/Catalog/footballturf.jpg';
import cricketTurfImg from '@/assets/Catalog/cricket-turf.jpg';
import artificialGrassImg from '@/assets/Catalog/artificial-grass.jpg';
import landscapeTurfImg from '@/assets/Catalog/Landscape-Turf.jpg';
import outdoorGymImg from '@/assets/Catalog/Outdoor-Gym.jpg';
import pitchEquipmentImg from '@/assets/Catalog/Pitch-Equipment.jpg';

import { puProducts } from '@/data/pu-products';

interface Product {
  _id: string;
  slug: string;
  title: string;
  body: string;
  category: string;
  images?: string[];
}

const CATEGORY_CONTENT: Record<string, { title: string; description: string; image: string }> = {
  'Sports Net': {
    title: 'Reliable Netting for Safer Play',
    description: 'Engineered for training grounds and arenas, our sports netting protects spectators and players.',
    image: sportsNetImg,
  },
  'Football Turf': {
    title: 'Professional-Grade Football Turf',
    description: 'Designed for consistent ball roll, traction, and shock absorption.',
    image: footballTurfImg,
  },
  'Cricket Turf': {
    title: 'High-Performance Cricket Surfaces',
    description: 'From practice wickets to match-ready strips with UV-stable fibers.',
    image: cricketTurfImg,
  },
  'Artificial Grass': {
    title: 'Low-Maintenance Green Spaces',
    description: 'Create year-round greenery for schools, rooftops, and landscapes.',
    image: artificialGrassImg,
  },
  'Landscape Turf': {
    title: 'Design-Forward Turf for Outdoors',
    description: 'Transform pathways, courtyards, and feature areas.',
    image: landscapeTurfImg,
  },
  'Outdoor Gym': {
    title: 'Weatherproof Outdoor Fitness',
    description: 'Build engaging fitness zones with durable surfacing and equipment.',
    image: outdoorGymImg,
  },
  'Pitch Equipment': {
    title: 'Complete Cricket Pitch Equipment',
    description: 'Professional gear for practice sessions, competitive games, and ground maintenance.',
    image: pitchEquipmentImg,
  },
  'Polyurethane (PU)': {
    title: 'High Performance PU Systems',
    description: 'Premium Polyurethane binders, sealers, and topcoats for durable sports surfaces.',
    image: '//www.sportsinfra.store/cdn/shop/collections/PU_300x.jpg?v=1747037639', 
  },
};

export function ProductCatalog() {
  usePageTitle('Products');
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const hero = categoryFilter && CATEGORY_CONTENT[categoryFilter]
    ? CATEGORY_CONTENT[categoryFilter]
    : {
        title: 'Built for Performance & Reliability',
        description: 'Explore our comprehensive range of high-quality sports infrastructure solutions.',
        image: 'https://source.unsplash.com/featured/1200x600?sports+infrastructure',
      };

  useEffect(() => {
    // ... existing imports

    const fetchProducts = async () => {
      try {
        const url = categoryFilter 
          ? `${API_ENDPOINTS.PRODUCTS}?category=${encodeURIComponent(categoryFilter)}`
          : API_ENDPOINTS.PRODUCTS;
        
        // Start with local products filtered if necessary
        let allProducts = [...puProducts];
        if (categoryFilter) {
           allProducts = allProducts.filter(p => p.category === categoryFilter);
        }

        const res = await fetch(url);
        if (res.ok) {
          const apiData = await res.json();
          // Merge API data with local data
          // Avoid duplicates if any
          const localIds = new Set(allProducts.map(p => p._id));
          const newApiProducts = apiData.filter((p: Product) => !localIds.has(p._id));
          
          if (!categoryFilter) {
             // If no filter, we just append api products
              allProducts = [...allProducts, ...newApiProducts];
          } else {
             // If filtering, the API should have returned filtered results (if supported)
             // or we filter client side if the API ignores params (depends on implementation)
             // Assuming API handles filter, we just use the result
             allProducts = [...allProducts, ...apiData];
          }
           setProducts(allProducts);
        } else {
          // If API fails, at least show local products
          setProducts(allProducts);
        }
      } catch (error) {
        console.error('Failed to fetch products', error);
        // Fallback to local products
        let local = [...puProducts];
         if (categoryFilter) {
           local = local.filter(p => p.category === categoryFilter);
        }
        setProducts(local);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryFilter]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={hero.image} 
            alt={hero.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950/75 to-black/70" />
        <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-7xl flex-col justify-center px-4 py-16 text-white md:min-h-[400px] md:py-20 lg:min-h-[480px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-montreal font-bold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur w-fit mb-6">
            <Sparkles className="h-4 w-4" /> {categoryFilter || 'Our Products'}
          </p>
          <h1 className="text-4xl font-montreal font-bold tracking-tight md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base font-gotham text-white/85 md:text-lg">
            {hero.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product._id} 
                to={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border border-slate-200"
              >
                <div className="relative overflow-hidden bg-slate-100 h-48 md:h-56 lg:h-64">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.title} 
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <img
                      src={CATEGORY_CONTENT[product.category]?.image || artificialGrassImg}
                      alt={`${product.category} default`}
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                  
                  {/* Badge for sold out or price */}
                  {(product as any).soldOut && (
                     <div className="absolute top-3 left-3 bg-black text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                       Sold Out
                     </div>
                  )}
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-montreal font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h3>
                   
                  {(product as any).price && (
                      <p className="mb-2 text-emerald-600 font-bold font-gotham">
                        {(product as any).price}
                      </p>
                  )}

                  <p className="mb-6 flex-1 text-sm font-gotham leading-relaxed text-slate-600 line-clamp-3">
                    {product.body}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-montreal font-bold uppercase tracking-wider text-emerald-600">
                    View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <ImageIcon className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-montreal font-bold text-slate-900">No products found</h3>
            <p className="text-slate-500 mt-1 font-gotham">Please check back later as we update our catalog.</p>
          </div>
        )}
      </div>
    </div>
  );
}
