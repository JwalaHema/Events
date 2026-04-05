import React from "react";
import { partnersData } from "../data/PartnersData";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Partners: React.FC = () => {

  // duplicate data to enable infinite loop
  const extendedData = [...partnersData, ...partnersData];

  return (
    <section className="wide-tb-90 bg-light">
      <div className="container">

        {/* Title */}
        <div className="section-title text-center">
          <h1>Our Trusted Partners</h1>
          <p className="fw-6">
            Associated with leading brands that power seamless wedding planning
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5} 
          spaceBetween={20}
          loop={true}
          speed={3000} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false
          }}
          allowTouchMove={false} 
        >
          {extendedData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="partners-slider">
                <img src={item.image} alt="partner" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Partners;