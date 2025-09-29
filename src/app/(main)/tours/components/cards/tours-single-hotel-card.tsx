import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { StarsScores } from '@/components/ui/stars-scores';
import { Buttons } from '@/components/ui/buttons';
import { IHotel, IHotelGroup, IHotelPrice } from '@/types/tourSingle';
import Link from 'next/link';

type Props = {
  className?: string;
  group: IHotelGroup;
  items: IHotelPrice[];
  score?: string;
};

export function ToursSingleHotelCard(props: Props) {
  const { group, items } = props;

  return (
    <div dir={'rtl'} className={'bg-white container-rounded p-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-2'}>
      <section className="flex flex-col gap-5  w-full col-span-3 mb-2">
        {group.hotels.map((hotel: IHotel, idx: number) => (
          <div className="flex w-full justify-end sm:justify-between flex-wrap sm:flex-nowrap items-start gap-3" key={idx}>
            <div className={'flex w-full   md:w-[60%] gap-2'}>
              {hotel?.image?.path && (
                <Image
                  src={process.env.NEXT_PUBLIC_IMAGE_DIRECTORY + hotel?.image?.path}
                  width={150}
                  height={150}
                  alt={'transport image'}
                  className={'object-cover w-full max-w-[100px] rounded-lg h-[80px] '}
                />
              )}
              <div className={'flex-center flex-col items-start gap-[3px]'}>
                <h3 className={'text-darkGray text-16'}>{hotel.name}</h3>
                <div className={'flex-center items-start'}>
                  <StarsScores outline={true} className={'bg-transparent'} number={Number(hotel.stars)} />
                </div>
                <p className={'text-lightGray50 text-12 lg:text-14'}>
                  <span>شهر:</span>
                  {/* <span> {hotel.}</span> */}
                </p>
              </div>
            </div>
            <div className={'flex flex-col items-end gap-3'}>
              <Buttons className={'px-2 py-2 text-xs w-fit !rounded  text-nowrap'} disabled variant={'primary'}>
                {hotel.rate}
              </Buttons>
              <Buttons className={'px-3 py-2 text-xs !rounded  text-nowrap'} variant={'gray'}>
                <Link href={`/hotel/${hotel?.slug}`}>مشاهده جزییات هتل</Link>
              </Buttons>
            </div>
          </div>
        ))}
      </section>

      <div className={'col-span-full w-full flex flex-wrap gap-y-4'}>
        {items.map((item, index2) => (
          <div
            key={index2}
            className={'flex-center flex-col items-start gap-[3px] text-16 border-r border-lightGray px-2 ml-3'}
          >
            <h3 className={'text-darkGray text-sm'}>{item.name}</h3>
            <p className={'text-green-600 text-xs'}>
              <span> {String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </span>
              <span>تومان</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
