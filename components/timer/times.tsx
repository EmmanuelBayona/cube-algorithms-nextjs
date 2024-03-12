import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

export const Times = ({ times }: { times: string[] | undefined }) => {

    // reverse the list of times to show the most recent times first
    const reversedTimes = times?.slice().reverse();

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
                                    <span className="text-white/80">{index + 1}.</span>
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
