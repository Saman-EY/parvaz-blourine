import Image from "next/image";
import { HomeHeroSlider } from "@/app/(home)/components/home-hero-slider";
import { HomeSearchItems } from "@/app/(home)/components/home-search-items";
import React from "react";
import { HomeSelectCountry } from "@/app/(home)/components/home-select-country";
import { HomeChosenToursSlider } from "@/app/(home)/components/home-chosen-tours-slider";
import { LinkButtons } from "@/components/ui/buttons";
import { HomeMemoriesGallery } from "@/app/(home)/components/home-memories-gallery";
import { HomeMemoriesTexts } from "@/app/(home)/components/home-memories-texts";
import { HomeWeblogSingle } from "@/app/(home)/components/home-weblog-single";
import { HomeWeblogSlider } from "@/app/(home)/components/home-weblog-slider";
import type { Metadata } from "next";
import Loading from "@/app/(main)/loading";
import { travelsPlan } from "@/constants";
import HomeClouds from "@/components/home-clouds";

// Add page-specific metadata
export const metadata: Metadata = {
    title: "صفحه اصلی | پرواز بلورین شیردال",
    description:
        "رزرو آنلاین بهترین تورهای مسافرتی داخلی و خارجی با پرواز بلورین شیردال - تجربه سفری به یادماندنی با ما",
    openGraph: {
        title: "پرواز بلورین شیردال | تورهای مسافرتی",
        description: "رزرو آنلاین بهترین تورهای مسافرتی داخلی و خارجی",
    },
};

export default function Home() {
    return (
        <React.Fragment>
            <section className={"min-h-svh relative z-0"}>
                <div className={"h-[70svh] lg:h-svh relative -z-10"}>
                    <HomeHeroSlider />
                    <HomeClouds />
                </div>
                <HomeSearchItems />
            </section>
            <section className={"container-main max-lg:mt-[110px]"}>
                <div className="max-lg:mb-10 max-md:!mb-0">
                    <h2 className={"text-primary text-24 text-center font-semibold"}>
                        کشور مورد علاقتو اینجا انتخاب کن
                    </h2>
                    <h3 className={"text-secondary text-16 text-center"}>
                        * برای ثابت ماندن جزئیات هر کشور یا شهر بر روی آن کلیک کنید
                    </h3>
                </div>
                <HomeSelectCountry />
            </section>

            <section className={"container-main max-w-1135"}>
                <div className={"flex-center !justify-between px-4 mb-5"}>
                    <h2 className={"text-primary text-16 lg:text-24 text-start font-semibold"}>تورهای برگزیده</h2>
                    <LinkButtons variant={"secondary-outlined"} className={"rounded-full"} href={"/tours"}>
                        مشاهده همه
                    </LinkButtons>
                </div>
                <HomeChosenToursSlider />
            </section>

            <section
                className={
                    "home-memories-bg bg-red-400 lg:aspect-[1366/768] mt-10 h-max lg:w-full relative z-0 flex-center flex-col py-10 lg:py-9"
                }
            >
                <h2 className={"text-white text-32 lg:text-36 text-center font-semibold mb-5"}>خاطرات سفر با ما</h2>
                <div className={"w-full flex-center flex-col-reverse lg:flex-row gap-5 max-w-1135"}>
                    <HomeMemoriesTexts
                        sliderClassName={""}
                        className={
                            "w-full lg:w-[35%] h-full aspect-[620/550] flex-start flex-col-reverse lg:flex-row justify-between gap-7  mx-auto relative home-memories-text-overlay"
                        }
                    />
                    <HomeMemoriesGallery
                        sliderClassName={"aspect-[620/550]"}
                        className={"w-full lg:w-[65%] home-memories relative flex-center flex-col "}
                    />
                </div>
                <div className={"absolute -z-40 w-full h-full top-0 left-0 backdrop-blur-sm"} />
                <div className={"home-memories-bg-vector -z-30 absolute top-0 left-0 w-[80%] h-full"} />
            </section>

            <section
                className={
                    "home-weblog-vector relative h-full lg:w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] py-14 px-5"
                }
            >
                {travelsPlan.map((plan, index) => (
                    <HomeWeblogSingle key={index} right={index % 2 === 1} data={{ ...plan }} />
                ))}
            </section>

            <section className={"container-main flex-center flex-col w-full mb-10"}>
                <h2 className={"text-primary text-16 lg:text-24 font-semibold"}>وبلاگ شیردال</h2>
                <p className={"text-darkGray text-14 lg:text-16 mt-5 lg:max-w-[600px] text-center"}>
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <HomeWeblogSlider />
            </section>
        </React.Fragment>
    );
}
