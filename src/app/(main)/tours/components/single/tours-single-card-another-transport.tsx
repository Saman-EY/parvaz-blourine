import React from 'react';
import { IconSelect } from '@/components/ui/icon-select';

type Props = {
  className?: string;
  cardType: 'bus' | 'boat' | 'plane' | 'car';
  time: string;
  location: string;
  date: string;
};

export function ToursSingleCardAnotherTransport(props: Props) {
  const cardType = props.cardType;
  let icon;
  switch (cardType) {
    case 'bus':
      icon = { name: 'bus', className: 'text-2xl', title: 'اتوبوس' };
      break;
    case 'boat':
      icon = { name: 'boat', className: 'text-2xl', title: 'کشتی' };
      break;
    case 'plane':
      icon = { name: 'card-plane', className: 'text-2xl', title: 'هواپیما' };
      break;
    case 'car':
      icon = { name: 'car', className: 'text-2xl', title: 'ماشین' };
      break;
  }
  return (
    <div
      className={
        'bg-white text-sm container-rounded justify-start items-start mt-0 flex flex-wrap gap-x-5 gap-y-2 p-4 text-darkGray'
      }
    >
      <div className={'flex-center justify-start gap-1'}>
        <IconSelect name={'calendar'} classes={'text-2xl'} />
        <span className={'text-nowrap'}>{props.date}</span>
      </div>
      <div className={'flex-center justify-start gap-1'}>
        <IconSelect name={'card-location'} classes={'text-xl'} />
        <span className={'text-nowrap'}>{props.location}</span>
      </div>
      <div className={'flex-center justify-start gap-1'}>
        <IconSelect name={'clock'} classes={'text-xl'} />
        <span className={'text-nowrap'}>{props.time}</span>
      </div>
      <div className={'flex-center justify-start gap-1'}>
        <IconSelect name={icon.name} classes={icon.className} />
        <span className={'text-nowrap'}>{icon.title}</span>
      </div>
    </div>
  );
}
