// @flow
import * as React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { StarsScores } from '@/components/ui/stars-scores';
import { Buttons } from '@/components/ui/buttons';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import Flag from 'react-world-flags';
import { textTrim } from '@/helpers/text-trim';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { env } from '@/env';
import { IHotel } from '@/types/hotel';

type Props = {
  className?: string;
  hotel: IHotel;
};

export function HotelCardGrid(props: Props) {
  return (
    <article
      className={cn(
        'card-grid group text-white w-[246px] h-[240px] z-0 bg-[#F5F5F5] rounded-15 overflow-clip flex items-center justify-between gap-5 relative',
        props.className,
      )}
    >
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${env.NEXT_PUBLIC_IMAGE_DIRECTORY + props.hotel.image?.path})`,
        }}
      >
        <div className="absolute w-full h-full inset-0 bg-black/30" />
      </div>

      <div className={'absolute top-1.5 left-0 flex-center w-full justify-between p-2.5 z-20'}>
        <div className={'bg-white/80 rounded-5 p-1'}>
          <BookmarkButton className={'size-5'} />
        </div>

        <div className="flex items-center gap-2 text-sm bg-white w-full max-w-[65%] rounded-md justify-end">
          {props.hotel?.country?.name_fa && <span className="text-sm text-dark">{props.hotel?.country?.name_fa}</span>}
          <Flag code={props.hotel?.country?.code} className="w-[40px] h-[25px] rounded-sm object-cover" />
        </div>
      </div>

      <section className={'absolute w-full h-full flex items-center '}>
        {/*not hover items start*/}
        <div
          className={
            'opacity-100 group-hover:opacity-0 transition-all absolute inset-0 w-full h-full flex-center flex-col gap-1.5 justify-end pb-5 pt-5'
          }
        >
          <StarsScores number={props.hotel.stars} className={'justify-start items-start bg-transparent text-lg'} />
          <h3 className={'text-base font-semibold text-center'}>
            {props.hotel.name_fa || props.hotel.name || 'نام ثبت نشده است'}
          </h3>
          <p className={'text-sm text-center'}>
            {props.hotel.description ? textTrim(props.hotel.description, 30) : 'وارد نشده'}
          </p>
        </div>
        {/*not hover items end*/}

        {/*hover items start*/}
        <div
          className={
            'opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all absolute inset-0 w-full h-full flex-center flex-col gap-1.5 justify-between pt-12 pb-4'
          }
        >
          <div className={'flex-center flex-col gap-1'}>
            <StarsScores number={props.hotel?.stars} className={'justify-start items-start bg-transparent text-lg'} />
          </div>
          <div className={'flex-center justify-between '}>
            <span className={'block text-sm'}>امتیاز در Booking.com</span>
            <span className={'bg-primary py-0.5 px-1 mr-2 text-whiteSmoke rounded-[8px]'}>{9.5}</span>
          </div>
          {props.hotel.meals && (
            <div>
              <p className={'text-sm'}>
                <span>پذیرایی هتل:</span>
                <span> {props.hotel.meals} </span>
              </p>
            </div>
          )}
          <Link href={`/hotel/${props.hotel.slug}`}>
            <Buttons className={'px-3 py-2 w-[216px]'} variant={'white'}>
              جزئیات و رزرو
            </Buttons>
          </Link>
        </div>
        {/*hover items end*/}
      </section>
    </article>
  );
}
