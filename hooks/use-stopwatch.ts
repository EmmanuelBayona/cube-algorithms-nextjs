import { useTimerContext } from "@/context/timer-context";
import { useCallback, useEffect, useState } from "react";

export const useStopwatch = () => {

    const { setTimes } = useTimerContext()

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
        // generate a new time object to add to the context, with a unique id and the formatted time
        // the id is generated because we need to perform updates like deleting a time, and we need a unique identifier for each time
        const newTime = { id: crypto.randomUUID(), time: formatTime(elapsedTime) }
        setTimes(prev => [...prev, newTime]);
    }

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = (milliseconds: number) => {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const centiseconds = Math.floor((milliseconds % 1000) / 10);

        const formattedHours = hours > 0 ? padZero(hours) + ':' : '';
        const formattedMinutes = minutes > 0 || hours > 0 ? padZero(minutes) + ':' : '';

        return `${formattedHours}${formattedMinutes}${padZero(seconds)}.${padZero(centiseconds)}`;
    };

    const padZero = (value: number) => {
        return value < 10 ? `0${value}` : value.toString();
    };


    return {
        startTime,
        elapsedTime,
        isRunning,
        startStopwatch,
        stopStopwatch,
        resetStopwatch,
        formatTime,
    }

};
