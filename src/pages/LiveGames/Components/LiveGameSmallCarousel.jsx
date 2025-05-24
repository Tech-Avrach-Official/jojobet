import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import smallcarousel from "../../../assets/LiveGames/smallcarousel.png";

const LiveGameSmallCarousel = () => {
  return (
    <div className="bg-transparent z-10 ">
      <div
        className="bg-[#1f1f1fe0] text-white pl-14 relative"
        style={{
          clipPath: "polygon(50px 0, 100% 0, calc(100% - 0px) 100%, 0 100%)",
        }}
      >
        <div
          className=" text-white py-3 relative "
          //  style={{
          //     clipPath: 'polygon(10px 0, 100% 0, calc(100% - 20px) 100%, 0 100%)'
          //   }}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: false, // ✅ This makes it go right ➡️ to left ⬅️
            }}
            onSwiper={(swiper) => setTimeout(() => swiper.update(), 100)}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src={smallcarousel}
                    alt="Tournament Banner"
                    className="w-14 object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white"><span className="text-gray-400 text-xs">*****-</span> 135000.$</p>
                  <p className="text-sm font-normal leading-3 text-white">Immersive Roulette</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src={smallcarousel}
                    alt="Tournament Banner"
                    className="w-14 object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white"><span className="text-gray-400 text-xs">*****-</span> 135000.$</p>
                  <p className="text-sm font-normal leading-3 text-white">Immersive Roulette</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src={smallcarousel}
                    alt="Tournament Banner"
                    className="w-14 object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white"><span className="text-gray-400 text-xs">*****-</span> 135000.$</p>
                  <p className="text-sm font-normal leading-3 text-white">Immersive Roulette</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src={smallcarousel}
                    alt="Tournament Banner"
                    className="w-14 object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white"><span className="text-gray-400 text-xs">*****-</span> 135000.$</p>
                  <p className="text-sm font-normal leading-3 text-white">Immersive Roulette</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src={smallcarousel}
                    alt="Tournament Banner"
                    className="w-14 object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white"><span className="text-gray-400 text-xs">*****-</span> 135000.$</p>
                  <p className="text-sm font-normal leading-3 text-white">Immersive Roulette</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LiveGameSmallCarousel;

// Reusable Angled Card Component
