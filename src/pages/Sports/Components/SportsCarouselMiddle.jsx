import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dummy from '../../../assets/Sports/dummy.png';

const slides = [
  {
   image :  dummy,
  },
  {
   image :  dummy,
  },
  {
   image :  dummy,
  },
  {
   image :  dummy,
  },
  {
   image :  dummy,
  },
];

const SportsCarouselMiddle = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div >
             <img src={slide.image} alt="" />
            </div>
          </SwiperSlide>
        ))}

        {/* Prev/Next Buttons */}
        <button className="swiper-button-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white">
          {/* <ChevronLeft size={24} /> */}
        </button>
        <button className="swiper-button-next absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white">
          <ChevronRight size={24} />
        </button>
      </Swiper>

      {/* Swiper pagination is automatically styled by Swiper */}
    </div>
  );
};

export default SportsCarouselMiddle;
