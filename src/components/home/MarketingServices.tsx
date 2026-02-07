"use client"

import { Rocket, Share2, Palette, Calendar, Handshake, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import marketingBgImg from '@/assets/HomeImages/Marketing.jpg';

const marketingServices = [
  {
    title: "Brand Launch & Pre-Launch Strategy",
    icon: <Rocket className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    description: "Start your brand journey with professional strategy and insights.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
  },
  {
    title: "Social Media Setup & Optimization",
    icon: <Share2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    description: "Launch your presence across all major platforms with a professional look.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
  },
  {
    title: "Content & Creatives",
    icon: <Palette className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    description: "Engagement-focused content that captures your audience's attention with reels, carousels and static posts.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
  },
  {
    title: "Social Media Management",
    icon: <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    description: "Full-service management including monthly content calendars and community tracking.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
  },
  {
    title: "Influencer & Collaboration Strategy",
    icon: <Handshake className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    description: "Leapfrog your growth through strategic partnerships and visibility-focused collaborations.",
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]"
  },
  {
    title: "Paid Promotions (Optional)",
    icon: <Megaphone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    description: "Scale your reach quickly with data-driven advertising campaigns and boosted posts.",
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]"
  }
];

export function MarketingServices() {
  return (
    <section 
      className="relative w-full h-fit lg:h-screen min-h-screen overflow-hidden py-12 lg:py-0 flex flex-col justify-center"
      style={{
        backgroundImage: `url(${marketingBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-transparent z-0" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10 z-0" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10 py-8">
        <div className="text-center mb-10 lg:mb-12 space-y-3">
          <h2 className="font-montreal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            <span className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent italic">
              Marketing & Brand Launch
            </span>
          </h2>
          <p className="font-gotham text-base md:text-lg text-white dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We help you start strong and grow smart. From pre-launch buzz to post-launch growth, we handle everything end-to-end.
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2 xl:max-h-[36rem]">
          {marketingServices.map((service, index) => (
            <GridItem
              key={index}
              area={service.area}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  index: number;
}

const GridItem = ({ area, icon, title, description, index }: GridItemProps) => {
  return (
    <motion.li 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`min-h-56 list-none ${area}`}
    >
      <div className="relative h-full rounded-2xl border border-emerald-500/30 dark:border-emerald-500/20 p-2 md:rounded-3xl md:p-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm group overflow-hidden transition-colors hover:border-emerald-500/50">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-900/20 p-3 transition-colors group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-montreal text-xl md:text-2xl font-bold leading-tight text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {title}
              </h3>
              <p className="font-gotham text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
