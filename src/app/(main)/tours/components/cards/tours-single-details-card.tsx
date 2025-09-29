import * as React from "react";
import { Buttons } from "@/components/ui/buttons";
import Link from "next/link";
import { cn, remainingDays } from "@/lib/utils";
import { IconSelect } from "@/components/ui/icon-select";
import { highlightNumberInText } from "@/helpers/highlight-number-In-Text";
import { Divider } from "@/components/ui/divider";
import { ShareLinkProducts } from "@/components/shared/share-link-products";
import { ICourse, ITour } from "@/types/tourSingle";
import { useMyDataCxt } from "@/store/data-context";
import { getPersianDate } from "@/helpers/get-perisan-date";
import { getDayFromNow } from "@/helpers/get-days-from-now";

type Props = {
  className?: string;
};
// const data = {
//   country: "FR",
//   status: "active",
//   remainingDays: "16 روز تا پایان ثبت‌نام",
//   rating: 3,
//   code: " K891345pd",
//   client_rating: 167,
//   title: "تور 6 روزه فرانسه",
//   startDate: "1399/01/01",
//   capacity: {
//     total: 24,
//     filled: 15,
//     remaining: 9,
//   },
//   price: {
//     toman: 36800000,
//     dollar: 1350,
//   },
//   description:
//     "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی هدف تکنولوژی مورد نیاز",
// };

export function ToursSingleDetailsCard(props: Props) {
  const { currentCourse, setCurrentCourse } = useMyDataCxt();
  const { tour } = useMyDataCxt();

  const calculatedDays = getDayFromNow(currentCourse?.from_date!);

  console.log("**", tour);

  return (
    // top card tours
    <article
      className={cn(
        "w-full overflow-clip relative text-dark bg-[#F5F5F5] rounded-10 lg:rounded-15 flex-center flex-col px-4 py-8 lg:py-6 text-16 gap-3",
        props.className
      )}
    >
      {tour?.name && <h2 className={"text-base font-semibold"} dangerouslySetInnerHTML={{ __html: tour.name }} />}
      <Divider className={"px-5"} />
      <p className={"text-sm font-normal"}>
        <span>وضعیت: </span>
        <span className={"text-info"}>
          {currentCourse?.status === "open"
            ? "فعال"
            : currentCourse?.status === "pending"
            ? "در حال برنامه ریزی"
            : "غیرفعال"}
        </span>
      </p>
      <div className={"flex-center gap-2 justify-start mt-2"}>
        <span className={"text-xl"}>
          <IconSelect name={"clock"} />
        </span>
        <div className="text-sm">
          <span> {calculatedDays} </span>
          <span>روز تا پایان ثبت‌نام</span>
        </div>
      </div>
      <p className={"flex-center text-sm justify-start gap-2 mt-1"}>
        <span className={"text-xl"}>
          <IconSelect name={"users"} />
        </span>
        <span> {currentCourse?.capacity} </span>
        نفر ظرفیت
      </p>
      <p className={"flex-center justify-start gap-1 mt-1"}>
        <span className={"text-xl"}>
          <IconSelect name={"calendar"} />
        </span>
        <span className="text-sm"> شروع تور </span>
        <span className="text-sm">{getPersianDate(currentCourse?.from_date!)}</span>
      </p>
      <Divider className={"px-5"} />
      <ShareLinkProducts variant={"تورها"} />

      <div className={"w-full flex-center gap-4 mt-2"}>
        <Link className={"w-full lg:w-auto"} href={"/src/app/(main)/tours/components/single"}>
          <Buttons className={"w-full text-white lg:w-[105px] py-2 text-xs !rounded-lg px-1"} variant={"info"}>
            مقایسه تورها
          </Buttons>
        </Link>
        <a className={"w-full lg:w-auto"} href="#">
          <Buttons className={"text-white w-full lg:w-[105px] py-2 px-0 !rounded-lg text-nowrap gap-1"} variant={"danger"}>
            <IconSelect classes={"text-14"} name={"download"} />
            <span className="text-xs">دانلود پکیج</span>
          </Buttons>
        </a>
      </div>

      <Link className={"w-full"} href={"/src/app/(main)/tours/components/single"}>
        <Buttons className={"w-full text-white text-sm  py-2"} variant={"primary"}>
          جزئیات و رزرو
        </Buttons>
      </Link>
    </article>
  );
}
