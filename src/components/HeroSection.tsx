import React from "react";
import SearchBar from "./SearchBar";
import FeaturedCategories from "./FeaturedCategories";
import { heroData } from "../data/HeroData";

const HeroSection: React.FC = () => {
  return (
    <section className="slider-wrap style-second">
      <div className="slider-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 mx-auto">

              <h1>{heroData.title}</h1>

              <p className="lead txt-white text-center">
                {heroData.subtitle}
              </p>

              <SearchBar />

              <p className="lead txt-white text-center">
                Or browse featured categories
              </p>

              <FeaturedCategories />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;