import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Sparkles, ArrowRight } from 'lucide-react';

export function NotFound() {
  usePageTitle('Page not found');
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-lg">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-[11px] font-montreal font-bold uppercase tracking-[0.35em] text-emerald-700 mb-6">
          <Sparkles className="h-4 w-4" /> 404
        </div>
        <h1 className="text-4xl font-montreal font-bold tracking-tight text-slate-900 md:text-5xl mb-4">
          Page not found
        </h1>
        <p className="text-base font-gotham leading-relaxed text-slate-600 mb-8">
          The page you are looking for doesn&apos;t exist or may have been moved. Use the navigation above or return to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-700 shadow-lg hover:shadow-xl"
          >
            Go to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-8 py-4 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
