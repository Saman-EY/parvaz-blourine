import React from 'react';
import { IconSelect } from '@/components/ui/icon-select';
import { Buttons } from '@/components/ui/buttons';

type Props = {
  visaType: string;
  date: string;
  officer: string;
  items: string[];
};

export function ToursSingleVisa(props: Props) {
  return (
    <div className={'flex-center flex-col gap-3 w-full'}>
      <h2 className={'text-primary text-lg font-semibold text-center col-span-full'}>
        مدارک مورد نیاز ویزا:
      </h2>
      <div className={'flex gap-y-2 gap-x-5 lg:gap-x-7 lg:gap-y-4 flex-wrap py-3'}>
        {props.items.map((item, index) => (
          <div key={index} className={'flex items-center gap-2 text-darkGray text-nowrap w-full max-w-[190px]'}>
            <span className={'p-1 rounded-full bg-primary'} />
            <p className={'text-sm'}>{item}</p>
          </div>
        ))}
      </div>
      <div>
        <Buttons className={'px-4 py-2'} variant={'primary'}>
          صفحه ویزا
        </Buttons>
      </div>
    </div>
  );
}
