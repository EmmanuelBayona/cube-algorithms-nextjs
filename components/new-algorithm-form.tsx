'use client';
import { FormEvent, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { CubeIcon, PlusIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { showToastError, showToastSuccess } from "@/lib/toaster";
import { DBAlgs, DBCases, DBCubes, DBMethods } from "@/types";
import { addNewAlg } from "@/actions";
import { useNewAlgorithm } from "@/hooks/use-new-algorithm";
import { cn } from "@/lib/utils";

interface NewAlgorithmFormProps {
    cubes: DBCubes[];
    methods: DBMethods[];
    cases: DBCases[];
    algorithms: DBAlgs[];
}

export const NewAlgorithmForm = ({ cubes, methods, cases, algorithms }: NewAlgorithmFormProps) => {

    const {
        onAddNewAlgorithm,
        filteredMethods,
        cube,
        setCube,
        method,
        setMethod,
        filteredCases,
        caseName,
        setCaseName,
        algorithm,
        setAlgorithm,
        status
    } = useNewAlgorithm({ cubes, methods, cases, algorithms });

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

                    <Button variant='primary'
                        className={cn('mt-5 group',
                            { 'opacity-50 cursor-not-allowed': status === 'loading' }
                        )}
                        type="submit"
                        aria-disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Adding...' : 'Add algorithm'}
                        <CubeIcon
                            className={cn('w-5 h-5 hidden',
                                { 'animate-spin block': status === 'loading' }
                            )}
                        />
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    )

}
