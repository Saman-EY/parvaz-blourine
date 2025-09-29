"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import faLocale from "i18n-iso-countries/langs/fa.json";
import { AvailableCountriesType } from "@/types/availableCountries";

interface Props {
    className?: string;
    setCountryAction: (county: string) => void;
    country: string;
    availableCountries: AvailableCountriesType[];
}

export const MapAmerica: React.FC<Props> = ({ className, setCountryAction, country, availableCountries }) => {
    const ref = useRef<SVGSVGElement>(null);
    const [countryId, setCountryId] = useState("");
    const [countryName, setCountryName] = useState("");

    useEffect(() => {
        if (!country) return;
        countries.registerLocale(enLocale);
        countries.registerLocale(faLocale);
        const enName = countries.getName(countryId, "en") || "";
        const faName = countries.getName(countryId, "fa") || "";
        setCountryName(`${faName} — ${enName}`);
    }, [countryId]);

    const handleClick = (event: React.MouseEvent<SVGPathElement, MouseEvent>) => {
        const target = event.target as SVGPathElement;
        setCountryAction(target.id);
    };

    const onHover = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = event.target as SVGPathElement;
        const id = target.id ? target.id.split("_")[2] : "";

        setCountryId(id);
    };

    function isAvailable(id: string): boolean {
        return !!availableCountries?.some((c) => c.code.includes(id.split("_")[2]));
    }

    useLayoutEffect(() => {
        if (!ref.current) return;
        const children = Array.from(ref.current.querySelectorAll("path"));
        children.forEach((child) => {
            if (child.id === country) {
                child.style.fill = "#0077B6";
            } else {
                child.style.fill = "currentColor";
            }
        });
    }, [country]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 263.55 297.91"
            ref={ref}
            className={cn(["w-full h-full text-[#aaaaaa]", className])}
        >
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_BM"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_BM")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="M151.56 102.23h-.1l-.03.03.03.07-.14.07-.03-.03.07-.03h.03l.03-.1.1-.03.03.03Z"
                        data-name="sm state BM"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_BO"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_BO")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m160.31 219.44-.1-.69-1.88-1.15-1.81-.03-3.34.66-.73 1.95.07 1.22-.52 2.67-.35-.49-2.22-.1-.56 1.81-1.29-1.6-2.61-.56-1.39 2.01-1.35.31-1.08-3.09-1.29-2.5.38-2.15-1.11-.94-.42-1.6-1.11-1.53 1.01-2.4-1.01-1.88.38-.76-.42-.83.66-1.11-.1-1.88v-1.6l.38-.73-1.91-3.61 1.46.21 1.01-.07.38-.66 1.67-.9 1.01-.83 2.54-.38-.14 1.67.31.87-.1 1.49 2.26 1.98 2.22.38.8.83 1.35.45.87.63h1.22l1.18.66.17 1.29.42.66.1.94-.59.03.97 2.61 3.72.1-.17 1.29.28.87 1.11.63.59 1.39-.21 1.77-.45.97.28 1.25-.56.49Z"
                        data-name="sm state BO"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_JM"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_JM")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m123.49 134.57-.63.38-1.04-.38-1.01-.8.28-.52.83-.14.45.07 1.29.21.94.52.28.63-1.39.03Z"
                        data-name="sm state JM"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_BR"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_BR")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m161.46 170.18 1.08.21.21-.49-.35-.42.21-.66.8.21.94-.24 1.11.49.87.45.59-.59.45.07.28.63.94-.14.76-.87.63-1.63 1.18-2.05.69-.1.45 1.25 1.04 3.89 1.08.38.03 1.53-1.49 1.84.59.66 3.51.35.07 2.26 1.49-1.46 2.47.8 3.3 1.35.97 1.29-.31 1.25 2.29-.69 3.82 1.18 2.95-.07 2.92 1.84 2.57 2.5 1.53.63 1.67.1.73.69.69 2.85.38 1.35-.73 3.68-.94 1.46-2.67 3.09-1.18 2.54-1.39 1.91-.49.07-.45 1.63.31 4.17-.38 3.44-.1 1.46-.56.9-.17 2.99-1.81 2.88-.17 2.33-1.49.94-.38 1.35h-2.08l-2.95.83-1.29 1.01-2.08.66-2.12 1.77-1.42 2.22-.1 1.67.45 1.22-.1 2.26-.28 1.08-1.18 1.25-1.56 3.93-1.39 1.74-1.11 1.08-.52 2.12-1.01 1.25-.73-1.25.63-1.08-1.32-1.49-1.67-1.25-2.19-1.42-.66.07-2.19-1.74-1.18.24 2.08-3.02 1.84-2.19 1.15-.9 1.46-1.22-.14-1.77-1.11-1.32-.9.45.24-1.29.1-1.32-.1-1.25-.73-.38-.69.35-.73-.1-.28-.83-.38-2.05-.42-.66-1.35-.63-.76.45-2.05-.45-.14-3.02-.69-1.22.56-.49-.28-1.25.45-.97.21-1.77-.59-1.39-1.11-.63-.28-.87.17-1.29-3.72-.1-.97-2.61.59-.03-.1-.94-.42-.66-.17-1.29-1.18-.66h-1.22l-.87-.63-1.35-.45-.8-.83-2.22-.38-2.26-1.98.1-1.49-.31-.87.14-1.67-2.54.38-1.01.83-1.67.9-.38.66-1.01.07-1.46-.21-1.11.38-.9-.24-.03-3.37-1.53 1.29-1.74-.03-.8-1.22-1.32-.1.35-.97-1.15-1.35-.9-2.01.52-.38-.07-.97 1.18-.63-.24-1.22.49-.76.1-1.04 2.19-1.53 1.6-.42.28-.35 1.77.1.76-6.11.03-.97-.31-1.25-.9-.83.03-1.63 1.11-.35.38.24.07-.87-1.15-.24v-1.39l3.82.07.66-.8.56.73.35 1.32.38-.28 1.08 1.18 1.53-.14.38-.69 1.46-.52.83-.38.24-.94 1.42-.63-.1-.49-1.67-.17-.24-1.42.1-1.49-.87-.56.38-.21 1.42.28 1.56.56.59-.52 1.42-.35 2.22-.83.73-.87-.24-.63 1.04-.07.42.49-.28 1.01.69.31.42 1.04-.56.8-.35 1.88.49 1.15.1 1.04 1.22 1.04.97.1.21-.45.63-.1.9-.38.63-.59 1.11.21.45-.1Z"
                        data-name="sm state BR"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_BS"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_BS")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m131.79 127.24-.14.17-.07.17-.21.1h-.17l-.03-.03-.14.07-.17.03-.21-.07-.14.03-.03-.17.1-.07.07-.1.14-.07.1-.14h.14l.1-.07.07.1.17.07.17-.07.24-.35h.1v.07l-.1.31Zm.07-.59-.07-.21.21-.1.1.1v.07l-.1.03-.14.1Zm.14-2.26.07-.03.17.1h.14l.14.03.1.07v.1l-.07.03-.17-.14h-.14l-.03-.03-.17.07-.17-.07v-.03l.07-.17.07.07Zm-1.36-.62-.07.14v.24l-.03.14-.14.1-.07.14-.14.1-.24.1-.03.07-.07-.07.03-.07.14-.03.07-.07v-.07l.14-.03.07-.14.14-.03.1-.14-.07-.1h-.14l-.07-.07.14-.17.03-.03h.21Zm-.66-.11.03.03h.14l.14.07-.14.14-.03-.07h-.07l-.14-.03-.14-.07-.1-.21.1-.03.14.03.07.14Zm-3.19-2.05.21.24.1.07.1.17-.1-.03-.03-.07-.1-.03-.14-.14-.07-.03-.07-.14.1-.03Zm1.28 0 .1.21.07.17v.14l.07.07.07.24v.31l.07.1.17.07.14.21v.28l-.14-.24v-.07l-.1-.14-.21-.07.07-.07-.1-.1v-.1l.07-.1-.03-.17-.1-.14.03-.03-.1-.14-.03-.21-.07.03.03-.24Zm1.01 0-.1.07-.1-.03-.03-.07.21-.07.03.1Zm-2.85-.66-.03-.03-.1-.24h.07l.07.28Zm3.65-.17-.14.21h-.14l.07-.1.03-.21.14-.1.03.14v.07Zm-6.43-.42-.1.03-.07.1-.1-.03.21-.14.07.03Zm.07.24.14.07.07-.07.03-.17.07-.03.07.21v.17l-.03.1.03.21v.1l-.14.28-.07.03-.14-.07.07-.1.14-.07-.03-.03-.21.14-.07-.07.14-.1h-.14l-.07.03-.07-.07v-.24l.03-.07-.14-.17v-.07l.14-.07.03-.1.1-.03.03-.07.21-.1.03.14-.17.14-.07.1Zm4.69-.2.03.17-.07-.03-.17.03-.14.03-.03-.07.1-.07.14-.1v-.07l-.14-.07-.07-.21-.03-.21-.14-.14v-.07l-.17-.17.1-.1.14.14v.17l.07.1.03.17.1.17.14.1.03.1.07.1Zm-3.58-1.91.1.07-.21.1-.1-.03-.07.07-.17-.03.07-.1.14-.07h.24Zm-1.45-.18.14-.07.1.1-.03.07.03.07-.07.14.1.1.07.31.07.1.14.17-.07.24.03.21-.07.1-.1.03-.14.14-.1.07h-.1l-.1.07h-.1v-.14l-.1-.07.03-.21-.1.1-.07-.03-.21-.14-.1-.1-.07-.1.24-.1.17.24.03-.21-.1-.03-.03-.1.03-.1.21-.21.07-.14-.03-.03.1-.14v-.17l-.07-.24.03-.03h.1l.07.1Zm2.81-.9.03.07.1.14.28.24.17.03.03.03.07.14.1.14.17.14v.07l-.07.28-.03.07v.1l-.03.17-.07.1-.03.24-.03.03-.07-.21-.14-.1.03-.07.17.03.07-.07-.03-.07.03-.14.1-.14.03-.17v-.1l-.17-.14-.14-.24-.1-.07-.21-.1-.1-.1-.21-.07-.14.07.14-.31h.03Zm-3.06-2.61.17.07h.03l.24.03.07-.07.07.03h.17l.14-.07h.14l.1-.07.03.17-.03.07h-.24l-.38.07h-.1l-.52.14-.24.14h-.14l-.07-.03-.1-.1-.17-.21.21.1.03.07h.17l.17-.07.14-.21-.1-.03.07-.1.03-.1.1.17Zm1.5-.45.28.07.07-.03.14.1.31.35.07.21.14.03.24.17v.07l-.07.17.07.24h-.14l-.17.14-.03.07-.1.35-.03.31-.07.07-.1-.07-.03-.14-.14-.03.1-.17h.07l.17-.14-.03-.14.07-.14v-.1l.07-.1v-.21l.07-.03.07-.1.03-.1-.1-.03-.17-.03-.03-.1v-.07l-.14-.07v-.1l-.1-.24-.07-.03-.1.03-.17-.03h-.1l-.21-.14h.17Z"
                        data-name="sm state BS"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_BZ"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_BZ")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="M99.62 138.98h-.59l.45-2.5.24-1.77.03-.35.24-.1.31.28.87-1.35.38-.03-.03.35h.35l-.1.63-.45.94.14.35-.31.8.1.21-.35 1.15-.45.59-.38.07-.45.76Z"
                        data-name="sm state BZ"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_GT"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_GT")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m99.73 134.71-.24 1.77-.45 2.5h.59l.59.42.21-.35.52.28-.97.87-1.01.63-.17.42.1.45-.45.56-.49.14.1.28-.42.24-.69.56-.1.31-.97-.38-1.22-.03-.83-.45-.97-.9.14-.66.28-.52-.24-.42 1.15-1.81h2.5l.14-.76-.28-.14-.17-.49-.66-.52-.63-.73.87-.03.17-1.25h1.81l1.81.03Z"
                        data-name="sm state GT"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_GY"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_GY")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m160.45 161.11-.35 2.01-1.22.56.1.52-.38 1.18.83 1.6h.63l.24 1.25 1.15 1.95-.45.1-1.11-.21-.63.59-.9.38-.63.1-.21.45-.97-.1-1.22-1.04-.1-1.04-.49-1.15.35-1.88.56-.8-.42-1.04-.69-.31.28-1.01-.42-.49-1.04.07-1.29-1.67.56-.63v-1.04l1.22-.35.49-.42-.63-.83.17-.8 1.63-1.32 1.25.83 1.15 1.42.03 1.18.73.03 1.04 1.08.73.8Z"
                        data-name="sm state GY"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_GF"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_GF")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m165.45 169.28.52-.97.17-1.01.35-.94-.73-1.32-.1-1.53 1.08-1.91.66.24 1.42.52 2.05 1.88.28.9-1.18 2.05-.63 1.63-.76.87-.94.14-.28-.63-.45-.07-.59.59-.87-.45Z"
                        data-name="sm state GF"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_GL"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_GL")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m241.53.58 6.91 1.04-2.33.49-4.52.07-6.43.14.49.24 4.27-.17 3.37.49 2.43-.42.83.49-1.56.83 3.2-.56 5.94-.52 3.47.28.59.59-5.14 1.01-.76.35-3.96.28 2.81.07-1.7 1.11-1.25 1.01-.42 1.81 1.29 1.11-2.05.03-2.26.56 2.19.9-.03 1.46-1.46.17 1.42 1.49-3.02.14 1.39.69-.56.63-1.98.28-1.91.03 1.46 1.18-.17.83-2.54-.76-.83.49 1.74.45 1.6 1.11.21 1.49-2.57.35-.94-.73-1.46-1.04.17 1.25-1.88.97 3.72.07 1.91.1-4.13 1.63-4.24 1.49-4.41.63-1.6.03-1.7.73-2.61 2.01-3.54 1.35-1.04.1-2.12.45-2.29.49-1.67 1.18-.49 1.39-1.18 1.32-2.99 1.6.1 1.56-1.25 1.67-1.42 1.98-2.26.14-1.74-1.67-3.13-.03-1.11-1.11-.28-1.95-1.67-2.5-.24-1.29.52-1.77-1.29-1.77 1.15-1.42-.66-.69 2.43-2.22 2.5-.73.9-.76.97-1.46-1.91.66-.9.28-1.42.24-1.46-.59.52-1.29 1.04-.97 1.32-.03 2.64.52-1.84-1.18-.94-.63-1.53.24-.9-.45 2.43-1.67-.45-.69-.38-1.22-.49-1.88-1.25-.66.49-.73-2.81-1.01-2.67-.14-3.51.07-3.3.14-1.08-.56-1.32-1.08 3.82-.52 2.64-.07-5.07-.45-2.26-.66.76-.63 5.45-.76 5.21-.76.97-.56-2.81-.56 1.6-.59 5.11-1.01 1.88-.14.07-.63 3.13-.38 3.82-.21h3.61l.97.42 3.68-.76 2.47.52 1.6.1 2.15.45-2.33-.73.56-.59 4.41-.76 4.03.07 1.77-.49 4.13-.1 9.14.14Z"
                        data-name="sm state GL"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_HT"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_HT")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m134.01 130.47.03 1.18-.24.87-.52.38.45.66-.1.63-1.25-.38-.94.14-1.18-.14-.94.42-.97-.69.24-.73 1.77.31 1.42.17.76-.49-.8-.97.14-.87-1.22-.35.52-.59 1.18.07 1.63.38Z"
                        data-name="sm state HT"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_HN"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_HN")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m110.67 140.96-.66-.03-.31.31-.69.28h-.49l-.45.28-.38-.07-.31-.35-.21.07-.31.52-.17-.03-.07.49-.73.59-.42.28-.21.28-.52-.45-.49.59h-.42l-.45.03-.07 1.11h-.28l-.28.52-.63.1-.28-.69-.59-.21.24-.9-.24-.24-.42-.14-.87.24-.03-.28-.56-.38-.38-.42-.56-.21.45-.56-.1-.45.17-.42 1.01-.63.97-.87.21.1.45-.38.56-.03.17.17.31-.1.9.21.9-.07.63-.24.28-.24.59.1.45.14.52-.03.42-.21.87.31.28.07.56.42.52.49.66.35.45.59Z"
                        data-name="sm state HN"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_PR"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_PR")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m141.07 134.15-.1-.07.03-.07h.1l.03.03-.07.1Zm5.07-.17h-.07l-.31.1h-.21l.07-.07.14-.07.14-.03.21.03.03.03Zm-3.3-.83.21.03h.21l.1.03.21-.03.1.03.14-.03.07.03.17-.03.14.03h.1l.28.07v-.07l.21.07.03-.03.28.03.07.07h.07l.21.1.07-.03-.03.24.07.1-.31.1-.1.14-.1.21-.1.07-.1.03h-.14l-.21.03-.1.07-.24-.03-.07-.07-.17.07-.1-.1-.24.07-.31-.03-.1.03-.21.03-.07.03-.07-.07-.14-.03-.1.07-.21-.03.1-.24v-.14l.07-.14-.07-.21-.07-.03-.03-.14.14-.07.07-.03v-.17l.14-.07.17.03Z"
                        data-name="sm state PR"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_PY"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_PY")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m160.31 219.44.69 1.22.14 3.02 2.05.45.76-.45 1.35.63.42.66.38 2.05.28.83.73.1.69-.35.73.38.1 1.25-.1 1.32-.24 1.29-.1 1.95-1.49 1.74-1.46.35-2.19-.35-2.01-.59 1.46-3.4-.38-.97-2.05-.87-2.54-1.67-1.6-.35-3.93-3.61.52-2.67-.07-1.22.73-1.95 3.34-.66 1.81.03 1.88 1.15.1.69Z"
                        data-name="sm state PY"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_PA"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_PA")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m120.99 155.1-.24.31.38 1.32-.38.66-.63-.17-.31 1.08-.63-.63-.35-1.22.49-.59-.49-.14-.31-.73-.97-.63-.83.14-.45.76-.83.56-.42.07-.21.49.87 1.22-.56.28-.28.31-.94.14-.28-1.35-.28.38-.63-.14-.35-.87-.8-.17-.52-.24h-.83l-.07.49-.21-.35.1-.45.21-.45-.07-.38.31-.28-.38-.31.03-.9.76-.21.66.8-.07.49.76.1.21-.21.52.56.97-.17.87-.56 1.22-.45.69-.66 1.08.14-.07.21 1.08.07.83.42.63.66.69.63Z"
                        data-name="sm state PA"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_PE"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_PE")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m135.3 184.01-1.77-.1-.28.35-1.6.42-2.19 1.53-.1 1.04-.49.76.24 1.22-1.18.63.07.97-.52.38.9 2.01 1.15 1.35-.35.97 1.32.1.8 1.22 1.74.03 1.53-1.29.03 3.37.9.24 1.11-.38 1.91 3.61-.38.73v1.6l.1 1.88-.66 1.11.42.83-.38.76 1.01 1.88-1.01 2.4-.38 1.15-.97.56-2.05-1.29-.28-.9-4.06-2.22-3.72-2.47-1.63-1.35-.97-1.84.28-.66-1.88-2.92-2.22-4.1-2.08-4.45-.83-1.04-.69-1.63-1.6-1.46-1.42-.9.59-.97-1.04-2.15.59-1.56 1.53-1.39.24.94-.56.52.1.8.8-.17.8.24.87 1.15 1.08-.94.31-1.49 1.18-1.95 2.33-.87 2.12-2.36.59-1.42-.28-1.7.52-.21 1.32 1.04.63 1.08.9.56 1.22 2.33 1.46.31 1.08-.59.73.38 1.18-.21 1.53 1.04-1.22 2.29.59.03 1.01 1.18Z"
                        data-name="sm state PE"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_EC"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_EC")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m124.36 174.76.28 1.7-.59 1.42-2.12 2.36-2.33.87-1.18 1.95-.31 1.49-1.08.94-.87-1.15-.8-.24-.8.17-.1-.8.56-.52-.24-.94 1.01-1.67-.45-.97-.73 1.04-1.22-1.01.38-.63-.35-2.01.69-.35.35-1.39.73-1.42-.1-.9 1.08-.49 1.35-.87 1.95 1.25.38-.03.49.97 1.67.31.56-.35.97.73.83.52Z"
                        data-name="sm state EC"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_KY"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_KY")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m115.22 131.34.1.03.07-.14.14.03h.17l.03.07-.07.07-.07-.03-.14.03-.07.03h-.24l.07-.1Zm2.81-.87-.24.1.07-.1h.17Zm.21.04-.03-.03.28-.1-.07.1-.17.03Z"
                        data-name="sm state KY"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_MX"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_MX")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m86.25 116.78.76-.07-1.11 1.98-.63 1.6-.63 2.99-.38 1.08.14 1.22.45 1.11.14 1.7 1.04 1.67.28 1.29.59 1.08 1.98.59.66.94 1.81-.63 1.49-.21 1.53-.42 1.25-.38 1.35-.9.63-1.29.42-1.88.42-.66 1.39-.59 2.12-.52 1.7.1 1.18-.21.42.49-.21 1.08-1.22 1.32-.63 1.35.31.38-.42.97-.73 1.74-.42-.59-.38.03-.38.03-.87 1.35-.31-.28-.24.1-.03.35-1.81-.03H96.1l-.17 1.25-.87.03.63.73.66.52.17.49.28.14-.14.76h-2.5l-1.15 1.81.24.42-.28.52-.14.66-1.95-2.4-.9-.73-1.53-.59-1.11.17-1.67.83-1.01.21-1.29-.59-1.42-.42-1.67-1.01-1.42-.31-2.05-1.04-1.49-1.08-.38-.59-1.08-.14-1.88-.69-.66-1.01-1.88-1.29-.76-1.39-.28-1.11.66-.21-.1-.63.56-.59.14-.76-.52-1.01v-.87l-.45-1.15-1.32-2.22-1.6-1.74-.66-1.39-1.42-.9-.24-.56.59-1.35-.83-.52-.87-1.11-.07-1.53-.97-.21-.8-1.15-.59-1.11.1-.69-.52-1.67-.1-1.7.28-.87-1.08-.9-.66.1-.83-.59-.63.9-.03 1.04-.35 1.7.35.9.97 1.53.14.56.24.14.03.76.35-.03v1.46l.45.56.17.8.94 1.11.14 2.08.35.97.31 1.04-.1 1.18.9.07.56 1.01.52 1.01-.1.42-.97.8h-.35l-.24-1.35-1.01-1.29-1.18-1.08-.87-.56.42-1.63-.03-1.22-.73-.69-1.08-.97-.31.28-.35-.59-1.04-.52-.76-1.32.17-.14.73.1.94-.83.35-1.01-1.01-1.6-.9-.59-.28-1.39-.21-1.49-.28-1.77-.07-2.01 2.19-.17 2.47-.24-.31.45 2.43 1.08 3.79 1.56h5.25l.28-.94h3.27l.45.8.73.73.83.97.28 1.15.14 1.25.8.66 1.39.66 1.67-1.74 1.56-.07 1.11.9.56 1.53.31 1.32.83 1.25.07 1.56.31 1.04 1.35.69 1.25.49Z"
                        data-name="sm state MX"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_FK"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_FK")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m172.44 290.59.14-.03v.14l-.28-.1.1-.1.07-.03-.03.14Zm-.25-.49.07.07.14.03.03.14-.1.03-.03-.14-.07-.07-.03-.07Zm2.16-.28.07.03-.03.14-.1-.03-.07-.1.1-.07.03.03Zm-4.21-.31v.07l.03.1-.14.03-.1-.03-.07-.07-.1-.03-.03-.14h.07l.03-.07.1-.03.07.03-.1.1.1.03.1-.1.03.1Zm1.01-.45-.14-.07-.17-.1-.28-.1.03-.14-.24-.03-.1-.03-.1-.14.07-.03.28.1.28.14.17.03.14.03.1-.1.03-.1.07.03.14-.07.03.07h.17v.1h.1l.31-.07.03.07h.1l.14-.03-.1-.07-.03-.1h.14l.21.07.03.14-.14.17.03.1-.07.07h-.14l-.1.28-.1.1-.1.21-.03.1-.17.1-.03-.07h-.14v.1l-.28-.03-.03.03.1.14-.03.03-.07.14h-.14l-.1.14-.1.03h-.07l-.07-.1-.14-.1v-.07h-.17l.21.14h-.14l-.17-.1-.07-.03-.14-.07-.1-.07v-.07l.24.07.21-.07-.17-.07-.03-.03h.31l.14.03.1.07v-.07l.14-.03.03-.1-.14-.07-.07-.17.03-.07h.21l.07.03.14-.03-.03-.1h-.28v.03l-.14.07h-.21l-.17-.1v-.1l.24.07.21-.07h.1l.17-.03.14.07v-.03l-.14-.03Zm.56-.66h.1l.1.1-.1.03h-.1v-.14Zm-.35 0h-.1l-.03-.1.14.03v.07Zm-.49-.07.21-.03.07.1-.1.14-.07-.03-.1.03-.1-.07.1-.07.1.07.03-.07-.17-.03.03-.03Zm2.5.03h.21l.03-.03.17-.03.14.07.14.1.03.1v.03l-.17.03-.07-.1-.07-.03-.03.1.07.03.03.1.1-.07.07.03.03.14.1.03.03-.03.17.1.03-.14-.28-.07.03-.17.1-.07.52-.03.24.21.07.03v.14l-.21-.03-.17-.07-.21.07.1.07.14.03.31.03.1.03.03.07-.07.17h-.17l-.03.03-.24.03-.17.07.1.07-.31.14-.14-.03-.17.03h-.24l-.21-.07-.21-.14v.1l.1.07.21.07.1.1.07-.03.14.03.14.1-.07.03.07.17h-.07l-.1-.1-.14-.03-.17.14-.07-.1-.1-.07h-.1l-.17-.07-.07.03.07.14h.1l.07.07-.07.03.24.21-.07.03-.14-.07h-.1l-.1-.1-.1-.03-.1-.03-.03.21.17.03v.1l-.03.07-.14-.03-.03-.07-.17-.07-.03-.07h-.07l-.14-.17.1-.14v-.07l-.14-.17v-.07l.17-.07-.03-.07.17-.03-.03-.1.21-.14.21-.07.14.14v.14l.1-.03-.17-.21.03-.1-.21-.07-.14-.1.03-.07.14.07.03-.17-.24-.07.03-.1.07.03.1-.07h.1l.07-.1-.1-.1h.14l.17.07Zm-1.73-.13h.24l.07.07.07-.07.07.03.07.1-.07.03-.14-.03-.14-.07-.28-.03.03-.07.07.03Zm-2.36-.39-.17-.03.03-.07.14.1Z"
                        data-name="sm state FK"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_FO"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_FO")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m262.24 38.44.28.07.07.07-.03.14-.03.03-.14-.17-.17-.03-.07-.14.1.03Zm-.45-.48.03.07h.1v.1h-.14l-.07.07-.21-.07-.07-.03-.07-.1.17-.03.03-.03.21.03-.1-.07.07-.28.17.03.1.17v.03l.21.07.1.17.1.07-.03.21-.17-.14-.07-.07-.07-.03-.03-.07-.07-.07h-.17l-.03-.03Zm1.28-.21-.07-.07.1-.07-.03.14Zm-.83.17-.14-.07-.1-.1-.03-.1.03-.03.14-.03h.1l.21.14-.03.07.03.07.21.07v.07l-.14.1-.28-.17Zm.76-.2-.1.14-.1-.07h-.1l.07-.1-.03-.14.03-.03.07.14.17.07Zm-.31 0h-.07l-.07-.14.03-.1.07.14.03.1Z"
                        data-name="sm state FO"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_NI"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_NI")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m110.67 140.96-.17.24-.17.49.14.8-.52.76-.28.9-.17.97.07.59-.03 1.01-.31.21-.24.97.07.59-.42.56.03.59.28.38-.49.49-.59-.17-.28-.45-.63-.17-.45.28-1.25-.59-.31.28-.63-.69-.87-.9-.38-.73-.76-.73-.87-1.01.24-.35.28.35.17-.14.63-.1.28-.52h.28l.07-1.11.45-.03h.42l.49-.59.52.45.21-.28.42-.28.73-.59.07-.49.17.03.31-.52.21-.07.31.35.38.07.45-.28h.49l.69-.28.31-.31.66.03Z"
                        data-name="sm state NI"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_BQBO"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_BQBO")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="M139.29 147.6h-.07l-.03-.17.03-.1-.03-.1-.14-.03-.1-.1.03-.1.42.21-.03.07v.14l-.07.07v.14Z"
                        data-name="sm state BQBO"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_CO"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_CO")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m133.18 148.15-1.29.38-.56 1.11-.8.63-.63.83-.31 1.6-.63 1.32 1.01.14.21 1.01.42.52.1.87-.24.83.03.49.49.17.42.76 2.54-.21 1.15.28 1.32 1.95.8-.24 1.42.1 1.11-.24.69.38-.42 1.18-.45.76-.21 1.6.38 1.49.52.66.07.49-1.01 1.11.69.49.52.8.56 2.22-.38.28-.35-1.32-.56-.73-.66.8-3.82-.07v1.39l1.15.24-.07.87-.38-.24-1.11.35-.03 1.63.9.83.31 1.25-.03.97-.76 6.11-1.01-1.18-.59-.03 1.22-2.29-1.53-1.04-1.18.21-.73-.38-1.08.59-1.46-.31-1.22-2.33-.9-.56-.63-1.08-1.32-1.04-.52.21-.83-.52-.97-.73-.56.35-1.67-.31-.49-.97-.38.03-1.95-1.25-.24-.69.73-.17-.07-1.11.49-.83.97-.14.87-1.39.76-1.18-.69-.52.42-1.29-.38-2.05.45-.59-.24-1.88-.76-1.22.31-1.08.63.17.38-.66-.38-1.32.24-.31 1.01.07 1.56-1.56.83-.24.03-.73.49-1.91 1.18-1.01 1.22-.07.21-.45 1.53.17 1.6-1.11.8-.49 1.01-1.08.69.14.45.59-.42.73Z"
                        data-name="sm state CO"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_CL"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_CL")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m157.74 291.18 2.08 4.72h1.74l1.04.07-.17.83-1.11.66-.83-.07-1.08-.17-1.46-.63-1.88-.31-2.61-1.18-2.22-1.11-3.4-2.4 1.6.45 2.99 1.42 2.54.76.42-.97-.1-1.46 1.18-.9 1.29.28Zm-14.14-66.04.31.56-.42 2.33-1.95 1.08.56 3.72-.28.73.69.87-1.15 1.39-.9 2.08-.31 2.05.59 2.15-.73 2.29 1.7 3.86.56.42.49 2.05-.56 2.15.49 1.88-1.04 1.46.56 2.01 1.15 2.19-.87.8.07 1.98.28 2.26 1.15 2.71-.59.45 1.29 2.54 1.08.83-.28.94.97.42.49.83-.63.42.63 1.29.38 2.88-.24 1.88.63 1.11-.03 1.35-.94.97 1.08 2.26.9.8 1.08-.14.66 1.6 1.22 1.25 4.2.28 1.7.35h-1.49l-.59.52-1.18.76.59 1.98-.66.03-2.19-.66-2.61-1.49-2.64-1.22-1.11-1.35-.1-1.25-1.46-1.46-1.74-3.68-.07-2.08 1.18-1.67-2.88-.66.94-1.91-.69-3.65 2.26.76-.63-4.55-1.39-.59.35 2.74-1.22-.31-.52-3.13-.69-4.1.38-1.53-1.15-2.15-.83-2.5.76-.1.21-3.58.42-3.58.03-3.3-1.15-3.37.21-1.84-.73-2.74.63-2.71-.31-4.31v-4.66l.03-4.97-.52-3.65-.73-3.16.97-.56.38-1.15 1.11 1.53.42 1.6 1.11.94-.38 2.15 1.29 2.5 1.08 3.09 1.35-.31Z"
                        data-name="sm state CL"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_CA"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_CA")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m161.49 70.82 1.18.31 1.63-.07-1.15.9-.69.14-1.91-.94-.21-.73.87-.66.28 1.04Zm5.01-5.56-.83.03-2.01-.66-1.22-1.04.66-.17 2.05.56 1.46.9-.1.38ZM59.53 66.55l-1.08.31-2.19-.97v-.76l-1.01-.76.1-.63-1.49-.38.21-1.18.52-.49 1.42.45.83.35 1.42.21.07.76.14 1.01 1.11.9-.07 1.18Zm117.81-4.69-1.74 1.88 1.35-.73 1.01.49-.83.73 1.32.59.97-.52 1.49.66-.97 1.6 1.32-.38-.1 1.15.17 1.35-1.25 1.95-.83.07-1.01-.42.87-1.77-.42-.28-2.54 1.88-1.04-.07 1.53-1.04-1.53-.52-1.91.14-3.34-.07-.07-.63 1.32-.8-.59-.56 1.88-1.32 2.85-3.44 1.46-1.22 1.74-.73.73.07-.52.59-1.32 1.35ZM52.27 54.42l.52.28 1.74-.17-2.5 2.4.1 1.74h-.66l-.24-.97.17-1.01-.28-.66.45-.94.69-.66Zm98.45-16.5-1.25 1.04-.59-.17-.03-.59.14-.14.97-.59.59.03.17.42Zm-3.37-1.11-2.5 1.11-1.04-.07v-.52l1.74-.94 2.08.03-.28.38Zm-1.07-5.83-.31.87.94-.31.52.52 1.22.69 1.32.59-.49.94 1.22-.14.66.66-1.74.63-2.05-.49-.28-.9-2.19 1.08-2.85 1.01.24-1.15-2.19.17 1.98-.97 1.25-1.56 1.77-1.77.97.14Zm15.6-2.89-1.7.1.24-.94 1.32-1.08 1.49-.24.8.52-.52.8-.31.28-1.32.56Zm-25.89-3.72-1.42.66-1.46-.56-1.35.17-1.18-.83 1.74-.59 1.7-.8 1.04.52.56.35.14.35.24.73Zm18.42 49.54-.76-1.25 1.01-2.95-.56-.63-1.29.35-.38-.56-1.91 1.63-1.11 1.7-.97 1.01-.87.35-.59.1-.38.52h-3.23l-2.71.03-.94.38-2.36 1.53v-.03l-.31-.14-.69.31-.66.45-.63-.38-1.63.28-1.35.31-.66.28-.8.73.63.24.59-.14h.1l-.1.66-1.67.24-.97.28-.59.35-.9-.21-.56.1-1.01.63-1.6.69-.94-.14.69-.76 1.29-1.22 1.42-.73.38-.63.31-1.04 1.32-1.22.31-1.39.38 1.35 1.32.31.83-.73-.49-1.67-.31-.69-1.39-.42-1.32-.24H127l-1.18-.28-.14-.49-.49.31-.42-.07.66-.73-.63-.28.66-.83-.42-.63.59-.63-1.81-.31-.03-1.25-.28-.28-1.15-.07-1.42-.42-.52.28-.63.52-1.15.35-1.08.87-1.88-.59-1.53.28-1.35-.66-1.6-.35-1.15-.14-.35-.35.31-1.18h-.59l-.45.83H61.1l-1.88-2.12-.56-.94-2.43-.9.45-1.91 1.25-1.29-1.42-.94 1.08-1.7-.73-1.53.87-1.11L59.5 52l1.11-1.32-1.6-1.32.49-2.4.38-1.46-.56-.94-.28-.83.21-1.08-2.26.66-2.64 1.15-.1-1.32-.17-.9-.97-.56-1.46-.07 12.37-11.36 8.55-7.09 2.08.45 1.15.9 1.29.17 2.19-.76 2.43-.59 1.84.21 3.09-.8 2.85-.45.07.76 1.56-.45 1.35-.87.73.21.49 1.67 3.3-1.29-1.35 1.42 2.08-.31 1.11-.52 1.6.1 1.35.76 2.61.69 1.63.31 1.53-.1 1.01.97-2.95.94 2.22.38 4.13-.21 1.53-.35.49 1.15 2.47-.94-.73-.83 1.56-.63 1.81-.1 1.35-.17.73.45.52 1.01 1.74-.14 1.84.87 2.5-.31 2.08.03.83-1.18 1.56-.31 1.7.63-1.49 1.81 2.15-1.53 1.11.07 2.22-1.91-.56-1.15-1.01-.76 1.91-2.05 2.85-1.32 1.56.31.69.8.14 2.08-2.01.9 2.33.38-1.53 1.91 3.09-1.46.76 1.22-1.49 1.39.45 1.29 2.54-1.35 2.26-1.67 1.63-2.05 1.91.14 1.88.28 1.25.94-.59.94-1.77 1.01.31 1.01-.83.94-3.79 1.35-2.26.31-1.11-.59-1.15.97-2.57 1.63-1.04.87-2.67 1.32-2.26.14-1.77.83-1.01 1.32-1.98.24-3.02 1.63-3.27 2.26-1.74 1.6-1.7 2.4 2.08.35-.52 1.91-.28 1.6 2.54-.42 2.43.9 1.15.8.59.97 1.7.59 1.25.87 2.64.14 1.67.21-1.25 1.81-.59 2.12.03 2.4 1.53 2.05 1.63-.69 1.95-2.22.8-3.34-.59-1.11 3.13-1.01 2.61-1.46 1.67-1.46.59-1.39-.14-1.77-1.11-1.56 3.09-2.15.35-1.84 1.35-3.13 1.32-.49 2.33.56 1.46.21 1.56-.56 1.08.69 1.25 1.18.07.76 2.67.17-.9 1.7-.8 2.57 1.32.35.56 1.22 2.85-1.15 2.61-2.29 1.46-.94.38 1.84.9 2.61.69 2.5-1.18 1.32 1.67 1.18 1.01 1.18 2.4.56.83.66v1.81l1.18.28.38.8-.69 2.4-1.49.8-1.46.76-3.06.76-2.74 1.74-2.99.38-3.51-.49h-2.54l-1.84.14-1.98 1.56-2.57.97-3.51 2.85-2.74 2.01 1.63-.35 3.79-2.88 4.27-1.81 2.64-.21 1.15 1.08-2.12 1.46-.21 2.33.03 1.67 1.95 1.08 2.99-.31 2.5-2.47-.35 1.6.87.8-2.57 1.42-4.31 1.32-2.01.87-2.5 1.6-1.29-.17.52-1.84 3.61-1.84-2.81.07-2.05.28Zm-37-56.9-1.63.83 3.65-.52.9.9 2.54-.94.63.59-.76 1.77 1.49-.73.97-1.84 1.49-.28 1.04.28.76.73-.94 1.77-.83 1.29 1.46.9 1.74.9-.9.8-2.47.17.28.69-1.11.69-2.33-.28-1.98-.52-1.77.1-3.3.66-3.93.28-2.74.17.1-.9-1.42-.49-1.49.21-.21-1.49 1.15-.21 2.54-.31 1.91.1 2.15-.35-2.26-.42-3.16.14-1.98-.03v-.66l4.06-.76-2.19.03-1.88-.49 2.71-1.35 1.81-.73 4.93-1.08.97.35Zm13.72-.52-2.43 1.18-.8-1.25.73-.28 1.91-.07.59.42Zm37.73.55-.24.49-1.42-.03-1.42-.03-1.7.24-.31-.14-.73-.94.59-.63.76-.14 2.92.21 1.56.97Zm-13.83-.1.1 1.11 2.5-1.42 4.06-.73.8 1.84-1.11 1.18 3.13-.52 1.84-.73 2.36.9 1.29.87-.38.8 2.85-.42.66 1.18 2.92.73.76.73.31 1.77-3.16.87 2.67 1.25 2.05.42 1.15 1.74 2.26.14-1.15 1.35-3.79 2.26-1.39-.83-1.32-1.88-2.05.24-.8 1.15.94 1.11 1.56.9.35.52-.03 1.98-1.25 1.42-1.63-.56-2.99-1.56 1.25 1.7.97 1.22-.1.69-3.79-.8-2.64-1.18-1.32-.94.83-.59-1.67-1.01-1.63-.94-.31.56-4.55.31-.83-.66 1.88-1.46 2.81-.03 3.23-.24-.07-.69 1.08-.97 3.06-1.88.14-.87-.17-.63-1.63-.94-2.47-.63 1.22-.49-.69-1.18-1.18-.1-.66-.63-1.15.56-2.74.24-4.86-.42-2.57-.56-2.05-.28-.66-.66 2.19-.83h-1.98l1.15-1.84 2.47-1.6 2.08-.73 3.89-.49-2.01 1.15Zm-17.51-1.22 1.25.38 2.64-.24-.17.52-2.12.87 1.32.76-1.81 1.63-2.92.69-1.18-.14-.31-.69-2.05-1.39.59-.59 2.57.21-.31-1.15 2.5-.87Zm7.85 1.92-2.71 1.35-1.53-.07.63-1.6.9-.87 1.46-.76 1.81-.49 2.74.07 2.15.42-3.51 1.6-1.95.35Zm-40.22 2.5-4.69.9.21-.8-2.08-.97 1.53-.76 2.61-1.32 2.64-1.18.14-1.08 4.86-.28 1.46.38 3.3.1.66.49.56.76-2.26.45-4.83 1.25-3.2 1.29-.9.76Zm43.49-6.4-1.42.66-1.81-.14-1.11-.45 1.56-.76 2.4-.49.49.63-.1.56Zm-3.06-3.02.07.8-.97.87-2.01 1.32-2.4.17-1.11-.28 1.18-1.01-2.29.1 1.49-1.32 1.32.07 2.67-.59 1.7.1.35-.24Zm-13.68.91-.24.59 1.53-.28 1.25.07-.8.87-1.77.8-4.83.28-4.27.76-2.08.03.52-.56 3.72-.8-6.22.21-1.46-.31 4.06-1.67 1.88-.49 2.88.59 1.01 1.01 2.12.14.24-1.63 2.01-.63 1.08.17-.63.83Zm19.35-1.53.8.56h2.57l.49.56-.97.63 1.08.38.42.42 1.7.07 1.77.14 2.47-.35 2.81-.17 2.01.14.8.66-.35.69-1.25.49-2.33.38-1.49-.24-4.1.28-2.78.03-1.95-.21-2.99-.56.56-.97.73-.83-.49-.76-2.43-.21-.9-.52 1.32-.69 2.5.1Zm-26.3-.91-2.01 1.29-1.84.59-1.32.07-3.44.73-2.47.28-1.25-.38 4.06-1.29 4.24-1.08 1.91.03 2.12-.24Zm28.21.21-.63.03-2.29-.1.24-.45 2.5.03.56.28-.38.21Zm-20.43-.31-3.06.49-1.15-.52 1.77-.52 2.08-.17 1.42.24-1.08.49Zm2.71-1.46-1.98.31h-2.08l.35-.24 1.98-.45.59.07 1.15.31Zm16.26.87-2.29.35-.56-.38.21-.59.76-.66 1.53.07.59.1.8.56-1.04.56Zm-4.8-.42-.38.66-1.84-.17-1.39-.52-2.71-.07 1.84-.45-.97-.38.76-.63 2.12.21 2.61.59-.03.76Zm18.8-2.12.94.52-2.26.45-3.68 1.22-2.36.1-2.36-.21-.56-.66.73-.56 1.49-.42h-2.29l-.69-.52.14-.66 1.7-.66 1.42-.45 1.39-.1-.1-.35 2.88-.07.56.76 1.63.31 1.67.31-.24.97Zm27.51-4.86 3.02.1 2.33.17 1.81.35-.38.35-3.4.59-3.13.28-1.39.31h2.61l-3.65.87-2.36.42-3.23 1.22-2.81.24-1.08.35-3.93.14 1.53.21-1.15.28.24.8-1.74.56-2.4.45-1.22.63-2.29.52-.17.38 2.26-.07-.38.42-4.41 1.01-2.95-.49-4.06.28-1.74-.21-2.36-.1.73-.8 2.78-.38.69-1.18.9-.1 2.61.69-.59-1.04-1.7-.31 1.74-.63 2.64-.38.97-.56-1.04-.59.38-.76 3.27.03.76.17 2.54-.56-2.54-.17-4.38.1-1.53-.49-.28-.59-.87-.42.38-.45 2.08-.28 1.46-.03 2.57-.21 2.36-.52 1.35.07.83.38 1.74-.69 1.81-.21 2.26-.14 3.61-.07.45.14 3.58-.21 2.43.07 2.43.07Z"
                        data-name="sm state CA"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_CR"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_CR")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m108.93 150.03.42 1.22.69.9.87.94-.76.21-.03.9.38.31-.31.28.07.38-.21.45-.1.45-1.04-.49-.38-.49.24-.38-.03-.49-.52-.52-.76-.45-.63-.28-.1-.66-.49-.38.07.63-.42.56-.42-.63-.59-.24-.24-.42.03-.69.31-.69-.52-.31.49-.45.31-.28 1.25.59.45-.28.63.17.28.45.59.17.49-.49Z"
                        data-name="sm state CR"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_CW"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_CW")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="M138.25 147.56h-.1l-.14-.1-.1-.03-.1-.1-.03-.07-.1-.03-.07-.14-.1-.1.03-.17.17.1.03.17.14.14.24.07.07.1.1.14-.03.03Z"
                        data-name="sm state CW"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_CU"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_CU")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m119.42 123.66.66.8 1.81-.24.63.52 1.46 1.39 1.11 1.01.63-.03 1.11.45-.21.63 1.39.1 1.35.9-.28.52-1.32.28-1.32.1-1.29-.17-2.81.21 1.46-1.22-.73-.59-1.25-.14-.59-.66-.28-1.25-1.11.07-1.74-.59-.52-.49-2.47-.35-.63-.42.8-.56-1.88-.1-1.53 1.15-.8.03-.35.56-.97.24-.8-.24 1.11-.66.52-.83.94-.49 1.04-.42 1.49-.21.49-.28 1.63.17 1.53.03 1.7.76Z"
                        data-name="sm state CU"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_SR"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_SR")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m166.74 161.6-1.08 1.91.1 1.53.76 1.32-.38.94-.17 1.04-.52.94-1.11-.49-.94.24-.8-.21-.21.66.35.42-.21.49-1.08-.21-1.15-1.95-.24-1.25h-.63l-.83-1.6.38-1.18-.1-.52 1.22-.56.35-2.01 2.36.45.21-.42 1.6-.17 2.12.63Z"
                        data-name="sm state SR"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_SV"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_SV")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m101.25 144.58-.24.52-1.15-.03-.69-.21-.76-.45-1.04-.14-.52-.49.1-.31.69-.56.42-.24-.1-.28.49-.14.56.21.38.42.56.38.03.28.87-.24.42.14.24.24-.24.9Z"
                        data-name="sm state SV"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_DO"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_DO")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m133.63 134.19.1-.63-.45-.66.52-.38.24-.87-.03-1.18.28-.38h1.49l1.11.56.52-.03.24.8 1.08-.07-.14.66.87.1.87.8-.8.9-.9-.49-.9.1-.63-.1-.38.42-.76.14-.24-.56-.66.31-.94 1.53-.45-.35-.03-.63Z"
                        data-name="sm state DO"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_VG"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_VG")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m147.67 133.28-.14.07h-.03l-.1.07-.03-.03.03-.1.21-.03.07.03Z"
                        data-name="sm state VG"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_US"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_US")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m117.58 67.66-2.12.69-1.63.87-1.6.94-.17.31 1.98-.45.73.73 1.6-.52 1.7-.73 1.88-.73-1.08 1.15.87.28.87.83 1.77-.49 1.77-.17.1.63.52.07.42.07.52.87-1.63.21h-.03l-1.29-.24-1.56.42-1.29.21-1.63 1.42-1.04.8.14.24 1.91-1.42h.24l-1.63 1.7-1.01 1.53-.87 1.25-.21 1.08-.28.52-.21.59.03 1.15.1.17.63-.03.56-.24.49-.28 1.15-1.08.63-1.46-.03-1.35.49-.94.9-1.08.73-.76.94-.52-.14.73.76-1.08.45-.21.59-.83 1.32.45.97.83-.28 1.01-.56 1.01-1.32.87-.14.56h.35l1.49-.94.56.21-.17 1.29-.24.9-1.29 1.22-.69.76-.94.83.94.45.87.14 1.39-.31 1.29-.59 1.04-.31 1.6-.63 2.01-1.32.03-.21.1-.66.94-.28 1.35.1 1.39.17 1.6-.73.21-.87-.07-.31 2.36-1.53.94-.38 2.71-.03h3.23l.38-.52.59-.1.87-.35.97-1.01 1.11-1.7 1.91-1.63.38.56 1.29-.35.56.63-1.01 2.95.76 1.25.07.73-2.22 1.04-2.08.76-2.08.66-1.39 1.32-.45.49-.42 1.18.24 1.15.73.07.07-.8.38.49-.35.63-1.32.35-.87-.03-1.46.38-.8.1-1.08.1-1.74.66 2.81-.42.38.42-2.74.66h-1.15l.14-.28-.73.63.49.1-.87 1.6-1.84 1.7.03-.59-.38-.1-.42-.56v1.22l.35.38-.21.83-.83.87-1.56 1.77-.14-.07 1.01-1.53-.69-.83.35-1.88-.66.97v1.42l-1.11-.35 1.04.69-.52 2.12.49.17v.76l-.35 2.22-1.6 1.63-2.12.66-1.53 1.32-.97.14-1.18.83-.45.73-2.4 1.46-1.32 1.08-1.22 1.32-.66 1.56v1.56l.21 1.91.52 1.56-.17.97.45 2.57-.35 1.53-.21.87-.69 1.35-.63.28-.9-.28-.14-.97-.63-.52-.69-1.91-.56-1.7-.14-.87.69-1.49-.28-1.22-1.08-1.88-.66-.35-2.12 1.04-.31-.14-.69-1.04-1.04-.56-2.22.31-1.6-.28-1.49.17-.87.35.21.59-.24.9.28.45-.42.28-.63-.31-.8.42-1.35-.07-1.15-1.18-1.7.28-1.25-.52-1.22.17-1.74.52-2.12 1.63-2.12.97-1.29 1.04-.66 1.01-.35 1.56-.14 1.04.21.76-.76.07-1.25-.49-1.35-.69-.31-1.04-.07-1.56-.83-1.25-.31-1.32-.56-1.53-1.11-.9-1.56.07-1.67 1.74-1.39-.66-.8-.66-.14-1.25-.28-1.15-.83-.97-.73-.73-.45-.8h-3.27l-.28.94h-5.25L60 102.93l-2.43-1.08.31-.45-2.47.24-2.19.17.1-1.11-.73-1.29-.76-.28.03-.63-1.01-.14-.42-.59-1.67-.21-.31-.38.28-1.22-.87-2.22-.17-3.09.31-.52-.45-.73-.52-1.88.63-1.81-.31-1.22 1.35-1.84.97-1.88.38-1.7 1.91-2.08 1.39-1.98 1.39-1.98 1.49-2.95.63-1.84.14-1.01.49-.45 2.01.76-.35 2.05.76-.59.87-1.77.56-1.77h47.63l.45-.83h.59l-.31 1.18.35.35 1.15.14 1.6.35 1.35.66 1.53-.28 1.88.59ZM25.7 48.24l-2.43.8-.28-.56.8-.97 2.22-.73 1.22-.31.9.14v.66l-2.43.97Zm-13.55-5.77-1.35.31-.59-.38-.28-.56 1.98-.35 1.04.21-.8.76Zm.41-7.78.42.35 1.22-.17.56.52 1.15.24-.42.24-1.7.42-.59-.45-.1-.35-1.49.1-.1-.17 1.08-.73Zm60.03-11.46-8.55 7.09-12.37 11.36 1.46.07.97.56.17.9.1 1.32 2.64-1.15 2.26-.66-.21 1.08.28.83.56.94-.38 1.46-.49 2.4 1.6 1.32-1.11 1.32-1.77 1.01-.21-.76-.87-.69 1.15-1.81-.56-1.7.94-1.95-1.42-.14-2.47-.03-1.32-.63-1.15-2.12-1.15-.38-1.98-.73-2.36.17-2.08-.94-.94-.87-2.19.42-1.22 1.42-1.01.14-2.29.42-2.15.69-2.22.45 1.11-1.22 2.92-2.01 2.36-.63.14-.49-3.27 1.11-2.57 1.35-3.89 1.46.07 1.01-3.13 1.46-2.67.87-2.29.66-1.39.9-3.68 1.08-1.56.97-2.85.9-.94-.14-2.15.56-2.43.73-2.12.69-3.47.63.14-.38 2.85-.97 2.29-.66 2.99-1.15 2.26-.21 1.74-.87 3.61-1.25.8-.42 1.98-.73 2.01-1.56 2.15-1.22-2.54.63-.1-.38-1.7.76.14-1.04-1.25.73.56-1.01-2.54.8h-.97l1.29-1.22 1.15-.76-.14-.73-2.5.42-.21-.97-.45-.49 1.39-1.15-.14-.87 2.05-1.15 2.67-1.15 1.84-1.01 1.42-.14.63.31 2.47-.97.87.17 1.95-.63.87-.9-.38-.35 2.08-.76-.97.03-2.15.42-1.01.45-.63-.45-2.4.24-1.6-.49.42-.8-.35-1.11 3.2-.83 4.59-.94h1.22l-1.49.97 3.2-.07.42-1.22-.8-.73.28-.97-.24-.8-1.15-.59 2.26-1.01 2.61-.07 3.06-.83 1.67-.9 2.74-.9 1.67-.21 3.89-.83 1.08.14 3.61-.97 1.53.38-.17.83 1.15-.35 2.19.1-.66.42 1.7.31 1.7-.17 2.15.56 2.5.21.76.21 2.29-.28 1.42.56 1.22.24Z"
                        data-name="sm state US"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_UY"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_UY")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m173.24 249.73-.56 1.42-1.88 1.22-1.46-.45-.97.24-1.91-.94-1.25.07-1.35-1.25-.14-1.42.31-.49-.42-2.22.14-2.29.17-1.81 1.18-.24 2.19 1.74.66-.07 2.19 1.42 1.67 1.25 1.32 1.49-.63 1.08.73 1.25Z"
                        data-name="sm state UY"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_TT"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_TT")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m153.47 150.24-.07.17-.1.14-.07.03-.03.14.07.21-.07.03v.24l.07.1.07.07-.07.07-.03.1v.24l-.07.03-.14.07-.17.03h-.1l-.17.03-.17-.03-.14.03-.1-.03-.17.07-.14-.07h-.21l-.1.07-.1-.03.17-.07.1-.1.14-.03.14-.1.07-.1.21.03.1-.14-.07-.28.07-.14v-.24l-.1-.14-.1-.03-.14-.03-.03-.03.14-.1.38-.03.07-.07h.38l.03-.03.42-.07h.07Zm.83-1.11-.03.17-.1.03-.14.1h-.07l-.24.14-.07-.07.1-.1.24-.17.31-.1Z"
                        data-name="sm state TT"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_TC"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_TC")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="M134.33 125.71h.24l.1.14h-.1l-.1-.03-.17.03-.03-.1.07-.03Zm-.94-.03.1.14.21-.03-.07.07h-.21l-.14-.07.1-.1Zm.76-.21v.17l-.17-.07-.03-.1.03-.03.17.03Z"
                        data-name="sm state TC"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_VE"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_VE")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m155.52 155.76-1.63 1.32-.17.8.63.83-.49.42-1.22.35v1.04l-.56.63 1.29 1.67.24.63-.73.87-2.22.83-1.42.35-.59.52-1.56-.56-1.42-.28-.38.21.87.56-.1 1.49.24 1.42 1.67.17.1.49-1.42.63-.24.94-.83.38-1.46.52-.38.69-1.53.14-1.08-1.18-.56-2.22-.52-.8-.69-.49 1.01-1.11-.07-.49-.52-.66-.38-1.49.21-1.6.45-.76.42-1.18-.69-.38-1.11.24-1.42-.1-.8.24-1.32-1.95-1.15-.28-2.54.21-.42-.76-.49-.17-.03-.49.24-.83-.1-.87-.42-.52-.21-1.01-1.01-.14.63-1.32.31-1.6.63-.83.8-.63.56-1.11 1.29-.38-.07.52-1.18.28.59 1.01-.1 1.18-.94 1.29.66 1.77.87-.14.52-1.63-.59-.76v-1.7l2.5-.9-.21-1.04.73-.73.59 1.6 1.39.03 1.18 1.22.07.76h1.74l2.12-.21 1.08.97 1.46.28 1.15-.69.03-.56 2.47-.14 2.33-.03-1.7.66.63 1.08 1.56.14 1.46 1.11.24 1.77 1.01-.03.76.52Z"
                        data-name="sm state VE"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_VI"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_VI")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m147.11 134.81.1.1-.38.07-.03-.17.24-.07.07.07Zm.24-1.32-.07.07h-.17v-.07l.1-.03.14.03Zm-.48-.07.14.1-.07.07-.1-.07h-.17l.07-.07.14-.03Z"
                        data-name="sm state VI"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_IS"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_IS")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m251.44 29.45-.49 1.25 1.53 1.32-2.12 1.49-4.55 1.35-1.35.38-1.95-.31-4.13-.63 1.67-.87-3.13-.94 2.74-.38.03-.59-3.06-.45 1.25-1.29 2.29-.28 2.08 1.32 2.43-1.04 1.77.52 2.54-1.01 2.43.14Z"
                        data-name="sm state IS"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_AR"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_AR")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m162.61 295.97-1.04-.07h-1.74l-2.08-4.72 1.08.97 1.49 1.6 2.71 1.29 2.54.52-.28 1.04-1.53.1-1.15-.73Zm-10.6-71.91 3.93 3.61 1.6.35 2.54 1.67 2.05.87.38.97-1.46 3.4 2.01.59 2.19.35 1.46-.35 1.49-1.74.1-1.95.9-.45 1.11 1.32.14 1.77-1.46 1.22-1.15.9-1.84 2.19-2.08 3.02-.17 1.81-.14 2.29.42 2.22-.31.49.14 1.42.1 1.18 2.71 1.91.07 1.53 1.35.97.1 1.08-1.15 2.85-2.43 1.22-3.54.45-2.08-.24.73 1.35.03 1.63.63 1.11-.87.8-1.77.31-1.95-.83-.52.59.87 2.19 1.39.66.8-.69.87 1.15-1.46.69-1.01 1.39.42 2.19-.03 1.18h-1.67l-1.04 1.11.03 1.67 2.26 1.6 1.81.42.07 1.98-1.6 1.22-.21 2.54-1.22.83-.31 1.01 1.46 2.26 1.6 1.22-.73-.1-1.7-.35-4.2-.28-1.22-1.25-.66-1.6-1.08.14-.9-.8-1.08-2.26.94-.97.03-1.35-.63-1.11.24-1.88-.38-2.88-.63-1.29.63-.42-.49-.83-.97-.42.28-.94-1.08-.83-1.29-2.54.59-.45-1.15-2.71-.28-2.26-.07-1.98.87-.8-1.15-2.19-.56-2.01 1.04-1.46-.49-1.88.56-2.15-.49-2.05-.56-.42-1.7-3.86.73-2.29-.59-2.15.31-2.05.9-2.08 1.15-1.39-.69-.87.28-.73-.56-3.72 1.95-1.08.42-2.33-.31-.56 1.39-2.01 2.61.56 1.29 1.6.56-1.81 2.22.1.35.49Z"
                        data-name="sm state AR"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild onMouseEnter={onHover}>
                    <path
                        id="sm_state_AW"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth={0.88}
                        className={cn(
                            "transition-colors",
                            isAvailable("sm_state_AW")
                                ? "hover:text-[#03045E] cursor-pointer"
                                : "text-gray-200 pointer-events-none"
                        )}
                        onClick={handleClick}
                        fill="currentColor"
                        d="m136.13 146.69-.17-.07-.17-.17.03-.21.07.1.14.14.1.17v.03Z"
                        data-name="sm state AW"
                    />
                </TooltipTrigger>
                <TooltipContent>{countryName}</TooltipContent>
            </Tooltip>
        </svg>
    );
};
