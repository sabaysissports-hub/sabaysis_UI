import { Sparkles } from 'lucide-react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';

type Testimonial = {
  _id: string;
  name: string;
  title: string;
  company?: string;
  quote: string;
  rating: number;
  location?: string;
  projectType?: string;
};

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.TESTIMONIALS);
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Split testimonials into 3 rows
  const getTestimonialRows = () => {
    const chunkSize = Math.ceil(testimonials.length / 3);
    return [
      testimonials.slice(0, chunkSize),
      testimonials.slice(chunkSize, chunkSize * 2),
      testimonials.slice(chunkSize * 2),
    ];
  };

  if (loading) {
    return (
      <section className="relative space-y-6 overflow-visible md:space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2">
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">
              Testimonials
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-slate-50">
            Built for real sports &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              infrastructure projects
            </span>
          </h2>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-emerald-600"></div>
        </div>
      </section>
    );
  }

  const rows = getTestimonialRows();

  return (
    <section className="relative w-full py-10 md:py-14 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-200/20 via-teal-200/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/20 via-cyan-200/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100/10 via-amber-100/5 to-transparent blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-emerald-100/50 dark:bg-emerald-900/20 mb-6 hover:bg-emerald-100/70 dark:hover:bg-emerald-900/30 transition-colors">
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">
              Client Success Stories
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montreal font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
              leading organizations
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-4">
            See what our clients say about their experience with Sabaysis and how we've helped them build world-class sports facilities
          </p>
        </div>

        {/* Testimonials Rows */}
        <div className="relative space-y-8 md:space-y-10">
          {/* Row 1 - Moving Left */}
          <div className="relative group">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-emerald-50/40 to-transparent dark:from-emerald-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <InfiniteMovingCards 
              items={rows[0]} 
              direction="left" 
              speed="slow"
              pauseOnHover={true}
            />
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative group">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-l from-teal-50/40 to-transparent dark:from-teal-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <InfiniteMovingCards 
              items={rows[1]} 
              direction="right" 
              speed="normal"
              pauseOnHover={true}
            />
          </div>

          {/* Row 3 - Moving Left */}
          <div className="relative group">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-50/40 to-transparent dark:from-blue-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <InfiniteMovingCards 
              items={rows[2]} 
              direction="left" 
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
