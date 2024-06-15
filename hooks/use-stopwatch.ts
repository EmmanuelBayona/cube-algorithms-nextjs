import { useTimerContext } from "@/context/timer-context";
import { useCallback, useEffect, useState } from "react";

export const useStopwatch = () => {

    const { saveNewTime } = useTimerContext()

    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const startStopwatch = useCallback(() => {
        setStartTime(Date.now());
        setIsRunning(true);
    }, []);


    useEffect(() => {
        if (!isRunning) return;

        const intervalId = setInterval(() => {
            setElapsedTime(Date.now() - startTime);
        }, 10);

        return () => clearInterval(intervalId);
    }, [isRunning, startTime])

    const stopStopwatch = () => {
        setIsRunning(false);
        saveNewTime(elapsedTime, new Date());
    }

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }


    return {
        startTime,
        elapsedTime,
        isRunning,
        startStopwatch,
        stopStopwatch,
        resetStopwatch,
    }

};
