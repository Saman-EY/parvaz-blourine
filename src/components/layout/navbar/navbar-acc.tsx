import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react";
interface Props {
    className?: string
    title: string
    children: React.ReactNode
}
export function NavbarAcc(props: Props) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className={'bg-primary px-3 text-16 rounded-10 text-white mt-4'}>{props.title}</AccordionTrigger>
                <AccordionContent className="flex flex-col pr-5 border-0 border-none">
                    {props.children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
