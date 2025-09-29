import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react";
import {cn} from "@/lib/utils";
import ScrollContainer from "react-indiana-drag-scroll";

type Props = {
    label: string
    children: React.ReactNode
    className?: string
}

export function FilterScrollbarAcc(props: Props) {
    return (
        <Accordion type="single" collapsible className={cn('w-full', props.className)}>
            <AccordionItem className={'!border-0 m-0 p-0 '} value="item-1">
                <AccordionTrigger
                    className={'bg-[#E0E0E0]  py-2 px-3 rounded-10 !border-0'}>{props.label}</AccordionTrigger>
                <AccordionContent className={'mt-3'}>
                    <ScrollContainer
                        className="relative max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent pr-2"
                        style={{direction: 'ltr'}}
                        hideScrollbars={false}
                    >
                        <div style={{direction: 'rtl'}} className="ltr text-right h-full w-full flex flex-col gap-3">
                            {props.children}
                        </div>
                    </ScrollContainer>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
