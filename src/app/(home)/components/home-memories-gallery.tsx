"use client";

import React, {useState, useRef, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import type {Swiper as SwiperClass} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {BgDots} from "@/components/ui/icons/bg-dots";
import {cn} from "@/lib/utils";
interface Props{
    className?:string
    sliderClassName?:string
}
export const HomeMemoriesGallery: React.FC<Props> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Reference to the Swiper instance for programmatic control
    const swiperRef = useRef<SwiperClass | null>(null);


    return (
        <div className={props.className}>
            <BgDots columns={11} rows={6} className={'text-secondary -left-[5%] -bottom-0'}/>
            {/* Swiper slider for continent maps */}
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Pagination]}
                breakpoints={{
                    320: {slidesPerView: 1, spaceBetween: 5},
                    1024: {slidesPerView: 1, spaceBetween: 18},
                }}
                rewind={true}
                className={cn([props.sliderClassName , 'w-full h-full'])}
                pagination={{
                    el: '.swiper-pagination-home-memories',
                    clickable: true,
                    renderBullet: (index: number, className: string) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
            >

                {Array.from({length: 3}).map((_, index) => (
                    <SwiperSlide className="rounded-15 w-full h-full p-5">
                        <div className="flex-center gap-2 lg:gap-5">
                            <div className="flex flex-col w-1/2 h-full gap-2 lg:gap-5">
                                <AspectRatio className="w-full rounded-15 overflow-clip flex-center" ratio={300 / 320}>
                                    <Image
                                        fill={true}
                                        src="/assets/images/dynamic/china.png"
                                        alt="home slider image"
                                        className="w-full object-cover"
                                        sizes="50vw"
                                    />
                                </AspectRatio>

                                <AspectRatio className="w-full rounded-15  " ratio={300 / 210}>
                                    <Image
                                        fill={true}
                                        src="/assets/images/dynamic/china.png"
                                        alt="home slider image"
                                        className="w-full object-cover"
                                        sizes="50vw"
                                        priority
                                    />
                                </AspectRatio>

                            </div>
                            <div className="flex flex-col-reverse w-1/2 h-full gap-2 lg:gap-5">
                                <AspectRatio className="w-full rounded-15 overflow-clip flex-center" ratio={300 / 320}>
                                    <Image
                                        fill={true}
                                        src="/assets/images/dynamic/china.png"
                                        alt="home slider image"
                                        className="w-full object-cover"
                                        sizes="50vw"
                                        priority
                                    />
                                </AspectRatio>

                                <AspectRatio className="w-full rounded-15  " ratio={300 / 210}>
                                    <Image
                                        fill={true}
                                        src="/assets/images/dynamic/china.png"
                                        alt="home slider image"
                                        className="w-full object-cover"
                                        sizes="50vw"
                                        priority
                                    />
                                </AspectRatio>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}


            </Swiper>
            <div
                className="!w-full swiper-pagination-home-memories flex items-center justify-center gap-2 transition-all"/>
        </div>
    );
};