'use client';

import React, {useState} from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import {IconSelect} from "@/components/ui/icon-select";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {NavbarLink} from "@/components/layout/navbar/navbar-link";

interface MegaMenuProps {
    title: string;
    children: React.ReactNode;
    link?: string
}

export function NavbarDropdown({children, ...props}: MegaMenuProps) {
    const [open, setOpen] = useState(false)
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    onMouseEnter={() => setOpen(true)}
                    className="flex-center gap-2 cursor-pointer"
                >
                    {props.link ? (<NavbarLink className={'px-0'} href={props.link}>{props.title}</NavbarLink>) : <span>{props.title}</span>}
                    <IconSelect classes={cn(['text-sm transition-transform'], (open ? 'rotate-180' : ''))}
                                name={'down'}/>
                </button>
            </PopoverTrigger>

            <PopoverContent
                align="center"
                className="w-svw max-w-[90vsw] lg:max-w-[80%] xl:max-w-[70%] p-6 rounded-xl shadow-xl bg-white mx-auto"
            >
                <div className="grid gap-4 " onMouseLeave={() => setOpen(false)}>{children}</div>
            </PopoverContent>
        </Popover>
    );
}
