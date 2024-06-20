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
    useState,
} from "react";
import { useAuth } from "@clerk/nextjs";
import { addNewTimeAction, deleteTimeAction, fetchTimesByUserIdAction } from "@/actions";
import { showToastError } from "@/lib/toaster";
import { DBTimes } from "@/types";

type RawTime = Omit<DBTimes, "userId" | "id"> & { id: number | string };

interface TimerContextType {
    times: RawTime[];
    scramble: string;
    setScramble: Dispatch<SetStateAction<string>>;
    saveNewTime: (time: number, date: Date) => void;
    deleteTime: (id: string | number) => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {

    const { userId } = useAuth();

    const [times, setTimes] = useState<RawTime[]>([]);
    const [scramble, setScramble] = useState("scramble");

    useEffect(() => {
        // avoid "content does not match server-rendered HTML"
        setScramble(generateScramble().join(" "));
    }, []);

    const getTimes = useCallback(async () => {
        const { success, data } = await fetchTimesByUserIdAction();
        if (!success) {
            showToastError("Failed to fetch your times");
            return;
        }

        if (data) setTimes(data);
    }, []);

    useEffect(() => {
        if (userId) {
            getTimes();
        }

        if (!userId) {
            const times = localStorage.getItem("times");
            if (times) setTimes(JSON.parse(times));
        }
    }, [userId, setTimes, getTimes]);

    const saveTimeOnDB = async (time: number, date: Date) => {
        if (!userId) return;
        const { success } = await addNewTimeAction(time, date, scramble);
        if (!success) {
            showToastError("Something went wrong with saving your time");
        }
        await getTimes();
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

    const saveNewTime = async (time: number, date: Date) => {
        if (userId) {
            await saveTimeOnDB(time, date);
            setScramble(generateScramble().join(" "));
            return;
        }

        saveTimeOnLocalStorage(time, date);
        setScramble(generateScramble().join(" "));
    }

    const deleteTimeFromDB = async (id: number) => {
        const { success } = await deleteTimeAction(id);
        if (!success) {
            showToastError("Failed to delete time");
            return;
        }
        setTimes(times.filter((t) => t.id !== id));
    }

    const deleteTimeFromLocalStorage = (id: string) => {
        const newTimes = times.filter((t) => t.id !== id);
        setTimes(newTimes);
        localStorage.setItem("times", JSON.stringify(newTimes));
    }

    const deleteTime = (id: string | number) => {
        // if the user is logged in, his times have a number id
        // if the user is not logged in, his times have a string id
        if (userId) {
            deleteTimeFromDB(Number(id));
            return;
        }

        deleteTimeFromLocalStorage(String(id));
    };

    return (
        <TimerContext.Provider
            value={{
                times,
                saveNewTime,
                scramble,
                setScramble,
                deleteTime,
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
