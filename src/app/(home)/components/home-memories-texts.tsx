'use client'
import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import {Scrollbar} from 'swiper/modules';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {BgDots} from "@/components/ui/icons/bg-dots";
import {cn} from "@/lib/utils";

interface Props {
    className?: string
    sliderClassName:string
}
export const HomeMemoriesTexts:React.FC<Props> = (props) => {
    return (
        <div
            className={props.className}>
            <Swiper
                scrollbar={{
                    hide: true,
                    enabled: true
                }}
                direction={'vertical'}
                modules={[Scrollbar]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                centeredSlides={true}
                initialSlide={2}
                className={cn([props.sliderClassName , 'w-full h-full custom-swiper-scrollbar !pr-5'])}
            >
                {Array.from({length: 3}).map((_, index) => (
                    <SwiperSlide className={'text-white h-max'}>
                        <div className={'w-full h-max'}>
                            <div className={'flex items-center gap-3'}>
                                <Avatar className={'w-[60px] h-[60px]'}>
                                    <AvatarImage src="https://github.com/shadcn.png"/>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className={'text-16 lg:text-20'}>مصطفی ح.</h3>
                                    <h4 className={'text-16 lg:text-20 text-whiteSmoke font-light'}>32 ساله از سوئد</h4>
                                </div>
                            </div>
                            <p className={'w-[380px] mt-3 text-16 font-thin'}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز.
                            </p>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
            <BgDots columns={6} rows={11} className={'text-secondary -right-[5%] -top-[5%]'}/>
        </div>
    );
};