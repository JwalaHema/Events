import React from "react";
import { blogsData } from "../data/BlogsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// ✅ MUST ADD THIS
import "swiper/css";

const Blogs: React.FC = () => {

  // ✅ duplicate data (VERY IMPORTANT)
  const extendedData = [...blogsData, ...blogsData];

  return (
    <section className="rr-project-slider-area pt-5 rr-project-slider-bg p-relative fix section_one">
      <div className="container-fluid">

        <div className="section-title text-center">
          <h1>Latest Blogs</h1>
          <p className="fw-6">Freash inspiration and trending ideas from Indian weddings</p>
        </div>

        <div className="swiper-container rr-project-active">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={60}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            {extendedData.map((blog, index) => (
              <SwiperSlide
                key={index}
                className="custom-blog-slide"
              >
                <div
                  className="rr-project-slider-item wow rrfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay={blog.delay}
                >
                  <div className="rr-project-slider-thumb">
                    <img src={blog.image} alt={blog.title} />
                  </div>

                  <div className="rr-project-slider-content text-center">
                    <h3 className="rr-project-slider-title">
                      <a href="#" className="bloghead">
                        {blog.title}
                      </a>
                    </h3>

                    <p>{blog.description}</p>

                    <a href="#" className="more-link">
                      {blog.date}
                    </a>
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

export default Blogs;