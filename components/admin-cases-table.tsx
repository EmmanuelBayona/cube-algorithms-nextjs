// import { getCases } from "@/queries/case"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AdminCasesActions } from "./admin-cases-actions";
import { getMethods } from "@/queries/method";
import { getCubes } from "@/queries/cube";
import { getCases, getCasesWithMethodAndCube } from "@/queries/case";
import { CUBE_COLORS } from "@/lib/cubes-constants";


export const AdminCasesTable = async () => {

    const cubes = await getCubes();
    const methods = await getMethods();
    const cases = await getCasesWithMethodAndCube();
    const allCases = await getCases();

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
                                    <AdminCasesActions
                                        caseId={c.id}
                                        caseName={c.name}
                                        cubeName={c.method.cube.name}
                                        methodName={c.method.name}
                                        colorFaces={c.colors as Record<number, keyof typeof CUBE_COLORS>}
                                        cubes={cubes}
                                        methods={methods}
                                        cases={allCases}
                                    />
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
