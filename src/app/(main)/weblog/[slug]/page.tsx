import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {DashBgImages} from "@/components/shared/dash-bg-images";
import {AvatarDateLike} from "@/components/ui/avatar-date-like";
import {TagButton} from "@/components/ui/tag-button";
import React from "react";
import {getWeblogSingle} from "@/api/weblog";

import {WeblogSingleType} from "@/types/weblog";
import {env} from "@/env";

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({params}: Props) {
    const slug = decodeURIComponent((await params).slug)
    const weblog: WeblogSingleType | undefined = await getWeblogSingle({slug})

    if (!weblog) {
        return {
            title: 'مقاله یافت نشد',
            description: 'مقاله‌ای با این شناسه وجود ندارد.',
        }
    }

    return {
        title: weblog.metaTitle || weblog.title,
        description: weblog.metaDescription,
        keywords: weblog.metaKeywords,
        openGraph: {
            title: weblog.metaTitle || weblog.title,
            description: weblog.metaDescription,
            images: [
                {
                    url: weblog.picturePath,
                    alt: weblog.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: weblog.metaTitle || weblog.title,
            description: weblog.metaDescription,
            images: [weblog.picturePath],
        },
    }
}

export default async function WeblogSinglePage({params}: Props) {
    const slug = decodeURIComponent((await params).slug)
    const weblog: WeblogSingleType | undefined = await getWeblogSingle({slug})

    if (weblog === undefined) {
        return (
            <main className={'container-main max-w-1135 flex flex-col gap-10 mt-20'}>
                <div className={'w-full flex flex-col-reverse lg:flex-row gap-3 lg:gap-[50px]'}>
                    <div className={'w-full lg:w-1/2 flex flex-col gap-3'}>
                        <h1 className={'font-normal text-16 lg:text-32 text-dark'}>
                            مقاله یافت نشد
                        </h1>
                        <p className="text-darkGray text-14 lg:text-16">
                            مقاله‌ای با این شناسه وجود ندارد.
                        </p>
                    </div>
                    <div className={'w-full lg:w-1/2 flex flex-col gap-3'}>
                        <DashBgImages/>
                    </div>
                </div>
            </main>
        )
    }
    return (
        <main className={'container-main max-w-1135 flex flex-col gap-10 mt-20'}>
            <div className={'w-full flex flex-col-reverse lg:flex-row gap-3 lg:gap-[50px]'}>
                <div className={'w-full lg:w-1/2 flex flex-col gap-3'}>
                    <AvatarDateLike
                        src={env.NEXT_PUBLIC_IMAGE_DIRECTORY + encodeURIComponent(weblog.createdByProfilePicture)}
                        name={'میثم پیغامی'}
                        date={weblog.registrationDate}
                        likes={weblog.likes}
                        isLiked={true}
                    />
                    <h1 className={'font-normal text-16 lg:text-32 text-dark'}>
                        {weblog.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                        {weblog?.blogTags?.map((tag, index) => (
                            <TagButton single={true} tag={tag} key={'tag' + index}/>
                        ))}
                    </div>

                    <p className="text-darkGray text-14 lg:text-16">
                        {weblog.mainText}
                    </p>
                </div>

                <AspectRatio
                    ratio={518 / 450}
                    className={'lg:max-w-[518px] float-left overflow-visible'}>
                    <Image
                        src={env.NEXT_PUBLIC_IMAGE_DIRECTORY + encodeURIComponent(weblog.picturePath)}
                        alt={weblog.title + ' عکس وبلاگ'}
                        fill={true}
                        sizes={'(max-width: 1024px) 100vw, 50vw'}
                        className={'rounded-15 lg:rounded-30 object-cover'}
                    />
                    <DashBgImages className={'w-[80%]'}/>
                </AspectRatio>
            </div>

            {/*<p className="text-darkGray text-14 lg:text-16">*/}
            {/*    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و*/}
            {/*    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و*/}
            {/*    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،*/}
            {/*    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی*/}
            {/*    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و*/}
            {/*    دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای*/}
            {/*    اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.*/}
            {/*</p>*/}

            {/*<p className="text-darkGray text-14 lg:text-16">*/}
            {/*    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و*/}
            {/*    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و*/}
            {/*    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،*/}
            {/*    شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی*/}
            {/*    الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.*/}
            {/*</p>*/}

            {/*<div className={'w-full flex flex-col lg:flex-row gap-3 lg:gap-[50px]'}>*/}
            {/*    <AspectRatio*/}
            {/*        ratio={518 / 450}*/}
            {/*        className={'lg:max-w-[518px] float-left overflow-visible'}>*/}
            {/*        <Image*/}
            {/*            src={env.NEXT_PUBLIC_IMAGE_DIRECTORY + weblog.picturePath}*/}
            {/*            alt={'weblog slider image'}*/}
            {/*            fill={true}*/}
            {/*            sizes={'(max-width: 1024px) 100vw, 50vw'}*/}
            {/*            className={'rounded-15 lg:rounded-30 object-cover'}*/}
            {/*        />*/}
            {/*        <DashBgImages className={'w-[20%] -left-10 right-auto -bottom-10'}/>*/}
            {/*    </AspectRatio>*/}

            {/*    <div className={'w-full lg:w-1/2 flex flex-col gap-[20px] items-center justify-center'}>*/}

            {/*        <p className="text-darkGray text-14 lg:text-16 ">*/}
            {/*            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک*/}
            {/*            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی*/}
            {/*            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی*/}
            {/*            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم*/}
            {/*            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان*/}
            {/*            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و*/}
            {/*            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی*/}
            {/*            سوالات.*/}
            {/*        </p>*/}


            {/*        <p className="text-darkGray text-14 lg:text-16 gap-[15px]">*/}
            {/*            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،*/}
            {/*            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی*/}
            {/*            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه*/}
            {/*            درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری*/}
            {/*            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی.*/}
            {/*        </p>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<p className="text-darkGray text-14 lg:text-16 gap-[15px] mb-10 lg:my-5">*/}
            {/*    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،*/}
            {/*    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد*/}
            {/*    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته*/}
            {/*    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان*/}
            {/*    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید*/}
            {/*    داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل*/}
            {/*    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار*/}
            {/*    گیرد.*/}
            {/*</p>*/}
        </main>
    );
}
