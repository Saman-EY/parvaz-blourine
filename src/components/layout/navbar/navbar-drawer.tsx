"use client"
import { useState } from "react"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Buttons, LinkButtons} from "@/components/ui/buttons"
import { IconSelect } from "@/components/ui/icon-select"
import {NavbarAcc} from "@/components/layout/navbar/navbar-acc";

export function NavbarDrawer() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="flex-center cursor-pointer text-primary text-2xl px-3">
                    <IconSelect name="menu" />
                </button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white">
                <SheetHeader>
                    <SheetTitle>

                    </SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>

                <div className="p-4 ">
                    <LinkButtons className={'mt-4 justify-start px-4'} variant={'primary'} href={'/tours'}>
                        تورها
                    </LinkButtons>
                    <LinkButtons className={'mt-4 justify-start px-4'}  variant={'primary'} href={'/hotel'}>
                        هتل‌ها
                    </LinkButtons>
                    <NavbarAcc title={'خدمات سفر'}>
                        <LinkButtons className={'mt-4 justify-start px-4'}  variant={'primary'} href={'/weblog'}>
                            گالری
                        </LinkButtons>
                        <LinkButtons className={'mt-4 justify-start px-4'}  variant={'primary'} href={'/weblog'}>
                            وبلاگ
                        </LinkButtons>
                        <LinkButtons className={'mt-4 justify-start px-4'}  variant={'primary'} href={'/visa-passport'}>
                            ویزا و اقامت
                        </LinkButtons>
                    </NavbarAcc>
                    <LinkButtons className={'mt-4 justify-start px-4'}  variant={'primary'} href={'/about-contact'}>
                        تماس با ما
                    </LinkButtons>
                </div>

                <SheetFooter className="flex justify-end space-x-2">
                    <SheetClose asChild>
                        <Buttons iconOnly={true} className={'absolute right-4 top-4 text-2xl p-1'} variant="danger-outlined">
                            <IconSelect name="close" />
                        </Buttons>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
