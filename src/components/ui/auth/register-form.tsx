'use client';

import {useForm} from 'react-hook-form';
import {RegisterType} from '@/types/auth';
import {Loader2} from "lucide-react";
import TextInput from "@/components/ui/text-input";
import {useAuth} from "@/store/auth-context";
import {Buttons} from "@/components/ui/buttons";
import {CheckBox} from "@/components/ui/check-box";

interface Props {
    handleChangePageAction: (page: string) => void
}

export default function RegisterForm({handleChangePageAction}: Props) {
    const {
        register: rhfRegister,
        handleSubmit,
        formState: {errors: formErrors},
        setError,
        watch,
    } = useForm<RegisterType>();

    const {
        register: authRegister,
        errors: serverErrors = {},
        status,
        postLoading: loading
    } = useAuth();

    const passwordValue = watch('password');

    const onSubmit = async (data: RegisterType) => {
        authRegister(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            {/* نام */}
            <div className={'flex-center justify-start gap-3'}>
                <span>
                    نوع حساب کاربری:
                </span>
                <CheckBox checked={false} label={'مسافر '}/>
                <CheckBox checked={false} label={'همکار '}/>
            </div>
            <TextInput
                type={'text'}
                placeholder={'نام و نام خانوادگی'}
                error={(formErrors.name?.message || serverErrors.name) && (formErrors.name?.message || serverErrors.name)}
                register={{...rhfRegister('name', {required: 'name is required'})}}
            />

            {/* ایمیل */}
            <TextInput
                type={'number'}
                placeholder={'شماره تلفن'}
                error={(formErrors.email?.message || serverErrors.email) && (formErrors.email?.message || serverErrors.email)}
                register={{
                    ...rhfRegister('email', {
                        required: 'email required!',
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'email is not valid',
                        },
                    })
                }}/>

            {/* رمز عبور */}
            <TextInput
                type={'password'}
                placeholder={'رمز عبور'}
                error={(formErrors.password?.message || serverErrors.password) && (formErrors.password?.message || serverErrors.password)}
                register={{
                    ...rhfRegister('password', {
                        required: 'password required!',
                        minLength: {value: 8, message: 'password must be at least 8 characters'},
                    })
                }}/>

            {/* تکرار رمز عبور */}
            <TextInput
                type={'password'}
                placeholder={'تکرار رمز عبور'}
                error={(formErrors.password_confirmation) && (formErrors.password_confirmation.message)}
                register={{
                    ...rhfRegister('password_confirmation', {
                        required: 'Confirm password required!',
                        validate: (value) => value === passwordValue || 'passwords do not match',
                    })
                }}/>

            <Buttons type={'submit'} variant={'primary'} disabled={loading}
                     className={'mx-auto w-[150px] h-[40px] lg:h-[50px] lg:w-[250px] text-nowrap'}>
                {loading && <Loader2 className="animate-spin"/>}
                {loading ? 'صبر کنید' : 'ثبت نام'}
            </Buttons>
        </form>
    );
}
