import React, { useState, useEffect } from 'react'
import "./style.css";

const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
]

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const uniqueRand = (min: number, max: number, prev: number) => {
    let next = prev
    while (prev === next) next = rand(min, max)
    return next
}

export const ShapeChanger: React.FC = () => {
    const [config, setConfig] = useState(combinations[0])

    useEffect(() => {
        let prev = 0
        const interval = setInterval(() => {
            const index = uniqueRand(0, combinations.length - 1, prev)
            setConfig(combinations[index])
            prev = index
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="wrapper" data-configuration={config.configuration} data-roundness={config.roundness}>
            {[...Array(7)].map((_, i) => (
                <div key={i} className="shape"></div>
            ))}
        </div>
    )
}

