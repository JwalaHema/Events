import React from "react";
import { categories, locations, distances } from "../data/HeroData";

const SearchBar: React.FC = () => {
  return (
    <div className="form-bg row no-gutters align-items-center">

      <div className="col-12 col-md-4">
        <select className="form-light-select theme-combo home-select-1 select-form">
          <option>Select Vendor Category</option>
          {categories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="col-12 col-md-4">
        <div className="px-2 w-100">
          <select className="form-light-select theme-combo home-select-2 select-form">
            <option>Select Location</option>
            {locations.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-12 col-md-2">
        <div className="pr-2 w-100">
          <select className="form-light-select theme-combo home-select-2 select-form">
            <option>Distance</option>
            {distances.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-12 col-md-2">
        <a href="#" className="btn btn-default text-nowrap btn-block">
          Search Now
        </a>
      </div>

    </div>
  );
};

export default SearchBar;