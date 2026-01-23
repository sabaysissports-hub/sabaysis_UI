import { usePageTitle } from '@/hooks/usePageTitle';
import maintenanceImg from '@/assets/maintanance.jpg';
import { Wrench, Shield, ArrowRight, TrendingUp, Award, CheckCircle2, Factory, Zap, Target, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Maintenance Accordion Component
const MaintenanceAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const maintenanceTopics = [
    {
      number: "1",
      title: "How to Maintain Sports Surfaces",
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 font-gotham leading-relaxed">
            It's important to cater your maintenance schedule to the type of pitch you have and the usage it gets per week, so that you can ensure proper care. If you're ever unsure, talk to your pitch supplier or maintenance contractor to ensure you are fulfilling the needs of your surface.
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
            <h4 className="font-montreal font-bold text-emerald-900 mb-2">Key Factors to Consider:</h4>
            <ul className="space-y-2 text-sm text-emerald-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Usage Intensity:</strong> High-traffic pitches need more frequent care</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Climate Conditions:</strong> Weather impacts maintenance frequency</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Surface Type:</strong> Different materials require different approaches</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      number: "2",
      title: "Types of Maintenance",
      content: (
        <div className="space-y-6">
          <p className="text-slate-700 font-gotham">There are 3 types of synthetic pitch maintenance:</p>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <h4 className="font-montreal font-bold text-blue-900 text-lg">Regular Maintenance</h4>
              </div>
              <p className="text-sm text-blue-800 mb-3">Typically carried out in-house</p>
              <ul className="space-y-2 text-sm text-blue-900">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-blue-600" />
                  Weekly housekeeping (litter picking, debris removal)
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-blue-600" />
                  Checking condition of equipment
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-blue-600" />
                  Brushing the surface
                </li>
              </ul>
              <p className="text-xs text-blue-700 mt-3 italic">💡 As a guide: 40 hours of pitch use = weekly check</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-2xl border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">2</div>
                <h4 className="font-montreal font-bold text-purple-900 text-lg">Specialist Maintenance</h4>
              </div>
              <p className="text-sm text-purple-800 mb-3">Often carried out by specialist contractors</p>
              <ul className="space-y-2 text-sm text-purple-900">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-purple-600" />
                  Decompacting the infill
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-purple-600" />
                  Topping up infill across the pitch
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-purple-600" />
                  Deep cleaning to remove debris and dirt
                </li>
              </ul>
              <p className="text-xs text-purple-700 mt-3 italic">🔧 Requires specialized equipment and expertise</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-2xl border border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">3</div>
                <h4 className="font-montreal font-bold text-orange-900 text-lg">Major Maintenance Work</h4>
              </div>
              <p className="text-sm text-orange-800 mb-3">Occasional repairs and upgrades by specialists</p>
              <ul className="space-y-2 text-sm text-orange-900">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-orange-600" />
                  General repairs, seam and joint repairs
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-orange-600" />
                  Full removal/replacement of infill material
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-orange-600" />
                  Cleaning heavily contaminated areas
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-orange-600" />
                  Court recoating (if applicable)
                </li>
              </ul>
              <p className="text-xs text-orange-700 mt-3 italic">⚠️ Required when regular maintenance hasn't been effective</p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "3",
      title: "Why Is Pitch Maintenance Important?",
      content: (
        <div className="space-y-5">
          <p className="text-slate-700 font-gotham leading-relaxed">
            Regular maintenance is essential for keeping your sports surface safe, high-performing, and cost-effective over its entire lifespan.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-emerald-200 p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Shield className="size-6" />
              </div>
              <h4 className="font-montreal font-bold text-slate-900 mb-2">Player Safety</h4>
              <p className="text-sm text-slate-600">Prevents injuries from uneven surfaces, compacted areas, and poor shock absorption.</p>
            </div>

            <div className="bg-white border-2 border-blue-200 p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <TrendingUp className="size-6" />
              </div>
              <h4 className="font-montreal font-bold text-slate-900 mb-2">Performance Quality</h4>
              <p className="text-sm text-slate-600">Ensures consistent ball bounce, traction, and optimal playing conditions.</p>
            </div>

            <div className="bg-white border-2 border-purple-200 p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Award className="size-6" />
              </div>
              <h4 className="font-montreal font-bold text-slate-900 mb-2">Cost Efficiency</h4>
              <p className="text-sm text-slate-600">Prevents expensive major repairs and extends the surface's usable life.</p>
            </div>

            <div className="bg-white border-2 border-orange-200 p-5 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="size-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Zap className="size-6" />
              </div>
              <h4 className="font-montreal font-bold text-slate-900 mb-2">Aesthetic Appeal</h4>
              <p className="text-sm text-slate-600">Maintains a professional, inviting appearance for players and spectators.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "4",
      title: "How to Improve Pitch Lifespan",
      content: (
        <div className="space-y-5">
          <p className="text-slate-700 font-gotham leading-relaxed">
            With proper care, a synthetic sports surface can last 10-15 years or more. Here's how to maximize your investment:
          </p>
          
          <div className="space-y-3">
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <div className="size-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">1</div>
              <div>
                <h4 className="font-montreal font-bold text-slate-900 mb-1">Follow a Consistent Schedule</h4>
                <p className="text-sm text-slate-600">Implement regular maintenance based on usage levels—consistency prevents premature wear.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <div className="size-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">2</div>
              <div>
                <h4 className="font-montreal font-bold text-slate-900 mb-1">Professional Annual Inspections</h4>
                <p className="text-sm text-slate-600">Expert assessments identify issues early before they become expensive problems.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <div className="size-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">3</div>
              <div>
                <h4 className="font-montreal font-bold text-slate-900 mb-1">Prompt Debris Removal</h4>
                <p className="text-sm text-slate-600">Clear leaves, dirt, and contaminants quickly to prevent surface degradation and drainage issues.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
              <div className="size-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">4</div>
              <div>
                <h4 className="font-montreal font-bold text-slate-900 mb-1">Infill Level Management</h4>
                <p className="text-sm text-slate-600">Regularly check and top up infill to maintain cushioning and surface stability.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-5 rounded-2xl">
            <p className="font-montreal font-bold text-lg mb-2">💰 Investment Protection</p>
            <p className="text-sm opacity-90">Proper maintenance can add 5-7 years to your surface life, saving hundreds of thousands in replacement costs.</p>
          </div>
        </div>
      )
    },
    {
      number: "5",
      title: "How to Improve Sports Pitch Safety",
      content: (
        <div className="space-y-5">
          <p className="text-slate-700 font-gotham leading-relaxed">
            Safety is paramount. Here's how proper maintenance directly protects athletes:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-xl">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-montreal font-bold text-red-900 mb-2">Shock Absorption (G-Max)</h4>
                  <p className="text-sm text-red-800 mb-2">Regular decompaction maintains optimal hardness levels, reducing concussion and impact injury risk.</p>
                  <p className="text-xs text-red-700 italic">⚠️ Compacted surfaces can increase G-Max ratings by 30-50%, dramatically raising injury risk.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-5 rounded-r-xl">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-montreal font-bold text-orange-900 mb-2">Surface Consistency</h4>
                  <p className="text-sm text-orange-800">Even infill distribution prevents ankle and knee injuries from uneven surfaces or divots.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-5 rounded-r-xl">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-yellow-600 text-white flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-montreal font-bold text-yellow-900 mb-2">Traction Control</h4>
                  <p className="text-sm text-yellow-800">Proper brushing and cleaning maintain consistent grip, preventing slips and falls.</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-5 rounded-r-xl">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0 font-bold">4</div>
                <div>
                  <h4 className="font-montreal font-bold text-green-900 mb-2">Hazard Identification</h4>
                  <p className="text-sm text-green-800">Regular inspections catch loose seams, exposed edges, and foreign objects before they cause injuries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "6",
      title: "Sports Pitch Testing & Performance",
      content: (
        <div className="space-y-5">
          <p className="text-slate-700 font-gotham leading-relaxed">
            Professional testing ensures your surface meets international standards and performs at its peak:
          </p>
          
          <div className="bg-slate-900 text-white p-6 rounded-2xl">
            <h4 className="font-montreal font-bold text-emerald-400 mb-5 text-xl flex items-center gap-2">
              <Award className="size-6" />
              International Compliance Standards
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <h5 className="font-montreal font-bold text-white mb-3">FIFA Quality Tests</h5>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Ball bounce and roll behavior
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Shock absorption (G-Max rating)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Vertical deformation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Rotational resistance
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <h5 className="font-montreal font-bold text-white mb-3">IAAF Track Standards</h5>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Force reduction testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Vertical deformation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Friction coefficient
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    Tensile strength analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 p-5 rounded-2xl">
            <p className="font-montreal font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">💡</span> Pro Tip
            </p>
            <p className="text-sm text-emerald-800">
              Schedule professional performance testing annually to maintain certification and ensure optimal playing conditions. Our maintenance protocols keep your facility compliant with FIFA, FIBA, and IAAF standards.
            </p>
          </div>
        </div>
      )
    }
  ];

  const toggleTopic = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      {maintenanceTopics.map((topic, index) => (
        <div 
          key={index}
          className="rounded-2xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <button
            onClick={() => toggleTopic(index)}
            className="w-full flex items-center justify-between p-6 text-left group hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-montreal font-bold text-lg shadow-lg">
                {topic.number}
              </div>
              <h3 className="text-lg md:text-xl font-montreal font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                {topic.title}
              </h3>
            </div>
            <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              <ChevronDown className="size-7 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
          </button>
          
          <div 
            className={`grid transition-all duration-500 ease-in-out ${
              openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 border-t border-slate-100">
                <div className="pt-6">
                  {topic.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export function Maintenance() {
  usePageTitle('Maintenance');
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero Section */}
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
        {/* Industry Leader Section - Split Layout */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="relative group">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={maintenanceImg} 
                    alt="Sports Surface Excellence" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 size-32 bg-emerald-500/20 rounded-3xl blur-2xl -z-10" />
                <div className="absolute -top-6 -left-6 size-32 bg-teal-500/20 rounded-3xl blur-2xl -z-10" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-montreal font-bold text-emerald-600">500+</div>
                      <div className="text-xs text-slate-600 font-gotham">Projects</div>
                    </div>
                    <div className="border-x border-slate-200">
                      <div className="text-2xl font-montreal font-bold text-emerald-600">15+</div>
                      <div className="text-xs text-slate-600 font-gotham">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-montreal font-bold text-emerald-600">50+</div>
                      <div className="text-xs text-slate-600 font-gotham">Countries</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest">
                  <Award className="size-4" />
                  Industry Leader
                </div>

                <h2 className="text-4xl md:text-5xl font-montreal font-bold text-slate-900 leading-tight">
                  A Global Leader in <span className="text-emerald-600">Sports Surfaces</span>
                </h2>

                <p className="text-lg text-slate-600 font-gotham leading-relaxed">
                  Sabaysis is a global leader in designing, manufacturing, installing and maintaining world-class sports surfaces from elite stadiums to schools and universities. We help clubs and organisations choose the right surface for usage, performance, safety and long-term value.
                </p>

                {/* Key Features */}
                <div className="space-y-3 pt-4">
                  {[
                    { icon: CheckCircle2, text: 'FIFA & IAAF Certified Installations' },
                    { icon: CheckCircle2, text: 'Custom Solutions for Every Sport' },
                    { icon: CheckCircle2, text: 'End-to-End Project Management' },
                    { icon: CheckCircle2, text: 'Lifetime Maintenance Support' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <item.icon className="size-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-gotham">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-8 py-4 font-montreal font-bold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95"
                  >
                    Speak to our team <ArrowRight className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GMA Partnership Section */}
        <section className="py-12 bg-emerald-950 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
             <img src={maintenanceImg} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <div className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 inline-block text-xs font-bold tracking-widest uppercase">
                    Industry Collaboration
                  </div>
                  <h3 className="text-3xl md:text-4xl font-montreal font-bold">
                    Expert Pitch Maintenance Advice
                  </h3>
                  <p className="text-emerald-50/80 text-lg leading-relaxed font-gotham">
                    We partnered with the GMA (Grounds Management Association) to collaborate on some essential tips for staying on top of your pitch maintenance, and the importance of doing so.
                  </p>
                  <p className="text-emerald-50/60 font-gotham italic">
                    If you want to watch our webinar on this featuring industry experts, you can do so on our YouTube channel. We've also summed it up in a handy guide below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Maintenance */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 mb-4 uppercase">
                 Types of Maintenance
               </h2>
               <p className="text-slate-600 font-gotham max-w-3xl mx-auto text-lg">
                 There are 3 types of synthetic pitch maintenance. Many sports clubs and facilities undertake a mixed approach when it comes to maintenance.
               </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Regular and Routine Activities',
                  desc: 'This includes weekly general housekeeping such as litter picking, removing debris, checking condition of equipment, and brushing the surfaces.',
                  features: ['Litter Picking', 'Debris Removal', 'Equipment Checks', 'Surface Brushing'],
                  icon: Zap,
                  note: 'Typically carried out in-house. As a guide, 40 hours of pitch use would warrant a weekly check.'
                },
                {
                  title: 'Specialist Maintenance',
                  desc: 'This is more periodic such as specialised treatments, decompacting the infill and topping up across the pitch.',
                  features: ['Decompacting Infill', 'Infill Top-up', 'Deep Cleaning', 'Debris Removal'],
                  icon: Factory,
                  note: 'Often carried out regularly by a specialist contractor with correct equipment and knowledge.'
                },
                {
                  title: 'Major Maintenance Work',
                  desc: 'Required if regular maintenance hasn\'t been done effectively or if your surface is near the end of its life.',
                  features: ['General Repairs', 'Seam & Joint Repairs', 'Infill Replacement', 'Court Recoating'],
                  icon: Target,
                  note: 'The more your surface is used, the more likely major issues may arise if regular maintenance isn\'t followed.'
                }
              ].map((type, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <type.icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-montreal font-bold text-slate-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 mb-6 font-gotham text-sm leading-relaxed">
                    {type.desc}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                        <CheckCircle2 className="size-4 text-emerald-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 font-gotham italic">{type.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Maintenance Is Critical */}
        <section className="bg-slate-900 py-24 text-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Performance & Safety
                </div>
                <h2 className="text-4xl md:text-6xl font-montreal font-bold leading-[1.1] uppercase">
                  Why Pitch Maintenance <br /><span className="text-emerald-400">Is Important?</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed font-gotham">
                  Regular maintenance ensures your sports surface remains safe, performs optimally, and lasts longer. Neglected surfaces can lead to increased injury risk, poor playing conditions, and costly premature replacement.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                    <h4 className="font-montreal font-bold text-emerald-400 mb-2 uppercase text-sm tracking-widest">Improve Pitch Lifespan</h4>
                    <p className="text-sm text-slate-400 font-gotham">Proper maintenance can extend your surface life by 5-7 years, protecting your investment and delaying costly replacement.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                    <h4 className="font-montreal font-bold text-emerald-400 mb-2 uppercase text-sm tracking-widest">Improve Sports Pitch Safety</h4>
                    <p className="text-sm text-slate-400 font-gotham">Maintains optimal shock absorption and consistent traction, preventing ligament and impact-related injuries.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                  <img src={maintenanceImg} className="w-full h-full object-cover" alt="Pitch Testing" />
                </div>
                <div className="absolute -bottom-10 -left-10 p-10 rounded-[2.5rem] bg-emerald-600 text-white shadow-2xl max-w-xs border-8 border-slate-900">
                  <Shield className="size-12 mb-4" />
                  <p className="font-montreal font-bold text-xl mb-1 text-white uppercase">Testing & Performance</p>
                  <p className="text-white/80 text-sm font-gotham leading-relaxed">Our maintenance protocols ensure your facility stays compliant with FIFA, FIBA, and IAAF standards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Guide Accordion - Moved to Bottom */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 mb-12 text-center uppercase">
              Comprehensive Maintenance Guide
            </h2>
            
            <MaintenanceAccordion />
          </div>
        </section>
      </main>  
    </div>
  );
}
