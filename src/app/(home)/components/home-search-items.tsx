"use client";
import { useState } from "react";
import { IconSelect } from "@/components/ui/icon-select";
import { cn } from "@/lib/utils";
import { HomeSearchDropdown } from "@/app/(home)/components/home-search-dropdown";
import { Buttons } from "@/components/ui/buttons";
import { travelServiceCategory } from "@/constants";

export const HomeSearchItems = () => {
    const [selectedItem, setSelectedItem] = useState(travelServiceCategory[0]?.id ?? 0);
    return (
        <section className={"px-5 flex-center flex-col items-center justify-center w-full"}>
            <div className={"flex-center w-full"}>
                <div
                    className={
                        "bg-white/50 backdrop-blur-[2px] px-5 py-8 text-darkGray rounded-t-15 grid grid-cols-3 place-content-center items-center gap-x-3 gap-y-5 lg:gap-2 lg:flex w-full justify-between border-b max-w-[650px]"
                    }
                >
                    {travelServiceCategory.map((item, index) => {
                        return (
                            <button
                                className={cn(
                                    ["cursor-pointer text-16 flex items-center gap-2"],
                                    selectedItem === item.id ? "text-primary" : ""
                                )}
                                onClick={() => setSelectedItem(item.id)}
                                key={index}
                            >
                                <IconSelect classes={"text-2xl"} name={item.icon} />
                                {item.title}
                            </button>
                        );
                    })}
                    <div className={"bg-lightGray w-[90%] h-[0.25px] absolute bottom-0 left-1/2 -translate-x-1/2"} />
                </div>
            </div>

            <div
                className={
                    "bg-white/50 backdrop-blur-[2px] text-darkGray rounded-[15px] overflow-clip w-full max-w-1135 flex flex-col lg:flex-row justify-between"
                }
            >
                <div className={"grid lg:flex grid-cols-2 lg:justify-between w-full gap-5 p-5"}>
                    {travelServiceCategory
                        ?.find((item) => item.id === selectedItem)
                        ?.fields?.map((field, index) => {
                            return <HomeSearchDropdown key={index} title={field.label} items={field.options} />;
                        })}
                </div>
                <Buttons className={"hidden lg:flex rounded-none"} variant={"secondary"}>
                    <IconSelect classes={"text-2xl ml-2"} name={"search"} />
                    جستجو
                </Buttons>
                <div className={"flex-center"}>
                    <Buttons className={"flex lg:hidden px-4 py-2"} variant={"secondary"}>
                        <IconSelect classes={"text-2xl ml-2"} name={"search"} />
                        جستجو
                    </Buttons>
                </div>
            </div>
        </section>
    );
};
