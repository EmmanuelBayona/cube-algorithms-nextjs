import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"
import prisma from "@/lib/prisma"
import { CubeSvg } from "./ui/cube-svg"

export const CasesList = async ({ className, method }: { className?: string, method: string }) => {

    // get all the cases for a method and the first 4 algorithms for each case
    const cases = await prisma.case.findMany({
        where: {
            method: {
                name: method
            },
        },
        include: {
            algorithms: {
                take: 4,
                select: {
                    id: true,
                    algorithm: true
                },
                where: {
                    isApproved: true
                }
            }
        }
    })


    return (
        <section
            className={cn('flex flex-col gap-5', className)}
        >
            {
                cases.map(caseItem => (
                    <Card key={caseItem.id}>
                        <CardContent className="pt-6 flex flex-col lg:flex-row lg:items-center gap-5">
                            <div className="w-40 h-40 bg-white/5 mx-auto md:mx-0">
                                <CubeSvg size={160}
                                    colors={{
                                        6: 'blue',
                                        9: 'blue',
                                        10: 'red',
                                        11: 'red',
                                        14: 'red',
                                        15: 'red',
                                        17: 'red',
                                        18: 'red',
                                        21: 'white',
                                        22: 'blue',
                                        23: 'blue',
                                        25: 'blue',
                                        26: 'blue',
                                    }}
                                />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold">{caseItem.name}</h2>
                                {
                                    caseItem.algorithms.length === 0 && (
                                        <p>No algorithms yet</p>
                                    )
                                }
                                {
                                    caseItem.algorithms.length > 0 && caseItem.algorithms.map(algorithm => (
                                        <p key={algorithm.id}>{algorithm.algorithm}</p>
                                    ))
                                }
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </section>
    )

}
