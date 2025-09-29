import * as React from "react";
import { cn } from "@/lib/utils";
import { IconSelect } from "@/components/ui/icon-select";

type Props = {
  className?: string;
  icon: string;
  href: string;
  title?: string;
};
export const ContactIcon = (props: Props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.title || "ما را  دنبال کنید"}
      title={props.title || "ما را  دنبال کنید"}
      className={cn([
        "bg-lightGray p-2 rounded-full text-2xl text-bgLightGray hover:bg-primary transition-colors",
        props.className,
      ])}
    >
      <IconSelect name={props.icon} />
    </a>
  );
};
