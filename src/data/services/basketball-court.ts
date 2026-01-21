import type { ServiceTemplateData } from '@/types/service';
import basketballHero from '@/assets/Hero/hero (3).jpg';
import basketballAbout from '@/assets/Features/unified (2).jpg';
import basketballIndoor from '@/assets/Features/unified (1).jpg';
import basketballOutdoor from '@/assets/Features/unified (3).jpg';

export const basketballData: ServiceTemplateData = {
  slug: 'basketball-court',
  hero: {
    title: 'Sabaysis Basketball',
    subtitle: 'FIBA Standard Excellence',
    description: 'Professional basketball court construction offering superior ball bounce, traction, and athlete protection.',
    image: basketballHero,
    badge: 'FIBA Approved Solutions'
  },
  about: {
    title: 'Elite Basketball Infrastructure',
    description: 'Sabaysis delivers high-performance basketball courts that adhere to International Basketball Federation (FIBA) Level 1 and 2 standards. Whether for indoor stadiums or outdoor urban parks, we provide durable surfaces designed for explosive movements and intensive gameplay.',
    image: basketballAbout,
    imageAlt: 'Basketball court installation',
    features: [
      'FIBA compliant dimensions (28m x 15m)',
      'High-impact shock absorption (53-65%)',
      'Area-elastic and Point-elastic systems',
      'Professional glass backstop units',
      'Official competition line marking',
      'Advanced drainage for outdoor installations'
    ]
  },
  whatIsIt: {
    title: 'Professional Court Geometry',
    description: 'A premium basketball court requires 7 meters of clear overhead space and a 2-meter safety run-off area. Our designs incorporate these global standards to ensure a safe and professional environment for athletes in Dubai and Europe.',
    image: basketballIndoor,
    imageAlt: 'Indoor basketball stadium',
    relatedSports: ['Basketball', 'Volleyball', 'Handball']
  },
  models: [
    {
      id: 'basketball-pro-hardwood',
      name: 'Pro Hardwood',
      title: 'Solid Maple Competition Floor',
      description: 'The ultimate indoor basketball surface, providing the most consistent ball rebound and player comfort on the market.',
      image: basketballIndoor,
      imageAlt: 'Maple basketball court',
      specifications: [
        { label: 'Surface', value: '18mm - 22mm Premium Maple' },
        { label: 'System', value: 'Double Joist / Sleeper System' },
        { label: 'Varnish', value: 'Anti-slip FIBA Approved Lacquer' },
        { label: 'Bounce', value: 'Greater than 95%' }
      ],
      applications: ['National Stadiums', 'Professional Academies', 'University Gyms']
    },
    {
      id: 'basketball-outdoor-acrylic',
      name: 'All-Weather Acrylic',
      title: 'High-Performance Urban Surface',
      description: 'Durable, UV-resistant, and vibrant multi-layer acrylic systems perfect for community centers and rooftop courts.',
      image: basketballOutdoor,
      imageAlt: 'Acrylic basketball court',
      specifications: [
        { label: 'Layers', value: '5 - 8 Layer System' },
        { label: 'Cushion', value: 'SBR Rubber Cushion Base' },
        { label: 'UV Resistance', value: 'Grade 8 (High exposure)' },
        { label: 'Texture', value: 'Micro-diamond anti-slip' }
      ],
      applications: ['Public Parks', 'Schools', 'Private Communities']
    }
  ],
  technicalData: {
    title: 'FIBA Performance Metrics',
    description: 'Technical evaluation of our court systems against international competition standards.',
    headers: {
      metric: 'Performance Metric',
      threshold: 'FIBA Requirement',
      result: 'Sabaysis Performance'
    },
    rows: [
      {
        metric: 'Shock Absorption',
        threshold: '≥ 50%',
        result: '58% - 64%'
      },
      {
        metric: 'Vertical Ball Behavior',
        threshold: '≥ 90%',
        result: '96%'
      },
      {
        metric: 'Sliding Coefficient',
        threshold: '0.4 - 0.7',
        result: '0.55'
      },
      {
        metric: 'Area Elasticity',
        threshold: 'Required',
        result: 'Compliant (EN 14904)'
      }
    ]
  },
  cta: {
    title: 'Start Your Championship Project',
    description: 'Consult with our engineering team for a FIBA-standard basketball facility.',
    buttonText: 'Get a Quote',
    buttonLink: '/contact-us?product=Basketball Court'
  }
};
