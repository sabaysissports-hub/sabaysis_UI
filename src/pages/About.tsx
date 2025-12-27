import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import ab1 from '@/assets/About/ab1.jpg';
import { Sparkles, ShieldCheck, Leaf, Users, ArrowRight } from 'lucide-react';

export function About() {
  usePageTitle('About');
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${ab1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/85 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(52,211,153,0.16),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.12),transparent_32%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 md:px-6 md:py-16 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-100 backdrop-blur">
              <Sparkles className="h-4 w-4" /> Sabaysis Sports &amp; Infra
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-emerald-100/80">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Design</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Build</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Maintain</span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[7fr,5fr] md:items-center">
            <div className="space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.6em] text-emerald-100/80">
                The future-forged path to
              </p>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Success • Ignite • Breakthrough
              </h1>
              <p className="text-sm leading-relaxed text-slate-100/90 md:text-base">
                At <span className="font-semibold">SABAYSIS Sports &amp; Infra</span>, we pioneer artificial grass and sports area solutions—redefining outdoor spaces with technology, aesthetics, durability, and performance at the core.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[{ label: 'Projects delivered', value: '250+' }, { label: 'Cities served', value: '35+' }, { label: 'Client satisfaction', value: '97%' }].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center shadow-sm backdrop-blur">
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-100/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-100">
                <ShieldCheck className="h-5 w-5" /> Snapshot
              </div>
              <ul className="space-y-3 text-sm text-slate-100/90">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span><span className="font-semibold text-white">Artificial grass specialists</span> for sports arenas, schools, clubs, and landscapes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span><span className="font-semibold text-white">End-to-end execution</span> from consultation and design to construction and maintenance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span><span className="font-semibold text-white">Quality &amp; sustainability</span> embedded into every material and process we choose.</span>
                </li>
              </ul>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-emerald-400"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6 py-16 md:py-20">
        {/* About Us */}
        <section className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">About Us</h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              SABAYSIS Sports &amp; Infra transforms outdoor spaces with high‑performance synthetic surfaces. We go beyond traditional standards to craft environments that feel natural, perform under pressure, and stand the test of time.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              Every project reflects our commitment to technology, aesthetic detail, and long‑term reliability. From sports arenas and schools to residential lawns and commercial landscapes, we build for real‑world play and everyday use.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[{ icon: <ShieldCheck className="h-5 w-5" />, title: 'Quality-first' }, { icon: <Leaf className="h-5 w-5" />, title: 'Sustainable' }, { icon: <Users className="h-5 w-5" />, title: 'People-centric' }].map((item) => (
                <div key={item.title} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
                  <span className="rounded-full bg-emerald-50 p-2 text-emerald-700 ring-1 ring-emerald-100">{item.icon}</span>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Why clients choose us
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Deep domain expertise in sports infrastructure and synthetic turf.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Reliable timelines with professional project management.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Surfaces engineered for safety, comfort, and performance.</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />Long‑term partnership mindset with maintenance support.</li>
            </ul>
          </div>
        </section>

        {/* Quality Control */}
        <section className="space-y-12">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Quality Control
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Engineered quality in every fibre and finish.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              At SABAYSIS Sports &amp; Infra, quality is a disciplined process &mdash; from
              selecting raw materials to on‑ground installation, every step is measured, inspected,
              and improved.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  01
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Stringent material selection
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We rigorously evaluate every component for durability, eco‑friendliness, UV
                  resistance, and player safety. Only materials that meet our benchmarks are
                  approved for production.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  02
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Precision manufacturing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  State‑of‑the‑art machinery and strict process controls ensure consistent tufting,
                  backing, and finishing so every roll of turf performs exactly as designed.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  03
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Comprehensive final inspections
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Each batch is inspected for colour consistency, pile height, tuft bind, and
                  overall finish before it leaves our facilities, ensuring reliable performance on
                  the field.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  04
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Continuous improvement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We invest in R&amp;D and feedback from live projects, constantly refining our
                  systems and products in line with global standards and new technologies.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid gap-8 md:gap-10 md:grid-cols-2">
          <article className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
              <Sparkles className="h-4 w-4" /> Our Mission
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Transform every outdoor space</h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              We revolutionize outdoor spaces globally with premium artificial grass and sports solutions that exceed expectations. We set new benchmarks for innovation, sustainability, and customer satisfaction—creating spaces that inspire healthy, active communities.
            </p>
          </article>
          <article className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
              <ShieldCheck className="h-4 w-4" /> Our Vision
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Lead with impact and trust</h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              We aim to be the global leader in sports and landscape infrastructure—known for manufacturing excellence and positive change—so every outdoor space is functional, beautiful, and in harmony with nature.
            </p>
          </article>
        </section>

        {/* Social Responsibility */}
        <section className="space-y-12">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Social Responsibility
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Creating impact beyond the playing field.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              SABAYSIS Sports &amp; Infra is committed to responsible growth &mdash; for the
              environment, our people, and the communities we work with every day.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Environmental stewardship
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Designing greener futures
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We prioritise eco‑friendly materials, energy‑efficient manufacturing, and
                  responsible waste management to reduce our overall ecological footprint.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Employee welfare
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  People at the centre
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our teams are our greatest asset. We foster a safe, inclusive, and growth‑oriented
                  workplace with training, recognition, and a healthy work‑life balance.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Transparency &amp; ethics
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Built on trust
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We operate with integrity and clear communication, ensuring accountability in our
                  decisions and long‑term trust with clients, partners, and suppliers.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Community engagement
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Uplifting local communities
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We support initiatives around education, health, and sports infrastructure,
                  helping create safe, inspiring spaces that benefit neighbourhoods for years to
                  come.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}


