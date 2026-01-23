import type { ServiceTemplateData } from '@/types/service';
import tennisHero from '@/assets/services/tennis-court/tennis.png';
import tennisAbout from '@/assets/Unified S/batminton.jpg';
import tennisHard from '@/assets/Features/unified (2).jpg';
import tennisClay from '@/assets/services/tennis-court/red.jpg';
// import tennisFinal from '@/assets/services/tennis-court/final-tennis.gif';
import redClay from '@/assets/services/tennis-court/red.jpg';
import acrylic from '@/assets/services/tennis-court/acrylic.jpg';
import total from '@/assets/services/tennis-court/total.jpg';


export const tennisData: ServiceTemplateData = {
  slug: 'tennis-court',
  hero: {
    title: 'Sabaysis Tennis',
    subtitle: 'ITF Rated Performance',
    description: 'Premier tennis court construction featuring world-class surfaces from acrylic hard courts to hybrid clay.',
    image: tennisHero,
    badge: 'ITF Certified Surfaces'
  },
  about: {
    title: 'Professional Tennis Enclosures',
    description: "Discover the difference with Sabaysis, India’s leading provider of high-performance tennis court construction material. Our commitment to quality and endurance is evident in every square inch of our premium surfaces, ensuring each game is played on a foundation built to last. With Sabaysis, you’re not just investing in a tennis court; you’re investing in a legacy of durability, innovation, and unparalleled playability.",
    image: tennisAbout,
    imageAlt: 'Tennis court construction process',
    features: [
      'ITF Court Pace Classified surfaces',
      'Advanced multi-layer acrylic systems',
      'Anti-corrosive galvanized fencing',
      'Glare-free LED stadium lighting',
      'Precision laser-leveled sub-bases',
      'All-weather surfacing technology'
    ]
  },
  whyChooseUs: {
    title: 'Why Choose Synthetic Acrylic Flooring',
    description: "When you pick Sabaysis, you’re not just getting a tennis court flooring; you’re getting a promise. A promise of endurance, quality, and a playing surface that keeps pace with your passion. Our tennis court materials are easy to maintain, which means you can spend more time playing and less time worrying about upkeep. We pride ourselves on being the best tennis court flooring manufacturer that helps create spaces where memories are made and the game is always enjoyed.",
    image: tennisHard,
    features: [
      { 
        title: 'Industry-Leading Expertise', 
        icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Technology.webp' 
      },
      { 
        title: 'Customized Solutions', 
        icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Handcraft.webp' 
      },
      { 
        title: 'Commitment to Quality', 
        icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Trust.webp' 
      },
      { 
        title: 'Expert Craftsmanship', 
        icon: 'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_basketball_court/basketball/logo/Expert_Craftsmanship.webp' 
      }
    ]
  },
  whatIsIt: {
    title: 'Total Court Infrastructure',
    description: 'A premium tennis facility is more than just a surface. It requires a 102ft x 51ft footprint, professional-grade tennis posts, and a minimum 6.4m baseline run-off. We provide turnkey solutions including excavation, drainage, and surfacing.',
    image: total,
    imageAlt: 'Hard court tennis facility',
    relatedSports: ['Tennis', 'Padel', 'Pickleball']
  },
  models: [
    {
      id: 'tennis-pro-hard',
      name: 'Pro Hard Court',
      title: 'Acrylic Cushion System',
      description: 'The preferred choice for the Australian and US Open, providing consistent pace and excellent traction.',
      image: acrylic,
      imageAlt: 'Acrylic tennis court',
      specifications: [
        { label: 'Surface', value: '7-9 Layer Acrylic' },
        { label: 'Pace Rating', value: 'ITF Category 3 (Medium)' },
        { label: 'Comfort', value: '3mm Rubberized Cushion' },
        { label: 'Maintenance', value: 'Low maintenance wash-down' }
      ],
      applications: ['Tennis Clubs', 'Private Residences', 'Resorts']
    },
    {
      id: 'tennis-hybrid-clay',
      name: 'Elite Hybrid Clay',
      title: 'Performance Red Clay System',
      description: 'A modern take on traditional clay, offering the same sliding characteristics with significantly less maintenance.',
      image: redClay,
      imageAlt: 'Clay tennis court',
      specifications: [
        { label: 'Surface', value: 'EPDM/Ceramic Infill Clay' },
        { label: 'Pace Rating', value: 'ITF Category 1 (Slow)' },
        { label: 'Drainage', value: 'Permeable multi-layer base' },
        { label: 'Playability', value: '95% Standard clay slide' }
      ],
      applications: ['Professional Academies', 'Specialized Clubs', 'Private Estates']
    }
  ],
  subBase: {
    title: 'Court Construction Stages',
    subtitle: 'Foundation & Infrastructure (Guidance only - consult for definitive specs)',
    items: [
      {
        title: 'Formation & Sub-grade',
        description: 'The first stage involves removing topsoil to eliminate organic matter and compacting/leveling the ground to provide a flat, stable sub-grade.',
        image: tennisAbout,
        pros: ['Eliminates unstable organic matter', 'Provides level foundation', 'Ensures structural integrity'],
        cons: ['Requires professional excavation', 'Weather dependent stage']
      },
      {
        title: 'Geotextile Membrane',
        description: 'A woven or fleecy PE membrane is laid to segregate the formation from the foundation, preserving porosity and blocking root growth.',
        image: tennisHard,
        pros: ['Prevents foundation contamination', 'Distributes load evenly', 'Blocks invasive root growth'],
        cons: ['Must be high-quality material', 'Requires precise laying']
      },
      {
        title: 'Foundation Layer',
        description: 'A ~150mm thick layer of non-frost susceptible aggregate (14mm-28mm) that allows water to drain while remaining stable and level.',
        image: tennisClay,
        pros: ['Frost damage resistance', 'Excellent drainage properties', 'Stable platform for surfacing'],
        cons: ['Material depth is critical', 'Needs thorough compaction']
      }
    ]
  },
  accordion: {
    title: 'Surface-Specific Construction',
    subtitle: 'Detailed breakdown of how different tennis surfaces are constructed',
    items: [
      {
        title: 'Acrylic Court Construction',
        description: 'The base is normally concrete or asphalt. Construction includes a 150-200mm foundation, 35-40mm base course asphalt, and 25-30mm wearing course asphalt, followed by multiple acrylic coatings.',
        images: [acrylic]
      },
      {
        title: 'Artificial Grass & Artificial Clay',
        description: 'Requires a porous base of concrete or asphalt. Typical layers: 150mm foundation, 40mm porous asphalt base, 25mm open-grade aggregate, and sand-filled artificial grass carpet.',
        images: [tennisAbout]
      },
      {
        title: 'Carpet & Polymeric Surfaces',
        description: 'Constructed with a 200mm foundation, 40mm porous asphalt, and 25mm dense asphalt wearing course. The polymeric carpet or rubber mat is then cast in situ or laid from rolls.',
        images: [tennisAbout]
      },
      {
        title: 'Natural Clay Court',
        description: 'Features a deep foundation (120-600mm) with specific layers of graded aggregate (60-100mm), crushed aggregate (40-50mm), and fine crushed aggregate (3-6mm) to support capillary action.',
        images: [tennisAbout]
      },
      {
        title: 'Professional Grass Court',
        description: 'The most technical construction involving perforated drainage pipes, permeable backfill, a blinding layer, and 100-150mm of specialized root zone soil before the turf layer.',
        images: [tennisAbout]
      }
    ]
  },
  technicalData: {
    title: 'Surface Comparison Matrix',
    description: 'Technical data evaluating surface durability and pace ratings.',
    headers: {
      type: 'Surface Type',
      pace: 'ITF Pace Rating',
      life: 'Service Life',
      maintenance: 'Maintenance Level'
    },
    rows: [
      {
        type: 'Acrylic Hard Court',
        pace: 'Category 3 (Medium)',
        life: '10 - 12 Years',
        maintenance: 'Low'
      },
      {
        type: 'Hybrid Clay',
        pace: 'Category 1 (Slow)',
        life: '12 - 15 Years',
        maintenance: 'Medium'
      },
      {
        type: 'Artificial Grass',
        pace: 'Category 4 (Fast)',
        life: '7 - 10 Years',
        maintenance: 'Medium'
      },
      {
        type: 'Professional Cushion',
        pace: 'Category 2 (Med-Slow)',
        life: '10+ Years',
        maintenance: 'Low'
      }
    ]
  },
  cta: {
    title: 'Build Your Grand Slam Court',
    description: 'Expert tennis court design and installation services.',
    buttonText: 'Get a Quote',
    buttonLink: '/contact-us?product=Tennis Court'
  }
};

