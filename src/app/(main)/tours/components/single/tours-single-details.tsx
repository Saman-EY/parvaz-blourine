import { ToursSingleDetailsCard } from "@/app/(main)/tours/components/cards/tours-single-details-card";
import { cn } from "@/lib/utils";
import { ToursSinglePeriodsSlider } from "@/app/(main)/tours/components/sliders/tours-single-periods-slider";
import { ToursSingleTourCalendar } from "@/app/(main)/tours/components/single/tours-single-tour-calendar";
import { TourDetailType } from "@/types/tours";
import { useMyDataCxt } from "@/store/data-context";
import { ITour } from "@/types/tourSingle";

type Props = {
  className?: string;
};

export function ToursSingleDetails(props: Props) {
  return (
    <section className={cn("flex-center flex-col gap-5 w-full lg:w-[270px]", props.className)}>
      <ToursSingleDetailsCard />
      <ToursSinglePeriodsSlider className={""} />
      <ToursSingleTourCalendar />
    </section>
  );
}
