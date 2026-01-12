import { FeaturedServices } from '@/components/home/FeaturedServices';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { PrimaryCTA } from '@/components/home/PrimaryCTA';
import { UnifiedSportsTurf } from '@/components/home/UnifiedSportsTurf';
import { Testimonials } from '@/components/home/Testimonials';
import { ValueProps } from '@/components/home/ValueProps';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Questions } from '@/components/home/question';
import { LatestProducts } from '@/components/home/LatestProducts';

export function Home() {
  usePageTitle('Home');
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <HeroCarousel />
      <main className="flex flex-col">
        {/* Featured Services */}
        <section className="relative bg-slate-50 py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FeaturedServices />
          </div>
        </section>

        {/* Latest Products */}
        <section className="relative bg-white py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <LatestProducts />
          </div>
        </section>

        {/* Value Props / Services */}
        <section className="relative bg-slate-50 py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ValueProps />
          </div>
        </section>

        {/* Unified Sports Turf */}
        <section className="relative bg-slate-50 py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <UnifiedSportsTurf />
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative bg-slate-50 py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Testimonials />
          </div>
        </section>

        {/* Questions / FAQ */}
        <section className="relative bg-slate-50 py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Questions />
          </div>
        </section>

        {/* Primary CTA - Final section */}
        <section className="relative bg-slate-50 py-8 md:py-10 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PrimaryCTA />
          </div>
        </section>
      </main>
    </div>
  );
}

