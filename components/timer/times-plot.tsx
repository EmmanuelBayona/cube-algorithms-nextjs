"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useTimerContext } from "@/context/timer-context";

export const TimesPlot = () => {
    const { reversedTimes } = useTimerContext();

    return <Card className="w-full lg:w-72 h-[320px]"></Card>;
};
