import './tours-single.css';

import { redirect } from 'next/navigation';

import React from 'react';
import { TourService } from '@/services/tour-services';
import { log } from '@/lib/logger';

import SingleTourPage from './SingleTourPage';
import { Metadata } from 'next';
import { CourseType } from '@/types/tours';

interface Props {
  params: Promise<{ slug: string }>;
}

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params;

//   // Fetch all courses (or a single course by slug if API supports)
//   const tourData: any = await TourService.getSingle({ slug });

//   const courses: CourseType[] = tourData?.data.courses;

//   // Find the course with the matching slug
//   const course = courses.find((c) => c.slug === slug);

//   if (!course || !tourData) {
//     return {
//       title: 'Parvaz Bolorurin',

//     };
//   }

//   return {
//     title: tourData?.data.name,
//     description: course?.meta_description,
//     keywords: course?.meta_keywords,
//   };
// }

export default async function ToursSinglePage({ params }: Props) {
  const { slug } = await params;
  const [tourSlug, courseSlug] = slug as unknown as string[]; // destructure both
  // const Tourslug = decodeURIComponent(slug[0]);

  // console.log("*slug", tourSlug, courseSlug);

  const tourData: any = await TourService.getSingle({ slug: tourSlug });
  if (!tourData) {
    log.error('Tour data not found', {
      data: tourData,
    });
    return redirect('/');
  }
  const courses = tourData?.data.courses;

  const metadata: Metadata = {
    title: tourData.data.name,
  };

  return <SingleTourPage tourData={tourData} courses={courses} />;
}
