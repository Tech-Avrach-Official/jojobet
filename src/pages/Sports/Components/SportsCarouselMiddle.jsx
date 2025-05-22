import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dummy from '../../../assets/Sports/dummy.png';

const slides = [
  { id: 1, image: dummy },
  { id: 2, image: dummy },
  { id: 3, image: dummy },
  { id: 4, image: dummy },
  { id: 5, image: dummy },
];

const SportsCarouselMiddle = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full mt-3 overflow-hidden">
      {/* Custom Buttons */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <ChevronLeft size={34} className='font-extrabold text-black' />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <ChevronRight size={34} className='font-extrabold text-black' />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === activeIndex ? 'bg-gray-400 scale-150' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SportsCarouselMiddle;
