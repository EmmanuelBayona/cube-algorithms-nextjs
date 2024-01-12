import { cn } from "@/lib/utils"
import { Cubes } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import prisma from "@/lib/prisma";

const CUBES_ID = {
    '2x2': 2,
    '3x3': 1,
}

export const MethodsGrid = async ({ cube, className }: { cube: Cubes, className?: string }) => {

    const cubeId = CUBES_ID[cube as keyof typeof CUBES_ID];
    const methods = await prisma.method.findMany({
        where: {
            cubeId
        },
    })


    return (
        <section
            className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}
        >

            {
                methods.map((method, index) =>  (
                    <Card key={method.id}>
                        <CardHeader>
                            <CardTitle>{method.name}</CardTitle>
                            <CardDescription>Description</CardDescription> 
                        </CardHeader>
                    </Card>
                ))
            }

        </section>
    )
    
}