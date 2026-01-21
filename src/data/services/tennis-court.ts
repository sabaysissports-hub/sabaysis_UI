import type { ServiceTemplateData } from '@/types/service';
import tennisHero from '@/assets/Hero/hero (4).jpg';
import tennisAbout from '@/assets/Features/unified (1).jpg';
import tennisHard from '@/assets/Features/unified (2).jpg';
import tennisClay from '@/assets/Features/unified (3).jpg';

export const tennisData: ServiceTemplateData = {
  slug: 'tennis-court',
  hero: {
    title: 'Sabaysis Tennis',
    subtitle: 'ITF Rated Performance',
    description: 'Premier tennis court construction featuring world-class surfaces from acrylic hard courts to hybrid clay.',
    image: tennisHero,
    badge: 'ITF Certified Surfaces'
  },
  about: {
    title: 'Professional Tennis Enclosures',
    description: 'Sabaysis designs and builds tennis courts that meet the stringent International Tennis Federation (ITF) requirements. Our expertise includes advanced drainage systems, precision line marking, and surfacing materials sourced from global leaders to ensure long-term durability in the intense climates of Dubai and Europe.',
    image: tennisAbout,
    imageAlt: 'Tennis court construction process',
    features: [
      'ITF Court Pace Classified surfaces',
      'Advanced multi-layer acrylic systems',
      'Anti-corrosive galvanized fencing',
      'Glare-free LED stadium lighting',
      'Precision laser-leveled sub-bases',
      'All-weather surfacing technology'
    ]
  },
  whatIsIt: {
    title: 'Total Court Infrastructure',
    description: 'A premium tennis facility is more than just a surface. It requires a 102ft x 51ft footprint, professional-grade tennis posts, and a minimum 6.4m baseline run-off. We provide turnkey solutions including excavation, drainage, and surfacing.',
    image: tennisHard,
    imageAlt: 'Hard court tennis facility',
    relatedSports: ['Tennis', 'Padel', 'Pickleball']
  },
  models: [
    {
      id: 'tennis-pro-hard',
      name: 'Pro Hard Court',
      title: 'Acrylic Cushion System',
      description: 'The preferred choice for the Australian and US Open, providing consistent pace and excellent traction.',
      image: tennisHard,
      imageAlt: 'Acrylic tennis court',
      specifications: [
        { label: 'Surface', value: '7-9 Layer Acrylic' },
        { label: 'Pace Rating', value: 'ITF Category 3 (Medium)' },
        { label: 'Comfort', value: '3mm Rubberized Cushion' },
        { label: 'Maintenance', value: 'Low maintenance wash-down' }
      ],
      applications: ['Tennis Clubs', 'Private Residences', 'Resorts']
    },
    {
      id: 'tennis-hybrid-clay',
      name: 'Elite Hybrid Clay',
      title: 'Performance Red Clay System',
      description: 'A modern take on traditional clay, offering the same sliding characteristics with significantly less maintenance.',
      image: tennisClay,
      imageAlt: 'Clay tennis court',
      specifications: [
        { label: 'Surface', value: 'EPDM/Ceramic Infill Clay' },
        { label: 'Pace Rating', value: 'ITF Category 1 (Slow)' },
        { label: 'Drainage', value: 'Permeable multi-layer base' },
        { label: 'Playability', value: '95% Standard clay slide' }
      ],
      applications: ['Professional Academies', 'Specialized Clubs', 'Private Estates']
    }
  ],
  technicalData: {
    title: 'Surface Comparison Matrix',
    description: 'Technical data evaluating surface durability and pace ratings.',
    headers: {
      type: 'Surface Type',
      pace: 'ITF Pace Rating',
      life: 'Service Life',
      maintenance: 'Maintenance Level'
    },
    rows: [
      {
        type: 'Acrylic Hard Court',
        pace: 'Category 3 (Medium)',
        life: '10 - 12 Years',
        maintenance: 'Low'
      },
      {
        type: 'Hybrid Clay',
        pace: 'Category 1 (Slow)',
        life: '12 - 15 Years',
        maintenance: 'Medium'
      },
      {
        type: 'Artificial Grass',
        pace: 'Category 4 (Fast)',
        life: '7 - 10 Years',
        maintenance: 'Medium'
      },
      {
        type: 'Professional Cushion',
        pace: 'Category 2 (Med-Slow)',
        life: '10+ Years',
        maintenance: 'Low'
      }
    ]
  },
  cta: {
    title: 'Build Your Grand Slam Court',
    description: 'Expert tennis court design and installation services.',
    buttonText: 'Get a Quote',
    buttonLink: '/contact-us?product=Tennis Court'
  }
};
