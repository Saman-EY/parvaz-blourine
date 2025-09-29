"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { MapAsia } from "@/components/ui/maps/map-asia";
import { MapEurope } from "@/components/ui/maps/map-europe";
import { MapAfrica } from "@/components/ui/maps/map-africa";
import { MapAmerica } from "@/components/ui/maps/map-america";
import { IconSelect } from "@/components/ui/icon-select";
import { Buttons } from "@/components/ui/buttons";
import { AvailableCountriesType } from "@/types/availableCountries";

// Configuration for each continent: name and corresponding map component
const continentConfigs = [
    { name: "Asia", Component: MapAsia },
    { name: "Europe", Component: MapEurope },
    { name: "Africa", Component: MapAfrica },
    { name: "America", Component: MapAmerica },
];

interface Props {
    setCountryAction: (county: string) => void;
    country: string;
    availableCountries: AvailableCountriesType[];
}

export const HomeSelectCountrySlider: React.FC<Props> = ({ country, setCountryAction, availableCountries }) => {
    // State to store selected country and active continent
    const [continent, setContinent] = useState<string>(continentConfigs[0].name);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Reference to the Swiper instance for programmatic control
    const swiperRef = useRef<SwiperClass | null>(null);

    // Compute previous and next indices and their names for navigation buttons
    const prevIndex = (activeIndex - 1 + continentConfigs.length) % continentConfigs.length;
    const nextIndex = (activeIndex + 1) % continentConfigs.length;
    const prevName = continentConfigs[prevIndex].name;
    const nextName = continentConfigs[nextIndex].name;

    useEffect(() => {
        setCountryAction("sm_state_SE");
    }, []);
    return (
        <div className="home-select-country h-full w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative w-full h-full ">
                {/* Swiper slider for continent maps */}
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    loop
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 0 },
                        1024: { slidesPerView: 1, spaceBetween: 5 },
                    }}
                    rewind={true}
                    className="h-[600px] w-full"
                    pagination={{
                        el: ".swiper-pagination-country",
                        clickable: true,
                        renderBullet: (index: number, className: string) => {
                            return `<span class="${className}"></span>`;
                        },
                    }}
                    onSlideChange={(swiper) => {
                        const idx = swiper.activeIndex;
                        setActiveIndex(idx);
                        setContinent(continentConfigs[idx].name);
                    }}
                >
                    {continentConfigs.map(({ name, Component }) => (
                        <SwiperSlide key={name} className="w-full !h-full flex-center">
                            <Component
                                country={country}
                                setCountryAction={setCountryAction}
                                availableCountries={availableCountries}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div dir={"ltr"} className="flex items-center mt-3 space-x-4">
                {/* Previous continent button */}
                <Buttons
                    variant="primary-outlined"
                    className="rounded-full text-lg p-0 px-3 py-1"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <IconSelect classes="rotate-90" name="down" />
                    {prevName}
                </Buttons>

                {/* Pagination bullets rendered by Swiper */}
                <div className="swiper-pagination-country flex items-center justify-center gap-2" />

                {/* Next continent button */}
                <Buttons
                    variant="primary-outlined"
                    className="rounded-full text-lg p-0 px-3 py-1"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    {nextName}
                    <IconSelect classes="-rotate-90" name="down" />
                </Buttons>
            </div>
        </div>
    );
};
