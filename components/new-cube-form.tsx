import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { CubeIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"

export const NewCubeForm = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
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

                <form className="grid gap-4 py-5">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cube" className="text-right">Cube</Label>
                        <Input
                            className="col-span-3"
                            id="cube"
                            name="cube"
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