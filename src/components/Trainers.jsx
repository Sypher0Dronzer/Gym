import React from "react";
import trainer1 from "./../assets/trainer1.png";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const staff = [
  {
    name: "Blake Hunter",
    pic: trainer1,
  },
  {
    name: "Blake Hunter",
    pic: trainer1,
  },
  {
    name: "Blake Hunter",
    pic: trainer1,
  },
  {
    name: "Blake Hunter",
    pic: trainer1,
  },
  {
    name: "Blake Hunter",
    pic: trainer1,
  },
  {
    name: "Blake Hunter",
    pic: trainer1,
  },
];
const Trainers = () => {
  return (
    <div id="trainers" className="maxWidthForSections py-16">
      <h1 className="section-header text-white">Your Goals</h1>
      <h1 className="section-header text-lime">Their Expertise</h1>
      <p className="text-sm text-text-white/80 font-light text-center tracking-wider mt-1">
        Our team of certified trainers bring unparalleled expertise to help you
        achieve your fitness goals.
      </p>

      <Swiper
        className="w-full h-full"
        slidesPerView={2}
        spaceBetween={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
        //   className="mySwiper"
      >
        {staff.map((e, index) => {
          return (
            <SwiperSlide key={index} className="p-2 mt-8 min-h-[50px]">
              <div className="  shadow-sm shadow-olive  rounded-lg overflow-hidden  ">
                <div className="  relative bg-[radial-gradient(circle,#5D7110_0%,#ffffff00_90%)]
                    bg-linear-to-l from-blackbg via-40% via-olive to-blackbg p-2">
                  
                  <img src={e.pic} className="object-contain" />
                </div>
                <div className="p-4 flex flex-col items-center">
                  <h1 className="sm:text-base font-zalando text-lime text-sm font-semibold text-center line-clamp-1">
                    {e.name}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Trainers;
