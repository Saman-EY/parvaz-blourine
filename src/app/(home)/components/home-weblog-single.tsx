"use client"

import Image from "next/image";
import React from "react";
import {LinkButtons} from "@/components/ui/buttons";
import {cn} from "@/lib/utils";
import {AspectRatio} from "@/components/ui/aspect-ratio";

interface Props {
    right?: boolean;
    data: {
        src?: string;
        heading?: string;
        description?: string;
        headingLink?: string;
        heading2?: string;
        description2?: string;
    }
}

export const HomeWeblogSingle: React.FC<Props> = ({
                                                      right = false,
                                                      data,
                                                  }) => {
    return (
        <div
            className={cn(
                'flex flex-col lg:flex-row items-center max-w-[1440px] lg:h-[480px] mx-auto gap-10',
                right && 'lg:flex-row-reverse'
            )}
        >
            {/* تصویر */}
            {data.src && (
                <AspectRatio
                    ratio={540 / 480}
                    className="h-full w-full lg:w-[540px] rounded-15 overflow-hidden bg-gray-100"
                >
                    <Image
                        src={data.src}
                        alt="weblog"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </AspectRatio>
            )}

            {/* توضیحات */}
            <div className="flex-1 w-full lg:w-[506px] flex flex-col justify-center items-start mt-5">
                {data?.heading && (
                    <h2 className="text-primary text-16 lg:text-24 font-semibold mb-2">
                        {data?.heading}
                    </h2>
                )}
                {data?.description && (
                    <p className="text-darkGray text-14 lg:text-16 mb-4">
                        {data.description}
                    </p>
                )}
                {data.heading2 && (
                    <h2 className="text-primary text-16 lg:text-24 font-semibold mb-2">
                        {data.heading2}
                    </h2>
                )}
                {data.description2 && (
                    <p className="text-darkGray text-14 lg:text-18 mb-4">
                        {data.description2}
                    </p>
                )}
                {data.headingLink && (
                    <LinkButtons variant="primary-outlined" className={'mx-auto lg:mx-0'} href={data.headingLink}>
                        مشاهده بیشتر
                    </LinkButtons>
                )}
            </div>
        </div>
    );
};