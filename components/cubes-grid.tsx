import { cn } from "@/lib/utils"
import prisma from "@/lib/prisma"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Link from "next/link";

export const CubesGrid = async ({ className }: { className?: string }) => {

    const cubes = await prisma.cube.findMany();

    return (
        <section className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}>

            {
                cubes.map((cube) => (
                    <Link key={cube.id} href={`/dash/puzzles/${cube.name}`}>
                        <Card key={cube.id}>
                            <CardHeader>
                                <CardTitle>{cube.name}</CardTitle>
                                <CardDescription>{cube.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))
            }

        </section>
    )

}
