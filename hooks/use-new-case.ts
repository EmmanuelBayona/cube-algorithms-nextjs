import { addNewCaseAction } from "@/actions";
import { CUBE_COLORS } from "@/lib/cubes-constants";
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { DBCases, DBCubes, DBMethods } from "@/types";
import { FormEvent, useState } from "react";

export const useNewCase = ({ cubes, methods, cases }: { cubes: DBCubes[], methods: DBMethods[], cases: DBCases[] }) => {

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

        // delete all the default colors, as we use default color as eraser
        const cubePattern = Object.fromEntries(Object.entries(colorsFaces).filter(([_, value]) => value !== 'default'));
        if (!cube) return showToastError('Cube is required');
        if (!method) return showToastError('Method is required');
        if (!caseName) return showToastError('Case is required');
        if (Object.keys(cubePattern).length === 0) return showToastError('You need to provide the cube pattern to add a new case');

        // if the case already exists, return an error
        if (cases.find(c => c.name === caseName)) return showToastError('Case already exists');

        // bug: if you select a cube, then select a method, then change the cube, the method is shown empty, but
        // you can still submit the form, even when the method is not valid for the cube
        if (!filteredMethods.find(m => m.name === method)) return showToastError('Method is not valid for this cube');

        const methodId = method ? methods.find(m => m.name === method)?.id : null;
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

        setCube('');
        setMethod('');
        setCaseName('');
        showToastSuccess('Case added successfully');
        setStatus('success');
        setCurrentColor('default');
        setColorsFaces({});
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
        currentColor,
        setCurrentColor,
        onAddNewCase,
        onSelectFace,
        filteredMethods
    }

}
