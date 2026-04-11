export type ContactSubBlock = {
  title: string;
  icon?: string;
  email?: string;
  phone?: string;
};

export type ContactCard = {
  title: string;
  description: string;

  type: "team" | "office" | "subscribe" | "vendor";

  subBlocks?: ContactSubBlock[];

  address?: string;

  buttonText?: string;

  inputPlaceholder?: string;

  socialIcons?: string[];
};

export type ContactSectionData = {
  heading: string;
  subHeading: string;
  description: string;
  cards: ContactCard[];
};