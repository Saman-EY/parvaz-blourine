import * as React from 'react';
import {IconSelect} from "@/components/ui/icon-select";
import {cn} from "@/lib/utils";

type Props = {
    className?: string
    icon: string
};
export const ContactBorderedIcon = (props: Props) => {
    return (
        <div className={cn(['flex items-start justify-center text-2xl lg:text-4xl', props.className])}>
            <div className={'border-2 p-2 rounded-full border-primary'}>
                <IconSelect name={props.icon}/>
            </div>
        </div>
    );
};