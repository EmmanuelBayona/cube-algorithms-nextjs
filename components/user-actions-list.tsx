import prisma from "@/lib/prisma"
import { NewAlgorithmForm } from "./new-algorithm-form"
import { NewCaseForm } from "./new-case-form"
import { NewCubeForm } from "./new-cube-form"
import { NewMethodForm } from "./new-method-form"
import { auth, currentUser } from "@clerk/nextjs"

export const UserActionsList = async () => {

    const cubes = await prisma.cube.findMany();
    const methods = await prisma.method.findMany();
    const cases = await prisma.case.findMany();
    const algorithms = await prisma.algorithm.findMany();

    const { orgSlug } = auth()

    return (
        <div className="overflow-hidden mt-5 md:mt-10 w-full">
            <div className="w-full flex md:justify-end items-center gap-3 overflow-x-auto">
                <NewCubeForm cubes={cubes} />
                <NewMethodForm
                    cubes={cubes}
                    methods={methods}
                />
                <NewCaseForm
                    cubes={cubes}
                    methods={methods}
                    cases={cases}
                />
                <NewAlgorithmForm
                    cubes={cubes}
                    methods={methods}
                    cases={cases}
                    algorithms={algorithms}
                />
            </div>
        </div>
    )

}
