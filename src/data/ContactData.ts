import type { ContactSectionData } from "../types/ContactTypes";

export const contactData: ContactSectionData = {
  heading: "Our Personal Wedding Planner",
  subHeading: "Making Weddings Beautiful & Stress-Free",
  description:
    "Explore inspiration, compare vendors, plan events, and craft the unforgettable celebration you dream of.",

  cards: [
    {
      type: "team",
      title: "Talk To Our Team",
      description: "Need help or guidance? Get in touch with us anytime.",
      subBlocks: [
        {
          title: "Vendors",
          icon: "fa-solid fa-envelope",
          email: "vendors@gmail.com",
          phone: "+91 90000 00001",
        },
        {
          title: "Users",
          icon: "fa-solid fa-envelope",
          email: "support@gmail.com",
          phone: "+91 90000 00002",
        },
      ],
      buttonText: "Request a Call Back",
    },

    {
      type: "office",
      title: "Find Our Office",
      description: "Visit us for consultations, demos & assistance.",
      address:
        "India, Hyderabad, Kavadiguda\n100ft Road, Gandhi Nagar\n500080",
      buttonText: "View on Map",
    },

    {
      type: "subscribe",
      title: "Stay Updated",
      description: "Get wedding ideas, tips & inspiration via email.",
      inputPlaceholder: "Enter Your Email",
      buttonText: "Subscribe",
    },

    {
      type: "vendor",
      title: "Grow With Us",
      description: "Join as a vendor & reach thousands of couples.",
      buttonText: "Register as Vendor",
      socialIcons: [
        "fa-brands fa-facebook-f",
        "fa-brands fa-twitter",
        "fa-brands fa-instagram",
        "fa-brands fa-pinterest",
        "fa-brands fa-youtube",
      ],
    },
  ],
};