import { Link, useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '@/config/api';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useEffect, useState } from 'react';
import { CheckCircle2, Sparkles, PhoneCall, ArrowRight, Zap, Shield, Award, TrendingUp } from 'lucide-react';

type ServiceItem = { slug: string; title: string; body: string };
type ServiceDetailData = {
  slug: string;
  bannerTitle: string;
  bannerImage?: string;
  welcomeText: string;
  servicesTitle: string;
  servicesDescription: string;
  features: { title: string; description: string }[];
  whyChooseTitle: string;
  whyChooseItems: { title: string; description: string }[];
  whyChooseOurTitle?: string;
  whyChooseOurItems?: { title: string; description: string }[];
  typesTitle?: string;
  typesItems?: { title: string; description: string }[];
  companyWhyTitle?: string;
  companyWhyItems?: { title: string; description: string }[];
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceItem | undefined>(undefined);
  const [serviceDetail, setServiceDetail] = useState<ServiceDetailData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) { setLoading(false); return; }
      try {
        const [srvRes, detRes] = await Promise.all([
          fetch(`${API_ENDPOINTS.SERVICES}/${slug}`),
          fetch(`${API_ENDPOINTS.SERVICES}/${slug}/detail`),
        ]);
        setService(srvRes.ok ? await srvRes.json() : undefined);
        setServiceDetail(detRes.ok ? await detRes.json() : undefined);
      } catch (e) {
        console.error('Failed to fetch service', e);
        setService(undefined);
        setServiceDetail(undefined);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  usePageTitle(service ? `${service.title} Service` : 'Service not found');

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!service) {
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

  if (serviceDetail) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Top Banner */}
        <section className="relative w-full overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.12),transparent_30%)]" />
          {serviceDetail.bannerImage && (
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${serviceDetail.bannerImage}')`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950/75 to-black/70" />
          <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-7xl flex-col justify-center px-4 py-16 text-white md:min-h-[400px] md:py-20 lg:min-h-[480px]">
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6">
              <Link to="/" className="hover:text-white transition-colors font-gotham">Home</Link>
              <span>/</span>
              <Link to="/#services" className="hover:text-white transition-colors font-gotham">Services</Link>
              <span>/</span>
              <span className="text-white font-montreal font-semibold">{service.title}</span>
            </div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-montreal font-bold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur w-fit">
              <Sparkles className="h-4 w-4" /> SABAYSIS SPORTS &amp; INFRA
            </p>
            <h1 className="mt-6 text-4xl font-montreal font-bold tracking-tight md:text-5xl lg:text-6xl">
              {serviceDetail.bannerTitle}
            </h1>
          </div>
        </section>

        <main className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 py-12 md:py-16">
          {serviceDetail.welcomeText && (
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-blue-50 border border-emerald-200/50 p-8 md:p-12 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-transparent rounded-full blur-3xl -z-0" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-300/10 to-transparent rounded-full blur-3xl -z-0" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <p className="text-base font-gotham leading-relaxed text-slate-700 md:text-lg">
                  {serviceDetail.welcomeText}
                </p>
              </div>
            </section>
          )}

          {serviceDetail.whyChooseOurTitle && serviceDetail.whyChooseOurItems && serviceDetail.whyChooseOurItems.length > 0 && (
            <section className="space-y-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-blue-700">
                  <Zap className="h-4 w-4" /> Why Choose Us
                </div>
                <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl">
                  {serviceDetail.whyChooseOurTitle}
                </h2>
              </div>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviceDetail.whyChooseOurItems.map((item, index) => {
                  const colorSchemes = [
                    { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-teal-600', hover: 'hover:border-emerald-500/50' },
                    { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', icon: 'from-blue-500 to-cyan-600', hover: 'hover:border-blue-500/50' },
                    { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', icon: 'from-orange-500 to-amber-600', hover: 'hover:border-orange-500/50' },
                  ];
                  const scheme = colorSchemes[index % colorSchemes.length];
                  return (
                    <div
                      key={index}
                      className={`group relative overflow-hidden rounded-2xl border ${scheme.border} bg-gradient-to-br ${scheme.bg} p-8 transition-all hover:-translate-y-1 ${scheme.hover} hover:shadow-lg`}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full blur-2xl -z-0" />
                      <div className="relative z-10 flex flex-col items-start gap-4">
                        <span className={`rounded-full bg-gradient-to-br ${scheme.icon} p-3 text-white shadow-lg`}>
                          <CheckCircle2 className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-3">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {serviceDetail.features && serviceDetail.features.length > 0 && (
            <section className="space-y-8">
              {serviceDetail.servicesTitle && (
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-emerald-700">
                    <Sparkles className="h-4 w-4" /> Features
                  </div>
                  <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl mb-3">
                    {serviceDetail.servicesTitle}
                  </h2>
                  {serviceDetail.servicesDescription && (
                    <p className="text-sm font-gotham text-slate-600 max-w-2xl mx-auto">
                      {serviceDetail.servicesDescription}
                    </p>
                  )}
                </div>
              )}
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviceDetail.features.map((feature, index) => {
                  const colorSchemes = [
                    { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-teal-600', hover: 'hover:border-emerald-500/50' },
                    { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', icon: 'from-blue-500 to-cyan-600', hover: 'hover:border-blue-500/50' },
                    { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', icon: 'from-orange-500 to-amber-600', hover: 'hover:border-orange-500/50' },
                  ];
                  const scheme = colorSchemes[index % colorSchemes.length];
                  return (
                    <article
                      key={index}
                      className={`group relative overflow-hidden rounded-2xl border ${scheme.border} bg-gradient-to-br ${scheme.bg} p-8 transition-all hover:-translate-y-1 ${scheme.hover} hover:shadow-lg`}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full blur-2xl -z-0" />
                      <div className="relative z-10 flex flex-col items-start gap-4">
                        <span className={`rounded-full bg-gradient-to-br ${scheme.icon} p-3 text-white shadow-lg`}>
                          <Sparkles className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">{feature.title}</h3>
                          <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-3">{feature.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {serviceDetail.typesTitle && serviceDetail.typesItems && serviceDetail.typesItems.length > 0 && (
            <section className="space-y-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-orange-700">
                  <Award className="h-4 w-4" /> Types
                </div>
                <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl">
                  {serviceDetail.typesTitle}
                </h2>
              </div>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviceDetail.typesItems.map((type, index) => {
                  const colorSchemes = [
                    { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-teal-600', hover: 'hover:border-emerald-500/50' },
                    { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', icon: 'from-blue-500 to-cyan-600', hover: 'hover:border-blue-500/50' },
                    { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', icon: 'from-orange-500 to-amber-600', hover: 'hover:border-orange-500/50' },
                  ];
                  const scheme = colorSchemes[index % colorSchemes.length];
                  return (
                    <article
                      key={index}
                      className={`group relative overflow-hidden rounded-2xl border ${scheme.border} bg-gradient-to-br ${scheme.bg} p-8 transition-all hover:-translate-y-1 ${scheme.hover} hover:shadow-lg`}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full blur-2xl -z-0" />
                      <div className="relative z-10 flex flex-col items-start gap-4">
                        <span className={`rounded-full bg-gradient-to-br ${scheme.icon} p-3 text-white shadow-lg`}>
                          <CheckCircle2 className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">{type.title}</h3>
                          <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-3">{type.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {(serviceDetail.companyWhyTitle || serviceDetail.whyChooseTitle) && (serviceDetail.companyWhyItems || serviceDetail.whyChooseItems) && (
            <section className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-start">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-teal-700">
                    <Shield className="h-4 w-4" /> Benefits
                  </div>
                  <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl">
                    {serviceDetail.companyWhyTitle || serviceDetail.whyChooseTitle}
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {(serviceDetail.companyWhyItems || serviceDetail.whyChooseItems).map((item, index) => {
                    const colorSchemes = [
                      { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', icon: 'from-emerald-500 to-teal-600', hover: 'hover:border-emerald-500/50' },
                      { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', icon: 'from-blue-500 to-cyan-600', hover: 'hover:border-blue-500/50' },
                      { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', icon: 'from-orange-500 to-amber-600', hover: 'hover:border-orange-500/50' },
                    ];
                    const scheme = colorSchemes[index % colorSchemes.length];
                    return (
                      <div
                        key={index}
                        className={`flex gap-4 rounded-xl border ${scheme.border} bg-gradient-to-br ${scheme.bg} p-5 transition-all hover:-translate-y-0.5 ${scheme.hover} hover:shadow-md`}
                      >
                        <span className={`rounded-full bg-gradient-to-br ${scheme.icon} p-2 text-white flex-shrink-0`}>
                          <CheckCircle2 className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-base font-montreal font-bold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-2xl border border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 p-8 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -z-0" />
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-200 to-teal-200 px-3 py-1.5 text-[11px] font-montreal font-bold uppercase tracking-[0.25em] text-emerald-800">
                    <Sparkles className="h-3.5 w-3.5" /> Get Started
                  </div>
                  <div>
                    <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">Ready to Get Started?</h3>
                    <p className="text-sm font-gotham leading-relaxed text-slate-700">
                      Build your <span className="font-montreal font-bold text-emerald-700">{service.title}</span> facility with Sabaysis today.
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
                      to="/contact-us"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl"
                    >
                      Enquire Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </aside>
            </section>
          )}
        </main>
      </div>
    );
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

