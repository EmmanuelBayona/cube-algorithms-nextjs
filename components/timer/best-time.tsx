"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { formatTime } from "@/lib/utils";

export const BestTime = () => {

    const { times } = useTimerContext()

    const bestTime = times.length > 0
        ? Math.min(...times.map((time) => time.timeInMs))
        : 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Best time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {
                        times.length > 0
                            ? formatTime(bestTime)
                            : 0
                    }
                </span>
            </CardContent>
        </Card>
    )

}

