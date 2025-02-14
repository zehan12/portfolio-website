import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { CameraBackground } from "~/components/common/camera-background";
import { ThemeToggle } from "~/components/common/ThemeToggle";
import { ThemeProvider } from "~/contexts/theme-provider";
import CameraToggle from "~/components/common/camera-toggle";
import { ScrollArea } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";

export default function Layout() {
    const location = useLocation();
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

    return (
        <ThemeProvider>
            <ScrollArea>
                <div className={cn("bg-background h-screen w-full", location.pathname === "/" ? "overflow-hidden" : "")}>
                    {location.pathname !== "/non-layout" && (
                        <>
                            {/* <CameraBackground
                            isCameraActive={isCameraActive}
                            setIsCameraActive={setIsCameraActive}
                            isBlurred={isBlurred}
                            setIsBlurred={setIsBlurred}
                            /> */}
                            <div className="relative z-20 flex h-16 w-full items-center justify-end gap-4 lg:px-8">
                                {/* <ThemeToggle /> */}
                                {/* <CameraToggle
                                isCameraActive={isCameraActive}
                                setIsCameraActive={setIsCameraActive}
                                isBlurred={isBlurred}
                                setIsBlurred={setIsBlurred}
                                /> */}
                            </div>
                        </>)}
                    <Outlet />
                </div>
            </ScrollArea>
        </ThemeProvider>
    );
}
