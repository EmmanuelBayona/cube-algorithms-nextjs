
import { getMethods } from "@/queries/method"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table"
import { ScrollArea, ScrollBar } from "./ui/scroll-area";


export const AdminMethodsTable = async () => {

    const methods = await getMethods();

    return (
        <ScrollArea className="w-1/2 h-96">
            <Table>
                <TableCaption>Uploaded Methods</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Type of cube view</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        methods.map(method => (
                            <TableRow key={method.id}>
                                <TableCell>{method.name}</TableCell>
                                <TableCell>{method.description}</TableCell>
                                <TableCell>{method.svgView}</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={7}>
                            Total algorithms: {methods.length}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>

            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )

}
