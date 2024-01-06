import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
// rgba(108,71,255,.8)

export const LandingGrid = () => {

    return (
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-3">

            <Card className="relative overflow-hidden border bg-[linear-gradient(45deg,transparent_25%,rgba(108,71,255,.8)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
                <CardHeader>
                    <CardTitle>Algorithm</CardTitle>
                    <CardDescription>
                        Explore diverse Rubik&apos;s Cube algorithms for all skill levels, from beginners to experts.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="relative overflow-hidden border bg-[linear-gradient(45deg,transparent_25%,rgba(108,71,255,.8)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
                <CardHeader>
                    <CardTitle>Notation</CardTitle>
                    <CardDescription>
                        Master Rubik&apos;s Cube notation with our concise guide on reading and writing algorithms.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card className="lg:col-span-2 relative overflow-hidden border bg-[linear-gradient(45deg,transparent_25%,rgba(108,71,255,0.8)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
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