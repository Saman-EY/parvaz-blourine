
import {cn} from "@/lib/utils";
import {SearchInput} from "@/components/ui/search-input";
import {FilterSortDropdown} from "@/components/shared/filter-items/filter-sort-dropdown";
import {GridViewSort} from "@/components/shared/filter-items/grid-view-sort";
import React from "react";
import {FilterDropdown} from "@/components/ui/template/filter-dropdown";

interface Props {
    className?: string;
    showGridView?: boolean;
    placeholder?: string;
    FilterSidebar?: React.ComponentType
}

export function TemplateTopFilter({FilterSidebar, className, showGridView, placeholder}: Props) {
    return (
        <div className={cn('w-full flex flex-col lg:flex-row gap-3.5', className)}>
            <SearchInput placeholder={placeholder || 'جستجو'} className={'w-full lg:max-w-[397px]'}/>
            <div className={'flex items-center gap-2 justify-between w-full'}>
                <FilterDropdown>
                    {FilterSidebar && <FilterSidebar/>}
                </FilterDropdown>
                <FilterSortDropdown/>
                {showGridView && <GridViewSort className={'hidden lg:flex'}/>}
            </div>
        </div>
    )
}