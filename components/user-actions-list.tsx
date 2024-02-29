import { NewAlgorithmForm } from "./new-algorithm-form"
import { NewCaseForm } from "./new-case-form"
import { NewCubeForm } from "./new-cube-form"
import { NewMethodForm } from "./new-method-form"
import { Protect } from "@clerk/nextjs"
import { getCubes } from "@/queries/cube"
import { getMethods } from "@/queries/method"
import { getAlgorithms } from "@/queries/algorithm"
import { getCases } from "@/queries/case"

export const UserActionsList = async () => {

    const cubes = await getCubes();
    const methods = await getMethods();
    const cases = await getCases();
    const algorithms = await getAlgorithms();

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
