import { MapPin, Phone, Mail, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { useSearchParams } from 'react-router-dom';
import contactImg from '@/assets/contact.jpg';

export function ContactUs() {
  usePageTitle('Contact Us');
  const [mapError, setMapError] = useState(false);
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('product') || searchParams.get('service') || '';

  useEffect(() => {
    const timer = setTimeout(() => {
      const iframe = document.querySelector('iframe[title="SABAYSIS SPORTS & INFRA Location"]') as HTMLIFrameElement;
      if (iframe && !iframe.contentWindow) {
        setMapError(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={contactImg} 
            alt="Contact Us"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950/75 to-black/70" />
        <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-7xl flex-col justify-center px-4 py-16 text-white md:min-h-[400px] md:py-20 lg:min-h-[480px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-montreal font-bold uppercase tracking-[0.35em] text-emerald-300 backdrop-blur w-fit mb-6">
            <Sparkles className="h-4 w-4" /> Get In Touch
          </p>
          <h1 className="text-4xl font-montreal font-bold tracking-tight md:text-5xl lg:text-6xl">
            We're Here to Help
          </h1>
          <p className="mt-4 max-w-3xl text-base font-gotham text-white/85 md:text-lg">
            Have a question about our sports infrastructure? Get in touch with our team.
          </p>
        </div>
      </section>

      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6 py-12 md:py-16">
        <section className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
            <h3 className="text-sm font-montreal font-bold uppercase tracking-wider text-slate-900 mb-3">
              Office Address
            </h3>
            <p className="text-sm font-gotham leading-relaxed text-slate-600">
              Tiwari Quarters, Phase 2, Kesharganj,
              <br />
              Meerut, Uttar Pradesh 250001
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
                <Phone className="h-6 w-6" />
              </div>
              <a href="tel:+919897053591" className="text-slate-400 group-hover:text-emerald-600 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <h3 className="text-sm font-montreal font-bold uppercase tracking-wider text-slate-900 mb-3">
              Phone Number
            </h3>
            <a href="tel:+919897053591" className="text-sm font-montreal font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
              +91 98970 53591
            </a>
          </div>

          <div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg">
                <Mail className="h-6 w-6" />
              </div>
              <a href="mailto:ajarenterprisesmeerut@gmail.com" className="text-slate-400 group-hover:text-emerald-600 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <h3 className="text-sm font-montreal font-bold uppercase tracking-wider text-slate-900 mb-3">
              Email Address
            </h3>
            <a
              href="mailto:ajarenterprisesmeerut@gmail.com"
              className="text-sm font-montreal font-bold text-emerald-700 hover:text-emerald-800 transition-colors break-all"
            >
              ajarenterprisesmeerut@gmail.com
            </a>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-3 mb-6">
              <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-2 text-white shadow-lg">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-montreal font-bold text-slate-900">Send us a message</h2>
                <p className="mt-1 text-sm font-gotham text-slate-600">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
            <ContactForm initialSubject={productName} className="mt-8" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-4">
              <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-2 text-white shadow-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-montreal font-bold text-slate-900">Visit our location</h2>
                <p className="mt-1 text-sm font-gotham text-slate-600">
                  Based in Meerut, Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm mt-4">
              <div className="relative h-full min-h-[400px] w-full md:min-h-[500px]">
                {mapError ? (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-8 text-center">
                    <div className="p-4 rounded-full bg-slate-100 mb-4">
                      <MapPin className="h-8 w-8 text-slate-400" />
                    </div>
                    <p className="text-base font-montreal font-bold text-slate-700 mb-2">Map unavailable</p>
                    <p className="text-sm font-gotham text-slate-600 mb-6 max-w-xs">
                      Tiwari Quarters, Phase 2, Kesharganj,
                      <br />
                      Meerut, Uttar Pradesh 250001
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Tiwari+Quarters,+Phase+2,+Kesharganj,+Meerut,+Uttar+Pradesh+250001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98] min-h-[48px]"
                    >
                      <MapPin className="h-4 w-4" />
                      Open in Maps
                    </a>
                  </div>
                ) : (
                  <>
                    <iframe
                      title="SABAYSIS SPORTS & INFRA Location"
                      src="https://maps.google.com/maps?q=Tiwari+Quarters,+Phase+2,+Kesharganj,+Meerut,+Uttar+Pradesh+250001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      className="h-full w-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      onLoad={() => setMapError(false)}
                    />
                    <div className="absolute bottom-4 right-4 z-10">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Tiwari+Quarters,+Phase+2,+Kesharganj,+Meerut,+Uttar+Pradesh+250001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-slate-900 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white active:scale-[0.98] backdrop-blur-sm min-h-[44px]"
                      >
                        <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                        View Map
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
