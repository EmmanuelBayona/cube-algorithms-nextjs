import { cn } from "@/lib/utils"
import { Cubes } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { CubeSvg } from "./ui/cube-svg";
import { F2L1_CUBE_COLORS, OLL1_CUBE_COLORS } from "@/lib/cubes-constants";

const CUBE_COVERS = {
    'F2L': F2L1_CUBE_COLORS,
    'OLL': OLL1_CUBE_COLORS,
}

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
                                <CardContent className="flex justify-center">
                                    <CubeSvg 
                                        background="transparent" 
                                        size={200}
                                        colors={CUBE_COVERS[method.name as keyof typeof CUBE_COVERS]}
                                    />
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </Link>
                ))
            }

        </section>
    )
    
}