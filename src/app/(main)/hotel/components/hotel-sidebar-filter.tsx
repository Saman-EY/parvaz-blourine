"use client";
import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { CheckBox } from "@/components/ui/check-box";
import { FilterScrollbarAcc } from "@/components/shared/filter-items/filter-scrollbar-acc";
import { MoneyRangeSlider } from "@/components/shared/filter-items/money-range-slider";
import { StarsScores } from "@/components/ui/stars-scores";

type Props = {
  className?: string;
};

export function HotelSidebarFilter(props: Props) {
  const [open, setOpen] = useState(false);
  const [dataFilters, setDataFilters] = useState<any | {}>({});
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    await axios
      .get("/data/hotels-filter.json")
      .then((res) => setDataFilters(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);
  const [check, setCheck] = useState<boolean>(false);
  return (
    <Fragment>
      <div className={"hidden lg:flex flex-center w-full justify-between"}>
        <span className={"text-16 text-primary"}>فیلتر ها</span>
        <span className={"text-14 text-[#E57373] cursor-pointer"}>حذف فیلتر ها</span>
      </div>
      <div className={"hidden lg:block h-0.5 w-full bg-gray-300 mt-5 mb-2"} />
      <div>
        <span className="text-16">محدوده قیمت</span>
        <MoneyRangeSlider
          min={1000}
          max={80000}
          step={100}
          value={[20000, 50000]}
          onChangeAction={(value: [number, number]) => console.log(value)}
        />
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
          <span className={"text-dark font-medium text-16"}>درجه هتل ها</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox
              classes={cn("bg-white flex-row-reverse py-2 pr-3 rounded-10")}
              child={<StarsScores number={5} className={"justify-start bg-white items-start "} />}
            />
            <CheckBox
              classes={cn("bg-white flex-row-reverse py-2 pr-3 rounded-10")}
              child={<StarsScores number={4} className={"justify-start bg-white items-start "} />}
            />
            <CheckBox
              classes={cn("bg-white flex-row-reverse py-2 pr-3 rounded-10")}
              child={<StarsScores number={3} className={"justify-start bg-white items-start "} />}
            />
            <CheckBox
              classes={cn("bg-white flex-row-reverse py-2 pr-3 rounded-10")}
              child={<StarsScores number={2} className={"justify-start bg-white items-start "} />}
            />
          </div>
        </div>
        <div>
          <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
          <span className={"text-dark font-medium text-16"}>پزیرایی هتل</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"اقامت با صبحانه"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"اقامت بدون صبحانه"} />
            <CheckBox
              classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")}
              label={"صبحانه و ناهار و شام"}
            />
          </div>
        </div>

        <div>
          <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
          <span className={"text-dark font-medium text-16"}>دسته‌بندی‌ هتل‌ها</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"استخر دار"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"سونا و جکوزی"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"باشگاه بدنسازی"} />
          </div>
        </div>

        <div>
          <div className={"h-[0.25px] w-full bg-gray-300 mt-5 mb-2"} />
          <span className={"text-dark font-medium text-16"}>دسته‌بندی‌ موقعیت هتل</span>
          <div className={"flex flex-col gap-3 mt-3"}>
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"مرکز شهر"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"مرکز شهر"} />
            <CheckBox classes={cn("bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10")} label={"نزدیک شهر"} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
