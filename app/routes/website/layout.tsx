import { Outlet, useLocation } from "react-router";
import { cn } from "~/lib/utils";

export default function Layout() {
    const { pathname } = useLocation();
    return (<>
        <div className="flex h-full">
            <aside className="w-[100px] h-[calc(100vh-4rem)] hidden sm:flex flex-col items-end justify-start pt-20 gap-9">
                {NAV_ITEMS.map((item: NavItemTypes) => {
                    return (
                        <li key={item.label} className="relative flex">
                            <a
                                className="relative text-left z-10 font-bold"
                                href={item.path}
                            >
                                {/* {item.label}
                                <div className="absolute top-1 h-4 w-full flex items-end justify-end mt-2 -z-10">
                                    <div className={cn(pathname.endsWith(item.path) ? "h-full" : "h-2", "w-full px-7", item.className)}></div>
                                </div> */}
                            </a>
                        </li>
                    );
                })}
            </aside>
            <Outlet />
        </div>
    </>)
}


export interface NavItemTypes {
    label: string;
    path: string;
    className: string;
}

export const NAV_ITEMS: NavItemTypes[] = [
    { label: "Home", path: "/", className: "bg-yellow-400 dark:bg-purple-600" },
    { label: "Me", path: "/me", className: "bg-yellow-500 dark:bg-[#49B3EC]" },
    {
        label: "Work",
        path: "/experience",
        className: "bg-yellow-600 dark:bg-purple-600",
    },
    {
        label: "Projects",
        path: "/projects",
        className: "bg-red-600 dark:bg-purple-600",
    },
    {
        label: "Skills",
        path: "/skills",
        className: "bg-red-600 dark:bg-purple-600",
    },
    {
        label: "Features",
        path: "/features",
        className: "bg-red-600 dark:bg-purple-600",
    },
    {
        label: "Arts",
        path: "/arts",
        className: "bg-red-600 dark:bg-purple-600",
    },
    {
        label: "Code",
        path: "/playground",
        className: "bg-red-600 dark:bg-purple-600",
    },
];
