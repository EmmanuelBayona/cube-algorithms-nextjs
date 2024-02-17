'use client';
import { FormEvent, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { DBAlgs, DBCases, DBCubes, DBMethods } from "@/types";
import { addNewAlg } from "@/actions";

interface NewAlgorithmFormProps {
    cubes: DBCubes[];
    methods: DBMethods[];
    cases: DBCases[];
    algorithms: DBAlgs[];
}

export const NewAlgorithmForm = ({ cubes, methods, cases, algorithms }: NewAlgorithmFormProps) => {

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

        const { success } = await addNewAlg(algorithm, caseId);

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


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='primary' className="flex-shrink-0">
                    New Algorithm
                    <PlusIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Add a new algorithm</DialogTitle>
                    <DialogDescription>
                        Select a cube, method, and case to add a new algorithm.
                    </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4 py-5" onSubmit={onAddNewAlgorithm} >

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
                        <Label className="text-right">Case</Label>
                        <Select disabled={filteredCases.length === 0}
                            value={caseName}
                            onValueChange={setCaseName}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder='Select a case' />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    filteredCases.map(c => (
                                        <SelectItem key={c.id} value={c.name}>
                                            {c.name}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="algorithm" className="text-right">Alg.</Label>
                        <Input
                            className="col-span-3"
                            id="algorithm"
                            name="algorithm"
                            type='text'
                            placeholder='Enter an algorithm'
                            pattern="[UDLRFBudlrfbMESxyz'2 ]*"
                            title="Only moves and rotations are allowed. For example: R U R' U'"
                            value={algorithm}
                            onChange={e => setAlgorithm(e.currentTarget.value)}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center -mt-3">
                        <small className="text-xs col-start-2 col-span-3 text-pretty text-violet-100/70 pl-2">
                            Please separate moves with a space. For example: R U R&apos; U&apos;
                        </small>
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
