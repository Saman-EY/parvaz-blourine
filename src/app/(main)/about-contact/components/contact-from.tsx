'use client'
import React from 'react';
import {useForm} from 'react-hook-form';
import TextInput from "@/components/ui/text-input";
import {TextArea} from "@/components/ui/text-area";
import {Buttons} from "@/components/ui/buttons";

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ContactFormData>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = (data: ContactFormData) => {
        console.log('Form submitted:', data);
        // اینجا می‌تونی PostContactUs(data) بزنی
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={'relative z-10 w-full max-w-full lg:max-w-[500px] flex-center flex-col gap-5 p-5 bg-white rounded-10 contact-form-shadow shadow-xl'}>
            <h3 className={'text-16 lg:text-24 font-semibold text-primary '}>
                پیام خود را برای ما بفرستید
            </h3>
            <TextInput
                placeholder="نام و نام خانوادگی"
                register={register('name', {required: 'نام و نام خانوادگی اجباری است.'})}
                error={errors.name?.message}
            />

            <TextInput
                placeholder="ایمیل"
                register={register('email', {
                    required: 'ایمیل اجباری است.',
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                    },
                })}
                error={errors.email?.message}
                type="email"
            />

            <TextArea
                placeholder="متن پیام"
                className={'min-h-[220px]'}
                register={register('message', {required: 'متن پیام اجباری است.',})}
                error={errors.message?.message}
            />

            <Buttons type={'submit'} variant={'primary'}>
                ارسال
            </Buttons>
        </form>
    );
};
