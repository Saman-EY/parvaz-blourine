"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export const FooterSlider: React.FC = () => {
    return (
        <div className={'footer-slider-container col-span-1 row-span-1 w-full max-h-[100px] lg:max-h-full h-full aspect-video max-w-lg relative flex flex-col items-center justify-start'}>
            <Swiper
                modules={[Pagination]}
                breakpoints={{
                    1024: {
                        slidesPerView: 1,
                        spaceBetween:5
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween:0
                    },
                }}
                className={'w-full max-w-lg'}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: (index: number, className: string) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
            >
                <SwiperSlide className={'w-full'}>
                    <div className={'grid grid-cols-4 lg:grid-cols-2 gap-y-4 gap-x-0 lg:gap-x-1 place-content-center w-full max-h-[100px] lg:max-h-full'}>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1 ">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo-1.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority

                                    // fill={true}
                                    // src="/assets/images/dynamic/china.png"
                                    // alt="home slider image"
                                    // className="w-full object-cover"
                                    // sizes="50vw"
                                    // objectFit={'cover'}
                                />
                            </a>
                        </div>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo-2.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo-3.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full'}>
                    <div className={'grid grid-cols-4 lg:grid-cols-2 gap-y-4 gap-x-0 lg:gap-x-1 place-content-center w-full max-h-[100px] lg:max-h-full'}>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1 ">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo-1.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo-2.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo-3.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority
                                />
                            </a>
                        </div>
                        <div className="relative aspect-[3/2] col-span-1 row-span-1">
                            <a
                                href="https://trustseal.enamad.ir/?id=123456"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="نماد اعتماد الکترونیکی"
                                title="نماد اعتماد الکترونیکی"
                                className="block w-full h-full relative"
                            >
                                <Image
                                    src="/assets/images/dynamic/Logo.png"
                                    alt="نماد اعتماد الکترونیکی"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    className="object-contain"
                                    priority
                                />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            {/* Pagination container */}
            <div
                className="swiper-pagination relative flex items-center justify-center gap-2 mt-3"/>
        </div>
    );
};

