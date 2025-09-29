// @flow
import * as React from 'react';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import Flag from 'react-world-flags';
import { StarsScores } from '@/components/ui/stars-scores';
import Link from 'next/link';
import { Buttons } from '@/components/ui/buttons';
import { cn } from '@/lib/utils';
import { IconSelect } from '@/components/ui/icon-select';
import { Divider } from '@/components/ui/divider';
import { HotelDetailType } from '@/types/hotel';
import { ShareLinkProducts } from '@/components/shared/share-link-products';

type Props = {
  className?: string;
  hotelData?: HotelDetailType;
};
const data = {
  src: '/assets/images/dynamic/china.png',
  title: 'The Social Hub Barcelona',
  description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه.',
  bookingScore: 8.8,
  hotelService: ['BB', 'RO', 'All', 'UAll'],
  stars: 4,
  clientsStars: 3,
  address: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ',
  clientsNum: 43,
  code: 'K891345pd',
  about:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی.',
};

export function HotelSingleDetails(props: Props) {
  return (
    <div className={cn('w-full max-w-[780px] bg-[#F5F5F5] rounded-15 flex-center flex-col gap-5 p-5', props.className)}>
      <div className={'flex-center w-full justify-between'}>
        <div className={' z-10 top-3 right-3 bg-white rounded-5 p-0.5'}>
          <BookmarkButton className={''} />
        </div>
        <div className={'flex-center gap-1'}>
          <span className={'text-sm text-dark'}>{props.hotelData?.country.name_fa}</span>
          <Flag code={props.hotelData?.country.code} className="w-[40px] h-[26px] object-cover rounded-5 mb-1" />
        </div>
      </div>

      <h3 className={'text-lg font-semibold text-dark w-full text-center'}>
        {props.hotelData?.name || props.hotelData?.name_fa}
      </h3>
      {/* <StarsScores number={4} className={'justify-start items-start '} /> */}
      <Divider />
      {props.hotelData?.code && (
        <p className={'text-darkGray'}>
          <span className={''}>کد هتل:</span>
          <span className={'pr-1'}>{props.hotelData?.code}</span>
        </p>
      )}
      <div className={'flex-center gap-1 text-lightGray50'}>
        <StarsScores number={props.hotelData?.stars || 0} className={'justify-start items-end text-14 '} />
        <span>امتیاز</span>
      </div>
      <div className={'flex-center justify-between text-lightGray50'}>
        <span className={'block text-sm '}>امتیاز در Booking.com</span>
        <span className={'bg-primary text-sm py-0.5 px-1 mr-2 text-whiteSmoke rounded-[8px]'}>{3.5}</span>
      </div>
      <div>
        {props.hotelData?.location_fa && (
          <p className={'text-darkGray text-sm'}>
            <span className={'inline-block pl-1'}>
              <IconSelect name={'location-outline'} />
            </span>
            <span>آدرس هتل:</span>
            <span>{props.hotelData?.location_fa}</span>
          </p>
        )}
        <div className={'text-darkGray flex items-center gap-2 text-sm'}>
          <IconSelect classes="size-5" name={'spoon-fork'} />
          <div className='flex items-center'>
            <span>پذیرایی هتل:</span>
            <span> {props.hotelData?.meals} </span>
          </div>
        </div>
      </div>
      <Divider />
      <ShareLinkProducts variant={'هتل'} />
      <div className={'flex-center w-full gap-2'}>
        <Link className={'w-full'} href={'#'}>
          <Buttons className={'px-3 py-2 w-full'} variant={'primary'}>
            رزرو هتل
          </Buttons>
        </Link>
        <Link className={'w-full'} href={'#'}>
          <Buttons className={'px-3 py-2 w-full'} variant={'secondary'}>
            مقایسه هتل
          </Buttons>
        </Link>
      </div>
    </div>
  );
}
