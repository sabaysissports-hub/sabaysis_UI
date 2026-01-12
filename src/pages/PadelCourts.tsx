import { usePageTitle } from '@/hooks/usePageTitle';
import { Sparkles, CheckCircle2, MapPin, Maximize2, Shield } from 'lucide-react';
import { 
  padelAbout, 
  padelCourtInfo, 
  padelCourtModels, 
  windPressureValues, 
  windPressureInfo,
  padelFeatures,
  padelHeroImage
} from '@/data/paddleball';

export function PadelCourts() {
  usePageTitle('Padel Courts | Sabaysis');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 -mt-16 lg:-mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={padelHeroImage.image} 
            alt={padelHeroImage.alt}
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-emerald-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.12),transparent_50%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:py-28 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-montreal font-bold uppercase tracking-[0.35em] text-emerald-300">
                Premium Padel Courts
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montreal font-bold text-white mb-6 leading-tight">
              Sabaysis Padel
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                World-Class Courts
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              International Padel Federation compliant courts manufactured in India
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2">
                <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  About Sabaysis Padel
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 dark:text-white">
                Premium Indian Manufacturer
              </h2>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {padelAbout.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {padelFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/10">
                <img 
                  src={padelAbout.image} 
                  alt={padelAbout.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Padel Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/20">
                <img 
                  src={padelCourtInfo.image} 
                  alt={padelCourtInfo.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2">
                <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  What is Padel?
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 dark:text-white">
                Fast-Paced Racket Sport
              </h2>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {padelCourtInfo.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Tennis", "Squash", "Badminton"].map((sport, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-semibold"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Court Models Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 mb-4">
              <Maximize2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Court Models
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montreal font-bold text-slate-900 dark:text-white">
              Choose Your Perfect Court
            </h2>
          </div>

          <div className="space-y-24">
            {padelCourtModels.map((court, index) => (
              <div 
                key={court.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      {court.name}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-montreal font-bold text-slate-900 dark:text-white">
                    {court.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {court.description}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Court Size
                      </p>
                      <p className="text-sm font-montreal font-bold text-slate-900 dark:text-white">
                        {court.courtSize}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Structure
                      </p>
                      <p className="text-sm font-montreal font-bold text-slate-900 dark:text-white">
                        {court.structure}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Glass
                      </p>
                      <p className="text-sm font-montreal font-bold text-slate-900 dark:text-white">
                        {court.glass}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Lighting
                      </p>
                      <p className="text-sm font-montreal font-bold text-slate-900 dark:text-white">
                        {court.lighting}
                      </p>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      Applications
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {court.applications.map((app, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                    <img 
                      src={court.image} 
                      alt={court.imageAlt}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wind Pressure Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 mb-4">
              <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Safety Specifications
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 dark:text-white mb-4">
              {windPressureInfo.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {windPressureInfo.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                        {windPressureInfo.headers.height}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                        {windPressureInfo.headers.windSpeed}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                        {windPressureInfo.headers.absorption}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {windPressureValues.map((data, index) => (
                      <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                          {data.height}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                          {data.windSpeed}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                          {data.absorption}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montreal font-bold text-white mb-6">
              Ready to Build Your Padel Court?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our team for a custom quote and consultation
            </p>
            <a
              href="/contact-us?product=Padel Court"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-montreal font-bold uppercase tracking-wider text-emerald-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              <MapPin className="h-5 w-5" />
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
