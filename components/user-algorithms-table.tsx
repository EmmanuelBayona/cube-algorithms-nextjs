import { Table, TableCaption, TableHead, TableHeader, TableRow, TableCell, TableFooter, TableBody } from "./ui/table"

const invoices = [
    {
        id: 1,
        cube: "3x3",
        method: "F2L",
        case: "F2L 1",
        algorithm: "U F' U2 F U2 F' U F",
        date: "2021-09-01",
        likes: 10,
    },
    {
        id: 2,
        cube: "3x3",
        method: "F2L",
        case: "F2L 1",
        algorithm: "U F' U2 F U2 F' U F",
        date: "2021-09-01",
        likes: 10,
    },
    {
        id: 3,
        cube: "3x3",
        method: "F2L",
        case: "F2L 1",
        algorithm: "U F' U2 F U2 F' U F",
        date: "2021-09-01",
        likes: 10,
    },
    {
        id: 4,
        cube: "3x3",
        method: "F2L",
        case: "F2L 1",
        algorithm: "U F' U2 F U2 F' U F",
        date: "2021-09-01",
        likes: 10,
    },
    {
        id: 5,
        cube: "3x3",
        method: "F2L",
        case: "F2L 1",
        algorithm: "U F' U2 F U2 F' U F",
        date: "2021-09-01",
        likes: 10,
    },
    {
        id: 6,
        cube: "3x3",
        method: "F2L",
        case: "F2L 1",
        algorithm: "U F' U2 F U2 F' U F",
        date: "2021-09-01",
        likes: 10,
    },
    {
        id: 7,
        cube: "3x3",
        method: "F2L",
        case: "F2L 1",
        algorithm: "U F' U2 F U2 F' U F",
        date: "2021-09-01",
        likes: 10,
    }
]

export const UserAlgorithmsTable = ({ className }: { className?: string }) => {

    return (
        <Table>
            <TableCaption>Your posted algorithms</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Cube</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Case</TableHead>
                    <TableHead>Algorithm</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Likes</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell>{invoice.cube}</TableCell>
                            <TableCell>{invoice.method}</TableCell>
                            <TableCell>{invoice.case}</TableCell>
                            <TableCell>{invoice.algorithm}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell className="text-right">{invoice.likes}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total algorithms: 7</TableCell>
                    <TableCell colSpan={2} className="text-right">Total likes: 7</TableCell>
                    </TableRow>
            </TableFooter>
        </Table>
    )

}