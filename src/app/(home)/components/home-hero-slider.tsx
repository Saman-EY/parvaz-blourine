"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { homeHeroSlider } from "@/constants";

export const HomeHeroSlider: React.FC = () => {
    const [swiperIndex, setSwiperIndex] = useState<number>(1);
    return (
        <div className={"home-hero-slider-container w-full h-full relative flex items-center justify-center z-0"}>
            <div className={"absolute z-10 top-[12%] flex items-center justify-center"}>
                <h1 className={"text-white text-2xl font-semibold w-max text-center mt-5"}>
                    آژانس پرواز بلورین شیردال
                </h1>
            </div>
            <div className={"absolute left-[30px] z-10 text-white flex flex-col justify-end"}>
                <div className={"not-iranian-number outline-text text-6xl font-black text-end"}>
                    {swiperIndex.toString().padStart(2, "0")}
                </div>
                <h4 className={"text-end text-16 lg:text-20"}>Vernazza, Italy</h4>
            </div>
            <Swiper
                onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex + 1)}
                modules={[Pagination, Autoplay]}
                direction={"vertical"}
                slidesPerView={1}
                rewind={true}
                loop
                speed={1300}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                className={"w-full h-full relative z-0"}
                pagination={{
                    el: ".swiper-pagination-home",
                    clickable: true,
                    renderBullet: (index: number, className: string) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
            >
                {homeHeroSlider.map((slider, ind) => (
                    <SwiperSlide key={ind} className={"w-full h-full relative"}>
                        <div className={"slider-gradient-bg w-full h-full absolute z-10 left-0"} />
                        <div className={"w-full h-full"}>
                            <Image
                                src={slider.src}
                                alt="home slide image"
                                fill
                                sizes="(max-width: 1980px) 100vw, 12px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Pagination container */}
            <div className="swiper-pagination-home" />
        </div>
    );
};
