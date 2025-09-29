import Image from "next/image";
import * as React from "react";
import {cn} from "@/lib/utils";
import {Buttons, LinkButtons} from "@/components/ui/buttons";
import {BookmarkButton} from "@/components/ui/bookmark-button";
import Flag from "react-world-flags";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {textTrim} from "@/helpers/text-trim";
import {env} from "@/env";
import {VisaType} from "@/types/visa";

type Props = {
    visaData: VisaType
};

export function VisaCardRow({visaData}: Props) {
    return (
        <div
            className={'flex flex-col lg:flex-row relative w-[360px] lg:w-[780px] bg-bgLightGray rounded-10 lg:rounded-15 p-5 lg:p-2.5 gap-2 items-center'}>
            <AspectRatio className="h-[200px] w-full lg:h-[170px] lg:w-[170px] rounded-15 " ratio={1}>
                <Image
                    fill={true}
                    src={`${env.NEXT_PUBLIC_IMAGE_DIRECTORY + visaData?.image?.path}`}
                    alt={visaData?.image?.alt ?? visaData.name}
                    className="w-full h-full object-cover"
                    sizes="50vw"
                    priority
                />
                <div className={'absolute z-10 flex-center w-full justify-between p-2.5'}>
                    <div className={' top-3 right-3 bg-white/80 rounded-5 p-0.5'}>
                        <BookmarkButton className={''}/>
                    </div>
                    <div className={'flex gap-1'}>
                        {visaData?.country?.code? <Flag code={visaData.country.code} className="w-[30px] h-[20px] object-cover rounded-5"/> : '?'}
                    </div>
                </div>
            </AspectRatio>
            <div className={'flex flex-col gap-2 lg:max-w-[360px] w-full'}>
                <h2 className={'text-dark text-16 lg:text-20 font-medium'}>{visaData.name}</h2>
                <p className={'text-14 lg:text-16 text-darkGray'}>{textTrim('وارد نشده!', 100)}</p>
            </div>
            <div
                className={'w-full lg:w-auto grid grid-cols-2 lg:grid-cols-1 gap-1 text-14 lg:text-16 text-darkGray lg:pr-10'}>
                <p>
                    <span>وضعیت:</span>
                    <span
                        className={cn('font-medium', visaData.status === 'open' ? 'text-info' : 'text-danger')}> {visaData.status === 'open' ? 'فعال' : 'غیرفعال'} </span>
                </p>
                <p>
                    <span> نوع ویزا:</span>
                    <span className={'font-medium'}> {visaData.type}</span>
                </p>
                <p>
                    <span> زمان صدور:</span>
                    <span>{visaData?.issue_duration || 'وارد نشده!'}</span>
                </p>
                <p>
                    <span> متصدی صدور:</span>
                    <span> {visaData.issuer}</span>
                </p>
                <LinkButtons className={'col-span-full w-full lg:w-[120px] h-[40px] text-nowrap mt-2 lg:mt-0'}
                             href={`/visa-passport/${encodeURIComponent(visaData.slug)}`}>
                    شرایط و مدارک
                </LinkButtons>
            </div>
        </div>
    );
}