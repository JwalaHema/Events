export type BreadCrumbItem = {
  label?: string;
  link?: string;
  icon?: string;
};

export type BreadCrumbsData = {
  variant?: "default" | "search";

  title: string;
  items: BreadCrumbItem[];

  backgroundImage?: string;

  // 🔽 Only for search banner
  subtitle?: string;
  searchPlaceholder1?: string;
  searchPlaceholder2?: string;
  buttonText?: string;
};