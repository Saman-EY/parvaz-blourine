// @flow
import * as React from 'react';
import {cn} from "@/lib/utils";
import {IconSelect} from "@/components/ui/icon-select";

type Props = {
    number: number
    className?: string
};

export function StarsScoresOutline(props: Props) {
    return (
        <div className={cn('bg-[#F5F5F5] flex justify-start text-2xl text-[#FDD835] gap-0.5', props.className)}>
            {Array.from({length: 5 - props.number}).map((_, index) => (
                <IconSelect key={index} classes={'text-[#FDD835]'} name={'outline-star'}/>
            ))}
            {Array.from({length: props.number}).map((_, index) => (
                <IconSelect key={index} classes={'text-[#FDD835]'} name={'filled-star'}/>
            ))}
        </div>
    );
};