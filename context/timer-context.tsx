"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface TimerContextType {
    times: String[],
    setTimes: Dispatch<SetStateAction<String[]>>
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {

    const [times, setTimes] = useState<String[]>([])

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
                setTimes
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
