import { Sparkles, CheckCircle2, MapPin, Maximize2, Shield } from 'lucide-react';
import type { ServiceTemplateData } from '@/types/service';

interface ServiceTemplateProps {
  data: ServiceTemplateData;
}

export function ServiceTemplate({ data }: ServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <section className="relative w-full overflow-hidden bg-slate-900 -mt-16 lg:-mt-20">
        <div className="absolute inset-0">
          <img 
            src={data.hero.image} 
            alt={data.hero.title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-l from-slate-950/80 via-slate-950/40 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* CTA Section - 30% */}
            <div className="w-full lg:w-[30%] order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-1000">
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-xl font-montreal font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {data.cta.title}
                </h3>
                <p className="text-slate-200 text-sm mb-8 leading-relaxed">
                  {data.cta.description}
                </p>
                <a 
                  href={data.cta.buttonLink}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-montreal font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  <MapPin className="h-4 w-4" />
                  {data.cta.buttonText}
                </a>
              </div>
            </div>

            {/* Content Section - 70% */}
            <div className="w-full lg:w-[70%] order-1 lg:order-2 text-right animate-in fade-in slide-in-from-right duration-1000">
              {data.hero.badge && (
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs font-montreal font-bold uppercase tracking-[0.3em] text-emerald-300">
                    {data.hero.badge}
                  </span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montreal font-bold text-white mb-6 leading-[1.1]">
                {data.hero.title}
                <span className="block mt-4 bg-linear-to-l from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  {data.hero.subtitle}
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-200 max-w-2xl ml-auto leading-relaxed font-light">
                {data.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2">
                <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  About {data.hero.title}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 dark:text-white">
                {data.about.title}
              </h2>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {data.about.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {data.about.features.slice(0, 4).map((feature, index) => (
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
                  src={data.about.image} 
                  alt={data.about.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.whatIsIt && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/20">
                  <img 
                    src={data.whatIsIt.image} 
                    alt={data.whatIsIt.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    What is it?
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 dark:text-white">
                  {data.whatIsIt.title}
                </h2>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {data.whatIsIt.description}
                  </p>
                </div>

                {data.whatIsIt.relatedSports && data.whatIsIt.relatedSports.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-4">
                    {data.whatIsIt.relatedSports.map((sport, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-semibold"
                      >
                        {sport}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {data.models && data.models.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 mb-4">
                <Maximize2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  {data.modelsTitle || 'Models'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montreal font-bold text-slate-900 dark:text-white">
                {data.modelsDescription || 'Choose Your Perfect Option'}
              </h2>
            </div>

            <div className="space-y-24">
              {data.models.map((model, index) => (
                <div 
                  key={model.id} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                    <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                        {model.name}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-montreal font-bold text-slate-900 dark:text-white">
                      {model.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {model.description}
                    </p>

                    {model.specifications && model.specifications.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                        {model.specifications.map((spec, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                              {spec.label}
                            </p>
                            <p className="text-sm font-montreal font-bold text-slate-900 dark:text-white">
                              {spec.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {model.applications && model.applications.length > 0 && (
                      <div className="pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                          Applications
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {model.applications.map((app, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                      <img 
                        src={model.image} 
                        alt={model.imageAlt}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.technicalData && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 mb-4">
                <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  Technical Specifications
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-montreal font-bold text-slate-900 dark:text-white mb-4">
                {data.technicalData.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {data.technicalData.description}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-linear-to-r from-emerald-600 to-teal-600 text-white">
                      <tr>
                        {Object.values(data.technicalData.headers).map((header, index) => (
                          <th key={index} className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      {data.technicalData.rows.map((row, index) => (
                        <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          {Object.keys(data.technicalData!.headers).map((key, i) => (
                            <td 
                              key={i} 
                              className={`px-6 py-4 text-sm ${
                                i === 0 
                                  ? 'font-semibold text-slate-900 dark:text-white' 
                                  : 'text-slate-600 dark:text-slate-300'
                              }`}
                            >
                              {row[key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
