import padelHero from '@/assets/pedel/padelHero.jpg';
import padelAboutImg from '@/assets/pedel/padelAbout.jpg';
import padelCourtInfoImg from '@/assets/pedel/padelCourtInfo.jpg';
import padelClassicImg from '@/assets/pedel/padel-classic.jpg';
import padelScenicImg from '@/assets/pedel/padel-scenic.jpg';
import padelScenicProImg from '@/assets/pedel/padel-scenic-pro.jpg';
import padelSuperScenicImg from '@/assets/pedel/padel-super-scenic.jpg';
import padelKidsScenicImg from '@/assets/pedel/padel-kids-scenic.jpg';
import type { ServiceTemplateData } from '@/types/service';

export interface PadelCourtModel {
  id: string;
  name: string;
  title: string;
  courtSize: string;
  structure: string;
  glass: string;
  turf: string;
  lighting: string;
  frameColour: string;
  description: string;
  applications: string[];
  features?: string[];
  image?: string;
  imageAlt?: string;
}

export interface WindPressureData {
  height: string;
  windSpeed: string;
  absorption: string;
}

export const padelHeroImage = {
  image: padelHero, 
  alt: "Sabaysis Padel Courts"
};

export const padelAbout = {
  title: "ABOUT SABAYSIS PADEL",
  description: `Sabaysis is an Indian manufacturer of premium padel courts, delivering turnkey padel court solutions across India and internationally. Sabaysis follows International Padel Federation (FIP) regulations and globally accepted standards in design, engineering, and manufacturing.

With a dedicated in-house design and engineering team, Sabaysis provides end-to-end solutions including 3D court designs, architectural renderings, manufacturing, installation, and logistics. All raw materials and finished products are certified and tested according to international norms. The brand philosophy focuses on quality, durability, innovation, and long-term performance, ensuring excellence in manufacturing and after-sales support.`,
  image: padelAboutImg,
  imageAlt: "Sabaysis Padel Manufacturing"
};

export const padelCourtInfo = {
  title: "SABAYSIS PADEL COURT",
  description: `Padel is a fast-paced racket sport combining elements of tennis, squash, and badminton, played on an enclosed court with walls. Sabaysis padel courts are manufactured according to international standards followed by the World Padel Tour and International Padel Federation.

Sabaysis offers padel courts suitable for sports clubs, academies, rooftops, hills, waterfronts, and floating installations, delivering customized solutions for every location.`,
  image: padelCourtInfoImg,
  imageAlt: "Padel Court Game"
};

export const padelCourtModels: PadelCourtModel[] = [
  {
    id: "padel-classic",
    name: "Classic",
    title: "SABAYSIS PADEL CLASSIC",
    courtSize: "20 × 10 m",
    structure: "80 × 80 × 2 mm",
    glass: "12 mm tempered glass (optional 10 / 12 / 16 mm)",
    turf: "Sabaysis Padel Pro 12 (WPT compliant), 12 mm pile height",
    lighting: "8 × 200 W LED floodlights",
    frameColour: "RAL colours",
    description: "The Sabaysis Padel Classic court offers a dynamic and competitive playing experience, where glass walls form an essential part of gameplay. It is ideal for recreational and professional use.",
    applications: [
      "Sports clubs",
      "Fitness centers",
      "Residential communities",
      "Schools & universities",
      "Corporate events and team-building activities"
    ],
    image: padelClassicImg,
    imageAlt: "Sabaysis Padel Classic Court"
  },
  {
    id: "padel-scenic",
    name: "Scenic",
    title: "SABAYSIS PADEL SCENIC",
    courtSize: "20 × 10 m",
    structure: "80 × 80 × 2 mm",
    glass: "12 mm tempered glass (optional 10 / 12 / 16 mm)",
    turf: "Sabaysis Padel Pro 12 (WPT compliant)",
    lighting: "8 × 200 W LED floodlights",
    frameColour: "RAL colours",
    description: "Sabaysis Padel Scenic courts enhance the playing experience with premium finishes, improved lighting, and visually attractive surroundings, making them ideal for high-end and landmark locations.",
    applications: [
      "Private villas",
      "Luxury hotels",
      "Commercial developments",
      "Residential communities",
      "Waterfront projects and urban parks"
    ],
    image: padelScenicImg,
    imageAlt: "Sabaysis Padel Scenic Court"
  },
  {
    id: "padel-scenic-pro",
    name: "Scenic Pro",
    title: "SABAYSIS PADEL SCENIC PRO",
    courtSize: "20 × 10 m",
    structure: "80 × 80 × 2 mm",
    glass: "12 mm tempered glass (optional 10 / 12 / 16 mm)",
    turf: "Sabaysis Padel Pro 12 (WPT compliant)",
    lighting: "8 × 200 W LED floodlights with electrical protection",
    frameColour: "RAL colours",
    description: "The Scenic Pro model provides a panoramic viewing experience, making it suitable for professional play, broadcasting, and premium clubs. Enhanced visibility improves safety and spectator engagement.",
    applications: [
      "Recreational centers",
      "Sports clubs",
      "Residential communities",
      "Corporate events",
      "Private properties"
    ],
    image: padelScenicProImg,
    imageAlt: "Sabaysis Padel Scenic Pro Court"
  },
  {
    id: "padel-super-scenic",
    name: "Super Scenic",
    title: "SABAYSIS PADEL SUPER SCENIC",
    courtSize: "20 × 10 m",
    structure: "80 × 80 × 2 mm",
    glass: "12 mm tempered glass (optional 10 / 12 / 16 mm)",
    turf: "Sabaysis Padel Pro 12 (WPT compliant)",
    lighting: "8 × 200 W LED floodlights",
    frameColour: "RAL colours",
    description: "The Super Scenic model features a full panoramic design, offering clear visibility of the entire court and players, enhancing spectator experience and overall game atmosphere.",
    applications: [
      "Luxury hotels",
      "Private villas",
      "Commercial communities",
      "Waterfront developments",
      "Urban parks"
    ],
    image: padelSuperScenicImg,
    imageAlt: "Sabaysis Padel Super Scenic Court"
  },
  {
    id: "padel-kids-scenic",
    name: "Kid's Scenic",
    title: "SABAYSIS PADEL KID'S SCENIC",
    courtSize: "10 × 6 m",
    structure: "80 × 80 × 2 mm",
    glass: "12 mm tempered glass (optional 10 / 12 / 16 mm)",
    turf: "Sabaysis Padel Pro 12 (WPT compliant)",
    lighting: "8 × 200 W LED floodlights",
    frameColour: "RAL colours",
    description: "The Kid's Scenic court is specially designed for children, featuring a smaller court size and safer play conditions to support early skill development and enjoyment.",
    applications: [
      "Schools",
      "Community parks",
      "Sports training academies",
      "Residential societies"
    ],
    image: padelKidsScenicImg,
    imageAlt: "Sabaysis Padel Kid's Scenic Court"
  }
];

export const windPressureValues: WindPressureData[] = [
  {
    height: "0–8",
    windSpeed: "28",
    absorption: "0.5"
  },
  {
    height: "9–20",
    windSpeed: "36",
    absorption: "0.8"
  },
  {
    height: "21–100",
    windSpeed: "42",
    absorption: "1.1"
  },
  {
    height: ">100",
    windSpeed: "46",
    absorption: "1.3"
  }
];

export const windPressureInfo = {
  title: "WIND PRESSURE VALUES IN DIFFERENT HEIGHT",
  description: "Wind pressure values are considered for Sabaysis padel courts installed on rooftops, hills, coastal areas, and floating or elevated structures to ensure safety and structural integrity.",
  headers: {
    height: "Height from Ground (m)",
    windSpeed: "Wind Speed V (m/s)",
    absorption: "Absorption q (kN/m²)"
  }
};

export const padelFeatures = [
  "International Padel Federation (FIP) compliant",
  "World Padel Tour (WPT) standards",
  "Turnkey solutions with 3D design & rendering",
  "Certified materials & testing",
  "Suitable for rooftops, hills, waterfronts & floating installations",
  "In-house design and engineering team",
  "End-to-end installation & logistics support",
  "Premium quality with long-term durability"
];

export const padelData: ServiceTemplateData = {
  slug: 'padel-court',
  hero: {
    title: 'Sabaysis Padel',
    subtitle: 'World-Class Courts',
    description: 'International Padel Federation compliant courts manufactured with premium materials and precision engineering.',
    image: padelHero,
    badge: 'Premium Padel Courts'
  },
  about: {
    title: padelAbout.title,
    description: padelAbout.description,
    image: padelAbout.image,
    imageAlt: padelAbout.imageAlt,
    features: padelFeatures
  },
  whatIsIt: {
    title: padelCourtInfo.title,
    description: padelCourtInfo.description,
    image: padelCourtInfo.image,
    imageAlt: padelCourtInfo.imageAlt,
    relatedSports: ['Tennis', 'Squash', 'Badminton']
  },
  models: padelCourtModels.map(model => ({
    id: model.id,
    name: model.name,
    title: model.title,
    description: model.description,
    image: model.image || '',
    imageAlt: model.imageAlt || '',
    specifications: [
      { label: "Court Size", value: model.courtSize },
      { label: "Structure", value: model.structure },
      { label: "Glass", value: model.glass },
      { label: "Turf", value: model.turf },
      { label: "Lighting", value: model.lighting }
    ],
    applications: model.applications
  })),
  technicalData: {
    title: windPressureInfo.title,
    description: windPressureInfo.description,
    headers: windPressureInfo.headers,
    rows: (windPressureValues as unknown as Record<string, string>[])
  },
  cta: {
    title: "Ready to Build Your Padel Court?",
    description: "Contact our expert team for consultation and site visit.",
    buttonText: "Get in Touch",
    buttonLink: '/contact-us?product=Padel Court'
  }
};
