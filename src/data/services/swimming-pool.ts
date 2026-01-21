import type { ServiceTemplateData } from '@/types/service';
import poolHero from '@/assets/Hero/hero (1).jpg';
import poolAbout from '@/assets/Features/unified (1).jpg';

export const swimmingPoolData: ServiceTemplateData = {
  slug: 'swimming-pool',
  hero: {
    title: 'Sabaysis Pools',
    subtitle: 'Exquisite Design & Construction',
    description: 'Bespoke swimming pool solutions for luxury residences, hotels, and commercial spaces',
    image: poolHero,
    badge: 'Luxury Aquatic Solutions'
  },
  about: {
    title: 'Premier Pool Construction',
    description: 'Sabaysis specializes in the complete design, engineering, and construction of high-end swimming pools. From infinity edges to lap pools, we combine aesthetic beauty with precision engineering and advanced filtration systems to create stunning aquatic environments.',
    image: poolAbout,
    imageAlt: 'Swimming pool construction',
    features: [
      'Custom architectural designs',
      'Advanced filtration systems',
      'Infinity and overflow edges',
      'Energy-efficient heating & cooling',
      'Automated sanitization systems',
      'Premium tiling and finishes'
    ]
  },
  models: [
    {
      id: 'residential-pool',
      name: 'Luxury Residence',
      title: 'Private Residential Oasis',
      description: 'Customized pool designs tailored to fit your home architecture and lifestyle, featuring smart automation and premium finishes.',
      image: poolHero,
      imageAlt: 'Residential swimming pool',
      specifications: [
        { label: 'Type', value: 'Skimmer or Overflow' },
        { label: 'Finishes', value: 'Ceramic Glass Mosaics' },
        { label: 'Equipment', value: 'Smart WiFi Controls' },
        { label: 'Lighting', value: 'Multicolor RGB LEDs' }
      ],
      applications: ['Private Villas', 'Penthouses', 'Boutique Homes']
    },
    {
      id: 'commercial-pool',
      name: 'Olympic / Commercial',
      title: 'Professional & Public Facilities',
      description: 'Heavy-duty pool construction meeting FINA standards for sports clubs, schools, and hospitality sectors.',
      image: poolAbout,
      imageAlt: 'Commercial swimming pool',
      specifications: [
        { label: 'Size', value: 'Custom / Semi-Olympic' },
        { label: 'Filtration', value: 'High-speed sand filters' },
        { label: 'Maintenance', value: 'Commercial Grade Automation' },
        { label: 'Tiles', value: 'Non-slip safety tiles' }
      ],
      applications: ['Hotels & Resorts', 'Sports Academies', 'Condominiums', 'Public Pools']
    }
  ],
  technicalData: {
    title: 'Filtration Performance',
    description: 'We use the latest technology to ensure crystal clear and safe water for every swimmer.',
    headers: {
      feature: 'Feature',
      description: 'Technical Detail',
      advantage: 'Advantage'
    },
    rows: [
      {
        feature: 'Filtration',
        description: 'Diatomaceous Earth / Sand',
        advantage: 'Ultra-clear water quality'
      },
      {
        feature: 'Sanitization',
        description: 'Salt Water Chlorination',
        advantage: 'No skin or eye irritation'
      },
      {
        feature: 'Pumps',
        description: 'Variable Speed Technology',
        advantage: '70% Energy savings'
      },
      {
        feature: 'Structure',
        description: 'Shotcrete / Reinforced Concrete',
        advantage: 'Lifetime durability'
      }
    ]
  },
  cta: {
    title: 'Bring Your Dream Pool to Life',
    description: 'Contact us for a preliminary design consultation and site visit',
    buttonText: 'Request Quote',
    buttonLink: '/contact-us?product=Swimming Pool'
  }
};
