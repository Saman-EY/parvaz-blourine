"use client";

import React, { Fragment, useEffect, useState } from "react";
import Flag from "react-world-flags";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import faLocale from "i18n-iso-countries/langs/fa.json";
import { getLocationOnMap } from "@/api/get-location-on-map";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Buttons } from "@/components/ui/buttons";
import { BgDots } from "@/components/ui/icons/bg-dots";
import useSWR from "swr";
import { fetcher } from "@/helpers/fetcher";
import { TourDetailType } from "@/types/tours";
import Link from "next/link";

interface ImagesType {
    alt: string;
    path: string;
    name: string;
    slug: string;
}

export const HomeSelectCountryGallery: React.FC<{ country: string }> = ({ country }) => {
    const id = country ? country.split("_")[2] : "";
    const [countryName, setCountryName] = useState("");
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const { data, isLoading, error } = useSWR(
        `${process.env.NEXT_PUBLIC_API_PATH}/api/v1/landing/country/tours?country_id=${id}`,
        fetcher,
        { refreshInterval: 500_000, revalidateOnFocus: false }
    );

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);

    if (!data && !isLoading) {
        return <div className="flex items-center justify-center size-full text-lg">اطلاعاتی پیدا نشد!</div>;
    }

    if (error) {
        return (
            <div className="flex items-center justify-center size-full text-lg text-red-500">
                خطای سمت سرور، لطفا مجدد تلاش کنید!
            </div>
        );
    }

    const tours: TourDetailType[] = data?.data?.tours ?? [];
    function getImages() {
        const images: ImagesType[] = [];

        tours.slice(0, 3).forEach((tour) => {
            const { path, alt } = tour.image;
            images.push({ alt, path, name: tour.name, slug: tour.slug });
        });

        return images;
    }

    useEffect(() => {
        if (!country) return;
        countries.registerLocale(enLocale);
        countries.registerLocale(faLocale);
        const enName = countries.getName(id, "en") || "";
        const faName = countries.getName(id, "fa") || "";
        setCountryName(`${faName} — ${enName}`);
        setImages(getImages());
    }, [country]);

    useEffect(() => {
        if (data) {
            setImages(getImages());
        }
    }, [data]);

    const cartInfoContainerStyle = "absolute text-white p-3 z-10 size-full top-0 left-0";
    const cartInfoStyle = "relative w-full bg-gray-100 h-[180px] rounded-[16px] overflow-hidden group shadow-md";

    return (
        <div className=" w-full lg:w-1/2 aspect-square lg:mt-5">
            <h2 className="flex items-center gap-2 max-lg:justify-center">
                <Flag code={id} className="w-[40px] h-[26px] object-cover rounded-md" />
                <span className="text-primary font-bold">{countryName}</span>
                <span className="text-darkGray">(تورها، هتل‌ها، جاذبه‌ها)</span>
            </h2>
            <div className="grid grid-cols-6 grid-rows-3 gap-3 mt-5 relative max-w-[500px] w-full max-lg:mx-auto">
                <BgDots className={"-right-14 -top-10"} columns={8} rows={10} />
                <BgDots className={"-left-[10%] -bottom-[10%]"} columns={11} rows={6} />
                {loading || isLoading ? (
                    <Fragment>
                        <Skeleton className={"col-span-2 h-[180px] rounded-md"} />
                        <Skeleton className={"col-span-2 h-[180px] rounded-md"} />
                        <Skeleton className={"col-span-2 h-[180px] rounded-md"} />
                        <Skeleton className={"col-span-full h-[180px] rounded-md"} />
                        <Skeleton className={"col-span-3 h-[180px] rounded-md"} />
                        <Skeleton className={"col-span-3 h-[180px] rounded-md"} />
                    </Fragment>
                ) : (
                    <>
                        {images.length > 0 &&
                            images.map((image, idx) => {
                                if (idx <= 3) {
                                    return (
                                        <Link
                                            href={`/tours/${image.slug}`}
                                            key={idx}
                                            className={cn(["col-span-2", cartInfoStyle])}
                                        >
                                            <div
                                                className={cn(
                                                    "flex flex-col justify-between text-end font-roboto-medium",
                                                    cartInfoContainerStyle
                                                )}
                                            >
                                                {/* top of image */}
                                                <div className="flex justify-end">
                                                    <div className="leading-4 text-center w-max mt-1">
                                                        <h5 className="text-[32px]">7</h5>
                                                        <small className="text-base font-roboto-base">Days</small>
                                                    </div>
                                                </div>

                                                {/* bottom of image */}
                                                <div className="-space-y-1">
                                                    <h4 className="text-xl">{image.name}</h4>
                                                    <p className="text-base font-roboto-base"></p>
                                                </div>
                                            </div>

                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API_PATH}${image.path}`}
                                                alt={image.alt || "tourist attraction"}
                                                fill
                                                priority
                                                sizes={"20vw"}
                                                style={{ objectFit: "cover" }}
                                                className="brightness-90"
                                            />
                                        </Link>
                                    );
                                }
                            })}

                        {/* hotels link cart */}
                        <Link href={"/tours"} className={cn(cartInfoStyle, "col-span-full")}>
                            <div className={cn(cartInfoContainerStyle, "text-xl font-medium")}>
                                <h4>هتل های سوئد</h4>
                            </div>
                            <Image
                                src={"/assets/images/static/airplane.webp"}
                                alt={"hotel"}
                                fill
                                priority
                                sizes={"50vw"}
                                style={{ objectFit: "cover" }}
                                className="brightness-90"
                            />
                        </Link>

                        {/*  */}
                        <Link href={"#"} className={cn(cartInfoStyle, "col-span-3")}>
                            <div className={cn(cartInfoContainerStyle, "text-xl font-medium")}>
                                <h4>جاذبه‌ها</h4>
                            </div>
                            <Image
                                src={"/assets/images/static/airplane.webp"}
                                alt={"hotel"}
                                fill
                                priority
                                sizes={"50vw"}
                                style={{ objectFit: "cover" }}
                                className="brightness-90"
                            />
                        </Link>
                        <Link href={"#"} className={cn(cartInfoStyle, "col-span-3")}>
                            <div className={cn(cartInfoContainerStyle, "text-xl font-medium")}>
                                <h4>برنامه های سفر</h4>
                                <p></p>
                            </div>
                            <Image
                                src={"/assets/images/static/airplane.webp"}
                                alt={"hotel"}
                                fill
                                priority
                                sizes={"20vw"}
                                style={{ objectFit: "cover" }}
                                className="brightness-90"
                            />
                        </Link>
                    </>
                )}
            </div>
            <div className="w-full flex-center mt-10">
                <Buttons variant={"secondary"}>بیشتر ببینید</Buttons>
            </div>
        </div>
    );
};
