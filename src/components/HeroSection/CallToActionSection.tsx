import { useToast } from "@/hooks"
import { FileWarning } from "lucide-react";
import Link from "next/link";

export const CallToActionSection = () => {
    const { toast } = useToast()

    return (<>
        <div className="mt-6" id="#cta">
            <p className="text-sm sm:text-base tracking-wide leading-6 sm:leading-8 mb-4 h-20">
                Check out my{" "}
                <button
                    onClick={() => {
                        toast({
                            className: "text-amber-500 bg-yellow-900/10 border-amber-500",
                            description: "⚠️ Oops! The page you're trying to access is currently under development. Stay tuned for updates!.",
                        })
                    }}
                    className="text-amber-400 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-amber-400 font-extrabold text-xl"
                >
                    work
                </button>{" "}
                and{" "}
                <button
                    onClick={() => {
                        toast({
                            className: "text-amber-500 bg-yellow-900/10 border-amber-500",
                            description: "⚠️ Oops! The page you're trying to access is currently under development. Stay tuned for updates!.",
                        })
                    }}
                    className="text-lime-400 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-lime-400 font-extrabold text-xl"
                >
                    articles
                </button>
                . If you like what you see,{" "}
                <button
                    onClick={() => {
                        toast({
                            className: "text-amber-500 bg-yellow-900/10 border-amber-500",
                            description: "⚠️ Oops! The page you're trying to access is currently under development. Stay tuned for updates!.",
                        })
                    }}
                    className="text-red-500 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-red-500 font-extrabold text-xl"
                >
                    get in touch
                </button>{" "}
                or learn more{" "}
                <button
                    onClick={() => {
                        toast({
                            className: "text-amber-500 bg-yellow-900/10 border-amber-500",
                            description: "⚠️ Oops! The page you're trying to access is currently under development. Stay tuned for updates!.",
                        })
                    }}
                    className="text-pink-600 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-pink-600 font-extrabold text-xl"
                >
                    about me
                </button>
                .
            </p>
            <p className="text-sm sm:text-base tracking-wide leading-6 sm:leading-8 mb-4">
                Thanks for visiting my digital garden! 🌱
            </p>
            <p>You can view the older version of this website <Link href="https://zehankhan.vercel.app/" target="_blank" className="text-indigo-500 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-indigo-500 font-extrabold text-xl"
            >here</Link>.

            </p>
        </div>

    </>)
}