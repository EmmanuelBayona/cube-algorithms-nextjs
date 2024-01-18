import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { LayersIcon  } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export const NewCaseForm = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
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

                <form className="grid gap-4 py-5">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Cube</Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder='Select a cube' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='2x2'> 2x2 </SelectItem>
                                <SelectItem value='3x3'> 3x3 </SelectItem>
                                <SelectItem value='4x4'> 4x4 </SelectItem>
                                <SelectItem value='Square-1'> Square-1 </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Method</Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder='Select a method' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='F2L'> F2L </SelectItem>
                                <SelectItem value='OLL'> OLL </SelectItem>
                                <SelectItem value='PLL'> PLL </SelectItem>
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
                        />
                    </div>

                    <Button variant='primary' className="mt-5">
                        Add Algorithm
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    )

}