import { useTimerContext } from "@/context/timer-context";
import { generateScramble } from "@/helpers/scramble";
import { formatTime } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

export const useStopwatch = () => {

    const { setTimes, setFormattedTimes, setScramble } = useTimerContext()

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
        // generate a new time object to add to the context, with a unique id and the time
        // the id is generated because we need to perform operations like deleting a time, and we need a unique identifier for each time
        const newTimeId = crypto.randomUUID();
        setFormattedTimes(prev => [...prev, { id: newTimeId, time: formatTime(elapsedTime) }]);
        setTimes(prev => [...prev, { id: newTimeId, time: elapsedTime }]);
        setScramble(generateScramble().join(" "));
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
