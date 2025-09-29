import React from 'react';
import { IconSelect } from '@/components/ui/icon-select';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

type Props = {
  className?: string;
  cardType: 'go' | 'back';
  serialNumber: string;
  // upTime: string;
  // downTime: string;
  // date: string;
  airlineName: string;
  airlineLogo: string;
  title: string | null | undefined;
};

export function ToursSingleCardTransport(props: Props) {
  const goCard = Boolean(props.cardType === 'go');
  return (
    <div
      className={cn(
        'flex-center flex-col text-black text-16 bg-white p-4 pb-5 container-rounded mt-0 gap-2',
        props.className,
      )}
    >
      <div className={'bg-info w-full text-white rounded-10 flex-center gap-1 h-10'}>
        <span>بلیط</span>
        <span>{goCard ? ' رفت ' : ' برگشت '}</span>
        <IconSelect name={'back'} classes={cn('text-20', goCard ? '' : 'rotate-180')} />
      </div>
      {props.title && <p className={'text-24 lg:text-32 my-2'}>{props.title}</p>}
    </div>
  );
}
