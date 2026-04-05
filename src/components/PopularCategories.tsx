import React from "react";
import { categoriesData } from "../data/CategoriesData";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const PopularCategories: React.FC = () => {
  return (
    <section className="wide-tb-120">
      <div className="container">
        <div className="section-title text-center">
          <h1>Popular Wedding Categories</h1>
          <p className="fw-6">
            Browse trusted vendors across India for venues, photography, bridal fashion, décor and more.
          </p>
        </div>

        {/* KEEPING SAME CLASSES */}
        <div className="owl-carousel owl-theme dots-black" id="slider-categories">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {categoriesData.map((item, index) => (
              <SwiperSlide key={index}>
                
                {/* SAME CLASS STRUCTURE */}
                <div className="item">
                  <div className="popular-categories">
                    
                    <img src={item.image} alt="" className="img-width"/>

                    <div className="content-wrap">
                      <div className="content">
                        <div className="mt-auto d-flex align-items-center w-100 justify-content-between">
                          
                          <div className="catlinks">
                            <a href={item.link}>
                              <h3>{item.title}</h3>
                            </a>
                            <a href="#">
                              <span className="count-listings">{item.vendors}</span>
                            </a>
                          </div>

                          <a href="#" className="icon">
                            <i className={item.icon}></i>
                          </a>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default PopularCategories;