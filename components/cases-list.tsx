import { cn } from "@/lib/utils"
import { Card, CardContent } from "./ui/card"
import prisma from "@/lib/prisma"
import { CubeSvg } from "./ui/cube-svg"
import { CUBE_COLORS } from "@/lib/cubes-constants"

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
        },
    })

    /**
     * Sort the cases by the number at the end of the name, the prisma order function does not work quite well
     * beccause if I have 'F2L 1', 'F2L 2', 'F2L 10', it will order them as 'F2L 1', 'F2L 10', 'F2L 2'.
     * So we order them by the number at the end of the name just if they have one
     */
    cases.sort((a, b) => {
        const aMatch = a.name.match(/\d+$/);
        const bMatch = b.name.match(/\d+$/);
        const aNumber = aMatch ? parseInt(aMatch[0]) : 0;
        const bNumber = bMatch ? parseInt(bMatch[0]) : 0;
        return aNumber - bNumber;
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
                                    colors={caseItem.colors as Record<number, keyof typeof CUBE_COLORS>}
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
