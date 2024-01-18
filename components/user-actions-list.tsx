import { NewAlgorithmForm } from "./new-algorithm-form"
import { NewCaseForm } from "./new-case-form"
import { NewCubeForm } from "./new-cube-form"
import { NewMethodForm } from "./new-method-form"

export const UserActionsList = () => {

    return (
        <>
            <div className="mt-10 flex justify-end items-center gap-3">
                <NewCubeForm />
                <NewMethodForm />
                <NewCaseForm />
                <NewAlgorithmForm />
            </div>
            <hr className="border-dark-accent border-opacity-50 mt-3 mb-10" />
        </>
    )

}