import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export const BestTime = ({ times }: { times: string[] }) => {

    const best = Math.min(...times.map(time => Number(time)));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Average time</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {best === Infinity ? 0 : best}
                </span>
            </CardContent>
        </Card>
    )

}

