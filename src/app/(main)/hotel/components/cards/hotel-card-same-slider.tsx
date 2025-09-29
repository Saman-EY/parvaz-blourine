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

type Props = {
  className?: string;
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
  clientsNum: 43,
};

export function HotelCardSameSlider(props: Props) {
  return (
    <article
      className={cn(
        'hotels-group-card group mx-auto w-[246px] h-[240px] z-0 bg-[#F5F5F5] rounded-15 overflow-clip flex items-center justify-between gap-5 relative',
        props.className,
      )}
    >
      <AspectRatio className="w-full h-full rounded-15 absolute inset-0 -z-10" ratio={1}>
        <Image
          priority
          fill={true}
          src="/assets/images/dynamic/china.png"
          alt="home slider image"
          className="w-full object-cover"
          sizes="50vw"
        />
      </AspectRatio>
      <div className={'bg-black/40 absolute w-full h-full inset-0 z-0 group-hover:backdrop-blur-sm transition-all'} />

      <div className={'absolute w-full h-full z-10 flex-center flex-col justify-between py-3 px-5'}>
        <div className="flex justify-between w-full">
          <div className={'bg-white/80 rounded-5 p-0.5'}>
            <BookmarkButton className={''} />
          </div>
          <Flag code="ES" className="w-[40px] h-[26px] object-cover rounded-5" />
        </div>

        <div className={'transition-all group-hover:opacity-0 text-14 font-medium text-gray-100 '}>
          <h3 className={'text-base font-semibold text-center'}>{data.title}</h3>
        </div>
      </div>
      {/*    hover item  */}
      <div
        className={
          'absolute opacity-0 group-hover:opacity-100 transition-all duration-500 w-full h-full z-10 flex-center flex-col justify-between py-3 px-5 text-white'
        }
      >
        <div className={'flex-center flex-col gap-1 mt-10'}>
          <StarsScores number={3} className={'justify-start items-start bg-transparent text-lg'} />
          {/* <div className="">
            <span>امتیاز</span>
            <span>{data.clientsNum}</span>
            <span>مسافر</span>
          </div> */}
        </div>
        <div className={'flex-center justify-between '}>
          <span className={'block text-sm'}>امتیاز در Booking.com</span>
          <span className={'bg-primary py-0.5 px-1 mr-2 text-whiteSmoke rounded-[8px]'}>{data.bookingScore}</span>
        </div>
        <div className={'text-sm'}>
          <p className={'text-sm'}>
            <span>پذیرایی هتل:</span>
            {data.hotelService.map((item, index) => (
              <span key={index}>, {item}</span>
            ))}
          </p>
        </div>
        <Link href={'/src/app/(main)/hotels/components/single'}>
          <Buttons className={'px-3 py-2 w-[216px]'} variant={'white'}>
            جزئیات و رزرو
          </Buttons>
        </Link>
      </div>
    </article>
  );
}
