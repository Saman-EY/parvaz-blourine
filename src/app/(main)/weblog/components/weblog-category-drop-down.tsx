"use client"

import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Buttons} from "@/components/ui/buttons"
import {IconSelect} from "@/components/ui/icon-select"
import {cn} from "@/lib/utils"
import {WeblogCategoryType} from "@/types/weblog"
import {RadioCheckBox} from "@/components/ui/radio-checkbox"
import {parseAsInteger, useQueryState} from "nuqs"

interface Props {
    title: string
    data: WeblogCategoryType[]
    setSelectedAction: (id: number) => void
}

export function WeblogCategoryDropDown({title, data, setSelectedAction}: Props) {
    const [open, setOpen] = React.useState(false)

    // manage category in URL query
    const [selectedCategory, setSelectedCategory] = useQueryState(
        "category"
    )

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Buttons variant="gray" className="text-16 gap-2 px-2 text-nowrap">
                    {title}
                    <IconSelect
                        classes={cn("text-sm transition-transform", open && "rotate-180")}
                        name="down"
                    />
                </Buttons>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white flex flex-col gap-3 p-4 !rounded-10">
                {data.map(item => (
                    <DropdownMenuItem key={item.id} className="p-0">
                        <RadioCheckBox
                            classes={'bg-[#E0E0E0] py-2 !pr-2 rounded-10 gap-2'}
                            checked={Number(selectedCategory) === item.id}
                            onChange={() => setSelectedAction(item.id)}
                            label={item.name}
                        />
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
