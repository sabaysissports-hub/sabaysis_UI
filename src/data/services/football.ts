import type { ServiceTemplateData } from '@/types/service';
import footballHero from '@/assets/Hero/hero (2).jpg';
import footballAbout from '@/assets/services/football/Infrastructure.jpg';
import dimensions from '@/assets/services/football/DIMENSIONS.jpg';
import base from '@/assets/services/football/Base.webp';
import comercial from '@/assets/services/football/Commercial.jpg';
import elite from '@/assets/services/football/Elite.jpg';
import high from '@/assets/services/football/High.jpg';
import installation from '@/assets/services/football/Installation.webp'; 
import conditioning from '@/assets/services/football/Conditioning.png';

export const footballCourtData: ServiceTemplateData = {
  slug: 'football-court',
  hero: {
    title: 'Sabaysis Football',
    subtitle: 'FIFA-Standard Turf & Courts',
    description: 'Professional football turf and court construction meeting international FIFA standards. Exclusively launching MARS 60-B1 Football Turf by CCGrass.',
    image: footballHero,
    badge: 'FIFA Preferred Provider'
  },
  about: {
    title: 'Premium Football Infrastructure',
    description: "Sabaysis specializes in constructing world-class football courts and artificial turf fields that meet FIFA quality standards. As a preferred partner for CCGrass, the world's largest turf manufacturer, we provide the highest quality surfaces tested for up to 5,00,000 Lisport cycles.",
    image: footballAbout,
    imageAlt: 'Football turf installation',
    features: [
      'FIFA Quality & Quality Pro certifications',
      'Exclusive CCGrass MARS 60-B1 Launch',
      'Tested for 5,00,000 Lisport XL cycles',
      'All-weather playability & UV resistance',
      'Professional base & FIFA-recommended infill',
      '15-year warranty assurance'
    ]
  },
  features: [
    {
      title: 'FIFA & UEFA Standards',
      description: 'Our turf complies with the highest standards set by FIFA and UEFA, ensuring professional-grade quality and player performance with FIFA Quality Pro certifications.'
    },
    {
      title: 'Mars 60-B1 Technology',
      description: "Tested with Lisport XL for up to 5,00,000 cycles—the highest in the world—making it ideal for extreme heavy-use commercial grounds."
    },
    {
      title: 'Warranty & Durability',
      description: "Backed by CCGrass and installed by Sabaysis experts with professional base work to ensure a lifespan of 15+ years under intensive use."
    }
  ],
  timeline: {
    title: 'How We Build Your Football Turf & Surface',
    description: 'We follow systematic steps to ensure your football field meets FIFA standards and lasts long.',
    steps: [
      {
        title: 'Check & Prepare the Ground',
        description: 'We evaluate the site and prepare the ground to be perfectly level for optimal football play.',
        image: conditioning
      },
      {
        title: 'Build a Strong Base',
        description: 'We create a solid foundation with proper drainage and stability layers to support intensive football use.',
        image: base
      },
      {
        title: 'Lay Out the Turf',
        description: 'We precisely install the FIFA-certified artificial turf, ensuring seamless joins for professional play.',
        image: installation
      },
      {
        title: 'Add Soft Padding & Fill',
        description: 'We apply shock-absorbing layers and FIFA-recommended infill for player safety and ball performance.',
        image: installation
      },
      {
        title: 'Brush & Mark the Field',
        description: 'We finish by brushing the turf fibers and painting professional FIFA-standard field markings.',
        image: installation
      }
    ]
  },
  modelsTitle: 'Top Professional Products',
  modelsDescription: 'Our range of high-performance artificial grass systems for professional football.',
  models: [
    {
      id: 'mars-60-b1',
      name: 'MARS 60-B1',
      title: 'Elite FIFA Quality Pro Turf',
      description: "Exclusively launched by CCGrass with Sabaysis. Tested for up to 500,000 Lisport cycles—the world's highest durability rating.",
      image: elite,
      imageAlt: 'MARS 60-B1 Football Turf',
      specifications: [
        { label: 'Pile Height', value: '50mm' },
        { label: 'Dtex', value: '18000' },
        { label: 'Lisport Cycles', value: '5,00,000+' },
        { label: 'Warranty', value: '15 Years' },
        { label: 'Density', value: '8820' },
        { label: 'Backing', value: 'Double PP + PU' }
      ],
      applications: ['Stadiums', 'Professional Clubs', 'Elite Academies']
    },
    {
      id: 'dream-turf',
      name: 'DREAM',
      title: 'High-Performance Pro Turf',
      description: 'Superior resilience and comfort for high-intensity training centers and competitive academies.',
      image: high,
      imageAlt: 'Dream Football Turf',
      specifications: [
        { label: 'Pile Height', value: '50mm' },
        { label: 'Dtex', value: '17000' },
        { label: 'Lisport Cycles', value: '3,50,000+' },
        { label: 'Warranty', value: '10 Years' },
        { label: 'Resilience', value: '90' },
        { label: 'Backing', value: 'Double PP + Green SBR Latex' }
      ],
      applications: ['Football Academies', 'Schools', 'Private Clubs']
    },
    {
      id: 'europea-hd',
      name: 'EUROPEA HD',
      title: 'Commercial Heavy Duty',
      description: 'Maximum resilience (100) designed for commercial pay-and-play facilities with back-to-back bookings.',
      image: comercial,
      imageAlt: 'Europea HD Football Turf',
      specifications: [
        { label: 'Pile Height', value: '50mm' },
        { label: 'Dtex', value: '16000' },
        { label: 'Lisport Cycles', value: '3,00,000+' },
        { label: 'Warranty', value: '8 Years' },
        { label: 'Resilience', value: '100' },
        { label: 'Density', value: '11550' }
      ],
      applications: ['Commercial Hubs', 'Community Parks', 'Schools']
    }
  ],
  technicalData: {
    title: 'DIMENSIONS OF FOOTBALL TURF BY FIFA',
    description: 'FIFA recommendations for pitch dimensions to ensure professional-grade playing standards.',
    image: dimensions,
    imageAlt: 'Dimensions of Football Turf by FIFA',
    headers: {
      category: 'Category',
      length: 'Length (m)',
      width: 'Width (m)',
      details: 'Requirement'
    },
    rows: [
      {
        category: 'Professional 11-a-side',
        length: '90m - 120m',
        width: '45m - 90m',
        details: 'Standard Rectangular Field'
      },
      {
        category: 'Penalty Area',
        length: '16.45m',
        width: '-',
        details: 'Distance from Goal Line'
      },
      {
        category: 'Penalty Spot',
        length: '10.9m',
        width: '-',
        details: 'Distance from Goal'
      }
    ]
  },
  cta: {
    title: 'Build Your FIFA-Standard Field',
    description: 'Expert consultation for your professional football infrastructure project.',
    buttonText: 'Request Quote',
    buttonLink: '/contact-us?product=Football Court'
  }
};
