'use client';
import { FormEvent, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { LayersIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { DBCases, DBCubes, DBMethods } from "@/types"
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { addNewCase } from "@/actions";

export const NewCaseForm = ({ cubes, methods, cases }: { cubes: DBCubes[], methods: DBMethods[], cases: DBCases[] }) => {

    const [cube, setCube] = useState<string>('');
    const [method, setMethod] = useState<string>('');
    const [caseName, setCaseName] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');

    const cubeId = cube ? cubes.find(c => c.name === cube)?.id : null;
    const filteredMethods = cubeId ? methods.filter(m => m.cubeId === cubeId) : [];

    const onAddNewCase = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!cube) return showToastError('Cube is required');
        if (!method) return showToastError('Method is required');
        if (!caseName) return showToastError('Case is required');

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

        const { success } = await addNewCase(caseName, methodId);

        if (!success) {
            showToastError('Something went wrong');
            setStatus('error');
            return;
        }

        setCube('');
        setMethod('');
        setCaseName('');
        showToastSuccess('Cube added successfully');
        setStatus('success');
    }



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex-shrink-0">
                    New Case
                    <LayersIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Add a new case</DialogTitle>
                    <DialogDescription>
                        Select a cube, method, and enter a case to add a new one.
                    </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4 py-5" onSubmit={onAddNewCase}>

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
                        <Label className="text-right">Method</Label>
                        <Select disabled={filteredMethods.length === 0}
                            value={method}
                            onValueChange={setMethod}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder='Select a method' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    filteredMethods.map(method => (
                                        <SelectItem key={method.id} value={method.name}>
                                            {method.name}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="case" className="text-right">Case</Label>
                        <Input
                            className="col-span-3"
                            id="case"
                            name="case"
                            type='text'
                            placeholder='Enter a cube'
                            value={caseName}
                            onChange={e => setCaseName(e.target.value)}
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
