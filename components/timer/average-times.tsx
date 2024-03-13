import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export const AverageTimes = ({ times }: { times: string[] }) => {

    const average = times.reduce((acc, time) => acc + Number(time), 0) / times.length;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Average time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {isNaN(average) ? 0 : average.toFixed(2)}
                </span>
            </CardContent>
        </Card>
    )

}
