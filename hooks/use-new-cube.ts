import { useState, FormEvent } from "react";
import { DBCubes } from "@/types";
import { addNewCube } from "@/actions"
import { showToastError, showToastSuccess } from "@/lib/toaster"

export const useNewCube = ({ cubes }: { cubes: DBCubes[] }) => {

    const [cube, setCube] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

    const onAddNewCube = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'loading') return;

        if (!cube) return showToastError('Cube name is required');
        if (!description) return showToastError('Cube description is required');

        // if the cube already exists, return an error
        if (cubes.find(c => c.name === cube)) return showToastError('Cube already exists')

        setStatus('loading');

        const { success } = await addNewCube(cube, description);

        if (!success) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setCube('');
        setDescription('');
        showToastSuccess('Cube added successfully');
        setStatus('success');
    }

    return {
        cube,
        setCube,
        description,
        setDescription,
        status,
        onAddNewCube
    }

}

