"use client";
import React, { useState } from "react";
import { HomeSelectCountrySlider } from "@/app/(home)/components/home-select-country-slider";
import { HomeSelectCountryGallery } from "@/app/(home)/components/home-select-country-gallery";
import { BgDots } from "@/components/ui/icons/bg-dots";
import useSWR from "swr";
import { AvailableCountriesType } from "@/types/availableCountries";

export const HomeSelectCountry = () => {
    const [country, setCountry] = useState<string>("");

    function setCountryAction(selected: string) {
        setCountry(selected);
    }

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_PATH}/api/v1/landing`);

    if (isLoading) {
        console.log("isLoading...");
    }

    if (error) {
        console.error(error);
        return <p className="text-red-500 text-20 text-center py-44">خطا در دریافت اطلاعات. لطفاً دوباره تلاش کنید.</p>;
    }

    const availableCountries: AvailableCountriesType[] = data?.data.availableCountries;

    return (
        <div
            className={
                "flex-center flex-col-reverse lg:flex-row justify-between w-full gap-10  mx-auto relative max-w-1135"
            }
        >
            <HomeSelectCountryGallery country={country} />
            <HomeSelectCountrySlider
                country={country}
                setCountryAction={setCountryAction}
                availableCountries={availableCountries}
            />
        </div>
    );
};
