import * as React from 'react';
import {Suspense} from "react";
import {cn} from "@/lib/utils";
import {BlogTagType} from "@/types/weblog";
import {Skeleton} from "@/components/ui/skeleton";
import Link from "next/link";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    tag: BlogTagType;
    single?: boolean;
}

export const TagButton = (props: Props) => {
    const active = props.active ?? false

    return (
        <Suspense fallback={(
            <Skeleton className={cn(['bg-[#CFD8DC] text-dark p-2 rounded-8 flex', props.className])}/>
        )}>
            <Link href={{
                pathname: '/weblog',
                query: { tag: active ? '' : String(props.tag.id) },
            }} className={cn(['bg-[#CFD8DC] text-dark p-2 rounded-8 flex',active && 'bg-gray-400 text-white', props.className])}>
                # {props.tag.name}
            </Link>
        </Suspense>
    );
};