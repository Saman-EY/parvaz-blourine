'use client';
import * as React from 'react';
import Link, {LinkProps} from "next/link";
import {usePathname} from 'next/navigation';
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

type Props = LinkProps & {
    children: React.ReactNode;
    className?: string;
};

export const NavbarLink: React.FC<Props> = ({children, href, className, ...rest}) => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setIsActive(pathname === href)
    }, [pathname]);

    return (
        <Link
            href={href}
            className={cn(["relative inline-flex flex-col items-center justify-center px-2 py-1 text-sm transition-colors duration-200 text-16 mt-1",
                isActive && 'text-primary',
                className])}
            {...rest}
        >
            <span className="relative z-10 text-16">{children}</span>
            <span className={cn(['h-[2px] bg-primary rounded-full mt-[1px]', (isActive ? 'w-[60%]' : 'w-0 ')])}/>
        </Link>
    );
};
