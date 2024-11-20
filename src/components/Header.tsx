"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./shared/theme-toggle";

export const Header = () => {
    const pathName = usePathname();

    return (
        <header className="w-full h-10 flex items-center">
            <nav className="w-8/12 mx-auto flex justify-between">
                <div className="text-lg md:text-2xl font-mono text-orange-700">
                    zehan khan

                    <ThemeToggle />

                </div>
                <ul className="flex gap-5 text-lg md:text-2xl font-mono text-purple-500">
                    <li>
                        <Link
                            className={cn(
                                pathName === "/" ? "text-green-500" : ""
                            )}
                            href={"/"}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={cn(
                                pathName === "/experience" ? "text-green-500" : ""
                            )}
                            href={"/experience"}
                        >
                            Experience
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
