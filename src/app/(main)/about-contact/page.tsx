import "./contact-us.css";
import { ContactForm } from "@/app/(main)/about-contact/components/contact-from";
import { ContactBorderedIcon } from "@/app/(main)/about-contact/components/contact-bordered-icon";
import type { Metadata } from "next";
import { ContactIcon } from "@/app/(main)/about-contact/components/contact-icon";
import { BgDots } from "@/components/ui/icons/bg-dots";
import { VideoPlayer } from "@/components/ui/video-player";
import { ContactAgencyGallery } from "@/app/(main)/about-contact/components/contact-agency-gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";
import { ContactAccordionBox } from "@/app/(main)/about-contact/components/contact-accordion-box";
import { DashBgImages } from "@/components/shared/dash-bg-images";

export const metadata: Metadata = {
  title: "درباره ما و تماس | پرواز بلورین شیردال",
  description:
    "آژانس مسافرتی پرواز بلورین شیردال با بیش از 40 سال تجربه در ارائه خدمات گردشگری. تماس با ما، آدرس، تلفن و اطلاعات تماس آژانس مسافرتی.",
  keywords: [
    "درباره ما",
    "تماس با ما",
    "آژانس مسافرتی",
    "پرواز بلورین شیردال",
    "آدرس آژانس",
    "تلفن آژانس",
    "تماس آژانس",
    "سابقه آژانس",
    "تاریخچه آژانس",
    "پرسنل آژانس",
    "سوالات متداول",
    "پشتیبانی مشتریان",
    "راهنمای سفر",
    "مشاوره سفر",
  ],
  openGraph: {
    title: "درباره ما و تماس | پرواز بلورین شیردال",
    description:
      "آژانس مسافرتی پرواز بلورین شیردال با بیش از 40 سال تجربه در ارائه خدمات گردشگری. تماس با ما، آدرس، تلفن و اطلاعات تماس آژانس مسافرتی.",
    type: "website",
    url: "https://parvaz-shirdal.com/about-contact",
    images: [
      {
        url: "/og-about-contact.jpg",
        width: 1200,
        height: 630,
        alt: "درباره ما و تماس پرواز بلورین شیردال",
      },
    ],
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "درباره ما و تماس | پرواز بلورین شیردال",
    description:
      "آژانس مسافرتی پرواز بلورین شیردال با بیش از 40 سال تجربه در ارائه خدمات گردشگری. تماس با ما، آدرس، تلفن و اطلاعات تماس آژانس مسافرتی.",
    images: ["/twitter-about-contact.jpg"],
  },
  alternates: {
    canonical: "https://parvaz-shirdal.com/about-contact",
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
const data = [
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
  {
    header: "ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت؟",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد.",
  },
];
export default function Page() {
  return (
    <main>
      <section className="bg-[#ECEFF1] z-0">
        <div className="flex-center flex-col lg:flex-row justify-between mx-auto w-full p-5 lg:p-0 lg:py-20 gap-5 lg:gap-0 max-w-1086 ">
          <article className="w-full lg:w-1/2 relative z-0 pr-0 max-w-[546px]">
            <h1 className="text-24 lg:text-48 text-primary text-center lg:text-start font-semibold lg:max-w-[405px]">
              آژانس پرواز بلورین شیردال
            </h1>
            <p className=" mt-5 leading-relaxed text-darkGray text-14 lg:text-16">
              شرکت پرواز بلورین شیردال فعالیت خود را در سال ۱۳۸۴ با نام «گروه تورهای پرستیژ» در حوزه خدمات مسافرت هوایی
              و گردشگری داخلی و خارجی آغاز کرد. این مجموعه در سال ۱۳۹۹ با نام جدید «پرواز بلورین شیردال» به فعالیت‌های
              خود ادامه داد و خدماتش را بر اساس استانداردهای بین‌المللی به‌روز نمود. این شرکت با دریافت مجوزهای لازم از
              سازمان‌های مرتبط، توانسته است اعتماد مسافران و فعالان صنعت گردشگری را جلب کند.
            </p>

            <div className="flex w-full flex-wrap gap-3 lg:gap-6 mt-5">
              <div className="flex text-darkGray gap-5 items-start">
                <ContactBorderedIcon icon="contact-call" />
                <div>
                  <p>02186091701</p>
                  <p>09124244853</p>
                  <p>09014988088</p>
                </div>
              </div>
              <div className="flex text-darkGray gap-5 items-start">
                <ContactBorderedIcon icon="contact-location" />
                <address className="not-italic max-w-[200px]">
                  تهران، شهرک غرب، پاساژ پلاتین، طبقه اول، واحد 113
                </address>
              </div>
            </div>
            <div className={"flex mt-8 w-full gap-2 lg:gap-5 justify-center lg:justify-start flex-wrap"}>
              <ContactIcon href={"mailto:parvazbolourin@gmail.com"} title={"ایمیل"} icon={"mail"} />
              <ContactIcon
                href={"https://www.youtube.com/@parvazbolourinshirdalll"}
                title={"یوتیوب"}
                icon={"youtube"}
              />
              <ContactIcon href={"https://www.aparat.com/parvazbolourin"} title={"آپارات"} icon={"aparat"} />
              <ContactIcon href={"https://www.instagram.com/pg.tour"} title={"اینستاگرام"} icon={"instagram"} />
              <ContactIcon href={"https://t.me/parvazbolourins"} title={"تلگرام"} icon={"telegram"} />
              <ContactIcon href={"https://wa.me/982186091701"} title={"واتساپ"} icon={"whatsapp"} />
            </div>
            <BgDots hidden={false} className={"top-0 lg:top-[10%] text-[#CFD8DC]"} columns={8} rows={11} />
            <BgDots
              hidden={false}
              className={"bottom-0 left-0 lg:bottom-[15%] lg:left-[30%] text-[#CFD8DC]"}
              columns={11}
              rows={8}
            />
          </article>

          <section className="w-full lg:w-1/2 lg:max-w-[500px]" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title" className="sr-only">
              فرم تماس با ما
            </h2>
            <ContactForm />
          </section>
        </div>
      </section>
      <section className={"relative container-main contact-video-background lg:min-h-[770px]"}>
        <VideoPlayer
          className={"rounded-15 max-w-[1086] mx-auto"}
          text={"آژانس مسافرتی پرواز بلورین شیردال"}
          videoSrc={"/assets/videos/sample.mp4"}
        />
        <BgDots columns={7} rows={8} className={"left-[10%] bottom-[10%]"} />
        <BgDots columns={12} rows={6} className={"right-[10%] -top-[10%]"} />
      </section>

      <section className={"lg:aspect-[1366/541] w-full container-main flex-center flex-col mt-0"}>
        <h2 className={"text-16 lg:text-24 font-semibold text-primary text-center"}>پرسنل آژانس</h2>
        <p className={"text-14 lg:text-16 text-darkGray text-center max-w-[592px] mx-auto"}>
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <ContactAgencyGallery className={"max-w-1135"} />
      </section>

      <section className={"container-main mt-0 my-0 flex flex-col gap-10"}>
        <div
          className={
            "flex flex-col-reverse lg:flex-row items-center justify-center max-w-[1440px] lg:h-[480px] mx-auto gap-2 lg:gap-10"
          }
        >
          <div className="flex-1 w-full lg:max-w-[506px] flex flex-col justify-center items-start mt-5">
            <h2 className="text-primary text-16 lg:text-24 font-semibold mb-2">تاریخچه ما</h2>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              شرکت پرواز بلورین شیردال فعالیت خود را در سال ۱۳۸۴ با نام «گروه تورهای پرستیژ» در حوزه خدمات مسافرت هوایی
              و گردشگری داخلی و خارجی آغاز کرد. این مجموعه در سال ۱۳۹۹ با نام جدید «پرواز بلورین شیردال» به فعالیت‌های
              خود ادامه داد و خدماتش را بر اساس استانداردهای بین‌المللی به‌روز نمود. این شرکت با دریافت مجوزهای لازم از
              سازمان‌های مرتبط، توانسته است اعتماد مسافران و فعالان صنعت گردشگری را جلب کند.
            </p>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              در طول سال‌ها، با ارائه خدمات متنوعی همچون فروش بلیط هواپیما، رزرو هتل و اجرای تورهای داخلی و خارجی، به
              یکی از برندهای معتبر گردشگری ایران تبدیل شده است. بهره‌گیری از تیمی مجرب و متخصص سبب شد تا این مجموعه
              خدماتی مطابق با استانداردهای جهانی ارائه دهد.
            </p>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              همچنین، با طراحی و اجرای تورهای متنوع از جمله تورهای کشتی کروز، طبیعت‌گردی، فرهنگی و تاریخی و برگزاری
              جشنواره‌های گردشگری، سهم چشمگیری در ترویج فرهنگ سفر در ایران ایفا کرده است. امروز «پرواز بلورین شیردال» با
              تمرکز بر کیفیت، نوآوری و تنوع خدمات، به الگویی موفق و معتبر در صنعت گردشگری ایران تبدیل شده است.
            </p>
          </div>
          <AspectRatio ratio={540 / 480} className="h-full w-full lg:max-w-[540px] lg:w-1/2  overflow-visible ">
            <Image
              src={"/assets/images/dynamic/china.png"}
              alt="weblog"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover overflow-hidden rounded-10 lg:rounded-30"
            />
            <DashBgImages className={"bottom-5 -right-5 w-[90%]"} />
          </AspectRatio>
        </div>

        <div
          className={
            "flex flex-col-reverse lg:flex-row-reverse items-center justify-center max-w-[1440px] lg:h-[480px] mx-auto gap-2 lg:gap-10"
          }
        >
          <div className="flex-1 w-full lg:max-w-[506px] flex flex-col justify-center items-start mt-5">
            <h2 className="text-primary text-16 lg:text-24 font-semibold mb-2">تخصص ما</h2>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              تمرکز اصلی پرواز بلورین شیردال بر ارائه خدمات گردشگری لوکس و باکیفیت است. این شرکت به‌عنوان نخستین
              برگزارکننده تورهای کشتی کروز در ایران شناخته می‌شود و همکاری نزدیکی با خطوط معتبر کروز جهانی دارد.
            </p>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              از دیگر تخصص‌های کلیدی شرکت می‌توان به ارائه خدمات کامل سفر از مشاوره تا اجرای تور، خرید بلیط پرواز، رزرو
              هتل، ترانسفر فرودگاهی و بیمه مسافرتی اشاره کرد. همچنین، بهره‌گیری از فناوری‌های نوین و ارائه خدمات آنلاین
              باعث شده تا فرآیند انتخاب و خرید خدمات برای مشتریان آسان‌تر شود.
            </p>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              پرواز بلورین شیردال با طراحی تورهای اختصاصی برای گروه‌های مختلف از جمله خانواده‌ها، زوج‌های جوان،
              دانشجویان و حتی سفرهای تجاری، انتخابی مطمئن و قابل اعتماد برای طیف وسیعی از مسافران است.
            </p>
          </div>
          <AspectRatio
            ratio={540 / 480}
            className="h-full w-full lg:max-w-[540px] lg:w-1/2 rounded-15 overflow-visible "
          >
            <Image
              src={"/assets/images/dynamic/china.png"}
              alt="weblog"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-10 lg:rounded-30"
            />
            <DashBgImages className={"-bottom-5 right-auto -left-5 w-40 h-[90%]"} />
          </AspectRatio>
        </div>

        <div
          className={
            "flex flex-col-reverse lg:flex-row items-center justify-center max-w-[1440px] lg:h-[480px] mx-auto gap-2 lg:gap-10"
          }
        >
          <div className="flex-1 w-full lg:max-w-[506px] flex flex-col justify-center items-start mt-5">
            <h2 className="text-primary text-16 lg:text-24 font-semibold mb-2">آژانس ما از 1356 متولد شد</h2>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
              برای شرایط فعلی تکنولوژی مورد نیاز. برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
              می طلبد.
            </p>
            <p className="text-darkGray text-14 lg:text-16 mb-4">
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
              برای شرایط فعلی تکنولوژی مورد نیاز برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
              فعلی تکنولوژی مورد نیاز کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
              می طلبد.
            </p>
          </div>
          <AspectRatio ratio={540 / 480} className="h-full w-full lg:max-w-[540px] lg:w-1/2 overflow-visible ">
            <Image
              src={"/assets/images/dynamic/china.png"}
              alt="weblog"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-10 lg:rounded-30"
            />
            <DashBgImages className={"-bottom-5 w-[30%] h-[30%]"} />
          </AspectRatio>
        </div>
      </section>

      <section className={"container-main flex-center flex-col"}>
        <AspectRatio ratio={348 / 199} className={"max-w-[348px] w-full"}>
          <Image src={"/assets/images/static/contact-Q&A.svg"} alt={"contact-Q&A"} fill={true} sizes={"50vw"} />
        </AspectRatio>
        <h2 className={"text-primary text-16 lg:text-24"}>سوالات متداول</h2>
        <ContactAccordionBox className={"w-full lg:max-w-[840px] flex flex-col gap-3 my-10 "} data={data} />
      </section>
    </main>
  );
}
