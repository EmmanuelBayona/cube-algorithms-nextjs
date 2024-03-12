'use client'
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import { useStopwatch } from "@/hooks/use-stopwatch";

export const TimerClock = () => {

    const {
        isRunning,
        stopStopwatch,
        startStopwatch,
        elapsedTime,
        formatTime,
    } = useStopwatch();

    useKeyboardShortcut('Space', () => {
        if (isRunning) return stopStopwatch();
        startStopwatch();
    })


    return (
        <div className="w-full flex justify-center">
            <span className="text-7xl md:text-9xl lg:text-[200px] drop-shadow-text tabular-nums">{formatTime(elapsedTime)}</span>
        </div>
    )

}