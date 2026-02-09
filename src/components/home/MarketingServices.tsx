import React from 'react';
import { ArrowUpRight, Rocket, Share2, Palette, Calendar, Handshake, Megaphone } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import marketingBgImg from '@/assets/HomeImages/Marketing.jpg';

const marketingServices = [
  {
    title: "Brand Launch & Pre-Launch Strategy",
    icon: <Rocket className="h-6 w-6" />,
    description: "Architecting your market debut with audience intelligence and a roadmap for sustainable impact.",
    features: ["Market & audience research", "Brand positioning & tone of voice", "Launch roadmap & campaign planning"],
  },
  {
    title: "Social Media Setup & Optimization",
    icon: <Share2 className="h-6 w-6" />,
    description: "Building a high-performance digital presence across Instagram, Facebook, and professional networks.",
    features: ["IG/FB/LI/Google Setup", "Bio & Profile Optimization", "Content Visual Identity"],
  },
  {
    title: "Content & Creatives",
    icon: <Palette className="h-6 w-6" />,
    description: "Engineering visuals that capture attention, including strategic reels, carousels, and static posts.",
    features: ["Reels & Static Concepts", "Trending Hacks & Hooks", "Caption & Hashtag Strategy"],
  },
  {
    title: "Social Media Management",
    icon: <Calendar className="h-6 w-6" />,
    description: "Reliable day-to-day management of your social ecosystems with performance-driven consistency.",
    features: ["Content Calendars", "Community Management", "Performance Tracking"],
  },
  {
    title: "Influencer & Collaboration Strategy",
    icon: <Handshake className="h-6 w-6" />,
    description: "Leveraging high-authority voices and strategic brand partnerships to accelerate your brand's authority.",
    features: ["Influencer Outreach", "Barter & Brand Collabs", "Visibility-focused Collabs"],
  },
  {
    title: "Paid Promotions (Optional)",
    icon: <Megaphone className="h-6 w-6" />,
    description: "Amplifying your reach through precision-targeted ad strategies and high-engagement boosted content.",
    features: ["Ad Strategy", "Boosted Posts", "Launch ROI Scaling"],
  }
];

export function MarketingServices() {
  return (
    <section 
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${marketingBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-xs"
          >
            <span className="text-xs font-montreal font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">Marketing & Brand Excellence</span>
          </motion.div>
          
          <h2 className="max-w-6xl font-montreal text-3xl md:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.2] py-4">
            Marketing & <span className="inline-block bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent italic px-4 py-2">Brand Launch.</span>
          </h2>
          
          <p className="max-w-2xl font-gotham text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            We help you start strong and grow smart. From pre-launch buzz to post-launch growth, we handle everything end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {marketingServices.map((service, index) => (
            <SpotlightCard
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SpotlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const SpotlightCard = ({ icon, title, description, features, index }: SpotlightCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative h-full bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-px overflow-hidden transition-all duration-500 shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-20 h-full bg-white/80 dark:bg-slate-950/40 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-8">
        <div className="flex justify-between items-start">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-900 dark:text-white transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-xs">
            {icon}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-montreal text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-500">
            {title}
          </h3>
          <p className="font-gotham text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-500 group-hover:text-slate-700 dark:group-hover:text-slate-300">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, fIdx) => (
              <span key={fIdx} className="text-[10px] font-montreal font-bold uppercase tracking-wider text-emerald-500 dark:text-slate-500 px-3 py-1.5 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-lg group-hover:bg-emerald-500/5 group-hover:text-emerald-600 group-hover:border-emerald-500/20 transition-all duration-500">
                {feature}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between group/link">
            <span className="text-[10px] font-montreal font-black uppercase tracking-[0.2em] text-emerald-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors duration-500">
              Technical Pipeline
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
