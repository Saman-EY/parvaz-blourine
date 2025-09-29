'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';
import { LikeButton } from '@/components/ui/like-button';
import { IconSelect } from '@/components/ui/icon-select';
import { Fragment } from 'react';

interface Props {
  className?: string;
  reply?: boolean;
}

export function HotelSingleComment(props: Props) {
  const reply = props.reply ?? false;
  return (
    <div className={cn('p-4', reply && 'pr-7 border-r', props.className)}>
      <div className={'flex-center w-full justify-between text-lightGray50'}>
        <div className={'flex-center gap-1'}>
          {reply ? (
            <div className={'w-10 h-10 rounded-full bg-white p-1'}>
              <IconSelect classes={'text-dark'} name={'logo-light'} />
            </div>
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
          <span className={'text-dark'}>{reply ? 'پرواز بلورین شیردال' : 'حسین ب.م'}</span>
        </div>
        {!reply && (
          <Fragment>
            <StarsScoresOutline number={5} />
            <span className={'hidden lg:flex gap-1 text-14'}>
              <span>تاریخ سفر:</span>
              <span>1399/01/01</span>
            </span>
          </Fragment>
        )}
        <div className={'hidden lg:flex-center gap-1'}>
          <LikeButton isLiked={false} onClick={() => console.log('like')} />
          <span className={'text-14 text-[#FF4B55]'}>5</span>
        </div>
        {!reply && (
          <button className={'hidden lg:flex-center gap-1 text-dark'}>
            <IconSelect name={'reply'} />
            <span>پاسخ</span>
          </button>
        )}
      </div>
      <p className={'text-lightGray50 text-sm leading-6 font-normal mt-2'}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
        بهبود ابزارهای کاربردی می باشد.
      </p>
      <div className={'lg:hidden flex-center w-full justify-between items-start text-lightGray50 mt-3'}>
        {!reply ? (
          <Fragment>
            <div className={'flex-center gap-3'}>
              <div className={'flex-center gap-1'}>
                <LikeButton isLiked={false} onClick={() => console.log('like')} />
                <span className={'text-14 text-[#FF4B55]'}>5</span>
              </div>
              <button className={'flex-center gap-1 text-dark'}>
                <IconSelect name={'reply'} />
                <span>پاسخ</span>
              </button>
            </div>
            <span className={'text-14'}>
              <span>تاریخ سفر:</span>
              <span>1399/01/01</span>
            </span>
          </Fragment>
        ) : (
          <div className={'flex-center gap-1'}>
            <LikeButton isLiked={false} onClick={() => console.log('like')} />
            <span className={'text-14 text-[#FF4B55]'}>5</span>
          </div>
        )}
      </div>
    </div>
  );
}
