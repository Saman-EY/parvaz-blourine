// @flow
import * as React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { Buttons } from '@/components/ui/buttons';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import Flag from 'react-world-flags';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';
import { IconSelect } from '@/components/ui/icon-select';
import { highlightNumberInText } from '@/helpers/highlight-number-In-Text';
import { textTrim } from '@/helpers/text-trim';
import { env } from '@/env';
import { getDayFromNow } from '@/helpers/get-days-from-now';
import { getPersianDate } from '@/helpers/get-perisan-date';
import { TourType } from '@/types/tours';

interface Props {
  tourData: TourType;
  className?: string;
}

export function ToursCardsSm({ tourData, ...props }: Props) {
  const title = highlightNumberInText(tourData.name, { className: 'text-info' });
  return (
    <article
      className={cn(
        'w-[368px] h-[551px] overflow-clip relative text-dark bg-[#F5F5F5] rounded-10 flex-center flex-col p-4 text-14',
        props.className,
      )}
    >
      <AspectRatio className="aspect-square w-[328px] h-[230px] rounded-10">
        <Image
          fill={true}
          src={`${env.NEXT_PUBLIC_IMAGE_DIRECTORY + tourData.image?.path}`}
          alt={String(tourData.image?.alt || tourData?.name)}
          className="w-full h-full object-cover"
          sizes="50vw"
          priority
        />
        <div className={'absolute z-10 flex-center w-full justify-between p-2.5'}>
          <div className={' top-3 right-3 bg-white/80 rounded-5 p-0.5'}>
            <BookmarkButton className={'size-5'} />
          </div>
          <div className={'flex gap-1'}>
            {tourData?.countries?.map((country, index) => (
              <Flag key={index} code={country.code} className="w-[30px] h-[20px] object-cover rounded-5" />
            ))}
          </div>
        </div>
      </AspectRatio>
      <div className={'flex-center flex-col items-start w-full mt-4 px-1'}>
        <div className={'flex-center justify-between w-full mb-2'}>
          <p className={'text-sm font-normal'}>
            <span>وضعیت: </span>
            <span className={'text-info'}>
              {tourData.status === 'open'
                ? 'فعال'
                : tourData.status === 'pending'
                  ? 'در حال برنامه ریزی'
                  : tourData.status === 'close'
                    ? 'غیر فعال'
                    : ''}
            </span>
          </p>
          <div className={'text-sm flex-center gap-2 justify-start text-lightGray50'}>
            {/* <StarsScoresOutline className={'gap-0'} number={Number(4)} /> */}
            <p className={'pt-1 '}>
              <span>امتیاز </span>
            </p>
          </div>
        </div>
        <h2 className={'text-15 mb-2 font-semibold'} dangerouslySetInnerHTML={{ __html: tourData.name }} />
        <p className={'text-14 text-darkGray'}>{textTrim(tourData.description, 60)}</p>

        <p className={'flex-center justify-start mt-2'}>
          <span className={'text-xl'}>
            <IconSelect name={'clock'} />
          </span>
          <span className={'text-info pr-0.5'}>
            {tourData?.start_date ? getDayFromNow(tourData.start_date) : 'وارد نشده!'}
          </span>
          <span className={'pr-0.5'}>روز تا پایان ثبت نام</span>
        </p>
        <p className={'flex-center justify-start gap-0.5 mt-1 my-1'}>
          <span className={'text-xl'}>
            <IconSelect name={'users'} />
          </span>
          {/* <span className={'text-info'}>{5}</span> */}
          <span>نفر ظرفیت</span>
        </p>
        <p className={'flex-center justify-start gap-0.5 my-1'}>
          <span className={'text-xl'}>
            <IconSelect name={'calendar'} />
          </span>
          <span>شروع تور</span>
          <span>{tourData?.start_date ? getPersianDate(tourData.start_date) : 'وارد نشده!'}</span>
        </p>
        <p className={'flex-center justify-start gap-0.5 text-green-600 mt-1'}>
          <span className={'text-dark'}>شروع نرخ:</span>
          <span>{tourData.base_price}</span>
          <span> + </span>
          <span>{tourData.extra_price}</span>
        </p>
        <div className={'w-full flex-center gap-4 mt-2'}>
          <Link className={''} href={`/tours/${tourData.slug}`}>
            <Buttons className={'w-fulltext-white w-[158px] py-2'} variant={'primary'}>
              جزئیات و رزرو
            </Buttons>
          </Link>
          <a className={''} href="#">
            <Buttons className={'text-white w-[158px] py-2 px-0 text-nowrap gap-1'} variant={'danger'}>
              <IconSelect classes={'text-14'} name={'download'} />
              <span>دانلود پکیج</span>
            </Buttons>
          </a>
        </div>
      </div>
    </article>
  );
}
