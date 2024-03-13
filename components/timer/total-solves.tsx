import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export const TotalSolves = ({ times }: { times: string[] }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Total solves</CardTitle>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-semibold leading-none tracking-tight drop-shadow-text">
                    {times.length}
                </span>
            </CardContent>
        </Card>
    )

}
