'use client'
import * as React from 'react'
import {useEffect, useState, useCallback, useRef} from 'react'
import {parseAsInteger, useQueryState} from 'nuqs'
import {WeblogCategoryDropDown} from '@/app/(main)/weblog/components/weblog-category-drop-down'
import WeblogCard from '@/app/(main)/weblog/components/weblog-card'
import {Buttons} from '@/components/ui/buttons'
import {Loader2} from 'lucide-react'
import {WebBlogListResponse, WeblogType} from '@/types/weblog'
import {getWeblogList} from '@/api/weblog'
import {WeblogCardLoading} from "@/app/(main)/weblog/components/weblog-card-loading";
import {FilterSortDropdown} from "@/components/shared/filter-items/filter-sort-dropdown";

interface Props {
    initialData: WebBlogListResponse
}

export function WeblogListFeed({initialData}: Props) {
    // query state
    const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
    const [category, setCategory] = useQueryState('category')
    const [tag, setTag] = useQueryState('tag')
    const [sort, setSort] = useQueryState('sort')
    // local state
    const [list, setList] = useState<WeblogType[]>(initialData.items)
    const [hasMore, setHasMore] = useState<boolean>(initialData.pagination.nextPage !== null)
    const [loading, setLoading] = useState<boolean>(false)


    const firstRender = React.useRef(true)

    const tagMounted = useRef(false)
    useEffect(() => {
        if (tagMounted.current) {
            // on tag change, reset
            setPage(1)
            setList([])
            setHasMore(true)
        } else {
            tagMounted.current = true
        }
    }, [tag])

    const fetchMounted = useRef(false)
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        const fetchData = async () => {
            setLoading(true)
            try {
                const data = await getWeblogList({
                    page,
                    category: Number(category) || undefined,
                    tag: Number(tag) || undefined
                })
                if (data) {
                    setList(prev => (page === 1 ? data.items : [...prev, ...data.items]))
                    setHasMore(data.pagination.nextPage !== null)
                }
            } catch (err) {
                console.error('Error loading weblogs:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [page, category, tag])

    // Handlers
    const loadMore = useCallback(async () => {
        if (!loading && hasMore) await setPage(prev => (prev ?? 1) + 1)
    }, [loading, hasMore, setPage])

    const handleCategoryChange = async (id: number) => {
        await setCategory(Boolean(Number(category) === Number(id)) ? null : String(id))
        await setPage(1)
        setList([])
        setHasMore(true)
    }

    useEffect(() => {
        if (sort) {
            setList(prevState => {
                const sortedList = [...prevState];
                sortedList.sort((a, b) => {
                    if (sort === 'پرطرفدارترین') {
                        return b.likes - a.likes;
                    } else if (sort === 'قدیمی-ترین') {
                        return new Date(a.registrationDate).getTime() - new Date(b.registrationDate).getTime();
                    } else if (sort === 'جدیدترین') {
                        return new Date(b.registrationDate).getTime() - new Date(a.registrationDate).getTime();
                    } else {
                        return 0;
                    }
                });
                return sortedList;
            });
        }
    }, [sort, list.length]);

    return (
        <section className="max-w-1086 mx-auto mt-10 p-5 flex flex-col items-center">
            <div className="w-full flex justify-between mb-6">
                <WeblogCategoryDropDown
                    title="دسته بندی ها"
                    data={initialData.categories}
                    setSelectedAction={handleCategoryChange}
                />
                <FilterSortDropdown
                    data={
                        [
                            {"label": "پرطرفدارترین", "value": "پرطرفدارترین"},
                            {"label": "قدیمی ترین", "value": "قدیمی-ترین"},
                            {"label": "جدیدترین", "value": "جدیدترین"},
                        ]
                    }
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
                {!loading && list.length === 0 ? (
                    <p className="text-14 text-darkGray col-span-full text-center mt-10">وبلاگی برای نمایش وجود
                        ندارد</p>
                ) : (
                    list.map(weblog => <WeblogCard key={weblog.id + 'weblog'} weblog={weblog}/>)
                )}
                {loading && Array.from({length: 6}).map((_, index) => (<WeblogCardLoading key={index}/>))}
            </div>


            {hasMore && (
                <Buttons
                    disabled={loading}
                    variant="secondary"
                    onClick={loadMore}
                    className="mt-6"
                >
                    {loading ? (
                        <><Loader2 className="animate-spin text-white h-5 w-4 mr-1"/> در حال بارگذاری </>
                    ) : (
                        'بیشتر ببینید'
                    )}
                </Buttons>
            )}

            {!hasMore && list.length > 0 && (
                <p className="text-red-500 mt-6">شما تمام مقالات را مشاهده کردید.</p>
            )}
        </section>
    )
}
