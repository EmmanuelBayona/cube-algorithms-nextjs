import { FormEvent, useState } from "react";
import { addNewCaseAction, updateCaseAction } from "@/actions";
import { CUBE_COLORS } from "@/lib/cubes-constants";
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { DBCases, DBCubes, DBMethods } from "@/types";

interface useNewCaseProps {
    cubes: DBCubes[];
    methods: DBMethods[];
    cases: DBCases[];
}

export const useNewCase = ({ cubes, methods, cases }: useNewCaseProps) => {

    const [cube, setCube] = useState<string>('');
    const [method, setMethod] = useState<string>('');
    const [caseName, setCaseName] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
    const [colorsFaces, setColorsFaces] = useState<Record<number, keyof typeof CUBE_COLORS>>({});
    const [currentColor, setCurrentColor] = useState<keyof typeof CUBE_COLORS>('default');

    const cubeId = cube ? cubes.find(c => c.name === cube)?.id : null;
    const filteredMethods = cubeId ? methods.filter(m => m.cubeId === cubeId) : [];

    const onAddNewCase = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'loading') return;

        const { isNewCaseValid, newCaseError } = validateCase();

        if (!isNewCaseValid) {
            showToastError(newCaseError || 'Something went wrong');
            return;
        }

        const cubePattern = getCubePattern(colorsFaces);

        const methodId = getMethodId(method);
        if (!methodId) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setStatus('loading')

        const { success } = await addNewCaseAction(caseName, methodId, cubePattern);

        if (!success) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        resetForm();
        showToastSuccess('Case added successfully');
    }

    const onUpdateCase = async (e: FormEvent<HTMLFormElement>, initialCaseId: number | undefined) => {
        e.preventDefault();
        if (status === 'loading') return;

        if (!initialCaseId) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        const { isNewCaseValid, newCaseError } = validateCase(false);

        if (!isNewCaseValid) {
            showToastError(newCaseError || 'Something went wrong');
            return;
        }

        const cubePattern = getCubePattern(colorsFaces);

        const methodId = getMethodId(method);
        if (!methodId) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setStatus('loading')

        const { success } = await updateCaseAction(initialCaseId, caseName, methodId, cubePattern);

        if (!success) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        showToastSuccess('Case updated successfully');
        setStatus('idle');
    }

    const validateCase = (isNewCase = true) => {
        if (!cube) return { isNewCaseValid: false, newCaseError: 'Cube is required' }
        if (!method) return { success: false, error: 'Method is required' }
        if (!caseName) return { isNewCaseValid: false, newCaseError: 'Case is required' }
        if (Object.keys(colorsFaces).length === 0) return { isNewCaseValid: false, newCaseError: 'You need to provide the cube pattern to add a new case' }

        // this validation is only for new cases, for updating cases, the case can be the same
        if (isNewCase) {
            // if the case already exists, return an error 
            if (cases.find(c => c.name === caseName)) return { isNewCaseValid: false, newCaseError: 'Case already exists' }
        }

        // bug: if you select a cube, then select a method, then change the cube, the method is shown empty, but
        // you can still submit the form, even when the method is not valid for the cubes
        if (!filteredMethods.find(m => m.name === method)) return { isNewCaseValid: false, newCaseError: 'Method is not valid for this cube' }

        return { isNewCaseValid: true }
    }

    const getCubePattern = (cubePattern: Record<number, keyof typeof CUBE_COLORS>) => {
        // delete all the default colors, as we use default color as eraser
        return Object.fromEntries(Object.entries(cubePattern).filter(([_, value]) => value !== 'default'));
    }
    const getMethodId = (methodName: string) => methods.find(m => m.name === methodName)?.id;

    const resetForm = () => {
        setCube('');
        setMethod('');
        setCaseName('');
        setCurrentColor('default');
        setColorsFaces({});
        setStatus('idle');
    }

    const onSelectFace = (face: number) => setColorsFaces(prev => ({ ...prev, [face]: currentColor }));

    return {
        cube,
        setCube,
        method,
        setMethod,
        caseName,
        setCaseName,
        status,
        colorsFaces,
        setColorsFaces,
        currentColor,
        setCurrentColor,
        onAddNewCase,
        onSelectFace,
        filteredMethods,
        onUpdateCase
    }

}
