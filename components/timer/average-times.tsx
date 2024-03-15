"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export const AverageTimes = () => {

    const { averageTime } = useTimerContext();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Average time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {isNaN(averageTime) ? 0 : averageTime.toFixed(2)}
                </span>
            </CardContent>
        </Card>
    )

}
