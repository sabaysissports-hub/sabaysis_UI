import { Sparkles, TrendingUp, Leaf, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export function FeaturedServices() {
  return (
    <section className="relative w-full px-4 py-16 lg:px-0 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-900/20" />
        <div className="absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-emerald-50/60 blur-3xl dark:bg-emerald-900/10" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:gap-16 lg:flex-row lg:items-center">
        {/* Left: intro content */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-900/20">
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">
              Redefining Outdoor Spaces
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-slate-50">
            Exceptional{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              artificial grass
            </span>{' '}
            solutions
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
            <p>
              <span className="font-semibold text-slate-900 dark:text-slate-50">Sabaysis Sports &amp; Infra</span> stands as the foremost
              destination for exceptional artificial grass solutions, where quality seamlessly meets innovation. With
              unmatched expertise and state-of-the-art manufacturing, we redefine outdoor spaces, offering customized
              solutions that exceed expectations.
            </p>
            <p>
              Committed to global quality standards,{' '}
              <span className="font-semibold text-slate-900 dark:text-slate-50">Sabaysis Sports &amp; Infra</span> ensures durability,
              resilience, and aesthetic appeal in every product. Our dedication to sustainability is reflected in
              eco‑friendly practices and the use of recyclable materials.
            </p>
          </div>

          {/* Feature highlights with icons */}
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: Shield, text: 'Global Quality Standards' },
              { icon: Leaf, text: 'Eco-Friendly Materials' },
              { icon: TrendingUp, text: 'State-of-the-Art Tech' },
              { icon: CheckCircle2, text: 'Proven Excellence' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                  <item.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: brand + CTA card */}
        <div className="flex-1">
          <div className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl md:p-8 dark:border-slate-700 dark:bg-slate-900">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-emerald-400/10 dark:to-teal-400/10" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="h-16 w-1.5 rounded-full bg-gradient-to-b from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 md:text-xl dark:text-slate-50">
                    Sabaysis Sports &amp; Infra
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    Excellence in Sports Infrastructure
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 text-sm text-slate-700 sm:grid-cols-2 dark:text-slate-300">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 dark:bg-emerald-900/20">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400">
                      What we deliver
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {['High‑performance sports turfs', 'Premium landscape solutions', 'End‑to‑end execution'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-teal-50 px-3 py-1.5 dark:bg-teal-900/20">
                    <Shield className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-700 dark:text-teal-400">
                      Why choose us
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {['Global quality benchmarks', 'Sustainable practices', 'Proven track record'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 active:scale-[0.98] min-h-[52px] dark:from-emerald-500 dark:to-teal-500">
                  <span className="relative z-10">Drop Your Enquiry</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 dark:from-emerald-600 dark:to-teal-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
