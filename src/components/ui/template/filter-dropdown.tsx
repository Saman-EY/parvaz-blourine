'use client'
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {cn} from "@/lib/utils";
import {IconSelect} from "@/components/ui/icon-select";
import React from "react";

interface Props {
    children: React.ReactNode
    className?: string
}

export function FilterDropdown({children,className}: Props) {
    const [showPanel, setShowPanel] = React.useState<boolean>(false)
    return (
        <DropdownMenu open={showPanel} onOpenChange={setShowPanel}>
            <div className={'flex lg:hidden bg-[#F5F5F5] rounded-10 px-2 py-2 text-14 h-[40px]'}>
                <DropdownMenuTrigger asChild className={'flex cursor-pointer'}>
                    <div
                        className={cn('text-14 gap-2 px-2 text-nowrap bg-transparent flex-center', className)}>
                        فیتر ها
                        <IconSelect classes={cn(['text-sm transition-transform', showPanel && 'rotate-180'])}
                                    name={'down'}/>
                    </div>
                </DropdownMenuTrigger>
                <div
                    className={cn('text-12 gap-2 px-0.5 lg:px-2 bg-transparent text-[#E57373] text-nowrap cursor-pointer')}>
                    حذف فیلتر ها
                </div>
            </div>
            <DropdownMenuContent className="flex lg:hidden rounded-10` bg-[#F5F5F5] w-full px-4 py-3 max-w-[280px] flex-col gap-3">
                {children}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}