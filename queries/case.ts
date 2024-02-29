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
    async (methodName: string) => {
        return prisma.case.findMany({
            where: {
                method: {
                    name: methodName,
                },
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
