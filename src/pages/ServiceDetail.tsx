import { Link, useParams } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useEffect, useState } from 'react';
import { Sparkles, PhoneCall, ArrowRight, TrendingUp, Loader2 } from 'lucide-react';
import type { ServiceTemplateData, ServiceBasic } from '@/types/service';
import { ServiceTemplate } from '@/components/services/ServiceTemplate';

import { footballCourtData } from '@/data/services/football';
import { cricketData } from '@/data/services/box-cricket';
import { pickleballData } from '@/data/services/pickleball-court';
import { swimmingPoolData } from '@/data/services/swimming-pool';
import { runningTracksData } from '@/data/services/multisport-running-tracks';
import { padelData } from '@/data/services/padel-court';
import { badmintonData } from '@/data/services/badminton-court';
import { basketballData } from '@/data/services/basketball-court';
import { tennisData } from '@/data/services/tennis-court';
import { volleyballData } from '@/data/services/volleyball-court';
import { golfData } from '@/data/services/golf';
import { gymnasticsData } from '@/data/services/gymnastics';
import { marketingData } from '@/data/services/marketing-brand-launch';

const staticServiceData: Record<string, ServiceTemplateData> = {
  'football-court': footballCourtData,
  'box-cricket': cricketData,
  'pickleball-court': pickleballData,
  'swimming-pool': swimmingPoolData,
  'multisport-running-tracks': runningTracksData,
  'padel-courts': padelData,
  'badminton-court': badmintonData,
  'basketball-court': basketballData,
  'tennis-court': tennisData,
  'volleyball-court': volleyballData,
  golf: golfData,
  gymnastics: gymnasticsData,
  gymanstic: gymnasticsData,
  'marketing-brand-launch': marketingData,
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceBasic | null>(null);
  const [templateData, setTemplateData] = useState<ServiceTemplateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    if (!slug) {
      setService(null);
      setTemplateData(null);
      setLoading(false);
      return;
    }

    const staticData = staticServiceData[slug];
    
    if (staticData) {
      setTemplateData(staticData);
      setService({
        slug: staticData.slug,
        title: staticData.hero.title,
        body: staticData.hero.description
      });
    } else {
      setService(null);
      setTemplateData(null);
    }

    setLoading(false);
  }, [slug]);

  usePageTitle(
    loading 
      ? 'Loading...' 
      : service 
        ? `${service.title} - Sabaysis Sports & Infrastructure` 
        : 'Service Not Found'
  );

  // Loading State
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/20">
        <div className="text-center">
          <Loader2 className="inline-block h-12 w-12 animate-spin text-emerald-600" />
          <p className="mt-4 text-sm font-gotham text-slate-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  // Service Not Found
  if (!slug || !service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/20">
        <div className="w-full max-w-xl rounded-3xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/40 p-8 text-center shadow-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-montreal font-bold tracking-tight text-slate-900">
            Service not found
          </h1>
          <p className="mt-3 text-sm font-gotham leading-relaxed text-slate-600">
            We couldn&apos;t find the service you were looking for. Please check the link or explore all our available
            sports and infrastructure services.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl min-h-12 min-w-40"
            >
              Back to Home
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-emerald-300 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-50 min-h-12 min-w-40"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Template Data Available
  if (templateData) {
    return <ServiceTemplate data={templateData} />;
  }

  // Fallback: Basic Service Display
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
            <Link to="/" className="hover:text-white transition-colors font-gotham">Services</Link>
            <span>/</span>
            <span className="text-white font-montreal font-semibold">{service.title}</span>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-montreal font-bold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur w-fit">
            <Sparkles className="h-4 w-4" /> SABAYSIS SPORTS &amp; INFRA
          </p>
          <h1 className="mt-6 text-4xl font-montreal font-bold tracking-tight md:text-5xl lg:text-6xl">
            {service.title}
          </h1>
        </div>
      </section>

      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 py-12 md:py-16">
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-base font-gotham leading-relaxed text-slate-700 md:text-lg">
            {service.body}
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Site Assessment', desc: 'Professional evaluation & planning', icon: '🔍', color: 'from-emerald-500 to-teal-600' },
            { title: 'Premium Materials', desc: 'High-quality, durable components', icon: '⭐', color: 'from-blue-500 to-cyan-600' },
            { title: 'Expert Installation', desc: 'Professional setup & finishing', icon: '🔧', color: 'from-orange-500 to-amber-600' },
            { title: 'Ongoing Support', desc: 'Maintenance & guidance', icon: '🤝', color: 'from-teal-500 to-emerald-600' },
          ].map((item, index) => {
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
                className={`group relative overflow-hidden rounded-2xl border ${color.border} bg-gradient-to-br ${color.bg} p-6 transition-all hover:-translate-y-1 ${color.hover} hover:shadow-lg`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/50 rounded-full blur-2xl -z-0" />
                <div className="relative z-10 flex flex-col items-start gap-3">
                  <span className={`rounded-full bg-gradient-to-br ${color.gradient} p-2.5 text-white shadow-lg text-lg`}>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-montreal font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs font-gotham text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-8 md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.1),transparent_30%)]" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[2fr,1fr] md:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-emerald-300">
                <TrendingUp className="h-4 w-4" /> Professional Solutions
              </div>
              <h2 className="text-3xl font-montreal font-bold tracking-tight text-white md:text-4xl">
                Professional Sports Infrastructure
              </h2>
              <p className="text-sm font-gotham leading-relaxed text-emerald-100">
                We deliver durable, high-performance facilities designed for schools, clubs, and commercial venues. Our expertise spans installation, maintenance, and complete facility management.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl"
              >
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919897053591"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:border-white/50 hover:bg-white/5"
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
