import React from "react";
import PricingCard from "./PricingCard";
import { pricingData } from "../data/PricingData";

const PricingSection: React.FC = () => {
  return (
    <section className="wide-tb-90">
      <div className="container">
        <div className="intro-box">
          <h2>Our Popular Services</h2>
          <p className="desc">
            Explore the most loved categories and trending search terms couples use while booking photographers.
          </p>
        </div>

        <div className="row">
          {pricingData.map((item, index) => (
            <PricingCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;