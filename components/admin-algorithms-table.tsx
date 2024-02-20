import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableCell, TableFooter, TableBody } from "./ui/table"
import prisma from "@/lib/prisma"

export const AdminAlgorithmsTable = async () => {

    const uploadedAlgorithms = await prisma.algorithm.findMany({
        include: {
            case: {
                include: {
                    method: {
                        include: {
                            cube: true
                        }
                    }
                }
            }
        }
    })

    if (uploadedAlgorithms.length === 0) return null;

    const dateTimeFormatUS = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <Table className="mt-20">
            <TableCaption>Algorithms to verify</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Cube</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Case</TableHead>
                    <TableHead>Algorithm</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    uploadedAlgorithms.map((algorithm) => (
                        <TableRow key={algorithm.id}>
                            <TableCell>{algorithm.case.method.cube.name}</TableCell>
                            <TableCell>{algorithm.case.method.name}</TableCell>
                            <TableCell>{algorithm.case.name}</TableCell>
                            <TableCell>{algorithm.algorithm}</TableCell>
                            <TableCell>{dateTimeFormatUS.format(algorithm.createdAt)}</TableCell>
                            <TableCell className="flex justify-start gap-2" >
                                <Button variant='success' size='icon'>
                                    <CheckIcon />
                                </Button>
                                <Button variant='danger' size='icon'>
                                    <Cross1Icon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={6}>Total algorithms: {uploadedAlgorithms.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )

}
