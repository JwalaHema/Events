import React from "react";
import { locationsData } from "../data/LocationsData";

const PopularLocations: React.FC = () => {
  return (
    <section className="wide-tb-120 bg-light-gray">
      <div className="container">
        <div className="section-title text-center">
          <h1>Popular Wedding Locations</h1>
          <p className="fw-6">
            Discover top wedding venues and vendors across India’s most loved cities
          </p>
        </div>

        <div className="row">
          {locationsData.map((item, index) => (
            <div className="col-md-6 col-lg-3 col-xl-4" key={index}>
              
              <div className="popular-locations-alternate">
                
                <div className="overlay-box">
                  <div className="mt-auto">
                    <h3>
                      <a href={item.link}>{item.name}</a>
                      <span>{item.listings}</span>
                    </h3>
                  </div>
                </div>

                <img src={item.image} alt="" className="img-width"/>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;