"use client"
import { useEffect, useState } from "react"
import { generateScramble } from "@/helpers/scramble"
import { Button } from "../ui/button"
import { LoopIcon } from "@radix-ui/react-icons"

export const Scramble = () => {

    const [scramble, setScramble] = useState("")

    useEffect(() => {
        const newScramble = generateScramble().join(" ")
        setScramble(newScramble)
    }, [])

    const newScramble = () => {
        const newScramble = generateScramble().join(" ")
        setScramble(newScramble)
    }

    return (
        <div className="w-full flex flex-col items-center justify-center gap-2">
            <p className="text-1xl lg:text-4xl tracking-widest">
                {scramble}
            </p>
            <Button
                variant="default"
                size="icon"
                onClick={newScramble}
            >
                <LoopIcon />
            </Button>
        </div>
    )

}
