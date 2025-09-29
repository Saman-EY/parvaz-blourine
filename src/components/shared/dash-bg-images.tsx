// @flow
import * as React from 'react';
import {cn} from "@/lib/utils";

type Props = {
    className?: string
};

export function DashBgImages(props: Props) {
    return (
        <div className={cn('hidden lg:block w-full h-full absolute -bottom-5 -right-5 z-[-1] rounded-10 lg:rounded-30 border-[2px] border-dashed border-[#CFD8DC]', props.className)}/>
    );
}