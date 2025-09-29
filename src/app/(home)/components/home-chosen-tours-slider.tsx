'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { IconSelect } from '@/components/ui/icon-select';
import { Buttons } from '@/components/ui/buttons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { BgDots } from '@/components/ui/icons/bg-dots';
import Flag from 'react-world-flags';
import useSWR from 'swr';
import { TourDetailType } from '@/types/tours';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { fetcher } from '@/helpers/fetcher';
import Link from 'next/link';

export const HomeChosenToursSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Reference to the Swiper instance for programmatic control
  const swiperRef = useRef<SwiperClass | null>(null);

  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_PATH}/api/v1/landing`, fetcher, {
    refreshInterval: 300_000,
    revalidateOnFocus: false,
  });

  if (error) {
    console.error(error);
    return <p className="text-red-500">خطا در دریافت اطلاعات. لطفاً دوباره تلاش کنید.</p>;
  }

  if (!data && !isLoading) {
    return <p>هیچ داده‌ای یافت نشد.</p>;
  }

  const tours: TourDetailType[] = data?.data.tours;

  return (
    <div className="home-chosen-tours h-full flex-center relative">
      <Buttons
        variant={'icon-only'}
        className={'absolute text-2xl md:text-3xl z-30 right-0 xl:-right-20 p-1 lg:p-3 bottom-[45%]'}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IconSelect classes="" name="slider-right" />
      </Buttons>
      <div className="relative w-full flex-center flex-col ">
        {/* Swiper slider for continent maps */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
          }}
          rewind={true}
          className="aspect-[1080/300] w-full"
          pagination={{
            el: '.swiper-pagination-chosen-tours',
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
          {isLoading
            ? Array.from({ length: 5 }).map((_, ind) => (
                <Skeleton key={ind} className="rounded-15 overflow-clip bg-gray-100 h-full w-full" />
              ))
            : tours.map((tour, index) => (
                <SwiperSlide key={index} className="rounded-15 overflow-clip group">
                  <AspectRatio className={'rounded-15 overflow-clip bg-gray-100 h-full w-full'} ratio={1}>
                    <div
                      className={
                        'absolute top-0 left-0 w-full h-full bg-black/30 z-10 flex transition-all justify-between flex-col text-white p-4 group-hover:bg-dark/50'
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex flex-row-reverse">
                          {tour.countries.map((country) => (
                            <Flag
                              key={country.id}
                              code={country.code}
                              className={cn(
                                'size-8 rounded-full object-cover object-center border-2 shadow-md brightness-90 group-hover:ml-1 transition-all',
                                tour.countries.length > 1 && '-ml-4',
                              )}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-2 font-roboto-medium text-end">
                          <p className="font-roboto-light max-lg:text-sm">Days</p>
                          <h4 className={'text-[28px] lg:text-[36px]'}>15</h4>
                        </div>
                      </div>
                      <p className="text-14 lg:text-16 text-end group-hover:hidden">{tour.description.split('', 60)}</p>
                    </div>

                    {/* while hover starts */}
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="group-hover:absolute opacity-0 group-hover:opacity-100 flex flex-col justify-between items-center p-5 pt-20 text-center size-full text-white z-10 cursor-pointer"
                    >
                      <div className="flex flex-wrap justify-center mb-4">
                        {tour.countries.map((c, ind) => (
                          <p key={c.id}>
                            {c.name}
                            {ind !== tour.countries.length - 1 && <span className="mx-2">|</span>}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm">{tour.description}</p>
                    </Link>
                    <Image
                      priority
                      src={`${process.env.NEXT_PUBLIC_API_PATH}${tour.image.path}`}
                      alt={tour.image.alt}
                      fill={true}
                      className={'object-cover'}
                      sizes="30vwx"
                    />
                  </AspectRatio>
                </SwiperSlide>
              ))}
        </Swiper>
        <div className="!w-full swiper-pagination-chosen-tours flex items-center justify-center gap-2 transition-all" />
      </div>

      <Buttons
        variant={'icon-only'}
        className={'absolute text-2xl md:text-3xl z-30 left-0 xl:-left-20 p-1 lg:p-3 bottom-[45%]'}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IconSelect classes="" name="slider-left" />
      </Buttons>
      <BgDots columns={6} rows={6} className={'right-1/3 translate-x-1/2 -top-[10%]'} />
      <BgDots columns={12} rows={5} className={'-left-10 -bottom-[5%]'} />
    </div>
  );
};
