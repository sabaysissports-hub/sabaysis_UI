import type { ServiceTemplateData } from '@/types/service';
import trackHero from '@/assets/Hero/hero.jpg';
import trackAbout from '@/assets/Features/unified (1).jpg';

export const runningTracksData: ServiceTemplateData = {
  slug: 'multisport-running-tracks',
  hero: {
    title: 'Sabaysis Athletics',
    subtitle: 'Professional Running Tracks',
    description: 'IAAF-standard synthetic running tracks and multi-sport surfaces for elite performance',
    image: trackHero,
    badge: 'Elite Athletics Infrastructure'
  },
  about: {
    title: 'High-Performance Athletics Tracks',
    description: 'Sabaysis provides comprehensive solutions for athletic track construction, utilizing advanced synthetic materials that deliver optimal energy return and shock absorption. Our tracks are designed to meet International Association of Athletics Federations (IAAF) requirements.',
    image: trackAbout,
    imageAlt: 'Athletic track installation',
    features: [
      'IAAF compliant synthetic surfaces',
      'All-weather durability',
      'Superior shock absorption',
      'Anti-slip texture',
      'Precision mechanical line marking',
      'Environmental friendly materials'
    ]
  },
  models: [
    {
      id: 'track-full-pur',
      name: 'Full PUR System',
      title: 'Professional Sandwich System',
      description: 'The premier choice for stadiums and competition venues, providing professional energy return and durability.',
      image: trackHero,
      imageAlt: 'Full PUR running track',
      specifications: [
        { label: 'System', value: 'Sandwich / Full PUR' },
        { label: 'Standard', value: 'IAAF Certified' },
        { label: 'Base', value: 'Polyurethane and EPDM' },
        { label: 'Usage', value: 'Professional Competition' }
      ],
      applications: ['National Stadiums', 'Universities', 'Sports Authorities']
    },
    {
      id: 'track-spray-coat',
      name: 'Spray Coat System',
      title: 'Economic School & Facility Track',
      description: 'A cost-effective athletic solution that provides professional looks and good performance for training and schools.',
      image: trackAbout,
      imageAlt: 'Spray coat athletic track',
      specifications: [
        { label: 'System', value: 'Spray Coat System' },
        { label: 'Thickness', value: '13mm Finished layer' },
        { label: 'Maintenance', value: 'Very low maintenance' },
        { label: 'Standard', value: 'Safe Play standard' }
      ],
      applications: ['Private Schools', 'Residential Parks', 'Training Academies']
    }
  ],
  technicalData: {
    title: 'Performance Comparison',
    description: 'Compare our track systems to find the perfect match for your facility and budget.',
    headers: {
      feature: 'Performance Feature',
      sandwich: 'Sandwich System',
      spray: 'Spray Coat'
    },
    rows: [
      {
        feature: 'Force Reduction',
        sandwich: '35% - 50%',
        spray: '25% - 35%'
      },
      {
        feature: 'Vertical Deformation',
        sandwich: '0.6 - 1.8mm',
        spray: '0.6 - 2.5mm'
      },
      {
        feature: 'Slip Resistance',
        sandwich: 'Dry: 0.5+ / Wet: 0.5+',
        spray: 'Dry: 0.5+ / Wet: 0.5+'
      },
      {
        feature: 'Estimated Life',
        sandwich: '10 - 15 Years',
        spray: '7 - 10 Years'
      }
    ]
  },
  cta: {
    title: 'Transform Your Athletic Facility',
    description: 'Design a professional track with Sabaysis engineering',
    buttonText: 'Get a Quote',
    buttonLink: '/contact-us?product=Multisport Running Tracks'
  }
};
