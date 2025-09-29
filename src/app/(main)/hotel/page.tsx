import "./hotel.css";

import { HotelCardRow } from "@/app/(main)/hotel/components/cards/hotel-card-row";
import { HotelCardGrid } from "@/app/(main)/hotel/components/cards/hotel-card-grid";
import { cn } from "@/lib/utils";
import { HotelSidebarFilter } from "@/app/(main)/hotel/components/hotel-sidebar-filter";
import { HotelCardsSm } from "@/app/(main)/hotel/components/cards/hotel-cards-sm";
import { Fragment } from "react";
import { Metadata } from "next";
import { HotelService } from "@/services/hotel-services";
import { TemplateProduct } from "@/components/ui/template/template-product";

export const metadata: Metadata = {
  title: "هتل‌های خارجی | پرواز بلورین شیردال",
  description:
    "رزرو هتل‌های لوکس و اقتصادی در سراسر جهان. هتل‌های 5 ستاره، 4 ستاره و 3 ستاره در اروپا، آسیا، آمریکا و آفریقا با بهترین قیمت و کیفیت.",
  keywords: [
    "رزرو هتل",
    "هتل خارجی",
    "هتل اروپا",
    "هتل آسیا",
    "هتل آمریکا",
    "هتل 5 ستاره",
    "هتل 4 ستاره",
    "هتل 3 ستاره",
    "هتل لوکس",
    "هتل اقتصادی",
    "رزرو آنلاین هتل",
    "هتل فرانسه",
    "هتل ایتالیا",
    "هتل آلمان",
    "هتل اسپانیا",
    "هتل ترکیه",
    "هتل دبی",
    "هتل تایلند",
    "هتل سنگاپور",
    "پرواز بلورین شیردال",
  ],
  openGraph: {
    title: "هتل‌های خارجی | پرواز بلورین شیردال",
    description:
      "رزرو هتل‌های لوکس و اقتصادی در سراسر جهان. هتل‌های 5 ستاره، 4 ستاره و 3 ستاره در اروپا، آسیا، آمریکا و آفریقا با بهترین قیمت و کیفیت.",
    type: "website",
    url: "https://parvaz-shirdal.com/hotel",
    images: [
      {
        url: "/og-hotel.jpg",
        width: 1200,
        height: 630,
        alt: "رزرو هتل‌های خارجی پرواز بلورین شیردال",
      },
    ],
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "هتل‌های خارجی | پرواز بلورین شیردال",
    description:
      "رزرو هتل‌های لوکس و اقتصادی در سراسر جهان. هتل‌های 5 ستاره، 4 ستاره و 3 ستاره در اروپا، آسیا، آمریکا و آفریقا با بهترین قیمت و کیفیت.",
    images: ["/twitter-hotel.jpg"],
  },
  alternates: {
    canonical: "https://parvaz-shirdal.com/hotel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface Props {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;

  let hotelList;
  let error = null;

  try {
    hotelList = await HotelService.getList({ page: page });
  } catch (err) {
    error = err;
    console.error("Error loading tours:", err);
  }

  console.log(hotelList?.data)


  return (
    <TemplateProduct showGrid={true} SideBarComponent={HotelSidebarFilter}>
      {error ? (
        <div className="flex flex-col items-center justify-center py-12 text-center" role="alert">
          <h2 className="text-red-500 text-lg font-medium mb-2">خطا در بارگذاری هتل ها</h2>
          <p className="text-gray-600 text-sm">لطفاً دوباره تلاش کنید</p>
        </div>
      ) : !hotelList?.data?.data || hotelList.data.data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-gray-500 text-lg font-medium mb-2">دیتایی یافت نشد</h2>
          <p className="text-gray-400 text-sm">لطفاً فیلترهای جستجو را تغییر دهید</p>
        </div>
      ) : (
        <>
          <div
            id={"cards-container"}
            className={cn("hidden lg:grid w-full gap-5 grid-cols-1")}
            role="list"
            aria-label="تورهای گردشگری - نسخه دسکتاپ"
          >
            {hotelList?.data?.data.map((hotel, index) => (
              <Fragment key={index}>
                <HotelCardRow hotel={hotel} className={"flex"} />
                <HotelCardGrid hotel={hotel} className={"hidden"} />
                {!hotelList?.data?.data?.length && (
                  <p className={"col-span-full text-center text-sm text-gray-500"}>به پایان صفحه رسیدید!</p>
                )}
              </Fragment>
            ))}
          </div>
          <div
            className={cn("grid lg:hidden w-full gap-5 grid-cols-1 md:grid-cols-2 justify-items-center")}
            role="list"
            aria-label="تورهای گردشگری - نسخه موبایل"
          >
            {hotelList?.data?.data?.map((hotel, index) => (
              <HotelCardsSm hotel={hotel} key={index} />
            ))}
          </div>
        </>
      )}
    </TemplateProduct>
  );
}
