'use client'

import React, {useId, useState} from 'react'
import {IconSelect} from "@/components/ui/icon-select";
import {cn} from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    child?: React.ReactNode
    classes?: string
}

const CheckBox: React.FC<CheckboxProps> = ({label, className = '', ...props}) => {
    const [checked, setChecked] = useState(props.checked)
    const id = useId()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    return (
        <div className={cn(['inline-flex items-center space-x-2 cursor-pointer flex-row-reverse', props.classes])}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="hidden"
                {...props}
            />
            <label htmlFor={id}
                   className="flex items-center flex-row-reverse justify-between w-full space-x-2 select-none cursor-pointer">
                <div
                    className={`w-[18px] h-[18px]  border-[#444444] rounded-5 overflow-clip flex items-center justify-center transition-colors duration-200 ${
                        checked ? 'bg-[#03045E]' : 'bg-transparent border'
                    }`}
                >
                    {checked && (
                        <IconSelect name={'check-tick'}/>
                    )}
                </div>
                {label && <span className="text-16">{label}</span>}
                {props?.child && props.child}
            </label>
        </div>
    )
}

export {CheckBox}
