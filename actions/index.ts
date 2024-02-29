'use server'
import { CUBE_COLORS } from "@/lib/cubes-constants"
import prisma from "@/lib/prisma"
import { addCube } from "@/queries/cube"
import { auth } from "@clerk/nextjs"
import { revalidatePath, revalidateTag } from "next/cache"

export const addNewCubeAction = async (cube: string, description: string) => {
    try {
        const res = await addCube(cube, description);

        revalidateTag('cubes');
        return { success: true, data: res }

    } catch (error) {
        return { success: false, error }
    }
}

export const addNewMethod = async (method: string, description: string, cubeId: number, cubeView: string) => {
    try {
        const res = await prisma.method.create({
            data: {
                name: method,
                description: description,
                cubeId: cubeId,
                svgView: cubeView
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }

    } catch (error) {
        return { success: false, error }
    }
}

export const addNewCase = async (caseName: string, methodId: number, cubePattern: Record<number, keyof typeof CUBE_COLORS>) => {
    try {
        console.log(cubePattern)
        const res = await prisma.case.create({
            data: {
                name: caseName,
                methodId: methodId,
                colors: cubePattern
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: [] }
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
        if (!algId) return { success: false, error: 'No algorithm id' }
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

export const rejectAlg = async (algId: number) => {
    try {
        const { has } = auth();
        if (!algId) return { success: false, error: 'No algorithm id' }
        if (!has({ permission: "org:algorithms:verify" })) return { success: false, error: 'Not enough permissions' }

        const res = await prisma.algorithm.update({
            where: { id: algId },
            data: {
                isApproved: false
            }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteAlg = async (algId: number) => {
    try {
        const { has } = auth();
        if (!algId) return { success: false, error: 'No algorithm id' }
        if (!has({ permission: "org:algorithms:verify" })) return { success: false, error: 'Not enough permissions' }

        const res = await prisma.algorithm.delete({
            where: { id: algId }
        })

        revalidatePath('/dash/profile')
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}
