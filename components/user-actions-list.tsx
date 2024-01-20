import prisma from "@/lib/prisma"
import { NewAlgorithmForm } from "./new-algorithm-form"
import { NewCaseForm } from "./new-case-form"
import { NewCubeForm } from "./new-cube-form"
import { NewMethodForm } from "./new-method-form"

export const UserActionsList = async () => {

    const cubes = await prisma.cube.findMany();
    // const methods = await prisma.method.findMany();

    return (
        <div className="overflow-hidden mt-5 md:mt-10 w-full">
            <div className="w-full flex md:justify-end items-center gap-3 overflow-x-auto">
                <NewCubeForm cubes={cubes} />
                <NewMethodForm cubes={cubes} />
                <NewCaseForm />
                <NewAlgorithmForm />
            </div>
        </div>
    )

}
