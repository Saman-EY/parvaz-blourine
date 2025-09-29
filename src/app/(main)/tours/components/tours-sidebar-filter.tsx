"use client";
import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { CheckBox } from "@/components/ui/check-box";
import { FilterScrollbarAcc } from "@/components/shared/filter-items/filter-scrollbar-acc";
import { MoneyRangeSlider } from "@/components/shared/filter-items/money-range-slider";
import { StarsScores } from "@/components/ui/stars-scores";
import { DaysRangeSlider } from "@/components/shared/filter-items/days-range-slider";

type Props = {
  className?: string;
};

export function ToursSidebarFilter(props: Props) {
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 80000]);
  const [dayRange, setDayRange] = useState<[number, number]>([2, 20]);

  return (
    <Fragment>
      <CheckBox classes={cn("w-full my-2 flex-row-reverse font-medium")} label={"تورهای فعال"} />
      <CheckBox classes={cn("w-full my-2 flex-row-reverse font-medium")} label={"تورهای بدون ویزا"} />

      <div className={"h-0.5 w-full bg-gray-300 mt-5 mb-2"} />
      <div>
        <span className={"text-dark font-medium text-16"}>محدوده قیمت</span>
        <MoneyRangeSlider
          min={1000}
          max={80000}
          step={100}
          value={priceRange}
          onChangeAction={(val) => setPriceRange(val)}
        />
      </div>
      <div className={"h-0.5 w-full bg-gray-300 mt-5 mb-2"} />
      <div>
        <span className={"text-dark font-medium text-16"}>تعداد روزهای تور</span>
        <DaysRangeSlider min={2} max={20} step={1} value={dayRange} onChangeAction={(val) => setDayRange(val)} />
      </div>
      <div>
        <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
        <span className={"text-dark font-medium text-16"}>انتخاب قاره ها</span>
        <div className={"flex flex-col gap-3 mt-3"}>
          <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"اروپا"} />
          <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آسیا"} />
          <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آمریکا"} />
          <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آفریقا"} />
          <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"استرالیا"} />
        </div>
      </div>
      <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
      <div>
        <div className={"flex-center justify-between w-full"}>
          <span className={"text-dark font-medium text-16"}>کشور ها و شهر ها</span>
          <span className={"text-dark text-14"}>
            <span className={"text-[#0892DC]"}>256</span>
            <span className={"pr-1"}>شهر</span>
          </span>
        </div>
        <div className={"flex flex-col gap-3 mt-3"}>
          <FilterScrollbarAcc label={"اسپانیا"} className={""}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"اروپا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آسیا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آمریکا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آفریقا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"استرالیا"} />
          </FilterScrollbarAcc>
          <FilterScrollbarAcc label={"اسپانیا"} className={""}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"اروپا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آسیا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آمریکا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آفریقا"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"استرالیا"} />
          </FilterScrollbarAcc>
          <span className={"text-[#0892DC] w-full underline text-center cursor-pointer"}>مشاهده بیشتر</span>
        </div>
        {/*    stars */}
        <div>
          <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
          <span className={"text-dark font-medium text-16"}>دسته‌بندی‌ نوع حمل و نقل</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"ترکیبی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"زمینی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"هوایی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"دریایی"} />
          </div>
        </div>
        <div>
          <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
          <span className={"text-dark font-medium text-16"}>دسته‌بندی‌ نوع تور</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"طبیعت گردی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"شهر گردی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"تاریخی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"ورزشی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"آموزشی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"ماجراجویانه"} />
          </div>
        </div>
        {/*    */}
        <div>
          <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
          <span className={"text-dark font-medium text-16"}>دسته‌بندی‌ مقاصد تور</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"تک شهره"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"چند شهره"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"تک کشوره"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"چند کشوره"} />
          </div>
        </div>
        {/*    */}
        <div>
          <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
          <span className={"text-dark font-medium text-16"}>شرکت حمل کننده:</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"ایرلاین"} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
