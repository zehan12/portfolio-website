import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words: string[] = [
    // "Full-Stack Developer",
    // "React Architect",
    // "Lead Frontend Engineer",
    "Ruby on Rails Developer",
    "AI Engineer",
    "JAM STACK Developer",
    "Web Developer",
    "MERN Stack Developer",
    "Open Sourcerer",
    "Freelancer"
];

const wordColors: Record<string, string> = {
    "Full-Stack Developer": "text-[#CB9DF0]",
    "React Architect": "text-[#BFECFF]",
    "Lead Frontend Engineer": "text-[#CDC1FF]",
    "Ruby on Rails Developer": "text-[#AE001A] dark:text-[#FF6868]",
    "JAM Stack ":"",
    "AI Engineer": "text-[#F6F7C4]",
    "Web Developer": "text-[#9DF1DF]",
    "MERN Stack Developer": "text-[#96CEB4]",
    "Open Sourcerer": "text-[#FFCFEF]",
    "Freelancer": "text-[#FFEEAD]"
};

const TypingEffect: React.FC = () => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const word = words[wordIndex];
        const timeout = setTimeout(() => {
            setDisplayedText((prev) =>
                isDeleting
                    ? word.substring(0, prev.length - 1)
                    : word.substring(0, prev.length + 1)
            );

            // Handle word completion
            if (!isDeleting && displayedText === word) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, wordIndex]);

    const colorClass: string = wordColors[words[wordIndex]] || "text-black";

    return (
        <div className="flex flex-col items-center justify-center h-full p-2">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-3xl sm:text-2xl lg:text-xl text-center flex items-center gap-2 ${colorClass}`}
            >
                {displayedText}
                {wordIndex === 1 ?
                    <></>
                    : ""}
                <motion.span
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={`text-neutral-800 dark:text-white -ml-1.5`}>|</motion.span>
            </motion.div>
        </div>
    );
};

export default TypingEffect;
