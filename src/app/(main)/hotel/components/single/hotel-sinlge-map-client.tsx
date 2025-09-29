// components/pages/hotel/single/HotelSingleMapClient.tsx
'use client';

import dynamic from 'next/dynamic';

interface Props {
  position: [number, number];
  className?: string;
}

const MapComponent = dynamic(
  () => import('@/app/(main)/hotel/components/single/hotel-single-map').then((mod) => mod.HotelSingleMap),
  { ssr: false },
);

export default function HotelSingleMapClient({ position, className }: Props) {
  return <MapComponent position={position} className={className} />;
}
