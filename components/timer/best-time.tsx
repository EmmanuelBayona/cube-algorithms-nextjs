"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export const BestTime = () => {

    const { bestTime } = useTimerContext()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Average time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {bestTime === Infinity ? 0 : bestTime}
                </span>
            </CardContent>
        </Card>
    )

}

