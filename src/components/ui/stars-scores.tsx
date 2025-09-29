// @flow
import * as React from 'react';
import { cn } from "@/lib/utils";
import { IconSelect } from "@/components/ui/icon-select";

type Props = {
    number: number,
    className?: string
    outline?: boolean
};

export function StarsScores(props: Props) {
    const filledStars = Math.min(props.number, 5);
    const emptyStars = 5 - filledStars;
    const outline = props.outline || false;

    return (
        <div className={cn('bg-bgLightGray flex justify-start text-2xl text-[#FDD835] gap-1', props.className)}>
            {outline && Array.from({ length: emptyStars }).map((_, index) => (
                <IconSelect key={`empty-${index}`} classes={'text-[#FDD835]'} name={'outline-star'} />
            ))}
            {Array.from({ length: filledStars }).map((_, index) => (
                <IconSelect key={`filled-${index}`} classes={'text-[#FDD835]'} name={'filled-star'} />
            ))}
        </div>
    );
}
