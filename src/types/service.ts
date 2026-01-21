// Service Template Types - Based on Padel Courts Design

export interface ServiceHero {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
}

export interface ServiceAbout {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
}

export interface ServiceModel {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  specifications: {
    label: string;
    value: string;
  }[];
  applications?: string[];
}

export interface ServiceTechnicalData {
  title: string;
  description: string;
  headers: {
    [key: string]: string;
  };
  rows: {
    [key: string]: string;
  }[];
}

export interface ServiceCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ServiceTemplateData {
  slug: string;
  hero: ServiceHero;
  about: ServiceAbout;
  whatIsIt?: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    relatedSports?: string[];
  };
  models?: ServiceModel[];
  modelsTitle?: string;
  modelsDescription?: string;
  technicalData?: ServiceTechnicalData;
  features?: {
    title: string;
    description: string;
  }[];
  cta: ServiceCTA;
}

// Legacy service detail type (for backward compatibility)
export interface ServiceDetailLegacy {
  slug: string;
  bannerTitle: string;
  bannerImage?: string;
  welcomeText: string;
  servicesTitle: string;
  servicesDescription: string;
  features: { title: string; description: string }[];
  whyChooseTitle: string;
  whyChooseItems: { title: string; description: string }[];
  whyChooseOurTitle?: string;
  whyChooseOurItems?: { title: string; description: string }[];
  typesTitle?: string;
  typesItems?: { title: string; description: string }[];
  companyWhyTitle?: string;
  companyWhyItems?: { title: string; description: string }[];
}

export interface ServiceBasic {
  slug: string;
  title: string;
  body: string;
}
