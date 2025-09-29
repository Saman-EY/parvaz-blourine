import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { Buttons } from '@/components/ui/buttons';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import Flag from 'react-world-flags';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';
import { IconSelect } from '@/components/ui/icon-select';
import { env } from '@/env';
import { getDayFromNow } from '@/helpers/get-days-from-now';
import { getPersianDate } from '@/helpers/get-perisan-date';
import { TourType } from '@/types/tours';

interface Props {
  tourData: TourType;
  className?: string;
}

export function ToursCardGrid({ tourData, ...props }: Props) {
  return (
    <article
      className={cn(
        'card-grid group w-[246px] h-[250px] rounded-15 overflow-clip relative text-white z-0',
        props.className,
      )}
    >
      <AspectRatio
        className="aspect-square w-full h-full z-0 after:absolute after:w-full after:h-full after:bg-black/50"
        ratio={1}
      >
        <Image
          fill={true}
          src={`${env.NEXT_PUBLIC_IMAGE_DIRECTORY + tourData.image?.path}`}
          alt={String(tourData.image?.alt || tourData?.name)}
          className="w-full h-full object-cover"
          sizes="50vw"
          priority
        />
      </AspectRatio>
      <div className={'absolute flex-center w-full justify-between p-2.5 z-20'}>
        <div className={' top-3 right-3 bg-white/80 rounded-5 p-0.5'}>
          <BookmarkButton className={''} />
        </div>
        <div className={'flex gap-1'}>
          {tourData.countries.map((country, index) => (
            <Flag key={index} code={country.code} className="w-[30px] h-[20px] object-cover rounded-5" />
          ))}
        </div>
      </div>
      <div className={'absolute flex-center p-4 h-full w-full justify-start'}>
        {/* first column */}
        <div
          className={
            'opacity-100 group-hover:opacity-0 transition-all absolute inset-0 w-full h-full flex-center flex-col gap-1.5 justify-between pt-12 pb-4'
          }
        >
          <p className={'text-16 font-medium'}>
            <span>وضعیت: </span>
            <span className={'text-white'}>
              {tourData.status == 'open' ? 'فعال' : tourData.status == 'pending' ? 'در حال برنامه ریزی' : 'غیر فعال'}
            </span>
          </p>
          <p className={'flex-center justify-start gap-0.5'}>
            <span className={'text-2xl'}>
              <IconSelect name={'calendar'} />
            </span>
            <span>شروع تور</span>
            <span>{tourData?.start_date ? getDayFromNow(tourData.start_date) : 'وارد نشده!'}</span>
          </p>

          <p className={'flex-center justify-start gap-0.5'}>
            <span className={''}>شروع نرخ:</span>
            <span>{tourData.base_price}</span>
            <span> + </span>
            <span>{tourData.extra_price}</span>
            {/* <span>تومان</span> */}
          </p>
          <h2 className={'text-lg font-semibold'}>{tourData.name}</h2>
        </div>
        {/* second column */}
        <div
          className={
            'opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 absolute p-4 pt-16 text-14 inset-0 flex-center flex-col h-full justify-between'
          }
        >
          <p className={'flex-center'}>
            <span className={'text-16'}>
              <IconSelect name={'clock'} />
            </span>
            <span className={'text-white pr-0.5'}>
              {tourData?.start_date ? getPersianDate(tourData.start_date) : 'وارد نشده!'}
            </span>
            <span className={'pr-0.5'}>روز تا پایان ثبت نام</span>
          </p>

          <p className={'flex-center gap-0.5'}>
            <span className={'text-16'}>
              <IconSelect name={'users'} />
            </span>

            {/* <span>{10}</span> */}
            <span>نفر ظرفیت</span>
          </p>

          <div className={'text-14 flex-center flex-col mb-4'}>
            {/* <StarsScoresOutline className={'gap-0 bg-transparent'} number={4} /> */}
            <p className={'pt-1 '}>
              <span>امتیاز </span>
            </p>
          </div>

          <div className={'w-full flex-center gap-4'}>
            <Link className={''} href={`/tours/${tourData.slug}`}>
              <Buttons className={' text-primary w-[103px] py-2'} variant={'white'}>
                جزئیات
              </Buttons>
            </Link>
            <a className={''} href="#">
              <Buttons className={'text-red-brand w-[103px] py-2 px-0 text-nowrap gap-1'} variant={'white'}>
                <IconSelect classes={'text-14'} name={'download'} />
                <span>دانلود پکیج</span>
              </Buttons>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
