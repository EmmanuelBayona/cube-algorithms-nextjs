'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const addNewCube = async (cube: string, description: string) => {
    try {
        const res = await prisma.cube.create({
            data: {
                name: cube,
                description: description,
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }

    } catch (error) {
        return { success: false, error }
    }
}

export const addNewMethod = async (method: string, description: string, cubeId: number) => {
    try {
        const res = await prisma.method.create({
            data: {
                name: method,
                description: description,
                cubeId: cubeId
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }

    } catch (error) {
        return { success: false, error }
    }
}
