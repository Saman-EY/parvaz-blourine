'use client'

import {CheckBox} from "@/components/ui/check-box";
import {cn} from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
    checkLists?: any[]
}

export function VisaForm({className}: Props) {
    return (
        <div className={cn('w-full grid grid-cols-3 gap-5', className)}>
            {Array.from({length: 9}).map((_, index) => (
                <CheckBox
                    key={index}
                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 px-1 pr-3 rounded-5')}
                    label={'ترجمه کارملی و شناسنامه'}
                />
            ))}
        </div>
    )
}