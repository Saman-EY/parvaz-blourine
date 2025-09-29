"use client";

import React, {useState, useRef, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import type {Swiper as SwiperClass} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {IconSelect} from "@/components/ui/icon-select";
import {Buttons} from "@/components/ui/buttons";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {BgDots} from "@/components/ui/icons/bg-dots";
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
    sliderClassName?: string;
}

export const ContactAgencyGallery: React.FC<Props> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Reference to the Swiper instance for programmatic control
    const swiperRef = useRef<SwiperClass | null>(null);


    return (
        <div className={cn(['contact-agency-gallery w-full flex-center relative ', props.className])}>
            <Buttons
                variant={'icon-only'}
                className={'absolute text-2xl md:text-3xl z-30 right-0 xl:-right-20 p-1 lg:p-3 bottom-[45%]'}
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <IconSelect classes="" name="slider-right"/>
            </Buttons>
            <div className={'w-full flex-center flex-col mt-14 mx-16'}>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        320: {slidesPerView: 3, spaceBetween: 5},
                        1024: {slidesPerView: 5, spaceBetween: 18},
                    }}
                    centeredSlides={true}
                    rewind={true}
                    initialSlide={2}
                    className="max-h-[558px] w-full h-full gradient-box"
                    pagination={{
                        el: '.swiper-pagination-agency-gallery',
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

                    {Array.from({length: 10}).map((_, index) => (
                        <SwiperSlide
                            key={index}
                            className="rounded-15 overflow-clip flex-center flex-col p-3 h-full w-full"
                        >
                            <AspectRatio
                                className="rounded-full overflow-clip w-full h-full"
                                ratio={1}
                            >
                                <Image
                                    src="/assets/images/dynamic/china.png"
                                    alt="home slider image"
                                    fill
                                    className="object-cover"
                                />
                            </AspectRatio>
                            <h4 className={'text-14 lg:text-24 text-[#212121] text-center mt-3'}>حسین روحی</h4>
                            <p className={'text-12 lg:text-16 text-darkGray text-center'}>مدیر عمومی</p>
                        </SwiperSlide>
                    ))}


                </Swiper>
                <div
                    className="!w-full swiper-pagination-agency-gallery flex items-center justify-center gap-3 transition-all mt-4"/>
            </div>

            <Buttons
                variant={'icon-only'}
                className={'absolute text-2xl md:text-3xl z-30 left-0 xl:-left-20 p-1 lg:p-3 bottom-[45%]'}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <IconSelect classes="" name="slider-left"/>
            </Buttons>
        </div>
    );
};