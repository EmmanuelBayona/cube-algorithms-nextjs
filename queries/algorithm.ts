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

export const addAlgorithm = async (alg: string, caseId: number, userId: string) => {
    return prisma.algorithm.create({
        data: {
            algorithm: alg,
            caseId: caseId,
            userId: userId,
        }
    })

}
