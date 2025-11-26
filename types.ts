export type Language = 'ar' | 'en';

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContentData {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    quote: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    learnMore: string;
  };
  stats: StatItem[];
  about: {
    title: string;
    slogan: string;
    whoWeAreTitle: string;
    whoWeAreText: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    addressTitle: string;
    address: string;
    phoneTitle: string;
    phones: string[];
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    linksTitle: string;
    contactTitle: string;
    rights: string;
  };
}