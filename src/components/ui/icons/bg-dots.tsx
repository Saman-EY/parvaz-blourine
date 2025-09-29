// GridDotsSVG.tsx
import React from 'react';
import {cn} from "@/lib/utils";

interface GridDotsSVGProps {
    columns: number;
    rows: number;
    className?: string;
    hidden?: boolean;
}

export const BgDots: React.FC<GridDotsSVGProps> = ({columns, rows, className, hidden = true}) => {
    const dotRadius = 3.5;
    const dotDiameter = dotRadius * 2;
    const spacingX = 15;
    const spacingY = 15;
    const svgWidth = columns * spacingX;
    const svgHeight = rows * spacingY;
    const baseClasses = "absolute -z-20 text-[#CFD8DC]";
    return (
        <svg className={cn([baseClasses, (hidden ? 'hidden lg:block' : ''), className])} width={svgWidth} height={svgHeight}
             viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                {Array.from({length: columns}).map((_, colIndex) =>
                    Array.from({length: rows}).map((_, rowIndex) => {
                        const cx = svgWidth - colIndex * spacingX - dotRadius;
                        const cy = svgHeight - rowIndex * spacingY - dotRadius;
                        return (
                            <circle
                                key={`${colIndex}-${rowIndex}`}
                                cx={cx}
                                cy={cy}
                                r={dotRadius}
                                transform={`rotate(180 ${cx} ${cy})`}
                                fill="currentColor"
                            />
                        );
                    })
                )}
            </g>
        </svg>
    );
};
