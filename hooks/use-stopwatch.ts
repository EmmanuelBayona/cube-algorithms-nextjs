import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useStopwatch = () => {

    const router = useRouter(); // for saving times in the url
    const searchParams = useSearchParams(); // for getting times from the url

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
        saveCurrentTime();
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

    const saveCurrentTime = () => {
        const prevTimes = searchParams.getAll('times');
        const newTimes = [...prevTimes, formatTime(elapsedTime)];
        const newParams = new URLSearchParams(
            newTimes.map((time) => ['times', time])
        );
        router.push(`?${newParams}`);
    }

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
