import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from "react";
interface Props{
    children: React.ReactNode
}

export function GalleryModal({children}:Props) {
    return (
        <Dialog>
            <DialogTrigger className={'w-full h-full'} asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className={'hidden'}>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">

                </div>
            </DialogContent>
        </Dialog>
    )
}
