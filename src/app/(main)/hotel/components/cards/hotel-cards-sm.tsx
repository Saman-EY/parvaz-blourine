// @flow
import * as React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import Flag from 'react-world-flags';
import { StarsScores } from '@/components/ui/stars-scores';
import { textTrim } from '@/helpers/text-trim';
import { Buttons } from '@/components/ui/buttons';
import Link from 'next/link';
import { env } from '@/env';
import {  IHotel } from '@/types/hotel';
const data = {
  src: '/assets/images/dynamic/china.png',
  title: 'The Social Hub Barcelona',
  description:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه.',
  bookingScore: 8.8,
  hotelService: ['BB', 'RO', 'All', 'UAll'],
  stars: 4,
  clientsStars: 3,
  clientsNum: 43,
};
type Props = {
  className?: string;
  hotel: IHotel;
};
export function HotelCardsSm(props: Props) {
  return (
    <article className={'flex flex-col relative h-[435px] bg-[#F5F5F5] p-5 rounded-15 w-[368px] gap-5'}>
      <div className="bg-transparent rounded-lg relative h-[200px]">
        {/* Background Image */}
        <div
          className="w-full h-full absolute bg-cover bg-center  rounded-lg "
          style={{
            backgroundImage: `url(${env.NEXT_PUBLIC_IMAGE_DIRECTORY + props.hotel.image?.path})`,
          }}
        >
          <div className="absolute w-full h-full inset-0 bg-black/20 rounded-lg" />
        </div>
        <div className="absolute w-full h-full flex flex-col justify-between items-center p-4">
          <div className={'w-full flex-center justify-between'}>
            <div className={'bg-white/80 rounded-5 p-0.5'}>
              <BookmarkButton className={'size-5'} />
            </div>

            <div className="flex items-center gap-2 text-sm bg-white w-full max-w-[45%] rounded-md justify-end">
              {props.hotel?.country?.name_fa && (
                <span className="text-sm text-dark">{props.hotel?.country?.name_fa}</span>
              )}
              <Flag code={props.hotel?.country?.code} className="w-[40px] h-[25px] rounded-sm object-cover" />
            </div>
          </div>

          <div className={'flex-center  gap-2.5 text-[#888888] bg-white py-0.5 px-1.5 rounded-5 '}>
            <StarsScores
              number={props?.hotel?.stars || 0}
              className={'justify-start items-start bg-transparent text-lg'}
            />
            <div className="text-xs">
              <span>امتیاز</span>
            </div>
          </div>
        </div>
      </div>

      <div className={' mb-1'}>
        <div className={''}>
          <h3 className={'text-lg font-semibold'}>{props.hotel.name_fa || props.hotel.name || 'نام ثبت نشده است'}</h3>
          <p className={'text-sm'}>{props.hotel.description ? textTrim(props.hotel.description, 20) : 'وارد نشده'}</p>
        </div>

        <div className={'flex items-center w-full justify-between mt-2'}>
          {props.hotel?.meals && (
            <div className={'text-sm flex flex-col'}>
              <span>پذیرایی هتل:</span>
              <span> {props.hotel.meals} </span>
            </div>
          )}

          <div className={'flex-center justify-between '}>
            <span className={'block text-xs text-[#888888]'}>امتیاز در Booking.com</span>
            <span className={'bg-primary px-3 py-2 mr-2 text-whiteSmoke rounded-[8px] text-xs'}>{4.1}</span>
          </div>
        </div>
      </div>
      <Link className="mt-auto" href={`/hotel/${props.hotel.slug}`}>
        <Buttons className={'px-2 py-2 text-sm w-full'} variant={'primary'}>
          جزئیات و رزرو
        </Buttons>
      </Link>
    </article>
  );
}
