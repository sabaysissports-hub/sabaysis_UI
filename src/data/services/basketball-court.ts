import type { ServiceTemplateData } from '@/types/service';
import basketballHero from '@/assets/Unified S/Basketball.jpg';
import basketballAbout from '@/assets/services/basketball-court/about.jpg';


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
  modelsTitle: 'Different Types of Flooring',
  modelsDescription: 'Explore our range of high-performance basketball surfacing systems.',
  models: [
    {
      id: 'basketball-wooden',
      name: 'Wooden Flooring',
      title: 'Professional Wooden Flooring',
      description: 'Wooden flooring is composed of either engineered or natural wood. It offers a smooth, attractive, and long-lasting surface commonly used in residences, offices, and sports facilities.',
      image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/types_of_flooring/wooden.webp',
      imageAlt: 'Wooden basketball flooring',
      specifications: [
        { label: 'Material', value: 'Engineered/Natural Wood' },
        { label: 'Surface', value: 'Smooth & Attractive' },
        { label: 'Durability', value: 'Long-lasting' }
      ],
      applications: ['Indoor Stadiums', 'Premium Academies', 'Private Gyms']
    },
    {
      id: 'basketball-ppt-tiles',
      name: 'PPT TILES',
      title: 'High-Performance PPT Tiles',
      description: 'PPT Tiles are high-performance modular flooring solutions offering shock absorption, anti-slip surface, and weather resistance. Ideal for indoor and outdoor sports.',
      image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/types_of_flooring/ppt_tiles.webp',
      imageAlt: 'PPT Tiles for basketball',
      specifications: [
        { label: 'System', value: 'Modular Tiles' },
        { label: 'Features', value: 'Shock Absorbing & Anti-slip' },
        { label: 'Weather', value: 'All-weather resistant' }
      ],
      applications: ['Outdoor Community Courts', 'Schools', 'Multi-sport Hubs']
    },
    {
      id: 'basketball-acrylic',
      name: 'ACRYLIC',
      title: 'All-Weather Acrylic Surface',
      description: 'Acrylic flooring provides a durable, slip-resistant surface perfect for basketball, tennis, and multi-sport courts. It ensures safety and performance in all weather conditions.',
      image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/types_of_flooring/acrylic_basketball.webp',
      imageAlt: 'Acrylic basketball court',
      specifications: [
        { label: 'Layers', value: 'Multi-layer System' },
        { label: 'Finish', value: 'Durable & Slip-resistant' },
        { label: 'Safety', value: 'High' }
      ],
      applications: ['Urban Parks', 'Rooftop Courts', 'Schools']
    },
    {
      id: 'basketball-synthetic-grass',
      name: 'SYNTHETIC GRASS',
      title: 'Boutique Synthetic Grass',
      description: 'Synthetic grass replicates natural turf, offering a low-maintenance and weatherproof surface for cricket, football, hockey, and more multi-sport configurations.',
      image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/types_of_flooring/synthetic_grass.webp',
      imageAlt: 'Synthetic grass for multi-sport',
      specifications: [
        { label: 'Type', value: 'Faux Natural Turf' },
        { label: 'Maintenance', value: 'Low' },
        { label: 'Performance', value: 'Consistent' }
      ],
      applications: ['Multi-sport Facilities', 'Recreational Areas']
    },
    {
      id: 'basketball-synthetic-mat',
      name: 'SYNTHETIC MAT',
      title: 'High-Performance Synthetic Mat',
      description: 'Synthetic mats are resilient and provide excellent ball bounce and shock absorption, ideal for high-performance indoor and outdoor basketball courts.',
      image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/types_of_flooring/synthetic_mat.webp',
      imageAlt: 'Synthetic basketball mat',
      specifications: [
        { label: 'Resilience', value: 'Very High' },
        { label: 'Bounce', value: 'Excellent' },
        { label: 'Absorption', value: 'High' }
      ],
      applications: ['Professional Training Hubs', 'Indoor Academies']
    },
    {
      id: 'basketball-pvc-mat',
      name: 'PVC MAT',
      title: 'Non-Slip PVC Floor Mat',
      description: 'PVC mats are smooth, non-slip, and shock-absorbent. Perfect for sports courts like basketball and volleyball. Easy to clean and maintain.',
      image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/types_of_flooring/ppt_mat.webp',
      imageAlt: 'PVC mat flooring',
      specifications: [
        { label: 'Surface', value: 'Smooth & Non-slip' },
        { label: 'Cleaning', value: 'Easy' },
        { label: 'Shock', value: 'Absorbent' }
      ],
      applications: ['Volleyball Courts', 'Indoor Basketball', 'Multi-purpose Gyms']
    }
  ],
  whyChooseUs: {
    title: 'Why Choose Sabaysis?',
    description: 'We specialize in creating state-of-the-art basketball courts designed to elevate the playing experience. From professional-grade surfaces to recreational courts, each project is tailored to meet the specific needs of our clients.\n\nUsing high-quality materials and advanced techniques, we ensure the courts provide excellent grip, durability, and optimal ball bounce. Whether for schools, sports clubs, or community centers, our construction services deliver unmatched quality and performance.\n\nOur basketball courts are built to withstand all weather conditions, making them suitable for year-round use. The surfaces are engineered for resilience, ensuring consistent performance even after intense games or heavy usage. Precision markings and a smooth finish enhance gameplay for amateurs and professionals alike.',
    image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/theme_elements/images/background/product-basketball-bg-1.webp',
    features: [
      { title: 'Trusted Reputation', icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Trusted_Reputations.webp' },
      { title: 'Comprehensive Client Support', icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Client_Supports.webp' },
      { title: 'Environmentally Responsible', icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Environmental.webp' },
      { title: 'Cutting-Edge Technology', icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Technology.webp' },
      { title: 'Expert Craftsmanship', icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Handcraft.webp' },
      { title: 'Industry-Leading Warranty', icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Trust.webp' }
    ]
  },
  subBase: {
    title: 'Sub-Base Requirements',
    subtitle: 'Foundation',
    items: [
      {
        title: 'Concrete',
        description: 'Concrete flooring for basketball is a cost-effective and durable option that forms a solid foundation for both indoor and outdoor courts.',
        image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/sub_base_requirements/concrete.webp',
        pros: ['Durable and long-lasting', 'Cost-effective', 'Low maintenance', 'Ideal for outdoor use'],
        cons: ['Hard surfaces can increase injury risk', 'Can become slippery when wet', 'Needs regular resurfacing for grip']
      },
      {
        title: 'Asphalt',
        description: 'Asphalt flooring is a popular outdoor surface due to its weather resistance and quick installation. Critical for long-lasting performance.',
        image: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/sub_base_requirements/asphalt.webp',
        pros: ['Durable and long-lasting', 'Cost-effective', 'Smooth surface for consistent bounce', 'Weather-resistant'],
        cons: ['Can become slippery when wet', 'Hard surface increases injury risk', 'May require periodic resurfacing']
      }
    ]
  },
  accordion: {
    title: 'Expert Basketball Court Scouting',
    subtitle: 'Quality',
    items: [
      {
        title: 'Climate Adaptability',
        description: 'Our basketball courts, which are designed to perform well in all weather, are kept in superb shape and are playable in a variety of climates.',
      },
      {
        title: 'Sustainable Composition',
        description: 'Our choice of premium, sustainable materials demonstrates our dedication to the environment while striking a balance between performance and ecological responsibility.',
      },
      {
        title: 'Easy Maintenance',
        description: 'Our courts were created with ease of use in mind, requiring little upkeep to remain in excellent shape.',
      },
      {
        title: 'Sun Damage Resistance',
        description: 'Our courts are strengthened with UV-resistant materials that maintain their integrity and vibrant colors all year long.',
      },
      {
        title: 'Enhanced Ball Reaction',
        description: 'Our courts offer consistent bounce and smooth transitions, giving players better control and predictability during gameplay.',
      },
      {
        title: 'Enhanced Traction',
        description: 'Prioritizing player safety, our surfaces feature advanced grip technology to minimize slips and falls, making every move secure and confident.',
      }
    ]
  },
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
