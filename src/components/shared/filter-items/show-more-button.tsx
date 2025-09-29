'use client'

import React, {Suspense} from "react";
import {Buttons} from "@/components/ui/buttons";
import {useQueryState, parseAsInteger} from "nuqs";

type Props = {
    className?: string;
    pagination?: PaginationType
};

import {PaginationType} from "@/types/weblog";

export function ShowMoreButton(props: Props) {
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
    return (
        <Buttons className={props.className} variant={'secondary'} onClick={() => setPage(page + 1)}>
            بیشتر ببینید
        </Buttons>
    );
}
