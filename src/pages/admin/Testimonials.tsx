import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';
import { Loader2, Trash2, Star, MapPin, Tag } from 'lucide-react';

interface Testimonial {
  _id: string;
  name: string;
  title: string;
  company?: string;
  quote: string;
  rating: number;
  location?: string;
  projectType?: string;
  createdAt?: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.TESTIMONIALS);
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    try {
      const res = await fetch(`${API_ENDPOINTS.TESTIMONIALS}/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setTestimonials((prev) => prev.filter((t) => t._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete testimonial', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (loading) return <div className="flex h-full items-center justify-center"><Loader2 className="animate-spin text-emerald-600" /></div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Testimonials ({testimonials.length})</h1>
      </div>

      <div className="grid gap-6">
        {testimonials.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <p className="text-slate-500">No testimonials yet</p>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 italic mb-4 line-clamp-3">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.title}</p>
                      {testimonial.company && (
                        <p className="text-sm text-slate-500">{testimonial.company}</p>
                      )}
                    </div>

                    {/* Location & Project Type */}
                    <div className="flex flex-wrap gap-2 items-center text-xs">
                      {testimonial.location && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                          <MapPin className="h-3 w-3" />
                          {testimonial.location}
                        </span>
                      )}
                      {testimonial.projectType && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                          <Tag className="h-3 w-3" />
                          {testimonial.projectType}
                        </span>
                      )}
                      {testimonial.createdAt && (
                        <span className="text-slate-500">
                          {new Date(testimonial.createdAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTestimonial(testimonial._id)}
                  className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors flex-shrink-0"
                  title="Delete Testimonial"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
