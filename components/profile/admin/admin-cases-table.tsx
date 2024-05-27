import { Table, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../ui/table"
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";
import { getCases, getCasesWithMethodAndCube } from "@/queries/case";
import { CaseTableBody } from "./case-table-body";


export const AdminCasesTable = async () => {

    const casesWithMethodAndCube = await getCasesWithMethodAndCube();
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


                <CaseTableBody
                    casesWithMethodAndCube={casesWithMethodAndCube}
                />

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={7}>
                            Total cases: {cases.length}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <ScrollBar orientation="vertical" />
            <ScrollBar orientation="horizontal" />

        </ScrollArea>
    )

}
