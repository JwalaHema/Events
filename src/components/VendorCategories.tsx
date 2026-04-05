import React from "react";
import { vendorData } from "../data/VendorData";

const VendorCategories: React.FC = () => {
  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>All Vendor Categories</h1>
          <p className="fw-6">Your trusted partners across every category</p>
        </div>

        <div className="vc-grid">
          {vendorData.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className={`${item.isWide ? "vc-item wide" : ""}`}
              style={{ gridArea: item.gridArea }}
            >
              {!item.isWide && (
                <div className="vc-item" style={{ gridArea: item.gridArea }}>
                  <img src={item.image} alt={item.name} />
                  <div className="vc-label">{item.name}</div>
                </div>
              )}

              {item.isWide && (
                <>
                  <img src={item.image} alt={item.name} />
                  <div className="vc-label">{item.name}</div>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorCategories;