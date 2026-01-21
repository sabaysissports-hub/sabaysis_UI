import type { ServiceTemplateData } from '@/types/service';
import cricketHero from '@/assets/HomeImages/cricket.jpg';
// Assuming these exist or will be replaced with actual assets
import cricketAbout from '@/assets/Features/unified (1).jpg';
import cricketIndoor from '@/assets/Features/unified (2).jpg';
import cricketOutdoor from '@/assets/Features/unified (3).jpg';

export const cricketData: ServiceTemplateData = {
  slug: 'box-cricket',
  hero: {
    title: 'Sabaysis Box Cricket',
    subtitle: 'WICF-Standard Facilities',
    description: 'High-performance indoor and rooftop box cricket construction with specialized turf and professional netting.',
    image: cricketHero,
    badge: 'Premium Arena Solutions'
  },
  about: {
    title: 'Professional Box Cricket Arenas',
    description: 'Sabaysis is a leader in designing and constructing world-class box cricket facilities in Dubai and across India. We follow the World Indoor Cricket Federation (WICF) standards to deliver arenas that offer consistent ball bounce, player safety, and maximum durability for commercial and private use.',
    image: cricketAbout,
    imageAlt: 'Box cricket arena installation',
    features: [
      'WICF-certified pitch dimensions',
      'German-imported multisport cricket turf',
      'No. 36/45 UV-stabilized HDPE netting',
      'Galvanized steel structural enclosures',
      'Epoxy-reinforced high-impact wicket zones',
      'Professional LED arena lighting (300-500 Lux)'
    ]
  },
  whatIsIt: {
    title: 'The Modern Arena Experience',
    description: 'Premium box cricket requires a 20ft+ ceiling height and a specialized pitch that allows for fast deliveries and dynamic batting. Our arenas are designed to maximize playability in urban spaces and rooftops, common in high-density development zones.',
    image: cricketIndoor,
    imageAlt: 'Indoor box cricket facility',
    relatedSports: ['Cricket', 'Action Cricket', 'Indoor Cricket']
  },
  models: [
    {
      id: 'box-cricket-stadium',
      name: 'Stadium Series',
      title: 'Professional League Arena',
      description: 'Built to match international indoor cricket standards like those in Danube Sports World, featuring premium aesthetic finishes and maximum play area.',
      image: cricketIndoor,
      imageAlt: 'Professional box cricket arena',
      specifications: [
        { label: 'Dimensions', value: '30m x 12m' },
        { label: 'Ceiling Height', value: '24ft Crystal Clear' },
        { label: 'Turf', value: '15mm German High-Density' },
        { label: 'Zones', value: 'WICF Marking Standards' }
      ],
      applications: ['Commercial Sports Hubs', 'Professional Academies', 'Leagues']
    },
    {
      id: 'box-cricket-urban',
      name: 'Urban Pro',
      title: 'Rooftop & Community Box',
      description: 'A robust, lightweight structural solution optimized for installation on rooftops and in community parks where space is premium.',
      image: cricketOutdoor,
      imageAlt: 'Rooftop box cricket box',
      specifications: [
        { label: 'Structure', value: 'Lightweight MS Sections' },
        { label: 'Netting', value: 'Double-stitched Anti-Ball Leakage' },
        { label: 'Surface', value: 'Shock-absorbing base layer' },
        { label: 'Installation', value: 'Rapid 15-day onsite build' }
      ],
      applications: ['Rooftops', 'Schools', 'Private Estates']
    }
  ],
  technicalData: {
    title: 'Arena Construction Specs',
    description: 'Heavy-duty material specifications for high-intensity commercial cricket usage.',
    headers: {
      component: 'Arena Component',
      material: 'Material Specification',
      durability: 'Performance Life'
    },
    rows: [
      {
        component: 'Pitch Surface',
        material: 'Polyethylene Monofilament (German)',
        durability: '8 - 10 Years'
      },
      {
        component: 'Enclosure Mesh',
        material: 'UV-Stabilized HDPE (2.5mm)',
        durability: '5 - 7 Years'
      },
      {
        component: 'Main Frame',
        material: 'Galvanized MS Hollow Sections',
        durability: '15+ Years'
      },
      {
        component: 'Wicket Zone',
        material: 'Impact-Grade Industrial Epoxy',
        durability: 'Lifetime Base'
      }
    ]
  },
  cta: {
    title: 'Launch Your Cricket Facility',
    description: 'Consult with our specialist arena designers for a custom quote.',
    buttonText: 'Get a Quote',
    buttonLink: '/contact-us?product=Box Cricket'
  }
};
