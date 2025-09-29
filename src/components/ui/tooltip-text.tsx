'use client';
import { useRef, useState, useEffect } from 'react';

type OverflowTooltipProps = {
    text: string;
    maxWidth?: string;
};

export function OverflowTooltip({ text, maxWidth = '150px' }: OverflowTooltipProps) {
    const textRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            setIsOverflowing(textRef.current.scrollWidth > textRef.current.clientWidth);
        }
    }, [text]);

    return (
        <div className="relative inline-block" style={{ maxWidth }}>
            {/* متن */}
            <div
                ref={textRef}
                className="truncate cursor-default"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ maxWidth }}
            >
                {text}
            </div>

            {/* Tooltip */}
            {isOverflowing && isHovered && (
                <div className="absolute left-0 top-full mt-1 bg-gray-800 text-white text-sm rounded px-2 py-1 z-50 whitespace-normal shadow-lg">
                    {text}
                </div>
            )}
        </div>
    );
}
