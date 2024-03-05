import { getCases } from "@/queries/case"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AdminCasesActions } from "./admin-cases-actions";


export const AdminCasesTable = async () => {

    const cases = await getCases();

    return (
        <ScrollArea className="h-[500px]">
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
                                <TableCell className="flex justify-start gap-2">
                                    <AdminCasesActions caseId={c.id} />
                                </TableCell>
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
