import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import {cn} from "@/lib/utils";

interface TextAreaProps {
    label?: string;
    error?: string;
    register: UseFormRegisterReturn;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    rows?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
                                               label,
                                               register,
                                               placeholder = '',
                                               error,
                                               disabled = false,
                                               className = '',
                                               rows = 4,
                                           }) => {
    return (
        <div className={'w-full flex flex-col'}>
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-1">
                    {label}
                </label>
            )}
            <textarea
                {...register}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                className={cn([' shadow-sm focus:ring-0 px-3 py-3 focus:border-primary transition-all text-16 lg:text-18 block w-full sm:text-sm border rounded-10 text-dark', (error ? 'border-red-500 ' : 'border-[#CCCCCC]') , className])}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};

