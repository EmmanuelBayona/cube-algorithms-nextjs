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


export const addCube = async (cube: string, description: string) => {
    return prisma.cube.create({
        data: {
            name: cube,
            description: description,
        }
    })
}
