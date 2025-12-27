import { Sparkles, ShieldCheck, Zap, Target, Leaf, Award, CheckCircle2, Mail } from 'lucide-react';
import unifiedMain from '@/assets/Unified S/synthetic-lawn-2048px-802551536-2x1-1.webp';
import { ContactForm } from '../ContactForm';
import featureOne from '@/assets/Unified S/Untitled-design-2023-12-23T101940.389.webp';
import featureTwo from '@/assets/Unified S/Untitled-design-2023-12-23T104200.082.webp';
import featureThree from '@/assets/Unified S/Untitled-design-2023-12-23T104210.112.webp';

export function UnifiedSportsTurf() {
  return (
    <section className="animate-fade-in-up relative overflow-hidden px-4 py-16 md:px-6 md:py-20 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-900/20" />
        <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/20" />
      </div>

      {/* Section Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 dark:bg-emerald-900/20">
          <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-400">
            Unified Sports Turf System
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
          Comprehensive sports &amp;{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
            outdoor turf solutions
          </span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
          As a leading enterprise in the industry,{' '}
          <span className="font-semibold text-slate-900 dark:text-slate-50">Sabaysis Sports &amp; Infra</span> is your go‑to partner for complete
          solutions catering to all sports surface requirements. We design and produce top‑notch artificial turf systems
          tailored for football, hockey, tennis, rugby, and multi‑sport activities.
        </p>
      </div>

      {/* Main two-column layout */}
      <div className="mt-12 md:mt-16 grid gap-10 md:gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        {/* Left: hero + feature grid */}
        <div className="space-y-8">
          {/* Hero card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
            <div className="absolute top-4 left-4 z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20 backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-500/30">
                <Target className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            
            <div className="relative h-64 w-full overflow-hidden sm:h-80">
              <img
                src={unifiedMain}
                alt="Professional artificial turf field"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-10 rounded-full bg-emerald-400" />
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
                    Sabaysis Sports &amp; Infra
                  </p>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Redefining outdoor spaces with exceptional artificial grass solutions.
                </h3>
              </div>
            </div>
          </div>

          {/* Our Core Features & Why Choose – as separate cards */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8 dark:border-slate-700 dark:bg-slate-900">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl transition-transform duration-500 group-hover:translate-x-12 group-hover:-translate-y-12" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 dark:bg-emerald-900/20">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-400">
                    Our Core Features
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Premium Materials</span> – high‑performance fibers and infill for
                      professional‑grade play.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Durability Assurance</span> – engineered to withstand intensive,
                      all‑weather usage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Advanced Technology</span> – consistent ball roll, traction and
                      impact absorption.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Stringent Quality Control</span> – every layer tested for
                      resilience and safety.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-8 dark:border-slate-700 dark:bg-slate-900">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-teal-500/10 to-emerald-500/10 blur-2xl transition-transform duration-500 group-hover:translate-x-12 group-hover:-translate-y-12" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-lg bg-teal-50 px-3 py-1.5 dark:bg-teal-900/20">
                  <Award className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 dark:text-teal-400">
                    Why Choose Sabaysis
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <CheckCircle2 className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Unrivaled Excellence</span> in artificial grass manufacturing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <CheckCircle2 className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Cutting‑Edge Technology</span> that pioneers the future of sports
                      infrastructure.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <CheckCircle2 className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Tailored Brilliance</span> with unmatched customization for every
                      project.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <CheckCircle2 className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Green Innovation</span> and eco‑friendly practices that redefine
                      landscaping.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <CheckCircle2 className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span>
                      <span className="font-semibold text-slate-900 dark:text-slate-50">Proven Leadership</span> and trusted partnerships across the
                      industry.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature image strip */}
          <div className="grid gap-4 md:gap-6 sm:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <div className="relative overflow-hidden">
                <img
                  src={featureOne}
                  alt="High performance sports turf"
                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-40"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/90 backdrop-blur-sm shadow-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
                  High Performance
                </p>
                <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">
                  Surfaces optimized for football, hockey, tennis, rugby &amp; multi‑sport.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <div className="relative overflow-hidden">
                <img
                  src={featureTwo}
                  alt="Eco friendly synthetic turf"
                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-40"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/90 backdrop-blur-sm shadow-lg">
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-green-400">
                  Eco Friendly
                </p>
                <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">
                  Reduced water usage, low maintenance and recyclable materials.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <div className="relative overflow-hidden">
                <img
                  src={featureThree}
                  alt="Urban turf installations"
                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-40"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/90 backdrop-blur-sm shadow-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                  Urban Spaces
                </p>
                <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">
                  Transforming city plazas, rooftops and schools into vibrant green zones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: enquiry card */}
        <aside className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-white to-emerald-50/30 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-8 dark:from-slate-900 dark:to-emerald-900/10 dark:border-emerald-500/20">
          <div className="absolute top-0 right-0 h-48 w-48 translate-x-24 -translate-y-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 dark:bg-emerald-500/20">
              <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.40em] text-emerald-700 dark:text-emerald-400">
                Transforming Urban Spaces
              </p>
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Transform urban spaces with{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
                artificial turf
              </span>{' '}
              solutions
            </h3>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Considering artificial turf for your city, institution, or sports facility? Discover innovative solutions to
              revitalize urban spaces and elevate aesthetics with tailored synthetic turf systems.
            </p>
            
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 dark:bg-emerald-900/20">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
              <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
                Contact us today to bring your vision to life
              </p>
            </div>

            <ContactForm initialSubject="Unified Sports Turf Inquiry" className="mt-6" />

            <div className="mt-5 flex items-start gap-3 rounded-lg border border-slate-200 bg-white/50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Our team will get back to you within <span className="font-semibold text-slate-900 dark:text-slate-50">1–2 business days</span> with tailored proposals for your project.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}