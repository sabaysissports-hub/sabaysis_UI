import { Sparkles } from 'lucide-react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      'SABAYSIS SPORTS & INFRA exceeded our expectations by delivering impeccable artificial grass. Their commitment to quality products and exceptional service sets them apart. As our top choice for manufacturing, they consistently raise the bar.',
    name: 'Sakshi Mehra',
    title: 'Client',
  },
  {
    quote:
      'Our experience with SABAYSIS SPORTS & INFRA left us thoroughly impressed! The transformative impact of their top-tier artificial grass on our space is undeniable. With unmatched quality and prompt service, SABAYSIS SPORTS & INFRA has become our go-to and preferred manufacturer.',
    name: 'Vinod Kumar',
    title: 'Client',
  },
  {
    quote:
      'In the realm of excellence, Sabaysis Sports & Infra stands out. Their top-notch artificial grass not only met but surpassed our standards. The seamless process from initial consultation to flawless installation solidified Sabaysis Sports & Infra as our trusted and preferred manufacturer.',
    name: 'Rudra',
    title: 'Client',
  },
];

export function Testimonials() {
  return (
    <section className="relative space-y-6 overflow-visible md:space-y-8">

      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2">
          <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">
            Testimonials
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-slate-50">
          Built for real sports &amp;{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
            infrastructure projects
          </span>
        </h2>
      </div>

      {/* Infinite Moving Cards */}
      <div className="relative rounded-lg">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </section>
  );
}
