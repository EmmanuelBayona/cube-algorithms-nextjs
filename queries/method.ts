import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getMethods = unstable_cache(
    async () => {
        return prisma.method.findMany();
    },
    ["methods"],
    {
        tags: ["methods"],
    }
)

export const getMethodsByCubeName = unstable_cache(
    async (cubeName: string) => {
        return prisma.method.findMany({
            where: {
                cube: {
                    name: cubeName
                }
            }
        })
    },
    ["methods-by-cube-name"],
    {
        tags: ["methods-by-cube-name"],
    }
)

export const getFirstMethodByName = unstable_cache(
    async (methodName: string) => {
        return prisma.method.findFirst({
            where: {
                name: methodName
            }
        })
    },
    ["first-method-by-name"],
    {
        tags: ["first-method-by-name"],
    }
)

export const addMethod = async (method: string, description: string, cubeId: number, cubeView: string) => {
    return prisma.method.create({
        data: {
            name: method,
            description: description,
            cubeId: cubeId,
            svgView: cubeView
        }
    })


}
