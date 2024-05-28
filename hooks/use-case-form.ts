import { FormEvent, useEffect, useState } from "react"
import { DBCases, DBCubes, DBMethods, Status } from "@/types";
import { addNewCaseAction, fetchCaseByIdAction, fetchCasesAction, fetchCubesAction, fetchMethodsAction, updateCaseAction } from "@/actions";
import { CUBE_COLORS } from "@/lib/cubes-constants";
import { showToastError, showToastSuccess } from "@/lib/toaster";


export const useCaseForm = ({ caseIdToEdit }: { caseIdToEdit?: number }) => {

    const [cubeType, setCubeType] = useState("");
    const [cubes, setCubes] = useState<DBCubes[]>([]);

    const [methodName, setMethodName] = useState("");
    const [methods, setMethods] = useState<DBMethods[]>([]);

    const [caseName, setCaseName] = useState("");
    const [cases, setCases] = useState<DBCases[]>([]);

    const [currentColor, setCurrentColor] = useState<keyof typeof CUBE_COLORS>('default');
    const [colorsFaces, setColorsFaces] = useState<Record<number, keyof typeof CUBE_COLORS>>({});

    // status if the form is use to edit a case, the status is loading when the passed caseId info is being fetched
    const [status, setStatus] = useState<Status>('idle');
    // status for the request to add a new case or update a case
    const [actionStatus, setActionStatus] = useState<Status>('idle');

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

        const getCases = async () => {
            const response = await fetchCasesAction();
            if (response.success && response.data) {
                setCases(response.data)
            }
        }

        getCubes();
        getMethods();
        getCases();
    }, []);

    const addNewCase = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (actionStatus === 'loading') return;

        const { isNewCaseValid, newCaseError } = validateCase();

        if (!isNewCaseValid) {
            showToastError(newCaseError || 'Something went wrong');
            return;
        }

        const cubePattern = getCubePattern(colorsFaces);

        const methodId = getMethodId(methodName);
        if (!methodId) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setActionStatus('loading');

        const { success } = await addNewCaseAction(caseName, methodId, cubePattern);

        if (!success) {
            showToastError('Something went wrong');
            setActionStatus('error');
            return;
        }

        resetForm();
        showToastSuccess('Case added successfully');
        setActionStatus('idle');
    }

    const updateCase = async (e: FormEvent<HTMLFormElement>, initialCaseId: number | undefined) => {
        e.preventDefault();
        if (actionStatus === 'loading') return;

        if (!initialCaseId) {
            showToastError('Something went wrong');
            setActionStatus('error');
            return;
        }

        const { isNewCaseValid, newCaseError } = validateCase(false);

        if (!isNewCaseValid) {
            showToastError(newCaseError || 'Something went wrong');
            return;
        }

        const cubePattern = getCubePattern(colorsFaces);

        const methodId = getMethodId(methodName);
        if (!methodId) {
            showToastError('Something went wrong');
            setActionStatus('error');
            return;
        }

        setActionStatus('loading');

        const { success } = await updateCaseAction(initialCaseId, caseName, methodId, cubePattern);

        if (!success) {
            showToastError('Something went wrong');
            setActionStatus('error');
            return;
        }

        showToastSuccess('Case updated successfully');
        setActionStatus('idle');
    }


    const onSelectCubeFace = (face: number) => setColorsFaces(prev => ({ ...prev, [face]: currentColor }));

    const validateCase = (isNewCase = true) => {
        if (!cubeType) return { isNewCaseValid: false, newCaseError: 'Cube is required' }
        if (!methodName) return { success: false, error: 'Method is required' }
        if (!caseName) return { isNewCaseValid: false, newCaseError: 'Case is required' }
        if (Object.keys(colorsFaces).length === 0) return { isNewCaseValid: false, newCaseError: 'You need to provide the cube pattern to add a new case' }

        // this validation is only for new cases, for updating cases, the case can be the same
        if (isNewCase) {
            // if the case already exists, return an error
            if (cases.find(c => c.name === caseName)) return { isNewCaseValid: false, newCaseError: 'Case already exists' }
        }

        // bug: if you select a cube, then select a method, then change the cube, the method is shown empty, but
        // you can still submit the form, even when the method is not valid for the cubes
        // if (!filteredMethods.find(m => m.name === method)) return { isNewCaseValid: false, newCaseError: 'Method is not valid for this cube' }

        return { isNewCaseValid: true }
    }

    const getCubePattern = (cubePattern: Record<number, keyof typeof CUBE_COLORS>) => {
        // delete all the default colors, as we use default color as eraser
        return Object.fromEntries(Object.entries(cubePattern).filter(([_, value]) => value !== 'default'));
    }

    const getMethodId = (methodName: string) => methods.find(m => m.name === methodName)?.id;

    const resetForm = () => {
        setCubeType('');
        setMethodName('');
        setCaseName('');
        setCurrentColor('default');
        setColorsFaces({});
        setStatus('idle');
    }

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
        addNewCase,
        updateCase,
        actionStatus
    }

}
