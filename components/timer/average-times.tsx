"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { formatTime } from "@/lib/utils";

export const AverageTimes = () => {

    const { averageTime } = useTimerContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Average time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {
                        !isNaN(averageTime) && averageTime !== Infinity
                            ? formatTime(averageTime)
                            : 0
                    }

                </span>
            </CardContent>
        </Card>
    )

}
