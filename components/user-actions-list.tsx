import { NewAlgorithmForm } from "./new-algorithm-form"
import { NewCaseForm } from "./new-case-form"
import { NewCubeForm } from "./new-cube-form"
import { NewMethodForm } from "./new-method-form"

export const UserActionsList = () => {

    return (
        <div className="overflow-hidden mt-5 md:mt-10 w-full">
            <div className="w-full flex md:justify-end items-center gap-3 overflow-x-auto">
                <NewCubeForm />
                <NewMethodForm />
                <NewCaseForm />
                <NewAlgorithmForm />
            </div>
        </div>
    )

}