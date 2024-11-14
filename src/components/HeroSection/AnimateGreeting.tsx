import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SparklesText from '../magic-ui/sparkles-text'
import { cn } from '@/lib/utils'

const greetings = [
    { text: "Hey!", lang: "English", colors: ['text-red-600', 'text-white', 'text-blue-600'] },
    { text: "¡Hola!", lang: "Spanish", colors: ['text-red-600', 'text-yellow-400', 'text-red-600'] },
    { text: "Bonjour !", lang: "French", colors: ['text-blue-600', 'text-white', 'text-red-600'] },
    { text: "Hallo!", lang: "German", colors: ['text-black', 'text-red-600', 'text-yellow-400'] },
    { text: "नमस्ते!", lang: "Hindi", colors: ['text-orange-600', 'text-white', 'text-green-600'] },
    { text: "你好！", lang: "Chinese", colors: ['text-red-600', 'text-yellow-400', 'text-red-600'] },
    { text: "こんにちは！", lang: "Japanese", colors: ['text-red-600', 'text-white', 'text-red-600'] },
    { text: "مرحبًا!", lang: "Arabic", colors: ['text-red-600', 'text-white', 'text-black'] },
    { text: "Привет!", lang: "Russian", colors: ['text-white', 'text-blue-600', 'text-red-600'] },
    { text: "Olá!", lang: "Portuguese", colors: ['text-green-600', 'text-yellow-400', 'text-red-600'] },
    { text: "안녕하세요!", lang: "Korean", colors: ['text-red-600', 'text-blue-600', 'text-black'] },
]

export default function AnimatedGreeting() {
    const [index, setIndex] = useState(0);
    const [textColor, setTextColor] = useState('text-violet-500');
    const [backgroundColor, setBackgroundColor] = useState('bg-violet-500');

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % greetings.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    const splitText = (text: string) => {
        const length = text.length
        const part1 = text.slice(0, Math.floor(length / 3))
        const part2 = text.slice(Math.floor(length / 3), Math.floor(2 * length / 3))
        const part3 = text.slice(Math.floor(2 * length / 3))
        return [part1, part2, part3]
    }

    return (
        <div className='main-container'>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="hover:text-orange-400 w-80 text-center text-8xl font-bold my-10"
                >
                    {splitText(greetings[index].text).map((part, i) => (
                        <span
                            key={i}
                            className={`${greetings[index].colors[i]} ${greetings[index].colors[i] === 'text-white' ? 'text-outline text-zinc-200' : ''}`}
                        >
                            {part}
                        </span>
                    ))}
                </motion.span>
            </AnimatePresence>
            <SparklesText className="h-2 w-full text-transparent select-text" text="F*ck, it's F*ckingF*cked" />{" "}
            <h1 className="font-bold text-4xl sm:text-7xl whitespace-nowrap max-sm:-mb-4 flex gap-4 items-center justify-center">
                <b className={cn("z-10 outline font-sans", textColor)}>Zehan</b>{" "}
                <b className={cn("z-10 text-background rotate-6", backgroundColor)}>Khan</b>{" "}
                <span>here</span>{" "}
                <span className="z-10 animate-waving-hand" aria-hidden="true">👋🏻</span>
            </h1>
            <div className="flex gap-1 p-2 bg-neutral-800 w-28 mx-auto my-1 rounded-md">
                <div
                    onClick={() => { setTextColor('text-[#FF385D]'); setBackgroundColor('bg-[#FF385D]') }}
                    className="w-6 h-6 rounded-sm bg-[#FF385D] cursor-pointer"
                    title="Change text color to red"
                ></div>
                <div
                    onClick={() => { setTextColor('text-[#008669]'); setBackgroundColor('bg-[#008669]') }}
                    className="w-6 h-6 rounded-sm bg-[#008669] cursor-pointer"
                    title="Change text color to lime"
                ></div>
                <div
                    onClick={() => { setTextColor('text-amber-500'); setBackgroundColor('bg-amber-500') }}
                    className="w-6 h-6 rounded-sm bg-amber-500 cursor-pointer"
                    title="Change text color to amber"
                ></div>
                <div
                    onClick={() => { setTextColor('text-violet-500'); setBackgroundColor('bg-violet-500') }}
                    className="w-6 h-6 rounded-sm bg-violet-500 cursor-pointer"
                    title="Change text color to indigo"
                ></div>
            </div>
        </div>
    )
}