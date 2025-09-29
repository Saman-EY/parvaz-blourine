'use client';

import {useForm} from 'react-hook-form';
import {LoginType} from "@/types/auth";
import {Loader2} from "lucide-react";
import {useAuth} from "@/store/auth-context";
import {Buttons} from "@/components/ui/buttons";
import React, {useEffect, useState} from "react";
import OTPInput from "react-otp-input";

interface Props {
    handleChangePageAction: (page: string) => void
}

export default function ForgetForm({handleChangePageAction}: Props) {
    // React Hook Form setup
    const [otp, setOtp] = useState('');
    const {
        register: rhfRegister,
        handleSubmit,
        formState: {errors: formErrors},
        setError,
    } = useForm<LoginType>();

    // Auth hook
    const {
        login: authLogin,
        errors: serverErrors = {},
        postLoading: loading
    } = useAuth();

    const onSubmit = async (data: LoginType) => {
        await authLogin(data);
    };

    // Timer: start from 2 minutes (120 seconds)
    const [secondsLeft, setSecondsLeft] = useState(120);
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Format mm:ss
    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        const mm = m.toString().padStart(2, '0');
        const ss = s.toString().padStart(2, '0');
        return `${mm}:${ss}`;
    };

    useEffect(() => {
        // Automatically navigate back or refresh OTP page when timer expires if desired
        if (secondsLeft === 0) {
            // e.g. handleChangePageAction('resend');
        }
    }, [secondsLeft]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">

            <div className={'mt-5'}>
                <h4 className={'text-center text-16'}>
                    <span>کد 5 رقمی به شماره </span>
                    <span dir={'ltr'}>
                        +989115648124
                    </span>
                    <span className={'pr-1'}>
                        ارسال شد
                    </span>
                </h4>
                <h5 className={'text-center text-16 space-x-2'}>
                    <span>زمان اعتبار کد</span>
                    <span className={'font-medium text-info pr-1'}>{formatTime(secondsLeft)}</span>
                </h5>
            </div>

            <div dir={'ltr'} className={'flex justify-center space-x-2 mt-7'}>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    inputStyle={{
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: '#CCCCCC',
                        outline: 'none',
                        transition: 'all 150ms cubic-bezier(0.4,0,0.2,1)',
                        fontSize: '16px',
                        color: '#1a202c',
                        display: 'block',
                        width: '30px',
                        height: '50px',
                        borderRadius: '10px',
                        marginRight: '5px'
                    }}
                    renderInput={(props) => <input {...props} />}
                />
            </div>

            {/* Generic credentials error */}
            {serverErrors.credentials && (
                <p className="text-red-500 text-sm">{serverErrors.credentials}</p>
            )}
            <div className={'text-center'}>
                <span>کد به شمارتان ارسال نشد؟ </span>
                <button onClick={() => setSecondsLeft(120)} className={'cursor-pointer text-primary underline underline-offset-4'}>ارسال مجدد کد</button></div>

            <Buttons type={'submit'} variant={'primary'} disabled={loading}
                     className={'mx-auto w-[150px] h-[40px] lg:h-[50px] lg:w-[250px] text-nowrap'}>
                {loading ? 'صبر کنید' : 'ورود به حساب'}
                {loading && <Loader2 className="animate-spin"/>}
            </Buttons>

        </form>
    );
}
