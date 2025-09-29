'use client'
import * as React from 'react';
import {Fragment, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import axios from "axios";
import {CheckBox} from "@/components/ui/check-box";
import {FilterScrollbarAcc} from "@/components/shared/filter-items/filter-scrollbar-acc";

type Props = {
    className?: string
};

export function VisaSidebarFilter(props: Props) {
    const [open, setOpen] = useState(false)
    const [dataFilters, setDataFilters] = useState<any | {}>({})
    const [loading, setLoading] = useState(false)

    // async function getData() {
    //     setLoading(true)
    //     await axios.get('/data/hotels-filter.json')
    //         .then(res => setDataFilters(res.data))
    //         .catch(console.error)
    //         .finally(() => setLoading(false))
    // }

    // useEffect(() => {
    //     getData()
    // }, []);
    const [check, setCheck] = useState<boolean>(false)
    return (
        <section className={cn('', props.className)}>
            {loading && <div>در حال بارگذاری</div>}
            {!loading && (
                <Fragment>
                    <div className={'hidden lg:flex flex-center w-full justify-between'}>
                        <span className={'text-16 text-primary'}>فیلتر ها</span>
                        <span className={'text-14 text-[#E57373] cursor-pointer'}>حذف فیلتر ها</span>
                    </div>
                    <div className={'hidden lg:block h-0.5 w-full bg-gray-300 mt-5 mb-2'}/>
                    <div>
                        <div className={'flex-center justify-between w-full'}>
                    <span className={'text-dark font-medium text-16'}>
                    دسته بندی کشور ها
                     </span>
                            <span className={'text-dark text-14'}>
                        <span className={'text-[#0892DC]'}>
                            256
                        </span>
                        <span className={'pr-1'}>
                            کشور
                        </span>
                     </span>
                        </div>
                        <div className={'flex flex-col gap-3 mt-3'}>
                            <FilterScrollbarAcc label={'اروپا'} className={''}>
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'اروپا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'آسیا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'آمریکا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'آفریقا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'استرالیا'}
                                />
                            </FilterScrollbarAcc>
                            <FilterScrollbarAcc label={'آسیا'} className={''}>
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'اروپا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'آسیا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'آمریکا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'آفریقا'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'استرالیا'}
                                />
                            </FilterScrollbarAcc>
                            <span className={'text-[#0892DC] w-full underline text-center cursor-pointer'}>
                                    مشاهده بیشتر
                            </span>
                        </div>
                        {/*    stars */}
                        <div>
                            <div className={'h-[0.25px] w-full bg-gray-300 mt-5 mb-2'}/>
                            <span className={'text-dark font-medium text-16'}>
                            دسته‌بندی‌ نوع ویزا
                        </span>
                            <div className={'flex flex-col gap-3 mt-3'}>
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'یکبار ورود'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'چندبار ورود'}
                                />
                            </div>
                        </div>

                        <div>
                            <div className={'h-[0.25px] w-full bg-gray-300 mt-5 mb-2'}/>
                            <span className={'text-dark font-medium text-16'}>
                            دسته‌بندی‌ نوع ویزا
                        </span>
                            <div className={'flex flex-col gap-3 mt-3'}>
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'تجاری'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'توریستی'}
                                />
                                <CheckBox
                                    classes={cn('bg-[#E0E0E0] flex-row-reverse py-2 pr-3 rounded-10')}
                                    label={'ملاقات'}
                                />
                            </div>
                        </div>
                    </div>

                </Fragment>
            )}
        </section>
    )
}