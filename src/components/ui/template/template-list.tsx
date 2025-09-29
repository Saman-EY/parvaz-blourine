import Image from "next/image";
import {ImageType} from "@/types/shared";
import {env} from "@/env";

interface Props {
    items: any[]
}

export function TemplateList({items}: Props) {
    if (!items || !items.length) return null
    return (
        <section className={'flex flex-col gap-2'}>
            {items.map((item, index) => {
                let image: ImageType = item.images;
                if (item.images && item.images.length > 1) {
                    image = item.images[0];
                }
                if (item.image) {
                    image = item.image;
                }
                return (
                    <article className={'w-full h-[100px] bg-gray-200 p-4 rounded-md flex gap-5'}>
                        {image && <Image width={60} height={50} src={`${env.NEXT_PUBLIC_IMAGE_DIRECTORY}${image.path}`}
                                         alt={image?.alt || image?.title || item.title}/>}
                        <h3 title={'card-title'}>{item?.title || item?.name_fa || item?.name || 'نام وارد نشده'}</h3>
                        <p title={'card-description'}>{item?.description || item.content || 'توضیحات وارد نشده'}</p>
                    </article>
                )
            })}
        </section>
    )
}