"use client";
import { CloudDownload } from "lucide-react";
import Image from "next/legacy/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BadgeWithIcon } from "@/components/shared/BadgeWithIcon";
import { Icons } from "@/components/icons";
import { LinkPreview } from "@/components/aceternity-ui/link-preview";
import { useRouter } from "next/navigation";
import AnimatedGreeting from "@/components/HeroSection/AnimateGreeting";
import TypingEffect from "@/components/HeroSection/TypingEffect";
import { WatchResume } from "@/components/WatchResume";

export const HeroSection = () => {
    const router = useRouter();

    return (
        <section className="lg:flex flex-col justify-between items-center gap-10 py-2 lg:py-0 main-container w-full">
            <div className="max-lg:mb-2 max-sm:mb-6 md:h-60 md:w-60 h-full w-full flex">
                <Image
                    src="/me2.png"
                    className="md:rounded-full rounded-xl lg:-rotate-6 lg:hover:rotate-0 transition-transform ease-in max-lg:size-full  [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border"
                    alt="my avatar"
                    width={1200}
                    height={1200}
                    priority
                />
            </div>
            <div className="grid gap-6">
                <AnimatedGreeting />
                <div>
                    <div className="">
                        <div className="text-4xl mx-auto font-normal text-neutral-900 dark:text-neutral-100 flex items-center mb-3">
                            I&apos;m a
                            <TypingEffect />
                            from India 🇮🇳
                        </div>
                        <p className="text-sm sm:text-base tracking-wide leading-6 sm:leading-8 mb-1">
                            I am a full-stack software engineer with 3 years of
                            professional experience and 4 years of freelancing
                            in software development.
                        </p>
                        <div className="text-sm sm:text-base tracking-wide leading-6 sm:leading-8 mb-1">
                            Proficient in building modern web applications using
                            the{" "}
                            <BadgeWithIcon text="">
                                <Icons.MongoDB className="w-4 h-4" />
                                <Icons.Express className="w-4 h-4 dark:fill-white" />
                                MERN stack
                                <Icons.React className="w-4 h-4" />
                                <Icons.NodeJs className="w-4 h-4" />
                            </BadgeWithIcon>
                            , I also have expertise in backend development with{" "}
                            <LinkPreview
                                url="https://expressjs.com"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text={"Express"}>
                                    <Icons.Express className="w-4 h-4 dark:fill-white" />
                                </BadgeWithIcon>
                            </LinkPreview>{" "}
                            and{" "}
                            <LinkPreview
                                url="https://hono.dev/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text={"Hono.js"}>
                                    <Icons.Hono className="w-4 h-4" />
                                </BadgeWithIcon>
                            </LinkPreview>
                            , along with experience in{" "}
                            <LinkPreview
                                url="https://nextjs.org/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                {" "}
                                <BadgeWithIcon text="Next.js">
                                    <Icons.Next className="w-4 h-4 dark:fill-white" />
                                </BadgeWithIcon>{" "}
                            </LinkPreview>
                            ,
                            <LinkPreview
                                url="https://remix.run/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text="Remix">
                                    <Icons.Remix className="w-4 h-4" />
                                </BadgeWithIcon>{" "}
                            </LinkPreview>
                            ,{" "}
                            <LinkPreview
                                url="https://www.solidjs.com/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text="Solid.js">
                                    <Icons.Solid className="w-4 h-4" />
                                </BadgeWithIcon>{" "}
                            </LinkPreview>
                            {" "},
                            <LinkPreview
                                url="https://www.postgresql.org/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text="PostgreSQL">
                                    <Icons.Postgres className="w-4 h-4" />
                                </BadgeWithIcon>
                            </LinkPreview>{" "}
                            , and AI solutions. I&apos;m currently exploring backend
                            development with
                            <LinkPreview
                                url="https://rubyonrails.org"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon
                                    text="Ruby on Rails"
                                    href="https://rubyonrails.org"
                                >
                                    <Icons.RubyOnRails className="w-4 h-4" />
                                </BadgeWithIcon>
                            </LinkPreview>
                            , alongside my strong command of{" "}
                            <LinkPreview
                                url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text="JavaScript">
                                    <Icons.JavaScript className="w-4 h-4" />{" "}
                                </BadgeWithIcon>
                            </LinkPreview>
                            and{" "}
                            <LinkPreview
                                url="https://www.typescriptlang.org/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text="TypeScript">
                                    <Icons.TypeScript className="w-4 h-4" />
                                </BadgeWithIcon>
                            </LinkPreview>
                            .
                        </div>
                        <div className="text-sm sm:text-base tracking-wide leading-6 sm:leading-8 mb-1">
                            I enjoy mastering new technologies, including{" "}
                            <LinkPreview
                                url="https://vuejs.org/"
                                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                            >
                                <BadgeWithIcon text="Vue 3">
                                    <Icons.Vue className="w-4 h-4" />
                                </BadgeWithIcon>
                            </LinkPreview>{" "}
                            and frontend architecture, while contributing to
                            scalable, efficient solutions as both an individual
                            and team player.
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="flex gap-4 justify-start items-center w-full">
                    <Link href={"/resume/resume.pdf"} download="zehan-resume" target="_blank">
                        <Button variant={"outline"} className="flex gap-2">
                            <CloudDownload className="size-4" />
                            Resume
                        </Button>
                    </Link>
                    <WatchResume />
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-6">
                <p className="text-sm sm:text-base tracking-wide leading-6 sm:leading-8 mb-4">
                    Check out my{" "}
                    <Link
                        href="#work"
                        className="text-amber-400 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-amber-400 font-extrabold text-xl"
                    >
                        work
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="#articles"
                        className="text-lime-400 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-lime-400 font-extrabold text-xl"
                    >
                        articles
                    </Link>
                    . If you like what you see,{" "}
                    <Link
                        href="#contact"
                        className="text-red-500 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-red-500 font-extrabold text-xl"
                    >
                        get in touch
                    </Link>{" "}
                    or learn more{" "}
                    <Link
                        href="#about"
                        className="text-pink-600 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-pink-600 font-extrabold text-xl"
                    >
                        about me
                    </Link>
                    .
                </p>
                <p className="text-sm sm:text-base tracking-wide leading-6 sm:leading-8 mb-4">
                    Thanks for visiting my digital garden! 🌱
                </p>
                <p>You can view the older version of this website <Link href={""} className="text-indigo-500 hover:border-none hover:text-orange-500 cursor-pointer pb-1 border-b-[2px] border-indigo-500 font-extrabold text-xl"
                >here</Link>.

                </p>
            </div>
        </section>
    );
};
