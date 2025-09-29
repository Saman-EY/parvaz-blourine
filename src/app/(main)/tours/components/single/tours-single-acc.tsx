import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useMyDataCxt } from '@/store/data-context';
import { env } from 'process';

interface Props {
  className?: string;
}

export function ToursSingleAcc(props: Props) {
  const { currentCourse } = useMyDataCxt();

  return (
    <Accordion type="single" collapsible className={cn('w-full px-4 lg:px-10', props.className)}>
      {currentCourse?.itinerary.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className={''}>
          <AccordionTrigger className={' text-start flex-center items-start'}>
            {item?.image && (
              <Image
                priority={true}
                src={process.env.NEXT_PUBLIC_IMAGE_DIRECTORY + item.image.path}
                width={20}
                height={20}
                alt=""
                className={'object-contain h-5 w-5'}
              />
            )}
            <h2 className={'w-full text-start pr-1 !underline-0'}>
              {item?.subject} : {item?.title}
            </h2>
          </AccordionTrigger>
          <AccordionContent className={'p-0 w-full'}>
            <p className={'w-full'}>{item?.content}</p>
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_DIRECTORY + item.image.path}
              width={600}
              height={400}
              alt=""
              className={'object-cover w-full max-w-[220px]  my-3 rounded-2xl'}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
