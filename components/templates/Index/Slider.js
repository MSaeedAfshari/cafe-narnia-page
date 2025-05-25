import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <>
      <Swiper loop={true} rewind={true} navigation={true} modules={[Navigation]} className="swiper">
        <SwiperSlide>
            <img class="w-100" src="img/carousel-1.jpg" alt="Image" />
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 class="text-primary font-weight-medium m-0">
                We Have Been Serving
              </h2>
              <h1 class="display-1 text-white m-0">Engineers</h1>
              <h2 class="text-white m-0">* SINCE 2023 *</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 class="text-primary font-weight-medium m-0">
                We Have Been Serving
              </h2>
              <h1 class="display-1 text-white m-0">COFFEE</h1>
              <h2 class="text-white m-0">* SINCE 2023 *</h2>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
