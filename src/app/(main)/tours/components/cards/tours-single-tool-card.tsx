import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

type Props = {
  icon: string;
  title: string;
  svg: string;
};

export function ToursSingleToolCard(props: Props) {
  return (
    <div className={'w-full max-w-40 mx-auto mt-2  flex-center flex-col gap-3 bg-white rounded-10 p-3'}>
      {/* <Image src={props.icon} width={15} height={10} alt={props.title} className={'w-full h-full object-contain'} /> */}
      {props.svg && <div className="w-5" dangerouslySetInnerHTML={{ __html: props.svg }} />}
      <p className={'text-xs text-center text-darkGray'}>{props.title}</p>
    </div>
  );
}
