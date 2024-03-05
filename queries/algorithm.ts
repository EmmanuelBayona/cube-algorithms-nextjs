import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";


export const getAlgorithms = unstable_cache(
    async () => {
        return prisma.algorithm.findMany();
    },
    ["algorithms"],
    {
        tags: ["algorithms"],
    }
)

export const getAlgorithmsWithCaseMethodCubeInfo = unstable_cache(
    async (userId: string) => {
        return prisma.algorithm.findMany({
            where: {
                userId: userId,
            },
            include: {
                case: {
                    include: {
                        method: {
                            include: {
                                cube: true,
                            },
                        },
                    },
                },
            },
        });

    },
    ["getAlgorithmsWithCaseMethodCubeInfo"],
    {
        tags: ["getAlgorithmsWithCaseMethodCubeInfo"],
    }
)

export const addAlgorithm = async (alg: string, caseId: number, userId: string) => {
    return prisma.algorithm.create({
        data: {
            algorithm: alg,
            caseId: caseId,
            userId: userId,
        }
    })

}

export const approveAlg = async (algId: number) => {
    return prisma.algorithm.update({
        where: { id: algId },
        data: {
            isApproved: true
        }
    })
}

export const rejectAlg = async (algId: number) => {
    return prisma.algorithm.update({
        where: { id: algId },
        data: {
            isApproved: false
        }
    })
}

export const deleteAlg = async (algId: number) => {
    return prisma.algorithm.delete({
        where: { id: algId }
    })
}
