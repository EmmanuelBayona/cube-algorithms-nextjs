'use client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useNewCube } from "@/hooks/use-new-cube"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { CubeIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils";
import { Input } from "./ui/input"
import { DBCubes } from "@/types";

export const NewCubeForm = ({ cubes }: { cubes: DBCubes[] }) => {

    const {
        onAddNewCube,
        cube,
        setCube,
        description,
        setDescription,
        status
    } = useNewCube({ cubes })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex-shrink-0">
                    New Cube
                    <CubeIcon className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Add a new cube</DialogTitle>
                    <DialogDescription>
                        Enter a cube name to add a new one.
                    </DialogDescription>
                </DialogHeader>

                <form className="grid gap-4 py-5" onSubmit={onAddNewCube}>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cube" className="text-right">Cube</Label>
                        <Input
                            className="col-span-3"
                            id="cube"
                            name="cube"
                            type='text'
                            placeholder='Enter a cube'
                            value={cube}
                            onChange={(e) => setCube(e.target.value)}
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

                    <Button variant='primary'
                        className={cn('mt-5 group',
                            { 'opacity-50 cursor-not-allowed': status === 'loading' }
                        )}
                        type="submit"
                        aria-disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Adding...' : 'Add Cube'}
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
