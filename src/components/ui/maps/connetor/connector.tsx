'use client';
import React, {useLayoutEffect, useState} from 'react';

interface ConnectorProps {
    startId: string;
    endId: string;
    strokeColor?: string;
    strokeWidth?: number;
    dashArray?: string;
    startLine?: boolean;
}

export const Connector: React.FC<ConnectorProps> = ({
                                                        startLine = false,
                                                        startId,
                                                        endId,
                                                        strokeColor = '#03045E',
                                                        strokeWidth = 6,
                                                        dashArray = '6 6',
                                                    }) => {
    const [pathInfo, setPathInfo] = useState<{
        svgPath: string;
        midX: number;
        midY: number;
        angleDeg: number;
    } | null>(null);

    useLayoutEffect(() => {
        const startEl = document.getElementById(startId) as SVGGraphicsElement | null;
        const endEl = document.getElementById(endId) as SVGGraphicsElement | null;
        if (!startEl || !endEl) return;

        const startBox = startEl.getBBox();
        const endBox = endEl.getBBox();

        const x1 = startBox.x + startBox.width / 2;
        const y1 = startBox.y + startBox.height / 2;
        const x2 = endBox.x + endBox.width / 2;
        const y2 = endBox.y + endBox.height / 2;

        // Calculate horizontal & vertical distance
        const dx = x2 - x1;
        const dy = y2 - y1;

        // Control point based on midpoint but shifted upward for curve effect
        const cx = (x1 + x2) / 2;

        // Curve height proportional to distance
        const curveHeight = Math.min(150, Math.sqrt(dx * dx + dy * dy) * 0.8); // control max height
        const cy = ((y1 + y2) / 2) - curveHeight;

        const svgPath = `M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`;

        // Midpoint at t = 0.5 (quadratic Bezier)
        const t = 0.5;
        const midX = (1 - t) ** 2 * x1 + 2 * (1 - t) * t * cx + t ** 2 * x2;
        const midY = (1 - t) ** 2 * y1 + 2 * (1 - t) * t * cy + t ** 2 * y2;

        // Tangent vector at midpoint
        const tangentX = 2 * (1 - t) * (cx - x1) + 2 * t * (x2 - cx);
        const tangentY = 2 * (1 - t) * (cy - y1) + 2 * t * (y2 - cy);
        const angleRad = Math.atan2(tangentY, tangentX);
        const angleDeg = (angleRad * 180) / Math.PI;

        setPathInfo({svgPath, midX, midY, angleDeg});
    }, [startId, endId]);

    if (!pathInfo) return null;

    const {svgPath, midX, midY, angleDeg} = pathInfo;

    return (
        <>
            {/* Curved path */}
            <path
                d={svgPath}
                fill="none"
                id={'connector'}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
            />

            {/* Rotated plane at midpoint */}
            <g transform={`rotate(${angleDeg}, ${midX}, ${midY})`}>
                <text
                    x={midX}
                    y={midY + 10}
                    fill={startLine ? '#0892DC' : '#03045E'}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={70}
                >
                    ✈
                </text>
            </g>
        </>
    );
};
