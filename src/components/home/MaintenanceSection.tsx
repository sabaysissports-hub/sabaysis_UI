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
    <section id="maintenance" className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          {/* Left Side: Content */}
          <div className="space-y-8 lg:w-5/12">
            <div className="space-y-5">
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
                className="font-montreal text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl"
              >
                Professional
                <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {' '}Maintenance Services
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl font-gotham text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              >
                We provide end-to-end maintenance solutions for all types of sports surfaces, ensuring longevity, safety, and peak performance of your facilities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap gap-3"
              >
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-montreal font-bold uppercase tracking-[0.14em] text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  Certified Technicians
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-montreal font-bold uppercase tracking-[0.14em] text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  Scheduled Service Cycles
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-montreal font-bold uppercase tracking-[0.14em] text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  Performance Reporting
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link 
                to="/maintenance" 
                className="group inline-flex items-center gap-4 rounded-2xl bg-slate-900 px-8 py-5 font-montreal font-bold text-white shadow-2xl shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-600 active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-500"
              >
                <span>Explore Maintenance Plans</span>
                <div className="flex size-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20 dark:bg-slate-900/10 dark:group-hover:bg-slate-900/20">
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>

              <p className="text-sm font-gotham text-slate-500 dark:text-slate-400">
                Tailored plans for schools, clubs, academies, and commercial facilities.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-7/12">
            {maintenanceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-xs transition-all duration-500 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-emerald-900/50 dark:hover:bg-slate-900"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className={`flex size-14 items-center justify-center rounded-2xl bg-linear-to-br ${feature.color} transition-transform duration-500 group-hover:scale-110`}>
                    <feature.icon className={`size-7 ${feature.iconColor}`} />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-montreal font-bold uppercase tracking-[0.16em] text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="mb-3 font-montreal text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="font-gotham text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-emerald-400/60 to-transparent" />
                <div className="mt-3 text-[11px] font-montreal font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                  Professional Execution
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
