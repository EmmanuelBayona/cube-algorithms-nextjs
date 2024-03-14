"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

export const Times = () => {

    const { times } = useTimerContext()
    // reverse the list of times to show the most recent times first
    // the slice is to avoid mutating the original array
    const reversedTimes = times.slice().reverse();

    return (
        <Card className="w-80">
            <CardHeader>
                <CardTitle>Times</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-56">
                    <ul className="divide-y divide-white/5">
                        {
                            reversedTimes?.map((time, index) => (
                                <li key={index} className="space-x-4 py-2">
                                    <span className="text-white/80">{reversedTimes.length - index}.</span>
                                    <span>{time}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </CardContent>
        </Card>
    )

}
