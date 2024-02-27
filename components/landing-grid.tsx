import { Badge } from "./ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

export const LandingGrid = () => {

    return (
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-3">

            <Card>
                <CardHeader>
                    <CardTitle>Algorithm</CardTitle>
                    <CardDescription>
                        Explore diverse Cube algorithms for all skill levels, from beginners to experts.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="relative">
                <CardHeader>
                    <CardTitle>Notation</CardTitle>
                    <CardDescription>
                        Master Cube notation with our concise guide on reading and writing algorithms.
                    </CardDescription>
                </CardHeader>
                <Badge variant="success" className="absolute top-3 right-3">coming soon</Badge>
            </Card>

            <Card className="lg:col-span-2 relative">
                <CardHeader>
                    <CardTitle>Practice</CardTitle>
                    <CardDescription>
                        Hone your skills with our interactive cube timer. Create and share your own algorithms with the community.
                    </CardDescription>
                </CardHeader>
                <Badge variant="success" className="absolute top-3 right-3">coming soon</Badge>
            </Card>

        </section>
    )

}
