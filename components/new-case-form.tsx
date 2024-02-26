'use client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button, buttonVariants } from "./ui/button"
import { CubeIcon, EraserIcon, LayersIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { DBCases, DBCubes, DBMethods } from "@/types"
import { CubeSvg } from "./ui/cube-svg";
import { cn } from "@/lib/utils";
import { CUBE_COLORS } from "@/lib/cubes-constants";
import { useNewCase } from "@/hooks/use-new-case";



export const NewCaseForm = ({ cubes, methods, cases }: { cubes: DBCubes[], methods: DBMethods[], cases: DBCases[] }) => {

    const {
        cube,
        setCube,
        method,
        setMethod,
        caseName,
        setCaseName,
        currentColor,
        setCurrentColor,
        onSelectFace,
        colorsFaces,
        onAddNewCase,
        filteredMethods,
        status
    } = useNewCase({ cubes, methods, cases });

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

                    <div className="grid grid-cols-4 items-center justify-center gap-4">
                        <div className="col-span-4 grid grid-cols-4 gap-4">
                            <Label className="text-right">Color</Label>
                            <div className="flex gap-2 col-span-3">
                                {
                                    Object.keys(CUBE_COLORS).map(color => (
                                        <div key={color}
                                            className={cn(buttonVariants({ variant: 'default', size: 'icon' }), 'w-7 h-7 cursor-pointer', {
                                                'opacity-25': currentColor !== color,
                                                'hidden': color === 'black' // hide black color button
                                            })}
                                            style={{ backgroundColor: CUBE_COLORS[color as keyof typeof CUBE_COLORS] }}
                                            onClick={() => setCurrentColor(color as keyof typeof CUBE_COLORS)}
                                        >
                                            <EraserIcon className={cn({ 'hidden': color !== 'default' })} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-span-4 mx-auto">
                            <CubeSvg
                                size={200}
                                background="transparent"
                                clickableFaces={true}
                                onClickFace={onSelectFace}
                                colors={colorsFaces}
                            />
                        </div>
                    </div>


                    <Button variant='primary'
                        className={cn('mt-5 group',
                            { 'opacity-50 cursor-not-allowed': status === 'loading' }
                        )}
                        type="submit"
                        aria-disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Adding...' : 'Add Algorithm'}
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
