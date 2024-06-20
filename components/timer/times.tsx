"use client";
import { useTimerContext } from "@/context/timer-context";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { TooltipMessage } from "../tooltip-message";
import { formatTime } from "@/lib/utils";

export const Times = () => {
    const { times, deleteTime } = useTimerContext();

    const reversedTimes = times.slice().reverse();

    return (
        <Card className="w-full lg:w-72">
            <CardHeader>
                <CardTitle>Times</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-56">
                    <ul className="divide-y divide-white/5">
                        {reversedTimes?.map((data, index) => (
                            <li
                                key={data.id}
                                className="flex justify-between items-center py-2"
                            >
                                <div className="space-x-4">
                                    <span className="text-white/80">
                                        {reversedTimes.length - index}.
                                    </span>
                                    <span>{formatTime(data.timeInMs)}</span>
                                </div>

                                <TooltipMessage message="delete time">
                                    <Button
                                        size="icon"
                                        variant="danger"
                                        onClick={() => deleteTime(data.id)}
                                    >
                                        <TrashIcon />
                                    </Button>
                                </TooltipMessage>
                            </li>
                        ))}
                    </ul>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>
            </CardContent>
        </Card>
    );
};
