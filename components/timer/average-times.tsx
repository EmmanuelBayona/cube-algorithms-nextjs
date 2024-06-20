"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { formatTime } from "@/lib/utils";

export const AverageTimes = () => {

    const { times } = useTimerContext();

    const averageTime = times.length > 0
        ? times.reduce((acc, time) => acc + time.timeInMs, 0) / times.length
        : 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Average time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {
                        times.length > 0
                            ? formatTime(averageTime)
                            : 0
                    }

                </span>
            </CardContent>
        </Card>
    )

}
