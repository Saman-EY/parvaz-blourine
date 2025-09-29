import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { AvatarDateLike } from "@/components/ui/avatar-date-like";
import Link from "next/link";
import { textTrim } from "@/helpers/text-trim";
import { WeblogType } from "@/types/weblog";
import { env } from "@/env";

interface Props {
  weblog: WeblogType;
}

const WeblogCard = ({ weblog }: Props) => {
  let imagePath = env.NEXT_PUBLIC_IMAGE_DIRECTORY + weblog.picturePath;
  if (weblog.picturePath.includes("assets")) {
    imagePath = weblog.picturePath;
  }
  return (
    <div className={"max-w-[342px] mx-auto"}>
      <Link className={"w-full h-full flex flex-col gap-2"} href={"/weblog/" + weblog.slug}>
        <Image
          src={imagePath}
          alt={weblog.title + " عکس وبلاگ"}
          width={400}
          height={300}
          className={"object-cover w-full max-w-md rounded-2xl"}
          
        />

        <AvatarDateLike
          className={""}
          src={env.NEXT_PUBLIC_IMAGE_DIRECTORY + weblog.createdByProfilePicture}
          name={weblog.createdBy}
          date={weblog.registrationDate}
          likes={Number(weblog.likes)}
          isLiked={false}
        />
        <h3 className={"text-base"}>{weblog.title}</h3>
        <p className={"text-sm leading-6 text-darkGray mt-1"}>{textTrim(weblog.headerText, 90)}</p>
      </Link>
    </div>
  );
};

export default WeblogCard;
