import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { PlusIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"

export const NewAlgorithmForm = () => {

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
                        <Label className="text-right">Case</Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder='Select a case' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='F2L-1'> F2L-1 </SelectItem>
                                <SelectItem value='F2L-2'> F2L-2 </SelectItem>
                                <SelectItem value='F2L-3'> F2L-3 </SelectItem>
                                <SelectItem value='F2L-4'> F2L-4 </SelectItem>
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
                            placeholder='Enter a cube'
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center -mt-3">
                        <small className="text-xs col-start-2 col-span-3 text-pretty text-violet-100/70 pl-2">
                            Please separate moves with a space. For example: R U R&apos; U&apos;
                        </small>
                    </div>

                    <Button variant='primary' className="mt-5">
                        Add Algorithm
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    )

}