import { Route } from "./+types";
import TypingEffect from "~/components/TypingEffect";
import { RoughNotation } from "react-rough-notation";
import {
  Mail,
  Twitter,
  Linkedin,
  QuoteIcon,
  Eye,
  Download,
  Skull,
  Film,
} from "lucide-react";
import {
  Gmail,
  Twitter as ColorTwitter,
  LinkedIn as ColorLinkedIn,
  Slack as ColorSlack,
  TikTok,
} from "developer-icons";

import { LinkPreview } from "~/components/ui/link-preview";
import { useTheme } from "~/contexts/theme-provider";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { SVGProps } from "react";
import { BrainRotsResume } from "~/components/BrainRotsResume";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Index() {
  const { theme } = useTheme();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center overflow-hidden mt-20 sm:mt-0 sm:mb-20">
        <div className="w-full flex flex-col items-center justify-center gap-5 ">
          <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          {theme === "light" ? (
            <h1 className="mr-24 text-5xl sm:text-6xl text-foreground/95 duration-1000 cursor-default animate-title font-display whitespace-nowrap bg-clip-text">
              Hi, I'm Zehan{" "}
              <b className=" animate-color dot">.</b>
            </h1>
          ) : (
            <h1 className="z-10 mr-24 text-5xl sm:text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
              Hi, I'm Zehan{" "}
              <b className=" animate-color dot">.</b>
            </h1>
          )}

          <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          <div className="animate-fade-in flex flex-col gap-8 sm:-mt-8 mt-0">
            <p className="font-thin text-xl text-zinc-500 ">
              @zehan12
            </p>
            <h4 className="sm:text-2xl">
              T-Shaped software engineer
            </h4>
            <div className="text-xl flex items-center -my-5">
              I&apos;m a
              <TypingEffect />
            </div>
            {/* <div className="flex flex-wrap gap-5 -mb-3">
              <BadgeV2 color="#E8D44D" name="JavaScript" />
              <BadgeV2 color="#3A8338" name="Node.js" />
              <BadgeV2 color="#2F74C0" name="TypeScript" />
              <BadgeV2 color="#F7D754" name="Python" />
              <BadgeV2 color="#00A9D2" name="Golang" />
              <BadgeV2 color="#AB1105" name="Ruby" />
              <BadgeV2 color="#B64BB6" name="Elixir" />
            </div> */}
            <div className="flex flex-wrap gap-2 -mb-3">
              <BadgeV1 color="#E8D44D" name="JavaScript" />
              <BadgeV1 color="#3A8338" name="Node.js" />
              <BadgeV1 color="#2F74C0" name="TypeScript" />
              <BadgeV1 color="#F7D754" name="Python" />
              <BadgeV1 color="#00A9D2" name="Golang" />
              <BadgeV1 color="#AB1105" name="Ruby" />
              <BadgeV1 color="#B64BB6" name="Elixir" />
            </div>
            <div className="w-[29rem]">
              <ModernSimpleQuoteVariant />
            </div>
            <div className="flex items-center justify-start gap-10">
              <div className="relative group">
                <Mail
                  size={30}
                  className="cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <Gmail
                  size={30}
                  className="absolute top-0 left-0 cursor-pointer transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="relative group">
                <Twitter
                  size={30}
                  className="cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <ColorTwitter
                  size={30}
                  className="absolute top-0 left-0 cursor-pointer transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="relative group">
                <GithubOutline
                  height={30}
                  className="cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <Github
                  height={31.6}
                  className="absolute top-0 left-0 cursor-pointer transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="relative group">
                <Linkedin
                  size={30}
                  className="cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <ColorLinkedIn
                  size={30}
                  className="absolute top-0 left-0 cursor-pointer transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>{" "}
              <div className="relative group">
                <Slack
                  height={30}
                  className="cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <ColorSlack
                  size={30}
                  className="absolute top-0 left-0 cursor-pointer transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="relative">
                <Medium
                  height={30}
                  className="cursor-pointer transition-opacity duration-300 ease-in-out hover:text-white hover:bg-gray-900 dark:hover:text-gray-900 dark:hover:bg-white"
                />
              </div>
              <div className="relative">
                <Bluesky
                  height={30}
                  className="cursor-pointer transition-opacity duration-300 ease-in-out hover:text-sky-500"
                />
              </div>
              {/* <Twitter size={30} />
            <Github size={30} />
            <Linkedin size={30} />
            <Slack height={30} />
            <Discord height={30} />
            <Twitch size={30} /> */}
            </div>

            {/* <div className="flex gap-2">
              <Button variant={"outline"}>
                <Eye /> View Resume
              </Button>
              <Button variant={"outline"}><Download /> Resume</Button>
              <BrainRotsResume />
            </div> */}

            <div className="w-[28rem] flex flex-col gap-2">
              {/* <p className="text-pretty">
                Check out my{" "}
                <RoughNotation
                  type="highlight"
                  show={true}
                  color={
                    theme === "dark" ? "yellow" : "orange"
                  }
                >
                  <b className="dark:text-black">work</b>
                </RoughNotation>{" "}
                and
                <RoughNotation
                  show
                  type="underline"
                  strokeWidth={5}
                  animationDelay={250}
                  animationDuration={2000}
                  color="yellow"
                >
                  <b> articles</b>
                </RoughNotation>
                . If you like what you see,{" "}
                <RoughNotation
                  type="underline"
                  show={true}
                  color={theme === "dark" ? "yellow" : "blue"}
                >
                  <b>get in touch</b>
                </RoughNotation>{" "}
                or learn more about me.
              </p> */}
              <p className="text-sm text-muted-foreground">
                You can view the older version of this website{" "}
                <LinkPreview
                  url="https://zehankhan.vercel.app/"
                  className="underline"
                >
                  here
                </LinkPreview>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ModernSimpleQuoteVariant() {
  return (
    <BlockQuote
      author="Thomas A. Edison"
      quote="I build modern, responsive user interfaces and develop scalable backend solutions using the latest technologies to create exceptional websites and applications."
    />
  );
}

const BlockQuote = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <blockquote className="text-xs rounded-xl border-amber-500/70 border-l-4 bg-amber-500/15 p-2 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
      <p className="inline italic">
        <QuoteIcon
          aria-hidden="true"
          className="-translate-y-1 mr-1 inline size-3 fill-amber-700 stroke-none"
        />
        {quote}
        <QuoteIcon
          aria-hidden="true"
          className="ml-1 inline size-3 translate-y-1 fill-amber-700 stroke-none"
        />
      </p>
    </blockquote>
  );
};

export function BadgeV1({ name, color }: { name: string; color: string }) {
  // Check if `color` is a hex code or a named Tailwind color
  const isHexColor = /^#([0-9A-Fa-f]{3}){1,2}$/.test(color);

  // Use dynamic inline styles for hex codes; otherwise, use Tailwind classes
  const colorStyles = isHexColor
    ? { color: color, backgroundColor: `${color}22` } // Adding transparency manually
    : `text-${color}-500 bg-${color}-500/15`;

  return (
    <div
      className={cn(
        !isHexColor && colorStyles, // Only add class names if not hex
        "inline rounded-md px-2 py-0.5 text-[0.65rem]"
      )}
      style={isHexColor ? colorStyles : undefined} // Inline styles for hex
    >
      {name}
    </div>
  );
}

export function Slack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M218 128a30 30 0 1 0-36-48V56a30 30 0 0 0-54-18a30 30 0 1 0-48 36H56a30 30 0 0 0-18 54a30 30 0 1 0 36 48v24a30 30 0 0 0 54 18a30 30 0 1 0 48-36h24a30 30 0 0 0 18-54m-18-42a18 18 0 0 1 0 36h-18v-18a18 18 0 0 1 18-18m-48-48a18 18 0 0 1 18 18v48a18 18 0 0 1-18 18h-18V56a18 18 0 0 1 18-18M86 56a18 18 0 0 1 36 0v18h-18a18 18 0 0 1-18-18m-48 48a18 18 0 0 1 18-18h48a18 18 0 0 1 18 18v18H56a18 18 0 0 1-18-18m18 66a18 18 0 0 1 0-36h18v18a18 18 0 0 1-18 18m48 48a18 18 0 0 1-18-18v-48a18 18 0 0 1 18-18h18v66a18 18 0 0 1-18 18m66-18a18 18 0 0 1-36 0v-18h18a18 18 0 0 1 18 18m30-30h-48a18 18 0 0 1-18-18v-18h66a18 18 0 0 1 0 36"
      ></path>
    </svg>
  );
}

export function Discord(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" fillOpacity="0">
        <circle cx="9" cy="12" r="1.5">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.3s"
            dur="0.15s"
            values="0;1"
          ></animate>
        </circle>
        <circle cx="15" cy="12" r="1.5">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.45s"
            dur="0.15s"
            values="0;1"
          ></animate>
        </circle>
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="32"
          strokeDashoffset="32"
          d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.7s"
            values="32;0"
          ></animate>
        </path>
        <path
          strokeDasharray="16"
          strokeDashoffset="16"
          d="M5.5 16c5 2.5 8 2.5 13 0"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.4s"
            values="16;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}

function BadgeV2({ color, name = "Beta" }: { color: string; name?: string }) {
  // Check if the provided color is a hex code
  const isHexColor = /^#([0-9A-Fa-f]{3}){1,2}$/.test(color);

  // Styles for hex colors
  const hexStyles = isHexColor
    ? {
      color: color,
      backgroundColor: `${color}22`, // Add slight transparency for background
      borderColor: `${color}55`, // Border color with transparency
    }
    : undefined;

  // Tailwind classes for named colors
  const tailwindClasses = !isHexColor
    ? `text-${color}-500 bg-${color}-500/15 dark:bg-${color}-950`
    : "";

  return (
    <span
      className={`relative px-[0.1875rem] font-medium text-[0.625rem]/[0.875rem] ${!isHexColor ? tailwindClasses : ""
        }`}
      style={isHexColor ? hexStyles : undefined}
    >
      {name}
      <span
        className="-top-px absolute inset-x-[-0.1875rem] block transform-gpu"
        style={isHexColor ? { color: `${color}80` } : undefined}
        aria-hidden="true"
      >
        <svg
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="100%"
        >
          <line x1="0" x2="100%" y1="0.5" y2="0.5" />
        </svg>
      </span>
      <span
        className="-bottom-px absolute inset-x-[-0.1875rem] block transform-gpu"
        style={isHexColor ? { color: `${color}80` } : undefined}
        aria-hidden="true"
      >
        <svg
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="100%"
        >
          <line x1="0" x2="100%" y1="0.5" y2="0.5" />
        </svg>
      </span>
      <span
        className="-left-px absolute inset-y-[-0.1875rem] block transform-gpu"
        style={isHexColor ? { color: `${color}80` } : undefined}
        aria-hidden="true"
      >
        <svg
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="1"
        >
          <line x1="0.5" x2="0.5" y1="0" y2="100%" />
        </svg>
      </span>
      <span
        className="-right-px absolute inset-y-[-0.1875rem] block transform-gpu"
        style={isHexColor ? { color: `${color}80` } : undefined}
        aria-hidden="true"
      >
        <svg
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          width="1"
        >
          <line x1="0.5" x2="0.5" y1="0" y2="100%" />
        </svg>
      </span>
    </span>
  );
}

export function Medium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M28 28v456h456V28zm378.83 108.04l-24.46 23.45a7.16 7.16 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55l60.35-150.55h84.66z"
      ></path>
    </svg>
  );
}

const ColorMedium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.height}
    height={props.width}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M24 24H0V0h24zM15.014 8.994v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234a.376.376 0 0 1-.143-.364v.002-9.07a.375.375 0 0 1 .143-.36l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924H4.019v.271l1.502 1.813a.627.627 0 0 1 .204.53v-.003 7.126a.823.823 0 0 1-.22.707l-1.69 2.054v.27h4.8v-.27l-1.691-2.054a.852.852 0 0 1-.233-.712v.004-6.16l4.215 9.195h.49z" />
  </svg>
);

export function Bluesky(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M5.892 2.93c-1.78-1.06-3.813.446-3.63 2.359l.398 4.185c.176 1.855 1.84 4.026 4.195 3.823C4.5 14 3.132 15.865 4.88 18.145c.286.373.597.745.914 1.062s.69.628 1.062.914c1.88 1.441 4.375-.65 5.055-2.69l.09-.268l.09.269c.68 2.04 3.174 4.13 5.055 2.689c.372-.286.745-.597 1.062-.914s.628-.69.914-1.062c1.747-2.28.379-4.145-1.976-4.848c2.355.203 4.018-1.968 4.195-3.823l.399-4.185c.182-1.913-1.852-3.418-3.631-2.36C15.2 4.66 13.485 7.393 12 9.902C10.515 7.392 8.8 4.66 5.892 2.93"
        ></path>
      </g>
    </svg>
  );
}

export function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
        ></path>
      </g>
    </svg>
  );
}

export function GithubOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path>
        <path d="M9 20.027c-3 .973-5.5 0-7-3"></path>
      </g>
    </svg>
  );
}
