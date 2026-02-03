import { Link } from 'react-router-dom';
import { usePageTitle } from '@/hooks/usePageTitle';
import { Sparkles, Target, Building2, Globe2, Quote, Award, GraduationCap, ArrowRight, ShieldCheck, Heart, Leaf, Users } from 'lucide-react';
import aboutbg from '@/assets/About/aboutbg.jpg';
import directorImg from '@/assets/About/director.jpeg';
import unified1 from '@/assets/Features/unified (1).jpg';
import unified2 from '@/assets/Features/unified (2).jpg';
import unified3 from '@/assets/Features/unified (3).jpg';
import TurfTimeline from '@/components/TurfTimeline';

export function About() {
  usePageTitle('About');
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <section className="relative w-full overflow-hidden bg-slate-900 -mt-16 lg:-mt-20">
        <div className="absolute inset-0">
          <img 
            src={aboutbg} 
            alt="Sabaysis Sports Infrastructure"
            className="h-full w-full object-cover opacity-50 scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-slate-900/30" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 md:py-36 lg:py-48">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 backdrop-blur-md mb-8">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-montreal font-bold uppercase tracking-[0.35em] text-emerald-300">
                Pioneering Sports Infrastructure
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-montreal font-bold text-white mb-8 tracking-tight">
              Our Story. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent italic">
                Your Performance.
              </span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-slate-300 font-gotham leading-relaxed">
              Sabaysis is an Indian manufacturer of premium sports surfaces, 
              delivering world-class turnkey infrastructure solutions across India and internationally.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-12">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Target className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl md:text-4xl font-montreal font-bold text-white">500+</span>
                </div>
                <p className="text-xs font-montreal font-bold uppercase tracking-widest text-emerald-400/80">Projects Completed</p>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Building2 className="h-6 w-6 text-teal-400 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl md:text-4xl font-montreal font-bold text-white">100+</span>
                </div>
                <p className="text-xs font-montreal font-bold uppercase tracking-widest text-teal-400/80">Cities</p>
              </div>
               <div className="text-center group">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Building2 className="h-6 w-6 text-teal-400 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl md:text-4xl font-montreal font-bold text-white">10+</span>
                </div>
                <p className="text-xs font-montreal font-bold uppercase tracking-widest text-teal-400/80">Countries</p>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Globe2 className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl md:text-4xl font-montreal font-bold text-white">FIP</span>
                </div>
                <p className="text-xs font-montreal font-bold uppercase tracking-widest text-cyan-400/80">Global Standards</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent z-10" />
      </section>

      <main className="w-full">
        <section className="relative grid lg:grid-cols-2 bg-gradient-to-b from-slate-100 to-slate-50 overflow-hidden">
          <div className="relative order-2 lg:order-1 flex items-center justify-center p-6 md:p-8 lg:p-12 z-10">
            <img 
              src={directorImg} 
              alt="Mohd Zaid - Founder" 
              loading="lazy"
              className="w-full h-auto max-w-lg lg:max-w-2xl rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <div className="relative flex flex-col justify-center p-6 md:p-12 lg:p-16 xl:p-20 order-1 lg:order-2 bg-white z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-emerald-700 mb-4">
                <Quote className="h-4 w-4" /> Founder's Story
              </div>
              <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 leading-tight mb-4">
                Building with Strategy, <br />
                <span className="text-emerald-600">Driven by Discovery.</span>
              </h2>
              <div className="space-y-4 text-base text-slate-600 font-gotham leading-relaxed">
                <p>
                  I am <span className="font-bold text-slate-900 font-montreal">Mohd Zaid</span>, the Founder of Sabaysis, driven by a vision to build solutions that simplify business challenges and enable sustainable growth. I hold a Master's degree in Business Administration (MBA) from Amity University, where I gained in-depth knowledge of business strategy, marketing, operations, and leadership.
                </p>
                <p>
                  My journey as an entrepreneur stems from a deep curiosity about systems, processes, and innovation. I believe that strong businesses are built at the intersection of strategy, technology, and execution—and Sabaysis was born from this belief.
                </p>
                <p>
                  With a hands-on approach and a problem-solving mindset, I focus on creating value-driven solutions that are practical, scalable, and impactful. I am passionate about continuous learning, adapting to change, and building brands that stand the test of time.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl mt-4">
                  <p className="text-slate-900 font-gotham leading-relaxed text-sm">
                    <span className="font-montreal font-bold text-emerald-700 block mb-1.5">The Vision Behind Sabaysis</span>
                    To become a trusted growth partner for businesses across industries—helping them evolve, adapt, and succeed in an ever-changing market. We aim to build a brand that is known for integrity, innovation, and impact.
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 pt-3">
                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-montreal font-bold text-emerald-600 text-xs uppercase tracking-widest mb-0.5">Education</p>
                      <p className="text-sm font-bold text-slate-900">MBA, Amity University</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-montreal font-bold text-blue-600 text-xs uppercase tracking-widest mb-0.5">Expertise</p>
                      <p className="text-sm font-bold text-slate-900">Strategy & Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 min-h-[600px] bg-slate-50 overflow-hidden">
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 xl:p-32 bg-slate-50">
            <div className="max-w-xl ml-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-blue-700 mb-8">
                <ShieldCheck className="h-4 w-4" /> Our Process
              </div>
              <h2 className="text-4xl md:text-5xl font-montreal font-bold text-slate-900 leading-tight mb-8">
                Engineered for <br />
                <span className="text-blue-600">Performance.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-gotham leading-relaxed">
                <p>
                  SABAYSIS is at the forefront of sports infrastructure innovation. We don't just install surfaces—we create experiences that inspire athletes and delight communities.
                </p>
                <p>
                  From raw materials to final installation, every step is measured, inspected, and perfected. Our end-to-end approach ensures every project reflects our commitment to excellence and cutting-edge technology.
                </p>
                <ul className="grid grid-cols-1 gap-4 pt-4">
                  {[
                    'International FIP Regulations',
                    'Precision Manufacturing Machinery',
                    'Rigorous Material Selection',
                    'WPT Compliance Standards'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-montreal font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16">
            <img 
              src={unified1} 
              alt="Engineering Excellence" 
              loading="lazy"
              className="w-full h-auto max-w-sm lg:max-w-md rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </section>

        <section className="grid lg:grid-cols-2 min-h-[600px] bg-white overflow-hidden">
          <div className="relative flex items-center justify-center p-8 md:p-12 lg:p-16 ">
            <img 
              src={unified2} 
              alt="Our Vision" 
              loading="lazy"
              className="w-full h-auto max-w-sm lg:max-w-md rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 xl:p-32 bg-white">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-teal-700 mb-8">
                <Target className="h-4 w-4" /> Our Purpose
              </div>
              <h2 className="text-4xl md:text-5xl font-montreal font-bold text-slate-900 leading-tight mb-8">
                A Brand Built on <br />
                <span className="text-teal-600">Trust & Impact.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-gotham leading-relaxed">
                <p> 
                  We aim to become a trusted growth partner for businesses across industries—helping them evolve, adapt, and succeed in an ever-changing market.
                </p>
                <div className="grid gap-8 pt-6">
                  <div className="group">
                    <p className="font-montreal font-bold text-slate-900 uppercase tracking-widest text-sm mb-3 group-hover:text-teal-600 transition-colors">Our Mission</p>
                    <p className="text-base border-l-2 border-teal-200 pl-6 italic">
                      "To revolutionize outdoor spaces globally with premium artificial grass and sports solutions that exceed expectations and inspire communities."
                    </p>
                  </div>
                  <div className="group">
                    <p className="font-montreal font-bold text-slate-900 uppercase tracking-widest text-sm mb-3 group-hover:text-teal-600 transition-colors">Our Vision</p>
                    <p className="text-base border-l-2 border-teal-200 pl-6 italic">
                      "To be the global leader in sports and landscape infrastructure—recognized for manufacturing excellence, innovation, and positive change."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-50">
          <TurfTimeline />
        </section>
        <section className="py-24 md:py-32 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={unified3} loading="lazy" className="w-full h-full object-cover grayscale" alt="Background Texture" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-montreal font-bold uppercase tracking-[0.25em] text-white mb-8">
              <Heart className="h-4 w-4 text-pink-400" /> Social Responsibility
            </div>
            <h2 className="text-4xl md:text-5xl font-montreal font-bold mb-10 leading-tight">
              Impact Beyond the Playing Field.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainable materials' },
                { icon: Users, title: 'Welfare', desc: 'People-first culture' },
                { icon: ShieldCheck, title: 'Ethics', desc: 'Operating with integrity' },
                { icon: Globe2, title: 'Local', desc: 'Uplifting communities' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 backdrop-blur-md">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="font-montreal font-bold text-sm uppercase tracking-wider mb-1">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 md:py-40 text-center">
          <div className="absolute inset-0 opacity-60 will-change-transform transform-gpu">
          </div>
          <div className="relative max-w-2xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 mb-8">
              Ready to build something great together?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact-us"
                className="group inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-montreal font-bold hover:bg-emerald-600 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products"
                className="group inline-flex items-center gap-3 bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-full font-montreal font-bold hover:border-slate-900 transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


