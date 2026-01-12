import { Zap, Target, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import unifiedMain from '@/assets/Unified S/synthetic-lawn-2048px-802551536-2x1-1.webp';
import featureOne from '@/assets/Unified S/Untitled-design-2023-12-23T101940.389.webp';
import featureTwo from '@/assets/Unified S/Untitled-design-2023-12-23T104200.082.webp';
import featureThree from '@/assets/Unified S/Untitled-design-2023-12-23T104210.112.webp';

export function UnifiedSportsTurf() {
  return (
    <section className="relative overflow-visible">

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Minimal */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="font-montreal text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Unified Sports{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Turf Solutions
            </span>
          </h2>
          <p className="font-gotham mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Complete artificial turf systems for all sports
          </p>
        </div>

        {/* Main Hero Image */}
        <div className="mb-10">
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-emerald-500/20">
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img
                src={unifiedMain}
                alt="Professional artificial turf field"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-2xl">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <Target className="h-4 w-4 text-emerald-300" />
                    <span className="font-montreal text-xs font-bold uppercase tracking-[0.2em] text-white">
                      Premium Solutions
                    </span>
                  </div>
                  <h3 className="font-montreal text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-3">
                    Professional Artificial Turf Systems
                  </h3>
                  <p className="font-gotham text-lg text-white/90 mb-4">
                    High-performance turf for football, hockey, tennis, rugby & multi-sport facilities
                  </p>
                  <Link
                    to="/products"
                    className="group/btn inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white hover:scale-105"
                  >
                    <span className="font-montreal">Explore Solutions</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Visual Focused */}
        <div className="grid gap-5 md:grid-cols-3 mb-10 pb-4">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src={featureOne}
                alt="High performance sports turf"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-montreal text-lg font-bold text-slate-900 mb-1">High Performance</h4>
              <p className="font-gotham text-sm text-slate-600">Optimized for all sports</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src={featureTwo}
                alt="Eco friendly synthetic turf"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-montreal text-lg font-bold text-slate-900 mb-1">Eco Friendly</h4>
              <p className="font-gotham text-sm text-slate-600">Sustainable & recyclable</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src={featureThree}
                alt="Urban turf installations"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-montreal text-lg font-bold text-slate-900 mb-1">Urban Spaces</h4>
              <p className="font-gotham text-sm text-slate-600">Transform city landscapes</p>
            </div>
          </div>
        </div>

        {/* Key Features & Why Choose Us */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto pb-4">
          {/* Key Features */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl" />
            <h3 className="font-montreal text-2xl font-bold text-slate-900 mb-6 relative z-10">
              Key Features
            </h3>
            <div className="space-y-4 relative z-10">
              {[
                'Premium Materials',
                'Durability Assurance',
                'Advanced Technology',
                'Quality Control',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-montreal text-base font-bold text-slate-900">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-teal-500/5 blur-2xl" />
            <h3 className="font-montreal text-2xl font-bold text-slate-900 mb-6 relative z-10">
              Why Choose Us
            </h3>
            <div className="space-y-4 relative z-10">
              {[
                'Unrivaled Excellence',
                'Cutting-Edge Technology',
                'Tailored Solutions',
                'Proven Leadership',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-md">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-montreal text-base font-bold text-slate-900">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}