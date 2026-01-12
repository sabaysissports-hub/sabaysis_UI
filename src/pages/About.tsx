import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import ab1 from '@/assets/About/ab1.jpg';
import { Sparkles, ShieldCheck, Leaf, Users, ArrowRight, Target, Award, TrendingUp, Heart } from 'lucide-react';

export function About() {
  usePageTitle('About');
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-slate-950 text-white h-[90vh] min-h-[600px]">
        <div className="absolute inset-0 h-full w-full">
          <img 
            src={ab1} 
            alt="About SABAYSIS" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.15),transparent_35%)]" />
        
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.3em] text-emerald-300 backdrop-blur-md mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4" /> About Us
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-montreal font-bold leading-[1.1] tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-emerald-50 to-white bg-clip-text text-transparent">
                Redefining Sports
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            
            <p className="text-lg md:text-xl font-gotham leading-relaxed text-slate-100/90 max-w-2xl mb-10">
              Pioneering artificial grass and sports area solutions with cutting-edge technology, unmatched durability, and world-class performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-montreal font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/20 active:scale-100"
              >
                <span>Let's Talk</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-base font-montreal font-semibold text-white shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-100"
              >
                <span>View Products</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {[
                { label: 'Projects Delivered', value: '250+', icon: Award },
                { label: 'Cities Served', value: '35+', icon: TrendingUp },
                { label: 'Client Satisfaction', value: '97%', icon: Heart }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="rounded-full bg-emerald-500/20 p-2">
                      <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-montreal font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs md:text-sm font-gotham uppercase tracking-wider text-emerald-300/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-4 md:px-6 lg:px-8 py-20 md:py-28">
        {/* About Section - Modern Two Column */}
        <section className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700">
              <Sparkles className="h-4 w-4" /> Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montreal font-bold tracking-tight text-slate-900">
              Transforming Spaces, Elevating Performance
            </h2>
            <p className="text-lg font-gotham leading-relaxed text-slate-600">
              SABAYSIS SPORTS & INFRA is at the forefront of sports infrastructure innovation. We don't just install surfaces—we create experiences that inspire athletes, delight communities, and stand the test of time.
            </p>
            <p className="text-base font-gotham leading-relaxed text-slate-600">
              From consultation to construction and beyond, our end-to-end approach ensures every project reflects our commitment to excellence, sustainability, and cutting-edge technology.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: ShieldCheck, title: 'Quality-first', color: 'from-emerald-500 to-teal-600' },
                { icon: Leaf, title: 'Sustainable', color: 'from-teal-500 to-cyan-600' },
                { icon: Users, title: 'People-centric', color: 'from-cyan-500 to-blue-600' }
              ].map((item) => (
                <div key={item.title} className="group text-center">
                  <div className={`mx-auto mb-3 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-4 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                    <item.icon className="h-full w-full" />
                  </div>
                  <p className="text-xs font-montreal font-bold text-slate-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-xl">
              <h3 className="text-sm font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700 mb-6">
                Why Clients Choose Us
              </h3>
              <div className="space-y-4">
                {[
                  'Deep domain expertise in sports infrastructure',
                  'Reliable timelines with professional management',
                  'Surfaces engineered for safety and performance',
                  'Long-term partnership with maintenance support'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-montreal font-bold text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                      {index + 1}
                    </div>
                    <p className="text-sm font-gotham text-slate-700 pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Target className="h-8 w-8 text-emerald-600 mb-3" />
                <p className="text-2xl font-montreal font-bold text-slate-900 mb-1">250+</p>
                <p className="text-xs font-gotham uppercase tracking-wider text-slate-600">Projects</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Award className="h-8 w-8 text-emerald-600 mb-3" />
                <p className="text-2xl font-montreal font-bold text-slate-900 mb-1">35+</p>
                <p className="text-xs font-gotham uppercase tracking-wider text-slate-600">Cities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control - Modern Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700 mb-6">
              <ShieldCheck className="h-4 w-4" /> Quality Control
            </div>
            <h2 className="text-4xl md:text-5xl font-montreal font-bold tracking-tight text-slate-900 mb-6">
              Engineered Quality in Every Fiber
            </h2>
            <p className="text-lg font-gotham leading-relaxed text-slate-600">
              Quality isn't just a promise—it's our process. From raw materials to final installation, every step is measured, inspected, and perfected.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                title: 'Material Selection',
                description: 'Rigorous evaluation for durability, eco-friendliness, UV resistance, and safety.',
                gradient: 'from-emerald-500 to-teal-600'
              },
              {
                number: '02',
                title: 'Precision Manufacturing',
                description: 'State-of-the-art machinery ensuring consistent quality and finishing.',
                gradient: 'from-teal-500 to-cyan-600'
              },
              {
                number: '03',
                title: 'Final Inspections',
                description: 'Comprehensive checks for color, pile height, tuft bind, and finish.',
                gradient: 'from-cyan-500 to-blue-600'
              },
              {
                number: '04',
                title: 'Continuous Improvement',
                description: 'R&D investment and feedback loops for constant refinement.',
                gradient: 'from-blue-500 to-indigo-600'
              }
            ].map((item) => (
              <div key={item.number} className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white font-montreal font-bold text-lg mb-4 shadow-lg group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300`}>
                    {item.number}
                  </div>
                  <h3 className="text-xl font-montreal font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm font-gotham leading-relaxed text-slate-600 group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision - Side by Side Cards */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-6 shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700 mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 mb-4">
                Transform Every Outdoor Space
              </h2>
              <p className="text-base font-gotham leading-relaxed text-slate-700">
                We revolutionize outdoor spaces globally with premium artificial grass and sports solutions that exceed expectations, inspire communities, and create lasting impact.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-6 shadow-lg">
                <Award className="h-8 w-8" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-blue-700 mb-4">
                Our Vision
              </div>
              <h2 className="text-3xl font-montreal font-bold tracking-tight text-slate-900 mb-4">
                Lead with Impact & Trust
              </h2>
              <p className="text-base font-gotham leading-relaxed text-slate-700">
                To be the global leader in sports and landscape infrastructure—recognized for manufacturing excellence, innovation, and creating positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Social Responsibility - Modern Cards */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700 mb-6">
              <Heart className="h-4 w-4" /> Social Responsibility
            </div>
            <h2 className="text-4xl md:text-5xl font-montreal font-bold tracking-tight text-slate-900 mb-6">
              Impact Beyond the Playing Field
            </h2>
            <p className="text-lg font-gotham leading-relaxed text-slate-600">
              We're committed to responsible growth—for the environment, our people, and the communities we serve.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Leaf,
                title: 'Environmental Stewardship',
                subtitle: 'Designing Greener Futures',
                description: 'Eco-friendly materials, energy-efficient manufacturing, and responsible waste management.',
                color: 'emerald'
              },
              {
                icon: Users,
                title: 'Employee Welfare',
                subtitle: 'People at the Centre',
                description: 'Safe, inclusive, and growth-oriented workplace for our greatest asset—our teams.',
                color: 'blue'
              },
              {
                icon: ShieldCheck,
                title: 'Transparency & Ethics',
                subtitle: 'Built on Trust',
                description: 'Operating with integrity, clear communication, and accountability at every level.',
                color: 'purple'
              },
              {
                icon: Heart,
                title: 'Community Engagement',
                subtitle: 'Uplifting Local Communities',
                description: 'Supporting education, health, and sports infrastructure for safe, inspiring spaces.',
                color: 'pink'
              }
            ].map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  item.color === 'emerald' ? 'from-emerald-500 to-teal-600' :
                  item.color === 'blue' ? 'from-blue-500 to-indigo-600' :
                  item.color === 'purple' ? 'from-purple-500 to-pink-600' :
                  'from-pink-500 to-rose-600'
                } opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${
                    item.color === 'emerald' ? 'from-emerald-500 to-teal-600' :
                    item.color === 'blue' ? 'from-blue-500 to-indigo-600' :
                    item.color === 'purple' ? 'from-purple-500 to-pink-600' :
                    'from-pink-500 to-rose-600'
                  } text-white mb-5 shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className={`h-7 w-7 ${item.color === 'emerald' ? 'group-hover:text-emerald-600' :
                      item.color === 'blue' ? 'group-hover:text-blue-600' :
                      item.color === 'purple' ? 'group-hover:text-purple-600' :
                      'group-hover:text-pink-600'} transition-colors duration-300`} />
                  </div>
                  <p className="text-xs font-montreal font-bold uppercase tracking-[0.25em] text-slate-500 mb-2 group-hover:text-white/80 transition-colors duration-300">
                    {item.title}
                  </p>
                  <h3 className="text-xl font-montreal font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {item.subtitle}
                  </h3>
                  <p className="text-sm font-gotham leading-relaxed text-slate-600 group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(52,211,153,0.12),transparent_40%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-md mb-6">
              <Sparkles className="h-4 w-4" /> Ready to Start?
            </div>
            <h2 className="text-4xl md:text-5xl font-montreal font-bold tracking-tight mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-lg font-gotham leading-relaxed text-slate-300 mb-10">
              Whether you're planning a new sports facility or upgrading an existing one, our team is ready to bring your vision to life with excellence and precision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-base font-montreal font-semibold text-slate-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/20 active:scale-100"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 text-base font-montreal font-semibold text-white shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-100"
              >
                <span>Browse Products</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


