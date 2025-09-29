import {cn} from "@/lib/utils";
import {VisaSidebarFilter} from "@/app/(main)/visa-passport/components/visa-sidebar-filter";
import {VisaCardRow} from "@/app/(main)/visa-passport/components/visa-card-row";
import {VisaService} from "@/services/visa-services";
import {Metadata} from "next";
import {TemplateProduct} from "@/components/ui/template/template-product";

const data = {
    title: 'ویزای فرانسه',
    image: '/assets/images/dynamic/china.png',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    status: 'active',
    date: '12 روز کاری',
    visaType: 'تجاری',
    officer: 'سفارت',
    slug: 'single',
    country: ['fr', 'us']
}

export const metadata: Metadata = {
    title: "ویزا و پاسپورت | پرواز بلورین شیردال",
    description: "خدمات کامل ویزا و پاسپورت برای سفرهای خارجی. اخذ ویزای شینگن، آمریکا، کانادا، استرالیا و سایر کشورها با بهترین قیمت و سریع‌ترین زمان. مشاوره رایگان ویزا.",
    keywords: [
        "ویزا",
        "پاسپورت",
        "ویزای شینگن",
        "ویزای آمریکا",
        "ویزای کانادا",
        "ویزای استرالیا",
        "ویزای ترکیه",
        "ویزای دبی",
        "ویزای چین",
        "ویزای ژاپن",
        "ویزای کره جنوبی",
        "ویزای ویتنام",
        "پاسپورت ایرانی",
        "تجدید پاسپورت",
        "مشاوره ویزا",
        "پرواز بلورین شیردال"
    ],
    openGraph: {
        title: "ویزا و پاسپورت | پرواز بلورین شیردال",
        description: "خدمات کامل ویزا و پاسپورت برای سفرهای خارجی. اخذ ویزای شینگن، آمریکا، کانادا، استرالیا و سایر کشورها با بهترین قیمت و سریع‌ترین زمان.",
        type: "website",
        url: "https://parvaz-shirdal.com/visa-passport",
        images: [
            {
                url: "/og-visa-passport.jpg",
                width: 1200,
                height: 630,
                alt: "خدمات ویزا و پاسپورت پرواز بلورین شیردال"
            }
        ],
        locale: "fa_IR"
    },
    twitter: {
        card: "summary_large_image",
        title: "ویزا و پاسپورت | پرواز بلورین شیردال",
        description: "خدمات کامل ویزا و پاسپورت برای سفرهای خارجی. اخذ ویزای شینگن، آمریکا، کانادا، استرالیا و سایر کشورها با بهترین قیمت و سریع‌ترین زمان.",
        images: ["/twitter-visa-passport.jpg"]
    },
    alternates: {
        canonical: "https://parvaz-shirdal.com/visa-passport"
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

interface Props {
    searchParams?: Promise<{
        page?: string;
    }>;
}

export default async function ToursListPage(props: Props) {
    const searchParams = await props.searchParams;
    const page = Number(searchParams?.page) || 1;
    let visasList;
    let error = null;
    try {
        visasList = await VisaService.getList({page: page});
    } catch (err) {
        error = err;
        console.error("Error loading visas:", err);
    }

    return (
        <TemplateProduct showGrid={false} SideBarComponent={VisaSidebarFilter}>
            {error ? (
                <div
                    className="flex flex-col items-center justify-center py-12 text-center"
                    role="alert"
                >
                    <h2 className="text-red-500 text-lg font-medium mb-2">
                        خطا در بارگذاری ویزا ها
                    </h2>
                    <p className="text-gray-600 text-sm">لطفاً دوباره تلاش کنید</p>
                </div>
            ) : !visasList?.data?.data || visasList.data.data.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <h2 className="text-gray-500 text-lg font-medium mb-2">
                        دیتایی یافت نشد
                    </h2>
                    <p className="text-gray-400 text-sm">
                        لطفاً فیلترهای جستجو را تغییر دهید
                    </p>
                </div>
            ) : (
                <div className={cn('grid w-full gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-items-center')}>
                    {visasList.data.data.map((visaData, index) =>
                        (<VisaCardRow visaData={visaData} key={index}/>
                        ))}
                </div>
            )}
        </TemplateProduct>
    )
}