import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { API_ENDPOINTS } from '@/config/api';
import { Loader2, ArrowRight, ImageIcon } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

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
    description:
      'Engineered for training grounds and arenas, our sports netting protects spectators and players while withstanding intensive use across seasons.',
    image: 'https://source.unsplash.com/featured/1200x600?sports+net',
  },
  'Football Turf': {
    title: 'Professional-Grade Football Turf',
    description:
      'Designed for consistent ball roll, traction, and shock absorption. Build match-ready fields and durable practice surfaces that perform day after day.',
    image: 'https://source.unsplash.com/featured/1200x600?football+turf',
  },
  'Cricket Turf': {
    title: 'High-Performance Cricket Surfaces',
    description:
      'From practice wickets to match-ready strips, our cricket turf delivers reliable pace and bounce with UV-stable fibers and robust base construction.',
    image: 'https://source.unsplash.com/featured/1200x600?cricket+turf',
  },
  'Artificial Grass': {
    title: 'Low-Maintenance Green Spaces',
    description:
      'Create year-round greenery for schools, rooftops, and landscapes. Our artificial grass blends natural look with durability and easy upkeep.',
    image: 'https://source.unsplash.com/featured/1200x600?artificial+grass',
  },
  'Landscape Turf': {
    title: 'Design-Forward Turf for Outdoors',
    description:
      'Transform pathways, courtyards, and feature areas with landscape turf that drains efficiently, resists fading, and elevates the environment.',
    image: 'https://source.unsplash.com/featured/1200x600?landscape+turf',
  },
  'Outdoor Gym': {
    title: 'Weatherproof Outdoor Fitness',
    description:
      'Build engaging fitness zones with durable surfacing and equipment. Ideal for parks, schools, and communities focused on health and movement.',
    image: 'https://source.unsplash.com/featured/1200x600?outdoor+gym',
  },
  'Pitch Equipment': {
    title: 'Everything You Need for a World-Class Cricketing Experience',
    description:
      "At SABAYSIS Sports & Infra, we go beyond turf. We provide a complete range of cricket pitch equipment designed to enhance practice sessions, competitive games, and ground maintenance. Whether you’re building a new facility or upgrading an existing one, our high-quality gear ensures your cricketing setup is professional, durable, and ready for action.",
    image: 'https://source.unsplash.com/featured/1200x600?cricket+equipment',
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
        description:
          'Explore our comprehensive range of high-quality sports infrastructure solutions, from professional turfs to essential equipment.',
        image: 'https://source.unsplash.com/featured/1200x600?sports+infrastructure',
      };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = categoryFilter 
          ? `${API_ENDPOINTS.PRODUCTS}?category=${encodeURIComponent(categoryFilter)}`
          : API_ENDPOINTS.PRODUCTS;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryFilter]);

  return (
    <div className="bg-slate-50 min-h-screen pt-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {categoryFilter && (
          <div className="mb-6 text-center">
            <p className="text-lg md:text-xl font-bold uppercase tracking-[0.25em] text-emerald-700">
              {categoryFilter}
            </p>
          </div>
        )}
        <section className="mb-12 rounded-3xl border border-slate-200 bg-white overflow-hidden">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-3">
                {categoryFilter ? hero.title : (
                  <>Our <span className="text-emerald-600">Products</span></>
                )}
              </h1>
              <p className="text-slate-600 md:text-base leading-relaxed">
                {hero.description}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-video md:aspect-auto md:h-full">
                <img
                  src={hero.image}
                  alt={categoryFilter ? `${categoryFilter} hero` : 'Products hero'}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

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
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl border border-slate-100"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.title} 
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-slate-300">
                      <ImageIcon className="h-12 w-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {product.body}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600">
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
             <h3 className="text-lg font-semibold text-slate-900">No products found</h3>
             <p className="text-slate-500 mt-1">Please check back later as we update our catalog.</p>
          </div>
        )}
      </div>
    </div>
  );
}
