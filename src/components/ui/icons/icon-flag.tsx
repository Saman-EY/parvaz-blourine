import { SVGProps } from "react";

export const IconFlag = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="1em"
        height="1em"
        fill="currentColor"
        stroke="currentColor"
        className="inline-block align-middle"
        {...props}
    >
        <path
            strokeLinecap="round"
            d="M1 11.642V1.5c0-.236 0-.354.073-.427C1.146 1 1.264 1 1.5 1h5.983c.292 0 .439 0 .558.071.118.072.187.2.325.459l.852 1.6c.137.259.206.388.325.46.119.07.265.07.557.07h7.4c.236 0 .354 0 .427.074.073.073.073.19.073.426v9.642c0 .236 0 .354-.073.427-.073.073-.191.073-.427.073h-7.4c-.292 0-.438 0-.557-.071-.119-.071-.188-.2-.325-.459l-.852-1.6c-.138-.258-.207-.388-.325-.459-.12-.071-.266-.071-.558-.071H1Zm0 0v7.981"
        />
    </svg>
);
