import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

export const LandingGrid = () => {

    return (
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-3">

            <Card>
                <CardHeader>
                    <CardTitle>Algorithm</CardTitle>
                    <CardDescription>
                        Explore diverse Rubik&apos;s Cube algorithms for all skill levels, from beginners to experts.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notation</CardTitle>
                    <CardDescription>
                        Master Rubik&apos;s Cube notation with our concise guide on reading and writing algorithms.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Practice</CardTitle>
                    <CardDescription>
                        Hone your skills with our interactive cube simulator. Create and share your own algorithms with the community.
                    </CardDescription>
                </CardHeader>
            </Card>

        </section>
    )

}
