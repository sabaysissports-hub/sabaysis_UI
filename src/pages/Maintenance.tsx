import { usePageTitle } from '@/hooks/usePageTitle';
import maintenanceImg from '@/assets/maintanance.jpg';
import { Wrench, Shield, CheckCircle, ArrowRight, Sparkles, TrendingUp, Clock, Award, Droplets, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Maintenance() {
  usePageTitle('Maintenance');
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-slate-900 h-[85vh] min-h-[600px]">
        <div className="absolute inset-0 h-full w-full">
          <img 
            src={maintenanceImg} 
            alt="Maintenance Services"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(52,211,153,0.15),transparent_40%)]" />
        
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-emerald-300 backdrop-blur-md mb-8">
              <Wrench className="h-4 w-4" /> Maintenance Services
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-montreal font-bold leading-[1.1] tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-emerald-50 to-white bg-clip-text text-transparent">
                Keep Your Facilities
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Performance-Ready
              </span>
            </h1>
            
            <p className="text-lg md:text-xl font-gotham leading-relaxed text-slate-100/90 max-w-2xl mb-10">
              Professional maintenance for multisport tracks, running tracks, football turfs, sports courts, landscape turf, and swimming pools—keeping them safe, durable, and ready for every game.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-montreal font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/20 active:scale-100"
              >
                <span>Get Maintenance Plan</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Extended Lifespan', icon: TrendingUp },
                { label: 'Enhanced Safety', icon: Shield },
                { label: 'Cost Savings', icon: Award }
              ].map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3 text-white">
                  <div className="rounded-full bg-emerald-500/20 p-2">
                    <benefit.icon className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
                  </div>
                  <p className="text-xs md:text-sm font-montreal font-semibold">{benefit.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-4 md:px-6 lg:px-8 py-20 md:py-28">
        {/* Intro Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
            <Sparkles className="h-4 w-4" /> Comprehensive Care
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montreal font-bold tracking-tight text-slate-900">
            Built to Last, Maintained to Excel
          </h2>
          <p className="text-lg font-gotham leading-relaxed text-slate-600">
            Maintaining your facilities is crucial for performance, safety, and longevity. Our specialized maintenance programs are tailored for every surface type—from tracks and courts to turfs and pools.
          </p>
        </section>

        {/* Maintenance Services Grid */}
        <section className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 mb-4">
              Our Maintenance Services
            </h3>
            <p className="text-base font-gotham text-slate-600 max-w-2xl mx-auto">
              Professional care for every type of sports infrastructure
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Sports Track Maintenance',
                subtitle: 'Multisport & Running Tracks',
                description: 'Deep cleaning, crack repair, resurfacing, and precision line marking for safe, high-performance surfaces.',
                color: 'from-emerald-500 to-teal-600'
              },
              {
                icon: CheckCircle,
                title: 'Football Turf Maintenance',
                subtitle: 'Durable, Match-Ready Turf',
                description: 'Routine cleaning, grooming, infill levelling, re-turfing, and edge repair for optimal play.',
                color: 'from-teal-500 to-cyan-600'
              },
              {
                icon: Shield,
                title: 'Sports Court Maintenance',
                subtitle: 'Courts That Play Like New',
                description: 'Surface cleaning, crack repairs, anti-skid recoating, and line marking for all court types.',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Landscape Turf Care',
                subtitle: 'Always-Green Outdoor Spaces',
                description: 'Routine cleaning, joint repairs, infill top-ups, and UV damage checks for vibrant landscapes.',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Droplets,
                title: 'Swimming Pool Maintenance',
                subtitle: 'Clean, Safe & Swim-Ready',
                description: 'Pool cleaning, water testing and balancing, filtration checks, and equipment inspection.',
                color: 'from-indigo-500 to-purple-600'
              },
              {
                icon: Wrench,
                title: 'Inspections & Surface Repairs',
                subtitle: 'Preventive Checks & Drainage',
                description: 'Annual facility inspections, drainage system checks, and surface repairs to avoid failures.',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-5 shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className={`h-7 w-7 group-hover:text-slate-900 transition-colors duration-300`} />
                  </div>
                  
                  <p className="text-xs font-montreal font-bold uppercase tracking-[0.25em] text-slate-500 mb-2 group-hover:text-white/80 transition-colors duration-300">
                    {service.title}
                  </p>
                  <h3 className="text-xl font-montreal font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {service.subtitle}
                  </h3>
                  <p className="text-sm font-gotham leading-relaxed text-slate-600 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Maintenance Matters */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 p-10 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-400/20 to-transparent rounded-tr-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
              <Shield className="h-4 w-4" /> Why It Matters
            </div>
            
            <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900">
              The Benefits of Regular Maintenance
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3 pt-4">
              {[
                {
                  icon: Clock,
                  title: 'Extended Lifespan',
                  description: 'Regular care significantly extends the life of your sports infrastructure'
                },
                {
                  icon: Shield,
                  title: 'Enhanced Safety',
                  description: 'Improves athlete safety and ensures consistent performance standards'
                },
                {
                  icon: Award,
                  title: 'Cost Savings',
                  description: 'Reduces downtime and prevents expensive unexpected repair costs'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-montreal font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-gotham text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(52,211,153,0.12),transparent_40%)]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-md">
              <Sparkles className="h-4 w-4" /> Get Started
            </div>
            
            <h2 className="text-4xl md:text-5xl font-montreal font-bold tracking-tight">
              Need a Maintenance Plan for Your Facility?
            </h2>
            
            <p className="text-lg font-gotham leading-relaxed text-slate-300">
              Share details about your tracks, courts, turfs, or pools and our team will design a tailored maintenance schedule that keeps your facilities in peak condition.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-base font-montreal font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/20 active:scale-100"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 text-base font-montreal font-semibold text-white shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-100"
              >
                <span>View Products</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


