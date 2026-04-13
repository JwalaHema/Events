import type { BreadCrumbsData } from "../types/BreadcrumbsTypes";

/* VENUE / SEARCH BANNER */
export const venueBreadcrumb: BreadCrumbsData = {
  variant: "search",

  title: "Find the Perfect Wedding Banquet Halls",
  subtitle:
    "Search over 27,000 Banquet Halls with reviews, pricing, availability and more",

  searchPlaceholder1: "Search Wedding Banquet Halls",
  searchPlaceholder2: "Search Wedding Location",
  buttonText: "Search Now",

  backgroundImage: "/images/banner/venue_list_breadcrum.jpg",

  items: [
    {
      link: "/",
      icon: "fa fa-home",
    },
    {
      label: "Venues",
    },
    {
      label: "Banquet Halls",
    },
  ],
};

/* REAL WEDDING BANNER */
export const realWeddingBreadcrumb: BreadCrumbsData = {
  variant: "default",

  title: "Real Wedding List",
  backgroundImage: "/images/banner/breadcrumbs_bg.jpg",

  items: [
    {
      link: "/",
      icon: "fa fa-home",
    },
    {
      label: "Real Wedding List",
    },
  ],
};