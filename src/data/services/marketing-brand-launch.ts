import type { ServiceTemplateData } from '@/types/service';
import marketingHero from '@/assets/HomeImages/Marketing.jpg';
import marketingAbout from '@/assets/NewImages/marketingabout.jpg';
import strategyImg from '@/assets/NewImages/faundation.webp';
import contentImg from '@/assets/NewImages/mediaroadmap.jpg';
import launchImg from '@/assets/NewImages/digital.jpg';
import growthImg from '@/assets/NewImages/marketingabout.jpg';
import PaidImg from '@/assets/NewImages/paid.jpg';
import authorityImg from '@/assets/NewImages/authorized.png';

export const marketingData: ServiceTemplateData = {
  slug: 'marketing-brand-launch',
  hero: {
    title: 'Marketing & Brand Launch Services',
    subtitle: 'Start Strong, Grow Smart',
    description: 'We help you start strong and grow smart. From pre-launch buzz to post-launch growth, we handle everything end-to-end.',
    image: marketingHero,
    badge: 'Marketing Excellence'
  },
  about: {
    title: 'Marketing Services',
    description: "From launch to growth, we help brands build visibility, credibility, and engagement through strategic social media, content creation, influencer collaborations, and digital campaigns.",
    image: marketingAbout,
    imageAlt: 'Marketing and Brand Launch strategy',
    features: [
      'Brand Launch & Pre-Launch Strategy',
      'Social Media Setup & Optimization',
      'Content & Creatives',
      'Social Media Management',
      'Influencer & Collaboration Strategy',
      'Paid Promotions (Optional)'
    ]
  },
  modelsTitle: 'What we offer:',
  modelsDescription: 'End-to-end marketing solutions designed to build and scale your brand.',
  models: [
    {
      id: 'brand-launch',
      name: 'Brand Launch & Pre-Launch Strategy',
      title: 'Market Debut Roadmap',
      description: 'Architecting your market debut with audience intelligence and a roadmap for sustainable impact.',
      image: strategyImg,
      imageAlt: 'Brand Launch Strategy',
      specifications: [
        { label: 'Research', value: 'Market & audience research' },
        { label: 'Positioning', value: 'Brand positioning & tone of voice' },
        { label: 'Planning', value: 'Launch roadmap & campaign planning' }
      ],
      applications: ['Startups', 'Rebranding', 'New Launches']
    },
    {
      id: 'social-setup',
      name: 'Social Media Setup & Optimization',
      title: 'Digital Foundation',
      description: 'Building a high-performance digital presence across Instagram, Facebook, Google Business, and professional networks.',
      image: launchImg,
      imageAlt: 'Social Media Setup',
      specifications: [
        { label: 'Platforms', value: 'Instagram, Facebook, Google Business & LinkedIn page setup' },
        { label: 'Profile', value: 'Bio, highlights & profile optimisation' },
        { label: 'Planning', value: 'Content theme & visual identity planning' }
      ],
      applications: ['Business Entry', 'Social Refresh']
    },
    {
      id: 'content-creatives',
      name: 'Content & Creatives',
      title: 'Creative Engineering',
      description: 'Engineering visuals that capture attention, including strategic reels, carousels, and static posts.',
      image: contentImg,
      imageAlt: 'Content and Creatives',
      specifications: [
        { label: 'Concepts', value: 'Reels, carousels & static post concepts' },
        { label: 'Ideas', value: 'Trending reel ideas & hooks' },
        { label: 'Strategy', value: 'Caption writing & hashtag strategy' }
      ],
      applications: ['D2C Brands', 'Service Brands']
    },
    {
      id: 'social-management',
      name: 'Social Media Management',
      title: 'Growth Management',
      description: 'Reliable day-to-day management of your social ecosystems with performance-driven consistency.',
      image: growthImg,
      imageAlt: 'Social Media Management',
      specifications: [
        { label: 'Calendar', value: 'Monthly content calendar' },
        { label: 'Management', value: 'Posting & basic community management' },
        { label: 'Tracking', value: 'Performance tracking & optimisation' }
      ],
      applications: ['Active Brands', 'Community Engagement']
    },
    {
      id: 'influencer-strategy',
      name: 'Influencer & Collaboration Strategy',
      title: 'Authority Building',
      description: 'Leveraging high-authority voices and strategic brand partnerships to accelerate your brand\'s authority.',
      image: authorityImg,
      imageAlt: 'Influencer Strategy',
      specifications: [
        { label: 'Outreach', value: 'Influencer shortlisting & outreach' },
        { label: 'Campaigns', value: 'Brand collaborations & barter campaigns' },
        { label: 'Visibility', value: 'Launch & visibility-focused collabs' }
      ],
      applications: ['Market Authority', 'Audience Trust']
    },
    {
      id: 'paid-promotions',
      name: 'Paid Promotions (Optional)',
      title: 'Amplified Performance',
      description: 'Amplifying your reach through precision-targeted ad strategies and high-engagement boosted content.',
      image: PaidImg,
      imageAlt: 'Paid Promotions',
      specifications: [
        { label: 'Strategy', value: 'Ad strategy for reach & engagement' },
        { label: 'Ads', value: 'Boosted posts & launch ads' }
      ],
      applications: ['Lead Gen', 'Event Buzz']
    }
  ],
  cta: {
    title: 'Ready to Launch Your Brand?',
    description: 'Book a consultation with our marketing experts to architect your market debut.',
    buttonText: 'Request Strategy Call',
    buttonLink: '/contact-us?product=Marketing Service'
  }
};
