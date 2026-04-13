import React from "react";
import type { PricingItem } from "../types/PricingTypes";

interface Props {
  data: PricingItem;
}

const PricingCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="col-md-4">
      <div className={`pricing-table-wrap ${data.isPrimary ? "premium" : ""}`}>
        <h3>{data.title}</h3>

        <div className="plan-price"></div>

        <ul className="list-unstyled">
          {data.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <a
          href="javascript:"
          className={`btn btn-rounded ${
            data.isPrimary ? "btn-primary" : "btn-default"
          }`}
        >
          {data.buttonText}
        </a>
      </div>
    </div>
  );
};

export default PricingCard;