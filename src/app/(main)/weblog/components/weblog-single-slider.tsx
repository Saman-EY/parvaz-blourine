"use client";

import React, {useState, useRef, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import type {Swiper as SwiperClass} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import {IconSelect} from "@/components/ui/icon-select";
import {Buttons, LinkButtons} from "@/components/ui/buttons";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {BgDots} from "@/components/ui/icons/bg-dots";
import {cn} from "@/lib/utils";
import {AvatarDateLike} from "@/components/ui/avatar-date-like";
import {getWeblogTops} from "@/api/weblog";
import {WeblogType} from "@/types/weblog";
import {env} from "@/env";
import {textTrim} from "@/helpers/text-trim";
import Link from "next/link";

interface Props {
    className?: string
    sliderClassName?: string
}

export const WeblogSingleSlider: React.FC<Props> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [weblogs, setWeblogs] = useState<WeblogType[] | undefined>(undefined)
    // Reference to the Swiper instance for programmatic control
    const swiperRef = useRef<SwiperClass | null>(null);
    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true)
            try {
                const data = await getWeblogTops()
                setWeblogs(data)
            } catch (err) {
                console.error('Error loading weblogs:', err)
            } finally {
                setLoading(false)
            }
        }
        fetchdata()
    }, []);
    return (
        <div className={cn(['weblog-single-slider h-full flex-center relative', props.className])}>
            <Buttons
                variant={'icon-only'}
                className={'absolute text-2xl md:text-3xl z-30 right-0 xl:-right-20 p-1 lg:p-3 top-[25%] lg:top-[45%]'}
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <IconSelect classes="" name="slider-right"/>
            </Buttons>
            <div className="relative w-full flex-center flex-col ">
                {/* Swiper slider for continent maps */}
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={10}
                    rewind={true}
                    className={cn(' lg:aspect-[1080/300] w-full', props.sliderClassName)}
                    pagination={{
                        el: '.swiper-pagination-weblog-single-slider',
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

                    {weblogs?.map((weblog, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full w-full flex flex-col lg:flex-row gap-1">
                                <AspectRatio ratio={490 / 340} className={'lg:max-w-[490px] w-full rounded-15'}>
                                    <Image
                                        src={env.NEXT_PUBLIC_IMAGE_DIRECTORY + encodeURIComponent(weblog.picturePath)}
                                        alt={weblog.title + ' عکس اسلایدر'}
                                        fill={true}
                                        className={'object-cover'}
                                        sizes={'(max-width: 1024px) 100vw, 50vw'}
                                    />
                                </AspectRatio>
                                <div className="flex-center flex-col mt-5 px-5 w-full">
                                    <AvatarDateLike
                                        src={env.NEXT_PUBLIC_IMAGE_DIRECTORY + encodeURIComponent(weblog.createdByProfilePicture)}
                                        name={weblog.createdBy}
                                        date={weblog.registrationDate}
                                        likes={Number(weblog.likes)}
                                        isLiked={false}
                                    />
                                    <h2 className={'mt-5 w-full text-16 lg:text-36 pl-10 lg:pl-0'}>
                                        {weblog.title}
                                    </h2>
                                    <p className={'text-lightGray w-full text-14 lg:text-16 mt-4'}>
                                        {textTrim(weblog.headerText, 100)}
                                        <span>
                                            <Link className={'text-primary underline'} href={'/weblog/' + weblog.slug}>
                                                مشاهده بیشتر
                                            </Link>
                                        </span>
                                    </p>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                    {loading && (
                        Array.from({length: 2}).map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-full w-full flex flex-col lg:flex-row gap-1 animate-pulse">
                                    <div className="lg:max-w-[490px] w-full aspect-[490/340] rounded-15 bg-gray-200"/>
                                    <div className="flex-center flex-col mt-5 px-5 w-full">
                                        <div className="flex items-center gap-3 w-full">
                                            <div className="w-10 h-10 rounded-full bg-gray-200"/>
                                            <div className="flex-1 h-4 bg-gray-200 rounded"/>
                                            <div className="w-12 h-4 bg-gray-200 rounded"/>
                                        </div>
                                        <div className="mt-5 w-full h-6 bg-gray-200 rounded"/>
                                        <div className="mt-4 w-full h-16 bg-gray-200 rounded"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    )}

                </Swiper>
                <div
                    className="!w-full swiper-pagination-weblog-single-slider flex items-center justify-center gap-2 transition-all mt-8"/>
            </div>

            <Buttons
                variant={'icon-only'}
                className={'absolute text-2xl md:text-3xl z-30 left-0 xl:-left-20 p-1 lg:p-3  top-[25%] lg:top-[45%]'}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <IconSelect classes="" name="slider-left"/>
            </Buttons>
            <BgDots columns={6} rows={7} className={'-right-[4%] bottom-[5%]'}/>
            <BgDots columns={7} rows={5} className={'-left-10 bottom-[40%]'}/>
        </div>
    );
};