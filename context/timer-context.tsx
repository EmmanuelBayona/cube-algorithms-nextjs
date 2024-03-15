"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from "react";

type Time = { id: string, time: string };

interface TimerContextType {
    times: Time[];
    setTimes: Dispatch<SetStateAction<Time[]>>;
    onlyTimes: string[];
    bestTime: number;
    averageTime: number;
    reversedTimes: Time[];
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {

    const [times, setTimes] = useState<Time[]>([])

    const onlyTimes = useMemo(() => times.map(time => time.time), [times])
    const bestTime = useMemo(() => Math.min(...onlyTimes.map(time => Number(time))), [onlyTimes])
    const averageTime = useMemo(() => times.reduce((acc, time) => acc + Number(time.time), 0) / times.length, [times])
    const reversedTimes = useMemo(() => times.slice().reverse(), [times])

    const getTimesFromLocalStorage = () => {
        const times = localStorage.getItem('times')
        if (!times) return []
        return JSON.parse(times)
    }

    const setTimesToLocalStorage = () => {
        localStorage.setItem('times', JSON.stringify(times))
    }

    useEffect(() => {
        const times = getTimesFromLocalStorage()
        if (times.length > 0) setTimes(times)
    }, [])

    // save times to local storage whenever the times state changes
    useEffect(() => {
        setTimesToLocalStorage()
    }, [times])



    return (
        <TimerContext.Provider
            value={{
                times,
                setTimes,
                onlyTimes, // just return the times and not the object with the id
                bestTime,
                averageTime,
                reversedTimes
            }}
        >
            {children}
        </TimerContext.Provider>
    )

}

export const useTimerContext = () => {

    const context = useContext(TimerContext)
    if (!context) {
        throw new Error('useTimerContext must be used within a TimerProvider')
    }

    return context
}
