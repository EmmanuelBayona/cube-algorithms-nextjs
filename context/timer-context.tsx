"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface TimerContextType {
    times: String[],
    setTimes: Dispatch<SetStateAction<String[]>>
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {

    const [times, setTimes] = useState<String[]>([])

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
