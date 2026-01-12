import { ArrowUpRight, Target, Leaf, Trophy, Waves, Timer, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import sportsNetImg from '@/assets/HomeImages/Sports-Net.jpg';
import footballTurfImg from '@/assets/HomeImages/steptodown.com652452.jpg';
import landscapeGrassImg from '@/assets/HomeImages/Untitled-design-25.png';
import cricketTurfImg from '@/assets/HomeImages/cricket.jpg';
import swimmingPoolImg from '@/assets/HomeImages/swiming.png';
import multisportTrackImg from '@/assets/HomeImages/running.png';

type ServiceItem = {
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  imageAlt: string;
  icon: typeof Target;
  gradient: string;
  hoverGradient: string;
};

const services: ServiceItem[] = [
  {
    title: 'Sports Net Installation',
    shortDesc: 'Professional safety nets',
    fullDesc: 'Engineered safety netting for training grounds, arenas, and sporting venues',
    imageUrl: sportsNetImg,
    imageAlt: 'Sports net on a court under stadium lights',
    icon: Target,
    gradient: 'from-emerald-500 to-teal-500',
    hoverGradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Football Turf Solutions',
    shortDesc: 'FIFA-standard fields',
    fullDesc: 'Premium synthetic football turfs designed for consistent play and durability',
    imageUrl: footballTurfImg,
    imageAlt: 'Football turf field under bright lights',
    icon: Trophy,
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Landscape Grass',
    shortDesc: 'Premium synthetic grass',
    fullDesc: 'Beautiful and low-maintenance synthetic grass for landscaping and outdoor spaces',
    imageUrl: landscapeGrassImg,
    imageAlt: 'Lush green landscaped garden with synthetic grass',
    icon: Leaf,
    gradient: 'from-green-500 to-emerald-500',
    hoverGradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Cricket Turf',
    shortDesc: 'Professional pitch construction',
    fullDesc: 'Match-ready cricket pitches with precise specifications and durability',
    imageUrl: cricketTurfImg,
    imageAlt: 'Cricket pitch with stumps on synthetic turf',
    icon: Target,
    gradient: 'from-amber-500 to-orange-500',
    hoverGradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Swimming Pools',
    shortDesc: 'Complete pool solutions',
    fullDesc: 'Custom pool design, construction, and maintenance for all facility types',
    imageUrl: swimmingPoolImg,
    imageAlt: 'Modern swimming pool with clear blue water',
    icon: Waves,
    gradient: 'from-cyan-500 to-blue-500',
    hoverGradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Running Tracks',
    shortDesc: 'Olympic-standard tracks',
    fullDesc: 'Professional athletic tracks engineered for performance and longevity',
    imageUrl: multisportTrackImg,
    imageAlt: 'Running track in a stadium at sunset',
    icon: Timer,
    gradient: 'from-orange-500 to-red-500',
    hoverGradient: 'from-orange-600 to-red-600',
  },
];

export function ValueProps() {
  return (
    <section className="relative overflow-visible py-4">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Enhanced */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
            <Sparkles className="h-4 w-4" /> What We Offer
          </div>
          <h2 className="font-montreal text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Comprehensive{' '}
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Sports Services
            </span>
          </h2>
          <p className="font-gotham text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From swimming pools to running tracks, we provide end-to-end solutions for every type of sports infrastructure
          </p>
        </div>

        {/* Services Grid - 3 Columns */}
        <div className="grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to="/"
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-200 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-emerald-100"
              >
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-montreal text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-gotham text-sm text-slate-600">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-sm font-montreal font-bold uppercase tracking-wider text-emerald-600 group-hover:text-emerald-700 transition-colors pt-2">
                    <span>Explore Service</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`h-1 w-0 bg-gradient-to-r ${service.gradient} transition-all duration-300 group-hover:w-full`} />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-10 py-5 text-base font-montreal font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-100"
          >
            <span>View All Services</span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
