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
