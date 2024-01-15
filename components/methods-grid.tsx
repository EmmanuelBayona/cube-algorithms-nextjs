import { cn } from "@/lib/utils"
import { Cubes } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const MethodsGrid = async ({ cube, className }: { cube: Cubes, className?: string }) => {

    const methods = await prisma.method.findMany({
        where: {
            cube: {
                name: cube,
            }
        },
    })


    return (
        <section
            className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}
        >

            {
                methods.map((method) =>  (
                    <Link key={method.id}
                        href={`/dash/puzzles/${cube}/${method.name}`}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>{method.name}</CardTitle>
                                <CardDescription>{ method.description }</CardDescription> 
                            </CardHeader>
                        </Card>
                    </Link>
                ))
            }

        </section>
    )
    
}