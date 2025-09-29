import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "primary-outlined"
    | "secondary-outlined"
    | "danger-outlined"
    | "danger"
    | "gray"
    | "white"
    | "info"
    | "white-outlined"
    | "icon-only";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    active?: boolean;
    children: React.ReactNode;
    iconOnly?: boolean;
}

const baseClasses =
    "rounded-10 text-sm px-10 py-4 text-center focus:outline-none font-medium flex items-center justify-center transition-all";
const iconOnlyClasses =
    "aspect-square p-0 rounded-full flex items-center justify-center";

const variantClasses: Record<ButtonVariant, string> = {
    "primary":
        "text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:ring-blue-300",
    "info":
        "text-white bg-info hover:bg-info/80 focus:ring-4 focus:ring-blue-300",
    "gray":
        "bg-[#EEEEEE] hover:bg-[#EEEEEE]/80 focus:ring-none text-darkGray",
    "primary-outlined":
        "border border-primary hover:bg-primary/20 text-primary",
    "secondary":
        "text-white bg-secondary hover:bg-secondary/80 focus:ring-4 focus:ring-blue-300",
    "secondary-outlined":
        "border border-secondary hover:bg-secondary/20 text-secondary",
    "danger-outlined":
        "border border-danger hover:bg-danger/20 text-danger",
    "danger":
        "bg-red-brand hover:bg-red-brand/80 focus:ring-4 focus:ring-blue-300 text-white",
    "white-outlined":
        "border border-white hover:bg-white/20 text-white",
    "white":
        " text-16 bg-white hover:bg-white/80 focus:ring-4 focus:ring-blue-300 text-primary",
    "icon-only":
        "aspect-square rounded-full text-2xl text-primary hover:text-primary/50 bg-white border-2 border-primary hover:border-primary/50 p-0",
};

const activeClasses = "ring ring-offset-2 ring-blue-500 scale-105";

/**
 * A basic button component with styling variants.
 */
export const Buttons: React.FC<
    BaseButtonProps & { type?: "button" | "submit" | "reset" }
> = ({
         variant = "primary",
         active = false,
         iconOnly = false,
         children,
         className = "",
         type = "button",
         ...props
     }) => {
    const classes = cn(
        iconOnly ? iconOnlyClasses : baseClasses,
        variantClasses[variant],
        active && activeClasses,
        className
    );

    return (
        <button type={type} className={classes} {...props}>
            {children}
        </button>
    );
};

interface LinkButtonProps extends Omit<React.ComponentProps<typeof Link>, 'href'> {
    href: string;
    variant?: ButtonVariant;
    active?: boolean;
    children: React.ReactNode;
    iconOnly?: boolean;
    className?: string;
}

/**
 * A link-styled button using Next.js Link under the hood.
 */
export const LinkButtons: React.FC<LinkButtonProps> = ({
                                                          href,
                                                          variant = "primary",
                                                          active = false,
                                                          iconOnly = false,
                                                          children,
                                                          className = "",
                                                          ...linkProps
                                                      }) => {
    const classes = cn(
        iconOnly ? iconOnlyClasses : baseClasses,
        variantClasses[variant],
        active && activeClasses,
        className
    );

    return (
        <Link href={href} {...linkProps} className={classes}>
            {children}
        </Link>
    );
};
