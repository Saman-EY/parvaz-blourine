import * as React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { Buttons } from '@/components/ui/buttons';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import Flag from 'react-world-flags';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BgTicket } from '@/components/ui/icons/bg-ticket';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';
import { IconSelect } from '@/components/ui/icon-select';
import { highlightNumberInText } from '@/helpers/highlight-number-In-Text';
import { textTrim } from '@/helpers/text-trim';
import { LineTicketSeparator } from '@/components/ui/icons/line-ticket-separator';

import { env } from '@/env';
import { getDayFromNow } from '@/helpers/get-days-from-now';
import { getPersianDate } from '@/helpers/get-perisan-date';
import { TourType } from '@/types/tours';

interface Props {
  tourData: TourType;
  className?: string;
}

export function ToursCardRow({ tourData, ...props }: Props) {
  const title = highlightNumberInText(tourData.name, { className: 'text-info' });

  return (
    <article
      className={cn('card-row max-w-[780px] w-full h-[200px] overflow-clip relative text-dark', props.className)}
    >
      <BgTicket className={' w-full h-full inset-0'} />
      <div className={'absolute flex-center p-4 h-full w-full justify-start'}>
        <AspectRatio className="aspect-square w-[170px] rounded-15 " ratio={1}>
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
              <BookmarkButton className={''} />
            </div>
            <div className={'flex gap-1'}>
              {tourData?.countries.map((country, index) => (
                <Flag key={index} code={country.code} className="w-[30px] h-[20px] object-cover rounded-5" />
              ))}
            </div>
          </div>
        </AspectRatio>
        {/* first column */}
        <div className={'flex-center flex-col gap-1.5 items-start h-full justify-between p-2 pr-4'}>
          <p className={'text-16 font-normal'}>
            <span>وضعیت: </span>
            <span className={tourData.status == 'pending' ? 'text-warning' : 'text-info'}>
              {tourData.status == 'open' ? 'فعال' : tourData.status == 'pending' ? 'در حال برنامه ریزی' : 'غیر فعال'}
            </span>
          </p>
          {/* <div className={"text-14 flex-center justify-start text-lightGray50"}>
            <StarsScoresOutline className={"gap-0"} number={Number(4)} />
            <p className={"pt-1 "}>
              <span>امتیاز </span>
            </p>
          </div> */}
          <h2 className={'text-17 font-semibold'} dangerouslySetInnerHTML={{ __html: tourData?.name }} />
          <p className={'max-w-[220px] text-14 text-darkGray'}>{textTrim(tourData.description, 50)}</p>
        </div>
        <LineTicketSeparator />
        {/* second column */}
        <div className={'text-14 flex-center flex-col items-start h-full justify-between p-2 pr-4'}>
          <p className={'flex-center justify-start'}>
            <span className={'text-16'}>
              <IconSelect name={'clock'} />
            </span>
            <span className={'text-info pr-0.5'}>
              {tourData?.start_date ? getDayFromNow(tourData.start_date) : 'وارد نشده!'}
            </span>
            <span className={'pr-0.5'}>روز تا پایان ثبت نام</span>
          </p>
          <p className={'flex-center justify-start gap-0.5'}>
            <span className={'text-16'}>
              <IconSelect name={'users'} />
            </span>
            {/* <span className={'text-info'}>{tourData?.}</span> */}
            <span>نفر ظرفیت</span>
          </p>
          <p className={'flex-center justify-start gap-0.5'}>
            <span className={'text-16'}>
              <IconSelect name={'calendar'} />
            </span>
            <span>شروع تور</span>
            <span>{tourData?.start_date ? getPersianDate(tourData.start_date) : 'وارد نشده!'}</span>
          </p>
          <p className={'flex-center justify-start gap-0.5 text-green-600'}>
            <span className={'text-dark'}>شروع نرخ:</span>
            <span>{tourData.base_price}</span>
            <span> + </span>
            <span>{tourData.extra_price}</span>
            {/* <span>تومان</span> */}
          </p>
          <div className={'w-full flex-center gap-4'}>
            <Link className={''} href={`/tours/${tourData.slug}`}>
              <Buttons className={'w-fulltext-white w-[120px] py-2'} variant={'primary'}>
                جزئیات
              </Buttons>
            </Link>
            <a className={''} href="#">
              <Buttons className={'text-white w-[120px] py-2 px-0 text-nowrap gap-1'} variant={'danger'}>
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
