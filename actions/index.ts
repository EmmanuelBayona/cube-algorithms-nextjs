'use server'
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs"
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

export const addNewCase = async (caseName: string, methodId: number) => {
    try {
        const res = await prisma.case.create({
            data: {
                name: caseName,
                methodId: methodId
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}

export const addNewAlg = async (alg: string, caseId: number) => {
    try {
        const { userId } = auth();
        if (!userId) return { success: false, error: 'Not logged in' }

        const res = await prisma.algorithm.create({
            data: {
                algorithm: alg,
                caseId: caseId,
                userId: userId,
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}

export const approveAlg = async (algId: number) => {
    try {
        const { has } = auth();
        if (!has({ permission: "org:algorithms:verify" })) return { success: false, error: 'Not enough permissions' }

        const res = await prisma.algorithm.update({
            where: { id: algId },
            data: {
                isApproved: true
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}
