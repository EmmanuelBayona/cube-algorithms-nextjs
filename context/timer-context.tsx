"use client";
import { generateScramble } from "@/helpers/scramble";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { useAuth } from "@clerk/nextjs";
import { addNewTimeAction, fetchTimesByUserIdAction } from "@/actions";
import { showToastError } from "@/lib/toaster";
import { DBTimes } from "@/types";

type RawTime = Omit<DBTimes, "userId" | "id"> & { id: number | string };

interface TimerContextType {
    times: RawTime[];
    scramble: string;
    setScramble: Dispatch<SetStateAction<string>>;
    saveNewTime: (time: number, date: Date) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {

    const { userId } = useAuth();

    const [times, setTimes] = useState<RawTime[]>([]);
    const [scramble, setScramble] = useState("scramble");

    useEffect(() => {
        const getTimes = async () => {
            const { success, data } = await fetchTimesByUserIdAction();
            if (!success) {
                showToastError('Failed to fetch your times');
                return;
            }

            if (data) setTimes(data);
        };

        if (userId) {
            getTimes();
        }

        if (!userId) {
            const times = localStorage.getItem("times");
            if (times) setTimes(JSON.parse(times));
        }
    }, [userId, setTimes]);

    const saveTimeOnDB = async (time: number, date: Date) => {
        if (!userId) return;
        const savedTime = { id: crypto.randomUUID(), timeInMs: time, date, scramble };
        setTimes([...times, savedTime]);
        const { success } = await addNewTimeAction(time, date, scramble);
        if (!success) {
            showToastError("Something went wrong with saving your time");
            setTimes(times.filter((t) => t.id !== savedTime.id));
        }
    };

    const saveTimeOnLocalStorage = (time: number, date: Date) => {
        const newTime: RawTime = {
            id: crypto.randomUUID(),
            timeInMs: time,
            date,
            scramble,
        }
        const newTimes = [...times, newTime];
        setTimes(newTimes);
        localStorage.setItem("times", JSON.stringify(newTimes));
    };

    const saveNewTime = (time: number, date: Date) => {
        if (userId) {
            saveTimeOnDB(time, date);
            setScramble(generateScramble().join(" "));
            return;
        }

        saveTimeOnLocalStorage(time, date);
        setScramble(generateScramble().join(" "));
    }

    useEffect(() => {
        // avoid "content does not match server-rendered HTML"
        setScramble(generateScramble().join(" "));
    }, []);


    return (
        <TimerContext.Provider
            value={{
                times,
                saveNewTime,
                scramble,
                setScramble,
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
