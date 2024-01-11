import { METHODS } from "@/lib/cubes-data"
import { cn } from "@/lib/utils"
import { Cubes } from "@/types"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const MethodsGrid = ({ cube, className }: { cube: Cubes, className?: string }) => {

    const cubeMethods = METHODS[cube];
    console.log(cubeMethods);

    return (
        <section
            className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5', className)}
        >

            {
                cubeMethods.map((method, index) =>  (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{method.name}</CardTitle>
                            <CardDescription>{method.description}</CardDescription> 
                        </CardHeader>
                    </Card>
                ))
            }

        </section>
    )
    
}