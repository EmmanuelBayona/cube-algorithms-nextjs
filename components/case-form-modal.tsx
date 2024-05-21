import { LayersIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";

interface CaseFormModalProps {
    triggerComponent?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const CaseFormModal = ({
    triggerComponent,
    open,
    onOpenChange
}: CaseFormModalProps) => {

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
                    <DialogTitle>Add a new case</DialogTitle>
                    <DialogDescription>
                        Select a cube, method, and enter a case to add a new
                        one.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="grid gap-4 py-5"
                >
                    <div
                        className="grid grid-cols-4 items-center gap-4"
                    >
                        <Label className="text-right">Cube</Label>
                        <Select
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select a cube" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="3x3x3">3x3x3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </form>

                {/* <form className="grid gap-4 py-5" onSubmit={(e) => { !editForm ? onAddNewCase(e) : onUpdateCase(e, initialCaseId) }}> */}
                {/*     <div className="grid grid-cols-4 items-center gap-4"> */}
                {/*         <Label className="text-right">Cube</Label> */}
                {/*         <Select */}
                {/*             disabled={cubes.length === 0} */}
                {/*             value={cube} */}
                {/*             onValueChange={setCube} */}
                {/*         > */}
                {/*             <SelectTrigger className="col-span-3"> */}
                {/*                 <SelectValue placeholder="Select a cube" /> */}
                {/*             </SelectTrigger> */}
                {/*             <SelectContent> */}
                {/*                 {cubes.map((cube) => ( */}
                {/*                     <SelectItem key={cube.id} value={cube.name}> */}
                {/*                         {cube.name} */}
                {/*                     </SelectItem> */}
                {/*                 ))} */}
                {/*             </SelectContent> */}
                {/*         </Select> */}
                {/*     </div> */}
                {/**/}
                {/*     <div className="grid grid-cols-4 items-center gap-4"> */}
                {/*         <Label className="text-right">Method</Label> */}
                {/*         <Select */}
                {/*             disabled={filteredMethods.length === 0} */}
                {/*             value={method} */}
                {/*             onValueChange={setMethod} */}
                {/*         > */}
                {/*             <SelectTrigger className="col-span-3"> */}
                {/*                 <SelectValue placeholder="Select a method" /> */}
                {/*             </SelectTrigger> */}
                {/*             <SelectContent> */}
                {/*                 {filteredMethods.map((method) => ( */}
                {/*                     <SelectItem */}
                {/*                         key={method.id} */}
                {/*                         value={method.name} */}
                {/*                     > */}
                {/*                         {method.name} */}
                {/*                     </SelectItem> */}
                {/*                 ))} */}
                {/*             </SelectContent> */}
                {/*         </Select> */}
                {/*     </div> */}
                {/**/}
                {/*     <div className="grid grid-cols-4 items-center gap-4"> */}
                {/*         <Label htmlFor="case" className="text-right"> */}
                {/*             Case */}
                {/*         </Label> */}
                {/*         <Input */}
                {/*             className="col-span-3" */}
                {/*             id="case" */}
                {/*             name="case" */}
                {/*             type="text" */}
                {/*             placeholder="Enter a cube" */}
                {/*             value={caseName} */}
                {/*             onChange={(e) => setCaseName(e.target.value)} */}
                {/*         /> */}
                {/*     </div> */}
                {/**/}
                {/*     <div className="grid grid-cols-4 items-center justify-center gap-4"> */}
                {/*         <div className="col-span-4 grid grid-cols-4 gap-4 items-center"> */}
                {/*             <Label className="text-right">Colors</Label> */}
                {/*             <div className="flex gap-2 col-span-3"> */}
                {/*                 {Object.keys(CUBE_COLORS).map((color) => ( */}
                {/*                     <div */}
                {/*                         key={color} */}
                {/*                         className={cn( */}
                {/*                             buttonVariants({ */}
                {/*                                 variant: "default", */}
                {/*                                 size: "icon", */}
                {/*                             }), */}
                {/*                             "w-7 h-7 cursor-pointer", */}
                {/*                             { */}
                {/*                                 "opacity-25": */}
                {/*                                     currentColor !== color, */}
                {/*                                 hidden: color === "black", // hide black color button */}
                {/*                             }, */}
                {/*                             { */}
                {/*                                 "opacity-25 cursor-not-allowed": */}
                {/*                                     !selectedView, */}
                {/*                             } */}
                {/*                         )} */}
                {/*                         style={{ */}
                {/*                             backgroundColor: */}
                {/*                                 CUBE_COLORS[ */}
                {/*                                 color as keyof typeof CUBE_COLORS */}
                {/*                                 ], */}
                {/*                         }} */}
                {/*                         onClick={() => */}
                {/*                             setCurrentColor( */}
                {/*                                 color as keyof typeof CUBE_COLORS */}
                {/*                             ) */}
                {/*                         } */}
                {/*                     > */}
                {/*                         <EraserIcon */}
                {/*                             className={cn({ */}
                {/*                                 hidden: color !== "default", */}
                {/*                             })} */}
                {/*                         /> */}
                {/*                     </div> */}
                {/*                 ))} */}
                {/*             </div> */}
                {/*         </div> */}
                {/*         <div className="col-span-4 mx-auto h-[200px]"> */}
                {/*             {selectedView && ( */}
                {/*                 <CubeView */}
                {/*                     size={200} */}
                {/*                     background="transparent" */}
                {/*                     clickableFaces={true} */}
                {/*                     onClickFace={onSelectFace} */}
                {/*                     colors={colorsFaces} */}
                {/*                 /> */}
                {/*             )} */}
                {/*         </div> */}
                {/*     </div> */}
                {/**/}
                {/*     <Button */}
                {/*         variant="primary" */}
                {/*         className={cn("mt-5 group", { */}
                {/*             "opacity-50 cursor-not-allowed": */}
                {/*                 status === "loading", */}
                {/*         })} */}
                {/*         type="submit" */}
                {/*         aria-disabled={status === "loading"} */}
                {/*     > */}
                {/*         {status === "loading" ? "Adding..." : "Add Algorithm"} */}
                {/*         <CubeIcon */}
                {/*             className={cn("w-5 h-5 hidden", { */}
                {/*                 "animate-spin block": status === "loading", */}
                {/*             })} */}
                {/*         /> */}
                {/*     </Button> */}
                {/* </form> */}
            </DialogContent>
        </Dialog >

    )

}
