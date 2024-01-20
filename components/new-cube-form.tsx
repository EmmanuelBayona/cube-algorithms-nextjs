'use client';
import { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { CubeIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { addNewCube } from "@/actions"
import { showToastError, showToastSuccess } from "@/lib/toaster"
import { DBCubes } from "@/types";

export const NewCubeForm = ({ cubes }: { cubes: DBCubes[] }) => {

    const [cube, setCube] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

    const onAddNewCube = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex-shrink-0">
                    New Cube
                    <CubeIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Add a new cube</DialogTitle>
                    <DialogDescription>
                        Enter a cube name to add a new one.
                    </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4 py-5" onSubmit={onAddNewCube}>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cube" className="text-right">Cube</Label>
                        <Input
                            className="col-span-3"
                            id="cube"
                            name="cube"
                            type='text'
                            placeholder='Enter a cube'
                            value={cube}
                            onChange={(e) => setCube(e.target.value)}
                        />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Input
                            className="col-span-3"
                            id="description"
                            name="description"
                            type='text'
                            placeholder='Enter a cube'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <Button variant='primary' className="mt-5"
                        disabled={status === 'loading'}
                        type="submit"
                    >
                        Add Algorithm
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    )

}
