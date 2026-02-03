import type { ServiceTemplateData } from '@/types/service';
import golfHero from '@/assets/HomeImages/golf.jpg';
import golfAbout from '@/assets/services/golf/golfabout.jpg';
import golfIndoor from '@/assets/services/golf/golfindoor.jpg';
import golfOutdoor from '@/assets/services/golf/golfoutdoor.jpg';

export const golfData: ServiceTemplateData = {
  slug: 'golf',
  hero: {
    title: 'Sabaysis Golf',
    subtitle: 'Indoor & Outdoor Solutions',
    description: 'Premium golf infrastructure for academies, resorts, clubs, and private estates. From indoor simulators to outdoor driving ranges and putting greens, we deliver precision-built golf environments.',
    image: golfHero,
    badge: 'Precision Greens'
  },
  about: {
    title: 'Golf Facilities Engineered for Performance',
    description: 'Sabaysis designs and builds end-to-end golf spaces with a focus on playability, safety, and long-term durability. Our indoor and outdoor systems combine advanced turf technology, accurate ball response, and professional-grade layouts tailored to your location and budget.',
    image: golfAbout,
    imageAlt: 'Golf facility construction',
    features: [
      'True-roll putting surfaces with consistent speed',
      'Weather-resistant outdoor turf systems',
      'Impact-safe sub-base and shock absorption',
      'Custom chipping, pitching, and bunker zones',
      'Drainage and slope engineering for outdoor greens',
      'Turnkey installation with lighting and accessories'
    ]
  },
  whatIsIt: {
    title: 'What is a Golf Performance Facility?',
    description: 'A golf performance facility is a dedicated training and play environment that combines accurate turf response, proper ball behavior, and ergonomic layouts. These spaces can be indoor simulator studios or outdoor greens and ranges built to professional standards.',
    image: golfIndoor,
    imageAlt: 'Indoor golf studio',
    relatedSports: ['Golf', 'Putting', 'Driving Range', 'Short Game Training']
  },
  modelsTitle: 'Indoor & Outdoor Options',
  modelsDescription: 'Choose the setup that fits your space, budget, and training goals.',
  models: [
    {
      id: 'golf-indoor-studio',
      name: 'Indoor Golf Studio',
      title: 'Simulator-Ready Surface System',
      description: 'A compact, high-precision indoor solution optimized for launch monitors and simulator play. Includes premium putting turf, impact screens, and controlled lighting options.',
      image: golfIndoor,
      imageAlt: 'Indoor golf studio surface',
      specifications: [
        { label: 'Surface Type', value: 'Multi-layer nylon turf with true-roll backing' },
        { label: 'Ball Roll Speed', value: 'Stimp 9 - 11 (adjustable)' },
        { label: 'Sub-Base', value: 'Shock-absorbing foam + plywood deck' },
        { label: 'Typical Area', value: '6m x 4m (customizable)' }
      ],
      applications: ['Golf Academies', 'Commercial Studios', 'Corporate Recreation']
    },
    {
      id: 'golf-outdoor-green',
      name: 'Outdoor Golf Green',
      title: 'Putting & Short-Game Zone',
      description: 'Outdoor putting greens and short-game areas with engineered drainage and graded sub-base for consistent play across seasons.',
      image: golfOutdoor,
      imageAlt: 'Outdoor golf putting green',
      specifications: [
        { label: 'Surface Type', value: 'UV-stable premium turf' },
        { label: 'Drainage', value: 'Permeable base with lateral runoff' },
        { label: 'Slope Control', value: 'Custom breaks & contours' },
        { label: 'Warranty', value: '8 - 10 years (surface dependent)' }
      ],
      applications: ['Resorts & Clubs', 'Private Villas', 'Sports Parks']
    }
  ],
  technicalData: {
    title: 'Performance Benchmarks',
    description: 'Key technical parameters for indoor and outdoor golf installations.',
    headers: {
      parameter: 'Parameter',
      indoor: 'Indoor Studio',
      outdoor: 'Outdoor Green'
    },
    rows: [
      {
        parameter: 'Ball Roll Consistency',
        indoor: 'High (controlled conditions)',
        outdoor: 'High (weather-engineered)'
      },
      {
        parameter: 'Surface Durability',
        indoor: '8 - 10 Years',
        outdoor: '8 - 12 Years'
      },
      {
        parameter: 'Maintenance',
        indoor: 'Low (weekly grooming)',
        outdoor: 'Low-Med (seasonal brushing)'
      },
      {
        parameter: 'Playability',
        indoor: 'Simulator optimized',
        outdoor: 'Tournament-style short game'
      }
    ]
  },
  accordion: {
    title: 'Golf Solutions We Deliver',
    subtitle: 'Indoor & Outdoor',
    items: [
      {
        title: 'Indoor Golf Studios',
        description: 'Simulator-ready rooms with realistic turf response, impact protection, and optimized lighting for training and leisure.',
        images: [golfIndoor]
      },
      {
        title: 'Outdoor Putting Greens',
        description: 'Custom-shaped greens with engineered slopes, drainage, and premium turf for year-round performance.',
        images: [golfOutdoor]
      },
      {
        title: 'Driving Range & Chipping Areas',
        description: 'High-durability turf and safe ball landing zones designed for practice facilities and academies.'
      }
    ]
  },
  cta: {
    title: 'Build Your Golf Facility',
    description: 'Talk to our team to plan your indoor or outdoor golf project with professional-grade performance.',
    buttonText: 'Get Quote',
    buttonLink: '/contact-us?product=Golf Facility'
  }
};
