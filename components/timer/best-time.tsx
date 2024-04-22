"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { formatTime } from "@/lib/utils";

export const BestTime = () => {

    const { bestTime } = useTimerContext()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Best time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {
                        !isNaN(bestTime) && bestTime !== Infinity
                            ? formatTime(bestTime)
                            : 0
                    }
                </span>
            </CardContent>
        </Card>
    )

}

