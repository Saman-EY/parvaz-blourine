// @flow
import * as React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { StarsScores } from '@/components/ui/stars-scores';
import { Buttons } from '@/components/ui/buttons';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import Flag from 'react-world-flags';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { env } from '@/env';
import { textTrim } from '@/helpers/text-trim';
import { IHotel } from '@/types/hotel';

type Props = {
  className?: string;
  hotel: IHotel;
};

export function HotelCardRow(props: Props) {
  return (
    <article
      className={cn(
        'card-row w-full lg:w-[780px] max-w-[780px] bg-[#F5F5F5] rounded-15 flex items-center justify-between gap-5 p-5',
        props.className,
      )}
    >
      <div className="flex gap-3">
        <div className="relative w-[170px] h-[170px] rounded-lg overflow-hidden shadow">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${env.NEXT_PUBLIC_IMAGE_DIRECTORY + props.hotel.image?.path})`,
            }}
          ></div>

          {/* Bookmark Button */}
          <div className="absolute top-3 right-3 bg-white/80 rounded-md p-1 z-10">
            <BookmarkButton className="size-5" />
          </div>

          {/* Flag + City Name */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 bg-[#F5F5F5] rounded-md px-2 py-1 z-10">
            <Flag code={props.hotel?.country?.code} className="w-[28px] h-[20px] rounded-sm object-cover" />
            {props.hotel?.country?.name_fa && (
              <span className="text-sm text-dark">{props.hotel?.country?.name_fa}</span>
            )}
          </div>
        </div>

        <div className={'max-w-[301px] flex-center flex-col items-start gap-2 h-full justify-start'}>
          {/* <StarsScores number={props?.hotel?.stars || 0} className={'justify-start items-start '} /> */}
          <h3 className={'text-lg font-semibold text-dark'}>
            {props.hotel.name_fa || props.hotel.name || 'نام ثبت نشده است'}
          </h3>
          <p className={'text-sm text-darkGray'}>
            {props.hotel.description ? textTrim(props.hotel.description, 20) : 'وارد نشده'}
          </p>
        </div>
      </div>

      <div className={'max-w-[301px] flex-center flex-col items-end gap-4 h-full justify-start'}>
        <div className={'flex-center gap-1 text-sm'}>
          <StarsScores number={props.hotel.stars ?? 0} className={'justify-start items-end text-14'} />
          <span>امتیاز</span>
        </div>
        <div className={'flex-center justify-between text-lightGray50'}>
          <span className={'block text-sm'}>امتیاز در Booking.com</span>
          <span className={'bg-primary text-xs py-2 px-2 min-w-9 text-center mr-2 text-whiteSmoke rounded-md'}>
            {props.hotel?.rate}
          </span>
        </div>
        {props.hotel.meals && (
          <div className="text-sm">
            <p className={'text-darkGray'}>
              <span>پذیرایی هتل:</span>
              <span> {props.hotel.meals} </span>
            </p>
          </div>
        )}

        <Link href={`/hotel/${props.hotel.slug}`}>
          <Buttons className={'px-4 py-2'} variant={'primary'}>
            جزئیات و رزرو
          </Buttons>
        </Link>
      </div>
    </article>
  );
}
