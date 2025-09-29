'use client';
import React, {useEffect, useRef, useState} from 'react';

interface TextBoxProps {
    text: string;
    x: number;
    y: number;
    paddingX?: number;
    paddingY?: number;
    fontSize?: number;
    fillColor?: string;
    id: string;
}

export const TextBox: React.FC<TextBoxProps> = ({
                                                    id,
                                                    text,
                                                    x,
                                                    y,
                                                    paddingX = 10,
                                                    paddingY = 6,
                                                    fontSize = 20,
                                                    fillColor = '#0892DC',
                                                }) => {
    const textRef = useRef<SVGTextElement>(null);
    const [bbox, setBbox] = useState<{ width: number; height: number }>({width: 0, height: 0});

    useEffect(() => {
        if (textRef.current) {
            const {width, height} = textRef.current.getBBox();
            setBbox({width, height});
        }
    }, [text]);

    return (
        <g id={id}>
            <rect
                x={x - bbox.width / 2 - paddingX}
                y={y - bbox.height / 2 - paddingY}
                width={bbox.width + 2 * paddingX}
                height={bbox.height + 2 * paddingY}
                rx={8}
                ry={8}
                fill={fillColor}
            />
            <text
                ref={textRef}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fontSize}
                fill="#fff"
            >
                {text}
            </text>
        </g>
    );
};
