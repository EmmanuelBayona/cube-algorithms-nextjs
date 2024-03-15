"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

export const Times = () => {

    const { reversedTimes } = useTimerContext()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Times</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-56">
                    <ul className="divide-y divide-white/5">
                        {
                            reversedTimes?.map((data, index) => (
                                <li key={data.id} className="space-x-4 py-2">
                                    <span className="text-white/80">{reversedTimes.length - index}.</span>
                                    <span>{data.time}</span>
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
