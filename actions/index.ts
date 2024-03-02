'use server'
import { CUBE_COLORS } from "@/lib/cubes-constants"
import { addAlgorithm, approveAlg, deleteAlg, rejectAlg } from "@/queries/algorithm"
import { addCase } from "@/queries/case"
import { addCube } from "@/queries/cube"
import { addMethod } from "@/queries/method"
import { auth } from "@clerk/nextjs"
import { revalidateTag } from "next/cache"

export const addNewCubeAction = async (cube: string, description: string) => {
    try {
        const res = await addCube(cube, description);

        revalidateTag('cubes');
        return { success: true, data: res }

    } catch (error) {
        return { success: false, error }
    }
}

export const addNewMethodAction = async (method: string, description: string, cubeId: number, cubeView: string) => {
    try {
        const res = await addMethod(method, description, cubeId, cubeView);

        revalidateTag('methods');
        return { success: true, data: res }

    } catch (error) {
        return { success: false, error }
    }
}

export const addNewCaseAction = async (caseName: string, methodId: number, cubePattern: Record<number, keyof typeof CUBE_COLORS>) => {
    try {
        const res = await addCase(caseName, methodId, cubePattern);

        revalidateTag('cases');
        revalidateTag('cases-with-first-four-algorithms-by-method-name');
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}

export const addNewAlgAction = async (alg: string, caseId: number) => {
    try {
        const { userId } = auth();
        if (!userId) return { success: false, error: 'Not logged in' }

        const res = await addAlgorithm(alg, caseId, userId);

        revalidateTag('algorithms');
        revalidateTag('getAlgorithmsWithCaseMethodCubeInfo');
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}

export const approveAlgAction = async (algId: number) => {
    try {
        const { has } = auth();
        if (!algId) return { success: false, error: 'No algorithm id' }
        if (!has({ permission: "org:algorithms:verify" })) return { success: false, error: 'Not enough permissions' }

        const res = await approveAlg(algId);

        revalidateTag('getAlgorithmsWithCaseMethodCubeInfo')
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}

export const rejectAlgAction = async (algId: number) => {
    try {
        const { has } = auth();
        if (!algId) return { success: false, error: 'No algorithm id' }
        if (!has({ permission: "org:algorithms:verify" })) return { success: false, error: 'Not enough permissions' }

        const res = await rejectAlg(algId);

        revalidateTag('getAlgorithmsWithCaseMethodCubeInfo');
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}

export const deleteAlgAction = async (algId: number) => {
    try {
        const { has } = auth();
        if (!algId) return { success: false, error: 'No algorithm id' }
        if (!has({ permission: "org:algorithms:verify" })) return { success: false, error: 'Not enough permissions' }

        const res = await deleteAlg(algId);

        revalidateTag('getAlgorithmsWithCaseMethodCubeInfo');
        return { success: true, data: res }
    } catch (error) {
        return { success: false, error }
    }
}
