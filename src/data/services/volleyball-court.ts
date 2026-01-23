import type { ServiceTemplateData } from '@/types/service';
import volleyballHero from '@/assets/Unified S/bollyballhero.jpg';
import volleyballAbout from '@/assets/Unified S/vollyball.jpg';
import volleyballIndoor from '@/assets/Features/unified (1).jpg';
import volleyballBeach from '@/assets/Features/unified (2).jpg';

export const volleyballData: ServiceTemplateData = {
  slug: 'volleyball-court',
  hero: {
    title: 'Sabaysis Volleyball',
    subtitle: 'FIVB Standard Courts',
    description: 'Professional indoor and beach volleyball court construction with advanced shock absorption and surfacing.',
    image: volleyballHero,
    badge: 'International Standards'
  },
  about: {
    title: 'High-Performance Volleyball Facilities',
    description: 'Sabaysis specializes in constructing volleyball courts that adhere to International Volleyball Federation (FIVB) regulations. Our solutions range from elite indoor systems with point-elastic floors to premium beach volleyball courts with specialized sand filtration and drainage.',
    image: volleyballAbout,
    imageAlt: 'Volleyball court installation',
    features: [
      'FIVB compliant playing area (18m x 9m)',
      'Advanced shock-absorbing underlays',
      'Point-elastic and Area-elastic surfaces',
      'Professional-grade net and post systems',
      'Official competition line marking',
      'Precision sand filtration for beach courts'
    ]
  },
  models: [
    {
      id: 'volleyball-elite-pro',
      name: 'Elite Pro Indoor',
      title: 'Point-Elastic Synthetic Floor',
      description: 'A multi-layered vinyl or polyurethane system providing the perfect balance between grip and shock absorption for fast-paced professional play.',
      image: volleyballIndoor,
      imageAlt: 'Indoor volleyball court',
      specifications: [
        { label: 'Surface', value: '7.0mm - 9.0mm Multi-layer PVC' },
        { label: 'Shock Absorption', value: 'P1 - P2 Category (EN 14904)' },
        { label: 'Color', value: 'FIVB Blue/Orange Standard' },
        { label: 'Warranty', value: '10-Year Structural' }
      ],
      applications: ['Sports Clubs', 'Professional Training Centers', 'Schools']
    },
    {
      id: 'volleyball-beach-premium',
      name: 'Beach Premium',
      title: 'FIVB Tournament Sand Court',
      description: 'Professional beach volleyball enclosures featuring deep-layer white sand, advanced edge retention, and subsurface drainage.',
      image: volleyballBeach,
      imageAlt: 'Beach volleyball court',
      specifications: [
        { label: 'Sand Type', value: 'Washed Silica / Rounded Quartz' },
        { label: 'Sand Depth', value: 'Min 40cm (Standard 50cm)' },
        { label: 'Drainage', value: 'Perforated Sub-surface System' },
        { label: 'Perimeter', value: 'Impact-safe PVC/Rubber Curbing' }
      ],
      applications: ['Resorts', 'Sports Parks', 'Coastal Developments']
    }
  ],
  technicalData: {
    title: 'Court Safety Specifications',
    description: 'Technical evaluation of safety parameters for volleyball surfacing.',
    headers: {
      parameter: 'Safety Parameter',
      indoor: 'Indoor Professional',
      beach: 'Beach Tournament'
    },
    rows: [
      {
        parameter: 'Force Reduction',
        indoor: '35% - 45%',
        beach: '70% - 85% (Impact)'
      },
      {
        parameter: 'Skin Friction',
        indoor: 'Controlled 0.40 - 0.70',
        beach: 'Natural Sand Resistance'
      },
      {
        parameter: 'Energy Return',
        indoor: 'Medium-High',
        beach: 'Low-Dispersive'
      },
      {
        parameter: 'Service Life',
        indoor: '12 - 15 Years',
        beach: 'Lifetime (Sand replenishment)'
      }
    ]
  },
  cta: {
    title: 'Build Your Volleyball Project',
    description: 'Consult with our specialists for indoor or beach volleyball construction.',
    buttonText: 'Get Quote',
    buttonLink: '/contact-us?product=Volleyball Court'
  }
};
