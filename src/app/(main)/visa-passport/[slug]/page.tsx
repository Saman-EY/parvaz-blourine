import {Metadata} from "next";
import {VisaService} from "@/services/visa-services";
import Flag from "react-world-flags";
import React from "react";
import {BookmarkButton} from "@/components/ui/bookmark-button";
import {Divider} from "@/components/ui/divider";
import {cn} from "@/lib/utils";
import {ShareLinkProducts} from "@/components/shared/share-link-products";
import {IconSelect} from "@/components/ui/icon-select";
import {Buttons} from "@/components/ui/buttons";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {env} from "@/env";
import {VisaForm} from "@/app/(main)/visa-passport/components/visa-form";

export const metadata: Metadata = {
    title: "جزئیات ویزا | پرواز بلورین شیردال",
    description: "مشاهده جزئیات کامل ویزا، شرایط اخذ، مدارک مورد نیاز، زمان صدور و هزینه ویزای کشورهای مختلف. مشاوره رایگان ویزا.",
    keywords: [
        "جزئیات ویزا",
        "شرایط ویزا",
        "مدارک ویزا",
        "زمان صدور ویزا",
        "هزینه ویزا",
        "مشاوره ویزا",
        "ویزای شینگن",
        "ویزای آمریکا",
        "ویزای کانادا",
        "ویزای استرالیا",
        "پرواز بلورین شیردال"
    ],
    openGraph: {
        title: "جزئیات ویزا | پرواز بلورین شیردال",
        description: "مشاهده جزئیات کامل ویزا، شرایط اخذ، مدارک مورد نیاز، زمان صدور و هزینه ویزای کشورهای مختلف. مشاوره رایگان ویزا.",
        type: "website",
        url: "https://parvaz-shirdal.com/visa-passport/single",
        images: [
            {
                url: "/og-visa-single.jpg",
                width: 1200,
                height: 630,
                alt: "جزئیات ویزا پرواز بلورین شیردال"
            }
        ],
        locale: "fa_IR"
    },
    twitter: {
        card: "summary_large_image",
        title: "جزئیات ویزا | پرواز بلورین شیردال",
        description: "مشاهده جزئیات کامل ویزا، شرایط اخذ، مدارک مورد نیاز، زمان صدور و هزینه ویزای کشورهای مختلف. مشاوره رایگان ویزا.",
        images: ["/twitter-visa-single.jpg"]
    },
    alternates: {
        canonical: "https://parvaz-shirdal.com/visa-passport/single"
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
    params: Promise<{ slug: string }>
}

export default async function VisaPassport({params}: Props) {
    const slug = decodeURIComponent((await params).slug)
    const visaResponse = await VisaService.getSingle({slug})
    const visaData = visaResponse.data
    return (
        <section
            className={'h-full flex container-main flex-col lg:flex-row-reverse justify-start items-start mt-5 mx-auto gap-4 lg:gap-8'}>
            {/*    visa sidebar end */}
            <div className={'bg-[#F5F5F5] rounded-15 w-full h-auto lg:w-[260px] px-5 py-4 flex-center flex-col gap-4'}>
                <div className={'w-full flex-center justify-between'}>
                    <Flag code={visaData.country.code} className="w-[40px] h-[26px] object-cover rounded-md"/>
                    <div className={' z-10 top-3 right-3 bg-white rounded-5 p-0.5'}>
                        <BookmarkButton className={''}/>
                    </div>
                </div>
                <h2 className={'text-20 font-medium w-full text-center'}>
                    <span> ویزای </span>
                    <span>{visaData?.country.name_fa}</span>
                </h2>
                <Divider className={'px-5'}/>
                <div>
                    <span>وضعیت: </span>
                    <span
                        className={cn('font-semibold', visaData.status == 'open' ? 'text-info' : 'text-red-800')}> {visaData.status === 'open' ? 'فعال' : 'غیرفعال'} </span>
                </div>
                <div>
                    <span>نوع ویزا: </span>
                    <span>{visaData.type}</span>
                </div>
                <div>
                    <span>زمان صدور ویزا: </span>
                    <span> {visaData.issue_duration} </span>
                    <span>روز کاری</span>
                </div>
                <div>
                    <span>متصدی صدور ویزا: </span>
                    <span>{visaData.issuer}</span>
                </div>
                <Divider className={'px-5'}/>
                <ShareLinkProducts variant={'ویزا'}/>
                <Buttons className={'text-white w-full py-2 px-0 text-nowrap gap-1'}
                         variant={'danger'}>
                    <IconSelect classes={'text-14'} name={'download'}/>
                    <span>دانلود پکیج</span>
                </Buttons>
            </div>
            {/*    visa sidebar start */}
            <div className={'space-y-4'}>
                <div className={'bg-[#F5F5F5] rounded-15 w-full py-3.5 pb-8 px-5 lg:px-10'}>
                    <h3 className={'w-full text-center font-medium text-16 lg:text-20 text-primary'}>توضیحات ویزا</h3>
                    <article className={'flex-center gap-4 flex-col lg:flex-row'}>
                        <AspectRatio className={'w-full h-[200px] lg:w-[250px] lg:h-[250px] rounded-10 lg:rounded-15 overflow-clip'}>
                            <Image
                                src={`${env.NEXT_PUBLIC_IMAGE_DIRECTORY}${visaData.image.path}`}
                                alt={visaData?.image?.alt || visaData.name || '-'}
                                className={'w-full h-full object-cover'}
                                sizes="50vw"
                                fill={true}
                            />
                        </AspectRatio>
                        <div dangerouslySetInnerHTML={{__html: visaData.description || '-'}} />
                    </article>
                </div>
                <div className={'bg-[#F5F5F5] rounded-15 w-full py-3.5 pb-8 px-5 lg:px-10 space-y-4'}>
                    <h3 className={'w-full text-center font-medium text-16 lg:text-20 text-primary'}>چک لیست مدارک ویزا</h3>
                    <p className={'text-14 lg:text-16 text-center px-10'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                    <VisaForm/>
                </div>
                <div className={'bg-[#F5F5F5] rounded-15 w-full py-3.5 pb-8 px-5 lg:px-10 space-y-4'}>
                    <h3 className={'w-full text-center font-medium text-16 lg:text-20 text-primary'}>آدرس و تلفن سفارت ها</h3>
                    <p className={'text-14 lg:text-16 text-center px-10'}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                    </p>
                    <div className={'w-full flex-center justify-start text-[#444444] text-14 lg:text-16'}>
                        <div className={'flex-center w-full gap-2 justify-start'}>
                            <IconSelect classes={'text-xl'} name={'location-outline'}/>
                            <span>
                                {visaData.addresses.address || '---'}
                            </span>
                        </div>
                        <div className={'flex-center w-full gap-2 justify-start'}>
                            <IconSelect classes={'text-xl'} name={'call-outline'}/>
                            <span>
                                {visaData.addresses.number || '---'}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}