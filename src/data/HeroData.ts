import type { Option, CategoryIcon, HeroData } from "../types/HeroTypes";

export const categories: Option[] = [
    {
        label: "Wedding Venues",
        value: "venues"
    },
    {
        label: "Photographers",
        value: "photographers"
    },
    {
        label: "Bridal Makeup",
        value: "makeup"
    },
    {
        label: "Decor & Planning",
        value: "decor"
    },
    {
        label: "Catering Services",
        value: "catering"
    },
];

export const locations: Option[] = [
    {
        label: "Hyderabad",
        value: "hyderabad"
    },
    {
        label: "Vijayawada",
        value: "vijayawada"
    },
    {
        label: "Chennai",
        value: "chennai"
    },
    {
        label: "Bengaluru",
        value: "bengaluru"
    },
    {
        label: "Mumbai",
        value: "mumbai"
    },
];

export const distances: Option[] = [
    {
        label: "1-4",
        value: "1-4"
    },
    {
        label: "4-8",
        value: "4-8"
    },
    {
        label: "8-12",
        value: "8-12"
    },
    {
        label: "12-16",
        value: "12-16"
    },
    {
        label: "16-20",
        value: "16-20"
    },
];

export const categoryIcons: CategoryIcon[] = [
    {
        icon: "weddingdir_cake_floor",
        link: "#"
    },
    {
        icon: "weddingdir_fashion",
        link: "#"
    },
    {
        icon: "weddingdir_cup_cakes",
        link: "#"
    },
    {
        icon: "weddingdir_flowers",
        link: "#"
    },
    {
        icon: "weddingdir_music",
        link: "#"
    },
    {
        icon: "fa fa-ellipsis-h",
        link: "#",
        isMore: true
    },
];

export const heroData: HeroData = {
  title: "Find Most Trusted Vendors for All Your Celebrations",
  subtitle: "Explore verified venues, photographers, makeup artists, and more — with genuine reviews, transparent pricing, and real availability.",
};