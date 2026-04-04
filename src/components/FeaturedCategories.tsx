import React from "react";
import { categoryIcons } from "../data/HeroData";

const FeaturedCategories: React.FC = () => {
  return (
    <div className="slider-category">
      {categoryIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={item.isMore ? "more-icon" : ""}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default FeaturedCategories;