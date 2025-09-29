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
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { env } from '@/env';
import { ImageType } from '@/types/shared';

interface Props {
  className?: HTMLAttributes<string>;
  images: ImageType[];
}

export const HotelSingleSlider: React.FC<Props> = ({ className, ...props }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Reference to the Swiper instance for programmatic control
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className={cn('hotel-single-slider flex-center w-full h-full relative', className)}>
      <Buttons
        variant={'icon-only'}
        className={
          'absolute text-base -left-3 lg:left-4 z-10 p-1 lg:p-3 bottom-[45%] bg-white lg:bg-transparent lg:text-white lg:border-white lg:hover:text-white/50 lg:hover:border-white/30'
        }
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IconSelect classes="" name="slider-left" />
      </Buttons>

      <Buttons
        variant={'icon-only'}
        className={
          'absolute text-base -right-3 lg:right-4 z-10 p-1 lg:p-3 bottom-[45%] bg-white lg:bg-transparent lg:text-white lg:border-white lg:hover:text-white/50 lg:hover:border-white/30'
        }
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IconSelect classes="" name="slider-right" />
      </Buttons>
      <div className="relative w-full h-full flex-center aspect-[800/460]">
        {/* Swiper slider for continent maps */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          slidesPerView={1}
          rewind={true}
          spaceBetween={20}
          className="h-full w-full flex-center"
          pagination={{
            el: '.swiper-pagination-slider',
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
          {props.images.map((image, index) => (
            <SwiperSlide key={index} className="rounded-15 overflow-clip group w-full h-full">
              <AspectRatio className={'rounded-15 overflow-clip bg-gray-100 h-full w-full'} ratio={1}>
                <Image
                  src={`${env.NEXT_PUBLIC_IMAGE_DIRECTORY}/${image.path}`}
                  alt={`${image.alt || 'شناسه عکس وارد نشده است!'}`}
                  fill={true}
                  className={'object-cover'}
                />
              </AspectRatio>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={'flex-center absolute w-full z-20 bottom-0'}>
          <div className="swiper-pagination-slider p-2 rounded-t-10 !mx-auto !w-auto transition-transform" />
        </div>
      </div>
    </div>
  );
};
