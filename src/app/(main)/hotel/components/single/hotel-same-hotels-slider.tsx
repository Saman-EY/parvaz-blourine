'use client';

import React, { useState, useRef, HTMLAttributes } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { IconSelect } from '@/components/ui/icon-select';
import { Buttons } from '@/components/ui/buttons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BgDots } from '@/components/ui/icons/bg-dots';
import { cn } from '@/lib/utils';
import { HotelCardSameSlider } from '@/app/(main)/hotel/components/cards/hotel-card-same-slider';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const HotelSameHotelsSlider: React.FC = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Reference to the Swiper instance for programmatic control
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div
      className={cn(
        'hotel-same-hotels-slider h-full w-full flex-center flex-col relative lg:p-10 max-w-[1226px]',
        props.className,
      )}
    >
      <div className="relative w-full h-full flex-center overflow-visible">
        <BgDots columns={8} rows={6} className={'-bottom-10 -left-5'} />
        <Buttons
          variant={'icon-only'}
          className={
            ' absolute md:relative text-2xl md:text-3xl z-30 right-0 xl:-right-20 p-1 lg:p-3 bottom-[45%] ml-1'
          }
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <IconSelect classes="" name="slider-right" />
        </Buttons>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          rewind={true}
          className="max-h-[250px] w-full"
          pagination={{
            el: '.swiper-pagination-hotels-slider',
            clickable: true,
            renderBullet: (index: number, className: string) => {
              return `<span class="${className}"></span>`;
            },
          }}
          onSlideChange={(swiper) => {
            const idx = swiper.activeIndex;
            setActiveIndex(idx);
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SwiperSlide key={index} className="group aspect-square bg-transparent">
              <HotelCardSameSlider />
            </SwiperSlide>
          ))}
        </Swiper>
        <Buttons
          variant={'icon-only'}
          className={'absolute md:relative text-2xl md:text-3xl z-30 left-0 xl:-left-20 p-1 lg:p-3 bottom-[45%] mr-1'}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <IconSelect classes="" name="slider-left" />
        </Buttons>
      </div>
      <div className={'h-[20px] w-full flex-center mt-2'}>
        <div className="swiper-pagination-hotels-slider flex flex-center gap-1 lg:gap-2" />
      </div>
    </div>
  );
};
