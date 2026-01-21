import type { ServiceTemplateData } from '@/types/service';
import pickleballHero from '@/assets/Hero/Pickleball.jpg';
import pickleballAbout from '@/assets/Features/unified (1).jpg';
import pickleballModel1 from '@/assets/Features/unified (2).jpg';

export const pickleballData: ServiceTemplateData = {
  slug: 'pickleball-court',
  hero: {
    title: 'Sabaysis Pickleball',
    subtitle: 'Premium Courts & Facilities',
    description: 'Specialized pickleball court construction with professional acrylic surfacing and equipment',
    image: pickleballHero,
    badge: 'Fastest Growing Sport'
  },
  about: {
    title: 'World-Class Pickleball Courts',
    description: 'Sabaysis is at the forefront of the pickleball revolution in India. We provide professional-grade pickleball court construction solutions, including cushioning, multi-layered acrylic surfacing, and tournament-standard accessories.',
    image: pickleballAbout,
    imageAlt: 'Pickleball court surfacing',
    features: [
      'Multi-layered acrylic sports surfacing',
      'Advanced cushion technology for joint safety',
      'UV-resistant color coatings',
      'Anti-glare finishes',
      'Official net and post systems',
      'Precision court marking'
    ]
  },
  whatIsIt: {
    title: 'Why Pickleball?',
    description: 'Pickleball is the fastest-growing sport globally, combining elements of tennis, badminton, and table tennis. It requires less space than a traditional tennis court, making it perfect for residential communities and hotels.',
    image: pickleballModel1,
    imageAlt: 'Pickleball gameplay',
    relatedSports: ['Tennis', 'Badminton', 'Table Tennis']
  },
  models: [
    {
      id: 'pickleball-standard',
      name: 'Standard Hard Court',
      title: 'Professional Acrylic Hard Court',
      description: 'The standard choice for clubs and competition, providing a consistent ball bounce and excellent traction.',
      image: pickleballModel1,
      imageAlt: 'Standard pickleball court',
      specifications: [
        { label: 'Dimensions', value: '20ft × 44ft' },
        { label: 'Surface', value: '3-5 Layer Acrylic system' },
        { label: 'Base', value: 'Asphalt or Concrete' },
        { label: 'Standard', value: 'USAPA compliant' }
      ],
      applications: ['Sports Clubs', 'Schools', 'Public Parks']
    },
    {
      id: 'pickleball-cushion',
      name: 'Pro Cushion Plus',
      title: 'Premium Cushioned Court',
      description: 'Features an additional rubberized layer to absorb impact, reducing player fatigue and preventing injuries.',
      image: pickleballHero,
      imageAlt: 'Cushioned pickleball court',
      specifications: [
        { label: 'Layers', value: '7-9 Layer system' },
        { label: 'Cushion', value: 'SBR Rubber granules' },
        { label: 'Comfort', value: 'High shock absorption' },
        { label: 'Warranty', value: '5-year structural' }
      ],
      applications: ['Private Residencies', 'Luxury Hotels', 'Premium Clubs', 'Senior Communities']
    }
  ],
  technicalData: {
    title: 'Surface Performance',
    description: 'Our acrylic surfaces are engineered for durability and consistent athletic performance.',
    headers: {
      property: 'Property',
      specification: 'Specification',
      benefit: 'Benefit'
    },
    rows: [
      {
        property: 'Friction',
        specification: '0.5 - 0.7 Scale',
        benefit: 'Controlled slide & grip'
      },
      {
        property: 'UV Static',
        specification: 'Grade 8 (High)',
        benefit: 'Fading resistant colors'
      },
      {
        property: 'Permeability',
        specification: 'Non-porous',
        benefit: 'Easy cleaning & maintenance'
      },
      {
        property: 'Thickness',
        specification: '2.5mm - 5.0mm',
        benefit: 'Long-term structural wear'
      }
    ]
  },
  cta: {
    title: 'Install Your Pickleball Court Today',
    description: 'Join the pickleball trend with a professional court from Sabaysis',
    buttonText: 'Get Quote',
    buttonLink: '/contact-us?product=Pickleball Court'
  }
};
