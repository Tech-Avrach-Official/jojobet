import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const sports = {
  en: [
    { icon: '⚽', name: 'Football' },
    { icon: '🏀', name: 'Basketball' },
    { icon: '🏈', name: 'American Football' },
    { icon: '🏐', name: 'Volleyball' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🥍', name: 'Lacrosse' },
    { icon: '🏓', name: 'Table Tennis' },
    { icon: '🏒', name: 'Hockey' },
    { icon: '🥊', name: 'Boxing' },
    { icon: '⚽', name: 'Football' },
    { icon: '🏀', name: 'Basketball' },
    { icon: '🏈', name: 'American Football' },
    { icon: '🏐', name: 'Volleyball' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🥍', name: 'Lacrosse' },
    { icon: '🏓', name: 'Table Tennis' },
    { icon: '🏒', name: 'Hockey' },
    { icon: '🥊', name: 'Boxing' },
    { icon: '⚽', name: 'Football' },
    { icon: '🏀', name: 'Basketball' },
    { icon: '🏈', name: 'American Football' },
    { icon: '🏐', name: 'Volleyball' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🥍', name: 'Lacrosse' },
    { icon: '🏓', name: 'Table Tennis' },
    { icon: '🏒', name: 'Hockey' },
    { icon: '🥊', name: 'Boxing' },
    { icon: '⚽', name: 'Football' },
    { icon: '🏀', name: 'Basketball' },
    { icon: '🏈', name: 'American Football' },
    { icon: '🏐', name: 'Volleyball' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🥍', name: 'Lacrosse' },
    { icon: '🏓', name: 'Table Tennis' },
    { icon: '🏒', name: 'Hockey' },
    { icon: '🥊', name: 'Boxing' },
    { icon: '⚽', name: 'Football' },
    { icon: '🏀', name: 'Basketball' },
    { icon: '🏈', name: 'American Football' },
    { icon: '🏐', name: 'Volleyball' },
    { icon: '🏏', name: 'Cricket' },
    { icon: '🏸', name: 'Badminton' },
    { icon: '🥍', name: 'Lacrosse' },
    { icon: '🏓', name: 'Table Tennis' },
    { icon: '🏒', name: 'Hockey' },
    { icon: '🥊', name: 'Boxing' },
    // add more if needed
  ]
};

const SportsCarousel = () => {
  const swiperRef = useRef(null);

  const slideNext = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const perView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : swiper.params.slidesPerView;
      swiper.slideTo(swiper.activeIndex + perView);
    }
  };

  const slidePrev = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const perView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : swiper.params.slidesPerView;
      swiper.slideTo(swiper.activeIndex - perView);
    }
  };

  return (
    <div className="relative w-full py-4 bg-white">

      <div className="w-full">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          className='w-full h-full'
        >
          {sports.en.map((sport, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <div className=" flex flex-col items-center gap-1 text-sm py-2 text-gray-700">
                <div className="relative text-xl">{sport.icon}
                  <span className="absolute top-[-5px] right-[-10px] text-[9px] font-bold bg-black w-4 h-4 rounded-full flex items-center justify-center text-[#588036]">17</span>
                </div>
                <span className="text-xs text-[#588036] font-medium whitespace-nowrap">{sport.name}</span>
              </div>
            </SwiperSlide>
          ))}
      <button
        onClick={slidePrev}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white h-full shadow-md p-2 "
      >
        <ChevronLeft />
      </button>
      <button
        onClick={slideNext}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white h-full shadow-md p-2 "
      >
        <ChevronRight />
      </button>
        </Swiper>
      </div>

    </div>
  );
};

export default SportsCarousel;
