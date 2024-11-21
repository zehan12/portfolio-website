"use client";

import React from "react";
import Link from "next/link";
import { NAV_ITEMS, NavItemTypes } from "@/data/navItems";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./shared/theme-toggle";

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="fixed left-0 right-0 top-0 z-10 h-20 flex justify-center items-center backdrop-blur bg-background/60">
            <nav className="flex justify-between items-center main-container w-full">
                <ul className="flex justify-between items-center gap-4 sm:gap-8">
                    {NAV_ITEMS.map((nav: NavItemTypes) => {
                        return (
                            <li key={nav.label}>
                                <Link
                                    className={cn(
                                        pathname.endsWith(nav.path)
                                            ? "text-primary font-medium"
                                            : "text-primary/60",
                                        "max-sm:text-sm"
                                    )}
                                    href={nav.path}
                                >
                                    {nav.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <ThemeToggle />
            </nav>
        </header>
    );
};