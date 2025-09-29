'use client';
import { ToursSingleCardTransport } from '@/app/(main)/tours/components/single/tours-single-card-transport';
import { ToursSingleCardAnotherTransport } from '@/app/(main)/tours/components/single/tours-single-card-another-transport';
import { ToursSingleHotelContainer } from '@/app/(main)/tours/components/single/tours-single-hotel-container';
import { ToursSingleThumbnail } from '@/app/(main)/tours/components/single/tours-single-thumbnail';
import { ToursSingleAcc } from '@/app/(main)/tours/components/single/tours-single-acc';
import { ToursSingleVisa } from '@/app/(main)/tours/components/single/tours-single-visa';
import { ToursSingleToolCard } from '@/app/(main)/tours/components/cards/tours-single-tool-card';
import WeblogCard from '@/app/(main)/weblog/components/weblog-card';
import { Buttons } from '@/components/ui/buttons';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';
import { Divider } from '@/components/ui/divider';
import { HotelSingleComment } from '@/app/(main)/hotel/components/single/hotel-single-comment';
import { BgDots } from '@/components/ui/icons/bg-dots';
import { ToursSameTourSlider } from '@/app/(main)/tours/components/sliders/tours-same-tour-slider';
import { ToursSingleDetails } from '@/app/(main)/tours/components/single/tours-single-details';
import { env } from '@/env';
import { MyDataProvider, useMyDataCxt } from '@/store/data-context';
import { ICourse, ITour } from '@/types/tourSingle';
import { useEffect, useState } from 'react';
import TourServices from '../components/single/TourServices';

function SingleTourPage({ tourData, courses }: { tourData: { data: ITour }; courses: ICourse[] }) {
  const { currentCourse, setCurrentCourse, tour } = useMyDataCxt();
  const { setTour } = useMyDataCxt();

  //   console.log("**", currentCourse);

  useEffect(() => {
    if (tourData) {
      setTour(tourData.data);
    }

    if (courses) {
      const openCourse = courses.find((item) => item.status === 'open');
      setCurrentCourse(openCourse!);
    }
  }, [tourData]);

  return (
    <main className={'container-main flex justify-center flex-col mt-5 items-center'}>
      <section className={'flex justify-center gap-3 mt-5 items-start w-full'}>
        <div className={'w-full max-w-[780px]'}>
          {/*main banner start*/}
          <ToursSingleThumbnail
            image={`${env.NEXT_PUBLIC_IMAGE_DIRECTORY}${tourData?.data?.image && tourData?.data?.image?.path}`}
            alt={`${tourData.data.image.alt}`}
            score={'4'}
            title={tourData.data.name || '-----'}
            passengers={String(tourData?.data?.courses[0]?.capacity) || '0'}
            flags={tourData?.data?.countries?.map((country) => country.code) || 'IR'}
            content={tourData?.data?.description ?? '--------'}
          />
          <TourServices />

          <ToursSingleDetails className={'w-full flex lg:hidden mt-5'} />
          {/*details end*/}
          {/*transport start*/}
          <div className={'w-full h-full container-rounded bg-bgLightGray pb-5'}>
            <div className={'w-full grid grid-cols-1 lg:grid-cols-2 px-5 py-4 lg:px-7 gap-5'}>
              <ToursSingleCardTransport
                className={''}
                cardType={'go'}
                serialNumber={
                  currentCourse?.origin_transport_data?.origin.iata +
                  ' - ' +
                  currentCourse?.origin_transport_data?.destination.iata
                }
                title={
                  currentCourse?.origin_transport_data.origin.name_fa &&
                  currentCourse?.origin_transport_data.destination.name_fa &&
                  `${currentCourse?.origin_transport_data.origin.name_fa} به ${currentCourse?.origin_transport_data.destination.name_fa}`
                }
                airlineName={currentCourse?.origin_transport_data?.airline.name!}
                airlineLogo={currentCourse?.origin_transport_data?.airline.icon_path!}
              />
              <ToursSingleCardTransport
                className={''}
                cardType={'back'}
                serialNumber={
                  currentCourse?.destination_transport_data?.origin.iata +
                  ' - ' +
                  currentCourse?.destination_transport_data?.destination.iata
                }
                title={
                  currentCourse?.destination_transport_data.origin.name_fa &&
                  currentCourse?.destination_transport_data.destination.name_fa &&
                  `${currentCourse?.destination_transport_data.origin.name_fa} به ${currentCourse?.destination_transport_data.destination.name_fa}`
                }
                airlineName={currentCourse?.destination_transport_data?.airline.name!}
                airlineLogo={currentCourse?.destination_transport_data?.airline.icon_path!}
              />
            </div>
            <h2 className={'text-primary text-lg font-semibold text-center col-span-full mt-6 mb-3 lg:mt-8'}>
              حمل و نقل‌های دیگر
            </h2>
            <div className={'col-span-full px-5 lg:px-7 flex flex-col gap-2 mt-2'}>
              <ToursSingleCardAnotherTransport
                className={''}
                cardType={'bus'}
                time={'حدود 14:30 تا 16:30'}
                location={'از روم به میلان'}
                date={'26 اردیبهشت'}
              />
              <ToursSingleCardAnotherTransport
                className={''}
                cardType={'car'}
                time={'حدود 14:30 تا 16:30'}
                location={'از روم به میلان'}
                date={'26 اردیبهشت'}
              />
              <ToursSingleCardAnotherTransport
                className={''}
                cardType={'boat'}
                time={'حدود 14:30 تا 16:30'}
                location={'از روم به میلان'}
                date={'26 اردیبهشت'}
              />
              <ToursSingleCardAnotherTransport
                className={''}
                cardType={'plane'}
                time={'حدود 14:30 تا 16:30'}
                location={'از روم به میلان'}
                date={'26 اردیبهشت'}
              />
            </div>
            <h2 className={'text-primary text-lg font-semibold text-center col-span-full mt-6 lg:mt-8'}>
              شهر ها
            </h2>
            <div className="flex px-3 flex-wrap  mt-3">
              {currentCourse?.cities.map((item, idx) => (
                <div key={idx} className={'col-span-full px-5 lg:px-7 flex  gap-2 my-3'}>
                  <span className={'h-3 w-3 p-1.5 bg-primary rounded-full mt-1'} />
                  <span className={'text-darkGray text-14 lg:text-16'}>{item.name_fa}</span>
                </div>
              ))}
            </div>
          </div>
          {/*transport end*/}
          {/*tour hotels start*/}
          <div className={'bg-bgLightGray flex-center flex-col container-rounded py-4 px-3'}>
            <h2 className={'text-primary text-lg font-semibold text-center col-span-full'}>
              هتل‌ها و جدول قیمتی
            </h2>
            <h2 className={'text-darkGray text-sm mt-2 font-normal text-center col-span-full mb-5'}>
              قیمت‌ها برای هر نفر میباشد
            </h2>
            <ToursSingleHotelContainer />
          </div>
          {/*tour hotels end*/}
          {/*single tour program start*/}
          <div className={'bg-bgLightGray flex-center flex-col container-rounded py-4'}>
            <h2 className={'text-primary text-lg font-semibold text-center col-span-full'}>برنامه سفر</h2>
            <h3 className={'text-darkGray text-14 lg:text-16 font-normal text-center col-span-full px-5 lg:px-10 mb-5'}>
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی.
            </h3>
            <ToursSingleAcc />
          </div>
          {/*single tour program end*/}
          {/*visa start*/}
          <div className={'w-full p-3 lg:p-8 bg-bgLightGray mt-5 rounded-10 lg:rounded-15'}>
            <ToursSingleVisa
              visaType={'تگ/برچسب'}
              date={'12 روز کاری'}
              officer={'سفارت/کنسول‌گری'}
              items={[
                'ترجمه کارت‌ملی و شناسنامه',
                'گذرنامه با حداقل 7 ماه اعتبار',
                'دو قطعه عکس 4*3 و دو قطعه 4*6',
                'فرم اطلاعات شخصی',
                'ترجمه گواهی شغلی/تحصیلی',
                'پرینت بانکی 3 ماهه (لاتین)',
                'تمکن بانکی (لاتین)',
                'تست پی سی آر منفی',
                'ضمانت بانکی برگشت',
                'سوابق ویزایی',
              ]}
            />
          </div>
          {/*visa end*/}
          {/*tours tools start*/}
          <div className={'w-full p-3 lg:p-8 bg-bgLightGray mt-5 rounded-10 lg:rounded-15'}>
            <h2 className={'text-primary text-lg font-semibold text-center col-span-full'}>
              تجهیزات و وسایل مورد نیاز سفر
            </h2>
            <div
              className={
                'flex mt-2.5 lg:mt-5 flex-col lg:flex-row items-center justify-center lg:justify-start lg:items-start '
              }
            >
              <div className={'flex w-full gap-2.5 flex-wrap lg:justify-start'}>
                {currentCourse?.supplies?.map((item, index) => (
                  <ToursSingleToolCard
                    key={index}
                    icon={process.env.NEXT_PUBLIC_IMAGE_DIRECTORY + item.preview.path}
                    svg={item.preview.svg}
                    title={item.name}
                  />
                ))}
              </div>
            </div>
          </div>
          {/*tours tools end*/}
        </div>
        <ToursSingleDetails className={'hidden lg:flex'} />
      </section>
      <section className={'w-full h-full flex-center flex-col mt-5 relative'}>
        {/*    <ToursGallerySlider/>*/}

        {/*same tours start*/}
        <div className={'w-full flex-center flex-col gap-5 relative'}>
          <div>
            <h1 className={'text-primary text-lg font-semibold text-center '}>تورهای مشابه</h1>
            <p className={'max-w-[600px] text-center text-darkGray font-light'}>
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <BgDots columns={6} rows={8} className={'top-0'} />
          <ToursSameTourSlider />
        </div>
        {/*same tours end*/}
        {/*comments start*/}
        <div className={'w-full p-3 lg:p-8 bg-bgLightGray mt-5 rounded-10 lg:rounded-15 max-w-4xl'}>
          <h2 className={'text-primary text-lg font-semibold text-center col-span-full'}>دیدگاه مسافرین</h2>
          <h3 className={'text-dark text-sm mt-2 font-semibold text-center col-span-full'}>({44} دیدگاه ثبت شده)</h3>
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
            <div className={'w-full mt-5 lg:mt-0 text-sm'}>
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
        {/*comments enc*/}
        {/*tours blog start*/}
        <div
          className={
            'w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center container-main-small my-5 lg:mb-7 px-5'
          }
        >
          <div className={'col-span-full text-center flex-center flex-col gap-3'}>
            <h1 className={'text-primary text-lg font-semibold text-center '}>اخبار مرتبط</h1>
            <p className={'max-w-[600px] text-sm text-center text-darkGray font-light'}>
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          {Array.from({ length: 3 }).map((_, index) => (
            <WeblogCard
              key={index}
              weblog={{
                id: index + 1,
                title: 'هتل‌های خوب را بهتر بشناسید',
                headerText:
                  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون...',
                picturePath: '/assets/images/dynamic/china.png',
                likes: 10 + index,
                registrationDate: '2023-01-01',
                createdBy: 'میثم پیغامی',
                createdByProfilePicture: '/assets/images/dynamic/china.png',
                slug: 'متا-تایتل-وبلاگ',
              }}
            />
          ))}
        </div>
        {/*tours blog end*/}
      </section>
    </main>
  );
}

export default SingleTourPage;
