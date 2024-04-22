"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from "react";

type Time = { id: string, time: string };
type RawTime = { id: string, time: number };

interface TimerContextType {
    times: RawTime[];
    setTimes: Dispatch<SetStateAction<RawTime[]>>;
    formattedTimes: Time[];
    setFormattedTimes: Dispatch<SetStateAction<Time[]>>;
    bestTime: number;
    averageTime: number;
    reversedTimes: Time[];
    deleteTime: (id: string) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {

    const [formattedTimes, setFormattedTimes] = useState<Time[]>([])
    const [times, setTimes] = useState<RawTime[]>([])

    const bestTime = useMemo(() => Math.min(...times.map(time => time.time)), [times])
    const averageTime = useMemo(() => times.reduce((acc, time) => acc + time.time, 0) / times.length, [times])
    const reversedTimes = useMemo(() => formattedTimes.slice().reverse(), [formattedTimes])

    const getFormattedTimesFromLocalStorage = () => {
        const times = localStorage.getItem('formattedTimes')
        if (!times) return []
        return JSON.parse(times)
    }

    const setFormattedTimesToLocalStorage = () => {
        localStorage.setItem('formattedTimes', JSON.stringify(formattedTimes))
    }

    const getTimesFromLocalStorage = () => {
        const times = localStorage.getItem('times')
        if (!times) return []
        return JSON.parse(times)
    }

    const setTimesToLocalStorage = () => {
        localStorage.setItem('times', JSON.stringify(times))
    }

    useEffect(() => {
        const formattedTimes = getFormattedTimesFromLocalStorage()
        const times = getTimesFromLocalStorage()
        if (formattedTimes.length > 0) setFormattedTimes(formattedTimes)
        if (times.length > 0) setTimes(times)
    }, [])

    // save times to local storage whenever the times state changes
    useEffect(() => {
        setFormattedTimesToLocalStorage()
        setTimesToLocalStorage()
    }, [formattedTimes, times])

    const deleteTime = (id: string) => {
        const newFormattedTimes = formattedTimes.filter(time => time.id !== id)
        const newTimes = times.filter(time => time.id !== id)
        setFormattedTimes(newFormattedTimes)
        setTimes(newTimes)
    }


    return (
        <TimerContext.Provider
            value={{
                times,
                setTimes,
                formattedTimes,
                setFormattedTimes,
                bestTime,
                averageTime,
                reversedTimes,
                deleteTime
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
