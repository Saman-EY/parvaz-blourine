// components/NavbarDropMenu.client.tsx
'use client';

import {ControlledMenu, MenuItem, SubMenu, useClick} from '@szhsin/react-menu';
import type {RectElement} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {IconSelect} from '@/components/ui/icon-select';
import {useRef, useState, RefObject} from 'react';
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import Link from "next/link";

export function NavbarDropMenu() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setOpen] = useState(false);
    const anchorProps = useClick(isOpen, setOpen);
    const router = useRouter()
    return (
        <>
            <button type="button" className={'flex-center gap-1'} onMouseEnter={() => setOpen(true)}
                    ref={buttonRef} {...anchorProps}>
                <span>خدمات سفر</span>
                <IconSelect classes={cn(isOpen ? 'rotate-180' : 'rotate-0', 'transition-all text-14')} name="down"/>
            </button>

            <ControlledMenu
                onMouseLeave={()=>setOpen(false)}
                state={isOpen ? 'open' : 'closed'}
                anchorRef={buttonRef as unknown as RefObject<Element | RectElement>}
                onClose={() => setOpen(false)}
                dir="rtl"
                align={'center'}
                direction={'bottom'}
            >
                <MenuItem>گالری</MenuItem>
                <MenuItem onClick={event=> router.push('/weblog')}>
                    وبلاگ
                </MenuItem>
                <SubMenu
                    label={<LeftDirButton link={'/visa-passport'} title="ویزا و اقامت"/>}
                    direction="left"
                    className="direction-reverse !flex-row-reverse"
                >
                    <SubMenu
                        label={<LeftDirButton title="اروپا"/>}
                        direction="left"
                        arrow={false}
                        className="flex-row-reverse"
                    >
                        <MenuItem onClick={event=> router.push('/visa-passport')}>ایتالیا</MenuItem>
                        <MenuItem onClick={event=> router.push('/visa-passport')}>فرانسه</MenuItem>
                        <MenuItem onClick={event=> router.push('/visa-passport')}>آلمان</MenuItem>
                        <MenuItem onClick={event=> router.push('/visa-passport')}>نروژ</MenuItem>
                        <MenuItem onClick={event=> router.push('/visa-passport')}>دانمارک</MenuItem>
                    </SubMenu>
                    <SubMenu
                        label={<LeftDirButton title="آسیا"/>}
                        direction="left"
                        arrow={false}
                        className="flex-row-reverse"
                    >
                        <MenuItem onClick={event=> router.push('/visa-passport')}>چین</MenuItem>
                        <MenuItem onClick={event=> router.push('/visa-passport')}>عربستان</MenuItem>
                        <MenuItem onClick={event=> router.push('/visa-passport')}>ترکیه</MenuItem>
                        <MenuItem onClick={event=> router.push('/visa-passport')}>ژاپن</MenuItem>
                    </SubMenu>
                </SubMenu>
            </ControlledMenu>
        </>
    );
}

export function LeftDirButton({title,link}: { title: string,link?:string }) {
    return (
        <div className="!w-full flex items-center justify-between">
            {
                link && (
                    <Link href={link} className="flex items-center gap-1">
                        {title}
                    </Link>
                )
            }
            {!link && <span className="!w-full text-right">{title}</span>}
            <IconSelect classes="rotate-90" name="down"/>
        </div>
    );
}
