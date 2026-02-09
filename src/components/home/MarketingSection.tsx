import { motion } from 'framer-motion';
import { Rocket, Share2, Palette, Calendar, Handshake, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const marketingOffers = [
  {
    title: "Brand Launch & Pre-Launch Strategy",
    icon: <Rocket className="h-6 w-6" />,
    points: [
      "Market & audience research",
      "Brand positioning & tone of voice",
      "Launch roadmap & campaign planning"
    ]
  },
  {
    title: "Social Media Setup & Optimization",
    icon: <Share2 className="h-6 w-6" />,
    points: [
      "Instagram, Facebook google business & LinkedIn page setup",
      "Bio, highlights & profile optimisation",
      "Content theme & visual identity planning"
    ]
  },
  {
    title: "Content & Creatives",
    icon: <Palette className="h-6 w-6" />,
    points: [
      "Reels, carousels & static post concepts",
      "Trending reel ideas & hooks",
      "Caption writing & hashtag strategy"
    ]
  },
  {
    title: "Social Media Management",
    icon: <Calendar className="h-6 w-6" />,
    points: [
      "Monthly content calendar",
      "Posting & basic community management",
      "Performance tracking & optimisation"
    ]
  },
  {
    title: "Influencer & Collaboration Strategy",
    icon: <Handshake className="h-6 w-6" />,
    points: [
      "Influencer shortlisting & outreach",
      "Brand collaborations & barter campaigns",
      "Launch & visibility-focused collabs"
    ]
  },
  {
    title: "Paid Promotions (Optional)",
    icon: <Megaphone className="h-6 w-6" />,
    points: [
      "Ad strategy for reach & engagement",
      "Boosted posts & launch ads"
    ]
  }
];

export function MarketingSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-16">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montreal font-bold text-slate-900 dark:text-white leading-tight">
              Marketing & <br />
              <span className="text-emerald-500 italic">Brand Launch Services</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-gotham leading-relaxed max-w-xl">
              We help you start strong and grow smart. From pre-launch buzz to post-launch growth, we handle everything end-to-end.
            </p>
          </div>
          <div className="lg:w-1/2 p-8 rounded-4xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
            <h3 className="text-2xl font-montreal font-bold text-slate-900 dark:text-white mb-4">
              Marketing Services
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
              "From launch to growth, we help brands build visibility, credibility, and engagement through strategic social media, content creation, influencer collaborations, and digital campaigns."
            </p>
            <div className="mt-8">
              <Link 
                to="/services/marketing-brand-launch"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-montreal font-bold uppercase tracking-wider text-sm transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {marketingOffers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                {offer.icon}
              </div>
              <h3 className="text-xl font-montreal font-bold text-slate-900 dark:text-white mb-6 min-h-14 flex items-center">
                {offer.title}
              </h3>
              <ul className="space-y-3">
                {offer.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-gotham">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
