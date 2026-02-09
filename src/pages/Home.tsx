import { FeaturedServices } from '@/components/home/FeaturedServices';
import { CollectionSection } from '@/components/home/CollectionSection';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { PrimaryCTA } from '@/components/home/PrimaryCTA';
import { UnifiedSportsTurf } from '@/components/home/UnifiedSportsTurf';
import { Testimonials } from '@/components/home/Testimonials';
import { ValueProps } from '@/components/home/ValueProps';
import { MarketingServices } from '@/components/home/MarketingServices';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Questions } from '@/components/home/question';
import { Link } from 'react-router-dom';
export function Home() {
  usePageTitle('Home');
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <HeroCarousel />
      <main className="flex flex-col">
        {/* Featured Services */}
        <section id="services" className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FeaturedServices />
          </div>
        </section>
        {/* Value Props / Services */}
        <section id="about" className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ValueProps />
          </div>
        </section>

        <MarketingServices />
        <section id="products">
          <CollectionSection />
        </section>

        {/* Maintenance Section - Added for smooth scrolling target */}
        <section id="maintenance" className="relative bg-white py-20">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-montreal font-bold text-slate-900 mb-6">
                  Professional <span className="text-emerald-600">Maintenance</span> Services
                </h2>
                <p className="text-lg text-slate-600 font-gotham mb-8 leading-relaxed">
                  We provide end-to-end maintenance solutions for all types of sports surfaces, ensuring longevity, safety, and peak performance of your facilities.
                </p>
                <Link 
                  to="/maintenance" 
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-8 py-4 font-montreal font-bold hover:bg-emerald-600 transition-all duration-300 shadow-lg"
                >
                  Explore Maintenance Plans
                </Link>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Routine Care', icon: 'Wrench' },
                    { title: 'Deep Cleaning', icon: 'Zap' },
                    { title: 'Infill Top-up', icon: 'Shield' },
                    { title: 'Testing', icon: 'Target' }
                  ].map((item) => (
                    <div key={item.title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                      <div className="size-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                        <span className="font-bold">{item.title[0]}</span>
                      </div>
                      <h4 className="font-montreal font-bold text-slate-900">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Sports Turf */}
        <UnifiedSportsTurf />

        {/* Testimonials */}
        <section className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Testimonials />
          </div>
        </section>

        {/* Questions / FAQ */}
        <section id="questions" className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Questions />
          </div>
        </section>

        {/* Primary CTA - Final section */}
        <section id="contact" className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PrimaryCTA />
          </div>
        </section>
      </main>
    </div>
  );
}

