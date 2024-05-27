"use client"
import { EraserIcon, LayersIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { useCaseForm } from "@/hooks/use-case-form";
import { Input } from "./ui/input";
import { CUBE_COLORS, SVG_FORM_CUBE_VIEWS } from "@/lib/cubes-constants";
import { cn } from "@/lib/utils";

interface CaseFormModalProps {
    triggerComponent?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    caseIdToEdit?: number;
}

export const CaseFormModal = ({
    triggerComponent,
    open,
    onOpenChange,
    caseIdToEdit
}: CaseFormModalProps) => {

    const {
        cubeType,
        setCubeType,
        cubes,
        methodName,
        setMethodName,
        methods,
        caseName,
        setCaseName,
        currentColor,
        setCurrentColor,
        colorsFaces,
        onSelectCubeFace,
        status,
        addNewCase,
        updateCase,
        actionStatus
    } = useCaseForm({ caseIdToEdit });

    const cubeId = cubes.find(c => c.name === cubeType)?.id;
    const cubeMethods = methods.filter(m => m.cubeId === cubeId);
    const selectedCubeSvgView = methods.find(m => m.name === methodName)?.svgView;
    const CubeSvgComponent = selectedCubeSvgView ? SVG_FORM_CUBE_VIEWS[selectedCubeSvgView as keyof typeof SVG_FORM_CUBE_VIEWS] : null;


    return (
        <Dialog
            open={
                open ? open : undefined
            }
            onOpenChange={onOpenChange}
        >
            {
                open === undefined && onOpenChange === undefined
                    ? !!triggerComponent
                        ? <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
                        : <DialogTrigger asChild>
                            <Button>
                                New Case
                                <LayersIcon />
                            </Button>
                        </DialogTrigger>
                    : null
            }


            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Cases</DialogTitle>
                    <DialogDescription>
                        Add a new case or edit an existing one.
                    </DialogDescription>
                </DialogHeader>

                {
                    status === "loading" && (
                        <div className="flex items-center justify-center min-h-52 text-font">
                            loading...
                        </div>
                    )
                }

                {
                    // if we have a caseToEdit, show just if status === 'loading', if not, show the form
                    (caseIdToEdit && status === 'success' || !caseIdToEdit) && (
                        <form
                            className="grid gap-4 py-5"
                            onSubmit={(e) => (caseIdToEdit ? updateCase(e, caseIdToEdit) : addNewCase(e))}
                        >
                            <div
                                className="grid grid-cols-4 items-center gap-4"
                            >
                                <Label className="text-right">Cube</Label>
                                <Select
                                    disabled={cubes.length === 0}
                                    value={cubeType}
                                    onValueChange={setCubeType}
                                >
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select a cube" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {cubes.map((cube) => (
                                            <SelectItem key={cube.id} value={cube.name}>
                                                {cube.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">Method</Label>
                                <Select
                                    disabled={cubeMethods.length === 0}
                                    value={methodName}
                                    onValueChange={setMethodName}
                                >
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select a method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            cubeMethods.map((method) => (
                                                <SelectItem key={method.id} value={method.name}>
                                                    {method.name}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="case" className="text-right">
                                    Case
                                </Label>
                                <Input
                                    className="col-span-3"
                                    id="case"
                                    name="case"
                                    type="text"
                                    placeholder="Enter a cube"
                                    value={caseName}
                                    onChange={(e) => setCaseName(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center justify-center gap-4">
                                <div className="col-span-4 grid grid-cols-4 gap-4 items-center">
                                    <Label className="text-right">Colors</Label>
                                    <div className="flex gap-2 col-span-3">
                                        {Object.keys(CUBE_COLORS).map((color) => (
                                            <label key={color}>
                                                <input
                                                    className="hidden peer"
                                                    type="radio"
                                                    name="color"
                                                    value={color}
                                                    checked={currentColor === color}
                                                    onChange={() => setCurrentColor(color as keyof typeof CUBE_COLORS)}
                                                />
                                                <div
                                                    className={cn("w-6 h-6 rounded-md cursor-pointer ring-2 ring-dark opacity-20 peer-checked:opacity-100", {
                                                        'hidden': color === "black",
                                                        'flex items-center justify-center': color === "default"
                                                    })}
                                                    style={{
                                                        backgroundColor: CUBE_COLORS[color as keyof typeof CUBE_COLORS]
                                                    }}
                                                >
                                                    {
                                                        color === "default" &&
                                                        <EraserIcon className="w-4 h-4 text-font" />
                                                    }
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto h-[200px]">
                                {
                                    CubeSvgComponent &&
                                    <CubeSvgComponent
                                        size={200}
                                        background="transparent"
                                        onClickFace={onSelectCubeFace}
                                        colors={colorsFaces}
                                    />
                                }
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className={cn({
                                    'opacity-50 cursor-not-allowed': actionStatus === 'loading'
                                })}
                            >
                                {
                                    actionStatus === 'idle' && caseIdToEdit ? "Update Case" : "Add Case"
                                }
                                {
                                    actionStatus === 'loading' && "Loading..."
                                }
                            </Button>

                        </form>

                    )
                }

            </DialogContent>
        </Dialog >

    )

}
