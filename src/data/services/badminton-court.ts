import type { ServiceTemplateData } from '@/types/service';
import badmintonHero from '@/assets/Unified S/batminton.jpg';
import badmintonWood from '@/assets/Features/unified (2).jpg';
import badmintonPVC from '@/assets/Features/unified (3).jpg';

export const badmintonData: ServiceTemplateData = {
  slug: 'badminton-court',
  hero: {
    title: 'Sabaysis Badminton',
    subtitle: 'Professional Indoor Courts',
    description: 'BWF-standard badminton courts featuring high-performance wooden and PVC flooring systems.',
    image: badmintonHero,
    badge: 'BWF Standard Facilities'
  },
  about: {
    title: 'World-Class Badminton Infrastructure',
    description: 'Sabaysis specializes in constructing premium badminton courts that meet the rigorous standards of the Badminton World Federation (BWF). Our courts are designed to provide optimal playability, consistent shuttle bounce, and superior shock absorption for both recreational and professional play.',
    image: badmintonHero,
    imageAlt: 'Badminton court installation',
    features: [
      'BWF Grade 1 & 2 compliant surfacing',
      'Advanced shock absorption technology',
      'Non-glare LED lighting systems (up to 1000 Lux)',
      'Anti-slip UV resistant coatings',
      'Precision thermal-bonded line marking',
      'Optimal vertical deformation control'
    ]
  },
  whatIsIt: {
    title: 'The Perfect Playing Surface',
    description: 'A professional badminton court requires a minimum ceiling height of 9 meters and specialized flooring that protects players joints while maintaining shuttlecock speed. Our systems are engineered for the extreme climates of Dubai and the high standards of Europe.',
    image: badmintonWood,
    imageAlt: 'Professional badminton flooring',
    relatedSports: ['Badminton', 'Tennis', 'Squash']
  },
  models: [
    {
      id: 'badminton-pro-wood',
      name: 'Pro Wood Series',
      title: 'Solid Hardwood Flooring System',
      description: 'The "Gold Standard" for international tournaments, featuring premium beech or maple wood with area-elastic performance.',
      image: badmintonWood,
      imageAlt: 'Hardwood badminton court',
      specifications: [
        { label: 'Material', value: 'BWF Certified Solid Hardwood' },
        { label: 'Shock Absorption', value: '55% - 65% (EN 14904)' },
        { label: 'Friction', value: '0.4 - 0.6 (Standard)' },
        { label: 'Refinishing', value: 'Multiple sand & seal cycles' }
      ],
      applications: ['Stadiums', 'Professional Academies', 'Premium Clubs']
    },
    {
      id: 'badminton-elite-pvc',
      name: 'Elite PVC Series',
      title: 'High-Density Synthetic Surfacing',
      description: 'The preferred choice for multi-sport halls and training centers, offering excellent traction and easy maintenance.',
      image: badmintonPVC,
      imageAlt: 'PVC badminton court surfacing',
      specifications: [
        { label: 'Thickness', value: '4.5mm - 7.0mm' },
        { label: 'Structure', value: 'Multi-layer with fiberglass stable layer' },
        { label: 'Surface', value: 'Embossed honeycomb pattern' },
        { label: 'Installation', value: 'Portable or Permanent' }
      ],
      applications: ['Schools', 'Community Centers', 'Sports Clubs']
    }
  ],
  technicalData: {
    title: 'Performance Evaluation',
    description: 'Our courts are tested against international EN 14904 standards to ensure athlete safety and performance consistency.',
    headers: {
      parameter: 'Parameter',
      standard: 'BWF/EN Standard',
      performance: 'Sabaysis Result'
    },
    rows: [
      {
        parameter: 'Shock Absorption',
        standard: 'Min 45%',
        performance: '58% - 62%'
      },
      {
        parameter: 'Vertical Deformation',
        standard: '2.3mm - 5.0mm',
        performance: '3.1mm'
      },
      {
        parameter: 'Surface Friction',
        standard: '80 - 110',
        performance: '92'
      },
      {
        parameter: 'Ball Rebound',
        standard: 'Min 90%',
        performance: '96%'
      }
    ]
  },
  cta: {
    title: 'Build Your Professional Court',
    description: 'Get a BWF-standard court consultation from our infra experts.',
    buttonText: 'Request Quote',
    buttonLink: '/contact-us?product=Badminton Court'
  }
};
