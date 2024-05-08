'use client'
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import { useStopwatch } from "@/hooks/use-stopwatch";
import { formatTime } from "@/lib/utils";
import { TimerActions } from "./timer-actions";

export const TimerClock = () => {

    const {
        isRunning,
        stopStopwatch,
        startStopwatch,
        elapsedTime,
    } = useStopwatch();

    useKeyboardShortcut('Space', () => {
        if (isRunning) return stopStopwatch();
        startStopwatch();
    })


    return (
        <div className="w-full flex flex-col items-center gap-1 md:flex-row md:items-end md:justify-center">
            <span className="text-7xl md:text-9xl lg:text-[200px] drop-shadow-text tabular-nums">{formatTime(elapsedTime)}</span>
            <TimerActions />
        </div>
    )

}
