import { auth } from "@clerk/nextjs"
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableCell, TableFooter, TableBody } from "./ui/table"
import prisma from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { CubeSvg } from "./ui/cube-svg"
import { CUBE_COLORS } from "@/lib/cubes-constants"

export const UserAlgorithmsTable = async () => {

    const { userId } = auth()
    if (!userId) return null;

    const uploadedAlgorithms = await prisma.algorithm.findMany({
        where: {
            userId: userId
        },
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
        <Table>
            <TableCaption>Your posted algorithms</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Cube</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Case</TableHead>
                    <TableHead>Alg. Image</TableHead>
                    <TableHead>Algorithm</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    {/* <TableHead className="text-right">Likes</TableHead> */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    uploadedAlgorithms.map((algorithm) => (
                        <TableRow key={algorithm.id}>
                            <TableCell>{algorithm.case.method.cube.name}</TableCell>
                            <TableCell>{algorithm.case.method.name}</TableCell>
                            <TableCell>{algorithm.case.name}</TableCell>
                            <TableCell>
                                <CubeSvg
                                    size={80}
                                    background="transparent"
                                    colors={algorithm.case.colors as Record<number, keyof typeof CUBE_COLORS>}
                                />
                            </TableCell>
                            <TableCell>{algorithm.algorithm}</TableCell>
                            <TableCell>{dateTimeFormatUS.format(algorithm.createdAt)}</TableCell>
                            <TableCell
                                className={cn({ 'text-green-500': algorithm.isApproved, 'text-amber-500': !algorithm.isApproved })}
                            >
                                {algorithm.isApproved ? 'Approved' : 'Pending'}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={7}>Total algorithms: {uploadedAlgorithms.length}</TableCell>
                    {/* <TableCell colSpan={2} className="text-right">Total likes: 0</TableCell> */}
                </TableRow>
            </TableFooter>
        </Table>
    )

}
