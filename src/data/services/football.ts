import type { ServiceTemplateData } from '@/types/service';
import footballHero from '@/assets/Hero/hero (2).jpg';
import footballAbout from '@/assets/Features/unified (1).jpg';
import footballClassic from '@/assets/Features/unified (2).jpg';
import footballPremium from '@/assets/Features/unified (3).jpg';

export const footballCourtData: ServiceTemplateData = {
  slug: 'football-court',
  hero: {
    title: 'Sabaysis Football',
    subtitle: 'FIFA-Standard Turf & Courts',
    description: 'Professional football turf and court construction meeting international FIFA standards',
    image: footballHero,
    badge: 'FIFA-Standard Quality'
  },
  about: {
    title: 'Premium Football Infrastructure',
    description: 'Sabaysis specializes in constructing world-class football courts and artificial turf fields that meet FIFA quality standards. Our expertise spans from small-sided courts to full-size professional pitches, delivering exceptional playing surfaces for schools, clubs, academies, and professional venues across India and internationally.',
    image: footballAbout,
    imageAlt: 'Football turf installation',
    features: [
      'FIFA Quality certified turf',
      'Professional drainage systems',
      'UV-resistant materials',
      'All-weather playability',
      'Expert installation team',
      'Comprehensive maintenance support'
    ]
  },
  whatIsIt: {
    title: 'Modern Football Infrastructure',
    description: 'Our football courts feature premium artificial turf designed for optimal ball roll, player safety, and durability. Each installation includes proper base preparation, drainage systems, and shock-absorbing underlays to ensure professional-grade performance and player comfort.',
    image: footballClassic,
    imageAlt: 'Football court construction',
    relatedSports: ['Football', 'Soccer', 'Futsal']
  },
  models: [
    {
      id: 'classic-5-a-side',
      name: '5-A-Side Classic',
      title: 'Classic 5-A-Side Football Court',
      description: 'Perfect for recreational play and small-sided games, our 5-a-side courts feature FIFA-quality turf with excellent ball control and player comfort.',
      image: footballClassic,
      imageAlt: '5-a-side football court',
      specifications: [
        { label: 'Court Size', value: '40m × 20m' },
        { label: 'Turf Type', value: 'FIFA Quality monofilament' },
        { label: 'Pile Height', value: '40-50mm' },
        { label: 'Infill', value: 'Sand + rubber granules' }
      ],
      applications: ['Sports Clubs', 'Schools', 'Community Centers', 'Residential Complexes']
    },
    {
      id: 'premium-7-a-side',
      name: '7-A-Side Premium',
      title: 'Premium 7-A-Side Football Court',
      description: 'Designed for competitive play with enhanced durability and performance characteristics. Ideal for academies and training facilities.',
      image: footballPremium,
      imageAlt: '7-a-side football court',
      specifications: [
        { label: 'Court Size', value: '60m × 40m' },
        { label: 'Turf Type', value: 'FIFA Quality Pro' },
        { label: 'Pile Height', value: '50-60mm' },
        { label: 'Shock Pad', value: '10mm EPDM underlay' }
      ],
      applications: ['Football Academies', 'Sports Complexes', 'Professional Training', 'Tournaments']
    },
    {
      id: 'professional-11-a-side',
      name: '11-A-Side Professional',
      title: 'Professional Full-Size Football Pitch',
      description: 'Tournament-grade full-size football pitch with FIFA Quality Pro certification, designed for professional matches and high-level competitions.',
      image: footballHero,
      imageAlt: 'Professional football pitch',
      specifications: [
        { label: 'Pitch Size', value: '105m × 68m' },
        { label: 'Turf Type', value: 'FIFA Quality Pro certified' },
        { label: 'Pile Height', value: '60mm' },
        { label: 'Drainage', value: 'Advanced percolation system' }
      ],
      applications: ['Professional Clubs', 'Stadiums', 'International Venues', 'Elite Training Centers']
    }
  ],
  technicalData: {
    title: 'FIFA Quality Standards',
    description: 'Our football turf meets rigorous FIFA quality standards for ball roll, vertical ball rebound, shock absorption, and rotational resistance.',
    headers: {
      parameter: 'Parameter',
      standard: 'FIFA Standard',
      sabaysis: 'Sabaysis Performance'
    },
    rows: [
      {
        parameter: 'Ball Roll',
        standard: '4-10m',
        sabaysis: '6-8m'
      },
      {
        parameter: 'Vertical Rebound',
        standard: '30-50%',
        sabaysis: '40-45%'
      },
      {
        parameter: 'Shock Absorption',
        standard: '55-70%',
        sabaysis: '60-65%'
      },
      {
        parameter: 'Rotational Resistance',
        standard: '25-45 Nm',
        sabaysis: '30-40 Nm'
      }
    ]
  },
  cta: {
    title: 'Ready to Build Your Football Court?',
    description: 'Get in touch with our team for a custom quote and site consultation',
    buttonText: 'Get a Quote',
    buttonLink: '/contact-us?product=Football Court'
  }
};
