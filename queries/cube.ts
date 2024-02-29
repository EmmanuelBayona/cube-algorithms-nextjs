import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getCubes = unstable_cache(
    async () => {
        return prisma.cube.findMany();
    },
    ["cubes"],
    {
        tags: ["cubes"],
    }
) 
