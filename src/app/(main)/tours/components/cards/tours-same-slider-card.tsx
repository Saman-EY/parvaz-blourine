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
import moment from 'moment-jalaali';
import { env } from '@/env';
import { IconSelect } from '@/components/ui/icon-select';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';

type Props = {
  className?: string;
};
const data = {
  country: ['FR'],
  src: '/assets/images/dynamic/china.png',
  status: 'active',
  remainingDays: '16 روز تا پایان ثبت‌نام',
  score: 3,
  client_rating: 167,
  title: 'تور 8 روزه ایتالیا و فرانسه',
  startDate: '2025-01-01',
  capacity: {
    total: 24,
    filled: 15,
    remaining: 9,
  },
  slug: 'tour-6-روزه-فرانسه',
  price: {
    toman: 36800000,
    dollar: 1350,
  },
  description:
    'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی هدف تکنولوژی مورد نیاز',
};

export function ToursCardSameSlider(props: Props) {
  const startDate = moment(data.startDate, 'YYYY-MM-DD').locale('fa').format('jD jMMMM jYYYY');
  return (
    <article
      className={cn(
        'w-[250px] h-[250px] mx-auto lg:mx-0 overflow-clip rounded-15 relative text-white z-0 group',
        props.className,
      )}
    >
      <AspectRatio
        className="aspect-square absolute w-full h-full z-0 after:z-0 after:absolute after:w-full after:h-full after:bg-black/50"
        ratio={1}
      >
        <Image
          fill={true}
          src={data.src}
          alt="home slider image"
          className="w-full h-full object-cover"
          sizes="50vw"
          priority
        />
      </AspectRatio>
      <section className={'absolute flex-center w-full justify-between mx-auto px-3 pl-5 py-3 z-20'}>
        <div className={'bg-white/80 rounded-5 p-0.5'}>
          <BookmarkButton className={'size-5'} />
        </div>
        <div className={'flex gap-1'}>
          {data.country.map((country, index) => (
            <Flag key={index} code={country} className="w-[30px] h-[20px] object-cover rounded-sm" />
          ))}
        </div>
      </section>

      <section className={'absolute flex-center p-4 h-full w-full justify-start z-10'}>
        {/* first column */}
        <div
          className={
            'px-5 py-3 opacity-100 w-full h-full group-hover:opacity-0 inset-0 transition-all absolute flex-center flex-col'
          }
        >
          <p className={'text-sm font-medium'}>
            <span>وضعیت: </span>
            <span>{data.status === 'active' ? 'فعال' : 'غیر فعال'}</span>
          </p>
          <div className={'text-14 flex-center flex-col mb-1'}>
            <StarsScoresOutline className={'gap-0 bg-transparent'} number={data.score} />
            <p className={'pt-1 '}>
              <span>امتیاز </span>
              <span>{data.client_rating}</span>
              <span> مسافر</span>
            </p>
          </div>

          <h2 className={'text-base font-semibold my-3'}>{data.title}</h2>
          <p className={'text-14 text-center'}>{textTrim(data.description, 20)}</p>
        </div>
        {/* second column start*/}
        <section
          className={
            'px-8 pb-5 pt-12 w-full h-full text-14 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 absolute inset-0 flex-center flex-col justify-between'
          }
        >
          <p className={'flex-center'}>
            <span className={'text-16'}>
              <IconSelect name={'clock'} />
            </span>
            <span className={' pr-0.5'}>{data.remainingDays}</span>
          </p>
          <p className={'flex-center justify-start gap-0.5'}>
            <span className={'text-2xl'}>
              <IconSelect name={'calendar'} />
            </span>
            <span>شروع تور</span>
            <span>{startDate}</span>
          </p>
          <p className={'flex-center gap-0.5'}>
            <span className={'text-16'}>
              <IconSelect name={'users'} />
            </span>

            <span>ظرفیت مانده</span>
            <span>{data.capacity.remaining}</span>
            <span>نفر</span>
          </p>
          <p className={'flex-center flex-col gap-0.5'}>
            <span className={''}>شروع نرخ:</span>
            <span className={'flex-center gap-0.5'}>
              <span>{data.price.toman}</span>
              <span>تومان</span>
              <span>+</span>
              <span>{data.price.dollar}</span>
              <span>دلار</span>
            </span>
          </p>
          <div className={'w-full flex-center gap-3'}>
            <Link className={''} href={`/tours/${data.slug}`}>
              <Buttons className={' text-primary w-[103px] text-xs py-2 px-1'} variant={'white'}>
                جزئیات و رزرو
              </Buttons>
            </Link>
            <a className={''} href="#">
              <Buttons className={'text-gray-800 w-[103px] text-xs py-2 px-0 text-nowrap gap-1'} variant={'white'}>
                <IconSelect classes={'text-16'} name={'download'} />
                <span>دانلود</span>
              </Buttons>
            </a>
          </div>
        </section>
      </section>
    </article>
  );
}
