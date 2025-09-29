import {Buttons} from "@/components/ui/buttons";
import {IconSelect} from "@/components/ui/icon-select";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "گالری تصاویر | پرواز بلورین شیردال",
    description: "گالری تصاویر و فیلم‌های سفرهای پرواز بلورین شیردال. مشاهده تصاویر زیبا از تورهای گردشگری، مقاصد مختلف و تجربیات مسافران.",
    keywords: [
        "گالری تصاویر",
        "تصاویر سفر",
        "گالری تور",
        "عکس سفر",
        "فیلم سفر",
        "تصاویر گردشگری",
        "گالری پرواز بلورین",
        "تصاویر اروپا",
        "تصاویر آسیا",
        "تصاویر آفریقا",
        "پرواز بلورین شیردال"
    ],
    openGraph: {
        title: "گالری تصاویر | پرواز بلورین شیردال",
        description: "گالری تصاویر و فیلم‌های سفرهای پرواز بلورین شیردال. مشاهده تصاویر زیبا از تورهای گردشگری، مقاصد مختلف و تجربیات مسافران.",
        type: "website",
        url: "https://parvaz-shirdal.com/gallery",
        images: [
            {
                url: "/og-gallery.jpg",
                width: 1200,
                height: 630,
                alt: "گالری تصاویر پرواز بلورین شیردال"
            }
        ],
        locale: "fa_IR"
    },
    twitter: {
        card: "summary_large_image",
        title: "گالری تصاویر | پرواز بلورین شیردال",
        description: "گالری تصاویر و فیلم‌های سفرهای پرواز بلورین شیردال. مشاهده تصاویر زیبا از تورهای گردشگری، مقاصد مختلف و تجربیات مسافران.",
        images: ["/twitter-gallery.jpg"]
    },
    alternates: {
        canonical: "https://parvaz-shirdal.com/gallery"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

export default function Home() {
  return (
      <div className={'h-svh w-full flex items-center justify-center'}>
          <Buttons>
              <IconSelect name={'slide-next'}/>
          </Buttons>
      </div>
  );
}
