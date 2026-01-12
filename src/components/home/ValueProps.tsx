import { ArrowUpRight, Target, Leaf, Trophy, Waves, Timer } from 'lucide-react';
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
  imageUrl: string;
  imageAlt: string;
  icon: typeof Target;
  gradient: string;
  hoverGradient: string;
};

const services: ServiceItem[] = [
  {
    title: 'Sports Net Installation',
    shortDesc: 'Professional safety nets for all sports',
    imageUrl: sportsNetImg,
    imageAlt: 'Sports net on a court under stadium lights',
    icon: Target,
    gradient: 'from-emerald-500 to-teal-500',
    hoverGradient: 'from-emerald-600 to-teal-600',
  },
  {
    title: 'Football Turf Solutions',
    shortDesc: 'FIFA-standard synthetic football fields',
    imageUrl: footballTurfImg,
    imageAlt: 'Football turf field under bright lights',
    icon: Trophy,
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Landscape Grass',
    shortDesc: 'Premium synthetic grass for landscaping',
    imageUrl: landscapeGrassImg,
    imageAlt: 'Lush green landscaped garden with synthetic grass',
    icon: Leaf,
    gradient: 'from-green-500 to-emerald-500',
    hoverGradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Cricket Turf',
    shortDesc: 'Professional cricket pitch construction',
    imageUrl: cricketTurfImg,
    imageAlt: 'Cricket pitch with stumps on synthetic turf',
    icon: Target,
    gradient: 'from-amber-500 to-orange-500',
    hoverGradient: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Swimming Pools',
    shortDesc: 'Complete pool design & construction',
    imageUrl: swimmingPoolImg,
    imageAlt: 'Modern swimming pool with clear blue water',
    icon: Waves,
    gradient: 'from-cyan-500 to-blue-500',
    hoverGradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'Running Tracks',
    shortDesc: 'Olympic-standard athletic tracks',
    imageUrl: multisportTrackImg,
    imageAlt: 'Running track in a stadium at sunset',
    icon: Timer,
    gradient: 'from-orange-500 to-red-500',
    hoverGradient: 'from-orange-600 to-red-600',
  },
];

export function ValueProps() {
  return (
    <section className="relative overflow-visible">

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Minimal */}
        <div className="text-center mb-10">
          <h2 className="font-montreal text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="font-gotham mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Complete sports infrastructure solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3 pb-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                to="/services"
                className="group relative flex flex-col overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]`}>
                  <div className="h-full w-full rounded-3xl bg-white" />
                </div>

                <div className="relative z-10">
                  {/* Image Section */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                      loading="lazy"
                    />

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-montreal text-2xl font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                      <p className="font-gotham mt-1 text-sm text-white/90">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="p-6">
                    <div className={`group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${service.gradient} px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                      <span className="font-montreal">View More</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </div>
                  </div>
                </div>

                {/* Decorative Glow Effect */}
                <div className={`absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
