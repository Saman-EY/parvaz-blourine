'use client'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Search} from 'lucide-react'; // آیکون از lucide-react
import {cn} from '@/lib/utils';
import {useQueryState} from "nuqs";

interface SearchInputProps {
    placeholder?: string;
    label?: string;
    className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
                                                            placeholder = 'جستجو...',
                                                            label,
                                                            className = '',
                                                        }) => {
    const [value, setValue] = useState('');
    const [search, setSearch] = useQueryState('search');
    useEffect(() => {
        if (value.length > 2){
            setSearch(value);
        }else{
            setSearch(null);
        }
    }, [value]);
    return (
        <div className={cn("w-full flex flex-col", className)}>
            {label && <label className="block text-sm font-medium text-dark mb-1">{label}</label>}

            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className={cn(
                        'h-[40px] shadow-sm !ring-0 border-0 bg-[#EEEEEE] focus:border-primary !outline-none px-5 py-3 transition-all text-16 lg:text-18 block w-full sm:text-sm rounded-10 text-dark border-[#CCCCCC]',
                    )}
                />
                <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none"/>
            </div>
        </div>
    );
};
