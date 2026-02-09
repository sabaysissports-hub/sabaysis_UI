import { motion } from 'framer-motion';
import { Settings, Sparkles, Database, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const maintenanceFeatures = [
  {
    title: 'Routine Care',
    description: 'Scheduled inspections and preventive adjustments to maintain surface integrity.',
    icon: Settings,
    color: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Deep Cleaning',
    description: 'Specialized chemical and mechanical cleaning to remove organic growth and debris.',
    icon: Sparkles,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-500',
  },
  {
    title: 'Infill Top-up',
    description: 'Precision infill replenishment to ensure optimal cushioning and ball bounce.',
    icon: Database,
    color: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-500',
  },
  {
    title: 'Condition Testing',
    description: 'Technical performance assessment including grip, shock absorption, and drainage.',
    icon: ClipboardCheck,
    color: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-500',
  },
];

export function MaintenanceSection() {
  return (
    <section id="maintenance" className="relative py-24 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-5/12 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50"
              >
                <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-700 dark:text-emerald-400">
                  Reliability Guaranteed
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-montreal text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight"
              >
                Professional <br />
                <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Maintenance
                </span> Services
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-gotham text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
              >
                We provide end-to-end maintenance solutions for all types of sports surfaces, ensuring longevity, safety, and peak performance of your facilities.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/maintenance" 
                className="group inline-flex items-center gap-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 font-montreal font-bold transition-all duration-300 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-emerald-500/20"
              >
                <span>Explore Maintenance Plans</span>
                <div className="size-8 rounded-full bg-white/10 dark:bg-slate-900/10 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-slate-900/20 transition-colors">
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {maintenanceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-4xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/5"
              >
                <div className={`size-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={`size-7 ${feature.iconColor}`} />
                </div>
                
                <h3 className="font-montreal text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="font-gotham text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 italic opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 overflow-hidden">
                  {feature.description}
                </p>
                
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest">
                  <span>Learn More</span>
                  <div className="h-px flex-1 bg-emerald-500/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
