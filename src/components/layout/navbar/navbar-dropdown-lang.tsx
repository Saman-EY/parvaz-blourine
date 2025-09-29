"use client"

import React, {useState} from "react"
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu"
import Flag from "react-world-flags"
import {ChevronDown, ChevronUp} from "lucide-react"
import {cn} from "@/lib/utils";
import {IconSelect} from "@/components/ui/icon-select";

interface Props {
    title?: string;
}

export const NavbarDropdownLang: React.FC<Props> = ({title = "Language"}) => {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <div className="flex-center gap-2 cursor-pointer px-0 lg:px-10">

                    <IconSelect classes={cn(['text-sm transition-transform'], (open ? 'rotate-180' : ''))}
                                name={'down'}/>
                    {title}
                    <span className="w-8 h-8 overflow-hidden hexagon-clip-path">
                      <Flag code="IR" className="w-full h-full object-cover"/>
                    </span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-white">
                <DropdownMenuItem>
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-8 overflow-hidden hexagon-clip-path">
                          <Flag code="IR" className="w-full h-full object-cover"/>
                        </span>
                        Farsi
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-8 overflow-hidden hexagon-clip-path">
                          <Flag code="GB" className="w-full h-full object-cover"/>
                        </span>
                        English
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
