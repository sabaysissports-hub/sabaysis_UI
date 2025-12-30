import { MapPin, Phone, Mail, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';
import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/ContactForm';
import { useSearchParams } from 'react-router-dom';

export function ContactUs() {
  usePageTitle('Contact Us');
  const [mapError, setMapError] = useState(false);
  const [searchParams] = useSearchParams();
  const productName = searchParams.get('product') || '';

  useEffect(() => {
    // Set a timeout to detect if map fails to load
    const timer = setTimeout(() => {
      // Check if iframe loaded successfully (this is a fallback check)
      const iframe = document.querySelector('iframe[title="SABAYSIS SPORTS & INFRA Location"]') as HTMLIFrameElement;
      if (iframe && !iframe.contentWindow) {
        setMapError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-4 md:px-6 py-16 md:py-24">
        <section className="relative space-y-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-400">
              Get In Touch
            </p>
            <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Have a question about our sports infrastructure or services? We'd love to hear from you. 
            Get in touch with our team and let's discuss your project.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20">
                <MapPin className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Office Address
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Tiwari Quarters, Phase 2, Kesharganj,
              <br />
              Meerut, Uttar Pradesh 250001
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20">
                <Phone className="h-6 w-6 text-blue-700 dark:text-blue-400" />
              </div>
              <a href="tel:+919897053591" className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Phone Number
            </h3>
            <a href="tel:+919897053591" className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              +91 98970 53591
            </a>
          </div>

          <div className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-900/30 dark:to-cyan-800/20">
                <Mail className="h-6 w-6 text-cyan-700 dark:text-cyan-400" />
              </div>
              <a href="mailto:ajarenterprisesmeerut@gmail.com" className="text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Email Address
            </h3>
            <a
              href="mailto:ajarenterprisesmeerut@gmail.com"
              className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors break-all"
            >
              ajarenterprisesmeerut@gmail.com
            </a>
          </div>
        </section>
        <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <Clock className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Send us a message</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            <ContactForm initialSubject={productName} className="mt-8" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <MapPin className="h-5 w-5 text-blue-700 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Visit our location</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Based in Meerut, Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-sm mt-4">
              <div className="relative h-full min-h-[400px] w-full md:min-h-[500px]">
                {mapError ? (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-8 text-center">
                    <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                      <MapPin className="h-8 w-8 text-slate-400" />
                    </div>
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-200 mb-2">Map unavailable</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-xs">
                      Tiwari Quarters, Phase 2, Kesharganj,
                      <br />
                      Meerut, Uttar Pradesh 250001
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Tiwari+Quarters,+Phase+2,+Kesharganj,+Meerut,+Uttar+Pradesh+250001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 dark:from-emerald-500 dark:to-teal-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98] min-h-[48px]"
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
                        className="inline-flex items-center gap-2 rounded-full bg-white/95 dark:bg-slate-900/95 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-slate-900 dark:text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-white dark:hover:bg-slate-800 active:scale-[0.98] backdrop-blur-sm min-h-[44px]"
                      >
                        <MapPin className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
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


