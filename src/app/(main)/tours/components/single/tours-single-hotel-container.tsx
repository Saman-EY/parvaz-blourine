'use client';
import React from 'react';
import { ToursSingleHotelCard } from '@/app/(main)/tours/components/cards/tours-single-hotel-card';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useMyDataCxt } from '@/store/data-context';

type Props = {};

export function ToursSingleHotelContainer(props: Props) {
  const { currentCourse } = useMyDataCxt();

  return (
    <ScrollContainer
      className="relative w-full  scrollbar-thin scrollbar-thumb-primary scrollbar-track-[#E0E0E0] px-2"
      style={{ direction: 'ltr' }}
      hideScrollbars={false}
    >
      {currentCourse?.hotel_groups?.map((group, idx) => (
        <ToursSingleHotelCard key={idx} group={group} items={group.prices} />
      ))}
    </ScrollContainer>
  );
}
