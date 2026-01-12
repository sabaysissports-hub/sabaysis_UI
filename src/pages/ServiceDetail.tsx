import { Link, useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '@/config/api';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useEffect, useState } from 'react';
import { CheckCircle2, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

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
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Service
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            Service not found
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We couldn&apos;t find the service you were looking for. Please check the link or explore all our available
            sports and infrastructure services.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-500 min-h-12 min-w-40"
            >
              Back to Home
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-slate-900 hover:bg-slate-50 min-h-12 min-w-40"
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
            <section className="text-center max-w-3xl mx-auto">
              <p className="text-base font-gotham leading-relaxed text-slate-700 md:text-lg">
                {serviceDetail.welcomeText}
              </p>
            </section>
          )}

          {serviceDetail.whyChooseOurTitle && serviceDetail.whyChooseOurItems && serviceDetail.whyChooseOurItems.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl text-center">
                {serviceDetail.whyChooseOurTitle}
              </h2>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviceDetail.whyChooseOurItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 p-8 transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <span className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
                        <CheckCircle2 className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-3">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {serviceDetail.features && serviceDetail.features.length > 0 && (
            <section className="space-y-8">
              {serviceDetail.servicesTitle && (
                <div className="text-center">
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
                {serviceDetail.features.map((feature, index) => (
                  <article
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 p-8 transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <span className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
                        <Sparkles className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-3">{feature.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {serviceDetail.typesTitle && serviceDetail.typesItems && serviceDetail.typesItems.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl text-center">
                {serviceDetail.typesTitle}
              </h2>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviceDetail.typesItems.map((type, index) => (
                  <article
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 p-8 transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
                  >
                    <div className="flex flex-col items-start gap-4">
                      <span className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
                        <CheckCircle2 className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">{type.title}</h3>
                        <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-3">{type.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {(serviceDetail.companyWhyTitle || serviceDetail.whyChooseTitle) && (serviceDetail.companyWhyItems || serviceDetail.whyChooseItems) && (
            <section className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 md:text-4xl">
                  {serviceDetail.companyWhyTitle || serviceDetail.whyChooseTitle}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {(serviceDetail.companyWhyItems || serviceDetail.whyChooseItems).map((item, index) => (
                    <div key={index} className="flex gap-4 rounded-xl border border-slate-200 p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-md">
                      <span className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-2 text-white flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-montreal font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm font-gotham leading-relaxed text-slate-600 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-8 shadow-lg">
                <div className="space-y-6">
                  <h3 className="text-sm font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
                    Get Started
                  </h3>
                  <p className="text-sm font-gotham leading-relaxed text-slate-700">
                    Ready to build your <span className="font-montreal font-bold text-slate-900">{service.title}</span> facility?
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="rounded-full bg-emerald-600 p-2 text-white flex-shrink-0">
                        <PhoneCall className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-montreal font-bold text-slate-900">Contact Us</p>
                        <p className="text-xs font-gotham text-slate-600 mt-1">+91 98970 53591</p>
                      </div>
                    </div>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-emerald-600 px-6 py-3 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-700 shadow-lg hover:shadow-xl"
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
            <Link to="/#services" className="hover:text-white transition-colors font-gotham">Services</Link>
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

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Site Assessment', desc: 'Professional evaluation & planning' },
            { title: 'Premium Materials', desc: 'High-quality, durable components' },
            { title: 'Expert Installation', desc: 'Professional setup & finishing' },
            { title: 'Ongoing Support', desc: 'Maintenance & guidance' },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
            >
              <div className="flex flex-col items-start gap-3">
                <span className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 text-white shadow-lg">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-montreal font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs font-gotham text-slate-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-montreal font-bold tracking-tight text-slate-900 md:text-3xl">
              Professional Sports Infrastructure
            </h2>
            <p className="text-sm font-gotham leading-relaxed text-slate-600">
              We deliver durable, high-performance facilities designed for schools, clubs, and commercial venues.
            </p>
          </div>

          <aside className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 shadow-lg">
            <div className="space-y-4">
              <h3 className="text-sm font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
                Get Started
              </h3>
              <p className="text-sm font-gotham leading-relaxed text-slate-700">
                Ready to build your <span className="font-montreal font-bold text-slate-900">{service.title}</span>?
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-emerald-600 p-2 text-white flex-shrink-0">
                    <PhoneCall className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-montreal font-bold text-slate-900">Contact Us</p>
                    <p className="text-xs font-gotham text-slate-600">+91 98970 53591</p>
                  </div>
                </div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-white transition hover:bg-emerald-700 shadow-lg hover:shadow-xl"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

