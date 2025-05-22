import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sports = {
  en: [
    { name: "Football" },
    { name: "Basketball" },
    { name: "American Football" },
    { name: "Volleyball" },
    { name: "Cricket" },
    { name: "Badminton" },
    { name: "Lacrosse" },
    { name: "Table Tennis" },
    { name: "Hockey" },
    { name: "Boxing" },
    { name: "Football" },
    { name: "Basketball" },
    { name: "American Football" },
    { name: "Volleyball" },
    { name: "Cricket" },
    { name: "Badminton" },
    { name: "Lacrosse" },
    { name: "Table Tennis" },
    { name: "Hockey" },
    { name: "Boxing" },
    // add more if needed
  ],
};

const SportsCarouselName = () => {
  const swiperRef = useRef(null);
  const [activeSport, setActiveSport] = useState("Football"); // default active

  const slideNext = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const perView =
        swiper.params.slidesPerView === "auto"
          ? swiper.slidesPerViewDynamic()
          : swiper.params.slidesPerView;
      swiper.slideTo(swiper.activeIndex + perView);
    }
  };

  const slidePrev = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const perView =
        swiper.params.slidesPerView === "auto"
          ? swiper.slidesPerViewDynamic()
          : swiper.params.slidesPerView;
      swiper.slideTo(swiper.activeIndex - perView);
    }
  };

  return (
    <div className="relative w-full mt-3 text-white bg-[#242424]">
      <div className="w-full">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView="auto"
          className="w-full h-full"
        >
          {sports.en.map((sport, index) => {
            const isActive = activeSport === sport.name;

            return (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <div
                  onClick={() => setActiveSport(sport.name)}
                  className={`relative group flex flex-col items-center cursor-pointer text-xs px-4 py-2 whitespace-nowrap border-b-2 ${
                    isActive
                      ? "text-[#588036] border-[#588036] bg-[#2C2C2C]"
                      : "text-[#bababa] border-[#6A6A6A]"
                  }`}
                >
                  <span className="font-medium">{sport.name}</span>
                </div>
              </SwiperSlide>
            );
          })}

          <button
            onClick={slidePrev}
            className="absolute left-0 top-1/2 z-10 text-white -translate-y-1/2 bg-[#292929] h-full shadow-md py-2 px-1"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={slideNext}
            className="absolute right-0 top-1/2 z-10 text-white -translate-y-1/2 bg-[#292929] h-full shadow-md py-2 px-1"
          >
            <ChevronRight size={20} />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default SportsCarouselName;
