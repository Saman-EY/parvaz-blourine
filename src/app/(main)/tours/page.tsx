import { cn } from "@/lib/utils";
import { Fragment } from "react";
import { ToursSidebarFilter } from "@/app/(main)/tours/components/tours-sidebar-filter";
import { ToursCardGrid } from "@/app/(main)/tours/components/cards/tours-card-grid";
import { ToursCardRow } from "@/app/(main)/tours/components/cards/tours-card-row";
import { ToursCardsSm } from "@/app/(main)/tours/components/cards/tours-cards-sm";
import { TourService } from "@/services/tour-services";
import { Metadata } from "next";
import { TemplateProduct } from "@/components/ui/template/template-product";

interface Props {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: "تورهای گردشگری | پرواز بلورین شیردال",
  description:
    "مجموعه کامل تورهای گردشگری داخلی و خارجی با پرواز بلورین شیردال. رزرو آنلاین تورهای قونیه، یونان، فرانسه، کانادا، ویتنام، کره جنوبی و آفریقای جنوبی با بهترین قیمت و کیفیت.",
  keywords: [
    "تورهای گردشگری",
    "تور خارجی",
    "تور داخلی",
    "تور قونیه",
    "کروز یونان",
    "تور فرانسه",
    "تور کانادا",
    "تور ویتنام",
    "تور کره جنوبی",
    "تور آفریقای جنوبی",
    "پرواز بلورین شیردال",
    "رزرو تور آنلاین",
    "سفرهای خارجی",
    "کشتی کروز",
  ],
  openGraph: {
    title: "تورهای گردشگری | پرواز بلورین شیردال",
    description:
      "مجموعه کامل تورهای گردشگری داخلی و خارجی با پرواز بلورین شیردال. رزرو آنلاین تورهای قونیه، یونان، فرانسه، کانادا، ویتنام، کره جنوبی و آفریقای جنوبی با بهترین قیمت و کیفیت.",
    type: "website",
    url: "https://parvaz-shirdal.com/tours",
    images: [
      {
        url: "/og-tours.jpg",
        width: 1200,
        height: 630,
        alt: "تورهای گردشگری پرواز بلورین شیردال",
      },
    ],
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "تورهای گردشگری | پرواز بلورین شیردال",
    description:
      "مجموعه کامل تورهای گردشگری داخلی و خارجی با پرواز بلورین شیردال. رزرو آنلاین تورهای قونیه، یونان، فرانسه، کانادا، ویتنام، کره جنوبی و آفریقای جنوبی با بهترین قیمت و کیفیت.",
    images: ["/twitter-tours.jpg"],
  },
  alternates: {
    canonical: "https://parvaz-shirdal.com/tours",
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

export default async function ToursListPage(props: Props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  let toursList;
  let error = null;
  try {
    toursList = await TourService.getList({ page: page });
  } catch (err) {
    error = err;
    console.error("Error loading tours:", err);
  }
  return (
    <TemplateProduct showGrid={true} SideBarComponent={ToursSidebarFilter}>
      {error ? (
        <div className="flex flex-col items-center justify-center py-12 text-center" role="alert">
          <h2 className="text-red-500 text-lg font-medium mb-2">خطا در بارگذاری تورها</h2>
          <p className="text-gray-600 text-sm">لطفاً دوباره تلاش کنید</p>
        </div>
      ) : !toursList?.data?.data || toursList.data.data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-gray-500 text-lg font-medium mb-2">توری یافت نشد</h2>
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
            {toursList.data.data.map((tour, index) => (
              <Fragment key={index}>
                <ToursCardRow tourData={tour} className={"flex"} />
                <ToursCardGrid tourData={tour} className={"hidden"} />
              </Fragment>
            ))}
          </div>
          <div
            className={cn("grid lg:hidden w-full gap-5 grid-cols-1 md:grid-cols-2 justify-items-center")}
            role="list"
            aria-label="تورهای گردشگری - نسخه موبایل"
          >
            {toursList.data.data.map((tour, index) => (
              <ToursCardsSm tourData={tour} key={index} />
            ))}
          </div>
        </>
      )}
    </TemplateProduct>
  );
}
