import { useEffect, useState } from "react"
import { DBCubes, DBMethods } from "@/types";
import { useSearchParams } from "next/navigation";
import { fetchCaseByIdAction, fetchCubesAction, fetchMethodsAction } from "@/actions";


export const useCaseForm = () => {

    const searchParams = useSearchParams();
    const caseId = searchParams.get("case");

    const [cubeType, setCubeType] = useState("");
    const [cubes, setCubes] = useState<DBCubes[]>([]);

    const [methodName, setMethodName] = useState("");
    const [methods, setMethods] = useState<DBMethods[]>([]);

    const [caseName, setCaseName] = useState("");

    useEffect(() => {
        if (!caseId) return;

        const getCaseWithMethodAndCube = async () => {
            const response = await fetchCaseByIdAction(Number(caseId));
            if (response.success && response.data) {
                setCubeType(response.data.method.cube.name)
                setMethodName(response.data.method.name)
                setCaseName(response.data.name)
            }
        }

        getCaseWithMethodAndCube();
    }, [caseId]);

    useEffect(() => {
        const getCubes = async () => {
            const response = await fetchCubesAction();
            if (response.success && response.data) {
                setCubes(response.data)
            }
        }

        getCubes();
    }, []);

    useEffect(() => {
        const getMethods = async () => {
            const response = await fetchMethodsAction();
            if (response.success && response.data) {
                setMethods(response.data)
            }
        }

        getMethods();
    }, []);

    return {
        cubeType,
        setCubeType,
        cubes,
        methodName,
        setMethodName,
        methods,
        caseName,
        setCaseName
    }

}
