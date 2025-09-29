'use client'
import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Pagination} from 'swiper/modules';
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {LikeButton} from "@/components/ui/like-button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const HomeWeblogSlider: React.FC = () => {

    return (
        <div className={'home-weblog-slider w-full flex-center flex-col mt-14 mx-16 max-w-1135'}>
            <Swiper
                centeredSlides={true}
                initialSlide={1}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                rewind={true}
                modules={[Pagination]}
                pagination={{
                    el: '.swiper-pagination-home-weblog',
                    clickable: true,
                    renderBullet: (index: number, className: string) => {
                        return `<span class="${className}"></span>`;
                    },
                }}
                className="max-h-[558px] w-full h-full"
            >
                {Array.from({length: 10}).map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className=" h-full">
                            <AspectRatio ratio={1} className={'max-h-[380px] rounded-15'}>
                                <Image src={'/assets/images/dynamic/china.png'} alt={'weblog slider image'} fill={true}
                                       objectFit={'cover'}/>
                            </AspectRatio>
                            <div className="flex-center flex-col mx-auto mt-5 px-5">
                                <div className={'flex w-full justify-between'}>
                                    <div className={'flex gap-3'}>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png"/>
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className={''}>
                                            <h3 className={'text-14 text-darkGray'}>مصطفی ح.</h3>
                                            <h4 className={'text-12 text-lightGray font-light'}>324 اردیبهشت
                                                1402</h4>
                                        </div>
                                    </div>
                                    <div className={'flex-center text-danger bg-bgLightGray px-4 rounded-10 gap-1'}>
                                        <LikeButton
                                            isLiked={false}
                                            onClick={() => console.log('like')}
                                        />
                                        <span>5</span>
                                    </div>
                                </div>
                                <h2 className={'text-20 mt-5 w-full '}>هتل‌های خوب را بهتر تشخیص دهید</h2>
                                <p className={'text-16 text-dark w-full'}>
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                                    فعلی تکنولوژی مورد...
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className="!w-full swiper-pagination-home-weblog flex items-center justify-center gap-2 transition-all mt-10"/>
        </div>
    );
}
