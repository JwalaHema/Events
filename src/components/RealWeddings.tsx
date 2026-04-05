import React from "react";
import { realWeddingsData } from "../data/RealWeddingsData";

const RealWeddings: React.FC = () => {
  return (
    <section className="wide-tb-120">
      <div className="container">

        <div className="section-title text-center">
          <h1>Real Weddings</h1>
          <p className="fw-6">Beautiful love stories from couples across India</p>
        </div>

        <div className="row">
          {realWeddingsData.map((item, index) => (
            <div className={`col-lg-4 col-md-6 ${index === 2 ? "mx-auto" : ""}`} key={index}>
              <div className="real-wedding-wrap top-heading">

                <div className="real-wedding">

                  {/* HEAD */}
                  <div className="head">
                    <h3>
                      <a href={item.link}>{item.title}</a>
                    </h3>
                    <p>
                      <i className="fa fa-map-marker"></i> {item.location}
                    </p>
                  </div>

                  {/* MAIN IMAGE */}
                  <div className="img">
                    <div className="overlay">
                      <i className="weddingdir_heart_double_alt"></i>
                      Our Story
                    </div>

                    <a href={item.link}>
                      <img src={item.mainImage} alt={item.title} />
                    </a>

                    <div className="date">{item.date}</div>
                  </div>

                  {/* GALLERY */}
                  <ul className="list-unstyled gallery">
                    {item.gallery.map((img, i) => (
                      <li key={i}>
                        <a href={item.link}>
                          {i === 2 && (
                            <div className="load-more">
                              Load <br /> More
                            </div>
                          )}
                          <img src={img} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <button className="btn btn-default btn-rounded btn-lg">
            View More Real Weddings
          </button>
        </div>

      </div>
    </section>
  );
};

export default RealWeddings;