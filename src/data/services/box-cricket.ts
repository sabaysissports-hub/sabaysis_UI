import type { ServiceTemplateData } from '@/types/service';
import cricketHero from '@/assets/HomeImages/cricket.jpg';
import cricketIndoor from '@/assets/NewImages/Precision.jpeg';
import boxabout from '@/assets/HomeImages/cricket.jpg';
import rectangle from '@/assets/NewImages/rectangle.jpeg';
import square from '@/assets/NewImages/indoorcric.jpeg';
import oval from '@/assets/NewImages/360.jpeg';
// import outdoor from '@/assets/services/box-cricket/outdoor.jpg';
import structuralDesign from '@/assets/NewImages/circular.jpeg';
import final from '@/assets/services/box-cricket/Final.jpg';
import turf from '@/assets/services/box-cricket/Turf.jpg';
import planning from '@/assets/services/box-cricket/planning.jpg';


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
    description: 'Sabaysis is a leader in designing and constructing world-class box cricket facilities. We specialize in custom configurations—whether you need an Oval, Square, or Rectangle arena. We follow World Indoor Cricket Federation (WICF) standards to deliver 360-degree playing experiences with maximum player safety and durability.',
    image: boxabout,
    imageAlt: 'Box cricket arena installation',
    features: [
      'Custom Shapes: Oval, Square & Rectangle',
      '360-Degree Professional Enclosures',
      'WICF-certified pitch dimensions',
      'German-imported multisport cricket turf',
      'No. 36/45 UV-stabilized HDPE netting',
      'Galvanized steel structural enclosures'
    ]
  },
  whatIsIt: {
    title: 'Precision Designed Factors',
    description: 'When we design a box cricket facility, we calculate critical factors like ball rebound consistency, netting tension, and lighting uniformity. Our 360-degree design approach ensures that every square inch of the arena is playable, maximizing the ROI for commercial owners and the experience for players.',
    image: cricketIndoor,
    imageAlt: 'Indoor box cricket facility',
    relatedSports: ['Cricket', 'Action Cricket', 'Indoor Cricket']
  },
  features: [
    {
      title: 'Factor 01: Dimension',
      description: 'Dimension can be determined as per the availability of the land area. Preference of at least 6000 sqft area. This can be either in rectangle or in oval shape.'
    },
    {
      title: 'Factor 02: Height of Structure',
      description: 'Meckavo sports has constructed grounds up to a height of 70 feet which is done in fabricated poles. The height depends on the ground area and the client budget.'
    },
    {
      title: 'Factor 03: Flooring Material',
      description: 'Option A: Permanent 15mm Multisport grass pitch over concrete with football grass on stone base. Option B: Permanent cricket pitch with specialized non-infill grass.'
    }
  ],
  models: [
    {
      id: 'box-cricket-oval',
      name: 'Oval Championship',
      title: 'Stadium-Style Oval Arena',
      description: 'Our flagship 360-degree design that mimics a professional cricket stadium. Engineered with curved structural sections to provide a realistic boundary experience and optimal player movement path.',
      image: oval,
      imageAlt: 'Oval box cricket arena',
      specifications: [
        { label: 'Shape', value: 'Custom Professional Oval' },
        { label: 'Play Area', value: '360° Seamless Boundary' },
        { label: 'Turf', value: 'Lush Green Multipurpose' },
        { label: 'Enclosure', value: 'High-Tension Structural Mesh' }
      ],
      applications: ['Premium Sports Hubs', 'Championship Arenas']
    },
    {
      id: 'box-cricket-rectangle',
      name: 'Commercial Rectangle',
      title: 'Standard Rectangle & Square Boxes',
      description: 'Optimized for commercial urban locations and rooftops. These rectangular and square configurations maximize the available plot area, ensuring the highest possible ROI while maintaining WICF standard playability.',
      image: rectangle,
      imageAlt: 'Rectangular box cricket box',
      specifications: [
        { label: 'Shape', value: 'Precision Rectangle/Square' },
        { label: 'Space Usage', value: '100% Plot Efficiency' },
        { label: 'Netting', value: 'Dual-Layer Impact System' },
        { label: 'Height', value: 'Up to 25ft Ceiling' }
      ],
      applications: ['Urban Rooftops', 'Commercial Plot Owners', 'Schools']
    },
    {
      id: 'box-cricket-pro-hub',
      name: 'Professional Hub',
      title: 'High-Intensity Indoor Arena',
      description: 'A heavy-duty, climate-controlled indoor solution featuring professional-grade LED lighting and reinforced structural frames for non-stop back-to-back bookings.',
      image: square,
      imageAlt: 'Indoor professional cricket hub',
      specifications: [
        { label: 'Lighting', value: '500 Lux Arena Standard' },
        { label: 'Base', value: 'Epoxy-Reinforced Concrete' },
        { label: 'Ventilation', value: 'Advanced Airflow System' },
        { label: 'Features', value: 'Player Dugouts & Viewing Gallery' }
      ],
      applications: ['Sports Academies', '24/7 Pay-and-Play Hubs']
    }
  ],
  timeline: {
    title: 'Our Design & Construction Process',
    description: 'We follow a systematic 360-degree approach to transform any space into a professional cricket arena.',
    steps: [
      {
        title: 'Site Assessment & Shape Planning',
        description: 'We evaluate your space to determine the most efficient shape—be it Oval, Square, or Rectangle—to maximize your play area and ROI.',
        image: planning
      },
      {
        title: '360° Structural Engineering',
        description: 'Our engineers design a custom MS frame that supports 360-degree netting tension and withstands high-power impacts.',
        image: structuralDesign
      },
      {
        title: 'Turf & Pitch Installation',
        description: 'Applying German-imported multisport turf and reinforcing wicket zones with industrial-grade epoxy for consistent bounce.',
        image: turf
      },
      {
        title: 'Final Commissioning',
        description: 'Precision line marking and professional HVAC/Lighting setup (up to 500 Lux) for a complete tournament-ready arena.',
        image: final
      }
    ]
  },
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
