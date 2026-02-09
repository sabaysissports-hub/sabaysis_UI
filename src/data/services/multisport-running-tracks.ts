import type { ServiceTemplateData } from '@/types/service';
import trackHero from '@/assets/Hero/hero.jpg';
import trackAbout from '@/assets/NewImages/atletics.jpg';
import trackFullPour from '@/assets/NewImages/elite.webp';
import trackSandwich from '@/assets/NewImages/sandwitch.webp';
import trackPrefab from '@/assets/NewImages/rubber.webp';
import trackMaintenance from '@/assets/services/multisport-running-tracks/trackm.jpg';


export const runningTracksData: ServiceTemplateData = {
  slug: 'multisport-running-tracks',
  hero: {
    title: 'Sabaysis Athletics',
    subtitle: 'IAAF Standard Running Tracks',
    description: 'World-class synthetic tracks engineered for peak performance, durability, and athlete safety. Building international-standard facilities across India.',
    image: trackHero,
    badge: 'World Athletics Standard'
  },
  about: {
    title: 'Synthetic Athletics Track Technology',
    description: 'Sabaysis specializes in designing and building IAAF (World Athletics) standard synthetic tracks. Our tracks use advanced Polyurethane-based substrates to ensure excellent shock absorption, weather resistance, and consistent performance for schools, colleges, and national stadiums.',
    image: trackAbout,
    imageAlt: 'High-performance athletic track',
    features: [
      'IAAF / World Athletics Standard Compliance',
      'Advanced PU/EPDM Surfacing',
      'High Energy Return & Shock Absorption',
      'All-Weather Multi-Sport Durability',
      'Precision Mechanical Line Marking',
      'Eco-Friendly Low VOC Materials'
    ]
  },
  features: [
    {
      title: 'Modern Synthetic Standards',
      description: 'Unlike traditional cinder tracks, our modern synthetic tracks provide superior drainage, maximum grip in rain, and significantly lower maintenance costs for high-usage facilities.'
    },
    {
      title: 'Performance Advantages',
      description: 'Engineered for optimal force reduction (35-50%) and vertical deformation control, reducing athlete fatigue and preventing long-term joint injuries.'
    },
    {
      title: 'Sabaysis Expert Solutions',
      description: 'We handle everything from site feasibility studies and base preparation to professional surfacing, track testing, and IAAF certification for government and private projects.'
    }
  ],
  modelsTitle: 'Track Surfacing Systems',
  modelsDescription: 'Choose the ideal synthetic system based on your facility usage, budget, and performance requirements.',
  models: [
    {
      id: 'track-full-pour',
      name: 'Full Pour System',
      title: 'Elite Competition Full Pour',
      description: 'The premium choice for national stadiums and international competition venues. Constructed with fully layered liquid polyurethane for maximum durability and professional-grade energy return.',
      image: trackFullPour,
      imageAlt: 'Full pour running track system',
      specifications: [
        { label: 'System', value: 'Full Liquid Polyurethane' },
        { label: 'Standard', value: 'World Athletics Class 1' },
        { label: 'Durability', value: 'Highest Impact Resistance' },
        { label: 'Warranty', value: '15 Years Structural' }
      ],
      applications: ['National Stadiums', 'Olympic Training Centers', 'Premier Universities']
    },
    {
      id: 'track-sandwich',
      name: 'Sandwich System',
      title: 'Professional PU Sandwich System',
      description: 'A versatile high-performance system featuring a base mat layer topped with a poured polyurethane surface. Offers an excellent balance of cost and professional-grade performance.',
      image: trackSandwich,
      imageAlt: 'Sandwich system running track',
      specifications: [
        { label: 'System', value: 'Base Mat + Top Pour' },
        { label: 'Standard', value: 'IAAF Standard Compliant' },
        { label: 'Shock Absorption', value: '35% - 50%' },
        { label: 'Maintenance', value: 'Moderate' }
      ],
      applications: ['Sports Academies', 'College Stadiums', 'District Sports Complexes']
    },
    {
      id: 'track-prefab',
      name: 'Prefabricated System',
      title: 'Prefabricated Rubber Track',
      description: 'Factory-made rolls ensured for absolute consistency in thickness and texture. Ideal for facilities requiring rapid installation and uniform performance across every square inch.',
      image: trackPrefab,
      imageAlt: 'Prefabricated running track rolls',
      specifications: [
        { label: 'System', value: 'Factory Vulcanized Rolls' },
        { label: 'Installation', value: 'Rapid On-site Bonding' },
        { label: 'Consistency', value: '100% Uniform Texture' },
        { label: 'Eco-Friendly', value: 'Recyclable Content' }
      ],
      applications: ['Schools', 'Community Parks', 'Indoor Training Facilities']
    }
  ],
  technicalData: {
    title: 'Standard Track Dimensions & Measurements',
    description: 'Precision dimensions for a standard 400m outdoor track as per World Athletics guidelines.',
    headers: {
      lane: 'Track Lane',
      distance: 'Measured Distance (m)',
      offset: 'Inner Edge Offset (cm)'
    },
    rows: [
      { lane: 'Lane 1', distance: '400.00', offset: '30' },
      { lane: 'Lane 2', distance: '407.67', offset: '92' },
      { lane: 'Lane 3', distance: '415.33', offset: '154' },
      { lane: 'Lane 4', distance: '423.00', offset: '216' },
      { lane: 'Lane 5', distance: '430.66', offset: '278' },
      { lane: 'Lane 6', distance: '438.33', offset: '340' },
      { lane: 'Lane 7', distance: '446.00', offset: '402' },
      { lane: 'Lane 8', distance: '453.66', offset: '464' }
    ]
  },
  accordion: {
    title: 'Track Maintenance & Technical Specs',
    subtitle: 'Expert Guidance',
    items: [
      {
        title: 'Track Maintenance Protocol',
        description: 'Routine maintenance is vital. Weekly: Clear all dust and debris. Monthly: Low-pressure water wash. Annually: Check line markings and apply anti-slip coatings if needed. Avoid spikes on soft grounds and keep heavy equipment/chemicals away from the PU surface.',
        images: [trackMaintenance]
      },
      {
        title: 'Surface Layer Components',
        description: 'Base Layer: Asphalt or Concrete foundation. Shock Pad: SBR rubber granules + PU binder for cushioning. Top Surface: Cast-in-situ Polyurethane with EPDM granules for traction and UV resistance. Markings: High-performance PU paint.',
        images: [trackMaintenance]
      },
      {
        title: 'Races & Events Conducted',
        description: 'Our tracks support the full range of athletics: Sprint Races (100m, 200m, 400m), Middle/Long Distance (800m to 10,000m), Hurdles, Relays, and 3000m Steeplechase with specialized water jump sections.',
        images: [trackMaintenance]
      },
      {
        title: 'Latest Trends in Track Design',
        description: 'We implement the latest innovations: Water-permeable tracks for flash-rain drainage, Eco-friendly surfacing with low VOC content, and smart tracking sections with integrated sensors for performance analysis.',
        images: [trackMaintenance]
      }
    ]
  },
  cta: {
    title: 'Ready to Build Your Athletic Arena?',
    description: 'Get a personalized quote for site inspection and IAAF-standard track construction.',
    buttonText: 'Consult Our Experts',
    buttonLink: '/contact-us?product=Running Track'
  }
};
