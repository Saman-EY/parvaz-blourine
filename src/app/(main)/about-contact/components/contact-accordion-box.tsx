import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react";

interface Props {
    data: { header: string, content: string }[]
    className: string
}

export function ContactAccordionBox(props: Props) {
    return (
        <Accordion type="single" collapsible className={props.className}>
            {props.data.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className={'bg-[#ECEFF1] rounded-10'}>
                    <AccordionTrigger className={'px-2 lg:px-5 text-start'}>
                        <span className={'pl-10'}>
                            {item?.header}
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className={'border-t border-[#CFD8DC] p-2 lg:p-5'}>
                        {item?.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}