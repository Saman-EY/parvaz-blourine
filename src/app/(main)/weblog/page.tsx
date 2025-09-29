import './weblog.css';
import {TagButton} from "@/components/ui/tag-button";
import {WeblogSingleSlider} from "@/app/(main)/weblog/components/weblog-single-slider";
import {BgDots} from "@/components/ui/icons/bg-dots";
import React from "react";
import {getWeblogList} from "@/api/weblog";
import {WeblogListFeed} from "@/app/(main)/weblog/components/weblog-list-feed";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "وبلاگ پرواز بلورین شیردال | راهنمای سفرهای خارجی",
    description:
        "وبلاگ پرواز بلورین شیردال به معرفی تورهای گردشگری متنوع در مقاصدی همچون قونیه، یونان، فرانسه، کانادا، ویتنام، کره جنوبی و آفریقای جنوبی می‌پردازد. اطلاعات جامع و به‌روز درباره تورهای کشتی کروز، سفرهای فرهنگی و طبیعی را در این وبلاگ بیابید.",
    keywords: [
        "تور قونیه",
        "کروز یونان",
        "تور فرانسه",
        "تور کانادا",
        "تور ویتنام",
        "تور کره جنوبی",
        "تور آفریقای جنوبی",
        "کشتی کروز",
        "سفرهای خارجی",
        "پرواز بلورین شیردال"
    ],
    openGraph: {
        title: "وبلاگ پرواز بلورین شیردال | راهنمای سفرهای خارجی و تورهای کشتی کروز",
        description:
            "وبلاگ پرواز بلورین شیردال به معرفی تورهای گردشگری متنوع در مقاصدی همچون قونیه، یونان، فرانسه، کانادا، ویتنام، کره جنوبی و آفریقای جنوبی می‌پردازد. اطلاعات جامع و به‌روز درباره تورهای کشتی کروز، سفرهای فرهنگی و طبیعی را در این وبلاگ بیابید.",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "وبلاگ پرواز بلورین شیردال | راهنمای سفرهای خارجی و تورهای کشتی کروز",
        description:
            "وبلاگ پرواز بلورین شیردال به معرفی تورهای گردشگری متنوع در مقاصدی همچون قونیه، یونان، فرانسه، کانادا، ویتنام، کره جنوبی و آفریقای جنوبی می‌پردازد. اطلاعات جامع و به‌روز درباره تورهای کشتی کروز، سفرهای فرهنگی و طبیعی را در این وبلاگ بیابید.",
    },
};

export default async function Weblogs(props: {
    searchParams?: Promise<{
        categories?: string;
        page?: string;
        tag?: string;
    }>;
}) {

    const searchParams = await props.searchParams;
    const tagId = Number(searchParams?.tag) || undefined;

    const category = Number(searchParams?.tag) || undefined;
    const weblogList = await getWeblogList({page: 1, category: category, tag: tagId});
    return (
        <main className={''}>
            <section className={'flex-center flex-col max-w-[592px] gap-3 mx-auto my-5 relative px-5 lg:px-0'}>
                <h1 className={'text-24 text-primary font-semibold'}>
                    وبلاگ شیردال
                </h1>
                <p className={'text-darkGray text-center text-14'}>
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <h2 className={'text-primary text-16 font-semibold'}>
                    تگ‌های پر بازدید
                </h2>
                <div className={'flex-center gap-3 w-full flex-wrap'}>
                    {weblogList?.blogTagsList?.map((tag, index) => (
                        <TagButton active={Boolean(Number(tag.id) === Number(tagId))} tag={tag} key={'tag' + index}/>
                    ))}
                </div>
                <BgDots columns={7} rows={13} className={'-translate-x-1/2 left-1/2 top-4'}/>
            </section>
            <section className={'container-main'}>
                <WeblogSingleSlider className={'w-full mx-auto max-w-[1226px]'}/>
            </section>
            {weblogList &&
                <WeblogListFeed initialData={weblogList}/>}

        </main>
    );
}
