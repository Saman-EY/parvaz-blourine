'use client'
import {Buttons} from "@/components/ui/buttons";
import React, {useEffect, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import LoginForm from "@/components/ui/auth/login-form";
import RegisterForm from "@/components/ui/auth/register-form";
import {IconSelect} from "@/components/ui/icon-select";
import ForgetForm from "@/components/ui/auth/forget-form";

type Props = {
    absolute?: boolean
};

export function AuthModal(props: Props) {
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState<string>('login')
    const user = null;

    const handlePageChange = (page: string) => {
        setPage(page)
    }
    useEffect(() => {
        if (!open) {
            setPage('login')
        }
    }, [open]);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Buttons className={'rounded-full px-3 py-2'}
                         variant={props.absolute ? 'white-outlined' : 'secondary-outlined'}>
                    ثبت‌نام/ ورود
                </Buttons>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] lg:max-w-[550px] bg-white">
                <DialogHeader className={''}>
                    <DialogTitle className={'text-center text-16 lg:text-32 text-primary'}>
                        {page === 'register' ? 'عضویت در پرواز بلورین' : 'ورود به حساب کاربری'}
                        <Buttons className={'absolute right-4 p-1 text-2xl rounded-full top-4'}
                                 variant={'danger-outlined'} onClick={() => setOpen(false)}>
                            <IconSelect name={'close'}/>
                        </Buttons>
                    </DialogTitle>
                    <DialogDescription hidden={true}>
                    </DialogDescription>
                </DialogHeader>
                {page === 'login' && <LoginForm handleChangePageAction={handlePageChange}/>}
                {page === 'register' && <RegisterForm handleChangePageAction={handlePageChange}/>}
                {page === 'forget' && <ForgetForm handleChangePageAction={handlePageChange}/>}


                {(page === 'register') && (<div className={'text-center'}>حساب کاربری دارید؟<button
                    className={'cursor-pointer text-primary underline underline-offset-4'}
                    onClick={() => setPage('login')}>ورود به حساب</button></div>)}
                {(page === 'login'||page === 'forget') && (<div className={'text-center'}>  حساب کاربری ندارید؟ <button
                    className={'cursor-pointer text-primary underline underline-offset-4'}
                    onClick={() => setPage('register')}>ثبت‌نام</button></div>)}
            </DialogContent>
        </Dialog>
    )
}