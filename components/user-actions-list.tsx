import prisma from "@/lib/prisma"
import { NewAlgorithmForm } from "./new-algorithm-form"
import { NewCaseForm } from "./new-case-form"
import { NewCubeForm } from "./new-cube-form"
import { NewMethodForm } from "./new-method-form"
import { Protect } from "@clerk/nextjs"

export const UserActionsList = async () => {

    const cubes = await prisma.cube.findMany();
    const methods = await prisma.method.findMany();
    const cases = await prisma.case.findMany();
    const algorithms = await prisma.algorithm.findMany();

    return (
        <div className="overflow-hidden mt-5 md:mt-10 w-full">
            <div className="w-full flex md:justify-end items-center gap-3 p-1 overflow-x-auto">

                <Protect permission="org:cube:create">
                    <NewCubeForm cubes={cubes} />
                </Protect>

                <Protect permission="org:method:create">
                    <NewMethodForm
                        cubes={cubes}
                        methods={methods}
                    />
                </Protect>

                <Protect permission="org:case:create">
                    <NewCaseForm
                        cubes={cubes}
                        methods={methods}
                        cases={cases}
                    />
                </Protect>

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
