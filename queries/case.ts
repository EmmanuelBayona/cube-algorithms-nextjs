import { CUBE_COLORS } from "@/lib/cubes-constants";
import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getCases = unstable_cache(
    async () => {
        return prisma.case.findMany();
    },
    ["cases"],
    {
        tags: ["cases"],
    }
)

export const getCasesWithFirstFourAlgorithmsByMethodName = unstable_cache(
    async (methodName: string, valueToFilter: string) => {
        return prisma.case.findMany({
            where: {
                method: {
                    name: methodName,
                },
                OR: [
                    { name: { contains: valueToFilter } },
                    {
                        algorithms: {
                            some: {
                                isApproved: true,
                                algorithm: { contains: valueToFilter }
                            }
                        }
                    }
                ]
            },
            include: {
                algorithms: {
                    take: 4,
                    select: {
                        id: true,
                        algorithm: true,
                    },
                    where: {
                        isApproved: true,
                    },
                },
            },
            orderBy: {
                name: "asc",
            },
        });
    },
    ["cases-with-first-four-algorithms-by-method-name"],
    {
        tags: ["cases-with-first-four-algorithms-by-method-name"],
    }
)

export const getCasesWithMethodAndCube = unstable_cache(
    async () => {
        return prisma.case.findMany({
            include: {
                method: {
                    include: {
                        cube: true
                    }
                }
            }
        })
    },
    ["cases-with-method-and-cube"],
    {
        tags: ["cases-with-method-and-cube"],
    }
)

// export const getCaseById = async (caseId: number) => {
//     return prisma.case.findUnique({
//         where: { id: caseId }
//     })
// }
export const getCaseWithMethodAndCubeById = async (caseId: number) => {
    return prisma.case.findUnique({
        where: { id: caseId },
        include: {
            method: {
                include: {
                    cube: true
                }
            }
        }
    })
}

export const addCase = async (caseName: string, methodId: number, cubePattern: Record<number, keyof typeof CUBE_COLORS>) => {
    return prisma.case.create({
        data: {
            name: caseName,
            methodId: methodId,
            colors: cubePattern
        }
    })

}

export const updateCase = async (caseId: number, caseName: string, methodId: number, cubePattern: Record<number, keyof typeof CUBE_COLORS>) => {
    return prisma.case.update({
        where: { id: caseId },
        data: {
            name: caseName,
            methodId: methodId,
            colors: cubePattern
        }
    })
}

export const deleteCase = async (caseId: number) => {
    return prisma.case.delete({
        where: { id: caseId }
    })
}
