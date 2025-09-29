'use client';

import {useForm} from 'react-hook-form';
import {LoginType} from "@/types/auth";
import {Loader2} from "lucide-react";
import TextInput from "@/components/ui/text-input";
import {useAuth} from "@/store/auth-context";
import {Buttons} from "@/components/ui/buttons";


interface Props {
    handleChangePageAction: (page: string) => void
}

export default function LoginForm({handleChangePageAction}: Props) {
    // React Hook Form setup
    const {
        register: rhfRegister,
        handleSubmit,
        formState: {errors: formErrors},
        setError,
    } = useForm<LoginType>();

    // Auth hook (no mutateUser needed—login() will call mutate() internally)
    const {
        login: authLogin,
        errors: serverErrors = {},  // default to {}
        postLoading: loading
    } = useAuth();

    const onSubmit = async (data: LoginType) => {
        await authLogin(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            {/* Email */}
            <div className={'space-y-4'}>
                <TextInput
                    type={'number'}
                    placeholder={'شماره تماس'}
                    error={(formErrors.email?.message || serverErrors.email) && (formErrors.email?.message || serverErrors.email)}
                    register={{
                        ...rhfRegister('email', {
                            required: 'شماره تماس اجباری است.',
                            pattern: {
                                value: /^\d+$/,
                                message: 'شماره تماس معتبر نیست',
                            },
                        })
                    }}/>

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
            </div>

            {/* Generic credentials error (e.g. wrong email/password) */}
            {serverErrors.credentials && (
                <p className="text-red-500 text-sm">{serverErrors.credentials}</p>
            )}

            <h5 onClick={() => handleChangePageAction('forget')} className={'text-center cursor-pointer text-primary underline underline-offset-[5px] mb-7'}>گذرواژه خود را فراموش کردید؟</h5>

            <Buttons type={'submit'} variant={'primary'} disabled={loading}
                     className={'mx-auto w-[150px] h-[40px] lg:h-[50px] lg:w-[250px] text-nowrap'}>
                {loading ? 'صبر کنید' : 'ورود به حساب کاربری'}
                {loading && <Loader2 className="animate-spin"/>}
            </Buttons>

        </form>
    );
}
