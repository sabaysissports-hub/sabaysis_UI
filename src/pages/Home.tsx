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
export function Home() {
  usePageTitle('Home');
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <HeroCarousel />
      <main className="flex flex-col">
        {/* Featured Services */}
        <section className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FeaturedServices />
          </div>
        </section>
        {/* Value Props / Services */}
        <section className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ValueProps />
          </div>
        </section>

        <MarketingServices />
        <CollectionSection />


        {/* Unified Sports Turf */}
        <UnifiedSportsTurf />

        {/* Testimonials */}
        <section className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Testimonials />
          </div>
        </section>

        {/* Questions / FAQ */}
        <section className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Questions />
          </div>
        </section>

        {/* Primary CTA - Final section */}
        <section className="relative bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PrimaryCTA />
          </div>
        </section>
      </main>
    </div>
  );
}

