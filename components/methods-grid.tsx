"use client";
// import { METHODS } from "@/lib/cubes-data"
import { cn } from "@/lib/utils"
import { Cubes } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { serverClient } from "@/app/_trpc/serverClient";
import { trpc } from "@/app/_trpc/client";

interface MethodsGridProps {
    cube: Cubes,
    className?: string,
    // methods: Awaited<ReturnType<(typeof serverClient)["getMethods"]>>
    // cubeId: number,
}

const CUBES_ID = {
    '2x2': 2,
    '3x3': 1,
}

export const MethodsGrid = ({ cube, className }: MethodsGridProps) => {

    // const cubeMethods = METHODS[cube];
    const cubeId = CUBES_ID[cube as keyof typeof CUBES_ID];
    const getMethods = trpc.getMethods.useQuery({ cubeId }, {
        // initialData: methods,
        // refetchOnMount: false,
        // refetchOnReconnect: false,
    })
    // console.log(getMethods.data)

    return (
        <section
            className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}
        >

            {
                getMethods?.data?.map((method, index) =>  (
                    <Card key={index}>
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