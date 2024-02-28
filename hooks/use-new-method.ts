import { FormEvent, useState } from "react";
import { DBCubes, DBMethods } from "@/types"
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { addNewMethod } from "@/actions";


export const useNewMethod = ({ cubes, methods }: { cubes: DBCubes[], methods: DBMethods[] }) => {

    const [cube, setCube] = useState<string>('');
    const [method, setMethod] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [cubeView, setCubeView] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

    const onAddNewMethod = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'loading') return;

        if (!cube) return showToastError('Cube is required');
        if (!method) return showToastError('Method name is required');
        if (!description) return showToastError('Method description is required');
        if (!cubeView) return showToastError('Cube view is required');

        // if the method already exists, return an error 
        if (methods.find(m => m.name === method)) return showToastError('Method already exists');

        setStatus('loading')

        const cubeId = cubes.find(c => c.name === cube)?.id;
        if (!cubeId) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        const { success } = await addNewMethod(method, description, cubeId, cubeView);

        if (!success) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setCube('');
        setMethod('');
        setDescription('');
        showToastSuccess('Cube added successfully');
        setStatus('success');
    }

    return {
        cube,
        setCube,
        method,
        setMethod,
        description,
        setDescription,
        status,
        onAddNewMethod,
        cubeView,
        setCubeView
    }

}