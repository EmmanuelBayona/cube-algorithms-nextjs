"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { Button } from "../ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

export const Times = () => {

    const { reversedTimes, deleteTime } = useTimerContext()

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
                                <li key={data.id} className="flex justify-between items-center py-2">
                                    <div className="space-x-4">
                                        <span className="text-white/80">{reversedTimes.length - index}.</span>
                                        <span>{data.time}</span>
                                    </div>
                                    <Button size='icon' variant='danger'
                                        onClick={() => deleteTime(data.id)}
                                    >
                                        <TrashIcon />
                                    </Button>
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
