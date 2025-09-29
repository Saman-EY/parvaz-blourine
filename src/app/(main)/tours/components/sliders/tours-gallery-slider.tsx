'use client';
import * as React from 'react';
import {cn} from "@/lib/utils";
import {Buttons} from "@/components/ui/buttons";
import {IconSelect} from "@/components/ui/icon-select";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {ToursCardSameSlider} from "@/app/(main)/tours/components/cards/tours-same-slider-card";
import {Fragment, useRef, useState} from "react";
import type {Swiper as SwiperClass} from "swiper";
import {VideoPlayer} from "@/components/ui/video-player";
import {GalleryModal} from "@/components/shared/gallery-modal";

type Props = {
    className?: string
};

export function ToursGallerySlider(props: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    // Reference to the Swiper instance for programmatic control
    const swiperRef = useRef<SwiperClass | null>(null);
    const [id, setId] = useState(0)
    return (
        <section className={cn(' h-full w-full flex-center flex-col relative lg:p-10 max-w-[1300px]', props.className)}>
            <div className="relative w-full h-full flex-center overflow-visible">
                <Buttons
                    variant={'icon-only'}
                    className={'text-2xl md:text-3xl z-30 right-0 xl:-right-20 p-1 lg:p-3 bottom-[45%] ml-1'}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <IconSelect classes="" name="slider-right"/>
                </Buttons>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={10}
                    rewind={true}
                    className="max-h-[700px] w-full h-full"
                    pagination={{
                        el: '.swiper-pagination-buttons-outline',
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

                </Swiper>
                <Buttons
                    variant={'icon-only'}
                    className={'text-2xl md:text-3xl z-30 left-0 xl:-left-20 p-1 lg:p-3 bottom-[45%] mr-1'}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <IconSelect classes="" name="slider-left"/>
                </Buttons>
            </div>
            <div className={'h-[20px] w-full flex-center mt-2'}>
                <div className="swiper-pagination-buttons-outline"/>
            </div>
        </section>
    );
}