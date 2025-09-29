import React from 'react';

export const BgTicket = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width="780"
        height="200"
        viewBox="0 0 780 200"
        fill="none"
        className="inline-block"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
    >
        <mask id="clip-border" fill="white">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 0C6.71573 0 0 6.71573 0 15V60C22.0914 60 40 77.9086 40 100C40 122.091 22.0914 140 0 140V185C0 193.284 6.71574 200 15 200H765C773.284 200 780 193.284 780 185V15C780 6.71573 773.284 0 765 0H15Z"
            />
        </mask>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 0C6.71573 0 0 6.71573 0 15V60C22.0914 60 40 77.9086 40 100C40 122.091 22.0914 140 0 140V185C0 193.284 6.71574 200 15 200H765C773.284 200 780 193.284 780 185V15C780 6.71573 773.284 0 765 0H15Z"
            fill="#F5F5F5"
        />
        <path
            d="M0 60H-3V63H0V60ZM0 140V137H-3V140H0ZM3 15C3 8.37258 8.37258 3 15 3V-3C5.05888 -3 -3 5.05887 -3 15H3ZM3 60V15H-3V60H3ZM0 63C20.4345 63 37 79.5655 37 100H43C43 76.2518 23.7482 57 0 57V63ZM37 100C37 120.435 20.4345 137 0 137V143C23.7482 143 43 123.748 43 100H37ZM3 185V140H-3V185H3ZM15 197C8.37259 197 3 191.627 3 185H-3C-3 194.941 5.05889 203 15 203V197ZM765 197H15V203H765V197ZM777 185C777 191.627 771.627 197 765 197V203C774.941 203 783 194.941 783 185H777ZM777 15V185H783V15H777ZM765 3C771.627 3 777 8.37259 777 15H783C783 5.05887 774.941 -3 765 -3V3ZM15 3H765V-3H15V3Z"
            fill="#CFD8DC"
            mask="url(#clip-border)"
        />
    </svg>
);
