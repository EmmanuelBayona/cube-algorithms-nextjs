"use client";
import { generateScramble } from "@/helpers/scramble";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import {useAuth} from "@clerk/nextjs";
import {addNewTimeAction} from "@/actions";
import {showToastError} from "@/lib/toaster";

type Time = { id: string; time: string };
type RawTime = { id: string; time: number };

interface TimerContextType {
    times: RawTime[];
    setTimes: Dispatch<SetStateAction<RawTime[]>>;
    formattedTimes: Time[];
    setFormattedTimes: Dispatch<SetStateAction<Time[]>>;
    bestTime: number;
    averageTime: number;
    reversedTimes: Time[];
    deleteTime: (id: string) => void;
    scramble: string;
    setScramble: Dispatch<SetStateAction<string>>;
    saveTimeOnDB: (time: number, date: Date) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {

    const { userId } = useAuth();

    const [formattedTimes, setFormattedTimes] = useState<Time[]>([]);
    const [times, setTimes] = useState<RawTime[]>([]);
    const [scramble, setScramble] = useState("scramble");

    const bestTime = useMemo(
        () => Math.min(...times.map((time) => time.time)),
        [times]
    );
    const averageTime = useMemo(
        () => times.reduce((acc, time) => acc + time.time, 0) / times.length,
        [times]
    );
    const reversedTimes = useMemo(
        () => formattedTimes.slice().reverse(),
        [formattedTimes]
    );

    const getFormattedTimesFromLocalStorage = () => {
        const times = localStorage.getItem("formattedTimes");
        if (!times) return [];
        return JSON.parse(times);
    };

    const setFormattedTimesToLocalStorage = useCallback(() => {
        localStorage.setItem("formattedTimes", JSON.stringify(formattedTimes));
    }, [formattedTimes]);

    const getTimesFromLocalStorage = () => {
        const times = localStorage.getItem("times");
        if (!times) return [];
        return JSON.parse(times);
    };

    const setTimesToLocalStorage = useCallback(() => {
        localStorage.setItem("times", JSON.stringify(times));
    }, [times]);

    const saveTimeOnDB = useCallback(async (time: number, date: Date) => {
        if (!userId) return;
        const { success } = await addNewTimeAction(time, date, scramble)
        if (!success) showToastError('Something went wrong');
    }, [userId, scramble])

    useEffect(() => {
        const formattedTimes = getFormattedTimesFromLocalStorage();
        const times = getTimesFromLocalStorage();
        if (formattedTimes.length > 0) setFormattedTimes(formattedTimes);
        if (times.length > 0) setTimes(times);
    }, []);

    // save times to local storage whenever the times state changes
    useEffect(() => {
        setFormattedTimesToLocalStorage();
        setTimesToLocalStorage();
    }, [
        formattedTimes,
        times,
        setFormattedTimesToLocalStorage,
        setTimesToLocalStorage,
    ]);

    useEffect(() => {
        // avoid "content does not match server-rendered HTML"
        setScramble(generateScramble().join(" "));
    }, []);

    const deleteTime = (id: string) => {
        const newFormattedTimes = formattedTimes.filter(
            (time) => time.id !== id
        );
        const newTimes = times.filter((time) => time.id !== id);
        setFormattedTimes(newFormattedTimes);
        setTimes(newTimes);
    };

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
                deleteTime,
                scramble,
                setScramble,
                saveTimeOnDB
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export const useTimerContext = () => {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error("useTimerContext must be used within a TimerProvider");
    }

    return context;
};
