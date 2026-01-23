import type { ServiceTemplateData } from '@/types/service';
import poolHero from '@/assets/Hero/hero (1).jpg';
import  about from '@/assets/services/swimming-pool/about.jpg';

const VINYL_POOL_IMG = "https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/vinyle_pool.webp";
const INDOOR_POOL_IMG = "https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/indoor_pool.webp";
const INFINITY_POOL_IMG = "https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/infinity_pool.webp";

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
    description: 'Sabaysis is a leader in designing and constructing world-class swimming pools. We offer expert construction services for high-quality Pool facilities, from design to completion. Our focus is on durability, safety, and top performance.',
    image: about,
    imageAlt: 'Swimming pool construction',
    features: [
      'Residential Pool Services',
      'Commercial Pool Services',
      'Construction Services',
      'Advanced filtration systems',
      'Infinity and overflow edges',
      'Premium tiling and finishes'
    ]
  },
  features: [
    {
      title: 'Residential Pool Services',
      description: 'A swimming pool can provide the perfect getaway for you and your family. Pools are not only a great place to relax and spend time together, but also a wonderful way to stay in shape and enjoy better health.',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Commercial Pool Services',
      description: 'We offer expert commercial pool services, including design, maintenance, and repairs, ensuring a safe and enjoyable experience for your guests.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Construction Services',
      description: 'We offer expert construction services for high-quality Pool facilities, from design to completion. Our focus is on durability, safety, and top performance.',
      image: about
    }
  ],
  modelsTitle: 'Swimming Pool Types',
  modelsDescription: 'Explore our range of swimming pool designs tailored for your space and lifestyle.',
  models: [
    {
      id: 'vinyl-liner-pools',
      name: 'Vinyl Liner Pools',
      title: 'Vinyl Liner Pools',
      description: 'Vinyl liner pools are affordable, customizable, and easy to maintain. They offer a smooth surface for comfort and are available in various colors and patterns. Quick to install, they provide a stylish and cost-effective pool option.',
      image: VINYL_POOL_IMG,
      imageAlt: 'Vinyl Liner Pools',
      specifications: [
        { label: 'Surface', value: 'Smooth Comfort' },
        { label: 'Customization', value: 'High' },
        { label: 'Installation', value: 'Quick' }
      ],
      pricingTable: [
        { label: 'Small (20x10 ft)', value: '₹6–₹10 lakhs' },
        { label: 'Medium (25x12 ft)', value: '₹10–₹15 lakhs' },
        { label: 'Large (50x20 ft)', value: '₹15–₹25 lakhs' }
      ],
      footerText: 'Swimming pool construction costs vary based on size, design, and materials. Additional features like landscaping, heating, or lighting can increase the overall cost.'
    },
    {
      id: 'indoor-pools',
      name: 'Indoor Pools',
      title: 'Indoor Pools',
      description: 'Indoor pools offer year-round swimming, privacy, and temperature control. Customizable to fit any space, they provide a comfortable and luxurious experience regardless of the weather.',
      image: INDOOR_POOL_IMG,
      imageAlt: 'Indoor Pools',
      specifications: [
        { label: 'Usage', value: 'Year-round' },
        { label: 'Control', value: 'Temperature & Privacy' },
        { label: 'Luxury', value: 'High' }
      ],
      pricingTable: [
        { label: 'Small (20x10 ft)', value: '₹15–₹25 lakhs' },
        { label: 'Medium (25x12 ft)', value: '₹25–₹40 lakhs' },
        { label: 'Large (50x20 ft)', value: '₹50 lakhs and above' }
      ],
      footerText: 'Swimming pool construction costs vary based on size, design, and materials. Additional features like landscaping, heating, or lighting can increase the overall cost.'
    },
    {
      id: 'infinity-pools',
      name: 'Infinity Pools',
      title: 'Infinity Pools',
      description: 'Infinity pools are designed to blend seamlessly with the surroundings, creating a breathtaking visual effect. They offer a sleek, modern aesthetic and are ideal for enhancing scenic landscapes.',
      image: INFINITY_POOL_IMG,
      imageAlt: 'Infinity Pools',
      specifications: [
        { label: 'Aesthetic', value: 'Seamless Blend' },
        { label: 'Design', value: 'Sleek & Modern' },
        { label: 'Ideal for', value: 'Scenic Landscapes' }
      ],
      pricingTable: [
        { label: 'Small (20x10 ft)', value: '₹20–₹30 lakhs' },
        { label: 'Medium (25x12 ft)', value: '₹30–₹50 lakhs' },
        { label: 'Large (50x20 ft)', value: '₹50 lakhs and above' }
      ],
      footerText: 'Swimming pool construction costs vary based on size, design, and materials. Additional features like landscaping, heating, or lighting can increase the overall cost.'
    }
  ],
  technicalData: {
    title: 'Filtration & Construction Standards',
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
  accordion: {
    title: 'Service and Repair',
    subtitle: 'service',
    items: [
      {
        title: 'Repairs',
        description: 'Our pool repair services handle everything from leak repairs to valve replacements and pump malfunctions, ensuring your pool runs smoothly. Meckavo sports is a phone call away for all types of pool repair services. We repair all pool equipment and accessories including pool heaters, pumps, filters and salt systems. Our staff has the expertise to handle minor repairs to major ones.',
        images: [
          'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_image_1.webp',
          'https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_image_2.webp'
        ]
      },
      {
        title: 'Pumps and Motors',
        description: 'Pumps and motors for swimming pools are complex systems that occasionally malfunction. The pump or motor probably needs maintenance if it is generating an odd noise or is louder than usual. Our professionals are skilled in identifying and promptly repairing issues with the pumps and motors.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_pumps_and_motors.webp']
      },
      {
        title: 'Leaks',
        description: 'A leaky pool shouldn\'t cause your water bill to skyrocket. Contact us immediately if you think there may be a leak in your pool. Repairing a leak before it worsens is the best course of action. Water can be a harmful force, thus we will give these problems our highest attention.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_leak.webp']
      },
      {
        title: 'Heat Pumps',
        description: 'For pool heat pumps to remain in good working order, maintenance is required. Our professionals can assist if your heat pump isn\'t turning on or doesn\'t appear to be heating the water. We will inspect all heat pump models and manufactures so that we can suggest the best course of action.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_heat_pump.webp']
      },
      {
        title: 'Renovations',
        description: 'We are experts at all types of pool renovation, including remodels, repairs, and improvements. If it’s time for a major pool upgradation, give us a call! We’ve done everything from straightforward re-plastering jobs to extensive pool expansions. Contact us to schedule a site visit for necessary preliminary recommendations.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_rennovation.webp']
      },
      {
        title: 'Equipment Installation',
        description: 'Does your pool require a new heat pump to be installed? Should you require any installation services, Meckavo Sports will be pleased to assist. We can assist with anything from controllers to cleaners!',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_equipment_installation.webp']
      },
      {
        title: 'Automatic Controllers',
        description: 'Automation is very convenient, and a pool controller allows you to operate your pool from a distance. From your tablet, smartphone, or desktop computer, you can keep an eye on everything including the heater, filter pump, pool cleaning, and temperature.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_automatic_controllers.webp']
      },
      {
        title: 'Salt Chlorinator Systems',
        description: 'We specialize in installing salt chlorinator systems for pools, offering a more eco-friendly and low-maintenance solution for water sanitization. Enjoy crystal-clear water with minimal effort.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_salt_chlorinator_systems.webp']
      },
      {
        title: 'Filtration Equipment',
        description: 'We install reliable filtration equipment to keep your pool water clean and clear. Let us help maintain the perfect swimming environment for you.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_filter_equipment.webp']
      },
      {
        title: 'Interior Pool Surface',
        description: 'We specialize in installing high-quality interior pool surfaces that provide a smooth, durable finish. Most common surfaces are Glass Mosaic or Ceramic Tile, normally used for large sized commercial pools or Olympic size pools.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_interior_pool_surface.webp']
      },
      {
        title: 'Pressure Wash',
        description: 'Meckavo offers expert pressure washing services for swimming pools, removing dirt, stains, and algae to keep your pool surfaces spotless. Pool deck power washing should be performed periodically to remove marks left by foot traffic or debris.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_pressure_wash.webp']
      },
      {
        title: 'Pool Tile',
        description: 'Customize the look and feel of your pool with quality tiles and coping. From modern glass tile and durable ceramic tile to natural stone coping, we use the highest quality materials to complement any pool style.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_pool_tile.webp']
      },
      {
        title: 'Pool Tile Cleaning',
        description: 'Meckavo provides professional pool tile cleaning services, effectively removing buildup, stains, and grime from your tiles. Our thorough cleaning restores the sparkle and ensures your pool area remains clean and inviting.',
        images: ['https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/images/product_swimming_pool/swimming_pool_repair_service_pool_tile_cleaning.webp']
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
