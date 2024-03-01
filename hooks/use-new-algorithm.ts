import { FormEvent, useState } from "react";
import { DBAlgs, DBCases, DBCubes, DBMethods } from "@/types";
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { addNewAlgAction } from "@/actions";


interface NewAlgorithmFormProps {
    cubes: DBCubes[];
    methods: DBMethods[];
    cases: DBCases[];
    algorithms: DBAlgs[];
}

export const useNewAlgorithm = ({ cubes, methods, cases, algorithms }: NewAlgorithmFormProps) => {

    const [cube, setCube] = useState<string>('');
    const [method, setMethod] = useState<string>('');
    const [caseName, setCaseName] = useState<string>('');
    const [algorithm, setAlgorithm] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

    const cubeId = cube ? cubes.find(c => c.name === cube)?.id : null;
    const methodId = method ? methods.find(m => m.name === method)?.id : null;
    const filteredMethods = cubeId ? methods.filter(m => m.cubeId === cubeId) : [];
    const filteredCases = methodId ? cases.filter(c => c.methodId === methodId) : [];

    const onAddNewAlgorithm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!cube) return showToastError('Cube is required');
        if (!method) return showToastError('Method is required');
        if (!caseName) return showToastError('Case is required');
        if (!algorithm) return showToastError('Algorithm is required');

        // if the algorithm already exists, return an error
        if (algorithms.find(a => a.algorithm === algorithm)) return showToastError('Algorithm already exists');

        // bug: if you select a cube, then select a method, then change the cube, the method is shown empty, but
        // you can still submit the form, even when the method is not valid for the cube, this also happens with cases
        if (!filteredMethods.find(m => m.name === method)) return showToastError('Method is not valid for this cube');
        if (!filteredCases.find(c => c.name === caseName)) return showToastError('Case is not valid for this method');

        const caseId = caseName ? filteredCases.find(c => c.name === caseName)?.id : null;
        if (!caseId) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setStatus('loading');

        const { success } = await addNewAlgAction(algorithm, caseId);

        if (!success) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setCube('');
        setMethod('');
        setCaseName('');
        setAlgorithm('');
        showToastSuccess('Algorithm added successfully');
        setStatus('success');
    }

    return {
        cube,
        setCube,
        method,
        setMethod,
        caseName,
        setCaseName,
        algorithm,
        setAlgorithm,
        status,
        onAddNewAlgorithm,
        filteredMethods,
        filteredCases,
    }

}
