import { getCases } from "@/queries/case"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { ScrollArea, ScrollBar } from "./ui/scroll-area";


export const AdminCasesTable = async () => {

    const cases = await getCases();

    return (
        <ScrollArea className="lg:w-1/2 h-96">
            <Table className="rounded-3xl">
                <TableCaption>Uploaded Cases</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Case</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        cases.map(c => (
                            <TableRow key={c.id}>
                                <TableCell>{c.name}</TableCell>
                                <TableCell>image</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={7}>
                            Total cases: {cases.length}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )

}
