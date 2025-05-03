"use client"

import { useState } from "react"

interface CounterButtonProps {
    initialValue?: number
    min?: number
    max?: number
    step?: number
    onChange?: (value: number) => void
    className?: string
}

export function CounterButton({
    initialValue = 0,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    className = "",
}: CounterButtonProps) {
    const [value, setValue] = useState(initialValue)

    const increment = () => {
        if (value < max) {
            const newValue = value + step
            setValue(newValue)
            onChange?.(newValue)
        }
    }

    const decrement = () => {
        if (value > min) {
            const newValue = value - step
            setValue(newValue)
            onChange?.(newValue)
        }
    }

    return (
        <div className={`flex h-10 max-w-[140px] overflow-hidden rounded-md bg-[var(--primary)]/95 text-white font-medium ${className}`}>
            <div className="flex items-center justify-center px-4 min-w-[60px] border-r bg-[var(--primary)]">{value}</div>
            <div className="flex">
                <button
                    onClick={decrement}
                    className="flex items-center justify-center w-10 border-r bg-[var(--primary)] hover:bg-[var(--primary)]/60 cursor-pointer transition-colors"
                    aria-label="Decrease value"
                >
                    -
                </button>
                <button
                    onClick={increment}
                    className="flex items-center justify-center w-10 bg-[var(--primary)] hover:bg-[var(--primary)]/60 cursor-pointer transition-colors"
                    aria-label="Increase value"
                >
                    +
                </button>
            </div>
        </div>
    )
}
