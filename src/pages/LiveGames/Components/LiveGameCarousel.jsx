import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import dummy from '../../../assets/Sports/dummy.png';
import img1 from '../../../assets/LiveGames/img1.png';
import img2 from '../../../assets/LiveGames/img2.png';
import img3 from '../../../assets/LiveGames/img3.webp';

const slides = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  
];

const LiveGameCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Custom Buttons */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <ChevronLeft size={40} className='font-extrabold text-white ' />
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <ChevronRight size={40} className='font-extrabold text-white ' />
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
        className="w-full h-[20rem] relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} className="w-full h-full object-cover" alt={`Slide ${slide.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === activeIndex ? 'bg-gray-400 scale-150' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default LiveGameCarousel;
