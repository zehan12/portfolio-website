import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkPreview } from "./aceternity-ui/link-preview";

export const Footer = () => {

    return (
        <footer className="border" >
            <div className="mx-auto main-container w-full flex justify-between items-center p-4">
                <LinkPreview url="https://github.com/zehan12" className="flex justify-center items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/73664886?v=4" />
                        <AvatarFallback>ZK</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                        <p>Zehan Khan</p>
                        <p>@zehan12</p>
                    </div>
                </LinkPreview>
                <p>links</p>
            </div>
        </footer>
    );
};