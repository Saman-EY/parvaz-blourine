'use client'
import * as React from 'react';
import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import {IconSelect} from "@/components/ui/icon-select";
import {useState} from "react";

type Props = {
    className?: string
    selected?: boolean
    // onClick: () => void
};

export function BookmarkButton(props: Props) {
    const [selected, setSelected] = useState(props.selected ?? false)
    return (
        <button
            onClick={() => setSelected(!selected)}
            className={cn([
                'flex items-center justify-center text-2xl max-w-[50px]',
                selected ? 'text-red-600' : ''
            ])}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={selected ? 'selected' : 'unliked'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className={cn(['flex items-center justify-center text-primary', props.className])}
                >
                    {selected ? (
                        <IconSelect classes="text-2xl" name="bookmark-fill"/>
                    ) : (
                        <IconSelect classes="text-2xl" name="bookmark"/>
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
};