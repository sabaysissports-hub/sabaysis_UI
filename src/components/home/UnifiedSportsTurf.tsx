import { Zap, Target, Leaf, CheckCircle2, ArrowRight, Sparkles, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import unifiedMain from '@/assets/Unified S/synthetic-lawn-2048px-802551536-2x1-1.webp';
import featureOne from '@/assets/Unified S/Untitled-design-2023-12-23T101940.389.webp';
import featureTwo from '@/assets/Unified S/Untitled-design-2023-12-23T104200.082.webp';
import featureThree from '@/assets/Unified S/Untitled-design-2023-12-23T104210.112.webp';

export function UnifiedSportsTurf() {
  return (
    <section className="relative overflow-visible py-4">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Enhanced */}
        <div className="mx-auto max-w-4xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
            <Sparkles className="h-4 w-4" /> Premium Solutions
          </div>
          <h2 className="font-montreal text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Unified Sports{' '}
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Turf Solutions
            </span>
          </h2>
          <p className="font-gotham text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            High-performance artificial turf systems for football, hockey, tennis, rugby, and multi-sport facilities
          </p>
        </div>

        {/* Main Hero Image - Enhanced */}
        <div className="mb-16">
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl border border-slate-200 transition-all duration-500 hover:shadow-emerald-500/30 hover:border-emerald-200">
            <div className="relative h-[400px] md:h-[600px] overflow-hidden bg-slate-100">
              <img
                src={unifiedMain}
                alt="Professional artificial turf field"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                    <Target className="h-4 w-4 text-emerald-300" />
                    <span className="font-montreal text-xs font-bold uppercase tracking-[0.2em] text-white">
                      Premium Artificial Turf
                    </span>
                  </div>
                  <h3 className="font-montreal text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    World-Class Sports Surfaces
                  </h3>
                  <p className="font-gotham text-base md:text-lg text-white/90 mb-8 max-w-2xl">
                    Professional-grade turf engineered for durability, performance, and athlete safety across all sports disciplines
                  </p>
                  <Link
                    to="/products"
                    className="group/btn inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-montreal font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40 active:scale-100"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Enhanced with Icons */}
        <div className="grid gap-6 md:grid-cols-3 mb-16 pb-4">
          {[
            {
              icon: Zap,
              title: 'High Performance',
              description: 'Optimized for elite-level athletic performance',
              image: featureOne,
              gradient: 'from-emerald-500 to-teal-600'
            },
            {
              icon: Leaf,
              title: 'Eco Friendly',
              description: 'Sustainable and fully recyclable materials',
              image: featureTwo,
              gradient: 'from-teal-500 to-cyan-600'
            },
            {
              icon: Target,
              title: 'Urban Spaces',
              description: 'Transform city landscapes and facilities',
              image: featureThree,
              gradient: 'from-cyan-500 to-blue-600'
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-transparent">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 bg-white group-hover:bg-transparent transition-colors duration-300">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 group-hover:text-white transition-colors duration-300">
                    <h4 className="font-montreal text-xl font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="font-gotham text-sm text-slate-600 group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Features & Why Choose Us - Modern Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Key Features */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-full" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2">
                  <CheckCircle2 className="h-4 w-4" /> Key Features
                </div>
                <h3 className="font-montreal text-3xl font-bold text-slate-900">
                  Engineered Excellence
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Premium Materials', desc: 'High-grade synthetic fibers' },
                  { title: 'Durability Assurance', desc: '10+ years of guaranteed performance' },
                  { title: 'Advanced Technology', desc: 'Latest manufacturing techniques' },
                  { title: 'Quality Control', desc: 'Rigorous testing standards' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-montreal text-base font-bold text-slate-900 group-hover/item:text-emerald-600 transition-colors duration-300">
                        {feature.title}
                      </p>
                      <p className="font-gotham text-sm text-slate-600 group-hover/item:text-slate-700 transition-colors duration-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.2em] text-blue-700 mb-2">
                  <Award className="h-4 w-4" /> Why Us
                </div>
                <h3 className="font-montreal text-3xl font-bold text-slate-900">
                  Industry Leadership
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Proven Excellence', desc: '250+ projects delivered' },
                  { title: 'Cutting-Edge Tech', desc: 'Latest innovations in sports surfaces' },
                  { title: 'Tailored Solutions', desc: 'Custom designs for each project' },
                  { title: 'Expert Support', desc: '24/7 maintenance and assistance' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-montreal text-base font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </p>
                      <p className="font-gotham text-sm text-slate-600 group-hover/item:text-slate-700 transition-colors duration-300">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}