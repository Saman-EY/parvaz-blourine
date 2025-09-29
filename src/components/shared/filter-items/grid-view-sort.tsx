'use client';

import {Buttons} from "@/components/ui/buttons";
import {useEffect, useState} from "react";
import {IconSelect} from "@/components/ui/icon-select";
import {cn} from "@/lib/utils";

type Props = {
    className?: string
};

export function GridViewSort(props: Props) {
    const [grid, setGrid] = useState<number>(1)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const main = document.getElementById('cards-container');
        const singleCards = document.querySelectorAll('.card-row');
        const groupCards = document.querySelectorAll('.card-grid');

        if (main) {
            main.classList.remove('grid-cols-1', 'grid-cols-3');
            main.classList.add(`grid-cols-${grid}`);
        }

        singleCards.forEach((el) => {
            el.classList.toggle('hidden', grid !== 1);
            el.classList.toggle('flex', grid === 1);
        });

        groupCards.forEach((el) => {
            el.classList.toggle('hidden', grid !== 3);
            el.classList.toggle('flex', grid === 3);
        });
    }, [grid]);

    return (
        <div className={cn(['flex gap-2', props.className])}>
            <Buttons className={'p-2 '} variant={(grid !== 3 ? 'gray' : 'primary')}
                     onClick={() => setGrid(3)}>
                <IconSelect classes={'text-xl'} name={'grid-4'}/>
            </Buttons>
            <Buttons className={'p-2'} variant={(grid !== 1 ? 'gray' : 'primary')}
                     onClick={() => setGrid(1)}>
                <IconSelect classes={'text-xl'} name={'grid-3'}/>
            </Buttons>
        </div>
    );
};