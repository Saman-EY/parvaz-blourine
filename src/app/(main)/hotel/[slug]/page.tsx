import './hotel-single.css';
import { HotelSingleSlider } from '@/app/(main)/hotel/components/single/hotel-single-slider';
import { HotelSingleDetails } from '@/app/(main)/hotel/components/single/hotel-single-details';
import HotelSingleMapClient from '@/app/(main)/hotel/components/single/hotel-sinlge-map-client';
import { Buttons } from '@/components/ui/buttons';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';
import { Divider } from '@/components/ui/divider';
import { HotelSingleComment } from '@/app/(main)/hotel/components/single/hotel-single-comment';
import { HotelSameHotelsSlider } from '@/app/(main)/hotel/components/single/hotel-same-hotels-slider';
import { BgDots } from '@/components/ui/icons/bg-dots';
import { Metadata } from 'next';
import { log } from '@/lib';
import { redirect } from 'next/navigation';
import { HotelService } from '@/services/hotel-services';
import { OverflowTooltip } from '@/components/ui/tooltip-text';

export const metadata: Metadata = {
  title: 'جزئیات هتل | پرواز بلورین شیردال',
  description:
    'مشاهده جزئیات کامل هتل، امکانات، موقعیت مکانی، نظرات مسافران و رزرو آنلاین هتل‌های خارجی با بهترین قیمت.',
  keywords: [
    'جزئیات هتل',
    'رزرو هتل',
    'هتل خارجی',
    'امکانات هتل',
    'موقعیت هتل',
    'نظرات هتل',
    'رزرو آنلاین هتل',
    'هتل لوکس',
    'هتل 5 ستاره',
    'پرواز بلورین شیردال',
  ],
  openGraph: {
    title: 'جزئیات هتل | پرواز بلورین شیردال',
    description:
      'مشاهده جزئیات کامل هتل، امکانات، موقعیت مکانی، نظرات مسافران و رزرو آنلاین هتل‌های خارجی با بهترین قیمت.',
    type: 'website',
    url: 'https://parvaz-shirdal.com/hotel/single',
    images: [
      {
        url: '/og-hotel-single.jpg',
        width: 1200,
        height: 630,
        alt: 'جزئیات هتل پرواز بلورین شیردال',
      },
    ],
    locale: 'fa_IR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'جزئیات هتل | پرواز بلورین شیردال',
    description:
      'مشاهده جزئیات کامل هتل، امکانات، موقعیت مکانی، نظرات مسافران و رزرو آنلاین هتل‌های خارجی با بهترین قیمت.',
    images: ['/twitter-hotel-single.jpg'],
  },
  alternates: {
    canonical: 'https://parvaz-shirdal.com/hotel/single',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
interface Props {
  params: Promise<{ slug: string }>;
}

export default async function HotelSinglePage({ params }: Props) {
  const slug = decodeURIComponent((await params).slug);
  const hotelData = await HotelService.getSingle({ slug });
  if (!hotelData) {
    log.error('Tour data not found', {
      data: hotelData,
    });
    return redirect('/');
  }
  return (
    <main className={'container-main flex justify-center flex-col mt-5 items-center'}>
      <div className={'flex justify-center gap-3 mt-5 items-start w-full'}>
        <section className={'h-full w-full max-w-[780px]'}>
          {hotelData?.data?.images && <HotelSingleSlider images={hotelData.data.images} />}
          {!hotelData?.data?.images.length && <p className={'p-10 flex-center w-full'}>عکس هتل ها خالی است</p>}
          <HotelSingleDetails hotelData={hotelData.data} className={'w-full flex lg:hidden mt-5'} />
          <div className={'w-full p-5 bg-[#F5F5F5] mt-5 rounded-10 lg:rounded-15'}>
            <h1 className={'text-primary text-lg font-semibold text-center '}>درباره هتل</h1>
            <p className={'text-base w-full'}>{hotelData.data.description || 'توضیحات وارد نشده!'}</p>
          </div>
          <div
            className={
              'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-start w-full p-5 gap-3 bg-[#F5F5F5] mt-5 rounded-10 lg:rounded-15'
            }
          >
            <h2
              className={
                'text-primary text-lg flex items-center justify-center  w-full mb-2 gap-2 font-semibold text-center col-span-full'
              }
            >
              <span>خدمات هتل براساس</span>
              <span>booking.com</span>
            </h2>
            {hotelData?.data?.facilities.map((facility, index) => (
              <div key={index} className={'text-dark flex-center gap-1 items-start '}>
                <span className={'w-5 h-5 shrink-0'} dangerouslySetInnerHTML={{ __html: facility.preview.svg }} />
                <span className={''}>
                  <OverflowTooltip maxWidth={'150px'} text={facility.name || '-'} />
                </span>
              </div>
            ))}
            {!hotelData?.data?.facilities.length && '---'}
          </div>
          <HotelSingleMapClient position={[hotelData?.data.lat, hotelData?.data.lon]} className={'rounded-10 lg:rounded-15 mt-4 aspect-video'} />
          <div className={'w-full p-3 lg:p-8 bg-[#F5F5F5] mt-5 rounded-10 lg:rounded-15'}>
            <h2 className={'text-primary text-lg font-semibold text-center col-span-full'}>دیدگاه مسافرین</h2>
            <h3 className={'text-dark text-sm font-semibold text-center col-span-full'}>({44} دیدگاه ثبت شده)</h3>
            <div className={'flex-center flex-col lg:flex-row w-full mt-3'}>
              {/*comment banner*/}
              <div className={'w-full flex-center flex-col gap-3'}>
                <img src={'/assets/images/static/hotels-single-comment.svg'} alt={"comment banner's image"} />
                <h4 className={'text-center text-lightGray50 text-sm'}>اگر مسافر این هتل بودید نظر خود را بنویسید</h4>
                <Buttons className={'px-3.5 py-1.5'} variant={'primary'}>
                  نوشتن دیدگاه
                </Buttons>
              </div>
              {/*stars scores*/}
              <div className={'w-full mt-5 lg:mt-0'}>
                <div className={'flex-center'}>
                  <p className={'text-nowrap'}>152 مسافر</p>
                  <Divider />
                  <StarsScoresOutline number={6} />
                </div>
                <div className={'flex-center'}>
                  <p className={'text-nowrap'}>15 مسافر</p>
                  <Divider />
                  <StarsScoresOutline number={4} />
                </div>
                <div className={'flex-center'}>
                  <p className={'text-nowrap'}>0 مسافر</p>
                  <Divider />
                  <StarsScoresOutline number={3} />
                </div>
                <div className={'flex-center'}>
                  <p className={'text-nowrap'}>0 مسافر</p>
                  <Divider />
                  <StarsScoresOutline number={2} />
                </div>
                <div className={'flex-center'}>
                  <p className={'text-nowrap'}>0 مسافر</p>
                  <Divider />
                  <StarsScoresOutline number={1} />
                </div>
              </div>
            </div>
            <HotelSingleComment className={'w-full mt-5'} />
            <HotelSingleComment className={'w-full mt-5'} reply={true} />
          </div>
        </section>
        <HotelSingleDetails hotelData={hotelData.data} className={'w-full lg:max-w-[260px] hidden lg:flex'} />
      </div>
      <div className={'w-full h-full flex-center flex-col mt-5 relative gap-2'}>
        <div>
          <h1 className={'text-primary text-lg font-semibold text-center '}>هتل‌های مشابه</h1>
          <p className={'max-w-[600px] text-center text-darkGray font-light'}>
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <BgDots columns={6} rows={8} className={'top-0'} />
        <HotelSameHotelsSlider />
      </div>
    </main>
  );
}
