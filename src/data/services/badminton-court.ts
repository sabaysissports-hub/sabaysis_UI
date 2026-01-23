import type { ServiceTemplateData } from '@/types/service';
import badmintonHero from '@/assets/Unified S/batminton.jpg';
import badmintonWood from '@/assets/services/badminton-court/wooden_flooring.webp';
import badmintonPVC from '@/assets/services/badminton-court/pvc_flooring.webp';
import badmintonVinyl from '@/assets/services/badminton-court/vinyl_floor.webp';
import badmintonAcrylic from '@/assets/services/badminton-court/acrylic.webp';
import badmintonIndoor from '@/assets/services/badminton-court/indoor_flooring.webp';
import badmintonDimension from '@/assets/services/badminton-court/badminton-dimention.webp';

export const badmintonData: ServiceTemplateData = {
  slug: 'badminton-court',
  hero: {
    title: 'Sabaysis Badminton',
    subtitle: 'Professional Indoor & Outdoor Courts',
    description: 'BWF-standard badminton courts featuring high-performance vinyl, PVC, wooden, and acrylic flooring systems.',
    image: badmintonHero,
    badge: 'BWF Standard Facilities'
  },
  about: {
    title: 'World-Class Badminton Infrastructure',
    description: 'Sabaysis Sports offers high-quality indoor flooring for badminton, designed for comfort, safety, and performance. Our floors provide excellent grip and shock absorption to protect athletes. With options like vinyl and wooden flooring, Sabaysis ensures a durable, easy-to-maintain surface that enhances gameplay and creates a professional, safe environment for all players.',
    image: badmintonIndoor,
    imageAlt: 'Badminton court installation',
    features: [
      'BWF Grade 1 & 2 compliant surfacing',
      'Advanced shock absorption technology',
      'Non-glare LED lighting systems',
      'Anti-slip UV resistant coatings',
      'Precision line marking',
      'Optimal vertical deformation control'
    ]
  },
  modelsTitle: 'OUR PRODUCTS',
  modelsDescription: 'Explore our range of premium badminton flooring solutions tailored for every facility.',
  models: [
    {
      id: 'badminton-vinyl',
      name: 'Vinyl Flooring',
      title: 'Vinyl Flooring For Indoor',
      description: "Meckavo's Vinyl Flooring for indoor sports offers a durable, comfortable surface with excellent grip and shock absorption. Ideal for sports like badminton, it provides a safe, professional playing environment.",
      image: badmintonVinyl,
      imageAlt: 'Vinyl badminton flooring',
      specifications: [
        { label: 'Shock Absorbing', value: 'Reduces impact on joints' },
        { label: 'Slip Resistant', value: 'Provides better grip' },
        { label: 'Multi-Purpose', value: 'Suitable for various indoor sports' }
      ],
      applications: ['Indoor Stadiums', 'Clubs', 'Schools']
    },
    {
      id: 'badminton-pvc',
      name: 'PVC Flooring',
      title: 'PVC Flooring Systems',
      description: "Meckavo's PVC Flooring is a top choice for badminton court construction, offering a durable, high-performance surface designed for indoor sports. This BWF-approved flooring ensures safe and confident movement.",
      image: badmintonPVC,
      imageAlt: 'PVC badminton flooring',
      specifications: [
        { label: 'Durability', value: 'Resists wear and tear' },
        { label: 'Shock Absorption', value: 'Reduces injury risks with cushioning' },
        { label: 'Slip Resistance', value: 'Superior grip for safe movement' },
        { label: 'Customizable', value: 'Choose your colour and design' }
      ],
      applications: ['Competitive Facilities', 'Professional Academies']
    },
    {
      id: 'badminton-wooden',
      name: 'Wooden Flooring',
      title: 'Professional Wooden Flooring',
      description: "Meckavo's Wooden Flooring provides a durable and comfortable surface for indoor sports like badminton. It offers excellent shock absorption, reducing injury risks while ensuring a top-tier playing experience.",
      image: badmintonWood,
      imageAlt: 'Wooden badminton court',
      specifications: [
        { label: 'Appearance', value: 'Professional & Elegant' },
        { label: 'Performance', value: 'Top-tier athlete experience' },
        { label: 'Maintenance', value: 'Easy to maintain' }
      ],
      applications: ['Premium Clubs', 'Sports Academies']
    },
    {
      id: 'badminton-acrylic',
      name: 'Acrylic System',
      title: 'Outdoor Acrylic Flooring',
      description: 'A durable, high-performance outdoor flooring solution. Certified by ITF and FIBA, it offers long-lasting durability with a 2.2 mm thickness. UV and water resistant for consistent outdoor play.',
      image: badmintonAcrylic,
      imageAlt: 'Acrylic badminton court',
      specifications: [
        { label: 'Smooth Surface', value: 'Ideal for high-speed games' },
        { label: 'UV Resistant', value: 'No fading or cracking' },
        { label: 'Water Resistant', value: 'Performs well in humid conditions' }
      ],
      applications: ['Outdoor Courts', 'Parks', 'Schools']
    },
    {
      id: 'badminton-interlocking',
      name: 'Interlocking Tiles',
      title: 'Flexible Interlocking Tiles',
      description: "Meckavo's Interlocking Tiles offer a practical, easy-to-install flooring solution for both indoor and outdoor sports courts. Durable and slip-resistant, they provide a stable surface.",
      image: badmintonIndoor, // Using indoor as fallback for interlocking if specific tile image is missing
      imageAlt: 'Interlocking tiles',
      specifications: [
        { label: 'Durability', value: 'Long-lasting and weather-resistant' },
        { label: 'Maintenance', value: 'Minimal upkeep required' },
        { label: 'Performance', value: 'All-weather performance' }
      ],
      applications: ['Multi-sport Parks', 'Temporary Facilities']
    }
  ],
  technicalData: {
    title: 'Badminton Court Dimensions',
    description: 'BWF Standard Court Dimensions for playing areas and required buffer zones.',
    image: badmintonDimension,
    imageAlt: 'Badminton Court Dimension Diagram',
    headers: {
      area: 'Area',
      dimensionsM: 'Dimensions (m)',
      dimensionsFt: 'Dimensions (ft)',
      areaSqft: 'Area (sqft)'
    },
    rows: [
      {
        area: 'Playing Area',
        dimensionsM: '6.1m x 13.4m',
        dimensionsFt: '20ft x 44ft',
        areaSqft: '880 sqft'
      },
      {
        area: 'With Buffer Zone',
        dimensionsM: '7m x 15m',
        dimensionsFt: '23ft x 49ft',
        areaSqft: '1136 sqft'
      },
      {
        area: 'Extended Buffer Zone',
        dimensionsM: '8m x 16m',
        dimensionsFt: '26ft x 52ft',
        areaSqft: '1378 sqft'
      }
    ]
  },
  cta: {
    title: 'Build Your Professional Badminton Court',
    description: 'Contact us for a detailed consultation and customized flooring solution for your facility.',
    buttonText: 'Request Quote',
    buttonLink: '/contact-us?product=Badminton Court'
  }
};
