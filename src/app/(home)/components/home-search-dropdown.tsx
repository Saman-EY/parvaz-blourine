import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {IconSelect} from "@/components/ui/icon-select";
import {cn} from "@/lib/utils";
import React, {useState} from "react";
import {SelectionOption} from "@/types/index.js.js";

interface Props {
    title?: string
    items: SelectionOption[]
}

export const HomeSearchDropdown: React.FC<Props> = ({title, items}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string>('')

    return (
        <DropdownMenu onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <button className={cn(['flex items-center justify-start lg:justify-center gap-2 cursor-pointer'], [selected ? 'text-gray-900' : 'text-gray-500'])}>
                    {selected ? selected : title}
                    <IconSelect
                        classes={cn(['text-sm transition-transform'], (open ? 'rotate-180' : ''))}
                        name={'down'}
                    />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
                {items.map((item,index) => {
                    return (
                        <DropdownMenuItem key={index} onClick={() => setSelected(item.label)}>
                            {item.label}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
