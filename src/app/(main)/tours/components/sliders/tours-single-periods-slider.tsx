'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type { Swiper as SwiperClass } from 'swiper';
import { useParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { IconSelect } from '@/components/ui/icon-select';
import { Buttons } from '@/components/ui/buttons';
import { useMyDataCxt } from '@/store/data-context';
import { getPersianDate } from '@/helpers/get-perisan-date';

interface Props {
  className?: string;
  sliderClassName?: string;
}

export const ToursSinglePeriodsSlider: React.FC<Props> = (props) => {
  const { tour, setCurrentCourse } = useMyDataCxt();
  const swiperRef = useRef<SwiperClass | null>(null);
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug : [params.slug];
  const [, courseSlug] = slug; // [tourSlug, courseSlug]

  // Compute initial index
  let initialIndex = 0;
  if (courseSlug && tour?.courses) {
    const courseIndex = tour.courses.findIndex((c) => c.slug === courseSlug);
    if (courseIndex !== -1) {
      initialIndex = courseIndex; // use the slug if it matches
    }
  } else {
    // fallback: pick first "open"
    initialIndex = tour?.courses.findIndex((c) => c.status === 'open') ?? 0;
  }

  useEffect(() => {
    if (swiperRef.current && initialIndex !== undefined) {
      swiperRef.current.slideTo(initialIndex);
    }
  }, [initialIndex]);

  // Sync currentCourse with initial index
  useEffect(() => {
    if (tour?.courses && initialIndex >= 0) {
      setCurrentCourse(tour.courses[initialIndex]);
    }
  }, [tour, initialIndex, setCurrentCourse]);

  return (
    <div
      className={cn(
        'tours-single-periods-slider h-[435px] w-full bg-[#F5F5F5] rounded-10 lg:rounded-15 p-5 px-3 flex-center flex-col relative z-0',
        props.className,
      )}
    >
      <h2 className="text-dark text-16 font-normal text-center col-span-full">دوره‌های تور</h2>

      {/* Prev Button */}
      <Buttons
        variant="icon-only"
        className="absolute top-14 text-sm p-2 z-10 bg-white"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IconSelect classes="-rotate-90" name="slider-right" />
      </Buttons>

      {/* Next Button */}
      <Buttons
        variant="icon-only"
        className="absolute bottom-5 text-sm p-2 z-10 bg-white"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IconSelect classes="rotate-90" name="slider-right" />
      </Buttons>

      <Swiper
        direction="vertical"
        slidesPerView={5}
        centeredSlides
        rewind
        spaceBetween={10}
        initialSlide={initialIndex}
        className={cn([props.sliderClassName, 'w-full h-full gradient-box'])}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          if (tour?.courses && tour.courses[swiper.activeIndex]) {
            setCurrentCourse(tour.courses[swiper.activeIndex]);
          }
        }}
      >
        {tour?.courses.map((item) => (
          <SwiperSlide key={item.id} className="!h-20 bg-white rounded-10 lg:rounded-15 p-4 text-16">
            <div className="w-full flex flex-col gap-2">
              <div className="w-full h-full flex items-start justify-between ">
                {/* <p className="text-xs">
                  از {getPersianDate(item.from_date.split(" ")[0])} <br /> تا{" "}
                  {getPersianDate(item.to_date.split(" ")[0])}
                </p> */}
                <p className="text-sm">
                  {getPersianDate(item.from_date.split(' ')[0])} <br />
                </p>
                <p className={`text-sm whitespace-nowrap ${item.status === 'pending' ? 'text-orange-400' : ''}`}>
                  {item.status === 'open'
                    ? 'فعال'
                    : item.status === 'pending'
                      ? 'درحال برنامه ریزی'
                      : item.status === 'close'
                        ? 'غیر فعال'
                        : ''}
                </p>
              </div>
              {item.extra_price && <span className="text-14 text-lightGray50 pb-4">قیمت: {item.base_price} تومان</span>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
