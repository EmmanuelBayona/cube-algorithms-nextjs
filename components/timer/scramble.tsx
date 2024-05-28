"use client"
import { useTimerContext } from "@/context/timer-context"

export const Scramble = () => {

    const { scramble } = useTimerContext();

    return (
        <p className="text-center text-pretty text-1xl lg:text-4xl tracking-widest">
            {scramble}
        </p>
    )

}
