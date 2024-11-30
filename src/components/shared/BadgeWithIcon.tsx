"use client";

import { ReactNode } from "react";

type BadgeWithIconProps = {
    text: string;
    children?: ReactNode;
    [key: string]: any;
};

export const BadgeWithIcon = ({ text, children, ...props }: BadgeWithIconProps) => {
    return (
        <p
            {...props}
            className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            style={{ display: "inline-flex", gap: "4px", verticalAlign: "middle" }}
        >
            {children && <>{children}</>}
            <span>{text}</span>
        </p>
    );
};


