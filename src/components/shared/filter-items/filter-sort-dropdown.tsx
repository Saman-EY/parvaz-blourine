'use client';

import React, {useState} from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Buttons} from '@/components/ui/buttons';
import {cn} from '@/lib/utils';
import {IconSelect} from '@/components/ui/icon-select';
import {Fragment} from 'react';
import {useQueryState} from 'nuqs';

const initialValue = [
    {"label": "پرطرفدارترین", "value": "پرطرفدارترین"},
    {"label": "ارزان ترین", "value": "ارزان-ترین"},
    {"label": "گران ترین", "value": "گران-ترین"},
    {"label": "طولانی ترین", "value": "طولانی-ترین"},
    {"label": "کوتاه ترین", "value": "کوتاه-ترین"},
    {"label": "جدیدترین", "value": "جدیدترین"},
    {"label": "نزدیک ترین", "value": "نزدیک-ترین"}
];

interface Props {
    className?: string
    data?: { label: string, value: string }[]
}

export function FilterSortDropdown(props: Props) {
    const data = props.data || initialValue
    const [showPanel, setShowPanel] = useState(false);
    const [sort, setSort] = useQueryState('sort');

    const handleSelect = async (item: string | null) => {
        await setSort(item).then(() => setShowPanel(false))
    };

    return (
        <div className={'flex-center lg:w-full justify-end'}>
          <span className={'pl-1 text-14 text-nowrap'}>
            <span className={'block lg:hidden'}>چیدمان :</span>
            <span className={'hidden lg:block'}>چیدمان بر اساس:</span>
          </span>
            <DropdownMenu open={showPanel} onOpenChange={setShowPanel}>
                <DropdownMenuTrigger asChild>
                    <Buttons variant={'gray'} className={cn('!text-sm gap-2 w-[120px] flex-center text-nowrap h-[40px]')}>
                        {data.find(item => item.value === sort)?.label ?? 'انتخاب نشده'}
                        <div>
                            <IconSelect classes={cn(['transition-transform w-3 h-3 ', showPanel && 'rotate-180'])}
                                        name={'down'}/>
                        </div>
                    </Buttons>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-24 bg-[#EEEEEE] flex-center flex-col p-4 !rounded-10">
                    <div
                        className={cn(
                            'text-16 font-normal text-darkGray',
                            sort === null && 'text-primary font-semibold'
                        )}
                    >
                        انتخاب نشده
                    </div>
                    <div className={'w-full border-b-[1px] border-gray-300 !h-[2px] my-1'}/>
                    {data.map((item, index) => (
                        <Fragment key={index}>
                            {Boolean(index > 0) &&
                                <div className={'w-full border-b-[1px] border-gray-300 !h-[2px] my-1'}/>}
                            <div
                                onClick={() => handleSelect(item.value)}
                                className={cn(
                                    'text-16 font-normal cursor-pointer text-darkGray',
                                    sort === item.value && 'text-primary font-semibold'
                                )}
                            >
                                {item.label}
                            </div>
                        </Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
