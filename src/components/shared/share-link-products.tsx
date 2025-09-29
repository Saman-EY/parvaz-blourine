'use client';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import { IconSelect } from '@/components/ui/icon-select';
import { Buttons } from '@/components/ui/buttons';
import { cn } from '@/lib/utils';
import * as React from 'react';

type Props = {
  className?: string;
  variant?: string;
};

export function ShareLinkProducts(props: Props) {
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.origin + pathname);
  }, [pathname]);

  const handleInstagramShare = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('لینک در کلیپ‌بورد کپی شد!');
    });
  };
  const btnClass =
    'cursor-pointer p-1 aspect-square bg-gray-400 hover:bg-primary text-white rounded-full transition-colors text-lg';
  return (
    <div className={cn('flex-center flex-col gap-4', props.className)}>
      <div className={'flex-center gap-2 w-full text-darkGray'}>
        <IconSelect classes={'text-base'} name={'share'} />
        <p className='text-sm'>
          <span>اشتراک گذاری </span>
          <span>{props?.variant ?? ''}</span>
        </p>
      </div>
      <div className={'flex-center w-full gap-2'}>
        <Buttons
          onClick={handleInstagramShare}
          className={
            'bg-gray-400 text-xs hover:bg-primary rounded-10 !text-white text-14 px-1.5 py-1.5 gap-1 w-full text-nowrap'
          }
          variant={'gray'}
        >
          <IconSelect  name={'copy'} />
          کپی لینک
        </Buttons>
        <TelegramShareButton url={currentUrl} title="اشتراک‌گذاری در تلگرام">
          <div className={btnClass}>
            <IconSelect classes='text-sm' name={'telegram'} />
          </div>
        </TelegramShareButton>

        <WhatsappShareButton url={currentUrl} title="اشتراک‌گذاری در واتساپ">
          <div className={btnClass}>
            <IconSelect classes='text-sm' name={'whatsapp'} />
          </div>
        </WhatsappShareButton>

        <TwitterShareButton url={currentUrl} title="اشتراک‌گذاری در توییتر">
          <div className={btnClass}>
            <IconSelect classes='text-sm' name={'twitter'} />
          </div>
        </TwitterShareButton>
        <button onClick={handleInstagramShare} className={btnClass}>
          <IconSelect classes='text-sm' name={'instagram'} />
        </button>
      </div>
    </div>
  );
}
