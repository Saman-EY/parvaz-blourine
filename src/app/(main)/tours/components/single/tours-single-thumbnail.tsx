import React, { Fragment } from 'react';
import Image from 'next/image';
import { BookmarkButton } from '@/components/ui/bookmark-button';
import { StarsScoresOutline } from '@/components/ui/stars-scores-outline';
import Flag from 'react-world-flags';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  image?: string;
  title?: string;
  flags?: string[];
  score?: string;
  passengers?: string;
  content?: string;
  alt: string;
};

export function ToursSingleThumbnail(props: Props) {
  return (
    <AspectRatio
      className={cn('container-rounded overflow-hidden max-h-[400px] h-full w-full m-0 p-0 z-0 group', props.className)}
      ratio={1}
    >
      <div className={'absolute w-full h-full bg-black/20 transition-all group-hover:bg-black/40 z-10 '} />
      {props.image && (
        <Image
          src={props.image}
          alt={props.alt}
          fill={true}
          priority={true}
          sizes={'(max-width: 1024px) 100vw, 50vw'}
          className={'object-cover w-full h-full relative transition-all group-hover:blur-sm'}
        />
      )}
      <div className={'flex gap-1 absolute top-3  left-0 z-20 w-full justify-end h-[20px] lg:h-[30px] px-1 md:px-5'}>
        <div className={'flex-center gap-3  ml-2 '}>
          {props?.flags &&
            props?.flags.map((flag, index) => (
              <Fragment key={index}>
                {/* <Flag code={flag} className={"rounded-md !size-10"} /> */}
                <Flag code={flag} height={16} width={40} className={'rounded-md'} />
                {index < props?.flags!.length - 1 && <span className={'text-white'}>|</span>}
              </Fragment>
            ))}
        </div>
      </div>
      <div
        className={
          'absolute z-20 w-full flex-center flex-col justify-center h-full p-2 md:p-7 text-white pt-10 md:pt-15'
        }
      >
        <h1 className={' text-2xl font-semibold text-center'}>{props?.title}</h1>
        <p
          className={cn(
            'text-center text-base lg:mt-5',
            'opacity-0 invisible transition-all duration-300',
            'group-hover:opacity-100 group-hover:visible',
          )}
        >
          {props?.content}
        </p>
      </div>
    </AspectRatio>
  );
}
