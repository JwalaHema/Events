export type BreadcrumbItem = {
  link?: string;
  icon?: string;
  label?: string;
};

export type BreadcrumbData = {
  title: string;
  items: BreadcrumbItem[];
  backgroundImage?: string;
};