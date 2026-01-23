import { useState } from 'react';
import { Sparkles, CheckCircle2, MapPin, Maximize2, Shield, Plus, Minus, XCircle, Check } from 'lucide-react';
import type { ServiceTemplateData } from '@/types/service';

interface ServiceTemplateProps {
  data: ServiceTemplateData;
}

export function ServiceTemplate({ data }: ServiceTemplateProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

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
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/10">
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
                <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/20">
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
      {data.features && data.features.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50/50 dark:bg-slate-900/20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {data.features.map((feature, index) => (
                <div 
                  key={index}
                  className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 text-center flex flex-col items-center"
                >
                  {feature.image && (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-100 dark:border-slate-800">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  )}
                  <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-8 group-hover:w-24 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                  <h3 className="text-2xl font-montreal font-bold text-slate-900 dark:text-white mb-4 italic">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-[280px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.timeline && (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-montreal font-bold text-slate-900 dark:text-white mb-6">
                {data.timeline.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
                {data.timeline.description}
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
              
              <div className="space-y-12 lg:space-y-32">
                {data.timeline.steps.map((step, index) => (
                  <div key={index} className="relative group">
                    <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-24 ${
                      index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}>
                      {/* Image Card */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                             <span className="text-white font-montreal font-bold text-xl">{step.title}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`w-full lg:w-1/2 space-y-4 ${
                        index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                      }`}>
                         <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-950 z-20 ${
                           index % 2 === 0 ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'
                         }`} />
                         
                         <span className="text-emerald-500 font-montreal font-bold text-6xl opacity-20 block">
                           0{index + 1}
                         </span>
                         <h3 className="text-2xl md:text-3xl font-montreal font-bold text-slate-900 dark:text-white">
                           {step.title}
                         </h3>
                         <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg lg:ml-0 lg:mr-0 inline-block">
                           {step.description}
                         </p>
                      </div>
                    </div>
                  </div>
                ))}
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

                    {model.pricingTable && model.pricingTable.length > 0 && (
                      <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                        {model.pricingTable.map((price, i) => (
                          <div key={i}>
                            <div className="grid grid-cols-2 gap-4 py-3">
                              <div className="space-y-1">
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                  Pool Size
                                </span>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">
                                  {price.label}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                  Approximate Cost
                                </span>
                                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                  {price.value}
                                </p>
                              </div>
                            </div>
                            {i < model.pricingTable!.length - 1 && (
                              <div className="h-px bg-slate-100 dark:bg-slate-700" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {model.footerText && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed italic">
                        {model.footerText}
                      </p>
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
                    <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 relative">
                      <img 
                        src={model.image} 
                        alt={model.imageAlt}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-4 rounded-bl-2xl border-l border-b border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm font-montreal font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                          {model.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.accordion && (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              {data.accordion.subtitle && (
                <span className="text-emerald-500 font-montreal font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                  {data.accordion.subtitle}
                </span>
              )}
              <h2 className="text-3xl md:text-5xl font-montreal font-bold text-slate-900 dark:text-white">
                {data.accordion.title}
              </h2>
            </div>

            <div className="max-w-7xl mx-auto space-y-4">
              {data.accordion.items.map((item, index) => (
                <div 
                  key={index}
                  className="rounded-2xl border-2 border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm"
                >
                  <button 
                    onClick={() => setOpenItem(openItem === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left"
                  >
                    <span className="text-lg font-montreal font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </span>
                    <div className="flex-none p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                      {openItem === index ? (
                        <Minus className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Plus className="h-5 w-5 text-slate-500" />
                      )}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === index ? 'max-h-[2000px] border-t border-slate-100 dark:border-slate-800' : 'max-h-0'
                  }`}>
                    <div className="p-6 space-y-6">
                      <div className="grid gap-6">
                        {item.images && item.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-64 flex-none aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                              <img 
                                src={img} 
                                alt={`${item.title} image ${imgIdx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {imgIdx === 0 && (
                              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        ))}
                        {(!item.images || item.images.length === 0) && (
                          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.whyChooseUs && (
        <section className="relative py-20 overflow-hidden">
          {data.whyChooseUs.image && (
            <div className="absolute inset-0 z-0">
               <img src={data.whyChooseUs.image} className="w-full h-full object-cover opacity-20" alt="" />
               <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900/40 to-slate-900 shadow-inner" />
            </div>
          )}
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-7/12 space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-montreal font-bold text-xs uppercase tracking-widest border border-emerald-500/20">
                    Why Us
                  </span>
                  <h2 className="text-4xl md:text-5xl font-montreal font-bold text-white uppercase leading-tight">
                    {data.whyChooseUs.title}
                  </h2>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                  {data.whyChooseUs.description}
                </p>
              </div>
              <div className="w-full lg:w-5/12 grid grid-cols-2 gap-6">
                {data.whyChooseUs.features.map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center group">
                    {feature.icon && (
                      <img src={feature.icon} className="size-16 mb-4 group-hover:scale-110 transition-transform duration-300" alt={feature.title} />
                    )}
                    <p className="text-white text-sm font-semibold leading-tight capitalize">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.subBase && (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              {data.subBase.subtitle && (
                <span className="text-emerald-500 font-montreal font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                  {data.subBase.subtitle}
                </span>
              )}
              <h2 className="text-3xl md:text-5xl font-montreal font-bold text-slate-900 dark:text-white uppercase">
                {data.subBase.title}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {data.subBase.items.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col">
                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                       <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex-none shadow-lg">
                          <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-3xl font-montreal font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            {item.description}
                          </p>
                       </div>
                    </div>
                    <div className="h-px bg-slate-100 dark:bg-slate-800 mb-10" />
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase text-xs tracking-widest">
                          <CheckCircle2 className="size-4" /> Advantages
                        </div>
                        <ul className="space-y-3">
                          {item.pros.map((pro, pidx) => (
                            <li key={pidx} className="flex items-start gap-3 group">
                              <Check className="size-5 text-emerald-500 flex-none mt-1 group-hover:scale-110 transition-transform" />
                              <span className="text-slate-600 dark:text-slate-400 text-sm leading-snug">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-rose-500 font-bold uppercase text-xs tracking-widest">
                          <XCircle className="size-4" /> Disadvantages
                        </div>
                        <ul className="space-y-3">
                          {item.cons.map((con, cidx) => (
                            <li key={cidx} className="flex items-start gap-3 group">
                              <XCircle className="size-5 text-rose-500 flex-none mt-1 group-hover:scale-110 transition-transform" />
                              <span className="text-slate-600 dark:text-slate-400 text-sm leading-snug">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

            <div className="max-w-4xl mx-auto space-y-8">
              {data.technicalData.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg p-4">
                  <img 
                    src={data.technicalData.image} 
                    alt={data.technicalData.imageAlt || 'Technical Diagram'}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )}
              
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
