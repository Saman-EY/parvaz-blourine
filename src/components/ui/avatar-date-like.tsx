"use client";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LikeButton } from "@/components/ui/like-button";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  name: string;
  date: string;
  likes: number;
  isLiked: boolean;
  className?: string;
};

export function AvatarDateLike(props: Props) {
  const [likes, setLikes] = useState(props.likes);
  const [isLiked, setIsLiked] = useState(props.isLiked ?? false);
  const date = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(props.date));
  return (
    <div
      onClick={(event) => {
        event.preventDefault();
      }}
      className={cn(["z-20 relative flex w-full justify-between", props.className])}
    >
      <div className={"flex gap-3"}>
        <Avatar>
          <AvatarImage src={props.src} />
          <AvatarFallback className={"bg-gray-200"}>{props.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className={""}>
          <h3 className={"text-14 text-darkGray"}>{props.name}</h3>
          <h4 className={"text-12 text-lightGray font-light"}>{date}</h4>
        </div>
      </div>
      <div className={"flex-center text-danger text-sm bg-bgLightGray px-3 py-2 rounded-10 gap-1"}>
        <LikeButton className="size-4" isLiked={props.isLiked ?? false} onClick={() => console.log("like")} />
        <span className="text-xs">{likes.toString()}</span>
      </div>
    </div>
  );
}
