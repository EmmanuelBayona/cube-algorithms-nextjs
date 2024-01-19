import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { StackIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { DBCubes } from "@/types"

export const NewMethodForm = ({ cubes }: { cubes: DBCubes[] }) => {

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

                <form className="grid gap-4 py-5">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Cube</Label>
                        <Select disabled={ cubes.length === 0 }>
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
                            placeholder='Enter a cube'
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