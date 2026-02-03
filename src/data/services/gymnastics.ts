import type { ServiceTemplateData } from '@/types/service';
import gymHero from '@/assets/HomeImages/gymanastic.jpg';
import gymAbout from '@/assets/services/gym/about.jpg';
import gymIndoor from '@/assets/services/gym/indoor.jpg';
import gymOutdoor from '@/assets/services/gym/outdoor.jpg';

export const gymnasticsData: ServiceTemplateData = {
  slug: 'gymnastics',
  hero: {
    title: 'Sabaysis Gymnastics',
    subtitle: 'FIG Standard Training Spaces',
    description: 'Complete gymnastics facility solutions including sprung floors, landing zones, and training pits for academies, schools, and professional centers.',
    image: gymHero,
    badge: 'Safety & Performance'
  },
  about: {
    title: 'Safe, High-Performance Gymnastics Environments',
    description: 'Sabaysis delivers gymnastics halls designed for artistic, rhythmic, and tumbling disciplines. Our systems prioritize athlete safety, impact reduction, and consistent rebound performance across all training levels.',
    image: gymAbout,
    imageAlt: 'Gymnastics facility installation',
    features: [
      'Spring-based impact reduction systems',
      'FIG-aligned floor dimensions and markings',
      'High-durability carpet + foam layers',
      'Landing pits with modular foam blocks',
      'Custom apparatus zones and runway layouts',
      'Low-maintenance, long-life materials'
    ]
  },
  whatIsIt: {
    title: 'What Defines a Gymnastics Facility?',
    description: 'A gymnastics facility combines energy-absorbing floors, safe landing systems, and well-planned apparatus zones to enable athletes to train with confidence and precision. We support all major gymnastics disciplines including Artistic, Rhythmic, Trampoline, and Tumbling.',
    image: gymIndoor,
    imageAlt: 'Gymnastics training floor',
    relatedSports: ['Artistic Gymnastics', 'Rhythmic Gymnastics', 'Trampoline Gymnastics', 'Tumbling']
  },
  modelsTitle: 'Gymnastics Court Types',
  modelsDescription: 'Professional facilities for all major gymnastics disciplines.',
  models: [
    {
      id: 'gymnastics-artistic',
      name: 'Artistic Gymnastics',
      title: 'Vault, Bars, Beam & Floor Exercise',
      description: 'Competition-grade facility with spring-loaded floors, apparatus zones for vault, uneven/parallel bars, balance beam, and floor exercise. Includes landing pits and safety mats.',
      image: gymIndoor,
      imageAlt: 'Artistic gymnastics facility',
      specifications: [
        { label: 'Floor System', value: 'Multi-layer spring floor (FIG compliant)' },
        { label: 'Floor Area', value: '12m x 12m (floor exercise)' },
        { label: 'Shock Absorption', value: 'High (competition-ready)' },
        { label: 'Apparatus Zones', value: 'Vault, Bars, Beam, Floor' }
      ],
      applications: ['Professional Training Centers', 'Gymnastics Academies', 'Competition Venues']
    },
    {
      id: 'gymnastics-rhythmic',
      name: 'Rhythmic Gymnastics',
      title: 'Dance-Based Routines & Apparatus',
      description: 'Smooth, uniform spring floor designed for dance movements and apparatus handling (ribbon, hoop, ball, clubs, rope). Optimized for grace, flexibility, and artistic expression.',
      image: gymAbout,
      imageAlt: 'Rhythmic gymnastics floor',
      specifications: [
        { label: 'Floor Type', value: 'Smooth spring floor with carpet' },
        { label: 'Floor Area', value: '13m x 13m (standard)' },
        { label: 'Surface Finish', value: 'Uniform texture for apparatus control' },
        { label: 'Flexibility', value: 'Balanced for dance and tumbling' }
      ],
      applications: ['Dance Studios', 'Rhythmic Gymnastics Clubs', 'Schools']
    },
    {
      id: 'gymnastics-trampoline',
      name: 'Trampoline Gymnastics',
      title: 'Aerial Skills & Acrobatics',
      description: 'Professional trampoline setup with safety pits, foam landing zones, and high ceiling clearance. Designed for competitive trampoline, double mini-trampoline, and tumbling track.',
      image: gymIndoor,
      imageAlt: 'Trampoline gymnastics facility',
      specifications: [
        { label: 'Trampoline Bed', value: 'Competition-grade (4mm x 5mm)' },
        { label: 'Pit Depth', value: 'Minimum 1.5m foam pit' },
        { label: 'Ceiling Height', value: 'Minimum 8m clearance' },
        { label: 'Safety Systems', value: 'Landing mats & foam blocks' }
      ],
      applications: ['Trampoline Parks', 'Elite Training Centers', 'Competition Venues']
    },
    {
      id: 'gymnastics-tumbling',
      name: 'Tumbling',
      title: 'Power Tumbling Track',
      description: 'Long, springy runway (25m) with consistent rebound for power tumbling passes. Includes safety landing zones and run-up areas for speed and momentum.',
      image: gymOutdoor,
      imageAlt: 'Tumbling track',
      specifications: [
        { label: 'Track Length', value: '25m (standard competition)' },
        { label: 'Track Width', value: '2m' },
        { label: 'Energy Return', value: 'High (controlled rebound)' },
        { label: 'Landing Zone', value: 'Foam pit or thick landing mats' }
      ],
      applications: ['Tumbling Clubs', 'Cheer Gyms', 'Training Centers']
    }
  ],
  technicalData: {
    title: 'Safety & Performance Metrics',
    description: 'Key parameters that define a safe and effective gymnastics training environment.',
    headers: {
      parameter: 'Parameter',
      artistic: 'Artistic',
      rhythmic: 'Rhythmic',
      trampoline: 'Trampoline',
      tumbling: 'Tumbling'
    },
    rows: [
      {
        parameter: 'Shock Absorption',
        artistic: 'High (sprung floor)',
        rhythmic: 'Medium-High',
        trampoline: 'Very High (trampoline)',
        tumbling: 'High (runway)'
      },
      {
        parameter: 'Energy Return',
        artistic: 'Balanced rebound',
        rhythmic: 'Low-Medium',
        trampoline: 'Very High',
        tumbling: 'High (consistent)'
      },
      {
        parameter: 'Slip Resistance',
        artistic: 'Controlled grip',
        rhythmic: 'Smooth surface',
        trampoline: 'N/A (aerial)',
        tumbling: 'Controlled traction'
      },
      {
        parameter: 'Use Frequency',
        artistic: 'Daily intensive',
        rhythmic: 'Daily moderate',
        trampoline: 'Moderate intensive',
        tumbling: 'High intensive'
      }
    ]
  },
  accordion: {
    title: 'Gymnastics Disciplines We Support',
    subtitle: 'All Major Types',
    items: [
      {
        title: 'Artistic Gymnastics',
        description: 'Competition-style sprung floors with apparatus zones for vault, bars, beam, and floor exercise. Designed for high-performance training with optimal shock absorption.',
        images: [gymIndoor]
      },
      {
        title: 'Rhythmic Gymnastics',
        description: 'Specialized spring floors with smooth, uniform surfaces for dance-based routines using ribbons, hoops, balls, clubs, and ropes.'
      },
      {
        title: 'Trampoline Gymnastics',
        description: 'Professional trampoline beds with safety pits, foam landing zones, and proper ceiling clearance for aerial skills and acrobatics.'
      },
      {
        title: 'Tumbling',
        description: 'Long runway tracks with controlled rebound for power tumbling passes, providing consistent energy return and safe landing zones.'
      }
    ]
  },
  cta: {
    title: 'Build Your Gymnastics Facility',
    description: 'Partner with Sabaysis to create a safe, compliant, and high-performance gymnastics space.',
    buttonText: 'Get Quote',
    buttonLink: '/contact-us?product=Gymnastics Facility'
  }
};
