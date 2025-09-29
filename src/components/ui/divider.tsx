import * as React from 'react';
import {cn} from "@/lib/utils";

type Props = {
    className?: string
};

export function Divider(props: Props) {
    return (
        <hr className={cn('w-full h-[1px] bg-gray-300', props.className)}/>
    );
};