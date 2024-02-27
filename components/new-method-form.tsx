'use client';
import { FormEvent, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { StackIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { DBCubes, DBMethods } from "@/types"
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { addNewMethod } from "@/actions";

export const NewMethodForm = ({ cubes, methods }: { cubes: DBCubes[], methods: DBMethods[] }) => {

    const [cube, setCube] = useState<string>('');
    const [method, setMethod] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

    const onAddNewMethod = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!cube) return showToastError('Cube is required');
        if (!method) return showToastError('Method name is required');
        if (!description) return showToastError('Method description is required');

        // if the method already exists, return an error 
        if (methods.find(m => m.name === method)) return showToastError('Method already exists');

        setStatus('loading')

        const cubeId = cubes.find(c => c.name === cube)?.id;
        if (!cubeId) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        const { success } = await addNewMethod(method, description, cubeId);

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


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex-shrink-0">
                    New Method
                    <StackIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Add a new method</DialogTitle>
                    <DialogDescription>
                        Select a cube and enter a method name to add a one.
                    </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4 py-5" onSubmit={onAddNewMethod} >

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Cube</Label>
                        <Select disabled={cubes.length === 0}
                            value={cube}
                            onValueChange={setCube}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder='Select a cube' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    cubes.map(cube => (
                                        <SelectItem key={cube.id} value={cube.name}>
                                            {cube.name}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="method" className="text-right">Method</Label>
                        <Input
                            className="col-span-3"
                            id="method"
                            name="method"
                            type='text'
                            placeholder='Enter a method'
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Input
                            className="col-span-3"
                            id="description"
                            name="description"
                            type='text'
                            placeholder='Enter a description'
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
