import { Sparkles, ArrowUpRight, Target, Leaf, Trophy, Waves, Timer } from 'lucide-react';
import sportsNetImg from '@/assets/HomeImages/Sports-Net.jpg';
import footballTurfImg from '@/assets/HomeImages/steptodown.com652452.jpg';
import landscapeGrassImg from '@/assets/HomeImages/Untitled-design-25.png';
import cricketTurfImg from '@/assets/HomeImages/cricket.jpg';
import swimmingPoolImg from '@/assets/HomeImages/swiming.png';
import multisportTrackImg from '@/assets/HomeImages/running.png';

type ServiceItem = {
  title: string;
  description: string;
  ctaLabel: string;
  imageUrl: string;
  imageAlt: string;
  icon: typeof Target;
  color: string;
};

const services: ServiceItem[] = [
  {
    title: 'Sports Net Installation',
    description:
      'Our sports nets are designed for various applications, ensuring safety and superior performance for sports like cricket, tennis, and football. Whether you need nets for residential, recreational, or professional settings, we provide custom solutions to suit your needs.',
    ctaLabel: 'VIEW MORE',
    imageUrl: sportsNetImg,
    imageAlt: 'Sports net on a court under stadium lights',
    icon: Target,
    color: 'emerald',
  },
  {
    title: 'Football Turf Solutions',
    description:
      'Get the best out of your football turf with our expertly designed and installed artificial grass. Whether for professional use or community sports facilities, our synthetic football turfs provide a consistent playing surface all year round.',
    ctaLabel: 'VIEW MORE',
    imageUrl: footballTurfImg,
    imageAlt: 'Football turf field under bright lights',
    icon: Trophy,
    color: 'blue',
  },
  {
    title: 'Landscape Grass Installation',
    description:
      'Transform your outdoor spaces with our realistic landscape turf. Our synthetic grass solutions are ideal for lawns, gardens, and decorative landscaping, offering a lush green look without the hassle of maintenance.',
    ctaLabel: 'VIEW MORE',
    imageUrl: landscapeGrassImg,
    imageAlt: 'Lush green landscaped garden with synthetic grass',
    icon: Leaf,
    color: 'green',
  },
  {
    title: 'Cricket Turf Construction',
    description:
      'Our premium cricket turfs are built to meet the highest standards of play. Designed for both professional and amateur cricket players, our synthetic turfs ensure consistent bounce, durability, and performance.',
    ctaLabel: 'VIEW MORE',
    imageUrl: cricketTurfImg,
    imageAlt: 'Cricket pitch with stumps on synthetic turf',
    icon: Target,
    color: 'amber',
  },
  {
    title: 'Swimming Pool Design & Construction',
    description:
      'Looking to install a swimming pool? Whether residential or commercial, we offer complete swimming pool design, construction, and maintenance services tailored to your specifications, ensuring a perfect pool for every need.',
    ctaLabel: 'VIEW MORE',
    imageUrl: swimmingPoolImg,
    imageAlt: 'Modern swimming pool with clear blue water',
    icon: Waves,
    color: 'cyan',
  },
  {
    title: 'Multisport Tracks & Running Tracks',
    description:
      'Our multisport tracks and running tracks are ideal for schools, sports complexes, and athletic clubs. Built to the highest standards, they provide a safe, durable, and smooth surface for running, training, and sports events.',
    ctaLabel: 'VIEW MORE',
    imageUrl: multisportTrackImg,
    imageAlt: 'Running track in a stadium at sunset',
    icon: Timer,
    color: 'orange',
  },
];

export function ValueProps() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { badge: string; icon: string; border: string; glow: string }> = {
      emerald: {
        badge: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
        icon: 'text-emerald-600 dark:text-emerald-400',
        border: 'group-hover:border-emerald-500/50',
        glow: 'group-hover:shadow-emerald-500/20',
      },
      blue: {
        badge: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
        icon: 'text-blue-600 dark:text-blue-400',
        border: 'group-hover:border-blue-500/50',
        glow: 'group-hover:shadow-blue-500/20',
      },
      green: {
        badge: 'bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400',
        icon: 'text-green-600 dark:text-green-400',
        border: 'group-hover:border-green-500/50',
        glow: 'group-hover:shadow-green-500/20',
      },
      amber: {
        badge: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
        icon: 'text-amber-600 dark:text-amber-400',
        border: 'group-hover:border-amber-500/50',
        glow: 'group-hover:shadow-amber-500/20',
      },
      cyan: {
        badge: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400',
        icon: 'text-cyan-600 dark:text-cyan-400',
        border: 'group-hover:border-cyan-500/50',
        glow: 'group-hover:shadow-cyan-500/20',
      },
      orange: {
        badge: 'bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400',
        icon: 'text-orange-600 dark:text-orange-400',
        border: 'group-hover:border-orange-500/50',
        glow: 'group-hover:shadow-orange-500/20',
      },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section className="animate-fade-in-up relative overflow-hidden px-4 pb-16 lg:px-8 lg:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl dark:bg-emerald-900/10" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl dark:bg-teal-900/10" />
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-900/20">
          <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">
            Our Services Include
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-slate-50">
          End‑to‑end sports &amp;{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
            infrastructure solutions
          </span>
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-sm text-slate-600 md:text-base dark:text-slate-300">
          From turf to tracks, pools to playgrounds, we design, build and maintain high‑performance spaces tailored to
          your requirements.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const colors = getColorClasses(service.color);
          const Icon = service.icon;
          
          return (
            <article
              key={service.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 ${colors.border} ${colors.glow} hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900`}
            >
              <div className="absolute top-4 left-4 z-10">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.badge} backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
              </div>

              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 rounded-full bg-emerald-400" />
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                      Professional Service
                    </p>
                  </div>
                  <p className="mt-2 text-lg font-bold text-white">{service.title}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom CTA bar */}
              <div className={`border-t border-slate-200 px-6 py-4 transition-colors duration-300 ${colors.border} dark:border-slate-700`}>
                <button className={`group/btn w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 ${colors.badge} hover:shadow-md`}>
                  <span className="relative z-10">{service.ctaLabel}</span>
                  <ArrowUpRight className={`relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 ${colors.icon}`} />
                </button>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
