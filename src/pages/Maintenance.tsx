import { usePageTitle } from '@/hooks/usePageTitle';
import maintenanceImg from '@/assets/maintanance.jpg';
import { Wrench, Shield, ArrowRight, TrendingUp, Award} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Maintenance() {
  usePageTitle('Maintenance');
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
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

      <main className="w-full">
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <img 
                  src={maintenanceImg} 
                  alt="Turf Maintenance" 
                  loading="lazy"
                  className="w-full h-auto rounded-2xl border-4 border-emerald-600 p-1 shadow-lg object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-montreal font-bold mb-6 text-slate-900">
                  Our Maintenance Service
                </h2>
                <div className="space-y-4 font-gotham text-slate-700 leading-relaxed">
                  <p>
                    We offer turf that is of lesser maintenance at an affordable budget. Even if you just want the maintenance service, we offer world-class and best maintenance services tailored to your specific needs.
                  </p>
                  <p>
                    Every field and its quality is different and varies according to the place and climatic condition. Our goal is to meet and reach all the exacting demands of our esteemed clients. Our team assures high-quality maintenance with the latest technology.
                  </p>
                  <p className="font-semibold text-slate-900 pt-2">
                    Sports field maintenance depends on these factors:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-800">
                    <li>What type of activity the ground is serving (such as football, rugby, hockey, and tennis)</li>
                    <li>The location where the ground is (whether it's an open area or not, indoor or outdoor)</li>
                    <li>What is the frequency of the field getting used (how many hours per week)</li>
                    <li>Quality of the surface (e.g., installation quality and drainage system)</li>
                  </ul>
                </div>
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 rounded-full bg-emerald-600 text-white px-8 py-3 font-montreal font-semibold mt-8 hover:bg-emerald-700 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <img 
                  src={maintenanceImg} 
                  alt="Professional Maintenance" 
                  loading="lazy"
                  className="w-full h-auto rounded-2xl border-4 border-teal-600 p-1 shadow-lg object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-montreal font-bold mb-6 text-slate-900">
                  Why Choose Our Maintenance?
                </h2>
                <div className="space-y-4 font-gotham text-slate-700 leading-relaxed">
                  <p>
                    With years of expertise in sports infrastructure maintenance, we understand the unique demands of every facility type. From artificial turfs to swimming pools, our specialized teams deliver consistent, reliable care.
                  </p>
                  <p>
                    Our maintenance programs are designed to extend the life of your investment, enhance safety, and reduce long-term costs. We use state-of-the-art equipment and proven methodologies to keep your facilities in peak condition year-round.
                  </p>
                  <p className="font-semibold text-slate-900 pt-2">
                    Our comprehensive approach includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-800">
                    <li>Regular inspections and preventive maintenance</li>
                    <li>Deep cleaning and surface conditioning</li>
                    <li>Damage assessment and quick repairs</li>
                    <li>Drainage system and equipment checks</li>
                  </ul>
                </div>
                <Link
                  to="/contact-us"
                  className="group inline-flex items-center gap-3 rounded-full bg-teal-600 text-white px-8 py-3 font-montreal font-semibold mt-8 hover:bg-teal-700 transition-all duration-300"
                >
                  Get Maintenance Plan
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 md:py-20 ">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-0 overflow-hidden rounded-xl shadow-2xl">
              {[
                {
                  number: '01',
                  title: 'Quality Surface Experience',
                  description: 'We offer quality artificial turf and sports surfaces that look and perform naturally. Using high-quality equipment, machines, and latest technologies for your facility.'
                },
                {
                  number: '02',
                  title: 'Maintenance Warranty',
                  description: 'We offer a comprehensive maintenance warranty on every project for our esteemed clients. Your investment is protected with our service guarantees.'
                },
                {
                  number: '03',
                  title: 'Quick Problem Resolution',
                  description: 'Solving all your problems without delay. Our in-house team is dedicated to providing end-to-end solutions to all queries of our customers without any delay.'
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex-1 bg-white p-8 md:p-10 ${index < 2 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl md:text-4xl font-montreal font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-lg shrink-0 border-2 border-emerald-600">
                      {feature.number}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-montreal font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-700 font-gotham leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <img 
                  src={maintenanceImg} 
                  alt="Turf Installation Process" 
                  loading="lazy"
                  className="w-full h-auto rounded-2xl border-4 border-emerald-600 p-1 shadow-lg object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-montreal font-bold mb-6 text-slate-900">
                  End-to-End Turf Installation for Sports
                  Grounds
                </h2>
                <div className="space-y-4 font-gotham text-slate-700 leading-relaxed">
                  <p>
                    Our methodical approach ensures quality and longevity
                  </p>
                  <p>
                    We assess the terrain, soil conditions, and drainage requirements to prepare a perfectly level base.
                  </p>
                  <p>
                    A proper drainage system is installed with crushed stone and compact layers for water management.
                  </p>
                  <p>
                    Premium turf rolls are precisely positioned with invisible seams for a uniform playing surface.
                  </p>
                  <p>
                    Specialized shock-absorbing layers and performance infill are added for safety and playability.
                  </p>
                  <p>
                    Surface is brushed to stand fibers upright, and sports-specific lines are accurately marked.
                  </p>
                </div>
                <div className="mt-12 text-center max-w-2xl mx-auto">
                  <div className="p-6 rounded-lg">
                    <blockquote>
                      <p className="text-xl m-0 italic font-semibold text-gray-900">“Every field is match-ready,
                        weatherproof, and durable”</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}


