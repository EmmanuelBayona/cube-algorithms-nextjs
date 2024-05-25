import { useEffect, useState } from "react"
import { DBCubes, DBMethods, Status } from "@/types";
import { fetchCaseByIdAction, fetchCubesAction, fetchMethodsAction } from "@/actions";
import { CUBE_COLORS } from "@/lib/cubes-constants";


export const useCaseForm = ({ caseIdToEdit }: { caseIdToEdit?: number }) => {

    const [cubeType, setCubeType] = useState("");
    const [cubes, setCubes] = useState<DBCubes[]>([]);

    const [methodName, setMethodName] = useState("");
    const [methods, setMethods] = useState<DBMethods[]>([]);

    const [caseName, setCaseName] = useState("");

    const [currentColor, setCurrentColor] = useState<keyof typeof CUBE_COLORS>('default');
    const [colorsFaces, setColorsFaces] = useState<Record<number, keyof typeof CUBE_COLORS>>({});

    const [status, setStatus] = useState<Status>('idle');

    useEffect(() => {
        if (!caseIdToEdit) return;

        const getCaseWithMethodAndCube = async () => {
            setStatus('loading');
            const response = await fetchCaseByIdAction(caseIdToEdit);
            if (response.success && response.data) {
                setCubeType(response.data.method.cube.name)
                setMethodName(response.data.method.name)
                setCaseName(response.data.name)
                setColorsFaces(response.data.colors as Record<number, keyof typeof CUBE_COLORS>);
                setStatus('success');
            }
        }

        getCaseWithMethodAndCube();
    }, [caseIdToEdit]);

    useEffect(() => {
        const getCubes = async () => {
            const response = await fetchCubesAction();
            if (response.success && response.data) {
                setCubes(response.data)
            }
        }

        const getMethods = async () => {
            const response = await fetchMethodsAction();
            if (response.success && response.data) {
                setMethods(response.data)
            }
        }

        getCubes();
        getMethods();
    }, []);

    const onSelectCubeFace = (face: number) => setColorsFaces(prev => ({ ...prev, [face]: currentColor }));

    return {
        cubeType,
        setCubeType,
        cubes,
        methodName,
        setMethodName,
        methods,
        caseName,
        setCaseName,
        currentColor,
        setCurrentColor,
        colorsFaces,
        onSelectCubeFace,
        status,
    }

}
