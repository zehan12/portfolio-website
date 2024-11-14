import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icons } from "../icons";

const words = [
  "Full-Stack Developer",
  "React Architect",
  "Lead Frontend Engr..",
  "AI Engineer",
  "Web Developer",
  "MERN Stack Dev.",
  "Open Sourcerer",
  "Freelancer"
];

export default function TypingEffect() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <div className="flex flex-col items-center justify-center h-full p-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-3xl sm:text-2xl lg:text-4xl text-center flex items-center gap-2"
      >
        {wordIndex === 1 ?
          <Icons.React className={"w-10 h-10"} />
          : ""}
        {displayedText}
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
          className="text-blue-500">|</motion.span>
      </motion.div>
    </div >
  );
}
